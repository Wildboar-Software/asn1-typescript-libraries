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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION MessageID */
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
/* END_OF_SYMBOL_DEFINITION MessageID */

/* START_OF_SYMBOL_DEFINITION _decode_MessageID */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageID} The decoded data structure.
 */
export function _decode_MessageID(el: _Element) {
  return $._decodeInteger(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageID */

/* START_OF_SYMBOL_DEFINITION _encode_MessageID */
/**
 * @summary Encodes a(n) MessageID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageID, encoded as an ASN.1 Element.
 */
export function _encode_MessageID(
  value: MessageID,
  elGetter: $.ASN1Encoder<MessageID>
) {
  return $._encodeInteger(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageID */

/* eslint-enable */
