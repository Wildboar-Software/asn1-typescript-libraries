/* eslint-disable */
import {
  OPTIONAL,
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
  KrbCredInfo,
  _decode_KrbCredInfo,
  _encode_KrbCredInfo,
} from '../KerberosV5Spec2/KrbCredInfo.ta.mjs';
import {
  UInt32,
  _decode_UInt32,
  _encode_UInt32,
} from '../KerberosV5Spec2/UInt32.ta.mjs';
import {
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta.mjs';
import {
  Microseconds,
  _decode_Microseconds,
  _encode_Microseconds,
} from '../KerberosV5Spec2/Microseconds.ta.mjs';
import {
  HostAddress,
  _decode_HostAddress,
  _encode_HostAddress,
} from '../KerberosV5Spec2/HostAddress.ta.mjs';

/**
 * @summary EncKrbCredPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncKrbCredPart ::= [APPLICATION 29] SEQUENCE {
 *         ticket-info     [0] SEQUENCE OF KrbCredInfo,
 *         nonce           [1] UInt32 OPTIONAL,
 *         timestamp       [2] KerberosTime OPTIONAL,
 *         usec            [3] Microseconds OPTIONAL,
 *         s-address       [4] HostAddress OPTIONAL,
 *         r-address       [5] HostAddress OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class EncKrbCredPart {
  constructor(
    /**
     * @summary `ticket_info`.
     * @public
     * @readonly
     */
    readonly ticket_info: KrbCredInfo[],
    /**
     * @summary `nonce`.
     * @public
     * @readonly
     */
    readonly nonce: OPTIONAL<UInt32>,
    /**
     * @summary `timestamp`.
     * @public
     * @readonly
     */
    readonly timestamp: OPTIONAL<KerberosTime>,
    /**
     * @summary `usec`.
     * @public
     * @readonly
     */
    readonly usec: OPTIONAL<Microseconds>,
    /**
     * @summary `s_address`.
     * @public
     * @readonly
     */
    readonly s_address: OPTIONAL<HostAddress>,
    /**
     * @summary `r_address`.
     * @public
     * @readonly
     */
    readonly r_address: OPTIONAL<HostAddress>
  ) {}

  /**
   * @summary Restructures an object into a EncKrbCredPart
   * @description
   *
   * This takes an `object` and converts it to a `EncKrbCredPart`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EncKrbCredPart`.
   * @returns {EncKrbCredPart}
   */
  public static _from_object(
    _o: { [_K in keyof EncKrbCredPart]: EncKrbCredPart[_K] }
  ): EncKrbCredPart {
    return new EncKrbCredPart(
      _o.ticket_info,
      _o.nonce,
      _o.timestamp,
      _o.usec,
      _o.s_address,
      _o.r_address
    );
  }
}


/**
 * @summary The Leading Root Component Types of EncKrbCredPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncKrbCredPart: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'ticket-info',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'nonce',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'timestamp',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'usec',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    's-address',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'r-address',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of EncKrbCredPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncKrbCredPart: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EncKrbCredPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncKrbCredPart: $.ComponentSpec[] = [];


let _cached_decoder_for_EncKrbCredPart: $.ASN1Decoder<EncKrbCredPart> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EncKrbCredPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncKrbCredPart} The decoded data structure.
 */
export function _decode_EncKrbCredPart(el: _Element) {
  if (!_cached_decoder_for_EncKrbCredPart) {
    _cached_decoder_for_EncKrbCredPart = $._decode_implicit<EncKrbCredPart>(
      () =>
        function (el: _Element): EncKrbCredPart {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let ticket_info!: KrbCredInfo[];
          let nonce: OPTIONAL<UInt32>;
          let timestamp: OPTIONAL<KerberosTime>;
          let usec: OPTIONAL<Microseconds>;
          let s_address: OPTIONAL<HostAddress>;
          let r_address: OPTIONAL<HostAddress>;
          /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          /* START_OF_CALLBACKS_MAP */
          const callbacks: $.DecodingMap = {
            'ticket-info': (_el: _Element): void => {
              ticket_info = $._decode_explicit<KrbCredInfo[]>(() =>
                $._decodeSequenceOf<KrbCredInfo>(() => _decode_KrbCredInfo)
              )(_el);
            },
            nonce: (_el: _Element): void => {
              nonce = $._decode_explicit<UInt32>(() => _decode_UInt32)(_el);
            },
            timestamp: (_el: _Element): void => {
              timestamp = $._decode_explicit<KerberosTime>(
                () => _decode_KerberosTime
              )(_el);
            },
            usec: (_el: _Element): void => {
              usec = $._decode_explicit<Microseconds>(
                () => _decode_Microseconds
              )(_el);
            },
            's-address': (_el: _Element): void => {
              s_address = $._decode_explicit<HostAddress>(
                () => _decode_HostAddress
              )(_el);
            },
            'r-address': (_el: _Element): void => {
              r_address = $._decode_explicit<HostAddress>(
                () => _decode_HostAddress
              )(_el);
            },
          };
          /* END_OF_CALLBACKS_MAP */
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_EncKrbCredPart,
            _extension_additions_list_spec_for_EncKrbCredPart,
            _root_component_type_list_2_spec_for_EncKrbCredPart,
            undefined
          );
          return new EncKrbCredPart /* SEQUENCE_CONSTRUCTOR_CALL */(
            ticket_info,
            nonce,
            timestamp,
            usec,
            s_address,
            r_address
          );
        }
    );
  }
  return _cached_decoder_for_EncKrbCredPart(el);
}


let _cached_encoder_for_EncKrbCredPart: $.ASN1Encoder<EncKrbCredPart> | null = null;


/**
 * @summary Encodes a(n) EncKrbCredPart into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncKrbCredPart, encoded as an ASN.1 Element.
 */
export function _encode_EncKrbCredPart(
  value: EncKrbCredPart,
  elGetter: $.ASN1Encoder<EncKrbCredPart>
) {
  if (!_cached_encoder_for_EncKrbCredPart) {
    _cached_encoder_for_EncKrbCredPart = $._encode_implicit(
      _TagClass.application,
      29,
      () =>
        function (
          value: EncKrbCredPart        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat([
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  0,
                  () =>
                    $._encodeSequenceOf<KrbCredInfo>(
                      () => _encode_KrbCredInfo,
                      $.BER
                    ),
                  $.BER
                )(value.ticket_info, $.BER),
                /* IF_ABSENT  */ value.nonce === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      1,
                      () => _encode_UInt32,
                      $.BER
                    )(value.nonce, $.BER),
                /* IF_ABSENT  */ value.timestamp === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      2,
                      () => _encode_KerberosTime,
                      $.BER
                    )(value.timestamp, $.BER),
                /* IF_ABSENT  */ value.usec === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      3,
                      () => _encode_Microseconds,
                      $.BER
                    )(value.usec, $.BER),
                /* IF_ABSENT  */ value.s_address === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      4,
                      () => _encode_HostAddress,
                      $.BER
                    )(value.s_address, $.BER),
                /* IF_ABSENT  */ value.r_address === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      5,
                      () => _encode_HostAddress,
                      $.BER
                    )(value.r_address, $.BER),
              ])
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_EncKrbCredPart(value, elGetter);
}


/* eslint-enable */
