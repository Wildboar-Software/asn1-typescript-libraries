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
 * @summary QueryGUIEventSubscriptions_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QueryGUIEventSubscriptions-RequestParams ::= SEQUENCE {
 *   bspProductUuid  BioAPI-UUID
 * }
 * ```
 *
 * @class
 */
export class QueryGUIEventSubscriptions_RequestParams {
  constructor(
    /**
     * @summary `bspProductUuid`.
     * @public
     * @readonly
     */
    readonly bspProductUuid: BioAPI_UUID
  ) {}

  /**
   * @summary Restructures an object into a QueryGUIEventSubscriptions_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `QueryGUIEventSubscriptions_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `QueryGUIEventSubscriptions_RequestParams`.
   * @returns {QueryGUIEventSubscriptions_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof QueryGUIEventSubscriptions_RequestParams]: QueryGUIEventSubscriptions_RequestParams[_K];
    }
  ): QueryGUIEventSubscriptions_RequestParams {
    return new QueryGUIEventSubscriptions_RequestParams(_o.bspProductUuid);
  }
}


/**
 * @summary The Leading Root Component Types of QueryGUIEventSubscriptions_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_QueryGUIEventSubscriptions_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of QueryGUIEventSubscriptions_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_QueryGUIEventSubscriptions_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of QueryGUIEventSubscriptions_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_QueryGUIEventSubscriptions_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_QueryGUIEventSubscriptions_RequestParams: $.ASN1Decoder<QueryGUIEventSubscriptions_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) QueryGUIEventSubscriptions_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QueryGUIEventSubscriptions_RequestParams} The decoded data structure.
 */
export function _decode_QueryGUIEventSubscriptions_RequestParams(el: _Element) {
  if (!_cached_decoder_for_QueryGUIEventSubscriptions_RequestParams) {
    _cached_decoder_for_QueryGUIEventSubscriptions_RequestParams = function (
      el: _Element
    ): QueryGUIEventSubscriptions_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'QueryGUIEventSubscriptions-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspProductUuid';
      let bspProductUuid!: BioAPI_UUID;
      bspProductUuid = _decode_BioAPI_UUID(sequence[0]);
      return new QueryGUIEventSubscriptions_RequestParams(bspProductUuid);
    };
  }
  return _cached_decoder_for_QueryGUIEventSubscriptions_RequestParams(el);
}


let _cached_encoder_for_QueryGUIEventSubscriptions_RequestParams: $.ASN1Encoder<QueryGUIEventSubscriptions_RequestParams> | null = null;


/**
 * @summary Encodes a(n) QueryGUIEventSubscriptions_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QueryGUIEventSubscriptions_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_QueryGUIEventSubscriptions_RequestParams(
  value: QueryGUIEventSubscriptions_RequestParams,
  elGetter: $.ASN1Encoder<QueryGUIEventSubscriptions_RequestParams>
) {
  if (!_cached_encoder_for_QueryGUIEventSubscriptions_RequestParams) {
    _cached_encoder_for_QueryGUIEventSubscriptions_RequestParams = function (
      value: QueryGUIEventSubscriptions_RequestParams    ): _Element {
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
  return _cached_encoder_for_QueryGUIEventSubscriptions_RequestParams(
    value,
    elGetter
  );
}


/* eslint-enable */
