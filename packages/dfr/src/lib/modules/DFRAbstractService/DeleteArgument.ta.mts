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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
// export { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
import { CommonArguments, _decode_CommonArguments, _encode_CommonArguments } from "../DFRAbstractService/CommonArguments.ta.mjs";
// export { CommonArguments, _decode_CommonArguments, _encode_CommonArguments } from "../DFRAbstractService/CommonArguments.ta.mjs";
import { TaskId, _decode_TaskId, _encode_TaskId } from "../DFRAbstractService/TaskId.ta.mjs";
// export { TaskId, _decode_TaskId, _encode_TaskId } from "../DFRAbstractService/TaskId.ta.mjs";
import { Reservation, _decode_Reservation, _encode_Reservation } from "../DFRAbstractService/Reservation.ta.mjs";
// export { Reservation, _decode_Reservation, _encode_Reservation } from "../DFRAbstractService/Reservation.ta.mjs";
import { ErrorHandlingMode, _decode_ErrorHandlingMode, _encode_ErrorHandlingMode } from "../DFRAbstractService/ErrorHandlingMode.ta.mjs";
// export { ErrorHandlingMode, _decode_ErrorHandlingMode, _encode_ErrorHandlingMode } from "../DFRAbstractService/ErrorHandlingMode.ta.mjs";
import { Priority, _enum_for_Priority, Priority_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_medium /* IMPORTED_LONG_ENUMERATION_ITEM */, medium /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_high /* IMPORTED_LONG_ENUMERATION_ITEM */, high /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Priority, _encode_Priority } from "../DFRAbstractService/Priority.ta.mjs";
// export { Priority, _enum_for_Priority, Priority_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_medium /* IMPORTED_LONG_ENUMERATION_ITEM */, medium /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_high /* IMPORTED_LONG_ENUMERATION_ITEM */, high /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Priority, _encode_Priority } from "../DFRAbstractService/Priority.ta.mjs";
import { Privileges, _decode_Privileges, _encode_Privileges } from "../DFRAbstractService/Privileges.ta.mjs";
// export { Privileges, _decode_Privileges, _encode_Privileges } from "../DFRAbstractService/Privileges.ta.mjs";


/**
 * @summary DeleteArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteArgument ::= SEQUENCE {
 *     entry  [0] DfrEntryName,
 *     COMPONENTS OF CommonArguments (WITH COMPONENTS {
 *         ...,
 *         reservation ABSENT,
 *         error-handling ABSENT
 *     })
 * }
 * ```
 * 
 * @class
 */
export
class DeleteArgument {
    constructor (
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: DfrEntryName,
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
    ) {}

    /**
     * @summary Restructures an object into a DeleteArgument
     * @description
     * 
     * This takes an `object` and converts it to a `DeleteArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteArgument`.
     * @returns {DeleteArgument}
     */
    public static _from_object (_o: { [_K in keyof (DeleteArgument)]: (DeleteArgument)[_K] }): DeleteArgument {
        return new DeleteArgument(_o.entry, _o.task_id, _o.reservation, _o.error_handling, _o.priority, _o.privileges);
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
         * @summary The enum used as the type of the component `priority`
         * @public
         * @static
         */

    public static _enum_for_priority = _enum_for_Priority;
}

/**
 * @summary The Leading Root Component Types of DeleteArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeleteArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("entry", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("task-id", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("reservation", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("error-handling", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("privileges", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Trailing Root Component Types of DeleteArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeleteArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeleteArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeleteArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeleteArgument: $.ASN1Decoder<DeleteArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteArgument (el: _Element): DeleteArgument {
    if (!_cached_decoder_for_DeleteArgument) { _cached_decoder_for_DeleteArgument = function (el: _Element): DeleteArgument {
    let entry!: DfrEntryName;
    let task_id: OPTIONAL<TaskId>;
    let reservation: OPTIONAL<Reservation>;
    let error_handling: OPTIONAL<ErrorHandlingMode> = DeleteArgument._default_value_for_error_handling;
    let priority: OPTIONAL<Priority> = DeleteArgument._default_value_for_priority;
    let privileges: OPTIONAL<Privileges>;
    const callbacks: $.DecodingMap = {
        "entry": (_el: _Element): void => { entry = $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName)(_el); },
        "task-id": (_el: _Element): void => { task_id = $._decode_implicit<TaskId>(() => _decode_TaskId)(_el); },
        "reservation": (_el: _Element): void => { reservation = $._decode_implicit<Reservation>(() => _decode_Reservation)(_el); },
        "error-handling": (_el: _Element): void => { error_handling = $._decode_explicit<ErrorHandlingMode>(() => _decode_ErrorHandlingMode)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<Priority>(() => _decode_Priority)(_el); },
        "privileges": (_el: _Element): void => { privileges = $._decode_implicit<Privileges>(() => _decode_Privileges)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeleteArgument,
        _extension_additions_list_spec_for_DeleteArgument,
        _root_component_type_list_2_spec_for_DeleteArgument,
        undefined,
    );
    return new DeleteArgument(
        entry,
        task_id,
        reservation,
        error_handling,
        priority,
        privileges
    );
}; }
    return _cached_decoder_for_DeleteArgument(el);
}

let _cached_encoder_for_DeleteArgument: $.ASN1Encoder<DeleteArgument> | null = null;

/**
 * @summary Encodes a(n) DeleteArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteArgument, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteArgument (value: DeleteArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteArgument) { _cached_encoder_for_DeleteArgument = function (value: DeleteArgument, elGetter: $.ASN1Encoder<DeleteArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_DfrEntryName, $.BER)(value.entry, $.BER),
            /* IF_ABSENT  */ ((value.task_id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_TaskId, $.BER)(value.task_id, $.BER)),
            /* IF_ABSENT  */ ((value.reservation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_Reservation, $.BER)(value.reservation, $.BER)),
            /* IF_DEFAULT */ (value.error_handling === undefined || $.deepEq(value.error_handling, DeleteArgument._default_value_for_error_handling) ? undefined : $._encode_explicit(_TagClass.context, 28, () => _encode_ErrorHandlingMode, $.BER)(value.error_handling, $.BER)),
            /* IF_DEFAULT */ (value.priority === undefined || $.deepEq(value.priority, DeleteArgument._default_value_for_priority) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_Priority, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.privileges === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => _encode_Privileges, $.BER)(value.privileges, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeleteArgument(value, elGetter);
}


/* eslint-enable */
