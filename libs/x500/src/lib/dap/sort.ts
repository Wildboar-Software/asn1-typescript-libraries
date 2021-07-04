import type { OBJECT_IDENTIFIER, ASN1Element } from "asn1-ts";
import type OrderingMatcher from "../types/OrderingMatcher";
import type {
    SortKey,
} from "../modules/DirectoryAbstractService/SortKey.ta";
import type {
    EntryInformation,
} from "../modules/DirectoryAbstractService/EntryInformation.ta";
import type {
    Attribute,
} from "../modules/InformationFramework/Attribute.ta"
import type ATVAC from "../types/AttributeTypeValueAndContextsTuple";
import getValueTuplesFromAttribute from "../utils/getValueTuplesFromAttribute";

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
 * @returns >0 if A is greater, <0 if B is greater, and 0 if they are equal.
 * @function
 */
export
function sort (
    keys: SortKey[],
    a: EntryInformation,
    b: EntryInformation,
    getOrderingMatcher: (attributeType: OBJECT_IDENTIFIER) => OrderingMatcher | undefined,
    onlyRDN: boolean = false,
): number {
    const avalues: ATVAC[] = onlyRDN
        ? (a.name.rdnSequence[a.name.rdnSequence.length - 1]
            ?.map((atav): ATVAC => [ atav.type_, atav.value, [] ]) ?? [])
        : a.information
            .map((info) => ("attribute" in info) ? info.attribute : undefined)
            .filter((attr): attr is Attribute => !!attr)
            .flatMap(getValueTuplesFromAttribute);
    const bvalues: ATVAC[] = onlyRDN
        ? (b.name.rdnSequence[a.name.rdnSequence.length - 1]
            ?.map((atav): ATVAC => [ atav.type_, atav.value, [] ]) ?? [])
        : b.information
            .map((info) => ("attribute" in info) ? info.attribute : undefined)
            .filter((attr): attr is Attribute => !!attr)
            .flatMap(getValueTuplesFromAttribute);

    // const orderer = getOrderingMatcher()
    for (const key of keys) {
        const orderer = key.orderingRule
            ? getOrderingMatcher(key.orderingRule)
            : getOrderingMatcher(key.type_);
        if (!orderer) {
            continue; // Ignore the sort key if the matching rule is not understood.
        }

        const relevantAValues: ASN1Element[] = avalues
            .filter(([ type_ ]) => (type_.toString() === key.type_.toString()))
            .map(([ , value ]) => value);
        const relevantBValues: ASN1Element[] = bvalues
            .filter(([ type_ ]) => (type_.toString() === key.type_.toString()))
            .map(([ , value ]) => value);

        const lowestAValue: ASN1Element = relevantAValues.sort((a, b) => orderer(a, b))[0];
        const lowestBValue: ASN1Element = relevantBValues.sort((a, b) => orderer(a, b))[0];

        const result: number = orderer(lowestAValue, lowestBValue);
        if (result !== 0) {
            return result;
        }
    }
    return 0;
}

export default sort;
