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
import { Entry, _decode_Entry, _encode_Entry } from '../Uds2/Entry.ta';
export { Entry, _decode_Entry, _encode_Entry } from '../Uds2/Entry.ta';

/* START_OF_SYMBOL_DEFINITION SearchResult_information_Item_entry */
/**
 * @summary SearchResult_information_Item_entry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResult-information-Item-entry ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class SearchResult_information_Item_entry {
  constructor(
    /**
     * @summary `hierSeq`.
     * @public
     * @readonly
     */
    readonly hierSeq: OPTIONAL<INTEGER>,
    /**
     * @summary `base`.
     * @public
     * @readonly
     */
    readonly base: Entry
  ) {}

  /**
   * @summary Restructures an object into a SearchResult_information_Item_entry
   * @description
   *
   * This takes an `object` and converts it to a `SearchResult_information_Item_entry`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SearchResult_information_Item_entry`.
   * @returns {SearchResult_information_Item_entry}
   */
  public static _from_object(
    _o: {
      [_K in keyof SearchResult_information_Item_entry]: SearchResult_information_Item_entry[_K];
    }
  ): SearchResult_information_Item_entry {
    return new SearchResult_information_Item_entry(_o.hierSeq, _o.base);
  }
}
/* END_OF_SYMBOL_DEFINITION SearchResult_information_Item_entry */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchResult_information_Item_entry */
/**
 * @summary The Leading Root Component Types of SearchResult_information_Item_entry
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchResult_information_Item_entry: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'hierSeq',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'base',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchResult_information_Item_entry */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchResult_information_Item_entry */
/**
 * @summary The Trailing Root Component Types of SearchResult_information_Item_entry
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchResult_information_Item_entry: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchResult_information_Item_entry */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchResult_information_Item_entry */
/**
 * @summary The Extension Addition Component Types of SearchResult_information_Item_entry
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchResult_information_Item_entry: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchResult_information_Item_entry */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResult_information_Item_entry */
let _cached_decoder_for_SearchResult_information_Item_entry: $.ASN1Decoder<SearchResult_information_Item_entry> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResult_information_Item_entry */

/* START_OF_SYMBOL_DEFINITION _decode_SearchResult_information_Item_entry */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchResult_information_Item_entry
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResult_information_Item_entry} The decoded data structure.
 */
export function _decode_SearchResult_information_Item_entry(el: _Element) {
  if (!_cached_decoder_for_SearchResult_information_Item_entry) {
    _cached_decoder_for_SearchResult_information_Item_entry = function (
      el: _Element
    ): SearchResult_information_Item_entry {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let hierSeq: OPTIONAL<INTEGER>;
      let base!: Entry;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        hierSeq: (_el: _Element): void => {
          hierSeq = $._decodeInteger(_el);
        },
        base: (_el: _Element): void => {
          base = _decode_Entry(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SearchResult_information_Item_entry,
        _extension_additions_list_spec_for_SearchResult_information_Item_entry,
        _root_component_type_list_2_spec_for_SearchResult_information_Item_entry,
        undefined
      );
      return new SearchResult_information_Item_entry /* SEQUENCE_CONSTRUCTOR_CALL */(
        hierSeq,
        base
      );
    };
  }
  return _cached_decoder_for_SearchResult_information_Item_entry(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchResult_information_Item_entry */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResult_information_Item_entry */
let _cached_encoder_for_SearchResult_information_Item_entry: $.ASN1Encoder<SearchResult_information_Item_entry> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResult_information_Item_entry */

/* START_OF_SYMBOL_DEFINITION _encode_SearchResult_information_Item_entry */
/**
 * @summary Encodes a(n) SearchResult_information_Item_entry into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResult_information_Item_entry, encoded as an ASN.1 Element.
 */
export function _encode_SearchResult_information_Item_entry(
  value: SearchResult_information_Item_entry,
  elGetter: $.ASN1Encoder<SearchResult_information_Item_entry>
) {
  if (!_cached_encoder_for_SearchResult_information_Item_entry) {
    _cached_encoder_for_SearchResult_information_Item_entry = function (
      value: SearchResult_information_Item_entry,
      elGetter: $.ASN1Encoder<SearchResult_information_Item_entry>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.hierSeq === undefined
              ? undefined
              : $._encodeInteger(value.hierSeq, $.BER),
            /* REQUIRED   */ _encode_Entry(value.base, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SearchResult_information_Item_entry(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchResult_information_Item_entry */

/* eslint-enable */
