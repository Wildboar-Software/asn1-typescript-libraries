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
  KrbCredInfo,
  _decode_KrbCredInfo,
  _encode_KrbCredInfo,
} from '../KerberosV5Spec2/KrbCredInfo.ta';
export {
  KrbCredInfo,
  _decode_KrbCredInfo,
  _encode_KrbCredInfo,
} from '../KerberosV5Spec2/KrbCredInfo.ta';
import {
  UInt32,
  _decode_UInt32,
  _encode_UInt32,
} from '../KerberosV5Spec2/UInt32.ta';
export {
  UInt32,
  _decode_UInt32,
  _encode_UInt32,
} from '../KerberosV5Spec2/UInt32.ta';
import {
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta';
export {
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta';
import {
  Microseconds,
  _decode_Microseconds,
  _encode_Microseconds,
} from '../KerberosV5Spec2/Microseconds.ta';
export {
  Microseconds,
  _decode_Microseconds,
  _encode_Microseconds,
} from '../KerberosV5Spec2/Microseconds.ta';
import {
  HostAddress,
  _decode_HostAddress,
  _encode_HostAddress,
} from '../KerberosV5Spec2/HostAddress.ta';
export {
  HostAddress,
  _decode_HostAddress,
  _encode_HostAddress,
} from '../KerberosV5Spec2/HostAddress.ta';

/* START_OF_SYMBOL_DEFINITION EncKrbCredPart */
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
/* END_OF_SYMBOL_DEFINITION EncKrbCredPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncKrbCredPart */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncKrbCredPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncKrbCredPart */
/**
 * @summary The Trailing Root Component Types of EncKrbCredPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncKrbCredPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncKrbCredPart */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncKrbCredPart */
/**
 * @summary The Extension Addition Component Types of EncKrbCredPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncKrbCredPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncKrbCredPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncKrbCredPart */
let _cached_decoder_for_EncKrbCredPart: $.ASN1Decoder<EncKrbCredPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncKrbCredPart */

/* START_OF_SYMBOL_DEFINITION _decode_EncKrbCredPart */
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
/* END_OF_SYMBOL_DEFINITION _decode_EncKrbCredPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncKrbCredPart */
let _cached_encoder_for_EncKrbCredPart: $.ASN1Encoder<EncKrbCredPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncKrbCredPart */

/* START_OF_SYMBOL_DEFINITION _encode_EncKrbCredPart */
/**
 * @summary Encodes a(n) EncKrbCredPart into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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
          value: EncKrbCredPart,
          elGetter: $.ASN1Encoder<EncKrbCredPart>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_EncKrbCredPart */

/* eslint-enable */
