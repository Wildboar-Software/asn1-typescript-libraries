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
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';

/**
 * @summary UnregisterBSP_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnregisterBSP-RequestParams ::= SEQUENCE {bspProductUuid  BioAPI-UUID
 * }
 * ```
 *
 * @class
 */
export class UnregisterBSP_RequestParams {
  constructor(
    /**
     * @summary `bspProductUuid`.
     * @public
     * @readonly
     */
    readonly bspProductUuid: BioAPI_UUID
  ) {}

  /**
   * @summary Restructures an object into a UnregisterBSP_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `UnregisterBSP_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `UnregisterBSP_RequestParams`.
   * @returns {UnregisterBSP_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof UnregisterBSP_RequestParams]: UnregisterBSP_RequestParams[_K];
    }
  ): UnregisterBSP_RequestParams {
    return new UnregisterBSP_RequestParams(_o.bspProductUuid);
  }
}


/**
 * @summary The Leading Root Component Types of UnregisterBSP_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnregisterBSP_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of UnregisterBSP_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnregisterBSP_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of UnregisterBSP_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnregisterBSP_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_UnregisterBSP_RequestParams: $.ASN1Decoder<UnregisterBSP_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UnregisterBSP_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnregisterBSP_RequestParams} The decoded data structure.
 */
export function _decode_UnregisterBSP_RequestParams(el: _Element) {
  if (!_cached_decoder_for_UnregisterBSP_RequestParams) {
    _cached_decoder_for_UnregisterBSP_RequestParams = function (
      el: _Element
    ): UnregisterBSP_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'UnregisterBSP-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspProductUuid';
      let bspProductUuid!: BioAPI_UUID;
      bspProductUuid = _decode_BioAPI_UUID(sequence[0]);
      return new UnregisterBSP_RequestParams(bspProductUuid);
    };
  }
  return _cached_decoder_for_UnregisterBSP_RequestParams(el);
}


let _cached_encoder_for_UnregisterBSP_RequestParams: $.ASN1Encoder<UnregisterBSP_RequestParams> | null = null;


/**
 * @summary Encodes a(n) UnregisterBSP_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnregisterBSP_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_UnregisterBSP_RequestParams(
  value: UnregisterBSP_RequestParams,
  elGetter: $.ASN1Encoder<UnregisterBSP_RequestParams>
) {
  if (!_cached_encoder_for_UnregisterBSP_RequestParams) {
    _cached_encoder_for_UnregisterBSP_RequestParams = function (
      value: UnregisterBSP_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_UnregisterBSP_RequestParams(value, elGetter);
}


/* eslint-enable */
