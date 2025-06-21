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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  DigitalPostmarkType,
  _decode_DigitalPostmarkType,
  _encode_DigitalPostmarkType,
} from '../CMAIL/DigitalPostmarkType.ta.mjs';
import {
  EnvelopeInformationType,
  _decode_EnvelopeInformationType,
  _encode_EnvelopeInformationType,
} from '../CMAIL/EnvelopeInformationType.ta.mjs';

/**
 * @summary SignedTransitNoticeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedTransitNoticeType ::= SEQUENCE {
 *     digitalPostmark        DigitalPostmarkType,
 *     envelopeInformation    EnvelopeInformationType
 *     }
 * ```
 *
 * @class
 */
export class SignedTransitNoticeType {
  constructor(
    /**
     * @summary `digitalPostmark`.
     * @public
     * @readonly
     */
    readonly digitalPostmark: DigitalPostmarkType,
    /**
     * @summary `envelopeInformation`.
     * @public
     * @readonly
     */
    readonly envelopeInformation: EnvelopeInformationType
  ) {}

  /**
   * @summary Restructures an object into a SignedTransitNoticeType
   * @description
   *
   * This takes an `object` and converts it to a `SignedTransitNoticeType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SignedTransitNoticeType`.
   * @returns {SignedTransitNoticeType}
   */
  public static _from_object(
    _o: { [_K in keyof SignedTransitNoticeType]: SignedTransitNoticeType[_K] }
  ): SignedTransitNoticeType {
    return new SignedTransitNoticeType(
      _o.digitalPostmark,
      _o.envelopeInformation
    );
  }
}


/**
 * @summary The Leading Root Component Types of SignedTransitNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SignedTransitNoticeType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'digitalPostmark',
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
 * @summary The Trailing Root Component Types of SignedTransitNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignedTransitNoticeType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SignedTransitNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignedTransitNoticeType: $.ComponentSpec[] = [];


let _cached_decoder_for_SignedTransitNoticeType: $.ASN1Decoder<SignedTransitNoticeType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignedTransitNoticeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedTransitNoticeType} The decoded data structure.
 */
export function _decode_SignedTransitNoticeType(el: _Element) {
  if (!_cached_decoder_for_SignedTransitNoticeType) {
    _cached_decoder_for_SignedTransitNoticeType = function (
      el: _Element
    ): SignedTransitNoticeType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'SignedTransitNoticeType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'digitalPostmark';
      sequence[1].name = 'envelopeInformation';
      let digitalPostmark!: DigitalPostmarkType;
      let envelopeInformation!: EnvelopeInformationType;
      digitalPostmark = _decode_DigitalPostmarkType(sequence[0]);
      envelopeInformation = _decode_EnvelopeInformationType(sequence[1]);
      return new SignedTransitNoticeType(digitalPostmark, envelopeInformation);
    };
  }
  return _cached_decoder_for_SignedTransitNoticeType(el);
}


let _cached_encoder_for_SignedTransitNoticeType: $.ASN1Encoder<SignedTransitNoticeType> | null = null;


/**
 * @summary Encodes a(n) SignedTransitNoticeType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedTransitNoticeType, encoded as an ASN.1 Element.
 */
export function _encode_SignedTransitNoticeType(
  value: SignedTransitNoticeType,
  elGetter: $.ASN1Encoder<SignedTransitNoticeType>
) {
  if (!_cached_encoder_for_SignedTransitNoticeType) {
    _cached_encoder_for_SignedTransitNoticeType = function (
      value: SignedTransitNoticeType    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_DigitalPostmarkType(
              value.digitalPostmark,
              $.BER
            ),
            /* REQUIRED   */ _encode_EnvelopeInformationType(
              value.envelopeInformation,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SignedTransitNoticeType(value, elGetter);
}


/* eslint-enable */
