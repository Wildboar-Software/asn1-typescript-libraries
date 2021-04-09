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
  Certificate,
  _decode_Certificate,
  _encode_Certificate,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificate.ta';
import {
  SCVPCertID,
  _decode_SCVPCertID,
  _encode_SCVPCertID,
} from '../SCVP-2009/SCVPCertID.ta';

/* START_OF_SYMBOL_DEFINITION PKCReference */
/**
 * @summary PKCReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCReference  ::=  CHOICE {
 *     cert          [0] Certificate,
 *     pkcRef        [1] SCVPCertID
 * }
 * ```
 */
export type PKCReference =
  | { cert: Certificate } /* CHOICE_ALT_ROOT */
  | { pkcRef: SCVPCertID } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION PKCReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCReference */
let _cached_decoder_for_PKCReference: $.ASN1Decoder<PKCReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCReference */

/* START_OF_SYMBOL_DEFINITION _decode_PKCReference */
/**
 * @summary Decodes an ASN.1 element into a(n) PKCReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKCReference} The decoded data structure.
 */
export function _decode_PKCReference(el: _Element) {
  if (!_cached_decoder_for_PKCReference) {
    _cached_decoder_for_PKCReference = $._decode_inextensible_choice<PKCReference>(
      {
        'CONTEXT 0': [
          'cert',
          $._decode_implicit<Certificate>(() => _decode_Certificate),
        ],
        'CONTEXT 1': [
          'pkcRef',
          $._decode_implicit<SCVPCertID>(() => _decode_SCVPCertID),
        ],
      }
    );
  }
  return _cached_decoder_for_PKCReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKCReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCReference */
let _cached_encoder_for_PKCReference: $.ASN1Encoder<PKCReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCReference */

/* START_OF_SYMBOL_DEFINITION _encode_PKCReference */
/**
 * @summary Encodes a(n) PKCReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKCReference, encoded as an ASN.1 Element.
 */
export function _encode_PKCReference(
  value: PKCReference,
  elGetter: $.ASN1Encoder<PKCReference>
) {
  if (!_cached_encoder_for_PKCReference) {
    _cached_encoder_for_PKCReference = $._encode_choice<PKCReference>(
      {
        cert: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_Certificate,
          $.BER
        ),
        pkcRef: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_SCVPCertID,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_PKCReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKCReference */

/* eslint-enable */
