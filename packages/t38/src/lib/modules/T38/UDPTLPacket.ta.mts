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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  UDPTLPacket_error_recovery,
  _decode_UDPTLPacket_error_recovery,
  _encode_UDPTLPacket_error_recovery,
} from '../T38/UDPTLPacket-error-recovery.ta.mjs';
export {
  UDPTLPacket_error_recovery,
  _decode_UDPTLPacket_error_recovery,
  _encode_UDPTLPacket_error_recovery,
} from '../T38/UDPTLPacket-error-recovery.ta.mjs';

/* START_OF_SYMBOL_DEFINITION UDPTLPacket */
/**
 * @summary UDPTLPacket
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UDPTLPacket ::= SEQUENCE {
 *   seq-number          INTEGER(0..65535),
 *   primary-ifp-packet  TYPE-IDENTIFIER.&Type(IFPPacket),
 *   error-recovery
 *     CHOICE {secondary-ifp-packets
 *               SEQUENCE OF TYPE-IDENTIFIER.&Type(IFPPacket),
 *             fec-info
 *               SEQUENCE {fec-npackets  INTEGER,
 *                         fec-data      SEQUENCE OF OCTET STRING}}
 * }
 * ```
 *
 * @class
 */
export class UDPTLPacket {
  constructor(
    /**
     * @summary `seq_number`.
     * @public
     * @readonly
     */
    readonly seq_number: INTEGER,
    /**
     * @summary `primary_ifp_packet`.
     * @public
     * @readonly
     */
    readonly primary_ifp_packet: _Element,
    /**
     * @summary `error_recovery`.
     * @public
     * @readonly
     */
    readonly error_recovery: UDPTLPacket_error_recovery
  ) {}

  /**
   * @summary Restructures an object into a UDPTLPacket
   * @description
   *
   * This takes an `object` and converts it to a `UDPTLPacket`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `UDPTLPacket`.
   * @returns {UDPTLPacket}
   */
  public static _from_object(
    _o: { [_K in keyof UDPTLPacket]: UDPTLPacket[_K] }
  ): UDPTLPacket {
    return new UDPTLPacket(
      _o.seq_number,
      _o.primary_ifp_packet,
      _o.error_recovery
    );
  }
}
/* END_OF_SYMBOL_DEFINITION UDPTLPacket */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UDPTLPacket */
/**
 * @summary The Leading Root Component Types of UDPTLPacket
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UDPTLPacket: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'seq-number',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'primary-ifp-packet',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'error-recovery',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UDPTLPacket */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UDPTLPacket */
/**
 * @summary The Trailing Root Component Types of UDPTLPacket
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UDPTLPacket: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UDPTLPacket */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UDPTLPacket */
/**
 * @summary The Extension Addition Component Types of UDPTLPacket
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UDPTLPacket: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UDPTLPacket */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UDPTLPacket */
let _cached_decoder_for_UDPTLPacket: $.ASN1Decoder<UDPTLPacket> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UDPTLPacket */

/* START_OF_SYMBOL_DEFINITION _decode_UDPTLPacket */
/**
 * @summary Decodes an ASN.1 element into a(n) UDPTLPacket
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UDPTLPacket} The decoded data structure.
 */
export function _decode_UDPTLPacket(el: _Element) {
  if (!_cached_decoder_for_UDPTLPacket) {
    _cached_decoder_for_UDPTLPacket = function (el: _Element): UDPTLPacket {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'UDPTLPacket contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'seq-number';
      sequence[1].name = 'primary-ifp-packet';
      sequence[2].name = 'error-recovery';
      let seq_number!: INTEGER;
      let primary_ifp_packet!: _Element;
      let error_recovery!: UDPTLPacket_error_recovery;
      seq_number = $._decodeInteger(sequence[0]);
      primary_ifp_packet = $._decodeAny(sequence[1]);
      error_recovery = _decode_UDPTLPacket_error_recovery(sequence[2]);
      return new UDPTLPacket(seq_number, primary_ifp_packet, error_recovery);
    };
  }
  return _cached_decoder_for_UDPTLPacket(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UDPTLPacket */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UDPTLPacket */
let _cached_encoder_for_UDPTLPacket: $.ASN1Encoder<UDPTLPacket> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UDPTLPacket */

/* START_OF_SYMBOL_DEFINITION _encode_UDPTLPacket */
/**
 * @summary Encodes a(n) UDPTLPacket into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDPTLPacket, encoded as an ASN.1 Element.
 */
export function _encode_UDPTLPacket(
  value: UDPTLPacket,
  elGetter: $.ASN1Encoder<UDPTLPacket>
) {
  if (!_cached_encoder_for_UDPTLPacket) {
    _cached_encoder_for_UDPTLPacket = function (
      value: UDPTLPacket,
      elGetter: $.ASN1Encoder<UDPTLPacket>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeInteger(value.seq_number, $.BER),
            /* REQUIRED   */ $._encodeAny(value.primary_ifp_packet, $.BER),
            /* REQUIRED   */ _encode_UDPTLPacket_error_recovery(
              value.error_recovery,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_UDPTLPacket(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UDPTLPacket */

/* eslint-enable */
