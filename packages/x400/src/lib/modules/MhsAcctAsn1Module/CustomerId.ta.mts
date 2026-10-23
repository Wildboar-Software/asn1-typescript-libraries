/* eslint-disable */
import {
    ASN1Element as _Element,
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
 * @summary CustomerId
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CustomerId  ::=  SimpleNameType
 * ```
 */
export type CustomerId = SimpleNameType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CustomerId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CustomerId} The decoded data structure.
 */
export const _decode_CustomerId: $.ASN1Decoder<CustomerId> = _decode_SimpleNameType;

/**
 * @summary Encodes a(n) CustomerId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CustomerId, encoded as an ASN.1 Element.
 */
export const _encode_CustomerId: $.ASN1Encoder<CustomerId> = _encode_SimpleNameType;


/* eslint-enable */
