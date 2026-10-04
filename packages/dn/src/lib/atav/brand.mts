import type { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import type {
    AttributeTypeAndValueOf,
} from "../brands.mjs";
import type { DotDelimitedOidString } from "@wildboar/asn1";

/**
 * @summary Test whether an `AttributeTypeAndValue` has one of the given
 * attribute types.
 * @description
 *
 * This does not change or copy `atav`; it only narrows its type. The
 * attribute type is compared by the dotted-decimal notation of its
 * object identifier.
 *
 * Because the brands for different object identifiers are mutually
 * exclusive, `atav` is narrowed to `never` in the branch in which it was
 * already narrowed to a different object identifier.
 *
 * @param atav The attribute type and value to test.
 * @param types An object identifier, or an array of them, in
 * dotted-decimal notation.
 * @returns Whether the attribute type of `atav` is one of `types`.
 * @function
 */
export
function isAttributeTypeAndValueOf <T extends DotDelimitedOidString>(
    atav: AttributeTypeAndValue,
    types: T | readonly T[],
): atav is AttributeTypeAndValueOf<T> {
    const type_ = atav.type_.toString();
    return Array.isArray(types)
        ? (types as readonly string[]).includes(type_)
        : (type_ === types);
}

export default isAttributeTypeAndValueOf;
