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
  BioAPI_BFP_LIST_ELEMENT,
  _decode_BioAPI_BFP_LIST_ELEMENT,
  _encode_BioAPI_BFP_LIST_ELEMENT,
} from '../BIP/BioAPI-BFP-LIST-ELEMENT.ta.mjs';

/**
 * @summary QueryBFPs_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QueryBFPs-ResponseParams ::= SEQUENCE {
 *   bfps  SEQUENCE (SIZE (0..max-unsigned-int)) OF bfp BioAPI-BFP-LIST-ELEMENT
 * }
 * ```
 *
 */
export class QueryBFPs_ResponseParams {
  constructor(
    /**
     * @summary `bfps`.
     * @public
     * @readonly
     */
    readonly bfps: BioAPI_BFP_LIST_ELEMENT[]
  ) {}

  /**
   * @summary Restructures an object into a QueryBFPs_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `QueryBFPs_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `QueryBFPs_ResponseParams`.
   * @returns {QueryBFPs_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof QueryBFPs_ResponseParams]: QueryBFPs_ResponseParams[_K] }
  ): QueryBFPs_ResponseParams {
    return new QueryBFPs_ResponseParams(_o.bfps);
  }
}


/**
 * @summary The Leading Root Component Types of QueryBFPs_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_QueryBFPs_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bfps',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of QueryBFPs_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_QueryBFPs_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of QueryBFPs_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_QueryBFPs_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_QueryBFPs_ResponseParams: $.ASN1Decoder<QueryBFPs_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) QueryBFPs_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QueryBFPs_ResponseParams} The decoded data structure.
 */
export function _decode_QueryBFPs_ResponseParams(el: _Element): QueryBFPs_ResponseParams {
  if (!_cached_decoder_for_QueryBFPs_ResponseParams) {
    _cached_decoder_for_QueryBFPs_ResponseParams = function (
      el: _Element
    ): QueryBFPs_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'QueryBFPs-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bfps';
      let bfps!: BioAPI_BFP_LIST_ELEMENT[];
      bfps = $._decodeSequenceOf<BioAPI_BFP_LIST_ELEMENT>(
        () => _decode_BioAPI_BFP_LIST_ELEMENT
      )(sequence[0]);
      return new QueryBFPs_ResponseParams(bfps);
    };
  }
  return _cached_decoder_for_QueryBFPs_ResponseParams(el);
}


let _cached_encoder_for_QueryBFPs_ResponseParams: $.ASN1Encoder<QueryBFPs_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) QueryBFPs_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QueryBFPs_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_QueryBFPs_ResponseParams(
  value: QueryBFPs_ResponseParams,
  elGetter: $.ASN1Encoder<QueryBFPs_ResponseParams>
): _Element {
  if (!_cached_encoder_for_QueryBFPs_ResponseParams) {
    _cached_encoder_for_QueryBFPs_ResponseParams = function (
      value: QueryBFPs_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<BioAPI_BFP_LIST_ELEMENT>(
              () => _encode_BioAPI_BFP_LIST_ELEMENT,
              $.BER
            )(value.bfps, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_QueryBFPs_ResponseParams(value, elGetter);
}


/* eslint-enable */
