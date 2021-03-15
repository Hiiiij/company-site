
import styled from '@emotion/styled';

const Impresum = styled.div`
columns: 2;
column-gap: 15rem;
`
const H2 = styled.h2`
    max-width: 685px;
`
function Imprint() {
    return (
        <div>
            <h1>Imprint</h1>
            <H2>Diese Website wird von der Dzemo GmbH betrieben</H2>
            <Impresum>
                <h3>Registereintrag</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar.</p>

                <h3>Angaben gemäss § 5 TMG</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar.</p>

                <h3>Vertretet durch</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar.</p>

                <h3>Umsatzsteuer-ID</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar.</p>
            </Impresum>
            <h2>Rechtliche Hindwise</h2>
            <p>Die Triplesense Reply GmbH prüft und aktualisiert die Informationen auf dieser Website ständig. Trotz aller Sorgfalt können sich die Daten inzwischen verändert haben. Eine Haftung oder Garantie für die Aktualität, Richtigkeit und Vollständigkeit der zur Verfügung gestellten Informationen kann daher nicht übernommen werden. Gleiches gilt auch für alle anderen Websites, auf die mittels Hyperlink verwiesen wird. Triplesense Reply GmbH ist für den Inhalt der Websites, die aufgrund einer solchen Verbindung erreicht werden, nicht verantwortlich.</p>

            <p>Des Weiteren behält sich Triplesense Reply das Recht vor, Änderungen oder Ergänzungen der bereitgestellten Informationen vorzunehmen.</p>

            <p>Inhalt und Struktur der Triplesense Reply Website sind urheberrechtlich geschützt. Die Vervielfältigung von Informationen oder Daten, insbesondere die Verwendung von Texten, Textteilen, Bild- oder Videomaterial, bedarf der vorherigen Zustimmung der Triplesense Reply GmbH.</p>

            <p>&copy; Triplesense Reply GmbH, Frankfurt am Main. Alle Rechte vorbehalten.</p>

        </div>
    );
}

export default Imprint;