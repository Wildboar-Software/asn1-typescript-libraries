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
import {
  BioAPI_UNIT_ID,
  _decode_BioAPI_UNIT_ID,
  _encode_BioAPI_UNIT_ID,
} from '../BIP/BioAPI-UNIT-ID.ta.mjs';

/**
 * @summary GetIndicatorStatus_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GetIndicatorStatus-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   unitID             BioAPI-UNIT-ID
 * }
 * ```
 *
 * @class
 */
export class GetIndicatorStatus_RequestParams {
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
    readonly unitID: BioAPI_UNIT_ID
  ) {}

  /**
   * @summary Restructures an object into a GetIndicatorStatus_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `GetIndicatorStatus_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GetIndicatorStatus_RequestParams`.
   * @returns {GetIndicatorStatus_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof GetIndicatorStatus_RequestParams]: GetIndicatorStatus_RequestParams[_K];
    }
  ): GetIndicatorStatus_RequestParams {
    return new GetIndicatorStatus_RequestParams(
      _o.originalBSPHandle,
      _o.unitID
    );
  }
}


/**
 * @summary The Leading Root Component Types of GetIndicatorStatus_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GetIndicatorStatus_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'unitID',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of GetIndicatorStatus_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GetIndicatorStatus_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of GetIndicatorStatus_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GetIndicatorStatus_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_GetIndicatorStatus_RequestParams: $.ASN1Decoder<GetIndicatorStatus_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GetIndicatorStatus_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GetIndicatorStatus_RequestParams} The decoded data structure.
 */
export function _decode_GetIndicatorStatus_RequestParams(el: _Element) {
  if (!_cached_decoder_for_GetIndicatorStatus_RequestParams) {
    _cached_decoder_for_GetIndicatorStatus_RequestParams = function (
      el: _Element
    ): GetIndicatorStatus_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'GetIndicatorStatus-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'unitID';
      let originalBSPHandle!: BioAPI_HANDLE;
      let unitID!: BioAPI_UNIT_ID;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      unitID = _decode_BioAPI_UNIT_ID(sequence[1]);
      return new GetIndicatorStatus_RequestParams(originalBSPHandle, unitID);
    };
  }
  return _cached_decoder_for_GetIndicatorStatus_RequestParams(el);
}


let _cached_encoder_for_GetIndicatorStatus_RequestParams: $.ASN1Encoder<GetIndicatorStatus_RequestParams> | null = null;


/**
 * @summary Encodes a(n) GetIndicatorStatus_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetIndicatorStatus_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_GetIndicatorStatus_RequestParams(
  value: GetIndicatorStatus_RequestParams,
  elGetter: $.ASN1Encoder<GetIndicatorStatus_RequestParams>
) {
  if (!_cached_encoder_for_GetIndicatorStatus_RequestParams) {
    _cached_encoder_for_GetIndicatorStatus_RequestParams = function (
      value: GetIndicatorStatus_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UNIT_ID(value.unitID, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_GetIndicatorStatus_RequestParams(value, elGetter);
}


/* eslint-enable */
