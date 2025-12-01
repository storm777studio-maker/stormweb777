// كود دخول الأدمن
const ADMIN_PASSWORD = "stu777dio";

// قائمة الفيديوهات (يمكن استبدالها بقاعدة بيانات حقيقية)
let videos = [];
let isAdminMode = false;

// الانتقال إلى قسم تسجيل دخول الأدمن
function scrollToAdminLogin() {
    const adminLoginForm = document.getElementById("adminLoginForm");
    adminLoginForm.style.display = "block";
    adminLoginForm.scrollIntoView({ behavior: 'smooth' });
}

// التحقق من كود الأدمن
function checkAdmin() {
    const password = document.getElementById("adminPassword").value;
    if (password === ADMIN_PASSWORD) {
        document.getElementById("adminPanel").style.display = "block";
        isAdminMode = true;
        alert("تم تسجيل الدخول بنجاح! يمكنك الآن رفع وحذف الفيديوهات.");
        updateVideoList();
    } else {
        alert("كود الأدمن خاطئ
