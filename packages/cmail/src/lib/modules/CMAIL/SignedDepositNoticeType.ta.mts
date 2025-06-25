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
  EnvelopeInformationType,
  _decode_EnvelopeInformationType,
  _encode_EnvelopeInformationType,
} from '../CMAIL/EnvelopeInformationType.ta.mjs';

/**
 * @summary SignedDepositNoticeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedDepositNoticeType ::= SEQUENCE {
 *     digitalPostmark        DigitalPostmarkType,
 *     envelopeInformation    EnvelopeInformationType
 *     }
 * ```
 *
 * @class
 */
export class SignedDepositNoticeType {
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
   * @summary Restructures an object into a SignedDepositNoticeType
   * @description
   *
   * This takes an `object` and converts it to a `SignedDepositNoticeType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SignedDepositNoticeType`.
   * @returns {SignedDepositNoticeType}
   */
  public static _from_object(
    _o: { [_K in keyof SignedDepositNoticeType]: SignedDepositNoticeType[_K] }
  ): SignedDepositNoticeType {
    return new SignedDepositNoticeType(
      _o.digitalPostmark,
      _o.envelopeInformation
    );
  }
}


/**
 * @summary The Leading Root Component Types of SignedDepositNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SignedDepositNoticeType: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of SignedDepositNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignedDepositNoticeType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SignedDepositNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignedDepositNoticeType: $.ComponentSpec[] = [];


let _cached_decoder_for_SignedDepositNoticeType: $.ASN1Decoder<SignedDepositNoticeType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignedDepositNoticeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedDepositNoticeType} The decoded data structure.
 */
export function _decode_SignedDepositNoticeType(el: _Element): SignedDepositNoticeType {
  if (!_cached_decoder_for_SignedDepositNoticeType) {
    _cached_decoder_for_SignedDepositNoticeType = function (
      el: _Element
    ): SignedDepositNoticeType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'SignedDepositNoticeType contained only ' +
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
      return new SignedDepositNoticeType(digitalPostmark, envelopeInformation);
    };
  }
  return _cached_decoder_for_SignedDepositNoticeType(el);
}


let _cached_encoder_for_SignedDepositNoticeType: $.ASN1Encoder<SignedDepositNoticeType> | null = null;


/**
 * @summary Encodes a(n) SignedDepositNoticeType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedDepositNoticeType, encoded as an ASN.1 Element.
 */
export function _encode_SignedDepositNoticeType(
  value: SignedDepositNoticeType,
  elGetter: $.ASN1Encoder<SignedDepositNoticeType>
): _Element {
  if (!_cached_encoder_for_SignedDepositNoticeType) {
    _cached_encoder_for_SignedDepositNoticeType = function (
      value: SignedDepositNoticeType    ): _Element {
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
  return _cached_encoder_for_SignedDepositNoticeType(value, elGetter);
}


/* eslint-enable */
