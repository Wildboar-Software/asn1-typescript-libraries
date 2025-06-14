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
  BioAPI_BIR_HEADER,
  _decode_BioAPI_BIR_HEADER,
  _encode_BioAPI_BIR_HEADER,
} from '../BIP/BioAPI-BIR-HEADER.ta.mjs';
/* START_OF_SYMBOL_DEFINITION GetHeaderFromHandle_ResponseParams */
/**
 * @summary GetHeaderFromHandle_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GetHeaderFromHandle-ResponseParams ::= SEQUENCE {header  BioAPI-BIR-HEADER
 * }
 * ```
 *
 * @class
 */
export class GetHeaderFromHandle_ResponseParams {
  constructor(
    /**
     * @summary `header`.
     * @public
     * @readonly
     */
    readonly header: BioAPI_BIR_HEADER
  ) {}

  /**
   * @summary Restructures an object into a GetHeaderFromHandle_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `GetHeaderFromHandle_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GetHeaderFromHandle_ResponseParams`.
   * @returns {GetHeaderFromHandle_ResponseParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof GetHeaderFromHandle_ResponseParams]: GetHeaderFromHandle_ResponseParams[_K];
    }
  ): GetHeaderFromHandle_ResponseParams {
    return new GetHeaderFromHandle_ResponseParams(_o.header);
  }
}
/* END_OF_SYMBOL_DEFINITION GetHeaderFromHandle_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GetHeaderFromHandle_ResponseParams */
/**
 * @summary The Leading Root Component Types of GetHeaderFromHandle_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GetHeaderFromHandle_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'header',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GetHeaderFromHandle_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GetHeaderFromHandle_ResponseParams */
/**
 * @summary The Trailing Root Component Types of GetHeaderFromHandle_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GetHeaderFromHandle_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GetHeaderFromHandle_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GetHeaderFromHandle_ResponseParams */
/**
 * @summary The Extension Addition Component Types of GetHeaderFromHandle_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GetHeaderFromHandle_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GetHeaderFromHandle_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GetHeaderFromHandle_ResponseParams */
let _cached_decoder_for_GetHeaderFromHandle_ResponseParams: $.ASN1Decoder<GetHeaderFromHandle_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GetHeaderFromHandle_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_GetHeaderFromHandle_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) GetHeaderFromHandle_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GetHeaderFromHandle_ResponseParams} The decoded data structure.
 */
export function _decode_GetHeaderFromHandle_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_GetHeaderFromHandle_ResponseParams) {
    _cached_decoder_for_GetHeaderFromHandle_ResponseParams = function (
      el: _Element
    ): GetHeaderFromHandle_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'GetHeaderFromHandle-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'header';
      let header!: BioAPI_BIR_HEADER;
      header = _decode_BioAPI_BIR_HEADER(sequence[0]);
      return new GetHeaderFromHandle_ResponseParams(header);
    };
  }
  return _cached_decoder_for_GetHeaderFromHandle_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GetHeaderFromHandle_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GetHeaderFromHandle_ResponseParams */
let _cached_encoder_for_GetHeaderFromHandle_ResponseParams: $.ASN1Encoder<GetHeaderFromHandle_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GetHeaderFromHandle_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_GetHeaderFromHandle_ResponseParams */
/**
 * @summary Encodes a(n) GetHeaderFromHandle_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetHeaderFromHandle_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_GetHeaderFromHandle_ResponseParams(
  value: GetHeaderFromHandle_ResponseParams,
  elGetter: $.ASN1Encoder<GetHeaderFromHandle_ResponseParams>
) {
  if (!_cached_encoder_for_GetHeaderFromHandle_ResponseParams) {
    _cached_encoder_for_GetHeaderFromHandle_ResponseParams = function (
      value: GetHeaderFromHandle_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BIR_HEADER(value.header, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_GetHeaderFromHandle_ResponseParams(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_GetHeaderFromHandle_ResponseParams */

/* eslint-enable */
