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

/* START_OF_SYMBOL_DEFINITION ReceiptNoticeType */
/**
 * @summary ReceiptNoticeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReceiptNoticeType ::= SEQUENCE {
 *     operatorPostmark    DigitalPostmarkType
 *     }
 * ```
 *
 * @class
 */
export class ReceiptNoticeType {
  constructor(
    /**
     * @summary `operatorPostmark`.
     * @public
     * @readonly
     */
    readonly operatorPostmark: DigitalPostmarkType
  ) {}

  /**
   * @summary Restructures an object into a ReceiptNoticeType
   * @description
   *
   * This takes an `object` and converts it to a `ReceiptNoticeType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ReceiptNoticeType`.
   * @returns {ReceiptNoticeType}
   */
  public static _from_object(
    _o: { [_K in keyof ReceiptNoticeType]: ReceiptNoticeType[_K] }
  ): ReceiptNoticeType {
    return new ReceiptNoticeType(_o.operatorPostmark);
  }
}
/* END_OF_SYMBOL_DEFINITION ReceiptNoticeType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReceiptNoticeType */
/**
 * @summary The Leading Root Component Types of ReceiptNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReceiptNoticeType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'operatorPostmark',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReceiptNoticeType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReceiptNoticeType */
/**
 * @summary The Trailing Root Component Types of ReceiptNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReceiptNoticeType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReceiptNoticeType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReceiptNoticeType */
/**
 * @summary The Extension Addition Component Types of ReceiptNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReceiptNoticeType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReceiptNoticeType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReceiptNoticeType */
let _cached_decoder_for_ReceiptNoticeType: $.ASN1Decoder<ReceiptNoticeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReceiptNoticeType */

/* START_OF_SYMBOL_DEFINITION _decode_ReceiptNoticeType */
/**
 * @summary Decodes an ASN.1 element into a(n) ReceiptNoticeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReceiptNoticeType} The decoded data structure.
 */
export function _decode_ReceiptNoticeType(el: _Element) {
  if (!_cached_decoder_for_ReceiptNoticeType) {
    _cached_decoder_for_ReceiptNoticeType = function (
      el: _Element
    ): ReceiptNoticeType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'ReceiptNoticeType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'operatorPostmark';
      let operatorPostmark!: DigitalPostmarkType;
      operatorPostmark = _decode_DigitalPostmarkType(sequence[0]);
      return new ReceiptNoticeType(operatorPostmark);
    };
  }
  return _cached_decoder_for_ReceiptNoticeType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReceiptNoticeType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReceiptNoticeType */
let _cached_encoder_for_ReceiptNoticeType: $.ASN1Encoder<ReceiptNoticeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReceiptNoticeType */

/* START_OF_SYMBOL_DEFINITION _encode_ReceiptNoticeType */
/**
 * @summary Encodes a(n) ReceiptNoticeType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceiptNoticeType, encoded as an ASN.1 Element.
 */
export function _encode_ReceiptNoticeType(
  value: ReceiptNoticeType,
  elGetter: $.ASN1Encoder<ReceiptNoticeType>
) {
  if (!_cached_encoder_for_ReceiptNoticeType) {
    _cached_encoder_for_ReceiptNoticeType = function (
      value: ReceiptNoticeType,
      elGetter: $.ASN1Encoder<ReceiptNoticeType>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_DigitalPostmarkType(
              value.operatorPostmark,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ReceiptNoticeType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReceiptNoticeType */

/* eslint-enable */
