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
 * @summary EnableEventNotifications_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnableEventNotifications-RequestParams ::= SEQUENCE {
 *   bspProductUuid  BioAPI-UUID,
 *   unitEventTypes  BioAPI-UNIT-EVENT-TYPE-MASK
 * }
 * ```
 *
 */
export class EnableEventNotifications_RequestParams {
  constructor(
    /**
     * @summary `bspProductUuid`.
     * @public
     * @readonly
     */
    readonly bspProductUuid: BioAPI_UUID,
    /**
     * @summary `unitEventTypes`.
     * @public
     * @readonly
     */
    readonly unitEventTypes: BioAPI_UNIT_EVENT_TYPE_MASK
  ) {}

  /**
   * @summary Restructures an object into a EnableEventNotifications_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `EnableEventNotifications_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EnableEventNotifications_RequestParams`.
   * @returns {EnableEventNotifications_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof EnableEventNotifications_RequestParams]: EnableEventNotifications_RequestParams[_K];
    }
  ): EnableEventNotifications_RequestParams {
    return new EnableEventNotifications_RequestParams(
      _o.bspProductUuid,
      _o.unitEventTypes
    );
  }
}


/**
 * @summary The Leading Root Component Types of EnableEventNotifications_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EnableEventNotifications_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspProductUuid',
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
 * @summary The Trailing Root Component Types of EnableEventNotifications_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EnableEventNotifications_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EnableEventNotifications_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EnableEventNotifications_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_EnableEventNotifications_RequestParams: $.ASN1Decoder<EnableEventNotifications_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EnableEventNotifications_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnableEventNotifications_RequestParams} The decoded data structure.
 */
export function _decode_EnableEventNotifications_RequestParams(el: _Element): EnableEventNotifications_RequestParams {
  if (!_cached_decoder_for_EnableEventNotifications_RequestParams) {
    _cached_decoder_for_EnableEventNotifications_RequestParams = function (
      el: _Element
    ): EnableEventNotifications_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'EnableEventNotifications-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspProductUuid';
      sequence[1].name = 'unitEventTypes';
      let bspProductUuid!: BioAPI_UUID;
      let unitEventTypes!: BioAPI_UNIT_EVENT_TYPE_MASK;
      bspProductUuid = _decode_BioAPI_UUID(sequence[0]);
      unitEventTypes = _decode_BioAPI_UNIT_EVENT_TYPE_MASK(sequence[1]);
      return new EnableEventNotifications_RequestParams(
        bspProductUuid,
        unitEventTypes
      );
    };
  }
  return _cached_decoder_for_EnableEventNotifications_RequestParams(el);
}


let _cached_encoder_for_EnableEventNotifications_RequestParams: $.ASN1Encoder<EnableEventNotifications_RequestParams> | null = null;


/**
 * @summary Encodes a(n) EnableEventNotifications_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnableEventNotifications_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_EnableEventNotifications_RequestParams(
  value: EnableEventNotifications_RequestParams,
  elGetter: $.ASN1Encoder<EnableEventNotifications_RequestParams>
): _Element {
  if (!_cached_encoder_for_EnableEventNotifications_RequestParams) {
    _cached_encoder_for_EnableEventNotifications_RequestParams = function (
      value: EnableEventNotifications_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
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
  return _cached_encoder_for_EnableEventNotifications_RequestParams(
    value,
    elGetter
  );
}


/* eslint-enable */
