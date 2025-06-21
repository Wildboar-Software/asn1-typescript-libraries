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
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of DepositNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DepositNoticeType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DepositNoticeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DepositNoticeType: $.ComponentSpec[] = [];


let _cached_decoder_for_DepositNoticeType: $.ASN1Decoder<DepositNoticeType> | null = null;


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


let _cached_encoder_for_DepositNoticeType: $.ASN1Encoder<DepositNoticeType> | null = null;


/**
 * @summary Encodes a(n) DepositNoticeType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DepositNoticeType, encoded as an ASN.1 Element.
 */
export function _encode_DepositNoticeType(
  value: DepositNoticeType,
  elGetter: $.ASN1Encoder<DepositNoticeType>
) {
  if (!_cached_encoder_for_DepositNoticeType) {
    _cached_encoder_for_DepositNoticeType = function (
      value: DepositNoticeType    ): _Element {
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


/* eslint-enable */
