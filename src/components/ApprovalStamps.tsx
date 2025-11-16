import { ExternalLink } from 'lucide-react';

interface ApprovalStampsProps {
  mahareraUrl?: string;
  sbiApprovedUrl?: string;
}

export function ApprovalStamps({
  mahareraUrl = 'https://saraekadant.blob.core.windows.net/mediasaraekadant/MBVA_White_Wt_No.jpg',
  sbiApprovedUrl = 'https://saraekadant.blob.core.windows.net/mediasaraekadant/SBI%20Approved%20-Sara%20Ekdant.jpg'
}: ApprovalStampsProps) {
  return (
    <>
      {/* Desktop Layout - Top Left */}
      <div className="hidden md:flex absolute md:top-20 md:left-8 z-20 gap-4">
        {/* MahaRERA Approval Stamp */}
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200/50 p-3 transition-transform hover:scale-105">
          <a
            href={mahareraUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            aria-label="View MahaRERA Approval"
          >
            <img
              src={mahareraUrl}
              alt="MahaRERA Approved"
              className="w-20 h-20 object-contain"
              loading="eager"
            />
          </a>
        </div>

        {/* SBI Approved Stamp */}
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200/50 p-3 transition-transform hover:scale-105">
          <a
            href={sbiApprovedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            aria-label="View SBI Approval"
          >
            <img
              src={sbiApprovedUrl}
              alt="SBI Approved"
              className="w-20 h-20 object-contain"
              loading="eager"
            />
          </a>
        </div>
      </div>

      {/* Mobile Layout - Top Left */}
      <div className="md:hidden absolute top-24 left-4 z-20 flex gap-2">
        {/* MahaRERA Approval Stamp */}
        <div className="bg-white/95 backdrop-blur-sm rounded shadow-md border border-gray-200/50 p-2">
          <a
            href={mahareraUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            aria-label="View MahaRERA Approval"
          >
            <img
              src={mahareraUrl}
              alt="MahaRERA Approved"
              className="w-12 h-12 object-contain"
              loading="eager"
            />
          </a>
        </div>

        {/* SBI Approved Stamp */}
        <div className="bg-white/95 backdrop-blur-sm rounded shadow-md border border-gray-200/50 p-2">
          <a
            href={sbiApprovedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            aria-label="View SBI Approval"
          >
            <img
              src={sbiApprovedUrl}
              alt="SBI Approved"
              className="w-12 h-12 object-contain"
              loading="eager"
            />
          </a>
        </div>
      </div>
    </>
  );
}
