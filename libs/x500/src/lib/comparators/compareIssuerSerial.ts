import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher";
import type {
    IssuerSerial,
} from "../modules/AttributeCertificateDefinitions/IssuerSerial.ta";
import compareGeneralNames from "./compareGeneralNames";

export
function compareIssuerSerial (
    a: IssuerSerial,
    b: IssuerSerial,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (Boolean(a.issuerUID) !== Boolean(b.issuerUID)) {
        return false;
    }
    if (Buffer.compare(a.serial, b.serial)) {
        return false;
    }
    return compareGeneralNames(a.issuer, b.issuer, getEqualityMatcher);
}

export default compareIssuerSerial;
