/* eslint-disable */
import {
  OPTIONAL,
  OCTET_STRING,
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
  Identifier,
  _decode_Identifier,
  _encode_Identifier,
} from '../ASN1SOAP/Identifier.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Content_encoded_value */
/**
 * @summary Content_encoded_value
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Content-encoded-value ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Content_encoded_value {
  constructor(
    /**
     * @summary `schema_identifier`.
     * @public
     * @readonly
     */
    readonly schema_identifier: OPTIONAL<OCTET_STRING>,
    /**
     * @summary `id`.
     * @public
     * @readonly
     */
    readonly id: Identifier,
    /**
     * @summary `encoding`.
     * @public
     * @readonly
     */
    readonly encoding: OCTET_STRING
  ) {}

  /**
   * @summary Restructures an object into a Content_encoded_value
   * @description
   *
   * This takes an `object` and converts it to a `Content_encoded_value`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Content_encoded_value`.
   * @returns {Content_encoded_value}
   */
  public static _from_object(
    _o: { [_K in keyof Content_encoded_value]: Content_encoded_value[_K] }
  ): Content_encoded_value {
    return new Content_encoded_value(_o.schema_identifier, _o.id, _o.encoding);
  }
}
/* END_OF_SYMBOL_DEFINITION Content_encoded_value */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Content_encoded_value */
/**
 * @summary The Leading Root Component Types of Content_encoded_value
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Content_encoded_value: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'schema-identifier',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'id',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'encoding',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Content_encoded_value */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Content_encoded_value */
/**
 * @summary The Trailing Root Component Types of Content_encoded_value
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Content_encoded_value: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Content_encoded_value */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Content_encoded_value */
/**
 * @summary The Extension Addition Component Types of Content_encoded_value
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Content_encoded_value: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Content_encoded_value */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Content_encoded_value */
let _cached_decoder_for_Content_encoded_value: $.ASN1Decoder<Content_encoded_value> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Content_encoded_value */

/* START_OF_SYMBOL_DEFINITION _decode_Content_encoded_value */
/**
 * @summary Decodes an ASN.1 element into a(n) Content_encoded_value
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Content_encoded_value} The decoded data structure.
 */
export function _decode_Content_encoded_value(el: _Element) {
  if (!_cached_decoder_for_Content_encoded_value) {
    _cached_decoder_for_Content_encoded_value = function (
      el: _Element
    ): Content_encoded_value {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let schema_identifier: OPTIONAL<OCTET_STRING>;
      let id!: Identifier;
      let encoding!: OCTET_STRING;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'schema-identifier': (_el: _Element): void => {
          schema_identifier = $._decodeOctetString(_el);
        },
        id: (_el: _Element): void => {
          id = _decode_Identifier(_el);
        },
        encoding: (_el: _Element): void => {
          encoding = $._decodeOctetString(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Content_encoded_value,
        _extension_additions_list_spec_for_Content_encoded_value,
        _root_component_type_list_2_spec_for_Content_encoded_value,
        undefined
      );
      return new Content_encoded_value /* SEQUENCE_CONSTRUCTOR_CALL */(
        schema_identifier,
        id,
        encoding
      );
    };
  }
  return _cached_decoder_for_Content_encoded_value(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Content_encoded_value */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Content_encoded_value */
let _cached_encoder_for_Content_encoded_value: $.ASN1Encoder<Content_encoded_value> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Content_encoded_value */

/* START_OF_SYMBOL_DEFINITION _encode_Content_encoded_value */
/**
 * @summary Encodes a(n) Content_encoded_value into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Content_encoded_value, encoded as an ASN.1 Element.
 */
export function _encode_Content_encoded_value(
  value: Content_encoded_value,
  elGetter: $.ASN1Encoder<Content_encoded_value>
) {
  if (!_cached_encoder_for_Content_encoded_value) {
    _cached_encoder_for_Content_encoded_value = function (
      value: Content_encoded_value    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.schema_identifier === undefined
              ? undefined
              : $._encodeOctetString(value.schema_identifier, $.BER),
            /* REQUIRED   */ _encode_Identifier(value.id, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.encoding, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Content_encoded_value(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Content_encoded_value */

/* eslint-enable */
