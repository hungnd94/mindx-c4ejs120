let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?

// Khi chạy lệnh trên thì trình duyệt thông báo toàn bộ nội dung
// của array arr, bao gồm cả nội dung của hàm f
// Lý do có thể là vì từ khóa this đại diện cho object mà chứa 
// function, cụ thể là arr.