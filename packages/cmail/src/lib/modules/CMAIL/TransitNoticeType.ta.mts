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
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of TransitNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TransitNoticeType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of TransitNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TransitNoticeType: $.ComponentSpec[] = [];


let _cached_decoder_for_TransitNoticeType: $.ASN1Decoder<TransitNoticeType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TransitNoticeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TransitNoticeType} The decoded data structure.
 */
export function _decode_TransitNoticeType(el: _Element): TransitNoticeType {
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


let _cached_encoder_for_TransitNoticeType: $.ASN1Encoder<TransitNoticeType> | null = null;


/**
 * @summary Encodes a(n) TransitNoticeType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransitNoticeType, encoded as an ASN.1 Element.
 */
export function _encode_TransitNoticeType(
  value: TransitNoticeType,
  elGetter: $.ASN1Encoder<TransitNoticeType>
): _Element {
  if (!_cached_encoder_for_TransitNoticeType) {
    _cached_encoder_for_TransitNoticeType = function (
      value: TransitNoticeType    ): _Element {
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


/* eslint-enable */
