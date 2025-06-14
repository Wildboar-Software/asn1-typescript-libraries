/* eslint-disable */
import {
  BIT_STRING,
  EMBEDDED_PDV,
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

/* START_OF_SYMBOL_DEFINITION gulsSignedTransformation_XformedDataType */
/**
 * @summary gulsSignedTransformation_XformedDataType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gulsSignedTransformation-XformedDataType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class gulsSignedTransformation_XformedDataType {
  constructor(
    /**
     * @summary `intermediateValue`.
     * @public
     * @readonly
     */
    readonly intermediateValue: EMBEDDED_PDV,
    /**
     * @summary `appendix`.
     * @public
     * @readonly
     */
    readonly appendix: BIT_STRING
  ) {}

  /**
   * @summary Restructures an object into a gulsSignedTransformation_XformedDataType
   * @description
   *
   * This takes an `object` and converts it to a `gulsSignedTransformation_XformedDataType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `gulsSignedTransformation_XformedDataType`.
   * @returns {gulsSignedTransformation_XformedDataType}
   */
  public static _from_object(
    _o: {
      [_K in keyof gulsSignedTransformation_XformedDataType]: gulsSignedTransformation_XformedDataType[_K];
    }
  ): gulsSignedTransformation_XformedDataType {
    return new gulsSignedTransformation_XformedDataType(
      _o.intermediateValue,
      _o.appendix
    );
  }
}
/* END_OF_SYMBOL_DEFINITION gulsSignedTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_gulsSignedTransformation_XformedDataType */
/**
 * @summary The Leading Root Component Types of gulsSignedTransformation_XformedDataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_gulsSignedTransformation_XformedDataType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'intermediateValue',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'appendix',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_gulsSignedTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_gulsSignedTransformation_XformedDataType */
/**
 * @summary The Trailing Root Component Types of gulsSignedTransformation_XformedDataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_gulsSignedTransformation_XformedDataType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_gulsSignedTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_gulsSignedTransformation_XformedDataType */
/**
 * @summary The Extension Addition Component Types of gulsSignedTransformation_XformedDataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_gulsSignedTransformation_XformedDataType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_gulsSignedTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_gulsSignedTransformation_XformedDataType */
let _cached_decoder_for_gulsSignedTransformation_XformedDataType: $.ASN1Decoder<gulsSignedTransformation_XformedDataType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_gulsSignedTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _decode_gulsSignedTransformation_XformedDataType */
/**
 * @summary Decodes an ASN.1 element into a(n) gulsSignedTransformation_XformedDataType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {gulsSignedTransformation_XformedDataType} The decoded data structure.
 */
export function _decode_gulsSignedTransformation_XformedDataType(el: _Element) {
  if (!_cached_decoder_for_gulsSignedTransformation_XformedDataType) {
    _cached_decoder_for_gulsSignedTransformation_XformedDataType = function (
      el: _Element
    ): gulsSignedTransformation_XformedDataType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'gulsSignedTransformation-XformedDataType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'intermediateValue';
      sequence[1].name = 'appendix';
      let intermediateValue!: EMBEDDED_PDV;
      let appendix!: BIT_STRING;
      intermediateValue = $._decodeEmbeddedPDV(sequence[0]);
      appendix = $._decodeBitString(sequence[1]);
      return new gulsSignedTransformation_XformedDataType(
        intermediateValue,
        appendix
      );
    };
  }
  return _cached_decoder_for_gulsSignedTransformation_XformedDataType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_gulsSignedTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_gulsSignedTransformation_XformedDataType */
let _cached_encoder_for_gulsSignedTransformation_XformedDataType: $.ASN1Encoder<gulsSignedTransformation_XformedDataType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_gulsSignedTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _encode_gulsSignedTransformation_XformedDataType */
/**
 * @summary Encodes a(n) gulsSignedTransformation_XformedDataType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The gulsSignedTransformation_XformedDataType, encoded as an ASN.1 Element.
 */
export function _encode_gulsSignedTransformation_XformedDataType(
  value: gulsSignedTransformation_XformedDataType,
  elGetter: $.ASN1Encoder<gulsSignedTransformation_XformedDataType>
) {
  if (!_cached_encoder_for_gulsSignedTransformation_XformedDataType) {
    _cached_encoder_for_gulsSignedTransformation_XformedDataType = function (
      value: gulsSignedTransformation_XformedDataType    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeEmbeddedPDV(
              value.intermediateValue,
              $.BER
            ),
            /* REQUIRED   */ $._encodeBitString(value.appendix, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_gulsSignedTransformation_XformedDataType(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_gulsSignedTransformation_XformedDataType */

/* eslint-enable */
