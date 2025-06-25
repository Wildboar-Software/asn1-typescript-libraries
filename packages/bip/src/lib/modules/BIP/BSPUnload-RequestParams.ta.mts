/* eslint-disable */
import {
  BOOLEAN,
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
 * @summary BSPUnload_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BSPUnload-RequestParams ::= SEQUENCE {
 *   bspProductUuid         BioAPI-UUID,
 *   unitEventSubscription  BOOLEAN
 * }
 * ```
 *
 * @class
 */
export class BSPUnload_RequestParams {
  constructor(
    /**
     * @summary `bspProductUuid`.
     * @public
     * @readonly
     */
    readonly bspProductUuid: BioAPI_UUID,
    /**
     * @summary `unitEventSubscription`.
     * @public
     * @readonly
     */
    readonly unitEventSubscription: BOOLEAN
  ) {}

  /**
   * @summary Restructures an object into a BSPUnload_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `BSPUnload_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BSPUnload_RequestParams`.
   * @returns {BSPUnload_RequestParams}
   */
  public static _from_object(
    _o: { [_K in keyof BSPUnload_RequestParams]: BSPUnload_RequestParams[_K] }
  ): BSPUnload_RequestParams {
    return new BSPUnload_RequestParams(
      _o.bspProductUuid,
      _o.unitEventSubscription
    );
  }
}


/**
 * @summary The Leading Root Component Types of BSPUnload_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BSPUnload_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'unitEventSubscription',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of BSPUnload_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BSPUnload_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BSPUnload_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BSPUnload_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_BSPUnload_RequestParams: $.ASN1Decoder<BSPUnload_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BSPUnload_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BSPUnload_RequestParams} The decoded data structure.
 */
export function _decode_BSPUnload_RequestParams(el: _Element): BSPUnload_RequestParams {
  if (!_cached_decoder_for_BSPUnload_RequestParams) {
    _cached_decoder_for_BSPUnload_RequestParams = function (
      el: _Element
    ): BSPUnload_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BSPUnload-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspProductUuid';
      sequence[1].name = 'unitEventSubscription';
      let bspProductUuid!: BioAPI_UUID;
      let unitEventSubscription!: BOOLEAN;
      bspProductUuid = _decode_BioAPI_UUID(sequence[0]);
      unitEventSubscription = $._decodeBoolean(sequence[1]);
      return new BSPUnload_RequestParams(bspProductUuid, unitEventSubscription);
    };
  }
  return _cached_decoder_for_BSPUnload_RequestParams(el);
}


let _cached_encoder_for_BSPUnload_RequestParams: $.ASN1Encoder<BSPUnload_RequestParams> | null = null;


/**
 * @summary Encodes a(n) BSPUnload_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BSPUnload_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_BSPUnload_RequestParams(
  value: BSPUnload_RequestParams,
  elGetter: $.ASN1Encoder<BSPUnload_RequestParams>
): _Element {
  if (!_cached_encoder_for_BSPUnload_RequestParams) {
    _cached_encoder_for_BSPUnload_RequestParams = function (
      value: BSPUnload_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
            /* REQUIRED   */ $._encodeBoolean(
              value.unitEventSubscription,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BSPUnload_RequestParams(value, elGetter);
}


/* eslint-enable */
