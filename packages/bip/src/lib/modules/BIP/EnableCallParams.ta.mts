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
import {
  BioAPI_UNIT_EVENT_TYPE_MASK,
  _decode_BioAPI_UNIT_EVENT_TYPE_MASK,
  _encode_BioAPI_UNIT_EVENT_TYPE_MASK,
} from '../BIP/BioAPI-UNIT-EVENT-TYPE-MASK.ta.mjs';

/**
 * @summary EnableCallParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnableCallParams ::= SEQUENCE {
 *   bspUuid         BioAPI-UUID,
 *   unitEventTypes  BioAPI-UNIT-EVENT-TYPE-MASK
 * }
 * ```
 *
 * @class
 */
export class EnableCallParams {
  constructor(
    /**
     * @summary `bspUuid`.
     * @public
     * @readonly
     */
    readonly bspUuid: BioAPI_UUID,
    /**
     * @summary `unitEventTypes`.
     * @public
     * @readonly
     */
    readonly unitEventTypes: BioAPI_UNIT_EVENT_TYPE_MASK
  ) {}

  /**
   * @summary Restructures an object into a EnableCallParams
   * @description
   *
   * This takes an `object` and converts it to a `EnableCallParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EnableCallParams`.
   * @returns {EnableCallParams}
   */
  public static _from_object(
    _o: { [_K in keyof EnableCallParams]: EnableCallParams[_K] }
  ): EnableCallParams {
    return new EnableCallParams(_o.bspUuid, _o.unitEventTypes);
  }
}


/**
 * @summary The Leading Root Component Types of EnableCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EnableCallParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspUuid',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'unitEventTypes',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of EnableCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EnableCallParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EnableCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EnableCallParams: $.ComponentSpec[] = [];


let _cached_decoder_for_EnableCallParams: $.ASN1Decoder<EnableCallParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EnableCallParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnableCallParams} The decoded data structure.
 */
export function _decode_EnableCallParams(el: _Element) {
  if (!_cached_decoder_for_EnableCallParams) {
    _cached_decoder_for_EnableCallParams = function (
      el: _Element
    ): EnableCallParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'EnableCallParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspUuid';
      sequence[1].name = 'unitEventTypes';
      let bspUuid!: BioAPI_UUID;
      let unitEventTypes!: BioAPI_UNIT_EVENT_TYPE_MASK;
      bspUuid = _decode_BioAPI_UUID(sequence[0]);
      unitEventTypes = _decode_BioAPI_UNIT_EVENT_TYPE_MASK(sequence[1]);
      return new EnableCallParams(bspUuid, unitEventTypes);
    };
  }
  return _cached_decoder_for_EnableCallParams(el);
}


let _cached_encoder_for_EnableCallParams: $.ASN1Encoder<EnableCallParams> | null = null;


/**
 * @summary Encodes a(n) EnableCallParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnableCallParams, encoded as an ASN.1 Element.
 */
export function _encode_EnableCallParams(
  value: EnableCallParams,
  elGetter: $.ASN1Encoder<EnableCallParams>
) {
  if (!_cached_encoder_for_EnableCallParams) {
    _cached_encoder_for_EnableCallParams = function (
      value: EnableCallParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_UNIT_EVENT_TYPE_MASK(
              value.unitEventTypes,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_EnableCallParams(value, elGetter);
}


/* eslint-enable */
