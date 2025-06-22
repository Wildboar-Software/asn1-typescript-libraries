/* eslint-disable */
import {
  OPTIONAL,
  OCTET_STRING,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
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
  UInt32,
  _decode_UInt32,
  _encode_UInt32,
} from '../KerberosV5Spec2/UInt32.ta.mjs';
import {
  HostAddress,
  _decode_HostAddress,
  _encode_HostAddress,
} from '../KerberosV5Spec2/HostAddress.ta.mjs';

/**
 * @summary EncKrbPrivPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncKrbPrivPart ::= [APPLICATION 28] SEQUENCE {
 *         user-data       [0] OCTET STRING,
 *         timestamp       [1] KerberosTime OPTIONAL,
 *         usec            [2] Microseconds OPTIONAL,
 *         seq-number      [3] UInt32 OPTIONAL,
 *         s-address       [4] HostAddress -- sender's addr --,
 *         r-address       [5] HostAddress OPTIONAL -- recip's addr
 * }
 * ```
 *
 * @class
 */
export class EncKrbPrivPart {
  constructor(
    /**
     * @summary `user_data`.
     * @public
     * @readonly
     */
    readonly user_data: OCTET_STRING,
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
     * @summary `seq_number`.
     * @public
     * @readonly
     */
    readonly seq_number: OPTIONAL<UInt32>,
    /**
     * @summary `s_address`.
     * @public
     * @readonly
     */
    readonly s_address: HostAddress,
    /**
     * @summary `r_address`.
     * @public
     * @readonly
     */
    readonly r_address: OPTIONAL<HostAddress>
  ) {}

  /**
   * @summary Restructures an object into a EncKrbPrivPart
   * @description
   *
   * This takes an `object` and converts it to a `EncKrbPrivPart`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EncKrbPrivPart`.
   * @returns {EncKrbPrivPart}
   */
  public static _from_object(
    _o: { [_K in keyof EncKrbPrivPart]: EncKrbPrivPart[_K] }
  ): EncKrbPrivPart {
    return new EncKrbPrivPart(
      _o.user_data,
      _o.timestamp,
      _o.usec,
      _o.seq_number,
      _o.s_address,
      _o.r_address
    );
  }
}


/**
 * @summary The Leading Root Component Types of EncKrbPrivPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncKrbPrivPart: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'user-data',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'timestamp',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'usec',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'seq-number',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    's-address',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'r-address',
    true,
    $.hasTag(_TagClass.context, 5)
  ),
];


/**
 * @summary The Trailing Root Component Types of EncKrbPrivPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncKrbPrivPart: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EncKrbPrivPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncKrbPrivPart: $.ComponentSpec[] = [];


let _cached_decoder_for_EncKrbPrivPart: $.ASN1Decoder<EncKrbPrivPart> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EncKrbPrivPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncKrbPrivPart} The decoded data structure.
 */
export function _decode_EncKrbPrivPart(el: _Element) {
  if (!_cached_decoder_for_EncKrbPrivPart) {
    _cached_decoder_for_EncKrbPrivPart = $._decode_implicit<EncKrbPrivPart>(
      () =>
        function (el: _Element): EncKrbPrivPart {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let user_data!: OCTET_STRING;
          let timestamp: OPTIONAL<KerberosTime>;
          let usec: OPTIONAL<Microseconds>;
          let seq_number: OPTIONAL<UInt32>;
          let s_address!: HostAddress;
          let r_address: OPTIONAL<HostAddress>;
          /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          /* START_OF_CALLBACKS_MAP */
          const callbacks: $.DecodingMap = {
            'user-data': (_el: _Element): void => {
              user_data = $._decode_explicit<OCTET_STRING>(
                () => $._decodeOctetString
              )(_el);
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
            'seq-number': (_el: _Element): void => {
              seq_number = $._decode_explicit<UInt32>(() => _decode_UInt32)(
                _el
              );
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
            _root_component_type_list_1_spec_for_EncKrbPrivPart,
            _extension_additions_list_spec_for_EncKrbPrivPart,
            _root_component_type_list_2_spec_for_EncKrbPrivPart,
            undefined
          );
          return new EncKrbPrivPart /* SEQUENCE_CONSTRUCTOR_CALL */(
            user_data,
            timestamp,
            usec,
            seq_number,
            s_address,
            r_address
          );
        }
    );
  }
  return _cached_decoder_for_EncKrbPrivPart(el);
}


let _cached_encoder_for_EncKrbPrivPart: $.ASN1Encoder<EncKrbPrivPart> | null = null;


/**
 * @summary Encodes a(n) EncKrbPrivPart into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncKrbPrivPart, encoded as an ASN.1 Element.
 */
export function _encode_EncKrbPrivPart(
  value: EncKrbPrivPart,
  elGetter: $.ASN1Encoder<EncKrbPrivPart>
) {
  if (!_cached_encoder_for_EncKrbPrivPart) {
    _cached_encoder_for_EncKrbPrivPart = $._encode_implicit(
      _TagClass.application,
      28,
      () =>
        function (
          value: EncKrbPrivPart        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat([
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  0,
                  () => $._encodeOctetString,
                  $.DER
                )(value.user_data, $.DER),
                /* IF_ABSENT  */ value.timestamp === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      1,
                      () => _encode_KerberosTime,
                      $.DER
                    )(value.timestamp, $.DER),
                /* IF_ABSENT  */ value.usec === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      2,
                      () => _encode_Microseconds,
                      $.DER
                    )(value.usec, $.DER),
                /* IF_ABSENT  */ value.seq_number === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      3,
                      () => _encode_UInt32,
                      $.DER
                    )(value.seq_number, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  4,
                  () => _encode_HostAddress,
                  $.DER
                )(value.s_address, $.DER),
                /* IF_ABSENT  */ value.r_address === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      5,
                      () => _encode_HostAddress,
                      $.DER
                    )(value.r_address, $.DER),
              ])
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.DER
          );
        },
      $.DER
    );
  }
  return _cached_encoder_for_EncKrbPrivPart(value, elGetter);
}


/* eslint-enable */
