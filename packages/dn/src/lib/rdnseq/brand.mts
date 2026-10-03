import type { RDNSequence } from "../RDNSequence.ta.mjs";
import type {
    ObjectIdentifierString,
    RDNSequenceEndingWith,
    RDNSequenceOf,
    RDNSequenceOfLength,
    RDNSequenceStartingWith,
    RelativeDistinguishedNameOf,
} from "../brands.mjs";
import { isRelativeDistinguishedNameOf } from "../rdn/brand.mjs";

/**
 * @summary Test whether an `RDNSequence` has exactly the given number of
 * relative distinguished names.
 * @description
 *
 * This does not change or copy `dn`; it only narrows its type. `length`
 * should be a literal, such as `0` or `3`, if the narrowing is to be
 * useful. Any brand that `dn` already has, such as its DIT order, is
 * kept.
 *
 * @param dn The RDNs to test.
 * @param length The number of relative distinguished names.
 * @returns Whether `dn` has exactly `length` elements.
 * @function
 */
export
function isRDNSequenceOfLength <
    N extends number,
    D extends RDNSequence = RDNSequence,
> (
    dn: D,
    length: N,
): dn is D & RDNSequenceOfLength<N> {
    return dn.length === length;
}

/**
 * @summary Test whether every relative distinguished name of an
 * `RDNSequence` consists of exactly one attribute type and value, whose
 * type is one of the given types.
 * @description
 *
 * This does not change or copy `dn`; it only narrows its type. An empty
 * `RDNSequence` passes. Any brand that `dn` already has, such as its DIT
 * order, is kept.
 *
 * @param dn The RDNs to test.
 * @param types An object identifier, or an array of them, in
 * dotted-decimal notation.
 * @returns Whether every RDN of `dn` is of one of `types`.
 * @function
 */
export
function isRDNSequenceOf <
    T extends ObjectIdentifierString,
    D extends RDNSequence = RDNSequence,
> (
    dn: D,
    types: T | readonly T[],
): dn is D & RDNSequenceOf<T> {
    return dn.every((rdn) => isRelativeDistinguishedNameOf(rdn, types));
}

/**
 * @summary Test whether the first relative distinguished name of an
 * `RDNSequence` consists of exactly one attribute type and value, whose
 * type is one of the given types.
 * @description
 *
 * This does not change or copy `dn`; it only narrows its type. An empty
 * `RDNSequence` fails. "First" refers to position in the array, not to
 * the DIT. Any brand that `dn` already has, such as its DIT order, is
 * kept.
 *
 * @param dn The RDNs to test.
 * @param types An object identifier, or an array of them, in
 * dotted-decimal notation.
 * @returns Whether the first RDN of `dn` is of one of `types`.
 * @function
 */
export
function isRDNSequenceStartingWith <
    T extends ObjectIdentifierString,
    D extends RDNSequence = RDNSequence,
> (
    dn: D,
    types: T | readonly T[],
): dn is D & RDNSequenceStartingWith<RelativeDistinguishedNameOf<T>> {
    return (dn.length > 0) && isRelativeDistinguishedNameOf(dn[0], types);
}

/**
 * @summary Test whether the last relative distinguished name of an
 * `RDNSequence` consists of exactly one attribute type and value, whose
 * type is one of the given types.
 * @description
 *
 * This does not change or copy `dn`; it only narrows its type. An empty
 * `RDNSequence` fails. "Last" refers to position in the array, not to
 * the DIT. Any brand that `dn` already has, such as its DIT order, is
 * kept.
 *
 * @param dn The RDNs to test.
 * @param types An object identifier, or an array of them, in
 * dotted-decimal notation.
 * @returns Whether the last RDN of `dn` is of one of `types`.
 * @function
 */
export
function isRDNSequenceEndingWith <
    T extends ObjectIdentifierString,
    D extends RDNSequence = RDNSequence,
> (
    dn: D,
    types: T | readonly T[],
): dn is D & RDNSequenceEndingWith<RelativeDistinguishedNameOf<T>> {
    return (dn.length > 0)
        && isRelativeDistinguishedNameOf(dn[dn.length - 1], types);
}
