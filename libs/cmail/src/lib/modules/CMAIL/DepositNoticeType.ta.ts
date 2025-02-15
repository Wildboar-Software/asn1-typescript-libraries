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
  DigitalPostmarkType,
  _decode_DigitalPostmarkType,
  _encode_DigitalPostmarkType,
} from '../CMAIL/DigitalPostmarkType.ta';
export {
  DigitalPostmarkType,
  _decode_DigitalPostmarkType,
  _encode_DigitalPostmarkType,
} from '../CMAIL/DigitalPostmarkType.ta';

/* START_OF_SYMBOL_DEFINITION DepositNoticeType */
/**
 * @summary DepositNoticeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DepositNoticeType ::= SEQUENCE {
 *     digitalPostmark        DigitalPostmarkType
 *     }
 * ```
 *
 * @class
 */
export class DepositNoticeType {
  constructor(
    /**
     * @summary `digitalPostmark`.
     * @public
     * @readonly
     */
    readonly digitalPostmark: DigitalPostmarkType
  ) {}

  /**
   * @summary Restructures an object into a DepositNoticeType
   * @description
   *
   * This takes an `object` and converts it to a `DepositNoticeType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DepositNoticeType`.
   * @returns {DepositNoticeType}
   */
  public static _from_object(
    _o: { [_K in keyof DepositNoticeType]: DepositNoticeType[_K] }
  ): DepositNoticeType {
    return new DepositNoticeType(_o.digitalPostmark);
  }
}
/* END_OF_SYMBOL_DEFINITION DepositNoticeType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DepositNoticeType */
/**
 * @summary The Leading Root Component Types of DepositNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DepositNoticeType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'digitalPostmark',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DepositNoticeType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DepositNoticeType */
/**
 * @summary The Trailing Root Component Types of DepositNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DepositNoticeType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DepositNoticeType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DepositNoticeType */
/**
 * @summary The Extension Addition Component Types of DepositNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DepositNoticeType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DepositNoticeType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DepositNoticeType */
let _cached_decoder_for_DepositNoticeType: $.ASN1Decoder<DepositNoticeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DepositNoticeType */

/* START_OF_SYMBOL_DEFINITION _decode_DepositNoticeType */
/**
 * @summary Decodes an ASN.1 element into a(n) DepositNoticeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DepositNoticeType} The decoded data structure.
 */
export function _decode_DepositNoticeType(el: _Element) {
  if (!_cached_decoder_for_DepositNoticeType) {
    _cached_decoder_for_DepositNoticeType = function (
      el: _Element
    ): DepositNoticeType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'DepositNoticeType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'digitalPostmark';
      let digitalPostmark!: DigitalPostmarkType;
      digitalPostmark = _decode_DigitalPostmarkType(sequence[0]);
      return new DepositNoticeType(digitalPostmark);
    };
  }
  return _cached_decoder_for_DepositNoticeType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DepositNoticeType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DepositNoticeType */
let _cached_encoder_for_DepositNoticeType: $.ASN1Encoder<DepositNoticeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DepositNoticeType */

/* START_OF_SYMBOL_DEFINITION _encode_DepositNoticeType */
/**
 * @summary Encodes a(n) DepositNoticeType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DepositNoticeType, encoded as an ASN.1 Element.
 */
export function _encode_DepositNoticeType(
  value: DepositNoticeType,
  elGetter: $.ASN1Encoder<DepositNoticeType>
) {
  if (!_cached_encoder_for_DepositNoticeType) {
    _cached_encoder_for_DepositNoticeType = function (
      value: DepositNoticeType,
      elGetter: $.ASN1Encoder<DepositNoticeType>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_DigitalPostmarkType(
              value.digitalPostmark,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_DepositNoticeType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DepositNoticeType */

/* eslint-enable */
