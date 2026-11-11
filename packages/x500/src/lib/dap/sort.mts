import type { OBJECT_IDENTIFIER, ASN1Element } from "@wildboar/asn1";
import type { TypedOrderingFunction } from "../types/matching.mjs";
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

/**
 * The least value of `values` under `orderer`. A negative result means the
 * first argument precedes the second, matching `Array.sort()`. `undefined` is
 * treated as equal, so the current least is kept.
 */
function lowestValue (
    orderer: TypedOrderingFunction<ASN1Element>,
    values: ASN1Element[],
): ASN1Element {
    let lowest = values[0];
    for (let i = 1; i < values.length; i++) {
        const cmp = orderer(values[i], lowest);
        if (cmp !== undefined && cmp < 0) {
            lowest = values[i];
        }
    }
    return lowest;
}

function attributesFromEntry (entry: EntryInformation): Attribute[] {
    const attributes: Attribute[] = [];
    for (const info of entry.information ?? []) {
        if ("attribute" in info) {
            attributes.push(info.attribute);
        }
    }
    return attributes;
}

function valuesOfType (
    type: OBJECT_IDENTIFIER,
    attributes: Attribute[],
    rdn: AttributeTypeAndValue[] | undefined,
): ASN1Element[] {
    if (rdn) {
        const values: ASN1Element[] = [];
        for (const atav of rdn) {
            if (type.isEqualTo(atav.type_)) {
                values.push(atav.value);
            }
        }
        return values;
    }
    const values: ASN1Element[] = [];
    for (const attr of attributes) {
        if (!type.isEqualTo(attr.type_)) {
            continue;
        }
        for (const value of attr.iterValuesOmittingContexts()) {
            values.push(value);
        }
    }
    return values;
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
 * @param {function} getOrderingFunction A function that takes an object
 *  identifier of an attribute type or ordering matching rule and returns a
 *  {@link TypedOrderingFunction} that compares two values of that type. The
 *  numeric result is used directly as an `Array.sort()` predicate: negative if
 *  the first value is less, positive if it is greater, and zero or `undefined`
 *  if they are equal or incomparable. This avoids invoking the ordering rule
 *  twice to reconstruct a three-way comparison from a boolean matcher.
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
    getOrderingFunction: (attributeType: OBJECT_IDENTIFIER) => TypedOrderingFunction<ASN1Element> | undefined,
    onlyRDN: boolean = false,
): number {
    const aRDN = onlyRDN
        ? (a.name.rdnSequence[a.name.rdnSequence.length - 1] ?? [])
        : undefined;
    const bRDN = onlyRDN
        ? (b.name.rdnSequence[b.name.rdnSequence.length - 1] ?? [])
        : undefined;
    const aAttributes = onlyRDN ? [] : attributesFromEntry(a);
    const bAttributes = onlyRDN ? [] : attributesFromEntry(b);

    for (const key of keys) {
        const orderer = key.orderingRule
            ? getOrderingFunction(key.orderingRule)
            : getOrderingFunction(key.type_);
        if (!orderer) {
            continue; // Ignore the sort key if the matching rule is not understood.
        }

        const relevantAValues: ASN1Element[] = valuesOfType(key.type_, aAttributes, aRDN);
        const relevantBValues: ASN1Element[] = valuesOfType(key.type_, bAttributes, bRDN);

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

        const lowestAValue: ASN1Element = lowestValue(orderer, relevantAValues);
        const lowestBValue: ASN1Element = lowestValue(orderer, relevantBValues);
        const result: number | undefined = orderer(lowestAValue, lowestBValue);
        if (result) {
            return result;
        }
    }
    return 0;
}

export default sort;
