/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module';
/**
 * @summary ContactId
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContactId  ::=  SimpleNameType
 * ```
 */
export type ContactId = SimpleNameType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ContactId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContactId} The decoded data structure.
 */
export const _decode_ContactId: $.ASN1Decoder<ContactId> = _decode_SimpleNameType;

/**
 * @summary Encodes a(n) ContactId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContactId, encoded as an ASN.1 Element.
 */
export const _encode_ContactId: $.ASN1Encoder<ContactId> = _encode_SimpleNameType;


/* eslint-enable */
