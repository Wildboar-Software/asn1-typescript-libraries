/* eslint-disable */
import {
  OCTET_STRING,
  T61String,
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

/* START_OF_SYMBOL_DEFINITION CallingSSuserReference */
/**
 * @summary CallingSSuserReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CallingSSuserReference  ::=  CHOICE {
 *   t61String    T61String -- solely in X.410-1984 --,
 *   octetString  OCTET STRING -- solely in normal mode --
 * }
 * ```
 */
export type CallingSSuserReference =
  | { t61String: T61String } /* CHOICE_ALT_ROOT */
  | { octetString: OCTET_STRING } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION CallingSSuserReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CallingSSuserReference */
let _cached_decoder_for_CallingSSuserReference: $.ASN1Decoder<CallingSSuserReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CallingSSuserReference */

/* START_OF_SYMBOL_DEFINITION _decode_CallingSSuserReference */
/**
 * @summary Decodes an ASN.1 element into a(n) CallingSSuserReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CallingSSuserReference} The decoded data structure.
 */
export function _decode_CallingSSuserReference(el: _Element) {
  if (!_cached_decoder_for_CallingSSuserReference) {
    _cached_decoder_for_CallingSSuserReference = $._decode_inextensible_choice<CallingSSuserReference>(
      {
        'UNIVERSAL 20': ['t61String', $._decodeT61String],
        'UNIVERSAL 4': ['octetString', $._decodeOctetString],
      }
    );
  }
  return _cached_decoder_for_CallingSSuserReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CallingSSuserReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CallingSSuserReference */
let _cached_encoder_for_CallingSSuserReference: $.ASN1Encoder<CallingSSuserReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CallingSSuserReference */

/* START_OF_SYMBOL_DEFINITION _encode_CallingSSuserReference */
/**
 * @summary Encodes a(n) CallingSSuserReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallingSSuserReference, encoded as an ASN.1 Element.
 */
export function _encode_CallingSSuserReference(
  value: CallingSSuserReference,
  elGetter: $.ASN1Encoder<CallingSSuserReference>
) {
  if (!_cached_encoder_for_CallingSSuserReference) {
    _cached_encoder_for_CallingSSuserReference = $._encode_choice<CallingSSuserReference>(
      {
        t61String: $._encodeT61String,
        octetString: $._encodeOctetString,
      },
      $.BER
    );
  }
  return _cached_encoder_for_CallingSSuserReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CallingSSuserReference */

/* eslint-enable */
