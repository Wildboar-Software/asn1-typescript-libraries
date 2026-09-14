/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_CommonListSearchResult, _encode_CommonListSearchResult } from "../DFRAbstractService/CommonListSearchResult.ta.mjs";
// export { CommonListSearchResult, _decode_CommonListSearchResult, _encode_CommonListSearchResult } from "../DFRAbstractService/CommonListSearchResult.ta.mjs";
import { OrderingRule, _decode_OrderingRule, _encode_OrderingRule } from "../DFRAbstractService/OrderingRule.ta.mjs";
// export { OrderingRule, _decode_OrderingRule, _encode_OrderingRule } from "../DFRAbstractService/OrderingRule.ta.mjs";
import { SearchDomain, _decode_SearchDomain, _encode_SearchDomain } from "../DFRAbstractService/SearchDomain.ta.mjs";
// export { SearchDomain, _decode_SearchDomain, _encode_SearchDomain } from "../DFRAbstractService/SearchDomain.ta.mjs";
import { SearchCriteria, _decode_SearchCriteria, _encode_SearchCriteria } from "../DFRAbstractService/SearchCriteria.ta.mjs";
// export { SearchCriteria, _decode_SearchCriteria, _encode_SearchCriteria } from "../DFRAbstractService/SearchCriteria.ta.mjs";
import { LimitEncountered, _enum_for_LimitEncountered, _decode_LimitEncountered, _encode_LimitEncountered } from "../DFRAbstractService/LimitEncountered.ta.mjs";
// export { LimitEncountered, _enum_for_LimitEncountered, LimitEncountered_time_limit /* IMPORTED_LONG_ENUMERATION_ITEM */, time_limit /* IMPORTED_SHORT_ENUMERATION_ITEM */, LimitEncountered_count_limit /* IMPORTED_LONG_ENUMERATION_ITEM */, count_limit /* IMPORTED_SHORT_ENUMERATION_ITEM */, LimitEncountered_length_exceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, length_exceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LimitEncountered, _encode_LimitEncountered } from "../DFRAbstractService/LimitEncountered.ta.mjs";
import { DfrEntryList, _decode_DfrEntryList, _encode_DfrEntryList } from "../DFRAbstractService/DfrEntryList.ta.mjs";
// export { DfrEntryList, _decode_DfrEntryList, _encode_DfrEntryList } from "../DFRAbstractService/DfrEntryList.ta.mjs";
import { Warning, _decode_Warning, _encode_Warning } from "../DFRAbstractService/Warning.ta.mjs";
// export { Warning, _decode_Warning, _encode_Warning } from "../DFRAbstractService/Warning.ta.mjs";
import { TaskId, _decode_TaskId, _encode_TaskId } from "../DFRAbstractService/TaskId.ta.mjs";
// export { TaskId, _decode_TaskId, _encode_TaskId } from "../DFRAbstractService/TaskId.ta.mjs";


/**
 * @summary ListResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListResult ::= SEQUENCE {
 *     COMPONENTS OF CommonListSearchResult,
 *     start-date-and-time     [5] GeneralizedTime OPTIONAL,
 *     end-date-and-time       [6] GeneralizedTime OPTIONAL,
 *     ordering                [7] OrderingRule OPTIONAL,
 *     search-domain           [8] SearchDomain OPTIONAL,
 *     search-criteria         [9] SearchCriteria OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ListResult {
    constructor (
        /**
         * @summary `number_of_entries`.
         * @public
         * @readonly
         */
        readonly number_of_entries: INTEGER /* REPLICATED_COMPONENT */,
        /**
         * @summary `limit_encountered`.
         * @public
         * @readonly
         */
        readonly limit_encountered: OPTIONAL<LimitEncountered> /* REPLICATED_COMPONENT */,
        /**
         * @summary `entry_list`.
         * @public
         * @readonly
         */
        readonly entry_list: DfrEntryList /* REPLICATED_COMPONENT */,
        /**
         * @summary `warnings`.
         * @public
         * @readonly
         */
        readonly warnings: OPTIONAL<Warning[]> /* REPLICATED_COMPONENT */,
        /**
         * @summary `continuation`.
         * @public
         * @readonly
         */
        readonly continuation: OPTIONAL<TaskId> /* REPLICATED_COMPONENT */,
        /**
         * @summary `start_date_and_time`.
         * @public
         * @readonly
         */
        readonly start_date_and_time: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `end_date_and_time`.
         * @public
         * @readonly
         */
        readonly end_date_and_time: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `ordering`.
         * @public
         * @readonly
         */
        readonly ordering: OPTIONAL<OrderingRule>,
        /**
         * @summary `search_domain`.
         * @public
         * @readonly
         */
        readonly search_domain: OPTIONAL<SearchDomain>,
        /**
         * @summary `search_criteria`.
         * @public
         * @readonly
         */
        readonly search_criteria: OPTIONAL<SearchCriteria>
    ) {}

    /**
     * @summary Restructures an object into a ListResult
     * @description
     * 
     * This takes an `object` and converts it to a `ListResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ListResult`.
     * @returns {ListResult}
     */
    public static _from_object (_o: { [_K in keyof (ListResult)]: (ListResult)[_K] }): ListResult {
        return new ListResult(_o.number_of_entries, _o.limit_encountered, _o.entry_list, _o.warnings, _o.continuation, _o.start_date_and_time, _o.end_date_and_time, _o.ordering, _o.search_domain, _o.search_criteria);
    }

    /**
     * @summary Getter that returns the default value for `warnings`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_warnings (): Warning[] { return []; }        /**
         * @summary The enum used as the type of the component `limit_encountered`
         * @public
         * @static
         */

    public static _enum_for_limit_encountered = _enum_for_LimitEncountered;
}

