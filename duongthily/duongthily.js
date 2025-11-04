document.getElementById('searchForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const keyword = document.getElementById('keyword').value.trim();
  if (!keyword) return;

  const res = await fetch(`http://localhost:1880/timkiem?q=${encodeURIComponent(keyword)}`);
  const data = await res.json();

  const div = document.getElementById('result');

  if (!data || data.length === 0) {
    div.innerHTML = '<p>Không tìm thấy sinh viên nào.</p>';
    return;
  }

  div.innerHTML = '<h3>Kết quả:</h3>' + data.map(s => `
    <div class="sv-card">
      <p><b>Mã SV:</b> ${s.MaSV}</p>
      <p><b>Họ tên:</b> ${s.HoTen}</p>
      <p><b>Ngày sinh:</b> ${new Date(s.NgaySinh).toLocaleDateString('vi-VN')}</p>
      <p><b>Giới tính:</b> ${s.GioiTinh}</p>
      <p><b>Lớp:</b> ${s.Lop}</p>
      <p><b>Địa chỉ:</b> ${s.DiaChi}</p>
      <p><b>SĐT:</b> ${s.SDT}</p>
    </div>
  `).join('');
});
