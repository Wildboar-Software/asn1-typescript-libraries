/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import { SearchArgument_search_mode, _decode_SearchArgument_search_mode, _encode_SearchArgument_search_mode } from "../DFRAbstractService/SearchArgument-search-mode.ta.mjs";
// export { SearchArgument_search_mode, _decode_SearchArgument_search_mode, _encode_SearchArgument_search_mode } from "../DFRAbstractService/SearchArgument-search-mode.ta.mjs";
import { _decode_CommonListSearchArguments, _encode_CommonListSearchArguments } from "../DFRAbstractService/CommonListSearchArguments.ta.mjs";
// export { CommonListSearchArguments, _decode_CommonListSearchArguments, _encode_CommonListSearchArguments } from "../DFRAbstractService/CommonListSearchArguments.ta.mjs";
import { SearchDomain, _decode_SearchDomain, _encode_SearchDomain } from "../DFRAbstractService/SearchDomain.ta.mjs";
// export { SearchDomain, _decode_SearchDomain, _encode_SearchDomain } from "../DFRAbstractService/SearchDomain.ta.mjs";
import { SearchCriteria, _decode_SearchCriteria, _encode_SearchCriteria } from "../DFRAbstractService/SearchCriteria.ta.mjs";
// export { SearchCriteria, _decode_SearchCriteria, _encode_SearchCriteria } from "../DFRAbstractService/SearchCriteria.ta.mjs";
import { _decode_CommonArguments, _encode_CommonArguments } from "../DFRAbstractService/CommonArguments.ta.mjs";
// export { CommonArguments, _decode_CommonArguments, _encode_CommonArguments } from "../DFRAbstractService/CommonArguments.ta.mjs";
import { Limits, _decode_Limits, _encode_Limits } from "../DFRAbstractService/Limits.ta.mjs";
// export { Limits, _decode_Limits, _encode_Limits } from "../DFRAbstractService/Limits.ta.mjs";
import { AttributeSelection, _decode_AttributeSelection, _encode_AttributeSelection } from "../DFRAbstractService/AttributeSelection.ta.mjs";
// export { AttributeSelection, _decode_AttributeSelection, _encode_AttributeSelection } from "../DFRAbstractService/AttributeSelection.ta.mjs";
import { OrderingRule, _decode_OrderingRule, _encode_OrderingRule } from "../DFRAbstractService/OrderingRule.ta.mjs";
// export { OrderingRule, _decode_OrderingRule, _encode_OrderingRule } from "../DFRAbstractService/OrderingRule.ta.mjs";
import { TaskId, _decode_TaskId, _encode_TaskId } from "../DFRAbstractService/TaskId.ta.mjs";
// export { TaskId, _decode_TaskId, _encode_TaskId } from "../DFRAbstractService/TaskId.ta.mjs";
import { Reservation, _decode_Reservation, _encode_Reservation } from "../DFRAbstractService/Reservation.ta.mjs";
// export { Reservation, _decode_Reservation, _encode_Reservation } from "../DFRAbstractService/Reservation.ta.mjs";
import { ErrorHandlingMode, _decode_ErrorHandlingMode, _encode_ErrorHandlingMode } from "../DFRAbstractService/ErrorHandlingMode.ta.mjs";
// export { ErrorHandlingMode, _decode_ErrorHandlingMode, _encode_ErrorHandlingMode } from "../DFRAbstractService/ErrorHandlingMode.ta.mjs";
import { Priority, _enum_for_Priority, Priority_medium /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_Priority, _encode_Priority } from "../DFRAbstractService/Priority.ta.mjs";
// export { Priority, _enum_for_Priority, Priority_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_medium /* IMPORTED_LONG_ENUMERATION_ITEM */, medium /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_high /* IMPORTED_LONG_ENUMERATION_ITEM */, high /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Priority, _encode_Priority } from "../DFRAbstractService/Priority.ta.mjs";
import { Privileges, _decode_Privileges, _encode_Privileges } from "../DFRAbstractService/Privileges.ta.mjs";
// export { Privileges, _decode_Privileges, _encode_Privileges } from "../DFRAbstractService/Privileges.ta.mjs";


