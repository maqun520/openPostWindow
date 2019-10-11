openWindow(name) {
  var iWidth = 1100; //弹出窗口的宽度;
  var iHeight = 550; //弹出窗口的高度;
  var iTop = (window.screen.availHeight - 30 - iHeight) / 2; //获得窗口的垂直位置;
  var iLeft = (window.screen.availWidth - 10 - iWidth) / 2; //获得窗口的水平位置;
  window.open(
    "about:blank",
    name,
    "height=" +
      iHeight +
      ", width=" +
      iWidth +
      ", top=" +
      iTop +
      ", left=" +
      iLeft +
      ",toolbar=no, menubar=no,  scrollbars=yes,resizable=yes,location=no, status=no"
  );
},
openPostWindow(url, data, name) {
  const that = this;
  var tempForm = document.createElement("form");
  tempForm.id = "tempForm1";
  tempForm.method = "post";
  tempForm.action = url;
  tempForm.target = name;
  // var hideInput = document.createElement("input");
  // hideInput.type = "hidden";
  // hideInput.name = "source";
  // hideInput.value = data;
  // tempForm.appendChild(hideInput); //增加提交监听 处理浏览器的兼容性
  for (let key in data) {
    var hideInput = document.createElement("input");
    hideInput.type = "hidden";
    hideInput.name = key;
    hideInput.value = data[key];
    tempForm.appendChild(hideInput);
  }

  if (window.attachEvent) {
    tempForm.attachEvent("onsubmit", function() {
      that.openWindow(name);
    });
  } else if (window.addEventListener) {
    tempForm.addEventListener("onsubmit", function() {
      that.openWindow(name);
    });
  }
  document.body.appendChild(tempForm); //触发监听 处理浏览器的兼容性
  if (tempForm.fireEvent) {
    tempForm.fireEvent("onsubmit");
  } else {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("onsubmit", true, true);
    tempForm.dispatchEvent(evt);
  }
  tempForm.submit();
  document.body.removeChild(tempForm);
},
