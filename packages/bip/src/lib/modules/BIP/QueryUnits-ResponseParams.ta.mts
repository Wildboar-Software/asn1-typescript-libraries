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
  BioAPI_UNIT_SCHEMA,
  _decode_BioAPI_UNIT_SCHEMA,
  _encode_BioAPI_UNIT_SCHEMA,
} from '../BIP/BioAPI-UNIT-SCHEMA.ta.mjs';
/* START_OF_SYMBOL_DEFINITION QueryUnits_ResponseParams */
/**
 * @summary QueryUnits_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QueryUnits-ResponseParams ::= SEQUENCE {
 *   unitSchemas
 *     SEQUENCE (SIZE (0..max-unsigned-int)) OF unitSchema BioAPI-UNIT-SCHEMA
 * }
 * ```
 *
 * @class
 */
export class QueryUnits_ResponseParams {
  constructor(
    /**
     * @summary `unitSchemas`.
     * @public
     * @readonly
     */
    readonly unitSchemas: BioAPI_UNIT_SCHEMA[]
  ) {}

  /**
   * @summary Restructures an object into a QueryUnits_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `QueryUnits_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `QueryUnits_ResponseParams`.
   * @returns {QueryUnits_ResponseParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof QueryUnits_ResponseParams]: QueryUnits_ResponseParams[_K];
    }
  ): QueryUnits_ResponseParams {
    return new QueryUnits_ResponseParams(_o.unitSchemas);
  }
}
/* END_OF_SYMBOL_DEFINITION QueryUnits_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_QueryUnits_ResponseParams */
/**
 * @summary The Leading Root Component Types of QueryUnits_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_QueryUnits_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'unitSchemas',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_QueryUnits_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_QueryUnits_ResponseParams */
/**
 * @summary The Trailing Root Component Types of QueryUnits_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_QueryUnits_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_QueryUnits_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_QueryUnits_ResponseParams */
/**
 * @summary The Extension Addition Component Types of QueryUnits_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_QueryUnits_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_QueryUnits_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_QueryUnits_ResponseParams */
let _cached_decoder_for_QueryUnits_ResponseParams: $.ASN1Decoder<QueryUnits_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_QueryUnits_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_QueryUnits_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) QueryUnits_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QueryUnits_ResponseParams} The decoded data structure.
 */
export function _decode_QueryUnits_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_QueryUnits_ResponseParams) {
    _cached_decoder_for_QueryUnits_ResponseParams = function (
      el: _Element
    ): QueryUnits_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'QueryUnits-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'unitSchemas';
      let unitSchemas!: BioAPI_UNIT_SCHEMA[];
      unitSchemas = $._decodeSequenceOf<BioAPI_UNIT_SCHEMA>(
        () => _decode_BioAPI_UNIT_SCHEMA
      )(sequence[0]);
      return new QueryUnits_ResponseParams(unitSchemas);
    };
  }
  return _cached_decoder_for_QueryUnits_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_QueryUnits_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_QueryUnits_ResponseParams */
let _cached_encoder_for_QueryUnits_ResponseParams: $.ASN1Encoder<QueryUnits_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_QueryUnits_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_QueryUnits_ResponseParams */
/**
 * @summary Encodes a(n) QueryUnits_ResponseParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QueryUnits_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_QueryUnits_ResponseParams(
  value: QueryUnits_ResponseParams,
  elGetter: $.ASN1Encoder<QueryUnits_ResponseParams>
) {
  if (!_cached_encoder_for_QueryUnits_ResponseParams) {
    _cached_encoder_for_QueryUnits_ResponseParams = function (
      value: QueryUnits_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<BioAPI_UNIT_SCHEMA>(
              () => _encode_BioAPI_UNIT_SCHEMA,
              $.BER
            )(value.unitSchemas, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_QueryUnits_ResponseParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_QueryUnits_ResponseParams */

/* eslint-enable */
