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
  BioAPI_UNIT_ID,
  _decode_BioAPI_UNIT_ID,
  _encode_BioAPI_UNIT_ID,
} from '../BIP/BioAPI-UNIT-ID.ta.mjs';
import {
  BioAPI_INDICATOR_STATUS,
  _enum_for_BioAPI_INDICATOR_STATUS,
  _decode_BioAPI_INDICATOR_STATUS,
  _encode_BioAPI_INDICATOR_STATUS,
} from '../BIP/BioAPI-INDICATOR-STATUS.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SetIndicatorStatus_RequestParams */
/**
 * @summary SetIndicatorStatus_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SetIndicatorStatus-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   unitID             BioAPI-UNIT-ID,
 *   indicatorStatus    BioAPI-INDICATOR-STATUS
 * }
 * ```
 *
 * @class
 */
export class SetIndicatorStatus_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `unitID`.
     * @public
     * @readonly
     */
    readonly unitID: BioAPI_UNIT_ID,
    /**
     * @summary `indicatorStatus`.
     * @public
     * @readonly
     */
    readonly indicatorStatus: BioAPI_INDICATOR_STATUS
  ) {}

  /**
   * @summary Restructures an object into a SetIndicatorStatus_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `SetIndicatorStatus_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SetIndicatorStatus_RequestParams`.
   * @returns {SetIndicatorStatus_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof SetIndicatorStatus_RequestParams]: SetIndicatorStatus_RequestParams[_K];
    }
  ): SetIndicatorStatus_RequestParams {
    return new SetIndicatorStatus_RequestParams(
      _o.originalBSPHandle,
      _o.unitID,
      _o.indicatorStatus
    );
  }

  /**
   * @summary The enum used as the type of the component `indicatorStatus`
   * @public
   * @static
   */

  public static _enum_for_indicatorStatus = _enum_for_BioAPI_INDICATOR_STATUS;
}
/* END_OF_SYMBOL_DEFINITION SetIndicatorStatus_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SetIndicatorStatus_RequestParams */
/**
 * @summary The Leading Root Component Types of SetIndicatorStatus_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SetIndicatorStatus_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'unitID',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'indicatorStatus',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SetIndicatorStatus_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SetIndicatorStatus_RequestParams */
/**
 * @summary The Trailing Root Component Types of SetIndicatorStatus_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SetIndicatorStatus_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SetIndicatorStatus_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SetIndicatorStatus_RequestParams */
/**
 * @summary The Extension Addition Component Types of SetIndicatorStatus_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SetIndicatorStatus_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SetIndicatorStatus_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SetIndicatorStatus_RequestParams */
let _cached_decoder_for_SetIndicatorStatus_RequestParams: $.ASN1Decoder<SetIndicatorStatus_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SetIndicatorStatus_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_SetIndicatorStatus_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) SetIndicatorStatus_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SetIndicatorStatus_RequestParams} The decoded data structure.
 */
export function _decode_SetIndicatorStatus_RequestParams(el: _Element) {
  if (!_cached_decoder_for_SetIndicatorStatus_RequestParams) {
    _cached_decoder_for_SetIndicatorStatus_RequestParams = function (
      el: _Element
    ): SetIndicatorStatus_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'SetIndicatorStatus-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'unitID';
      sequence[2].name = 'indicatorStatus';
      let originalBSPHandle!: BioAPI_HANDLE;
      let unitID!: BioAPI_UNIT_ID;
      let indicatorStatus!: BioAPI_INDICATOR_STATUS;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      unitID = _decode_BioAPI_UNIT_ID(sequence[1]);
      indicatorStatus = _decode_BioAPI_INDICATOR_STATUS(sequence[2]);
      return new SetIndicatorStatus_RequestParams(
        originalBSPHandle,
        unitID,
        indicatorStatus
      );
    };
  }
  return _cached_decoder_for_SetIndicatorStatus_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SetIndicatorStatus_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SetIndicatorStatus_RequestParams */
let _cached_encoder_for_SetIndicatorStatus_RequestParams: $.ASN1Encoder<SetIndicatorStatus_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SetIndicatorStatus_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_SetIndicatorStatus_RequestParams */
/**
 * @summary Encodes a(n) SetIndicatorStatus_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetIndicatorStatus_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_SetIndicatorStatus_RequestParams(
  value: SetIndicatorStatus_RequestParams,
  elGetter: $.ASN1Encoder<SetIndicatorStatus_RequestParams>
) {
  if (!_cached_encoder_for_SetIndicatorStatus_RequestParams) {
    _cached_encoder_for_SetIndicatorStatus_RequestParams = function (
      value: SetIndicatorStatus_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UNIT_ID(value.unitID, $.BER),
            /* REQUIRED   */ _encode_BioAPI_INDICATOR_STATUS(
              value.indicatorStatus,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SetIndicatorStatus_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SetIndicatorStatus_RequestParams */

/* eslint-enable */
