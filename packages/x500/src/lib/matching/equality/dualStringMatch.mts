import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    DualStringSyntax,
    _decode_DualStringSyntax,
} from "../../modules/AttributeCertificateDefinitions/DualStringSyntax.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";;
import { prohibitedCharacters } from "../../utils/prepString.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 16.8.2 `dualStringMatch`.
 *
 * Case-sensitive equality of `DualStringSyntax`: the presented
 * `operation` and `object` strings must each equal the stored
 * pair. Used with the `permission` attribute (clause 16.8.1);
 * operation and object names are specified as case sensitive.
 */
export
const dualStringMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: DualStringSyntax = _decode_DualStringSyntax(assertion);
    const v: DualStringSyntax = _decode_DualStringSyntax(value);
    const aop = directoryStringToString(a.operation);
    const vop = directoryStringToString(v.operation);
    const aob = directoryStringToString(a.object);
    const vob = directoryStringToString(v.object);
    if (
        prohibitedCharacters.test(aop)
        || prohibitedCharacters.test(vop)
        || prohibitedCharacters.test(aob)
        || prohibitedCharacters.test(vob)
    ) {
        return false;
    }
    return (
        (aop === vop)
        && (aob === vob)
    );
}

export default dualStringMatch;
