export default function Service() {
  return (
    <>
      <h1 className="text-4xl text-center text-blue-700 mb-10">Service</h1>

      <div className="container mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-3">
        {/* บริการ 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
          <img
            src="/images/icons/delivery.png"
            alt="จัดส่งสินค้า"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2">จัดส่งรวดเร็ว</h2>
          <p className="text-gray-600">
            จัดส่งสินค้าทั่วประเทศภายใน 1-3 วันทำการ พร้อมระบบติดตามสถานะการจัดส่ง
          </p>
        </div>

        {/* บริการ 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
          <img
            src="/images/icons/repair.png"
            alt="ซ่อมรองเท้า"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2">บริการซ่อมรองเท้า</h2>
          <p className="text-gray-600">
            ให้บริการซ่อมพื้น เปลี่ยนเชือก เย็บซ่อมรองเท้าโดยช่างมืออาชีพ
          </p>
        </div>

        {/* บริการ 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
          <img
            src="/images/icons/size-guide.png"
            alt="แนะนำขนาด"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2">แนะนำขนาดรองเท้า</h2>
          <p className="text-gray-600">
            มีคู่มือแนะนำขนาดรองเท้าที่แม่นยำ เพื่อให้คุณใส่ได้พอดีทุกคู่
          </p>
        </div>
      </div>
    </>
  );
}
