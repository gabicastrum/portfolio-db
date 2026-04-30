import './Details.css'
import { detailsData } from '../model/details.model'
import { DetailsHeader } from '../components/details-header/DetailsHeader'
import { PdfViewer } from '../components/pdf-viewer/PdfViewer'

export function Details() {
  return (
    <div className="portfolio-container">
      <div className="details-container">
        <DetailsHeader
          title={detailsData.title}
          pdf={detailsData.pdf}
          fileName={detailsData.fileName}
        />

        <PdfViewer src={detailsData.pdf} title="Currículo Gabriela de Castro Laurindo" />
      </div>
    </div>
  )
}
