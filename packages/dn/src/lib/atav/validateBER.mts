import {
    ASN1Construction,
    ASN1ConstructionError,
    ASN1Error,
    ASN1TagClass,
    ASN1UniversalType,
    type ASN1Element,
} from "@wildboar/asn1";
import { _decode_AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import decodeBERElement from "../decodeBERElement.mjs";
import type { AttributeTypeAndValueBER } from "../brands.mjs";

/**
 * @summary Validate the structure of a decoded `AttributeTypeAndValue`
 * element.
 * @description
 *
 * Checks that `el` is a `SEQUENCE` whose first component is an
 * `OBJECT IDENTIFIER` with a valid encoding, followed by a value and
 * any extensions.
 *
 * The attribute value is not verified. It may be an element of any
 * tag, its contents are not decoded, and it is not checked against
 * the syntax of the attribute type. The same goes for extensions.
 *
 * @param el The element.
 * @throws {ASN1Error} If `el` is invalid.
 * @function
 */
export
function validateAttributeTypeAndValueElement (el: ASN1Element): void {
    if (
        el.tagClass !== ASN1TagClass.universal
        || el.construction !== ASN1Construction.constructed
        || el.tagNumber !== ASN1UniversalType.sequence
    ) {
        throw new ASN1ConstructionError("attribute type and value is not a sequence", el);
    }
    _decode_AttributeTypeAndValue(el);
}

/**
 * @summary Validate the Basic Encoding Rules (BER) encoding of an
 * `AttributeTypeAndValue`.
 * @description
 *
 * Checks that `bytes` is exactly one BER element, validated with
 * {@link validateAttributeTypeAndValueElement}. This accepts any
 * valid BER, so it does not check that `bytes` is also valid DER.
 *
 * The attribute value is not verified. It may be an element of any
 * tag, its contents are not decoded, and it is not checked against
 * the syntax of the attribute type.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeTypeAndValue ::= SEQUENCE {
 *   type                  ATTRIBUTE.&id({SupportedAttributes}),
 *   value                 ATTRIBUTE.&Type({SupportedAttributes}{@type}),
 *   ... }
 * ```
 *
 * @param bytes The BER encoding.
 * @throws {ASN1Error} If `bytes` is invalid.
 * @function
 */
export
function validateAttributeTypeAndValueBER (
    bytes: Uint8Array,
): asserts bytes is AttributeTypeAndValueBER {
    validateAttributeTypeAndValueElement(
        decodeBERElement(bytes, "attribute type and value"),
    );
}

/**
 * @summary Check whether bytes are a valid Basic Encoding Rules (BER)
 * encoding of an `AttributeTypeAndValue`.
 * @description
 *
 * Returns whether {@link validateAttributeTypeAndValueBER} accepts
 * `bytes`. Like that function, this does not verify the attribute
 * value.
 *
 * @param bytes The BER encoding.
 * @returns Whether `bytes` is valid.
 * @function
 */
export
function isAttributeTypeAndValueBER (
    bytes: Uint8Array,
): bytes is AttributeTypeAndValueBER {
    try {
        validateAttributeTypeAndValueBER(bytes);
        return true;
    } catch (e) {
        if (e instanceof ASN1Error) {
            return false;
        }
        throw e;
    }
}

export default validateAttributeTypeAndValueBER;
