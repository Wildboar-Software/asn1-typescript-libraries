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
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.mjs';

/**
 * @summary BSPDetach_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BSPDetach-RequestParams ::= SEQUENCE {originalBSPHandle  BioAPI-HANDLE
 * }
 * ```
 *
 * @class
 */
export class BSPDetach_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE
  ) {}

  /**
   * @summary Restructures an object into a BSPDetach_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `BSPDetach_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BSPDetach_RequestParams`.
   * @returns {BSPDetach_RequestParams}
   */
  public static _from_object(
    _o: { [_K in keyof BSPDetach_RequestParams]: BSPDetach_RequestParams[_K] }
  ): BSPDetach_RequestParams {
    return new BSPDetach_RequestParams(_o.originalBSPHandle);
  }
}


/**
 * @summary The Leading Root Component Types of BSPDetach_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BSPDetach_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of BSPDetach_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BSPDetach_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BSPDetach_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BSPDetach_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_BSPDetach_RequestParams: $.ASN1Decoder<BSPDetach_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BSPDetach_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BSPDetach_RequestParams} The decoded data structure.
 */
export function _decode_BSPDetach_RequestParams(el: _Element) {
  if (!_cached_decoder_for_BSPDetach_RequestParams) {
    _cached_decoder_for_BSPDetach_RequestParams = function (
      el: _Element
    ): BSPDetach_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'BSPDetach-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      let originalBSPHandle!: BioAPI_HANDLE;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      return new BSPDetach_RequestParams(originalBSPHandle);
    };
  }
  return _cached_decoder_for_BSPDetach_RequestParams(el);
}


let _cached_encoder_for_BSPDetach_RequestParams: $.ASN1Encoder<BSPDetach_RequestParams> | null = null;


/**
 * @summary Encodes a(n) BSPDetach_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BSPDetach_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_BSPDetach_RequestParams(
  value: BSPDetach_RequestParams,
  elGetter: $.ASN1Encoder<BSPDetach_RequestParams>
) {
  if (!_cached_encoder_for_BSPDetach_RequestParams) {
    _cached_encoder_for_BSPDetach_RequestParams = function (
      value: BSPDetach_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BSPDetach_RequestParams(value, elGetter);
}


/* eslint-enable */
