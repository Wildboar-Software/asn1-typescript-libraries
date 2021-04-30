import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import {
    DualStringSyntax,
    _decode_DualStringSyntax,
} from "../../modules/AttributeCertificateDefinitions/DualStringSyntax.ta";
import directoryStringToString from "../../stringifiers/directoryStringToString";

export
const dualStringMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: DualStringSyntax = _decode_DualStringSyntax(assertion);
    const v: DualStringSyntax = _decode_DualStringSyntax(value);
    return (
        (directoryStringToString(a.operation) === directoryStringToString(v.operation))
        && (directoryStringToString(a.object) === directoryStringToString(v.object))
    );
}

export default dualStringMatch;
