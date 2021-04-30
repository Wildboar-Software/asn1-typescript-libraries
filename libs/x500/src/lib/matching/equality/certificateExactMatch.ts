import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import compareUint8Arrays from "../../comparators/compareUint8Arrays";
import compareName from "../../comparators/compareName";
import {
    CertificateExactAssertion,
    _decode_CertificateExactAssertion,
} from "../../modules/CertificateExtensions/CertificateExactAssertion.ta";
import {
    Certificate,
    _decode_Certificate,
} from "../../modules/AuthenticationFramework/Certificate.ta";

export
const certificateExactMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: CertificateExactAssertion = _decode_CertificateExactAssertion(assertion);
    const v: Certificate = _decode_Certificate(value);
    if (!compareUint8Arrays(v.toBeSigned.serialNumber, a.serialNumber)) {
        return false;
    }
    return compareName(v.toBeSigned.issuer, a.issuer);
}

export default certificateExactMatch;
