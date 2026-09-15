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
import { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
// export { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
import { _decode_CommonListSearchArguments, _encode_CommonListSearchArguments } from "../DFRAbstractService/CommonListSearchArguments.ta.mjs";
// export { CommonListSearchArguments, _decode_CommonListSearchArguments, _encode_CommonListSearchArguments } from "../DFRAbstractService/CommonListSearchArguments.ta.mjs";
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
 * @summary ListArgument
 * @description
 *
 * `entry` is the group or SRL; `selection` is required. ISO/IEC 10166-1:1991
 * §8.2.7.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListArgument ::= SEQUENCE {
 *     entry   [0] DfrEntryName,
 *     COMPONENTS OF CommonListSearchArguments (WITH COMPONENTS { ..., selection PRESENT }),
 *     COMPONENTS OF CommonArguments
 * }
 * ```
 * 
 * @class
 */
export
class ListArgument {
    constructor (
        /**
         * @summary `entry`.
         * @description
         *
         * Group or search-result-list to list. ISO/IEC 10166-1:1991
         * §8.2.7.1.
         * @public
         * @readonly
         */
        readonly entry: DfrEntryName,
        /**
         * @summary `continue_`.
         * @description
         *
         * If true, resume the List/Search identified by `task-id` instead of
         * starting over. ISO/IEC 10166-1:1991 §8.1.6.1.
         * @public
         * @readonly
         */
        readonly continue_: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `limits`.
         * @description
         *
         * Optional count and/or time caps for this List/Search. ISO/IEC
         * 10166-1:1991 §8.1.6.1.
         * @public
         * @readonly
         */
        readonly limits: OPTIONAL<Limits> /* REPLICATED_COMPONENT */,
        /**
         * @summary `selection`.
         * @description
         *
         * Which attributes of each listed member to return. Required on List.
         * UPI and object-class are always returned. ISO/IEC 10166-1:1991
         * §8.1.6.2, §8.2.7.1.
         * @public
         * @readonly
         */
        readonly selection: OPTIONAL<AttributeSelection> /* REPLICATED_COMPONENT */,
        /**
         * @summary `ordering`.
         * @description
         *
         * Sort keys and directions. Overrides the group's `dfr-ordering` for
         * this request. Only attributes that MATCH FOR ORDERING may be used.
         * ISO/IEC 10166-1:1991 §8.1.6.3.
         * @public
         * @readonly
         */
        readonly ordering: OPTIONAL<OrderingRule> /* REPLICATED_COMPONENT */,
        /**
         * @summary `task_id`.
         * @description
         *
         * Optional identifier for this invocation, so it can later be
         * abandoned or continued. Must not be reused until the operation
         * completes or is abandoned. A List/Search continuation value returned
         * after a limit may be reused here. ISO/IEC 10166-1:1991 §8.1.3.1.
         * @public
         * @readonly
         */
        readonly task_id: OPTIONAL<TaskId> /* REPLICATED_COMPONENT */,
        /**
         * @summary `reservation`.
         * @description
         *
         * Requested reservation of the object this operation applies to. Omit
         * to leave the current reservation unchanged. Raising the level or
         * committing is done first; lowering an uncommitted reservation is
         * done last. ISO/IEC 10166-1:1991 §8.1.3.2, §8.2.9.
         * @public
         * @readonly
         */
        readonly reservation: OPTIONAL<Reservation> /* REPLICATED_COMPONENT */,
        /**
         * @summary `error_handling`.
         * @description
         *
         * How List and Copy-of-group treat members that cannot be accessed.
         * Default `all-or-nothing`. Modification problems are always treated
         * as all-or-nothing. ISO/IEC 10166-1:1991 §8.1.3.3.
         * @public
         * @readonly
         */
        readonly error_handling: OPTIONAL<ErrorHandlingMode> /* REPLICATED_COMPONENT */,
        /**
         * @summary `priority`.
         * @description
         *
         * Operational priority for a loaded server; overrides the bind default
         * (`medium`). The server need not honour it. Unrelated to
         * communications QoS. ISO/IEC 10166-1:1991 §8.1.3.4, §7.1.1.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<Priority> /* REPLICATED_COMPONENT */,
        /**
         * @summary `privileges`.
         * @description
         *
         * Per-operation PACs that modify bind privileges for this request only
         * (`operation-Pac`) and/or a `proxy-pac` the server may present when
         * accessing another application on the user's behalf. ISO/IEC
         * 10166-1:1991 §8.1.3.5.
         * @public
         * @readonly
         */
        readonly privileges: OPTIONAL<Privileges> /* REPLICATED_COMPONENT */
    ) {
        if (selection === undefined) {
            throw new _ConstructionError("ListArgument.selection shall be present");
        }
    }

    /**
     * @summary Restructures an object into a ListArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ListArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ListArgument`.
     * @returns {ListArgument}
     */
    public static _from_object (_o: { [_K in keyof (ListArgument)]: (ListArgument)[_K] }): ListArgument {
        return new ListArgument(_o.entry, _o.continue_, _o.limits, _o.selection, _o.ordering, _o.task_id, _o.reservation, _o.error_handling, _o.priority, _o.privileges);
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
    public static get _default_value_for_error_handling (): ErrorHandlingMode { return { all_or_nothing: null }; }
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
 * @summary The Leading Root Component Types of ListArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ListArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("entry", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("continue", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("limits", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("selection", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("ordering", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("task-id", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("reservation", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("error-handling", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("privileges", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Trailing Root Component Types of ListArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ListArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ListArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ListArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ListArgument: $.ASN1Decoder<ListArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListArgument (el: _Element): ListArgument {
    if (!_cached_decoder_for_ListArgument) { _cached_decoder_for_ListArgument = function (el: _Element): ListArgument {
    let entry!: DfrEntryName;
    let continue_: OPTIONAL<BOOLEAN> = ListArgument._default_value_for_continue_;
    let limits: OPTIONAL<Limits>;
    let selection: OPTIONAL<AttributeSelection>;
    let ordering: OPTIONAL<OrderingRule>;
    let task_id: OPTIONAL<TaskId>;
    let reservation: OPTIONAL<Reservation>;
    let error_handling: OPTIONAL<ErrorHandlingMode> = ListArgument._default_value_for_error_handling;
    let priority: OPTIONAL<Priority> = ListArgument._default_value_for_priority;
    let privileges: OPTIONAL<Privileges>;
    const callbacks: $.DecodingMap = {
        "entry": (_el: _Element): void => { entry = $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName)(_el); },
        "continue": (_el: _Element): void => { continue_ = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "limits": (_el: _Element): void => { limits = $._decode_implicit<Limits>(() => _decode_Limits)(_el); },
        "selection": (_el: _Element): void => { selection = $._decode_explicit<AttributeSelection>(() => _decode_AttributeSelection)(_el); },
        "ordering": (_el: _Element): void => { ordering = $._decode_implicit<OrderingRule>(() => _decode_OrderingRule)(_el); },
        "task-id": (_el: _Element): void => { task_id = $._decode_implicit<TaskId>(() => _decode_TaskId)(_el); },
        "reservation": (_el: _Element): void => { reservation = $._decode_implicit<Reservation>(() => _decode_Reservation)(_el); },
        "error-handling": (_el: _Element): void => { error_handling = $._decode_explicit<ErrorHandlingMode>(() => _decode_ErrorHandlingMode)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<Priority>(() => _decode_Priority)(_el); },
        "privileges": (_el: _Element): void => { privileges = $._decode_implicit<Privileges>(() => _decode_Privileges)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ListArgument,
        _extension_additions_list_spec_for_ListArgument,
        _root_component_type_list_2_spec_for_ListArgument,
        undefined,
    );
    return new ListArgument(
        entry,
        continue_,
        limits,
        selection,
        ordering,
        task_id,
        reservation,
        error_handling,
        priority,
        privileges
    );
}; }
    return _cached_decoder_for_ListArgument(el);
}

let _cached_encoder_for_ListArgument: $.ASN1Encoder<ListArgument> | null = null;

/**
 * @summary Encodes a(n) ListArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ListArgument (value: ListArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListArgument) { _cached_encoder_for_ListArgument = function (value: ListArgument): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_DfrEntryName, $.BER)(value.entry, $.BER),
            /* IF_DEFAULT */ (value.continue_ === undefined || $.deepEq(value.continue_, ListArgument._default_value_for_continue_) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.continue_, $.BER)),
            /* IF_ABSENT  */ ((value.limits === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Limits, $.BER)(value.limits, $.BER)),
            /* IF_ABSENT  */ ((value.selection === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_AttributeSelection, $.BER)(value.selection, $.BER)),
            /* IF_ABSENT  */ ((value.ordering === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_OrderingRule, $.BER)(value.ordering, $.BER)),
            /* IF_ABSENT  */ ((value.task_id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_TaskId, $.BER)(value.task_id, $.BER)),
            /* IF_ABSENT  */ ((value.reservation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_Reservation, $.BER)(value.reservation, $.BER)),
            /* IF_DEFAULT */ (value.error_handling === undefined || $.deepEq(value.error_handling, ListArgument._default_value_for_error_handling) ? undefined : $._encode_explicit(_TagClass.context, 28, () => _encode_ErrorHandlingMode, $.BER)(value.error_handling, $.BER)),
            /* IF_DEFAULT */ (value.priority === undefined || $.deepEq(value.priority, ListArgument._default_value_for_priority) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_Priority, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.privileges === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => _encode_Privileges, $.BER)(value.privileges, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ListArgument(value, elGetter);
}


/* eslint-enable */
