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
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.mjs';
import {
  SignedInt,
  _decode_SignedInt,
  _encode_SignedInt,
} from '../BIP/SignedInt.ta.mjs';

/**
 * @summary CalibrateSensor_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CalibrateSensor-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   timeout            SignedInt
 * }
 * ```
 *
 */
export class CalibrateSensor_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `timeout`.
     * @public
     * @readonly
     */
    readonly timeout: SignedInt
  ) {}

  /**
   * @summary Restructures an object into a CalibrateSensor_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `CalibrateSensor_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CalibrateSensor_RequestParams`.
   * @returns {CalibrateSensor_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof CalibrateSensor_RequestParams]: CalibrateSensor_RequestParams[_K];
    }
  ): CalibrateSensor_RequestParams {
    return new CalibrateSensor_RequestParams(_o.originalBSPHandle, _o.timeout);
  }
}


/**
 * @summary The Leading Root Component Types of CalibrateSensor_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CalibrateSensor_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'timeout',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of CalibrateSensor_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CalibrateSensor_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CalibrateSensor_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CalibrateSensor_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_CalibrateSensor_RequestParams: $.ASN1Decoder<CalibrateSensor_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CalibrateSensor_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CalibrateSensor_RequestParams} The decoded data structure.
 */
export function _decode_CalibrateSensor_RequestParams(el: _Element): CalibrateSensor_RequestParams {
  if (!_cached_decoder_for_CalibrateSensor_RequestParams) {
    _cached_decoder_for_CalibrateSensor_RequestParams = function (
      el: _Element
    ): CalibrateSensor_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'CalibrateSensor-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'timeout';
      let originalBSPHandle!: BioAPI_HANDLE;
      let timeout!: SignedInt;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      timeout = _decode_SignedInt(sequence[1]);
      return new CalibrateSensor_RequestParams(originalBSPHandle, timeout);
    };
  }
  return _cached_decoder_for_CalibrateSensor_RequestParams(el);
}


let _cached_encoder_for_CalibrateSensor_RequestParams: $.ASN1Encoder<CalibrateSensor_RequestParams> | null = null;


/**
 * @summary Encodes a(n) CalibrateSensor_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CalibrateSensor_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_CalibrateSensor_RequestParams(
  value: CalibrateSensor_RequestParams,
  elGetter: $.ASN1Encoder<CalibrateSensor_RequestParams>
): _Element {
  if (!_cached_encoder_for_CalibrateSensor_RequestParams) {
    _cached_encoder_for_CalibrateSensor_RequestParams = function (
      value: CalibrateSensor_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_SignedInt(value.timeout, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CalibrateSensor_RequestParams(value, elGetter);
}


/* eslint-enable */
