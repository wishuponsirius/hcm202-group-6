import ClickableImage from './ClickableImage';

interface DocumentViewerProps {
  images: { src: string; alt: string }[];
}

export default function DocumentViewer({ images }: DocumentViewerProps) {
  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold font-heading text-ink text-center mb-6">Tư liệu lịch sử</h3>
      <p className="text-sm text-sepia-light text-center mb-6 font-accent italic">
        Nhấn vào hình ảnh để xem chi tiết
      </p>

      <div className={`grid gap-4 ${images.length >= 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : images.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 max-w-2xl mx-auto'}`}>
        {images.map((img, idx) => (
          <div key={idx} className="station-card p-3 overflow-hidden">
            <ClickableImage
              src={img.src}
              alt={img.alt}
              className="w-full rounded-sm overflow-hidden"
              imgClassName="w-full h-56 md:h-64 object-cover rounded-sm"
            />
            <p className="text-xs text-sepia-light mt-2 text-center font-accent italic line-clamp-2">
              {img.alt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
