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
  DigitalPostmarkType,
  _decode_DigitalPostmarkType,
  _encode_DigitalPostmarkType,
} from '../CMAIL/DigitalPostmarkType.ta.mjs';
export {
  DigitalPostmarkType,
  _decode_DigitalPostmarkType,
  _encode_DigitalPostmarkType,
} from '../CMAIL/DigitalPostmarkType.ta.mjs';
import {
  EntityEnvelopeInformationType,
  _decode_EntityEnvelopeInformationType,
  _encode_EntityEnvelopeInformationType,
} from '../CMAIL/EntityEnvelopeInformationType.ta.mjs';
export {
  EntityEnvelopeInformationType,
  _decode_EntityEnvelopeInformationType,
  _encode_EntityEnvelopeInformationType,
} from '../CMAIL/EntityEnvelopeInformationType.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SignedReceiptNoticeType */
/**
 * @summary SignedReceiptNoticeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedReceiptNoticeType ::= SEQUENCE {
 *     operatorPostmark    DigitalPostmarkType,
 *     envelopeInformation    EntityEnvelopeInformationType
 *     }
 * ```
 *
 * @class
 */
export class SignedReceiptNoticeType {
  constructor(
    /**
     * @summary `operatorPostmark`.
     * @public
     * @readonly
     */
    readonly operatorPostmark: DigitalPostmarkType,
    /**
     * @summary `envelopeInformation`.
     * @public
     * @readonly
     */
    readonly envelopeInformation: EntityEnvelopeInformationType
  ) {}

  /**
   * @summary Restructures an object into a SignedReceiptNoticeType
   * @description
   *
   * This takes an `object` and converts it to a `SignedReceiptNoticeType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SignedReceiptNoticeType`.
   * @returns {SignedReceiptNoticeType}
   */
  public static _from_object(
    _o: { [_K in keyof SignedReceiptNoticeType]: SignedReceiptNoticeType[_K] }
  ): SignedReceiptNoticeType {
    return new SignedReceiptNoticeType(
      _o.operatorPostmark,
      _o.envelopeInformation
    );
  }
}
/* END_OF_SYMBOL_DEFINITION SignedReceiptNoticeType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignedReceiptNoticeType */
/**
 * @summary The Leading Root Component Types of SignedReceiptNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SignedReceiptNoticeType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'operatorPostmark',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'envelopeInformation',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignedReceiptNoticeType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignedReceiptNoticeType */
/**
 * @summary The Trailing Root Component Types of SignedReceiptNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignedReceiptNoticeType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignedReceiptNoticeType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignedReceiptNoticeType */
/**
 * @summary The Extension Addition Component Types of SignedReceiptNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignedReceiptNoticeType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignedReceiptNoticeType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedReceiptNoticeType */
let _cached_decoder_for_SignedReceiptNoticeType: $.ASN1Decoder<SignedReceiptNoticeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedReceiptNoticeType */

/* START_OF_SYMBOL_DEFINITION _decode_SignedReceiptNoticeType */
/**
 * @summary Decodes an ASN.1 element into a(n) SignedReceiptNoticeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedReceiptNoticeType} The decoded data structure.
 */
export function _decode_SignedReceiptNoticeType(el: _Element) {
  if (!_cached_decoder_for_SignedReceiptNoticeType) {
    _cached_decoder_for_SignedReceiptNoticeType = function (
      el: _Element
    ): SignedReceiptNoticeType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'SignedReceiptNoticeType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'operatorPostmark';
      sequence[1].name = 'envelopeInformation';
      let operatorPostmark!: DigitalPostmarkType;
      let envelopeInformation!: EntityEnvelopeInformationType;
      operatorPostmark = _decode_DigitalPostmarkType(sequence[0]);
      envelopeInformation = _decode_EntityEnvelopeInformationType(sequence[1]);
      return new SignedReceiptNoticeType(operatorPostmark, envelopeInformation);
    };
  }
  return _cached_decoder_for_SignedReceiptNoticeType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignedReceiptNoticeType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedReceiptNoticeType */
let _cached_encoder_for_SignedReceiptNoticeType: $.ASN1Encoder<SignedReceiptNoticeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedReceiptNoticeType */

/* START_OF_SYMBOL_DEFINITION _encode_SignedReceiptNoticeType */
/**
 * @summary Encodes a(n) SignedReceiptNoticeType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedReceiptNoticeType, encoded as an ASN.1 Element.
 */
export function _encode_SignedReceiptNoticeType(
  value: SignedReceiptNoticeType,
  elGetter: $.ASN1Encoder<SignedReceiptNoticeType>
) {
  if (!_cached_encoder_for_SignedReceiptNoticeType) {
    _cached_encoder_for_SignedReceiptNoticeType = function (
      value: SignedReceiptNoticeType,
      elGetter: $.ASN1Encoder<SignedReceiptNoticeType>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_DigitalPostmarkType(
              value.operatorPostmark,
              $.BER
            ),
            /* REQUIRED   */ _encode_EntityEnvelopeInformationType(
              value.envelopeInformation,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SignedReceiptNoticeType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignedReceiptNoticeType */

/* eslint-enable */
