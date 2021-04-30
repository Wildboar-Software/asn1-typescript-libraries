import type {
    IssuerSerial,
} from "../modules/AttributeCertificateDefinitions/IssuerSerial.ta";
import compareGeneralNames from "./compareGeneralNames";

export
function compareIssuerSerial (a: IssuerSerial, b: IssuerSerial): boolean {
    if (Boolean(a.issuerUID) !== Boolean(b.issuerUID)) {
        return false;
    }
    if (a.serial.toString() !== b.serial.toString()) {
        return false;
    }
    return compareGeneralNames(a.issuer, b.issuer);
}

export default compareIssuerSerial;
