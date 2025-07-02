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
  BioAPI_BIR_HEADER,
  _decode_BioAPI_BIR_HEADER,
  _encode_BioAPI_BIR_HEADER,
} from '../BIP/BioAPI-BIR-HEADER.ta.mjs';

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
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of GetHeaderFromHandle_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GetHeaderFromHandle_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of GetHeaderFromHandle_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GetHeaderFromHandle_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_GetHeaderFromHandle_ResponseParams: $.ASN1Decoder<GetHeaderFromHandle_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GetHeaderFromHandle_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GetHeaderFromHandle_ResponseParams} The decoded data structure.
 */
export function _decode_GetHeaderFromHandle_ResponseParams(el: _Element): GetHeaderFromHandle_ResponseParams {
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


let _cached_encoder_for_GetHeaderFromHandle_ResponseParams: $.ASN1Encoder<GetHeaderFromHandle_ResponseParams> | null = null;


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
): _Element {
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


/* eslint-enable */
