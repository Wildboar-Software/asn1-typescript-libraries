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
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Process_ResponseParams */
/**
 * @summary Process_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Process-ResponseParams ::= SEQUENCE {processedBIR  BioAPI-BIR-HANDLE
 * }
 * ```
 *
 * @class
 */
export class Process_ResponseParams {
  constructor(
    /**
     * @summary `processedBIR`.
     * @public
     * @readonly
     */
    readonly processedBIR: BioAPI_BIR_HANDLE
  ) {}

  /**
   * @summary Restructures an object into a Process_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `Process_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Process_ResponseParams`.
   * @returns {Process_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof Process_ResponseParams]: Process_ResponseParams[_K] }
  ): Process_ResponseParams {
    return new Process_ResponseParams(_o.processedBIR);
  }
}
/* END_OF_SYMBOL_DEFINITION Process_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Process_ResponseParams */
/**
 * @summary The Leading Root Component Types of Process_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Process_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'processedBIR',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Process_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Process_ResponseParams */
/**
 * @summary The Trailing Root Component Types of Process_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Process_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Process_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Process_ResponseParams */
/**
 * @summary The Extension Addition Component Types of Process_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Process_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Process_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Process_ResponseParams */
let _cached_decoder_for_Process_ResponseParams: $.ASN1Decoder<Process_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Process_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_Process_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) Process_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Process_ResponseParams} The decoded data structure.
 */
export function _decode_Process_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_Process_ResponseParams) {
    _cached_decoder_for_Process_ResponseParams = function (
      el: _Element
    ): Process_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'Process-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'processedBIR';
      let processedBIR!: BioAPI_BIR_HANDLE;
      processedBIR = _decode_BioAPI_BIR_HANDLE(sequence[0]);
      return new Process_ResponseParams(processedBIR);
    };
  }
  return _cached_decoder_for_Process_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Process_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Process_ResponseParams */
let _cached_encoder_for_Process_ResponseParams: $.ASN1Encoder<Process_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Process_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_Process_ResponseParams */
/**
 * @summary Encodes a(n) Process_ResponseParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Process_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_Process_ResponseParams(
  value: Process_ResponseParams,
  elGetter: $.ASN1Encoder<Process_ResponseParams>
) {
  if (!_cached_encoder_for_Process_ResponseParams) {
    _cached_encoder_for_Process_ResponseParams = function (
      value: Process_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BIR_HANDLE(
              value.processedBIR,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Process_ResponseParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Process_ResponseParams */

/* eslint-enable */
