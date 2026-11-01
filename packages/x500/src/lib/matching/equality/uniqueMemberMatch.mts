import type { ASN1Element } from "@wildboar/asn1";
import { compareBitStrings } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { Buffer } from "node:buffer";
import { readDecoded } from "../readValue.mjs";
import { bytesEqual } from "../constantTime.mjs";
import { valueEqualityMatcher } from "../valueEqualityMatcher.mjs";
import {
    NameAndOptionalUID,
    _decode_NameAndOptionalUID,
} from "../../modules/SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
import { compareRDNSequence } from "@wildboar/dn";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.11 `uniqueMemberMatch`.
 *
 * Equality of `NameAndOptionalUID`. The `dn` components must match
 * with `distinguishedNameMatch`. TRUE if that holds and either the
 * stored `uid` is absent or it matches the presented `uid` with
 * `bitStringMatch`. A presented `uid` is ignored when the stored
 * value has none. `UniqueIdentifier` has no `NamedBitList`, so
 * trailing zero bits are significant.
 *
 * @param a Presented name and optional UID.
 * @param value Stored name and optional UID, or that value already decoded.
 * @param getMatcher Equality rule lookup for naming attributes.
 */
export
function uniqueMemberMatchTyped (
    a: NameAndOptionalUID,
    value: NameAndOptionalUID | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const v = readDecoded(value, _decode_NameAndOptionalUID);
    const constantTime = flags & MATCH_FLAG_CONSTANT_TIME;
    const getEqualityMatcher = valueEqualityMatcher(getMatcher, flags);
    const dnMatches = compareRDNSequence(a.dn, v.dn, getEqualityMatcher);
    if (!dnMatches && !constantTime) {
        return false;
    }
    // Clause 8.2.11: a stored `uid` that is absent matches any presented `uid`.
    if (v.uid === undefined) {
        return dnMatches;
    }
    if (a.uid === undefined) {
        return false;
    }
    const uidMatches = constantTime
        ? bytesEqual(
            Buffer.from(a.uid.buffer, a.uid.byteOffset, a.uid.byteLength),
            Buffer.from(v.uid.buffer, v.uid.byteOffset, v.uid.byteLength),
            constantTime,
        )
        : compareBitStrings(a.uid, v.uid);
    return dnMatches && uidMatches;
}

uniqueMemberMatchTyped satisfies TypedEquationFunction<NameAndOptionalUID>;

/**
 * `uniqueMemberMatch` as a `Matcher`.
 */
export
const uniqueMemberMatch: Matcher = createEqualityMatcher(
    _decode_NameAndOptionalUID,
    uniqueMemberMatchTyped,
    undefined,
    true,
);

export default uniqueMemberMatch;
