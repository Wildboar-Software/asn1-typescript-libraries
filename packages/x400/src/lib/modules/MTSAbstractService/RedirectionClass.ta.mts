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
    MessageClass,
    _decode_MessageClass,
    _encode_MessageClass,
} from '../MTSAbstractService/MessageClass.ta.mjs';
/**
 * @summary RedirectionClass
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RedirectionClass  ::=  MessageClass
 * ```
 */
export type RedirectionClass = MessageClass; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RedirectionClass
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RedirectionClass} The decoded data structure.
 */
export const _decode_RedirectionClass: $.ASN1Decoder<RedirectionClass> = _decode_MessageClass;

/**
 * @summary Encodes a(n) RedirectionClass into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RedirectionClass, encoded as an ASN.1 Element.
 */
export const _encode_RedirectionClass: $.ASN1Encoder<RedirectionClass> = _encode_MessageClass;


/* eslint-enable */
