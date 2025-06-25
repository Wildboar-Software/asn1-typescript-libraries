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
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of ReceiptNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReceiptNoticeType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ReceiptNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReceiptNoticeType: $.ComponentSpec[] = [];


let _cached_decoder_for_ReceiptNoticeType: $.ASN1Decoder<ReceiptNoticeType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ReceiptNoticeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReceiptNoticeType} The decoded data structure.
 */
export function _decode_ReceiptNoticeType(el: _Element): ReceiptNoticeType {
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


let _cached_encoder_for_ReceiptNoticeType: $.ASN1Encoder<ReceiptNoticeType> | null = null;


/**
 * @summary Encodes a(n) ReceiptNoticeType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceiptNoticeType, encoded as an ASN.1 Element.
 */
export function _encode_ReceiptNoticeType(
  value: ReceiptNoticeType,
  elGetter: $.ASN1Encoder<ReceiptNoticeType>
): _Element {
  if (!_cached_encoder_for_ReceiptNoticeType) {
    _cached_encoder_for_ReceiptNoticeType = function (
      value: ReceiptNoticeType    ): _Element {
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


/* eslint-enable */
