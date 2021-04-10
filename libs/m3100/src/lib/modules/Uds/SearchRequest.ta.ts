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
  SearchOptions,
  _decode_SearchOptions,
  _encode_SearchOptions,
} from '../Uds/SearchOptions.ta';
export {
  SearchOptions,
  _decode_SearchOptions,
  _encode_SearchOptions,
} from '../Uds/SearchOptions.ta';
import {
  HierarchySelections,
  _decode_HierarchySelections,
  _encode_HierarchySelections,
} from '../Uds/HierarchySelections.ta';
export {
  HierarchySelections,
  _decode_HierarchySelections,
  _encode_HierarchySelections,
} from '../Uds/HierarchySelections.ta';
import {
  SearchRequest_base,
  _decode_SearchRequest_base,
  _encode_SearchRequest_base,
} from '../Uds/SearchRequest-base.ta';
export {
  SearchRequest_base,
  _decode_SearchRequest_base,
  _encode_SearchRequest_base,
} from '../Uds/SearchRequest-base.ta';
import { Filter, _decode_Filter, _encode_Filter } from '../Uds/Filter.ta';
export { Filter, _decode_Filter, _encode_Filter } from '../Uds/Filter.ta';
import {
  SearchRequest_infoSelect,
  _decode_SearchRequest_infoSelect,
  _encode_SearchRequest_infoSelect,
} from '../Uds/SearchRequest-infoSelect.ta';
export {
  SearchRequest_infoSelect,
  _decode_SearchRequest_infoSelect,
  _encode_SearchRequest_infoSelect,
} from '../Uds/SearchRequest-infoSelect.ta';
import {
  PagedResults,
  _decode_PagedResults,
  _encode_PagedResults,
} from '../Uds/PagedResults.ta';
export {
  PagedResults,
  _decode_PagedResults,
  _encode_PagedResults,
} from '../Uds/PagedResults.ta';

/* START_OF_SYMBOL_DEFINITION SearchRequest */
/**
 * @summary SearchRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest ::= SEQUENCE {
 *   entryLimit     INTEGER(1..MAX) OPTIONAL,
 *   extendedArea   INTEGER(0..MAX) DEFAULT 0,
 *   searchOptions  SearchOptions OPTIONAL,
 *   hierSelect     HierarchySelections DEFAULT {self},
 *   base           SEQUENCE {entryIdentifier  OCTET STRING OPTIONAL} OPTIONAL,
 *   filter         Filter OPTIONAL,
 *   infoSelect
 *     SEQUENCE {attrTypes  AttributeTypes OPTIONAL,
 *               family     SEQUENCE OF Family} OPTIONAL,
 *   pagedResults   PagedResults OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SearchRequest {
  constructor(
    /**
     * @summary `entryLimit`.
     * @public
     * @readonly
     */
    readonly entryLimit: OPTIONAL<INTEGER>,
    /**
     * @summary `extendedArea`.
     * @public
     * @readonly
     */
    readonly extendedArea: OPTIONAL<INTEGER>,
    /**
     * @summary `searchOptions`.
     * @public
     * @readonly
     */
    readonly searchOptions: OPTIONAL<SearchOptions>,
    /**
     * @summary `hierSelect`.
     * @public
     * @readonly
     */
    readonly hierSelect: OPTIONAL<HierarchySelections>,
    /**
     * @summary `base`.
     * @public
     * @readonly
     */
    readonly base: OPTIONAL<SearchRequest_base>,
    /**
     * @summary `filter`.
     * @public
     * @readonly
     */
    readonly filter: OPTIONAL<Filter>,
    /**
     * @summary `infoSelect`.
     * @public
     * @readonly
     */
    readonly infoSelect: OPTIONAL<SearchRequest_infoSelect>,
    /**
     * @summary `pagedResults`.
     * @public
     * @readonly
     */
    readonly pagedResults: OPTIONAL<PagedResults>
  ) {}

  /**
   * @summary Restructures an object into a SearchRequest
   * @description
   *
   * This takes an `object` and converts it to a `SearchRequest`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SearchRequest`.
   * @returns {SearchRequest}
   */
  public static _from_object(
    _o: { [_K in keyof SearchRequest]: SearchRequest[_K] }
  ): SearchRequest {
    return new SearchRequest(
      _o.entryLimit,
      _o.extendedArea,
      _o.searchOptions,
      _o.hierSelect,
      _o.base,
      _o.filter,
      _o.infoSelect,
      _o.pagedResults
    );
  }

  /**
   * @summary Getter that returns the default value for `extendedArea`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_extendedArea() {
    return 0;
  }
  /**
   * @summary Getter that returns the default value for `hierSelect`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_hierSelect() {
    return [self];
  }
}
/* END_OF_SYMBOL_DEFINITION SearchRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchRequest */
/**
 * @summary The Leading Root Component Types of SearchRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchRequest: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'entryLimit',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'extendedArea',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'searchOptions',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'hierSelect',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'base',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'filter',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'infoSelect',
    true,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'pagedResults',
    true,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchRequest */
