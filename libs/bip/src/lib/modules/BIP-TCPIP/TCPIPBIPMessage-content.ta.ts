/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
  BIPMessage,
  _decode_BIPMessage,
  _encode_BIPMessage,
} from '../BIP/BIPMessage.ta';
export {
  BIPMessage,
  _decode_BIPMessage,
  _encode_BIPMessage,
} from '../BIP/BIPMessage.ta';
import { basic_per_aligned } from '../BIP-TCPIP/basic-per-aligned.va';
export { basic_per_aligned } from '../BIP-TCPIP/basic-per-aligned.va';

/* START_OF_SYMBOL_DEFINITION TCPIPBIPMessage_content */
/**
 * @summary TCPIPBIPMessage_content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TCPIPBIPMessage-content ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TCPIPBIPMessage_content =
  | { bIPMessage: OCTET_STRING } /* CHOICE_ALT_ROOT */
  | { keepalive: NULL } /* CHOICE_ALT_ROOT */
  | { requestLinkChannelOnSpecifiedPort: INTEGER } /* CHOICE_ALT_ROOT */
  | { requestLinkChannel: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TCPIPBIPMessage_content */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TCPIPBIPMessage_content */
let _cached_decoder_for_TCPIPBIPMessage_content: $.ASN1Decoder<TCPIPBIPMessage_content> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TCPIPBIPMessage_content */

/* START_OF_SYMBOL_DEFINITION _decode_TCPIPBIPMessage_content */
/**
 * @summary Decodes an ASN.1 element into a(n) TCPIPBIPMessage_content
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TCPIPBIPMessage_content} The decoded data structure.
 */
export function _decode_TCPIPBIPMessage_content(el: _Element) {
  if (!_cached_decoder_for_TCPIPBIPMessage_content) {
    _cached_decoder_for_TCPIPBIPMessage_content = $._decode_inextensible_choice<TCPIPBIPMessage_content>(
      {
        'CONTEXT 0': ['bIPMessage', $._decodeOctetString],
        'CONTEXT 1': ['keepalive', $._decodeNull],
        'CONTEXT 2': ['requestLinkChannelOnSpecifiedPort', $._decodeInteger],
        'CONTEXT 3': ['requestLinkChannel', $._decodeNull],
      }
    );
  }
  return _cached_decoder_for_TCPIPBIPMessage_content(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TCPIPBIPMessage_content */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TCPIPBIPMessage_content */
let _cached_encoder_for_TCPIPBIPMessage_content: $.ASN1Encoder<TCPIPBIPMessage_content> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TCPIPBIPMessage_content */

/* START_OF_SYMBOL_DEFINITION _encode_TCPIPBIPMessage_content */
/**
 * @summary Encodes a(n) TCPIPBIPMessage_content into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCPIPBIPMessage_content, encoded as an ASN.1 Element.
 */
export function _encode_TCPIPBIPMessage_content(
  value: TCPIPBIPMessage_content,
  elGetter: $.ASN1Encoder<TCPIPBIPMessage_content>
) {
  if (!_cached_encoder_for_TCPIPBIPMessage_content) {
    _cached_encoder_for_TCPIPBIPMessage_content = $._encode_choice<TCPIPBIPMessage_content>(
      {
        bIPMessage: $._encodeOctetString,
        keepalive: $._encodeNull,
        requestLinkChannelOnSpecifiedPort: $._encodeInteger,
        requestLinkChannel: $._encodeNull,
      },
      $.BER
    );
  }
  return _cached_encoder_for_TCPIPBIPMessage_content(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TCPIPBIPMessage_content */

/* eslint-enable */
