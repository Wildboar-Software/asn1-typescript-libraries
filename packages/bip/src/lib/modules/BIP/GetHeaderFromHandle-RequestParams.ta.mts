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
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta.mjs';

/**
 * @summary GetHeaderFromHandle_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GetHeaderFromHandle-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   birHandle          BioAPI-BIR-HANDLE
 * }
 * ```
 *
 * @class
 */
export class GetHeaderFromHandle_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `birHandle`.
     * @public
     * @readonly
     */
    readonly birHandle: BioAPI_BIR_HANDLE
  ) {}

  /**
   * @summary Restructures an object into a GetHeaderFromHandle_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `GetHeaderFromHandle_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GetHeaderFromHandle_RequestParams`.
   * @returns {GetHeaderFromHandle_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof GetHeaderFromHandle_RequestParams]: GetHeaderFromHandle_RequestParams[_K];
    }
  ): GetHeaderFromHandle_RequestParams {
    return new GetHeaderFromHandle_RequestParams(
      _o.originalBSPHandle,
      _o.birHandle
    );
  }
}


/**
 * @summary The Leading Root Component Types of GetHeaderFromHandle_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GetHeaderFromHandle_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'birHandle',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of GetHeaderFromHandle_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GetHeaderFromHandle_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of GetHeaderFromHandle_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GetHeaderFromHandle_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_GetHeaderFromHandle_RequestParams: $.ASN1Decoder<GetHeaderFromHandle_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GetHeaderFromHandle_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GetHeaderFromHandle_RequestParams} The decoded data structure.
 */
export function _decode_GetHeaderFromHandle_RequestParams(el: _Element) {
  if (!_cached_decoder_for_GetHeaderFromHandle_RequestParams) {
    _cached_decoder_for_GetHeaderFromHandle_RequestParams = function (
      el: _Element
    ): GetHeaderFromHandle_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'GetHeaderFromHandle-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'birHandle';
      let originalBSPHandle!: BioAPI_HANDLE;
      let birHandle!: BioAPI_BIR_HANDLE;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      birHandle = _decode_BioAPI_BIR_HANDLE(sequence[1]);
      return new GetHeaderFromHandle_RequestParams(
        originalBSPHandle,
        birHandle
      );
    };
  }
  return _cached_decoder_for_GetHeaderFromHandle_RequestParams(el);
}


let _cached_encoder_for_GetHeaderFromHandle_RequestParams: $.ASN1Encoder<GetHeaderFromHandle_RequestParams> | null = null;


/**
 * @summary Encodes a(n) GetHeaderFromHandle_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetHeaderFromHandle_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_GetHeaderFromHandle_RequestParams(
  value: GetHeaderFromHandle_RequestParams,
  elGetter: $.ASN1Encoder<GetHeaderFromHandle_RequestParams>
) {
  if (!_cached_encoder_for_GetHeaderFromHandle_RequestParams) {
    _cached_encoder_for_GetHeaderFromHandle_RequestParams = function (
      value: GetHeaderFromHandle_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_BIR_HANDLE(value.birHandle, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_GetHeaderFromHandle_RequestParams(value, elGetter);
}


/* eslint-enable */
