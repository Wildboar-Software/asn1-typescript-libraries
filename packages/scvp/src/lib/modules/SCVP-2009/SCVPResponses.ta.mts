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
import {
  ContentInfo,
  _decode_ContentInfo,
  _encode_ContentInfo,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/ContentInfo.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SCVPResponses */
/**
 * @summary SCVPResponses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SCVPResponses  ::=  SEQUENCE OF ContentInfo
 * ```
 */
export type SCVPResponses = ContentInfo[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SCVPResponses */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SCVPResponses */
let _cached_decoder_for_SCVPResponses: $.ASN1Decoder<SCVPResponses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SCVPResponses */

/* START_OF_SYMBOL_DEFINITION _decode_SCVPResponses */
/**
 * @summary Decodes an ASN.1 element into a(n) SCVPResponses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SCVPResponses} The decoded data structure.
 */
export function _decode_SCVPResponses(el: _Element) {
  if (!_cached_decoder_for_SCVPResponses) {
    _cached_decoder_for_SCVPResponses = $._decodeSequenceOf<ContentInfo>(
      () => _decode_ContentInfo
    );
  }
  return _cached_decoder_for_SCVPResponses(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SCVPResponses */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SCVPResponses */
let _cached_encoder_for_SCVPResponses: $.ASN1Encoder<SCVPResponses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SCVPResponses */

/* START_OF_SYMBOL_DEFINITION _encode_SCVPResponses */
/**
 * @summary Encodes a(n) SCVPResponses into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCVPResponses, encoded as an ASN.1 Element.
 */
export function _encode_SCVPResponses(
  value: SCVPResponses,
  elGetter: $.ASN1Encoder<SCVPResponses>
) {
  if (!_cached_encoder_for_SCVPResponses) {
    _cached_encoder_for_SCVPResponses = $._encodeSequenceOf<ContentInfo>(
      () => _encode_ContentInfo,
      $.BER
    );
  }
  return _cached_encoder_for_SCVPResponses(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SCVPResponses */

/* eslint-enable */
