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
    type TCMessage,
    _decode_TCMessage,
    _encode_TCMessage,
} from '../TCAPMessages/TCMessage.ta.mjs';
/**
 * @summary TCConsumerAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TCConsumerAS{OPERATION-PACKAGE:package}  ::=
 *   TCMessage{{ConsumerPerforms  {package}}, {ConsumerPerforms  {package}}}
 * ```
 */
export type TCConsumerAS = TCMessage; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TCConsumerAS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TCConsumerAS} The decoded data structure.
 */
export const _decode_TCConsumerAS: $.ASN1Decoder<TCConsumerAS> = _decode_TCMessage;

/**
 * @summary Encodes a(n) TCConsumerAS into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCConsumerAS, encoded as an ASN.1 Element.
 */
export const _encode_TCConsumerAS: $.ASN1Encoder<TCConsumerAS> = _encode_TCMessage;


/* eslint-enable */
