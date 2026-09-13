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
import { _decode_CommonUpdateArguments, _encode_CommonUpdateArguments } from "../DFRAbstractService/CommonUpdateArguments.ta.mjs";
// export { CommonUpdateArguments, _decode_CommonUpdateArguments, _encode_CommonUpdateArguments } from "../DFRAbstractService/CommonUpdateArguments.ta.mjs";
import { Token, _decode_Token, _encode_Token } from "../DOR-definition/Token.ta.mjs";
// export { Token, _decode_Token, _encode_Token } from "../DOR-definition/Token.ta.mjs";
import { _decode_CommonArguments, _encode_CommonArguments } from "../DFRAbstractService/CommonArguments.ta.mjs";
// export { CommonArguments, _decode_CommonArguments, _encode_CommonArguments } from "../DFRAbstractService/CommonArguments.ta.mjs";
import { DfrObjectClass, _enum_for_DfrObjectClass, _decode_DfrObjectClass, _encode_DfrObjectClass } from "../DFRAbstractService/DfrObjectClass.ta.mjs";
// export { DfrObjectClass, _enum_for_DfrObjectClass, DfrObjectClass_dfr_document /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_document /* IMPORTED_SHORT_ENUMERATION_ITEM */, DfrObjectClass_dfr_root_group /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_root_group /* IMPORTED_SHORT_ENUMERATION_ITEM */, DfrObjectClass_dfr_proper_group /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_proper_group /* IMPORTED_SHORT_ENUMERATION_ITEM */, DfrObjectClass_dfr_reference /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_reference /* IMPORTED_SHORT_ENUMERATION_ITEM */, DfrObjectClass_dfr_search_result_list /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_search_result_list /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DfrObjectClass, _encode_DfrObjectClass } from "../DFRAbstractService/DfrObjectClass.ta.mjs";
import { CommonUpdateArguments_entry, _decode_CommonUpdateArguments_entry, _encode_CommonUpdateArguments_entry } from "../DFRAbstractService/CommonUpdateArguments-entry.ta.mjs";
// export { CommonUpdateArguments_entry, _decode_CommonUpdateArguments_entry, _encode_CommonUpdateArguments_entry } from "../DFRAbstractService/CommonUpdateArguments-entry.ta.mjs";
import { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
// export { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
import { GroupMemberPosition, _decode_GroupMemberPosition, _encode_GroupMemberPosition } from "../DFRAbstractService/GroupMemberPosition.ta.mjs";
// export { GroupMemberPosition, _decode_GroupMemberPosition, _encode_GroupMemberPosition } from "../DFRAbstractService/GroupMemberPosition.ta.mjs";
import { EntryModification, _decode_EntryModification, _encode_EntryModification } from "../DFRAbstractService/EntryModification.ta.mjs";
// export { EntryModification, _decode_EntryModification, _encode_EntryModification } from "../DFRAbstractService/EntryModification.ta.mjs";
import { EntryInformationSelection, _decode_EntryInformationSelection, _encode_EntryInformationSelection } from "../DFRAbstractService/EntryInformationSelection.ta.mjs";
// export { EntryInformationSelection, _decode_EntryInformationSelection, _encode_EntryInformationSelection } from "../DFRAbstractService/EntryInformationSelection.ta.mjs";
import { Requested_QoS_level, _decode_Requested_QoS_level, _encode_Requested_QoS_level } from "../DOR-definition/Requested-QoS-level.ta.mjs";
// export { Requested_QoS_level, _decode_Requested_QoS_level, _encode_Requested_QoS_level } from "../DOR-definition/Requested-QoS-level.ta.mjs";
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
 * @summary ReadArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReadArgument ::= SEQUENCE {
 *     COMPONENTS OF CommonUpdateArguments(WITH COMPONENTS { entry PRESENT, selection PRESENT }),
 *     dereferencing   [7] BOOLEAN DEFAULT FALSE,
 *     token           [8] Token OPTIONAL,
 *     COMPONENTS OF CommonArguments(WITH COMPONENTS { ..., error-handling ABSENT })
 * }
 * ```
 * 
 * @class
 */
export
class ReadArgument {
    constructor (
        /**
         * @summary `object_class`.
         * @public
         * @readonly
         */
        readonly object_class: OPTIONAL<DfrObjectClass> /* REPLICATED_COMPONENT */,
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: OPTIONAL<CommonUpdateArguments_entry> /* REPLICATED_COMPONENT */,
        /**
         * @summary `destination`.
         * @public
         * @readonly
         */
        readonly destination: OPTIONAL<DfrEntryName> /* REPLICATED_COMPONENT */,
        /**
         * @summary `position`.
         * @public
         * @readonly
         */
        readonly position: OPTIONAL<GroupMemberPosition> /* REPLICATED_COMPONENT */,
        /**
         * @summary `modifications`.
         * @public
         * @readonly
         */
        readonly modifications: OPTIONAL<EntryModification[]> /* REPLICATED_COMPONENT */,
        /**
         * @summary `selection`.
         * @public
         * @readonly
         */
        readonly selection: OPTIONAL<EntryInformationSelection> /* REPLICATED_COMPONENT */,
        /**
         * @summary `reference_qos`.
         * @public
         * @readonly
         */
        readonly reference_qos: OPTIONAL<Requested_QoS_level> /* REPLICATED_COMPONENT */,
        /**
         * @summary `dereferencing`.
         * @public
         * @readonly
         */
        readonly dereferencing: OPTIONAL<BOOLEAN>,
        /**
         * @summary `token`.
         * @public
         * @readonly
         */
        readonly token: OPTIONAL<Token>,
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
        if (entry === undefined) {
            throw new _ConstructionError("ReadArgument.entry shall be present");
        }
        if (selection === undefined) {
            throw new _ConstructionError("ReadArgument.selection shall be present");
        }
        if (error_handling !== undefined && !("all_or_nothing" in error_handling)) {
            throw new _ConstructionError("ReadArgument.error-handling shall be absent");
        }
    }

    /**
     * @summary Restructures an object into a ReadArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ReadArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReadArgument`.
     * @returns {ReadArgument}
     */
    public static _from_object (_o: { [_K in keyof (ReadArgument)]: (ReadArgument)[_K] }): ReadArgument {
        return new ReadArgument(_o.object_class, _o.entry, _o.destination, _o.position, _o.modifications, _o.selection, _o.reference_qos, _o.dereferencing, _o.token, _o.task_id, _o.reservation, _o.error_handling, _o.priority, _o.privileges);
    }

    /**
     * @summary Getter that returns the default value for `dereferencing`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_dereferencing () { return false; }
    /**
     * @summary Getter that returns the default value for `error_handling`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_error_handling () { return { all_or_nothing: null }; }
    /**
     * @summary Getter that returns the default value for `priority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_priority () { return Priority_medium; }        /**
         * @summary The enum used as the type of the component `object_class`
         * @public
         * @static
         */

    public static _enum_for_object_class = _enum_for_DfrObjectClass;        /**
         * @summary The enum used as the type of the component `priority`
         * @public
         * @static
         */

    public static _enum_for_priority = _enum_for_Priority;
}

