import type { OBJECT_IDENTIFIER, ASN1Element } from "@wildboar/asn1";
import type { Matcher } from "../types/matching.mjs";
import type {
    SortKey,
} from "../modules/DirectoryAbstractService/SortKey.ta.mjs";
import type {
    EntryInformation,
} from "../modules/DirectoryAbstractService/EntryInformation.ta.mjs";
import type {
    Attribute,
} from "../modules/InformationFramework/Attribute.ta.mjs";
import { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import type ATVAC from "../types/AttributeTypeValueAndContextsTuple.mjs";
import getValueTuplesFromAttribute from "../utils/getValueTuplesFromAttribute.mjs";

/**
 * TRUE iff `value` is strictly less than `assertion` under `orderer`.
 * The default ordering matcher is TRUE when the stored value is less
 * than the presented value.
 */
function valueLessThan (
    orderer: Matcher,
    type: OBJECT_IDENTIFIER,
    assertion: ASN1Element,
    value: ASN1Element,
): boolean {
    return orderer(assertion, new AttributeTypeAndValue(type, value)) === true;
}

function lowestValue (
    orderer: Matcher,
    type: OBJECT_IDENTIFIER,
    values: ASN1Element[],
): ASN1Element {
    let lowest = values[0];
    for (let i = 1; i < values.length; i++) {
        if (valueLessThan(orderer, type, lowest, values[i])) {
            lowest = values[i];
        }
    }
    return lowest;
}

/**
 * @summary Sort entries via sort keys of a paged results request.
 * @description
 *
 * This function implements entry sorting according to sort keys, as specified
 * in ITU Recommendation X.511 (2016), section 7.9, which deals with paged
 * results. This implementation returns >0 if A is greater, <0 if B is greater,
 * and 0 if they are equal so that this can be used easily with `Array.sort()`.
 *
 * This implementation does not handle reverse-sorting. This should just be
 * handled by `Array.reverse()`.
 *
 * The specification does not mention how to handle attribute subtyping, so this
 * implementation does not use attribute subtyping.
 * Missing sort values compare greater than present values (X.511 clause 7.9).
 * If both entries lack a key, comparison continues with the next key.
 *
 * @param {SortKey[]} keys The keys by which to sort the entries.
 * @param {EntryInformation} a The entry that is compared to entry B.
 * @param {EntryInformation} b The entry that is compared to entry A.
 * @param {function} getOrderingMatcher A function that takes an object
 *  identifier of an attribute type and returns a function that sorts values of
 *  that attribute type.
 * @param {boolean} onlyRDN Whether to only sort values found in the relative
 *  distinguished name, as would be desirable when implementing the Directory
 *  Access Protocol (DAP) `list` operation.
 * @returns {number} >0 if A is greater, <0 if B is greater, and 0 if they are equal.
 * @function
 */
export
function sort (
    keys: SortKey[],
    a: EntryInformation,
    b: EntryInformation,
    getOrderingMatcher: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    onlyRDN: boolean = false,
): number {
    const avalues: ATVAC[] = onlyRDN
        ? (a.name.rdnSequence[a.name.rdnSequence.length - 1]
            ?.map((atav): ATVAC => [ atav.type_, atav.value, [] ]) ?? [])
        : (a.information ?? [])
            .map((info) => ("attribute" in info) ? info.attribute : undefined)
            .filter((attr): attr is Attribute => !!attr)
            .flatMap(getValueTuplesFromAttribute);
    const bvalues: ATVAC[] = onlyRDN
        ? (b.name.rdnSequence[b.name.rdnSequence.length - 1]
            ?.map((atav): ATVAC => [ atav.type_, atav.value, [] ]) ?? [])
        : (b.information ?? [])
            .map((info) => ("attribute" in info) ? info.attribute : undefined)
            .filter((attr): attr is Attribute => !!attr)
            .flatMap(getValueTuplesFromAttribute);

    for (const key of keys) {
        const orderer = key.orderingRule
            ? getOrderingMatcher(key.orderingRule)
            : getOrderingMatcher(key.type_);
        if (!orderer) {
            continue; // Ignore the sort key if the matching rule is not understood.
        }

        const relevantAValues: ASN1Element[] = avalues
            .filter((tuple): tuple is [OBJECT_IDENTIFIER, ASN1Element, ATVAC[2]] => (
                key.type_.isEqualTo(tuple[0]) && tuple[1] !== undefined
            ))
            .map(([, value]) => value);
        const relevantBValues: ASN1Element[] = bvalues
            .filter((tuple): tuple is [OBJECT_IDENTIFIER, ASN1Element, ATVAC[2]] => (
                key.type_.isEqualTo(tuple[0]) && tuple[1] !== undefined
            ))
            .map(([, value]) => value);

        // Absence is an ordering case, not an ASN.1 value for the matcher.
        if (relevantAValues.length === 0 && relevantBValues.length === 0) {
            continue;
        }
        if (relevantAValues.length === 0) {
            return 1;
        }
        if (relevantBValues.length === 0) {
            return -1;
        }

        const lowestAValue: ASN1Element = lowestValue(orderer, key.type_, relevantAValues);
        const lowestBValue: ASN1Element = lowestValue(orderer, key.type_, relevantBValues);

        if (valueLessThan(orderer, key.type_, lowestBValue, lowestAValue)) {
            return -1;
        }
        if (valueLessThan(orderer, key.type_, lowestAValue, lowestBValue)) {
            return 1;
        }
    }
    return 0;
}

export default sort;