/**
 * @summary The Trailing Root Component Types of SearchRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchRequest */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchRequest */
/**
 * @summary The Extension Addition Component Types of SearchRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchRequest */
let _cached_decoder_for_SearchRequest: $.ASN1Decoder<SearchRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchRequest */

/* START_OF_SYMBOL_DEFINITION _decode_SearchRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchRequest} The decoded data structure.
 */
export function _decode_SearchRequest(el: _Element) {
  if (!_cached_decoder_for_SearchRequest) {
    _cached_decoder_for_SearchRequest = function (el: _Element): SearchRequest {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let entryLimit: OPTIONAL<INTEGER>;
      let extendedArea: OPTIONAL<INTEGER> =
        SearchRequest._default_value_for_extendedArea;
      let searchOptions: OPTIONAL<SearchOptions>;
      let hierSelect: OPTIONAL<HierarchySelections> =
        SearchRequest._default_value_for_hierSelect;
      let base: OPTIONAL<SearchRequest_base>;
      let filter: OPTIONAL<Filter>;
      let infoSelect: OPTIONAL<SearchRequest_infoSelect>;
      let pagedResults: OPTIONAL<PagedResults>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        entryLimit: (_el: _Element): void => {
          entryLimit = $._decodeInteger(_el);
        },
        extendedArea: (_el: _Element): void => {
          extendedArea = $._decodeInteger(_el);
        },
        searchOptions: (_el: _Element): void => {
          searchOptions = _decode_SearchOptions(_el);
        },
        hierSelect: (_el: _Element): void => {
          hierSelect = _decode_HierarchySelections(_el);
        },
        base: (_el: _Element): void => {
          base = _decode_SearchRequest_base(_el);
        },
        filter: (_el: _Element): void => {
          filter = _decode_Filter(_el);
        },
        infoSelect: (_el: _Element): void => {
          infoSelect = _decode_SearchRequest_infoSelect(_el);
        },
        pagedResults: (_el: _Element): void => {
          pagedResults = _decode_PagedResults(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SearchRequest,
        _extension_additions_list_spec_for_SearchRequest,
        _root_component_type_list_2_spec_for_SearchRequest,
        undefined
      );
      return new SearchRequest /* SEQUENCE_CONSTRUCTOR_CALL */(
        entryLimit,
        extendedArea,
        searchOptions,
        hierSelect,
        base,
        filter,
        infoSelect,
        pagedResults
      );
    };
  }
  return _cached_decoder_for_SearchRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchRequest */
let _cached_encoder_for_SearchRequest: $.ASN1Encoder<SearchRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchRequest */

/* START_OF_SYMBOL_DEFINITION _encode_SearchRequest */
/**
 * @summary Encodes a(n) SearchRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRequest, encoded as an ASN.1 Element.
 */
export function _encode_SearchRequest(
  value: SearchRequest,
  elGetter: $.ASN1Encoder<SearchRequest>
) {
  if (!_cached_encoder_for_SearchRequest) {
    _cached_encoder_for_SearchRequest = function (
      value: SearchRequest,
      elGetter: $.ASN1Encoder<SearchRequest>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.entryLimit === undefined
              ? undefined
              : $._encodeInteger(value.entryLimit, $.BER),
            /* IF_DEFAULT */ value.extendedArea === undefined ||
            $.deepEq(
              value.extendedArea,
              SearchRequest._default_value_for_extendedArea
            )
              ? undefined
              : $._encodeInteger(value.extendedArea, $.BER),
            /* IF_ABSENT  */ value.searchOptions === undefined
              ? undefined
              : _encode_SearchOptions(value.searchOptions, $.BER),
            /* IF_DEFAULT */ value.hierSelect === undefined ||
            $.deepEq(
              value.hierSelect,
              SearchRequest._default_value_for_hierSelect
            )
              ? undefined
              : _encode_HierarchySelections(value.hierSelect, $.BER),
            /* IF_ABSENT  */ value.base === undefined
              ? undefined
              : _encode_SearchRequest_base(value.base, $.BER),
            /* IF_ABSENT  */ value.filter === undefined
              ? undefined
              : _encode_Filter(value.filter, $.BER),
            /* IF_ABSENT  */ value.infoSelect === undefined
              ? undefined
              : _encode_SearchRequest_infoSelect(value.infoSelect, $.BER),
            /* IF_ABSENT  */ value.pagedResults === undefined
              ? undefined
              : _encode_PagedResults(value.pagedResults, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SearchRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchRequest */

/* eslint-enable */
