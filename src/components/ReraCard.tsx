import { ExternalLink } from 'lucide-react';

interface ReraCardProps {
  qrCodeUrl?: string;
  projectTitle?: string;
  reraNumber?: string;
  reraWebUrl?: string;
}

export function ReraCard({
  qrCodeUrl = 'https://saraekadant.blob.core.windows.net/mediasaraekadant/QR%20Code%20RERA%20Sara%20Ekadant.jpg',
  projectTitle = 'Sara Ekadant',
  reraNumber = 'P52100080513',
  reraWebUrl = 'https://maharerait.mahaonline.gov.in/ProjectSummaryView/ProjectSummaryQRCodeView?id=Q2VydGlmaWNhdGVObz1QNTIxMDAwODA1MTMmU2NhbnR5cGU9UHJvbW90ZXJMb2dpblFSQ29kZQ=='
}: ReraCardProps) {
  return (
    <div className="hidden md:block absolute md:top-20 md:right-8 z-20 max-w-sm">
      <div className="bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-sm rounded-lg shadow-2xl border border-gray-200/50 p-4 md:p-6">
        {/* Header with QR Code and Title */}
        <div className="flex items-start gap-4 mb-4">
          {/* QR Code */}
          <div className="flex-shrink-0">
            <a
              href={reraWebUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105"
              aria-label="View MahaRERA Project Details"
            >
              <img
                src={qrCodeUrl}
                alt="RERA QR Code"
                className="w-20 h-20 md:w-24 md:h-24 rounded border-2 border-gray-300 bg-white"
                loading="eager"
              />
            </a>
          </div>

          {/* Project Title */}
          <div className="flex-1 pt-1">
            <h3 className="text-xl md:text-2xl font-playfair font-bold text-navy-900 leading-tight">
              {projectTitle}
            </h3>
            <p className="text-xs md:text-sm text-gray-600 mt-1">
              MahaRERA Registered Project
            </p>
          </div>
        </div>

        {/* RERA Details */}
        <div className="space-y-3 pt-3 border-t border-gray-300">
          {/* RERA Registration Number */}
          <div>
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
              RERA Registration No.
            </p>
            <p className="text-base md:text-lg font-bold text-navy-900 font-mono">
              {reraNumber}
            </p>
          </div>

          {/* RERA Web Address */}
          <div>
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
              RERA Website
            </p>
            <a
              href={reraWebUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors break-all"
            >
              <span className="line-clamp-1">View Project Details</span>
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-3 pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-600 italic text-center">
            Scan QR code or click to view official RERA details
          </p>
        </div>
      </div>
    </div>
  );
}
