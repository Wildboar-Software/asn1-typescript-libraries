/* eslint-disable */
import {
  INTEGER,
  OCTET_STRING,
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
 * @summary UDPTLPacket_error_recovery_fec_info
 * @description
 *
 * Parity FEC covering prior primary IFP packets. Each FEC message
 * is a column-wise XOR of `fec-npackets` length-normalized
 * primaries. A single lost primary among those covered can be
 * rebuilt. Multiple octet strings in `fec-data` are interleaved
 * (burst protection): for packet sequence `Seq`, FEC message I of
 * m, covering n primaries each, the covered sequences are spaced
 * by m as in Annex C §C.2.2. ITU-T Rec. T.38 (11/2015)
 * [§9.1.3.1](https://www.itu.int/rec/T-REC-T.38-201511-I),
 * Annex C.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UDPTLPacket-error-recovery-fec-info ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class UDPTLPacket_error_recovery_fec_info {
  constructor(
    /**
     * @summary `fec_npackets`.
     * @description How many prior primary IFP packets each FEC
     * message covers (`n` in Annex C). For one FEC message, the
     * covered sequence numbers are taken from `seq-number` and
     * this value as in §C.2.2. ITU-T Rec. T.38 (11/2015)
     * §9.1.3.1, Annex C.
     * @public
     * @readonly
     */
    readonly fec_npackets: INTEGER,
    /**
     * @summary `fec_data`.
     * @description One octet string per FEC message (`m` is the
     * SEQUENCE OF count). Each string is the parity row (length
     * of the longest contributing primary plus 2 octets). ITU-T
     * Rec. T.38 (11/2015) §9.1.3.1, Annex C §C.2.1-§C.2.2.
     * @public
     * @readonly
     */
    readonly fec_data: OCTET_STRING[]
  ) {}

  /**
   * @summary Restructures an object into a UDPTLPacket_error_recovery_fec_info
   * @description
   *
   * This takes an `object` and converts it to a `UDPTLPacket_error_recovery_fec_info`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `UDPTLPacket_error_recovery_fec_info`.
   * @returns {UDPTLPacket_error_recovery_fec_info}
   */
  public static _from_object(
    _o: {
      [_K in keyof UDPTLPacket_error_recovery_fec_info]: UDPTLPacket_error_recovery_fec_info[_K];
    }
  ): UDPTLPacket_error_recovery_fec_info {
    return new UDPTLPacket_error_recovery_fec_info(
      _o.fec_npackets,
      _o.fec_data
    );
  }
}


/**
 * @summary The Leading Root Component Types of UDPTLPacket_error_recovery_fec_info
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UDPTLPacket_error_recovery_fec_info: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'fec-npackets',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'fec-data',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of UDPTLPacket_error_recovery_fec_info
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UDPTLPacket_error_recovery_fec_info: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of UDPTLPacket_error_recovery_fec_info
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UDPTLPacket_error_recovery_fec_info: $.ComponentSpec[] = [];


let _cached_decoder_for_UDPTLPacket_error_recovery_fec_info: $.ASN1Decoder<UDPTLPacket_error_recovery_fec_info> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UDPTLPacket_error_recovery_fec_info
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UDPTLPacket_error_recovery_fec_info} The decoded data structure.
 */
export function _decode_UDPTLPacket_error_recovery_fec_info(el: _Element): UDPTLPacket_error_recovery_fec_info {
  if (!_cached_decoder_for_UDPTLPacket_error_recovery_fec_info) {
    _cached_decoder_for_UDPTLPacket_error_recovery_fec_info = function (
      el: _Element
    ): UDPTLPacket_error_recovery_fec_info {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'UDPTLPacket-error-recovery-fec-info contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'fec-npackets';
      sequence[1].name = 'fec-data';
      let fec_npackets!: INTEGER;
      let fec_data!: OCTET_STRING[];
      fec_npackets = $._decodeInteger(sequence[0]);
      fec_data = $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString)(
        sequence[1]
      );
      return new UDPTLPacket_error_recovery_fec_info(fec_npackets, fec_data);
    };
  }
  return _cached_decoder_for_UDPTLPacket_error_recovery_fec_info(el);
}


let _cached_encoder_for_UDPTLPacket_error_recovery_fec_info: $.ASN1Encoder<UDPTLPacket_error_recovery_fec_info> | null = null;


/**
 * @summary Encodes a(n) UDPTLPacket_error_recovery_fec_info into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDPTLPacket_error_recovery_fec_info, encoded as an ASN.1 Element.
 */
export function _encode_UDPTLPacket_error_recovery_fec_info(
  value: UDPTLPacket_error_recovery_fec_info,
  elGetter: $.ASN1Encoder<UDPTLPacket_error_recovery_fec_info>
): _Element {
  if (!_cached_encoder_for_UDPTLPacket_error_recovery_fec_info) {
    _cached_encoder_for_UDPTLPacket_error_recovery_fec_info = function (
      value: UDPTLPacket_error_recovery_fec_info    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeInteger(value.fec_npackets, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<OCTET_STRING>(
              () => $._encodeOctetString,
              $.BER
            )(value.fec_data, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_UDPTLPacket_error_recovery_fec_info(
    value,
    elGetter
  );
}


/* eslint-enable */
