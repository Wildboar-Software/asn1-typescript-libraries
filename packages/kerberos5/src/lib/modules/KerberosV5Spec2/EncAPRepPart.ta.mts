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
} from '../KerberosV5Spec2/KerberosTime.ta.mjs';
export {
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta.mjs';
import {
  Microseconds,
  _decode_Microseconds,
  _encode_Microseconds,
} from '../KerberosV5Spec2/Microseconds.ta.mjs';
export {
  Microseconds,
  _decode_Microseconds,
  _encode_Microseconds,
} from '../KerberosV5Spec2/Microseconds.ta.mjs';
import {
  EncryptionKey,
  _decode_EncryptionKey,
  _encode_EncryptionKey,
} from '../KerberosV5Spec2/EncryptionKey.ta.mjs';
export {
  EncryptionKey,
  _decode_EncryptionKey,
  _encode_EncryptionKey,
} from '../KerberosV5Spec2/EncryptionKey.ta.mjs';
import {
  UInt32,
  _decode_UInt32,
  _encode_UInt32,
} from '../KerberosV5Spec2/UInt32.ta.mjs';
export {
  UInt32,
  _decode_UInt32,
  _encode_UInt32,
} from '../KerberosV5Spec2/UInt32.ta.mjs';

/* START_OF_SYMBOL_DEFINITION EncAPRepPart */
/**
 * @summary EncAPRepPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncAPRepPart ::= [APPLICATION 27] SEQUENCE {
 *         ctime           [0] KerberosTime,
 *         cusec           [1] Microseconds,
 *         subkey          [2] EncryptionKey OPTIONAL,
 *         seq-number      [3] UInt32 OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class EncAPRepPart {
  constructor(
    /**
     * @summary `ctime`.
     * @public
     * @readonly
     */
    readonly ctime: KerberosTime,
    /**
     * @summary `cusec`.
     * @public
     * @readonly
     */
    readonly cusec: Microseconds,
    /**
     * @summary `subkey`.
     * @public
     * @readonly
     */
    readonly subkey: OPTIONAL<EncryptionKey>,
    /**
     * @summary `seq_number`.
     * @public
     * @readonly
     */
    readonly seq_number: OPTIONAL<UInt32>
  ) {}

  /**
   * @summary Restructures an object into a EncAPRepPart
   * @description
   *
   * This takes an `object` and converts it to a `EncAPRepPart`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EncAPRepPart`.
   * @returns {EncAPRepPart}
   */
  public static _from_object(
    _o: { [_K in keyof EncAPRepPart]: EncAPRepPart[_K] }
  ): EncAPRepPart {
    return new EncAPRepPart(_o.ctime, _o.cusec, _o.subkey, _o.seq_number);
  }
}
/* END_OF_SYMBOL_DEFINITION EncAPRepPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncAPRepPart */
/**
 * @summary The Leading Root Component Types of EncAPRepPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncAPRepPart: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'ctime',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'cusec',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'subkey',
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncAPRepPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncAPRepPart */
/**
 * @summary The Trailing Root Component Types of EncAPRepPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncAPRepPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncAPRepPart */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncAPRepPart */
/**
 * @summary The Extension Addition Component Types of EncAPRepPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncAPRepPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncAPRepPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncAPRepPart */
let _cached_decoder_for_EncAPRepPart: $.ASN1Decoder<EncAPRepPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncAPRepPart */

/* START_OF_SYMBOL_DEFINITION _decode_EncAPRepPart */
/**
 * @summary Decodes an ASN.1 element into a(n) EncAPRepPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncAPRepPart} The decoded data structure.
 */
export function _decode_EncAPRepPart(el: _Element) {
  if (!_cached_decoder_for_EncAPRepPart) {
    _cached_decoder_for_EncAPRepPart = $._decode_implicit<EncAPRepPart>(
      () =>
        function (el: _Element): EncAPRepPart {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let ctime!: KerberosTime;
          let cusec!: Microseconds;
          let subkey: OPTIONAL<EncryptionKey>;
          let seq_number: OPTIONAL<UInt32>;
          /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          /* START_OF_CALLBACKS_MAP */
          const callbacks: $.DecodingMap = {
            ctime: (_el: _Element): void => {
              ctime = $._decode_explicit<KerberosTime>(
                () => _decode_KerberosTime
              )(_el);
            },
            cusec: (_el: _Element): void => {
              cusec = $._decode_explicit<Microseconds>(
                () => _decode_Microseconds
              )(_el);
            },
            subkey: (_el: _Element): void => {
              subkey = $._decode_explicit<EncryptionKey>(
                () => _decode_EncryptionKey
              )(_el);
            },
            'seq-number': (_el: _Element): void => {
              seq_number = $._decode_explicit<UInt32>(() => _decode_UInt32)(
                _el
              );
            },
          };
          /* END_OF_CALLBACKS_MAP */
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_EncAPRepPart,
            _extension_additions_list_spec_for_EncAPRepPart,
            _root_component_type_list_2_spec_for_EncAPRepPart,
            undefined
          );
          return new EncAPRepPart /* SEQUENCE_CONSTRUCTOR_CALL */(
            ctime,
            cusec,
            subkey,
            seq_number
          );
        }
    );
  }
  return _cached_decoder_for_EncAPRepPart(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncAPRepPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncAPRepPart */
let _cached_encoder_for_EncAPRepPart: $.ASN1Encoder<EncAPRepPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncAPRepPart */

/* START_OF_SYMBOL_DEFINITION _encode_EncAPRepPart */
/**
 * @summary Encodes a(n) EncAPRepPart into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncAPRepPart, encoded as an ASN.1 Element.
 */
export function _encode_EncAPRepPart(
  value: EncAPRepPart,
  elGetter: $.ASN1Encoder<EncAPRepPart>
) {
  if (!_cached_encoder_for_EncAPRepPart) {
    _cached_encoder_for_EncAPRepPart = $._encode_implicit(
      _TagClass.application,
      27,
      () =>
        function (
          value: EncAPRepPart,
          elGetter: $.ASN1Encoder<EncAPRepPart>
        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat([
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  0,
                  () => _encode_KerberosTime,
                  $.BER
                )(value.ctime, $.BER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_Microseconds,
                  $.BER
                )(value.cusec, $.BER),
                /* IF_ABSENT  */ value.subkey === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      2,
                      () => _encode_EncryptionKey,
                      $.BER
                    )(value.subkey, $.BER),
                /* IF_ABSENT  */ value.seq_number === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      3,
                      () => _encode_UInt32,
                      $.BER
                    )(value.seq_number, $.BER),
              ])
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_EncAPRepPart(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncAPRepPart */

/* eslint-enable */