/**
 * @summary The Leading Root Component Types of ListResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ListResult: $.ComponentSpec[] = [
    new $.ComponentSpec("number-of-entries", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("limit-encountered", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("entry-list", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("warnings", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("continuation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("start-date-and-time", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("end-date-and-time", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("ordering", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("search-domain", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("search-criteria", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of ListResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ListResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ListResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ListResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ListResult: $.ASN1Decoder<ListResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListResult (el: _Element): ListResult {
    if (!_cached_decoder_for_ListResult) { _cached_decoder_for_ListResult = function (el: _Element): ListResult {
    let number_of_entries!: INTEGER;
    let limit_encountered: OPTIONAL<LimitEncountered>;
    let entry_list!: DfrEntryList;
    let warnings: OPTIONAL<Warning[]> = ListResult._default_value_for_warnings;
    let continuation: OPTIONAL<TaskId>;
    let start_date_and_time: OPTIONAL<GeneralizedTime>;
    let end_date_and_time: OPTIONAL<GeneralizedTime>;
    let ordering: OPTIONAL<OrderingRule>;
    let search_domain: OPTIONAL<SearchDomain>;
    let search_criteria: OPTIONAL<SearchCriteria>;
    const callbacks: $.DecodingMap = {
        "number-of-entries": (_el: _Element): void => { number_of_entries = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "limit-encountered": (_el: _Element): void => { limit_encountered = $._decode_implicit<LimitEncountered>(() => _decode_LimitEncountered)(_el); },
        "entry-list": (_el: _Element): void => { entry_list = $._decode_implicit<DfrEntryList>(() => _decode_DfrEntryList)(_el); },
        "warnings": (_el: _Element): void => { warnings = $._decode_implicit<Warning[]>(() => $._decodeSequenceOf<Warning>(() => _decode_Warning))(_el); },
        "continuation": (_el: _Element): void => { continuation = $._decode_implicit<TaskId>(() => _decode_TaskId)(_el); },
        "start-date-and-time": (_el: _Element): void => { start_date_and_time = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "end-date-and-time": (_el: _Element): void => { end_date_and_time = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "ordering": (_el: _Element): void => { ordering = $._decode_implicit<OrderingRule>(() => _decode_OrderingRule)(_el); },
        "search-domain": (_el: _Element): void => { search_domain = $._decode_implicit<SearchDomain>(() => _decode_SearchDomain)(_el); },
        "search-criteria": (_el: _Element): void => { search_criteria = $._decode_explicit<SearchCriteria>(() => _decode_SearchCriteria)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ListResult,
        _extension_additions_list_spec_for_ListResult,
        _root_component_type_list_2_spec_for_ListResult,
        undefined,
    );
    return new ListResult(
        number_of_entries,
        limit_encountered,
        entry_list,
        warnings,
        continuation,
        start_date_and_time,
        end_date_and_time,
        ordering,
        search_domain,
        search_criteria
    );
}; }
    return _cached_decoder_for_ListResult(el);
}

let _cached_encoder_for_ListResult: $.ASN1Encoder<ListResult> | null = null;

/**
 * @summary Encodes a(n) ListResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListResult, encoded as an ASN.1 Element.
 */
export
function _encode_ListResult (value: ListResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListResult) { _cached_encoder_for_ListResult = function (value: ListResult): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.number_of_entries, $.BER),
            /* IF_ABSENT  */ ((value.limit_encountered === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_LimitEncountered, $.BER)(value.limit_encountered, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_DfrEntryList, $.BER)(value.entry_list, $.BER),
            /* IF_DEFAULT */ (value.warnings === undefined || $.deepEq(value.warnings, ListResult._default_value_for_warnings) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<Warning>(() => _encode_Warning, $.BER), $.BER)(value.warnings, $.BER)),
            /* IF_ABSENT  */ ((value.continuation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_TaskId, $.BER)(value.continuation, $.BER)),
            /* IF_ABSENT  */ ((value.start_date_and_time === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeGeneralizedTime, $.BER)(value.start_date_and_time, $.BER)),
            /* IF_ABSENT  */ ((value.end_date_and_time === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeGeneralizedTime, $.BER)(value.end_date_and_time, $.BER)),
            /* IF_ABSENT  */ ((value.ordering === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_OrderingRule, $.BER)(value.ordering, $.BER)),
            /* IF_ABSENT  */ ((value.search_domain === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_SearchDomain, $.BER)(value.search_domain, $.BER)),
            /* IF_ABSENT  */ ((value.search_criteria === undefined) ? undefined : $._encode_explicit(_TagClass.context, 9, () => _encode_SearchCriteria, $.BER)(value.search_criteria, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ListResult(value, elGetter);
}


/* eslint-enable */
