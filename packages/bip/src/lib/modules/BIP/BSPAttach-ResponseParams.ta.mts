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
 * @summary BSPAttach_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BSPAttach-ResponseParams ::= SEQUENCE {newOriginalBSPHandle  BioAPI-HANDLE
 * }
 * ```
 *
 * @class
 */
export class BSPAttach_ResponseParams {
  constructor(
    /**
     * @summary `newOriginalBSPHandle`.
     * @public
     * @readonly
     */
    readonly newOriginalBSPHandle: BioAPI_HANDLE
  ) {}

  /**
   * @summary Restructures an object into a BSPAttach_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `BSPAttach_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BSPAttach_ResponseParams`.
   * @returns {BSPAttach_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof BSPAttach_ResponseParams]: BSPAttach_ResponseParams[_K] }
  ): BSPAttach_ResponseParams {
    return new BSPAttach_ResponseParams(_o.newOriginalBSPHandle);
  }
}


/**
 * @summary The Leading Root Component Types of BSPAttach_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BSPAttach_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'newOriginalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of BSPAttach_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BSPAttach_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BSPAttach_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BSPAttach_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_BSPAttach_ResponseParams: $.ASN1Decoder<BSPAttach_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BSPAttach_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BSPAttach_ResponseParams} The decoded data structure.
 */
export function _decode_BSPAttach_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_BSPAttach_ResponseParams) {
    _cached_decoder_for_BSPAttach_ResponseParams = function (
      el: _Element
    ): BSPAttach_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'BSPAttach-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'newOriginalBSPHandle';
      let newOriginalBSPHandle!: BioAPI_HANDLE;
      newOriginalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      return new BSPAttach_ResponseParams(newOriginalBSPHandle);
    };
  }
  return _cached_decoder_for_BSPAttach_ResponseParams(el);
}


let _cached_encoder_for_BSPAttach_ResponseParams: $.ASN1Encoder<BSPAttach_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) BSPAttach_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BSPAttach_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_BSPAttach_ResponseParams(
  value: BSPAttach_ResponseParams,
  elGetter: $.ASN1Encoder<BSPAttach_ResponseParams>
) {
  if (!_cached_encoder_for_BSPAttach_ResponseParams) {
    _cached_encoder_for_BSPAttach_ResponseParams = function (
      value: BSPAttach_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.newOriginalBSPHandle,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BSPAttach_ResponseParams(value, elGetter);
}


/* eslint-enable */
