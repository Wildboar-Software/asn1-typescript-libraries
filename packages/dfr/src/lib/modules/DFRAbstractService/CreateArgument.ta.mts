/* eslint-disable */
import {
    OPTIONAL,
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
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
import { DfrObjectContent, _decode_DfrObjectContent, _encode_DfrObjectContent } from "../DFRAbstractService/DfrObjectContent.ta.mjs";
// export { DfrObjectContent, _decode_DfrObjectContent, _encode_DfrObjectContent } from "../DFRAbstractService/DfrObjectContent.ta.mjs";
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
 * @summary CreateArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreateArgument ::= SEQUENCE {
 *     COMPONENTS OF CommonUpdateArguments (WITH COMPONENTS {
 *         ...,
 *         object-class PRESENT,
 *         entry ABSENT,
 *         destination PRESENT,
 *         reference-qos ABSENT
 *     }),
 *     attributes  [7] SET OF Attribute OPTIONAL,
 *     content     [8] DfrObjectContent OPTIONAL,
 *     COMPONENTS OF CommonArguments(WITH COMPONENTS {..., error-handling ABSENT})
 * }
 * ```
 * 
 * @class
 */
export
class CreateArgument {
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
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: OPTIONAL<Attribute[]>,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: OPTIONAL<DfrObjectContent>,
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
        if (object_class === undefined) {
            throw new _ConstructionError("CreateArgument.object-class shall be present");
        }
        if (entry !== undefined) {
            throw new _ConstructionError("CreateArgument.entry shall be absent");
        }
        if (destination === undefined) {
            throw new _ConstructionError("CreateArgument.destination shall be present");
        }
        if (reference_qos !== undefined) {
            throw new _ConstructionError("CreateArgument.reference-qos shall be absent");
        }
        if (error_handling !== undefined) {
            throw new _ConstructionError("CreateArgument.error-handling shall be absent");
        }
    }

    /**
     * @summary Restructures an object into a CreateArgument
     * @description
     * 
     * This takes an `object` and converts it to a `CreateArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CreateArgument`.
     * @returns {CreateArgument}
     */
    public static _from_object (_o: { [_K in keyof (CreateArgument)]: (CreateArgument)[_K] }): CreateArgument {
        return new CreateArgument(_o.object_class, _o.entry, _o.destination, _o.position, _o.modifications, _o.selection, _o.reference_qos, _o.attributes, _o.content, _o.task_id, _o.reservation, _o.error_handling, _o.priority, _o.privileges);
    }

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
 * @summary The Leading Root Component Types of CreateArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CreateArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("object-class", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("entry", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("destination", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("position", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("modifications", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("selection", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("reference-qos", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("attributes", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("content", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("task-id", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("reservation", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("error-handling", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("privileges", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Trailing Root Component Types of CreateArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CreateArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CreateArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CreateArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CreateArgument: $.ASN1Decoder<CreateArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CreateArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CreateArgument (el: _Element): CreateArgument {
    if (!_cached_decoder_for_CreateArgument) { _cached_decoder_for_CreateArgument = function (el: _Element): CreateArgument {
    let object_class: OPTIONAL<DfrObjectClass>;
    let entry: OPTIONAL<CommonUpdateArguments_entry>;
    let destination: OPTIONAL<DfrEntryName>;
    let position: OPTIONAL<GroupMemberPosition>;
    let modifications: OPTIONAL<EntryModification[]>;
    let selection: OPTIONAL<EntryInformationSelection>;
    let reference_qos: OPTIONAL<Requested_QoS_level>;
    let attributes: OPTIONAL<Attribute[]>;
    let content: OPTIONAL<DfrObjectContent>;
    let task_id: OPTIONAL<TaskId>;
    let reservation: OPTIONAL<Reservation>;
    let error_handling: OPTIONAL<ErrorHandlingMode> = CreateArgument._default_value_for_error_handling;
    let priority: OPTIONAL<Priority> = CreateArgument._default_value_for_priority;
    let privileges: OPTIONAL<Privileges>;
    const callbacks: $.DecodingMap = {
        "object-class": (_el: _Element): void => { object_class = $._decode_implicit<DfrObjectClass>(() => _decode_DfrObjectClass)(_el); },
        "entry": (_el: _Element): void => { entry = $._decode_explicit<CommonUpdateArguments_entry>(() => _decode_CommonUpdateArguments_entry)(_el); },
        "destination": (_el: _Element): void => { destination = $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName)(_el); },
        "position": (_el: _Element): void => { position = $._decode_explicit<GroupMemberPosition>(() => _decode_GroupMemberPosition)(_el); },
        "modifications": (_el: _Element): void => { modifications = $._decode_implicit<EntryModification[]>(() => $._decodeSequenceOf<EntryModification>(() => _decode_EntryModification))(_el); },
        "selection": (_el: _Element): void => { selection = $._decode_implicit<EntryInformationSelection>(() => _decode_EntryInformationSelection)(_el); },
        "reference-qos": (_el: _Element): void => { reference_qos = $._decode_explicit<Requested_QoS_level>(() => _decode_Requested_QoS_level)(_el); },
        "attributes": (_el: _Element): void => { attributes = $._decode_implicit<Attribute[]>(() => $._decodeSetOf<Attribute>(() => _decode_Attribute))(_el); },
        "content": (_el: _Element): void => { content = $._decode_explicit<DfrObjectContent>(() => _decode_DfrObjectContent)(_el); },
        "task-id": (_el: _Element): void => { task_id = $._decode_implicit<TaskId>(() => _decode_TaskId)(_el); },
        "reservation": (_el: _Element): void => { reservation = $._decode_implicit<Reservation>(() => _decode_Reservation)(_el); },
        "error-handling": (_el: _Element): void => { error_handling = $._decode_explicit<ErrorHandlingMode>(() => _decode_ErrorHandlingMode)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<Priority>(() => _decode_Priority)(_el); },
        "privileges": (_el: _Element): void => { privileges = $._decode_implicit<Privileges>(() => _decode_Privileges)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CreateArgument,
        _extension_additions_list_spec_for_CreateArgument,
        _root_component_type_list_2_spec_for_CreateArgument,
        undefined,
    );
    return new CreateArgument(
        object_class,
        entry,
        destination,
        position,
        modifications,
        selection,
        reference_qos,
        attributes,
        content,
        task_id,
        reservation,
        error_handling,
        priority,
        privileges
    );
}; }
    return _cached_decoder_for_CreateArgument(el);
}

let _cached_encoder_for_CreateArgument: $.ASN1Encoder<CreateArgument> | null = null;

/**
 * @summary Encodes a(n) CreateArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateArgument, encoded as an ASN.1 Element.
 */
export
function _encode_CreateArgument (value: CreateArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CreateArgument) { _cached_encoder_for_CreateArgument = function (value: CreateArgument): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.object_class === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_DfrObjectClass, $.BER)(value.object_class, $.BER)),
            /* IF_ABSENT  */ ((value.entry === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_CommonUpdateArguments_entry, $.BER)(value.entry, $.BER)),
            /* IF_ABSENT  */ ((value.destination === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_DfrEntryName, $.BER)(value.destination, $.BER)),
            /* IF_ABSENT  */ ((value.position === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_GroupMemberPosition, $.BER)(value.position, $.BER)),
            /* IF_ABSENT  */ ((value.modifications === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<EntryModification>(() => _encode_EntryModification, $.BER), $.BER)(value.modifications, $.BER)),
            /* IF_ABSENT  */ ((value.selection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_EntryInformationSelection, $.BER)(value.selection, $.BER)),
            /* IF_ABSENT  */ ((value.reference_qos === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_Requested_QoS_level, $.BER)(value.reference_qos, $.BER)),
            /* IF_ABSENT  */ ((value.attributes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeSetOf<Attribute>(() => _encode_Attribute, $.BER), $.BER)(value.attributes, $.BER)),
            /* IF_ABSENT  */ ((value.content === undefined) ? undefined : $._encode_explicit(_TagClass.context, 8, () => _encode_DfrObjectContent, $.BER)(value.content, $.BER)),
            /* IF_ABSENT  */ ((value.task_id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_TaskId, $.BER)(value.task_id, $.BER)),
            /* IF_ABSENT  */ ((value.reservation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_Reservation, $.BER)(value.reservation, $.BER)),
            /* IF_DEFAULT */ (value.error_handling === undefined || $.deepEq(value.error_handling, CreateArgument._default_value_for_error_handling) ? undefined : $._encode_explicit(_TagClass.context, 28, () => _encode_ErrorHandlingMode, $.BER)(value.error_handling, $.BER)),
            /* IF_DEFAULT */ (value.priority === undefined || $.deepEq(value.priority, CreateArgument._default_value_for_priority) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_Priority, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.privileges === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => _encode_Privileges, $.BER)(value.privileges, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CreateArgument(value, elGetter);
}


/* eslint-enable */
