/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
import { DfrEntryList, _decode_DfrEntryList, _encode_DfrEntryList } from "../DFRAbstractService/DfrEntryList.ta.mjs";
// export { DfrEntryList, _decode_DfrEntryList, _encode_DfrEntryList } from "../DFRAbstractService/DfrEntryList.ta.mjs";
import { LimitEncountered, _enum_for_LimitEncountered, _decode_LimitEncountered, _encode_LimitEncountered } from "../DFRAbstractService/LimitEncountered.ta.mjs";
// export { LimitEncountered, _enum_for_LimitEncountered, LimitEncountered_time_limit /* IMPORTED_LONG_ENUMERATION_ITEM */, time_limit /* IMPORTED_SHORT_ENUMERATION_ITEM */, LimitEncountered_count_limit /* IMPORTED_LONG_ENUMERATION_ITEM */, count_limit /* IMPORTED_SHORT_ENUMERATION_ITEM */, LimitEncountered_length_exceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, length_exceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LimitEncountered, _encode_LimitEncountered } from "../DFRAbstractService/LimitEncountered.ta.mjs";
import { Warning, _decode_Warning, _encode_Warning } from "../DFRAbstractService/Warning.ta.mjs";
// export { Warning, _decode_Warning, _encode_Warning } from "../DFRAbstractService/Warning.ta.mjs";
import { TaskId, _decode_TaskId, _encode_TaskId } from "../DFRAbstractService/TaskId.ta.mjs";
// export { TaskId, _decode_TaskId, _encode_TaskId } from "../DFRAbstractService/TaskId.ta.mjs";


/**
 * @summary SearchResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchResult ::= SEQUENCE {
 *     COMPONENTS OF CommonListSearchResult(WITH COMPONENTS {
 *         ...,
 *         warnings ABSENT
 *     }),
 *     removed-entries [5] DfrEntryList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SearchResult {
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
         * @summary `removed_entries`.
         * @public
         * @readonly
         */
        readonly removed_entries: OPTIONAL<DfrEntryList>
    ) {
        if (warnings !== undefined) {
            throw new _ConstructionError("SearchResult.warnings shall be absent");
        }
    }

    /**
     * @summary Restructures an object into a SearchResult
     * @description
     * 
     * This takes an `object` and converts it to a `SearchResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchResult`.
     * @returns {SearchResult}
     */
    public static _from_object (_o: { [_K in keyof (SearchResult)]: (SearchResult)[_K] }): SearchResult {
        return new SearchResult(_o.number_of_entries, _o.limit_encountered, _o.entry_list, _o.warnings, _o.continuation, _o.removed_entries);
    }

    /**
     * @summary Getter that returns the default value for `warnings`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_warnings () { return [  ]; }        /**
         * @summary The enum used as the type of the component `limit_encountered`
         * @public
         * @static
         */

    public static _enum_for_limit_encountered = _enum_for_LimitEncountered;
}

/**
 * @summary The Leading Root Component Types of SearchResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SearchResult: $.ComponentSpec[] = [
    new $.ComponentSpec("number-of-entries", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("limit-encountered", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("entry-list", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("warnings", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("continuation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("removed-entries", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of SearchResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SearchResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SearchResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SearchResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SearchResult: $.ASN1Decoder<SearchResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchResult (el: _Element): SearchResult {
    if (!_cached_decoder_for_SearchResult) { _cached_decoder_for_SearchResult = function (el: _Element): SearchResult {
    let number_of_entries!: INTEGER;
    let limit_encountered: OPTIONAL<LimitEncountered>;
    let entry_list!: DfrEntryList;
    let warnings: OPTIONAL<Warning[]> = SearchResult._default_value_for_warnings;
    let continuation: OPTIONAL<TaskId>;
    let removed_entries: OPTIONAL<DfrEntryList>;
    const callbacks: $.DecodingMap = {
        "number-of-entries": (_el: _Element): void => { number_of_entries = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "limit-encountered": (_el: _Element): void => { limit_encountered = $._decode_implicit<LimitEncountered>(() => _decode_LimitEncountered)(_el); },
        "entry-list": (_el: _Element): void => { entry_list = $._decode_implicit<DfrEntryList>(() => _decode_DfrEntryList)(_el); },
        "warnings": (_el: _Element): void => { warnings = $._decode_implicit<Warning[]>(() => $._decodeSequenceOf<Warning>(() => _decode_Warning))(_el); },
        "continuation": (_el: _Element): void => { continuation = $._decode_implicit<TaskId>(() => _decode_TaskId)(_el); },
        "removed-entries": (_el: _Element): void => { removed_entries = $._decode_implicit<DfrEntryList>(() => _decode_DfrEntryList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SearchResult,
        _extension_additions_list_spec_for_SearchResult,
        _root_component_type_list_2_spec_for_SearchResult,
        undefined,
    );
    return new SearchResult(
        number_of_entries,
        limit_encountered,
        entry_list,
        warnings,
        continuation,
        removed_entries
    );
}; }
    return _cached_decoder_for_SearchResult(el);
}

let _cached_encoder_for_SearchResult: $.ASN1Encoder<SearchResult> | null = null;

/**
 * @summary Encodes a(n) SearchResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResult, encoded as an ASN.1 Element.
 */
export
function _encode_SearchResult (value: SearchResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchResult) { _cached_encoder_for_SearchResult = function (value: SearchResult): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.number_of_entries, $.BER),
            /* IF_ABSENT  */ ((value.limit_encountered === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_LimitEncountered, $.BER)(value.limit_encountered, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_DfrEntryList, $.BER)(value.entry_list, $.BER),
            /* IF_DEFAULT */ (value.warnings === undefined || $.deepEq(value.warnings, SearchResult._default_value_for_warnings) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<Warning>(() => _encode_Warning, $.BER), $.BER)(value.warnings, $.BER)),
            /* IF_ABSENT  */ ((value.continuation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_TaskId, $.BER)(value.continuation, $.BER)),
            /* IF_ABSENT  */ ((value.removed_entries === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_DfrEntryList, $.BER)(value.removed_entries, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SearchResult(value, elGetter);
}


/* eslint-enable */
