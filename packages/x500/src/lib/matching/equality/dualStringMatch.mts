import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    DualStringSyntax,
    _decode_DualStringSyntax,
} from "../../modules/AttributeCertificateDefinitions/DualStringSyntax.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";;
import { prepString } from "../../utils/prepString.mjs";

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
    const aop = prepString(directoryStringToString(a.operation));
    const vop = prepString(directoryStringToString(v.operation));
    const aob = prepString(directoryStringToString(a.object));
    const vob = prepString(directoryStringToString(v.object));
    if (aop === undefined) {
        return false;
        // throw new Error("7d9ff1c3-56e2-4cff-9a03-3ebdc42833a6: Invalid characters in dualStringMatch assertion 'operation' field.");
    }
    if (aob === undefined) {
        return false;
        // throw new Error("39d567c2-d4a5-4f4b-a201-da11534d8b7b: Invalid characters in dualStringMatch assertion 'object' field.");
    }
    if ((vop === undefined) || (vob === undefined)) {
        return false;
    }
    return (
        (directoryStringToString(a.operation) === directoryStringToString(v.operation))
        && (directoryStringToString(a.object) === directoryStringToString(v.object))
    );
}

export default dualStringMatch;
