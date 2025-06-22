/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary SpecificErrorInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SpecificErrorInfo ::= SEQUENCE {
 *   errorId    CMIP-SPECIFICERROR.&id({SpecificErrorSet}),
 *   errorInfo  CMIP-SPECIFICERROR.&Value({SpecificErrorSet}{@.errorId})
 * }
 * ```
 *
 * @class
 */
export class SpecificErrorInfo {
  constructor(
    /**
     * @summary `errorId`.
     * @public
     * @readonly
     */
    readonly errorId: OBJECT_IDENTIFIER,
    /**
     * @summary `errorInfo`.
     * @public
     * @readonly
     */
    readonly errorInfo: _Element
  ) {}

  /**
   * @summary Restructures an object into a SpecificErrorInfo
   * @description
   *
   * This takes an `object` and converts it to a `SpecificErrorInfo`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SpecificErrorInfo`.
   * @returns {SpecificErrorInfo}
   */
  public static _from_object(
    _o: { [_K in keyof SpecificErrorInfo]: SpecificErrorInfo[_K] }
  ): SpecificErrorInfo {
    return new SpecificErrorInfo(_o.errorId, _o.errorInfo);
  }
}


/**
 * @summary The Leading Root Component Types of SpecificErrorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SpecificErrorInfo: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'errorId',
    false,
    $.hasTag(_TagClass.universal, 6)
  ),
  new $.ComponentSpec('errorInfo', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of SpecificErrorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SpecificErrorInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SpecificErrorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SpecificErrorInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_SpecificErrorInfo: $.ASN1Decoder<SpecificErrorInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SpecificErrorInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SpecificErrorInfo} The decoded data structure.
 */
export function _decode_SpecificErrorInfo(el: _Element) {
  if (!_cached_decoder_for_SpecificErrorInfo) {
    _cached_decoder_for_SpecificErrorInfo = function (
      el: _Element
    ): SpecificErrorInfo {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'SpecificErrorInfo contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'errorId';
      sequence[1].name = 'errorInfo';
      let errorId!: OBJECT_IDENTIFIER;
      let errorInfo!: _Element;
      errorId = $._decodeObjectIdentifier(sequence[0]);
      errorInfo = $._decodeAny(sequence[1]);
      return new SpecificErrorInfo(errorId, errorInfo);
    };
  }
  return _cached_decoder_for_SpecificErrorInfo(el);
}


let _cached_encoder_for_SpecificErrorInfo: $.ASN1Encoder<SpecificErrorInfo> | null = null;


/**
 * @summary Encodes a(n) SpecificErrorInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecificErrorInfo, encoded as an ASN.1 Element.
 */
export function _encode_SpecificErrorInfo(
  value: SpecificErrorInfo,
  elGetter: $.ASN1Encoder<SpecificErrorInfo>
) {
  if (!_cached_encoder_for_SpecificErrorInfo) {
    _cached_encoder_for_SpecificErrorInfo = function (
      value: SpecificErrorInfo    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(value.errorId, $.BER),
            /* REQUIRED   */ $._encodeAny(value.errorInfo, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SpecificErrorInfo(value, elGetter);
}


/* eslint-enable */
