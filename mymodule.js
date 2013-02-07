/*
natDays = [
  [1, 26, 'au'], [2, 6, 'nz'], [3, 17, 'ie'],
  [4, 27, 'za'], [5, 25, 'ar'], [6, 6, 'se'],
  [7, 4, 'us'], [8, 17, 'id'], [9, 7, 'br'],
  [10, 1, 'cn'], [11, 22, 'lb'], [12, 12, 'ke']
];

function nationalDays(date) {
    for (i = 0; i < natDays.length; i++) {
      if (date.getMonth() == natDays[i][0] - 1
          && date.getDate() == natDays[i][1]) {
        return [false, natDays[i][2] + '_day'];
      }
    }
  return [true, ''];
}

function noWeekendsOrHolidays(date) {
    var noWeekend = $.datepicker.noWeekends(date);
    if (noWeekend[0]) {
        return nationalDays(date);
    } else {
        return noWeekend;
    }
}

------------
function noWeekendsOrHolidays(date) {
    var noWeekend = $.datepicker.noWeekends(date);
    if (noWeekend[0]) {
      for (i = 0; i < natDays.length; i++) {
        if (date.getMonth() == natDays[i][0] - 1
          && date.getDate() == natDays[i][1]) {
            return [false, natDays[i][2] + '_day'];
            }
      }
      return [true, ''];
    } else {
        return noWeekend;
    }
}
*/
natDays = [
  [1, 26, 'au'], [2, 6, 'nz'], [3, 17, 'ie'],
  [4, 27, 'za'], [5, 25, 'ar'], [6, 6, 'se'],
  [7, 4, 'us'], [8, 17, 'id'], [9, 7, 'br'],
  [10, 1, 'cn'], [11, 22, 'lb'], [12, 12, 'ke']
];

//alert(Drupal.settings.mymodule.my_vars.drupal_var1);


(function ($) {
Drupal.behaviors.reserv = {
  attach: function (context) {
    alert(Drupal.settings.mymodule.my_vars.drupal_var1);
    for (var id in Drupal.settings.datePopup) {
      //Drupal.settings.datePopup[id].settings.beforeShowDay =
          function (date){
            var noWeekend = $.datepicker.noWeekends(date);
            if (noWeekend[0]) {
                for (i = 0; i < natDays.length; i++) {
                  if (date.getMonth() == natDays[i][0] - 1
                    && date.getDate() == natDays[i][1]) {
                      return [false, natDays[i][2] + '_day'];
                    }
                  }
                return [true, ''];
            } else {
            return noWeekend;
            }
          }

        
        
    }
  }
};
})(jQuery);