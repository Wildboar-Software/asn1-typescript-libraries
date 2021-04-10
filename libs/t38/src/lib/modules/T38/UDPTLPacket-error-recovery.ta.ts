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
  UDPTLPacket_error_recovery_fec_info,
  _decode_UDPTLPacket_error_recovery_fec_info,
  _encode_UDPTLPacket_error_recovery_fec_info,
} from '../T38/UDPTLPacket-error-recovery-fec-info.ta';
export {
  UDPTLPacket_error_recovery_fec_info,
  _decode_UDPTLPacket_error_recovery_fec_info,
  _encode_UDPTLPacket_error_recovery_fec_info,
} from '../T38/UDPTLPacket-error-recovery-fec-info.ta';

/* START_OF_SYMBOL_DEFINITION UDPTLPacket_error_recovery */
/**
 * @summary UDPTLPacket_error_recovery
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UDPTLPacket-error-recovery ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type UDPTLPacket_error_recovery =
  | { secondary_ifp_packets: _Element[] } /* CHOICE_ALT_ROOT */
  | { fec_info: UDPTLPacket_error_recovery_fec_info } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION UDPTLPacket_error_recovery */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UDPTLPacket_error_recovery */
let _cached_decoder_for_UDPTLPacket_error_recovery: $.ASN1Decoder<UDPTLPacket_error_recovery> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UDPTLPacket_error_recovery */

/* START_OF_SYMBOL_DEFINITION _decode_UDPTLPacket_error_recovery */
/**
 * @summary Decodes an ASN.1 element into a(n) UDPTLPacket_error_recovery
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UDPTLPacket_error_recovery} The decoded data structure.
 */
export function _decode_UDPTLPacket_error_recovery(el: _Element) {
  if (!_cached_decoder_for_UDPTLPacket_error_recovery) {
    _cached_decoder_for_UDPTLPacket_error_recovery = $._decode_inextensible_choice<UDPTLPacket_error_recovery>(
      {
        'CONTEXT 0': [
          'secondary_ifp_packets',
          $._decodeSequenceOf<_Element>(() => $._decodeAny),
        ],
        'CONTEXT 1': ['fec_info', _decode_UDPTLPacket_error_recovery_fec_info],
      }
    );
  }
  return _cached_decoder_for_UDPTLPacket_error_recovery(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UDPTLPacket_error_recovery */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UDPTLPacket_error_recovery */
let _cached_encoder_for_UDPTLPacket_error_recovery: $.ASN1Encoder<UDPTLPacket_error_recovery> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UDPTLPacket_error_recovery */

/* START_OF_SYMBOL_DEFINITION _encode_UDPTLPacket_error_recovery */
/**
 * @summary Encodes a(n) UDPTLPacket_error_recovery into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDPTLPacket_error_recovery, encoded as an ASN.1 Element.
 */
export function _encode_UDPTLPacket_error_recovery(
  value: UDPTLPacket_error_recovery,
  elGetter: $.ASN1Encoder<UDPTLPacket_error_recovery>
) {
  if (!_cached_encoder_for_UDPTLPacket_error_recovery) {
    _cached_encoder_for_UDPTLPacket_error_recovery = $._encode_choice<UDPTLPacket_error_recovery>(
      {
        secondary_ifp_packets: $._encodeSequenceOf<_Element>(
          () => $._encodeAny,
          $.BER
        ),
        fec_info: _encode_UDPTLPacket_error_recovery_fec_info,
      },
      $.BER
    );
  }
  return _cached_encoder_for_UDPTLPacket_error_recovery(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UDPTLPacket_error_recovery */

/* eslint-enable */
