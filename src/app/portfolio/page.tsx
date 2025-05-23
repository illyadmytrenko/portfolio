import { BlobsSrc } from "../common/constants/blobs-src";
import { BlobPortfolio } from "../components/blob/blob-portfolio";

export default function Portfolio() {
  return (
    <div className="mx-auto sm:mx-0 w-fit sm:w-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {BlobsSrc.map((blob) => (
        <BlobPortfolio blob={blob} key={blob.src} />
      ))}
    </div>
  );
}
