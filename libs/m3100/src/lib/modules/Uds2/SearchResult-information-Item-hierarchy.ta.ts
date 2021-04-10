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

/* START_OF_SYMBOL_DEFINITION SearchResult_information_Item_hierarchy */
/**
 * @summary SearchResult_information_Item_hierarchy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResult-information-Item-hierarchy ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class SearchResult_information_Item_hierarchy {
  constructor(
    /**
     * @summary `entries`.
     * @public
     * @readonly
     */
    readonly entries: OPTIONAL<INTEGER>,
    /**
     * @summary `firsteEntry`.
     * @public
     * @readonly
     */
    readonly firsteEntry: OPTIONAL<INTEGER>,
    /**
     * @summary `entry`.
     * @public
     * @readonly
     */
    readonly entry: Entry[]
  ) {}

  /**
   * @summary Restructures an object into a SearchResult_information_Item_hierarchy
   * @description
   *
   * This takes an `object` and converts it to a `SearchResult_information_Item_hierarchy`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SearchResult_information_Item_hierarchy`.
   * @returns {SearchResult_information_Item_hierarchy}
   */
  public static _from_object(
    _o: {
      [_K in keyof SearchResult_information_Item_hierarchy]: SearchResult_information_Item_hierarchy[_K];
    }
  ): SearchResult_information_Item_hierarchy {
    return new SearchResult_information_Item_hierarchy(
      _o.entries,
      _o.firsteEntry,
      _o.entry
    );
  }

  /**
   * @summary Getter that returns the default value for `firsteEntry`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_firsteEntry() {
    return 1;
  }
}
/* END_OF_SYMBOL_DEFINITION SearchResult_information_Item_hierarchy */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchResult_information_Item_hierarchy */
/**
 * @summary The Leading Root Component Types of SearchResult_information_Item_hierarchy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchResult_information_Item_hierarchy: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'entries',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'firsteEntry',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'entry',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchResult_information_Item_hierarchy */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchResult_information_Item_hierarchy */
/**
 * @summary The Trailing Root Component Types of SearchResult_information_Item_hierarchy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchResult_information_Item_hierarchy: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchResult_information_Item_hierarchy */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchResult_information_Item_hierarchy */
/**
 * @summary The Extension Addition Component Types of SearchResult_information_Item_hierarchy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchResult_information_Item_hierarchy: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchResult_information_Item_hierarchy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResult_information_Item_hierarchy */
let _cached_decoder_for_SearchResult_information_Item_hierarchy: $.ASN1Decoder<SearchResult_information_Item_hierarchy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResult_information_Item_hierarchy */

/* START_OF_SYMBOL_DEFINITION _decode_SearchResult_information_Item_hierarchy */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchResult_information_Item_hierarchy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResult_information_Item_hierarchy} The decoded data structure.
 */
export function _decode_SearchResult_information_Item_hierarchy(el: _Element) {
  if (!_cached_decoder_for_SearchResult_information_Item_hierarchy) {
    _cached_decoder_for_SearchResult_information_Item_hierarchy = function (
      el: _Element
    ): SearchResult_information_Item_hierarchy {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let entries: OPTIONAL<INTEGER>;
      let firsteEntry: OPTIONAL<INTEGER> =
        SearchResult_information_Item_hierarchy._default_value_for_firsteEntry;
      let entry!: Entry[];
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        entries: (_el: _Element): void => {
          entries = $._decodeInteger(_el);
        },
        firsteEntry: (_el: _Element): void => {
          firsteEntry = $._decodeInteger(_el);
        },
        entry: (_el: _Element): void => {
          entry = $._decodeSequenceOf<Entry>(() => _decode_Entry)(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SearchResult_information_Item_hierarchy,
        _extension_additions_list_spec_for_SearchResult_information_Item_hierarchy,
        _root_component_type_list_2_spec_for_SearchResult_information_Item_hierarchy,
        undefined
      );
      return new SearchResult_information_Item_hierarchy /* SEQUENCE_CONSTRUCTOR_CALL */(
        entries,
        firsteEntry,
        entry
      );
    };
  }
  return _cached_decoder_for_SearchResult_information_Item_hierarchy(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchResult_information_Item_hierarchy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResult_information_Item_hierarchy */
let _cached_encoder_for_SearchResult_information_Item_hierarchy: $.ASN1Encoder<SearchResult_information_Item_hierarchy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResult_information_Item_hierarchy */

/* START_OF_SYMBOL_DEFINITION _encode_SearchResult_information_Item_hierarchy */
/**
 * @summary Encodes a(n) SearchResult_information_Item_hierarchy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResult_information_Item_hierarchy, encoded as an ASN.1 Element.
 */
export function _encode_SearchResult_information_Item_hierarchy(
  value: SearchResult_information_Item_hierarchy,
  elGetter: $.ASN1Encoder<SearchResult_information_Item_hierarchy>
) {
  if (!_cached_encoder_for_SearchResult_information_Item_hierarchy) {
    _cached_encoder_for_SearchResult_information_Item_hierarchy = function (
      value: SearchResult_information_Item_hierarchy,
      elGetter: $.ASN1Encoder<SearchResult_information_Item_hierarchy>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.entries === undefined
              ? undefined
              : $._encodeInteger(value.entries, $.BER),
            /* IF_DEFAULT */ value.firsteEntry === undefined ||
            $.deepEq(
              value.firsteEntry,
              SearchResult_information_Item_hierarchy._default_value_for_firsteEntry
            )
              ? undefined
              : $._encodeInteger(value.firsteEntry, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<Entry>(
              () => _encode_Entry,
              $.BER
            )(value.entry, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SearchResult_information_Item_hierarchy(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchResult_information_Item_hierarchy */

/* eslint-enable */
