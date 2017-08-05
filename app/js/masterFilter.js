angular.module('brumecms').filter('ucf', function($http, $q, $location) {
  return function(word)
  {
      return word.substring(0,1).toUpperCase() + word.slice(1);
  }
});
angular.module('brumecms').filter('pluralize', function($http, $q, $location) {
  return function(word, items)
    {
        for (i in items)
        {
            if (word == items[i].word) return items[i].plural;
        }
    }
});
angular.module('brumecms').filter('ucf_sentence', function($http, $q, $location) {
  return function(sentence)
      {
          var word_arr = sentence.split(" ");
          var new_sentence = '';

          for (i in word_arr)
          {
              new_sentence += word_arr[i].substring(0,1).toUpperCase()+word_arr[i].slice(1) + " ";
          }
          return new_sentence;
      }
});

angular.module('brumecms').filter('unreadable', function($http, $q, $location) {
  return function(text)
    {
        var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                       'n','o','p','q','r','s','t','u','v','w','x','y','z'];
        var sentence_final = '';
        var middle_tmp = '';
        var sentence_arr = text.split(" ");

        for (i in sentence_arr)
        {
            last = sentence_arr[i].substr(sentence_arr[i].length-1,sentence_arr[i].length-2);

            if (last == '.' || last == ',' || last == ':' || last == ';')
            {
                last = sentence_arr[i].substr(sentence_arr[i].length-2, sentence_arr[i].length-3);
                middle = sentence_arr[i].substr(1,sentence_arr[i].length-3).split("");
            } else {
                middle = sentence_arr[i].substr(1,sentence_arr[i].length-2).split("");
            }

            middle_tmp = '';

            for (j in middle)
            {
                middle[j] = letters[Math.floor(Math.random() * letters.length)];
                middle_tmp += middle[j];
            }

            sentence_final += sentence_arr[i].substr(0,1) + middle_tmp + last + " ";
        }
        return sentence_final;
    }
});

angular.module('brumecms').filter('almost_readable', function($http, $q, $location) {
  return function(text)
    {
        var sentence_final = '';
        var shuffled = '';
        var sentence_arr = text.split(" ");

        for (i in sentence_arr)
        {
            last = sentence_arr[i].substr(sentence_arr[i].length-1,sentence_arr[i].length-2);

            if (last == '.' || last == ',' || last == ':' || last == ';' || last == '?' || last == '!')
            {
                last = sentence_arr[i].substr(sentence_arr[i].length-2, sentence_arr[i].length-3);
                middle = sentence_arr[i].substr(1,sentence_arr[i].length-3).split("");
            } else {
                middle = sentence_arr[i].substr(1,sentence_arr[i].length-2).split("");
            }

            if (middle.length > 0)
            {
                for (var j = middle.length - 1; j > 0; j--)
                {
                    var k = Math.floor(Math.random() * (j + 1));
                    var tmp = middle[j];
                    middle[j] = middle[k];
                    middle[k] = tmp;
                }
                shuffled = middle.join('');
                sentence_final += sentence_arr[i].substr(0,1) + shuffled + last + " ";
            } else {
                sentence_final += sentence_arr[i] + " ";
            }
        }
        return sentence_final;
    }
});
