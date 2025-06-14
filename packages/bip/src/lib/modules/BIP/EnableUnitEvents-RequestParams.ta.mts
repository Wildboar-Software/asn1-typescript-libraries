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
import {
  BioAPI_UNIT_EVENT_TYPE_MASK,
  _decode_BioAPI_UNIT_EVENT_TYPE_MASK,
  _encode_BioAPI_UNIT_EVENT_TYPE_MASK,
} from '../BIP/BioAPI-UNIT-EVENT-TYPE-MASK.ta.mjs';
/* START_OF_SYMBOL_DEFINITION EnableUnitEvents_RequestParams */
/**
 * @summary EnableUnitEvents_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnableUnitEvents-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   unitEvents         BioAPI-UNIT-EVENT-TYPE-MASK
 * }
 * ```
 *
 * @class
 */
export class EnableUnitEvents_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `unitEvents`.
     * @public
     * @readonly
     */
    readonly unitEvents: BioAPI_UNIT_EVENT_TYPE_MASK
  ) {}

  /**
   * @summary Restructures an object into a EnableUnitEvents_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `EnableUnitEvents_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EnableUnitEvents_RequestParams`.
   * @returns {EnableUnitEvents_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof EnableUnitEvents_RequestParams]: EnableUnitEvents_RequestParams[_K];
    }
  ): EnableUnitEvents_RequestParams {
    return new EnableUnitEvents_RequestParams(
      _o.originalBSPHandle,
      _o.unitEvents
    );
  }
}
/* END_OF_SYMBOL_DEFINITION EnableUnitEvents_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EnableUnitEvents_RequestParams */
/**
 * @summary The Leading Root Component Types of EnableUnitEvents_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EnableUnitEvents_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'unitEvents',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EnableUnitEvents_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EnableUnitEvents_RequestParams */
/**
 * @summary The Trailing Root Component Types of EnableUnitEvents_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EnableUnitEvents_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EnableUnitEvents_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EnableUnitEvents_RequestParams */
/**
 * @summary The Extension Addition Component Types of EnableUnitEvents_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EnableUnitEvents_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EnableUnitEvents_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EnableUnitEvents_RequestParams */
let _cached_decoder_for_EnableUnitEvents_RequestParams: $.ASN1Decoder<EnableUnitEvents_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EnableUnitEvents_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_EnableUnitEvents_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) EnableUnitEvents_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnableUnitEvents_RequestParams} The decoded data structure.
 */
export function _decode_EnableUnitEvents_RequestParams(el: _Element) {
  if (!_cached_decoder_for_EnableUnitEvents_RequestParams) {
    _cached_decoder_for_EnableUnitEvents_RequestParams = function (
      el: _Element
    ): EnableUnitEvents_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'EnableUnitEvents-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'unitEvents';
      let originalBSPHandle!: BioAPI_HANDLE;
      let unitEvents!: BioAPI_UNIT_EVENT_TYPE_MASK;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      unitEvents = _decode_BioAPI_UNIT_EVENT_TYPE_MASK(sequence[1]);
      return new EnableUnitEvents_RequestParams(originalBSPHandle, unitEvents);
    };
  }
  return _cached_decoder_for_EnableUnitEvents_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EnableUnitEvents_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EnableUnitEvents_RequestParams */
let _cached_encoder_for_EnableUnitEvents_RequestParams: $.ASN1Encoder<EnableUnitEvents_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EnableUnitEvents_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_EnableUnitEvents_RequestParams */
/**
 * @summary Encodes a(n) EnableUnitEvents_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnableUnitEvents_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_EnableUnitEvents_RequestParams(
  value: EnableUnitEvents_RequestParams,
  elGetter: $.ASN1Encoder<EnableUnitEvents_RequestParams>
) {
  if (!_cached_encoder_for_EnableUnitEvents_RequestParams) {
    _cached_encoder_for_EnableUnitEvents_RequestParams = function (
      value: EnableUnitEvents_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UNIT_EVENT_TYPE_MASK(
              value.unitEvents,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_EnableUnitEvents_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EnableUnitEvents_RequestParams */

/* eslint-enable */
