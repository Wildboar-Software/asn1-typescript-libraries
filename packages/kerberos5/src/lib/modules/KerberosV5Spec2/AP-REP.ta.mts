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
  EncryptedData,
  _decode_EncryptedData,
  _encode_EncryptedData,
} from '../KerberosV5Spec2/EncryptedData.ta.mjs';
export {
  EncryptedData,
  _decode_EncryptedData,
  _encode_EncryptedData,
} from '../KerberosV5Spec2/EncryptedData.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AP_REP */
/**
 * @summary AP_REP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AP-REP ::= [APPLICATION 15] SEQUENCE {
 *         pvno            [0] INTEGER (5),
 *         msg-type        [1] INTEGER (15),
 *         enc-part        [2] EncryptedData -- EncAPRepPart
 * }
 * ```
 *
 * @class
 */
export class AP_REP {
  constructor(
    /**
     * @summary `pvno`.
     * @public
     * @readonly
     */
    readonly pvno: INTEGER,
    /**
     * @summary `msg_type`.
     * @public
     * @readonly
     */
    readonly msg_type: INTEGER,
    /**
     * @summary `enc_part`.
     * @public
     * @readonly
     */
    readonly enc_part: EncryptedData
  ) {}

  /**
   * @summary Restructures an object into a AP_REP
   * @description
   *
   * This takes an `object` and converts it to a `AP_REP`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AP_REP`.
   * @returns {AP_REP}
   */
  public static _from_object(_o: { [_K in keyof AP_REP]: AP_REP[_K] }): AP_REP {
    return new AP_REP(_o.pvno, _o.msg_type, _o.enc_part);
  }
}
/* END_OF_SYMBOL_DEFINITION AP_REP */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AP_REP */
/**
 * @summary The Leading Root Component Types of AP_REP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AP_REP: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'pvno',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'msg-type',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'enc-part',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AP_REP */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AP_REP */
/**
 * @summary The Trailing Root Component Types of AP_REP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AP_REP: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AP_REP */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AP_REP */
/**
 * @summary The Extension Addition Component Types of AP_REP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AP_REP: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AP_REP */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AP_REP */
let _cached_decoder_for_AP_REP: $.ASN1Decoder<AP_REP> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AP_REP */

/* START_OF_SYMBOL_DEFINITION _decode_AP_REP */
/**
 * @summary Decodes an ASN.1 element into a(n) AP_REP
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AP_REP} The decoded data structure.
 */
export function _decode_AP_REP(el: _Element) {
  if (!_cached_decoder_for_AP_REP) {
    _cached_decoder_for_AP_REP = $._decode_implicit<AP_REP>(
      () =>
        function (el: _Element): AP_REP {
          const sequence: _Element[] = el.sequence;
          if (sequence.length < 3) {
            throw new _ConstructionError(
              'AP-REP contained only ' +
                sequence.length.toString() +
                ' elements.'
            );
          }
          sequence[0].name = 'pvno';
          sequence[1].name = 'msg-type';
          sequence[2].name = 'enc-part';
          let pvno!: INTEGER;
          let msg_type!: INTEGER;
          let enc_part!: EncryptedData;
          pvno = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
            sequence[0]
          );
          msg_type = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
            sequence[1]
          );
          enc_part = $._decode_explicit<EncryptedData>(
            () => _decode_EncryptedData
          )(sequence[2]);
          return new AP_REP(pvno, msg_type, enc_part);
        }
    );
  }
  return _cached_decoder_for_AP_REP(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AP_REP */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AP_REP */
let _cached_encoder_for_AP_REP: $.ASN1Encoder<AP_REP> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AP_REP */

/* START_OF_SYMBOL_DEFINITION _encode_AP_REP */
/**
 * @summary Encodes a(n) AP_REP into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AP_REP, encoded as an ASN.1 Element.
 */
export function _encode_AP_REP(value: AP_REP, elGetter: $.ASN1Encoder<AP_REP>) {
  if (!_cached_encoder_for_AP_REP) {
    _cached_encoder_for_AP_REP = $._encode_implicit(
      _TagClass.application,
      15,
      () =>
        function (value: AP_REP, elGetter: $.ASN1Encoder<AP_REP>): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat([
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  0,
                  () => $._encodeInteger,
                  $.BER
                )(value.pvno, $.BER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => $._encodeInteger,
                  $.BER
                )(value.msg_type, $.BER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  2,
                  () => _encode_EncryptedData,
                  $.BER
                )(value.enc_part, $.BER),
              ])
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_AP_REP(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AP_REP */

/* eslint-enable */
