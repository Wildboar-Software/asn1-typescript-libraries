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
import {
  SearchResult_entryCount_qualifier,
  _enum_for_SearchResult_entryCount_qualifier,
  SearchResult_entryCount_qualifier_exact /* IMPORTED_LONG_ENUMERATION_ITEM */,
  exact /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchResult_entryCount_qualifier_bestEstimate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  bestEstimate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SearchResult_entryCount_qualifier,
  _encode_SearchResult_entryCount_qualifier,
} from '../Uds2/SearchResult-entryCount-qualifier.ta';
export {
  SearchResult_entryCount_qualifier,
  _enum_for_SearchResult_entryCount_qualifier,
  SearchResult_entryCount_qualifier_exact /* IMPORTED_LONG_ENUMERATION_ITEM */,
  exact /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchResult_entryCount_qualifier_bestEstimate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  bestEstimate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SearchResult_entryCount_qualifier,
  _encode_SearchResult_entryCount_qualifier,
} from '../Uds2/SearchResult-entryCount-qualifier.ta';

/* START_OF_SYMBOL_DEFINITION SearchResult_entryCount */
/**
 * @summary SearchResult_entryCount
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResult-entryCount ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class SearchResult_entryCount {
  constructor(
    /**
     * @summary `count`.
     * @public
     * @readonly
     */
    readonly count: OPTIONAL<INTEGER>,
    /**
     * @summary `qualifier`.
     * @public
     * @readonly
     */
    readonly qualifier: OPTIONAL<SearchResult_entryCount_qualifier>
  ) {}

  /**
   * @summary Restructures an object into a SearchResult_entryCount
   * @description
   *
   * This takes an `object` and converts it to a `SearchResult_entryCount`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SearchResult_entryCount`.
   * @returns {SearchResult_entryCount}
   */
  public static _from_object(
    _o: { [_K in keyof SearchResult_entryCount]: SearchResult_entryCount[_K] }
  ): SearchResult_entryCount {
    return new SearchResult_entryCount(_o.count, _o.qualifier);
  }

  /**
   * @summary The enum used as the type of the component `qualifier`
   * @public
   * @static
   */

  public static _enum_for_qualifier = _enum_for_SearchResult_entryCount_qualifier;
}
/* END_OF_SYMBOL_DEFINITION SearchResult_entryCount */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchResult_entryCount */
/**
 * @summary The Leading Root Component Types of SearchResult_entryCount
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchResult_entryCount: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'count',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'qualifier',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchResult_entryCount */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchResult_entryCount */
/**
 * @summary The Trailing Root Component Types of SearchResult_entryCount
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchResult_entryCount: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchResult_entryCount */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchResult_entryCount */
/**
 * @summary The Extension Addition Component Types of SearchResult_entryCount
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchResult_entryCount: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchResult_entryCount */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResult_entryCount */
let _cached_decoder_for_SearchResult_entryCount: $.ASN1Decoder<SearchResult_entryCount> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResult_entryCount */

/* START_OF_SYMBOL_DEFINITION _decode_SearchResult_entryCount */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchResult_entryCount
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResult_entryCount} The decoded data structure.
 */
export function _decode_SearchResult_entryCount(el: _Element) {
  if (!_cached_decoder_for_SearchResult_entryCount) {
    _cached_decoder_for_SearchResult_entryCount = function (
      el: _Element
    ): SearchResult_entryCount {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let count: OPTIONAL<INTEGER>;
      let qualifier: OPTIONAL<SearchResult_entryCount_qualifier>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        count: (_el: _Element): void => {
          count = $._decodeInteger(_el);
        },
        qualifier: (_el: _Element): void => {
          qualifier = _decode_SearchResult_entryCount_qualifier(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SearchResult_entryCount,
        _extension_additions_list_spec_for_SearchResult_entryCount,
        _root_component_type_list_2_spec_for_SearchResult_entryCount,
        undefined
      );
      return new SearchResult_entryCount /* SEQUENCE_CONSTRUCTOR_CALL */(
        count,
        qualifier
      );
    };
  }
  return _cached_decoder_for_SearchResult_entryCount(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchResult_entryCount */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResult_entryCount */
let _cached_encoder_for_SearchResult_entryCount: $.ASN1Encoder<SearchResult_entryCount> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResult_entryCount */

/* START_OF_SYMBOL_DEFINITION _encode_SearchResult_entryCount */
/**
 * @summary Encodes a(n) SearchResult_entryCount into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResult_entryCount, encoded as an ASN.1 Element.
 */
export function _encode_SearchResult_entryCount(
  value: SearchResult_entryCount,
  elGetter: $.ASN1Encoder<SearchResult_entryCount>
) {
  if (!_cached_encoder_for_SearchResult_entryCount) {
    _cached_encoder_for_SearchResult_entryCount = function (
      value: SearchResult_entryCount,
      elGetter: $.ASN1Encoder<SearchResult_entryCount>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.count === undefined
              ? undefined
              : $._encodeInteger(value.count, $.BER),
            /* IF_ABSENT  */ value.qualifier === undefined
              ? undefined
              : _encode_SearchResult_entryCount_qualifier(
                  value.qualifier,
                  $.BER
                ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SearchResult_entryCount(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchResult_entryCount */

/* eslint-enable */
