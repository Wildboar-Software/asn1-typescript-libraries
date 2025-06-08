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

/* START_OF_SYMBOL_DEFINITION TransitNoticeType */
/**
 * @summary TransitNoticeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransitNoticeType ::= SEQUENCE {
 *     digitalPostmark        DigitalPostmarkType
 *     }
 * ```
 *
 * @class
 */
export class TransitNoticeType {
  constructor(
    /**
     * @summary `digitalPostmark`.
     * @public
     * @readonly
     */
    readonly digitalPostmark: DigitalPostmarkType
  ) {}

  /**
   * @summary Restructures an object into a TransitNoticeType
   * @description
   *
   * This takes an `object` and converts it to a `TransitNoticeType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `TransitNoticeType`.
   * @returns {TransitNoticeType}
   */
  public static _from_object(
    _o: { [_K in keyof TransitNoticeType]: TransitNoticeType[_K] }
  ): TransitNoticeType {
    return new TransitNoticeType(_o.digitalPostmark);
  }
}
/* END_OF_SYMBOL_DEFINITION TransitNoticeType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TransitNoticeType */
/**
 * @summary The Leading Root Component Types of TransitNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TransitNoticeType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'digitalPostmark',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TransitNoticeType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TransitNoticeType */
/**
 * @summary The Trailing Root Component Types of TransitNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TransitNoticeType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TransitNoticeType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TransitNoticeType */
/**
 * @summary The Extension Addition Component Types of TransitNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TransitNoticeType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TransitNoticeType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TransitNoticeType */
let _cached_decoder_for_TransitNoticeType: $.ASN1Decoder<TransitNoticeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TransitNoticeType */

/* START_OF_SYMBOL_DEFINITION _decode_TransitNoticeType */
/**
 * @summary Decodes an ASN.1 element into a(n) TransitNoticeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TransitNoticeType} The decoded data structure.
 */
export function _decode_TransitNoticeType(el: _Element) {
  if (!_cached_decoder_for_TransitNoticeType) {
    _cached_decoder_for_TransitNoticeType = function (
      el: _Element
    ): TransitNoticeType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'TransitNoticeType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'digitalPostmark';
      let digitalPostmark!: DigitalPostmarkType;
      digitalPostmark = _decode_DigitalPostmarkType(sequence[0]);
      return new TransitNoticeType(digitalPostmark);
    };
  }
  return _cached_decoder_for_TransitNoticeType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TransitNoticeType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TransitNoticeType */
let _cached_encoder_for_TransitNoticeType: $.ASN1Encoder<TransitNoticeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TransitNoticeType */

/* START_OF_SYMBOL_DEFINITION _encode_TransitNoticeType */
/**
 * @summary Encodes a(n) TransitNoticeType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransitNoticeType, encoded as an ASN.1 Element.
 */
export function _encode_TransitNoticeType(
  value: TransitNoticeType,
  elGetter: $.ASN1Encoder<TransitNoticeType>
) {
  if (!_cached_encoder_for_TransitNoticeType) {
    _cached_encoder_for_TransitNoticeType = function (
      value: TransitNoticeType,
      elGetter: $.ASN1Encoder<TransitNoticeType>
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
  return _cached_encoder_for_TransitNoticeType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TransitNoticeType */

/* eslint-enable */
