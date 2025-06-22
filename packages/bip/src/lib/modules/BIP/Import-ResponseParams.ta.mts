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
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta.mjs';

/**
 * @summary Import_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Import-ResponseParams ::= SEQUENCE {constructedBIR  BioAPI-BIR-HANDLE
 * }
 * ```
 *
 * @class
 */
export class Import_ResponseParams {
  constructor(
    /**
     * @summary `constructedBIR`.
     * @public
     * @readonly
     */
    readonly constructedBIR: BioAPI_BIR_HANDLE
  ) {}

  /**
   * @summary Restructures an object into a Import_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `Import_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Import_ResponseParams`.
   * @returns {Import_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof Import_ResponseParams]: Import_ResponseParams[_K] }
  ): Import_ResponseParams {
    return new Import_ResponseParams(_o.constructedBIR);
  }
}


/**
 * @summary The Leading Root Component Types of Import_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Import_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'constructedBIR',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of Import_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Import_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Import_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Import_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_Import_ResponseParams: $.ASN1Decoder<Import_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Import_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Import_ResponseParams} The decoded data structure.
 */
export function _decode_Import_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_Import_ResponseParams) {
    _cached_decoder_for_Import_ResponseParams = function (
      el: _Element
    ): Import_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'Import-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'constructedBIR';
      let constructedBIR!: BioAPI_BIR_HANDLE;
      constructedBIR = _decode_BioAPI_BIR_HANDLE(sequence[0]);
      return new Import_ResponseParams(constructedBIR);
    };
  }
  return _cached_decoder_for_Import_ResponseParams(el);
}


let _cached_encoder_for_Import_ResponseParams: $.ASN1Encoder<Import_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) Import_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Import_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_Import_ResponseParams(
  value: Import_ResponseParams,
  elGetter: $.ASN1Encoder<Import_ResponseParams>
) {
  if (!_cached_encoder_for_Import_ResponseParams) {
    _cached_encoder_for_Import_ResponseParams = function (
      value: Import_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BIR_HANDLE(
              value.constructedBIR,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Import_ResponseParams(value, elGetter);
}


/* eslint-enable */