/**
 * @summary SearchArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchArgument ::= SEQUENCE {
 *     search-mode     [0] CHOICE {
 *         continue            [0] DfrEntryName,
 *         -- Continue the search with all Options (search domain,
 *         -- search criteria and continuation context) from the
 *         -- search result list specified by the DfrEntryName.
 *         -- The result will be added to the present content of
 *         -- this search result list.
 *         update              [1] DfrEntryName,
 *         --The present content of the search result list
 *         --is verified andpossibly updated.
 *         new-search-stored   [2] DfrEntryName,
 *         -- All Options are supplied by the requestor in the
 *         -- subsequent Parameters; they are stored in the search
 *         -- result List specified, where the result is then
 *         -- also stored.
 *         non-stored-search   [3] NULL
 *     },
 *     COMPONENTS OF CommonListSearchArguments,
 *     search-domain   [5] SearchDomain OPTIONAL,
 *     search-criteria [6] SearchCriteria OPTIONAL,
 *     COMPONENTS OF CommonArguments(WITH COMPONENTS {
 *         ...,
 *         error-handling ABSENT
 *     })
 * }
 * ```
 * 
 * @class
 */
export
class SearchArgument {
    constructor (
        /**
         * @summary `search_mode`.
         * @public
         * @readonly
         */
        readonly search_mode: SearchArgument_search_mode,
        /**
         * @summary `continue_`.
         * @public
         * @readonly
         */
        readonly continue_: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `limits`.
         * @public
         * @readonly
         */
        readonly limits: OPTIONAL<Limits> /* REPLICATED_COMPONENT */,
        /**
         * @summary `selection`.
         * @public
         * @readonly
         */
        readonly selection: OPTIONAL<AttributeSelection> /* REPLICATED_COMPONENT */,
        /**
         * @summary `ordering`.
         * @public
         * @readonly
         */
        readonly ordering: OPTIONAL<OrderingRule> /* REPLICATED_COMPONENT */,
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
        readonly search_criteria: OPTIONAL<SearchCriteria>,
        /**
         * @summary `task_id`.
         * @public
         * @readonly
         */
        readonly task_id: OPTIONAL<TaskId> /* REPLICATED_COMPONENT */,
        /**
         * @summary `reservation`.
         * @public
         * @readonly
         */
        readonly reservation: OPTIONAL<Reservation> /* REPLICATED_COMPONENT */,
        /**
         * @summary `error_handling`.
         * @public
         * @readonly
         */
        readonly error_handling: OPTIONAL<ErrorHandlingMode> /* REPLICATED_COMPONENT */,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<Priority> /* REPLICATED_COMPONENT */,
        /**
         * @summary `privileges`.
         * @public
         * @readonly
         */
        readonly privileges: OPTIONAL<Privileges> /* REPLICATED_COMPONENT */
    ) {
        if (error_handling !== undefined) {
            throw new _ConstructionError("SearchArgument.error-handling shall be absent");
        }
    }

    /**
     * @summary Restructures an object into a SearchArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SearchArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchArgument`.
     * @returns {SearchArgument}
     */
    public static _from_object (_o: { [_K in keyof (SearchArgument)]: (SearchArgument)[_K] }): SearchArgument {
        return new SearchArgument(_o.search_mode, _o.continue_, _o.limits, _o.selection, _o.ordering, _o.search_domain, _o.search_criteria, _o.task_id, _o.reservation, _o.error_handling, _o.priority, _o.privileges);
    }

    /**
     * @summary Getter that returns the default value for `continue_`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_continue_ () { return false; }
    /**
     * @summary Getter that returns the default value for `error_handling`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_error_handling () { return all_or_nothing; }
    /**
     * @summary Getter that returns the default value for `priority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_priority () { return Priority_medium; }        /**
         * @summary The enum used as the type of the component `priority`
         * @public
         * @static
         */

    public static _enum_for_priority = _enum_for_Priority;
}

