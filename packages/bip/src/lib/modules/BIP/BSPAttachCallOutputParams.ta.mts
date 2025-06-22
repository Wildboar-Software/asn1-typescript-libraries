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
import * as $ from '@wildboar/asn1/functional';
import {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.mjs';

/**
 * @summary BSPAttachCallOutputParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BSPAttachCallOutputParams ::= SEQUENCE {newBSPHandle  BioAPI-HANDLE
 * }
 * ```
 *
 * @class
 */
export class BSPAttachCallOutputParams {
  constructor(
    /**
     * @summary `newBSPHandle`.
     * @public
     * @readonly
     */
    readonly newBSPHandle: BioAPI_HANDLE
  ) {}

  /**
   * @summary Restructures an object into a BSPAttachCallOutputParams
   * @description
   *
   * This takes an `object` and converts it to a `BSPAttachCallOutputParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BSPAttachCallOutputParams`.
   * @returns {BSPAttachCallOutputParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof BSPAttachCallOutputParams]: BSPAttachCallOutputParams[_K];
    }
  ): BSPAttachCallOutputParams {
    return new BSPAttachCallOutputParams(_o.newBSPHandle);
  }
}


/**
 * @summary The Leading Root Component Types of BSPAttachCallOutputParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BSPAttachCallOutputParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'newBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of BSPAttachCallOutputParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BSPAttachCallOutputParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BSPAttachCallOutputParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BSPAttachCallOutputParams: $.ComponentSpec[] = [];


let _cached_decoder_for_BSPAttachCallOutputParams: $.ASN1Decoder<BSPAttachCallOutputParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BSPAttachCallOutputParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BSPAttachCallOutputParams} The decoded data structure.
 */
export function _decode_BSPAttachCallOutputParams(el: _Element) {
  if (!_cached_decoder_for_BSPAttachCallOutputParams) {
    _cached_decoder_for_BSPAttachCallOutputParams = function (
      el: _Element
    ): BSPAttachCallOutputParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'BSPAttachCallOutputParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'newBSPHandle';
      let newBSPHandle!: BioAPI_HANDLE;
      newBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      return new BSPAttachCallOutputParams(newBSPHandle);
    };
  }
  return _cached_decoder_for_BSPAttachCallOutputParams(el);
}


let _cached_encoder_for_BSPAttachCallOutputParams: $.ASN1Encoder<BSPAttachCallOutputParams> | null = null;


/**
 * @summary Encodes a(n) BSPAttachCallOutputParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BSPAttachCallOutputParams, encoded as an ASN.1 Element.
 */
export function _encode_BSPAttachCallOutputParams(
  value: BSPAttachCallOutputParams,
  elGetter: $.ASN1Encoder<BSPAttachCallOutputParams>
) {
  if (!_cached_encoder_for_BSPAttachCallOutputParams) {
    _cached_encoder_for_BSPAttachCallOutputParams = function (
      value: BSPAttachCallOutputParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(value.newBSPHandle, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BSPAttachCallOutputParams(value, elGetter);
}


/* eslint-enable */
