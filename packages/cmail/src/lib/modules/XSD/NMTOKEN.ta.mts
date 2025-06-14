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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { Token, _decode_Token, _encode_Token } from '../XSD/Token.ta.mjs';
/* START_OF_SYMBOL_DEFINITION NMTOKEN */
/**
 * @summary NMTOKEN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NMTOKEN  ::=  Token (XMLStringWithNoWhitespace)
 *     (CONSTRAINED BY {
 *                    / * The Token shall be an NMTOKEN as defined in W3C XML 1.0, 2.3 * / } )
 * ```
 */
export type NMTOKEN = Token; // DefinedType
/* END_OF_SYMBOL_DEFINITION NMTOKEN */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NMTOKEN */
let _cached_decoder_for_NMTOKEN: $.ASN1Decoder<NMTOKEN> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NMTOKEN */

/* START_OF_SYMBOL_DEFINITION _decode_NMTOKEN */
/**
 * @summary Decodes an ASN.1 element into a(n) NMTOKEN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NMTOKEN} The decoded data structure.
 */
export function _decode_NMTOKEN(el: _Element) {
  if (!_cached_decoder_for_NMTOKEN) {
    _cached_decoder_for_NMTOKEN = _decode_Token;
  }
  return _cached_decoder_for_NMTOKEN(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NMTOKEN */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NMTOKEN */
let _cached_encoder_for_NMTOKEN: $.ASN1Encoder<NMTOKEN> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NMTOKEN */

/* START_OF_SYMBOL_DEFINITION _encode_NMTOKEN */
/**
 * @summary Encodes a(n) NMTOKEN into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NMTOKEN, encoded as an ASN.1 Element.
 */
export function _encode_NMTOKEN(
  value: NMTOKEN,
  elGetter: $.ASN1Encoder<NMTOKEN>
) {
  if (!_cached_encoder_for_NMTOKEN) {
    _cached_encoder_for_NMTOKEN = _encode_Token;
  }
  return _cached_encoder_for_NMTOKEN(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NMTOKEN */

/* eslint-enable */
