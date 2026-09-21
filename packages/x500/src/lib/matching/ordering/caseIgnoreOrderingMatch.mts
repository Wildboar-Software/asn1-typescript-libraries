import OrderingMatcher from "../../types/OrderingMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";
import { compareCodePoints, prepString } from "../../utils/prepString.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.2
 * `caseIgnoreOrderingMatch`.
 *
 * Same as `caseExactOrderingMatch` except upper-case is folded
 * during string preparation (clause 7.2). Insignificant spaces are
 * ignored (clause 7.6). Directory TRUE iff the stored value is
 * less than the presented value under Unicode code-point order.
 */
export
const caseIgnoreOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    const a: string | undefined = prepString(
        directoryStringToString(_decode_UDS(assertion)),
        { caseFold: true },
    );
    const v: string | undefined = prepString(
        directoryStringToString(_decode_UDS(value)),
        { caseFold: true },
    );
    if ((a === undefined) || (v === undefined)) {
        return Number.NaN;
    }
    return compareCodePoints(a, v);
}

export default caseIgnoreOrderingMatch;
