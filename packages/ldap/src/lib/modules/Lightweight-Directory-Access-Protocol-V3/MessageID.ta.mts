/* eslint-disable */
import {
  INTEGER,
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

/**
 * @summary MessageID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageID  ::=  INTEGER(0..maxInt)
 * ```
 */
export type MessageID = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageID} The decoded data structure.
 */
export const _decode_MessageID: $.ASN1Decoder<MessageID> = $._decodeInteger;

/**
 * @summary Encodes a(n) MessageID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageID, encoded as an ASN.1 Element.
 */
export const _encode_MessageID: $.ASN1Encoder<MessageID> = $._encodeInteger;

/* eslint-enable */
