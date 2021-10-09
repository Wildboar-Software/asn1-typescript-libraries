import type EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";
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
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: CertificateExactAssertion = _decode_CertificateExactAssertion(assertion);
    const v: Certificate = _decode_Certificate(value);
    if (Buffer.compare(v.toBeSigned.serialNumber, a.serialNumber)) {
        return false;
    }
    return compareName(v.toBeSigned.issuer, a.issuer, getEqualityMatcher ?? (() => undefined));
}

export default certificateExactMatch;