/**
 * @summary The Leading Root Component Types of SearchArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SearchArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("search-mode", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("continue", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("limits", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("selection", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("ordering", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("search-domain", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("search-criteria", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("task-id", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("reservation", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("error-handling", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("privileges", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Trailing Root Component Types of SearchArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SearchArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SearchArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SearchArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SearchArgument: $.ASN1Decoder<SearchArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchArgument (el: _Element): SearchArgument {
    if (!_cached_decoder_for_SearchArgument) { _cached_decoder_for_SearchArgument = function (el: _Element): SearchArgument {
    let search_mode!: SearchArgument_search_mode;
    let continue_: OPTIONAL<BOOLEAN> = SearchArgument._default_value_for_continue_;
    let limits: OPTIONAL<Limits>;
    let selection: OPTIONAL<AttributeSelection>;
    let ordering: OPTIONAL<OrderingRule>;
    let search_domain: OPTIONAL<SearchDomain>;
    let search_criteria: OPTIONAL<SearchCriteria>;
    let task_id: OPTIONAL<TaskId>;
    let reservation: OPTIONAL<Reservation>;
    let error_handling: OPTIONAL<ErrorHandlingMode> = SearchArgument._default_value_for_error_handling;
    let priority: OPTIONAL<Priority> = SearchArgument._default_value_for_priority;
    let privileges: OPTIONAL<Privileges>;
    const callbacks: $.DecodingMap = {
        "search-mode": (_el: _Element): void => { search_mode = $._decode_explicit<SearchArgument_search_mode>(() => _decode_SearchArgument_search_mode)(_el); },
        "continue": (_el: _Element): void => { continue_ = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "limits": (_el: _Element): void => { limits = $._decode_implicit<Limits>(() => _decode_Limits)(_el); },
        "selection": (_el: _Element): void => { selection = $._decode_explicit<AttributeSelection>(() => _decode_AttributeSelection)(_el); },
        "ordering": (_el: _Element): void => { ordering = $._decode_implicit<OrderingRule>(() => _decode_OrderingRule)(_el); },
        "search-domain": (_el: _Element): void => { search_domain = $._decode_implicit<SearchDomain>(() => _decode_SearchDomain)(_el); },
        "search-criteria": (_el: _Element): void => { search_criteria = $._decode_explicit<SearchCriteria>(() => _decode_SearchCriteria)(_el); },
        "task-id": (_el: _Element): void => { task_id = $._decode_implicit<TaskId>(() => _decode_TaskId)(_el); },
        "reservation": (_el: _Element): void => { reservation = $._decode_implicit<Reservation>(() => _decode_Reservation)(_el); },
        "error-handling": (_el: _Element): void => { error_handling = $._decode_explicit<ErrorHandlingMode>(() => _decode_ErrorHandlingMode)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<Priority>(() => _decode_Priority)(_el); },
        "privileges": (_el: _Element): void => { privileges = $._decode_implicit<Privileges>(() => _decode_Privileges)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SearchArgument,
        _extension_additions_list_spec_for_SearchArgument,
        _root_component_type_list_2_spec_for_SearchArgument,
        undefined,
    );
    return new SearchArgument(
        search_mode,
        continue_,
        limits,
        selection,
        ordering,
        search_domain,
        search_criteria,
        task_id,
        reservation,
        error_handling,
        priority,
        privileges
    );
}; }
    return _cached_decoder_for_SearchArgument(el);
}

let _cached_encoder_for_SearchArgument: $.ASN1Encoder<SearchArgument> | null = null;

/**
 * @summary Encodes a(n) SearchArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SearchArgument (value: SearchArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchArgument) { _cached_encoder_for_SearchArgument = function (value: SearchArgument): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_SearchArgument_search_mode, $.BER)(value.search_mode, $.BER),
            /* IF_DEFAULT */ (value.continue_ === undefined || $.deepEq(value.continue_, SearchArgument._default_value_for_continue_) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.continue_, $.BER)),
            /* IF_ABSENT  */ ((value.limits === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Limits, $.BER)(value.limits, $.BER)),
            /* IF_ABSENT  */ ((value.selection === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_AttributeSelection, $.BER)(value.selection, $.BER)),
            /* IF_ABSENT  */ ((value.ordering === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_OrderingRule, $.BER)(value.ordering, $.BER)),
            /* IF_ABSENT  */ ((value.search_domain === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SearchDomain, $.BER)(value.search_domain, $.BER)),
            /* IF_ABSENT  */ ((value.search_criteria === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_SearchCriteria, $.BER)(value.search_criteria, $.BER)),
            /* IF_ABSENT  */ ((value.task_id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_TaskId, $.BER)(value.task_id, $.BER)),
            /* IF_ABSENT  */ ((value.reservation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_Reservation, $.BER)(value.reservation, $.BER)),
            /* IF_DEFAULT */ (value.error_handling === undefined || $.deepEq(value.error_handling, SearchArgument._default_value_for_error_handling) ? undefined : $._encode_explicit(_TagClass.context, 28, () => _encode_ErrorHandlingMode, $.BER)(value.error_handling, $.BER)),
            /* IF_DEFAULT */ (value.priority === undefined || $.deepEq(value.priority, SearchArgument._default_value_for_priority) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_Priority, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.privileges === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => _encode_Privileges, $.BER)(value.privileges, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SearchArgument(value, elGetter);
}


/* eslint-enable */
