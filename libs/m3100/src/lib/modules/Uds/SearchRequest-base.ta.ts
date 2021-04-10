/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION SearchRequest_base */
/**
 * @summary SearchRequest_base
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest-base ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class SearchRequest_base {
  constructor(
    /**
     * @summary `entryIdentifier`.
     * @public
     * @readonly
     */
    readonly entryIdentifier: OPTIONAL<OCTET_STRING>
  ) {}

  /**
   * @summary Restructures an object into a SearchRequest_base
   * @description
   *
   * This takes an `object` and converts it to a `SearchRequest_base`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SearchRequest_base`.
   * @returns {SearchRequest_base}
   */
  public static _from_object(
    _o: { [_K in keyof SearchRequest_base]: SearchRequest_base[_K] }
  ): SearchRequest_base {
    return new SearchRequest_base(_o.entryIdentifier);
  }
}
/* END_OF_SYMBOL_DEFINITION SearchRequest_base */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchRequest_base */
/**
 * @summary The Leading Root Component Types of SearchRequest_base
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchRequest_base: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'entryIdentifier',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchRequest_base */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchRequest_base */
/**
 * @summary The Trailing Root Component Types of SearchRequest_base
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchRequest_base: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchRequest_base */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchRequest_base */
/**
 * @summary The Extension Addition Component Types of SearchRequest_base
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchRequest_base: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchRequest_base */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchRequest_base */
let _cached_decoder_for_SearchRequest_base: $.ASN1Decoder<SearchRequest_base> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchRequest_base */

/* START_OF_SYMBOL_DEFINITION _decode_SearchRequest_base */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchRequest_base
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchRequest_base} The decoded data structure.
 */
export function _decode_SearchRequest_base(el: _Element) {
  if (!_cached_decoder_for_SearchRequest_base) {
    _cached_decoder_for_SearchRequest_base = function (
      el: _Element
    ): SearchRequest_base {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let entryIdentifier: OPTIONAL<OCTET_STRING>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        entryIdentifier: (_el: _Element): void => {
          entryIdentifier = $._decodeOctetString(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SearchRequest_base,
        _extension_additions_list_spec_for_SearchRequest_base,
        _root_component_type_list_2_spec_for_SearchRequest_base,
        undefined
      );
      return new SearchRequest_base /* SEQUENCE_CONSTRUCTOR_CALL */(
        entryIdentifier
      );
    };
  }
  return _cached_decoder_for_SearchRequest_base(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchRequest_base */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchRequest_base */
let _cached_encoder_for_SearchRequest_base: $.ASN1Encoder<SearchRequest_base> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchRequest_base */

/* START_OF_SYMBOL_DEFINITION _encode_SearchRequest_base */
/**
 * @summary Encodes a(n) SearchRequest_base into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRequest_base, encoded as an ASN.1 Element.
 */
export function _encode_SearchRequest_base(
  value: SearchRequest_base,
  elGetter: $.ASN1Encoder<SearchRequest_base>
) {
  if (!_cached_encoder_for_SearchRequest_base) {
    _cached_encoder_for_SearchRequest_base = function (
      value: SearchRequest_base,
      elGetter: $.ASN1Encoder<SearchRequest_base>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.entryIdentifier === undefined
              ? undefined
              : $._encodeOctetString(value.entryIdentifier, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SearchRequest_base(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchRequest_base */

/* eslint-enable */
