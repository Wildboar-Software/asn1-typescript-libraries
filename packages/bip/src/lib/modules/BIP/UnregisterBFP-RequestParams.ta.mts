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
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';

/**
 * @summary UnregisterBFP_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnregisterBFP-RequestParams ::= SEQUENCE {bfpProductUuid  BioAPI-UUID
 * }
 * ```
 *
 */
export class UnregisterBFP_RequestParams {
  constructor(
    /**
     * @summary `bfpProductUuid`.
     * @public
     * @readonly
     */
    readonly bfpProductUuid: BioAPI_UUID
  ) {}

  /**
   * @summary Restructures an object into a UnregisterBFP_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `UnregisterBFP_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `UnregisterBFP_RequestParams`.
   * @returns {UnregisterBFP_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof UnregisterBFP_RequestParams]: UnregisterBFP_RequestParams[_K];
    }
  ): UnregisterBFP_RequestParams {
    return new UnregisterBFP_RequestParams(_o.bfpProductUuid);
  }
}


/**
 * @summary The Leading Root Component Types of UnregisterBFP_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnregisterBFP_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bfpProductUuid',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of UnregisterBFP_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnregisterBFP_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of UnregisterBFP_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnregisterBFP_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_UnregisterBFP_RequestParams: $.ASN1Decoder<UnregisterBFP_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UnregisterBFP_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnregisterBFP_RequestParams} The decoded data structure.
 */
export function _decode_UnregisterBFP_RequestParams(el: _Element): UnregisterBFP_RequestParams {
  if (!_cached_decoder_for_UnregisterBFP_RequestParams) {
    _cached_decoder_for_UnregisterBFP_RequestParams = function (
      el: _Element
    ): UnregisterBFP_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'UnregisterBFP-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bfpProductUuid';
      let bfpProductUuid!: BioAPI_UUID;
      bfpProductUuid = _decode_BioAPI_UUID(sequence[0]);
      return new UnregisterBFP_RequestParams(bfpProductUuid);
    };
  }
  return _cached_decoder_for_UnregisterBFP_RequestParams(el);
}


let _cached_encoder_for_UnregisterBFP_RequestParams: $.ASN1Encoder<UnregisterBFP_RequestParams> | null = null;


/**
 * @summary Encodes a(n) UnregisterBFP_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnregisterBFP_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_UnregisterBFP_RequestParams(
  value: UnregisterBFP_RequestParams,
  elGetter: $.ASN1Encoder<UnregisterBFP_RequestParams>
): _Element {
  if (!_cached_encoder_for_UnregisterBFP_RequestParams) {
    _cached_encoder_for_UnregisterBFP_RequestParams = function (
      value: UnregisterBFP_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bfpProductUuid, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_UnregisterBFP_RequestParams(value, elGetter);
}


/* eslint-enable */
