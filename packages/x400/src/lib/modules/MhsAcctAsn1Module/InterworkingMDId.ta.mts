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
    type SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module';
/**
 * @summary InterworkingMDId
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InterworkingMDId  ::=  SimpleNameType
 * ```
 */
export type InterworkingMDId = SimpleNameType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) InterworkingMDId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InterworkingMDId} The decoded data structure.
 */
export const _decode_InterworkingMDId: $.ASN1Decoder<InterworkingMDId> = _decode_SimpleNameType;

/**
 * @summary Encodes a(n) InterworkingMDId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InterworkingMDId, encoded as an ASN.1 Element.
 */
export const _encode_InterworkingMDId: $.ASN1Encoder<InterworkingMDId> = _encode_SimpleNameType;


/* eslint-enable */
