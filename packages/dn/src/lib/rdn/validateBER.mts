import {
    ASN1Construction,
    ASN1ConstructionError,
    ASN1Error,
    ASN1SizeError,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
    type ASN1Element,
} from "@wildboar/asn1";
import { validateAttributeTypeAndValueElement } from "../atav/validateBER.mjs";
import decodeBERElement from "../decodeBERElement.mjs";
import type { RelativeDistinguishedNameBER } from "../brands.mjs";

/**
 * @summary Validate the structure of a decoded
 * `RelativeDistinguishedName` element.
 * @description
 *
 * Checks that `el` is a non-empty `SET` whose components are each
 * BER-encoded and validated with
 * {@link validateAttributeTypeAndValueElement}.
 *
 * Attribute values are not verified: they are not decoded or checked
 * against the syntaxes of their attribute types. Nor is it checked
 * that each attribute type appears only once.
 *
 * @param el The element.
 * @throws {ASN1Error} If `el` is invalid.
 * @function
 */
export
function validateRelativeDistinguishedNameElement (el: ASN1Element): void {
    if (
        el.tagClass !== ASN1TagClass.universal
        || el.construction !== ASN1Construction.constructed
        || el.tagNumber !== ASN1UniversalType.set
    ) {
        throw new ASN1ConstructionError("relative distinguished name is not a set", el);
    }
    const content: Uint8Array = el.value;
    if (content.length === 0) {
        throw new ASN1SizeError("empty relative distinguished name", el);
    }
    const atav = new BERElement();
    for (let i = 0; i < content.length;) {
        i += atav.fromBytes(content.subarray(i), true);
        validateAttributeTypeAndValueElement(atav);
    }
}

/**
 * @summary Validate the Basic Encoding Rules (BER) encoding of a
 * `RelativeDistinguishedName`.
 * @description
 *
 * Checks that `bytes` is exactly one BER element, validated with
 * {@link validateRelativeDistinguishedNameElement}. This accepts any
 * valid BER, so it does not check that `bytes` is also valid DER,
 * which would require the components to be sorted.
 *
 * Attribute values are not verified: they are not decoded or checked
 * against the syntaxes of their attribute types.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelativeDistinguishedName ::= SET SIZE (1..MAX) OF AttributeTypeAndValue
 * ```
 *
 * @param bytes The BER encoding.
 * @throws {ASN1Error} If `bytes` is invalid.
 * @function
 */
export
function validateRelativeDistinguishedNameBER (
    bytes: Uint8Array,
): asserts bytes is RelativeDistinguishedNameBER {
    validateRelativeDistinguishedNameElement(
        decodeBERElement(bytes, "relative distinguished name"),
    );
}

/**
 * @summary Check whether bytes are a valid Basic Encoding Rules (BER)
 * encoding of a `RelativeDistinguishedName`.
 * @description
 *
 * Returns whether {@link validateRelativeDistinguishedNameBER}
 * accepts `bytes`. Like that function, this does not verify attribute
 * values.
 *
 * @param bytes The BER encoding.
 * @returns Whether `bytes` is valid.
 * @function
 */
export
function isRelativeDistinguishedNameBER (
    bytes: Uint8Array,
): bytes is RelativeDistinguishedNameBER {
    try {
        validateRelativeDistinguishedNameBER(bytes);
        return true;
    } catch (e) {
        if (e instanceof ASN1Error) {
            return false;
        }
        throw e;
    }
}

export default validateRelativeDistinguishedNameBER;
