import type { RelativeDistinguishedName } from "../RelativeDistinguishedName.ta.mjs";
import type {
    ObjectIdentifierString,
    RelativeDistinguishedNameOf,
    RelativeDistinguishedNameOfLength,
} from "../brands.mjs";
import { isAttributeTypeAndValueOf } from "../atav/brand.mjs";

/**
 * @summary Test whether a `RelativeDistinguishedName` consists of exactly
 * one attribute type and value, whose type is one of the given types.
 * @description
 *
 * This does not change or copy `rdn`; it only narrows its type.
 *
 * @param rdn The relative distinguished name to test.
 * @param types An object identifier, or an array of them, in
 * dotted-decimal notation.
 * @returns Whether `rdn` has one element and its attribute type is one
 * of `types`.
 * @function
 */
export
function isRelativeDistinguishedNameOf <
    T extends ObjectIdentifierString,
    R extends RelativeDistinguishedName = RelativeDistinguishedName,
> (
    rdn: R,
    types: T | readonly T[],
): rdn is R & RelativeDistinguishedNameOf<T> {
    return (rdn.length === 1) && isAttributeTypeAndValueOf(rdn[0], types);
}

/**
 * @summary Test whether a `RelativeDistinguishedName` has exactly the
 * given number of attribute types and values.
 * @description
 *
 * This does not change or copy `rdn`; it only narrows its type. `length`
 * should be a literal, such as `0` or `2`, if the narrowing is to be
 * useful.
 *
 * @param rdn The relative distinguished name to test.
 * @param length The number of attribute types and values.
 * @returns Whether `rdn` has exactly `length` elements.
 * @function
 */
export
function isRelativeDistinguishedNameOfLength <
    N extends number,
    R extends RelativeDistinguishedName = RelativeDistinguishedName,
> (
    rdn: R,
    length: N,
): rdn is R & RelativeDistinguishedNameOfLength<N> {
    return rdn.length === length;
}
