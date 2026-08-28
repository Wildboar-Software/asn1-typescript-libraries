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
import {
  UDPTLPacket_error_recovery,
  _decode_UDPTLPacket_error_recovery,
  _encode_UDPTLPacket_error_recovery,
} from '../T38/UDPTLPacket-error-recovery.ta.mjs';

/**
 * @summary UDPTLPacket
 * @description
 *
 * One UDPTL datagram: sequence number, the primary IFP packet for
 * that sequence, and either redundant prior IFP packets or parity
 * FEC, never both in the same packet. First primary uses sequence
 * 0; later primaries increment by one. The primary must match the
 * sequence number (payload 15 was generated five payloads after
 * payload 10). Gateways need not send error-recovery; receivers
 * may ignore redundancy. Parity FEC is optional; a FEC receiver
 * should also accept redundancy. ITU-T Rec. T.38 (11/2015)
 * [§9.1](https://www.itu.int/rec/T-REC-T.38-201511-I), Annex A,
 * Annex C.
 *
 * Annex A encoding is PER BASIC-ALIGNED; these codecs use BER.
 * `primary-ifp-packet` is an open type constrained to
 * `IFPPacket` - decode with `_decode_IFPPacket`.
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
 */
export class UDPTLPacket {
  constructor(
    /**
     * @summary `seq_number`.
     * @description Identifies this primary for reordering and
     * loss detection. First primary is 0; each later primary is
     * the next integer. ITU-T Rec. T.38 (11/2015) §9.1.2.1.
     * @public
     * @readonly
     */
    readonly seq_number: INTEGER,
    /**
     * @summary `primary_ifp_packet`.
     * @description The IFP packet for `seq-number`, as an open
     * type (`TYPE-IDENTIFIER.&Type(IFPPacket)`). Decode with
     * `_decode_IFPPacket`. ITU-T Rec. T.38 (11/2015) §9.1.1.
     * @public
     * @readonly
     */
    readonly primary_ifp_packet: _Element,
    /**
     * @summary `error_recovery`.
     * @description Either redundant prior primaries or parity
     * FEC, chosen from capabilities exchange. Mixing both in one
     * packet is invalid. ITU-T Rec. T.38 (11/2015) §9.1.3.
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
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'primary-ifp-packet',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'error-recovery',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of UDPTLPacket
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UDPTLPacket: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of UDPTLPacket
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UDPTLPacket: $.ComponentSpec[] = [];


let _cached_decoder_for_UDPTLPacket: $.ASN1Decoder<UDPTLPacket> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UDPTLPacket
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UDPTLPacket} The decoded data structure.
 */
export function _decode_UDPTLPacket(el: _Element): UDPTLPacket {
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


let _cached_encoder_for_UDPTLPacket: $.ASN1Encoder<UDPTLPacket> | null = null;


/**
 * @summary Encodes a(n) UDPTLPacket into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDPTLPacket, encoded as an ASN.1 Element.
 */
export function _encode_UDPTLPacket(
  value: UDPTLPacket,
  elGetter: $.ASN1Encoder<UDPTLPacket>
): _Element {
  if (!_cached_encoder_for_UDPTLPacket) {
    _cached_encoder_for_UDPTLPacket = function (
      value: UDPTLPacket    ): _Element {
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


/* eslint-enable */
