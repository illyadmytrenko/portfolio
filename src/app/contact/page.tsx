import { ContactBlobs } from "../common/constants/contact-blobs";
import { BlobContact } from "../components/blob/blob-contact";

export default function Contact() {
  return (
    <div className="mx-auto flex flex-col sm:flex-row items-center flex-wrap justify-center gap-10">
      {ContactBlobs.map((blob) => (
        <BlobContact
          blob={blob}
          key={blob.src}
          className="w-fit sm:w-[45%] lg:w-[30%]"
        />
      ))}
    </div>
  );
}
