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
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta.js';
export {
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta.js';
import {
  Microseconds,
  _decode_Microseconds,
  _encode_Microseconds,
} from '../KerberosV5Spec2/Microseconds.ta.js';
export {
  Microseconds,
  _decode_Microseconds,
  _encode_Microseconds,
} from '../KerberosV5Spec2/Microseconds.ta.js';
import {
  UInt32,
  _decode_UInt32,
  _encode_UInt32,
} from '../KerberosV5Spec2/UInt32.ta.js';
export {
  UInt32,
  _decode_UInt32,
  _encode_UInt32,
} from '../KerberosV5Spec2/UInt32.ta.js';
import {
  HostAddress,
  _decode_HostAddress,
  _encode_HostAddress,
} from '../KerberosV5Spec2/HostAddress.ta.js';
export {
  HostAddress,
  _decode_HostAddress,
  _encode_HostAddress,
} from '../KerberosV5Spec2/HostAddress.ta.js';

/* START_OF_SYMBOL_DEFINITION KRB_SAFE_BODY */
/**
 * @summary KRB_SAFE_BODY
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KRB-SAFE-BODY ::= SEQUENCE {
 *         user-data       [0] OCTET STRING,
 *         timestamp       [1] KerberosTime OPTIONAL,
 *         usec            [2] Microseconds OPTIONAL,
 *         seq-number      [3] UInt32 OPTIONAL,
 *         s-address       [4] HostAddress,
 *         r-address       [5] HostAddress OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class KRB_SAFE_BODY {
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
   * @summary Restructures an object into a KRB_SAFE_BODY
   * @description
   *
   * This takes an `object` and converts it to a `KRB_SAFE_BODY`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `KRB_SAFE_BODY`.
   * @returns {KRB_SAFE_BODY}
   */
  public static _from_object(
    _o: { [_K in keyof KRB_SAFE_BODY]: KRB_SAFE_BODY[_K] }
  ): KRB_SAFE_BODY {
    return new KRB_SAFE_BODY(
      _o.user_data,
      _o.timestamp,
      _o.usec,
      _o.seq_number,
      _o.s_address,
      _o.r_address
    );
  }
}
/* END_OF_SYMBOL_DEFINITION KRB_SAFE_BODY */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KRB_SAFE_BODY */
/**
 * @summary The Leading Root Component Types of KRB_SAFE_BODY
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KRB_SAFE_BODY: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'user-data',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'timestamp',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'usec',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'seq-number',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    's-address',
    false,
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KRB_SAFE_BODY */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KRB_SAFE_BODY */
/**
 * @summary The Trailing Root Component Types of KRB_SAFE_BODY
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KRB_SAFE_BODY: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KRB_SAFE_BODY */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KRB_SAFE_BODY */
/**
 * @summary The Extension Addition Component Types of KRB_SAFE_BODY
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KRB_SAFE_BODY: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KRB_SAFE_BODY */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KRB_SAFE_BODY */
let _cached_decoder_for_KRB_SAFE_BODY: $.ASN1Decoder<KRB_SAFE_BODY> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KRB_SAFE_BODY */

/* START_OF_SYMBOL_DEFINITION _decode_KRB_SAFE_BODY */
/**
 * @summary Decodes an ASN.1 element into a(n) KRB_SAFE_BODY
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KRB_SAFE_BODY} The decoded data structure.
 */
export function _decode_KRB_SAFE_BODY(el: _Element) {
  if (!_cached_decoder_for_KRB_SAFE_BODY) {
    _cached_decoder_for_KRB_SAFE_BODY = function (el: _Element): KRB_SAFE_BODY {
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
          usec = $._decode_explicit<Microseconds>(() => _decode_Microseconds)(
            _el
          );
        },
        'seq-number': (_el: _Element): void => {
          seq_number = $._decode_explicit<UInt32>(() => _decode_UInt32)(_el);
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
        _root_component_type_list_1_spec_for_KRB_SAFE_BODY,
        _extension_additions_list_spec_for_KRB_SAFE_BODY,
        _root_component_type_list_2_spec_for_KRB_SAFE_BODY,
        undefined
      );
      return new KRB_SAFE_BODY /* SEQUENCE_CONSTRUCTOR_CALL */(
        user_data,
        timestamp,
        usec,
        seq_number,
        s_address,
        r_address
      );
    };
  }
  return _cached_decoder_for_KRB_SAFE_BODY(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KRB_SAFE_BODY */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KRB_SAFE_BODY */
let _cached_encoder_for_KRB_SAFE_BODY: $.ASN1Encoder<KRB_SAFE_BODY> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KRB_SAFE_BODY */

/* START_OF_SYMBOL_DEFINITION _encode_KRB_SAFE_BODY */
/**
 * @summary Encodes a(n) KRB_SAFE_BODY into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KRB_SAFE_BODY, encoded as an ASN.1 Element.
 */
export function _encode_KRB_SAFE_BODY(
  value: KRB_SAFE_BODY,
  elGetter: $.ASN1Encoder<KRB_SAFE_BODY>
) {
  if (!_cached_encoder_for_KRB_SAFE_BODY) {
    _cached_encoder_for_KRB_SAFE_BODY = function (
      value: KRB_SAFE_BODY,
      elGetter: $.ASN1Encoder<KRB_SAFE_BODY>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => $._encodeOctetString,
              $.BER
            )(value.user_data, $.BER),
            /* IF_ABSENT  */ value.timestamp === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_KerberosTime,
                  $.BER
                )(value.timestamp, $.BER),
            /* IF_ABSENT  */ value.usec === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  2,
                  () => _encode_Microseconds,
                  $.BER
                )(value.usec, $.BER),
            /* IF_ABSENT  */ value.seq_number === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  3,
                  () => _encode_UInt32,
                  $.BER
                )(value.seq_number, $.BER),
            /* REQUIRED   */ $._encode_explicit(
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
    };
  }
  return _cached_encoder_for_KRB_SAFE_BODY(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KRB_SAFE_BODY */

/* eslint-enable */