/**
 * @summary The Leading Root Component Types of ReadArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReadArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("object-class", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("entry", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("destination", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("position", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("modifications", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("selection", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("reference-qos", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("dereferencing", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("token", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("task-id", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("reservation", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("error-handling", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("privileges", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Trailing Root Component Types of ReadArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReadArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReadArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReadArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReadArgument: $.ASN1Decoder<ReadArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReadArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReadArgument (el: _Element): ReadArgument {
    if (!_cached_decoder_for_ReadArgument) { _cached_decoder_for_ReadArgument = function (el: _Element): ReadArgument {
    let object_class: OPTIONAL<DfrObjectClass>;
    let entry: OPTIONAL<CommonUpdateArguments_entry>;
    let destination: OPTIONAL<DfrEntryName>;
    let position: OPTIONAL<GroupMemberPosition>;
    let modifications: OPTIONAL<EntryModification[]>;
    let selection: OPTIONAL<EntryInformationSelection>;
    let reference_qos: OPTIONAL<Requested_QoS_level>;
    let dereferencing: OPTIONAL<BOOLEAN> = ReadArgument._default_value_for_dereferencing;
    let token: OPTIONAL<Token>;
    let task_id: OPTIONAL<TaskId>;
    let reservation: OPTIONAL<Reservation>;
    let error_handling: OPTIONAL<ErrorHandlingMode> = ReadArgument._default_value_for_error_handling;
    let priority: OPTIONAL<Priority> = ReadArgument._default_value_for_priority;
    let privileges: OPTIONAL<Privileges>;
    const callbacks: $.DecodingMap = {
        "object-class": (_el: _Element): void => { object_class = $._decode_implicit<DfrObjectClass>(() => _decode_DfrObjectClass)(_el); },
        "entry": (_el: _Element): void => { entry = $._decode_explicit<CommonUpdateArguments_entry>(() => _decode_CommonUpdateArguments_entry)(_el); },
        "destination": (_el: _Element): void => { destination = $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName)(_el); },
        "position": (_el: _Element): void => { position = $._decode_explicit<GroupMemberPosition>(() => _decode_GroupMemberPosition)(_el); },
        "modifications": (_el: _Element): void => { modifications = $._decode_implicit<EntryModification[]>(() => $._decodeSequenceOf<EntryModification>(() => _decode_EntryModification))(_el); },
        "selection": (_el: _Element): void => { selection = $._decode_implicit<EntryInformationSelection>(() => _decode_EntryInformationSelection)(_el); },
        "reference-qos": (_el: _Element): void => { reference_qos = $._decode_explicit<Requested_QoS_level>(() => _decode_Requested_QoS_level)(_el); },
        "dereferencing": (_el: _Element): void => { dereferencing = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "token": (_el: _Element): void => { token = $._decode_explicit<Token>(() => _decode_Token)(_el); },
        "task-id": (_el: _Element): void => { task_id = $._decode_implicit<TaskId>(() => _decode_TaskId)(_el); },
        "reservation": (_el: _Element): void => { reservation = $._decode_implicit<Reservation>(() => _decode_Reservation)(_el); },
        "error-handling": (_el: _Element): void => { error_handling = $._decode_explicit<ErrorHandlingMode>(() => _decode_ErrorHandlingMode)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<Priority>(() => _decode_Priority)(_el); },
        "privileges": (_el: _Element): void => { privileges = $._decode_implicit<Privileges>(() => _decode_Privileges)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReadArgument,
        _extension_additions_list_spec_for_ReadArgument,
        _root_component_type_list_2_spec_for_ReadArgument,
        undefined,
    );
    return new ReadArgument(
        object_class,
        entry,
        destination,
        position,
        modifications,
        selection,
        reference_qos,
        dereferencing,
        token,
        task_id,
        reservation,
        error_handling,
        priority,
        privileges
    );
}; }
    return _cached_decoder_for_ReadArgument(el);
}

let _cached_encoder_for_ReadArgument: $.ASN1Encoder<ReadArgument> | null = null;

/**
 * @summary Encodes a(n) ReadArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReadArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ReadArgument (value: ReadArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReadArgument) { _cached_encoder_for_ReadArgument = function (value: ReadArgument): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.object_class === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_DfrObjectClass, $.BER)(value.object_class, $.BER)),
            /* IF_ABSENT  */ ((value.entry === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_CommonUpdateArguments_entry, $.BER)(value.entry, $.BER)),
            /* IF_ABSENT  */ ((value.destination === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_DfrEntryName, $.BER)(value.destination, $.BER)),
            /* IF_ABSENT  */ ((value.position === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_GroupMemberPosition, $.BER)(value.position, $.BER)),
            /* IF_ABSENT  */ ((value.modifications === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<EntryModification>(() => _encode_EntryModification, $.BER), $.BER)(value.modifications, $.BER)),
            /* IF_ABSENT  */ ((value.selection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_EntryInformationSelection, $.BER)(value.selection, $.BER)),
            /* IF_ABSENT  */ ((value.reference_qos === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_Requested_QoS_level, $.BER)(value.reference_qos, $.BER)),
            /* IF_DEFAULT */ (value.dereferencing === undefined || $.deepEq(value.dereferencing, ReadArgument._default_value_for_dereferencing) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.dereferencing, $.BER)),
            /* IF_ABSENT  */ ((value.token === undefined) ? undefined : $._encode_explicit(_TagClass.context, 8, () => _encode_Token, $.BER)(value.token, $.BER)),
            /* IF_ABSENT  */ ((value.task_id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_TaskId, $.BER)(value.task_id, $.BER)),
            /* IF_ABSENT  */ ((value.reservation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_Reservation, $.BER)(value.reservation, $.BER)),
            /* IF_DEFAULT */ (value.error_handling === undefined || $.deepEq(value.error_handling, ReadArgument._default_value_for_error_handling) ? undefined : $._encode_explicit(_TagClass.context, 28, () => _encode_ErrorHandlingMode, $.BER)(value.error_handling, $.BER)),
            /* IF_DEFAULT */ (value.priority === undefined || $.deepEq(value.priority, ReadArgument._default_value_for_priority) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_Priority, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.privileges === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => _encode_Privileges, $.BER)(value.privileges, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReadArgument(value, elGetter);
}


/* eslint-enable */
