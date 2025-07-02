/* eslint-disable */
import {
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  DigitalPostmarkType,
  _decode_DigitalPostmarkType,
  _encode_DigitalPostmarkType,
} from '../CMAIL/DigitalPostmarkType.ta.mjs';
import {
  EntityEnvelopeInformationType,
  _decode_EntityEnvelopeInformationType,
  _encode_EntityEnvelopeInformationType,
} from '../CMAIL/EntityEnvelopeInformationType.ta.mjs';

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
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'envelopeInformation',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of SignedReceiptNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignedReceiptNoticeType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SignedReceiptNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignedReceiptNoticeType: $.ComponentSpec[] = [];


let _cached_decoder_for_SignedReceiptNoticeType: $.ASN1Decoder<SignedReceiptNoticeType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignedReceiptNoticeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedReceiptNoticeType} The decoded data structure.
 */
export function _decode_SignedReceiptNoticeType(el: _Element): SignedReceiptNoticeType {
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


let _cached_encoder_for_SignedReceiptNoticeType: $.ASN1Encoder<SignedReceiptNoticeType> | null = null;


/**
 * @summary Encodes a(n) SignedReceiptNoticeType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedReceiptNoticeType, encoded as an ASN.1 Element.
 */
export function _encode_SignedReceiptNoticeType(
  value: SignedReceiptNoticeType,
  elGetter: $.ASN1Encoder<SignedReceiptNoticeType>
): _Element {
  if (!_cached_encoder_for_SignedReceiptNoticeType) {
    _cached_encoder_for_SignedReceiptNoticeType = function (
      value: SignedReceiptNoticeType    ): _Element {
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


/* eslint-enable */
