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
import { ProgramInvocationState, ProgramInvocationState_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_unrunnable /* IMPORTED_LONG_NAMED_INTEGER */, unrunnable /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_running /* IMPORTED_LONG_NAMED_INTEGER */, running /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_stopped /* IMPORTED_LONG_NAMED_INTEGER */, stopped /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_starting /* IMPORTED_LONG_NAMED_INTEGER */, starting /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_stopping /* IMPORTED_LONG_NAMED_INTEGER */, stopping /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_resuming /* IMPORTED_LONG_NAMED_INTEGER */, resuming /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_resetting /* IMPORTED_LONG_NAMED_INTEGER */, resetting /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProgramInvocationState, _encode_ProgramInvocationState } from "../MMS-Object-Module-1/ProgramInvocationState.ta.mjs";
// export { ProgramInvocationState, ProgramInvocationState_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_unrunnable /* IMPORTED_LONG_NAMED_INTEGER */, unrunnable /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_running /* IMPORTED_LONG_NAMED_INTEGER */, running /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_stopped /* IMPORTED_LONG_NAMED_INTEGER */, stopped /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_starting /* IMPORTED_LONG_NAMED_INTEGER */, starting /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_stopping /* IMPORTED_LONG_NAMED_INTEGER */, stopping /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_resuming /* IMPORTED_LONG_NAMED_INTEGER */, resuming /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_resetting /* IMPORTED_LONG_NAMED_INTEGER */, resetting /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProgramInvocationState, _encode_ProgramInvocationState } from "../MMS-Object-Module-1/ProgramInvocationState.ta.mjs";
import { Domain_instance, _decode_Domain_instance, _encode_Domain_instance } from "../MMS-SCI-Module-1/Domain-instance.ta.mjs";
// export { Domain_instance, _decode_Domain_instance, _encode_Domain_instance } from "../MMS-SCI-Module-1/Domain-instance.ta.mjs";
import { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
// export { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
import { Event_Condition_instance, _decode_Event_Condition_instance, _encode_Event_Condition_instance } from "../MMS-SCI-Module-1/Event-Condition-instance.ta.mjs";
// export { Event_Condition_instance, _decode_Event_Condition_instance, _encode_Event_Condition_instance } from "../MMS-SCI-Module-1/Event-Condition-instance.ta.mjs";
import { Event_Action_instance, _decode_Event_Action_instance, _encode_Event_Action_instance } from "../MMS-SCI-Module-1/Event-Action-instance.ta.mjs";
// export { Event_Action_instance, _decode_Event_Action_instance, _encode_Event_Action_instance } from "../MMS-SCI-Module-1/Event-Action-instance.ta.mjs";
import { Event_Enrollment_instance, _decode_Event_Enrollment_instance, _encode_Event_Enrollment_instance } from "../MMS-SCI-Module-1/Event-Enrollment-instance.ta.mjs";
// export { Event_Enrollment_instance, _decode_Event_Enrollment_instance, _encode_Event_Enrollment_instance } from "../MMS-SCI-Module-1/Event-Enrollment-instance.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
import { Control_State, Control_State_normal /* IMPORTED_LONG_NAMED_INTEGER */, normal /* IMPORTED_SHORT_NAMED_INTEGER */, Control_State_controlling /* IMPORTED_LONG_NAMED_INTEGER */, controlling /* IMPORTED_SHORT_NAMED_INTEGER */, Control_State_controlled /* IMPORTED_LONG_NAMED_INTEGER */, controlled /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Control_State, _encode_Control_State } from "../MMS-Object-Module-1/Control-State.ta.mjs";
// export { Control_State, Control_State_normal /* IMPORTED_LONG_NAMED_INTEGER */, normal /* IMPORTED_SHORT_NAMED_INTEGER */, Control_State_controlling /* IMPORTED_LONG_NAMED_INTEGER */, controlling /* IMPORTED_SHORT_NAMED_INTEGER */, Control_State_controlled /* IMPORTED_LONG_NAMED_INTEGER */, controlled /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Control_State, _encode_Control_State } from "../MMS-Object-Module-1/Control-State.ta.mjs";
import { Program_Invocation_instance, _decode_Program_Invocation_instance, _encode_Program_Invocation_instance } from "../MMS-SCI-Module-1/Program-Invocation-instance.ta.mjs";
// export { Program_Invocation_instance, _decode_Program_Invocation_instance, _encode_Program_Invocation_instance } from "../MMS-SCI-Module-1/Program-Invocation-instance.ta.mjs";


/**
 * @summary Program_Invocation_instance_definition_details
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Program-Invocation-instance-definition-details ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Program_Invocation_instance_definition_details {
    constructor (
        /**
         * @summary `programInvocationState`.
         * @public
         * @readonly
         */
        readonly programInvocationState: ProgramInvocationState,
        /**
         * @summary `domains`.
         * @public
         * @readonly
         */
        readonly domains: Domain_instance[],
        /**
         * @summary `accessControl`.
         * @public
         * @readonly
         */
        readonly accessControl: Access_Control_List_instance[],
        /**
         * @summary `reusable`.
         * @public
         * @readonly
         */
        readonly reusable: BOOLEAN,
        /**
         * @summary `monitor`.
         * @public
         * @readonly
         */
        readonly monitor: BOOLEAN,
        /**
         * @summary `eventCondition`.
         * @public
         * @readonly
         */
        readonly eventCondition: OPTIONAL<Event_Condition_instance[]>,
        /**
         * @summary `eventAction`.
         * @public
         * @readonly
         */
        readonly eventAction: OPTIONAL<Event_Action_instance[]>,
        /**
         * @summary `eventEnrollment`.
         * @public
         * @readonly
         */
        readonly eventEnrollment: OPTIONAL<Event_Enrollment_instance[]>,
        /**
         * @summary `executionArgument`.
         * @public
         * @readonly
         */
        readonly executionArgument: MMSString,
        /**
         * @summary `control`.
         * @public
         * @readonly
         */
        readonly control: Control_State,
        /**
         * @summary `controlling_Program_Invocation`.
         * @public
         * @readonly
         */
        readonly controlling_Program_Invocation: Program_Invocation_instance,
        /**
         * @summary `controlled_Program_Invocations`.
         * @public
         * @readonly
         */
        readonly controlled_Program_Invocations: OPTIONAL<Program_Invocation_instance[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Program_Invocation_instance_definition_details
     * @description
     * 
     * This takes an `object` and converts it to a `Program_Invocation_instance_definition_details`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Program_Invocation_instance_definition_details`.
     * @returns {Program_Invocation_instance_definition_details}
     */
    public static _from_object (_o: { [_K in keyof (Program_Invocation_instance_definition_details)]: (Program_Invocation_instance_definition_details)[_K] }): Program_Invocation_instance_definition_details {
        return new Program_Invocation_instance_definition_details(_o.programInvocationState, _o.domains, _o.accessControl, _o.reusable, _o.monitor, _o.eventCondition, _o.eventAction, _o.eventEnrollment, _o.executionArgument, _o.control, _o.controlling_Program_Invocation, _o.controlled_Program_Invocations, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Program_Invocation_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Program_Invocation_instance_definition_details: $.ComponentSpec[] = [
    new $.ComponentSpec("programInvocationState", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("domains", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("accessControl", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("reusable", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("monitor", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("eventCondition", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("eventAction", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("eventEnrollment", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("executionArgument", false, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of Program_Invocation_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Program_Invocation_instance_definition_details: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Program_Invocation_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Program_Invocation_instance_definition_details: $.ComponentSpec[] = [
    new $.ComponentSpec("control", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("controlling-Program-Invocation", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("controlled-Program-Invocations", true, $.hasTag(_TagClass.context, 14))
];

let _cached_decoder_for_Program_Invocation_instance_definition_details: $.ASN1Decoder<Program_Invocation_instance_definition_details> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Program_Invocation_instance_definition_details
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Program_Invocation_instance_definition_details (el: _Element): Program_Invocation_instance_definition_details {
    if (!_cached_decoder_for_Program_Invocation_instance_definition_details) { _cached_decoder_for_Program_Invocation_instance_definition_details = function (el: _Element): Program_Invocation_instance_definition_details {
    let programInvocationState!: ProgramInvocationState;
    let domains!: Domain_instance[];
    let accessControl!: Access_Control_List_instance[];
    let reusable!: BOOLEAN;
    let monitor!: BOOLEAN;
    let eventCondition: OPTIONAL<Event_Condition_instance[]>;
    let eventAction: OPTIONAL<Event_Action_instance[]>;
    let eventEnrollment: OPTIONAL<Event_Enrollment_instance[]>;
    let executionArgument!: MMSString;
    let control!: Control_State;
    let controlling_Program_Invocation!: Program_Invocation_instance;
    let controlled_Program_Invocations: OPTIONAL<Program_Invocation_instance[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "programInvocationState": (_el: _Element): void => { programInvocationState = $._decode_implicit<ProgramInvocationState>(() => _decode_ProgramInvocationState)(_el); },
        "domains": (_el: _Element): void => { domains = $._decode_implicit<Domain_instance[]>(() => $._decodeSequenceOf<Domain_instance>(() => _decode_Domain_instance))(_el); },
        "accessControl": (_el: _Element): void => { accessControl = $._decode_implicit<Access_Control_List_instance[]>(() => $._decodeSequenceOf<Access_Control_List_instance>(() => _decode_Access_Control_List_instance))(_el); },
        "reusable": (_el: _Element): void => { reusable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "monitor": (_el: _Element): void => { monitor = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "eventCondition": (_el: _Element): void => { eventCondition = $._decode_implicit<Event_Condition_instance[]>(() => $._decodeSequenceOf<Event_Condition_instance>(() => _decode_Event_Condition_instance))(_el); },
        "eventAction": (_el: _Element): void => { eventAction = $._decode_implicit<Event_Action_instance[]>(() => $._decodeSequenceOf<Event_Action_instance>(() => _decode_Event_Action_instance))(_el); },
        "eventEnrollment": (_el: _Element): void => { eventEnrollment = $._decode_implicit<Event_Enrollment_instance[]>(() => $._decodeSequenceOf<Event_Enrollment_instance>(() => _decode_Event_Enrollment_instance))(_el); },
        "executionArgument": (_el: _Element): void => { executionArgument = $._decode_explicit<MMSString>(() => _decode_MMSString)(_el); },
        "control": (_el: _Element): void => { control = $._decode_implicit<Control_State>(() => _decode_Control_State)(_el); },
        "controlling-Program-Invocation": (_el: _Element): void => { controlling_Program_Invocation = $._decode_implicit<Program_Invocation_instance>(() => _decode_Program_Invocation_instance)(_el); },
        "controlled-Program-Invocations": (_el: _Element): void => { controlled_Program_Invocations = $._decode_implicit<Program_Invocation_instance[]>(() => $._decodeSequenceOf<Program_Invocation_instance>(() => _decode_Program_Invocation_instance))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Program_Invocation_instance_definition_details,
        _extension_additions_list_spec_for_Program_Invocation_instance_definition_details,
        _root_component_type_list_2_spec_for_Program_Invocation_instance_definition_details,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Program_Invocation_instance_definition_details(
        programInvocationState,
        domains,
        accessControl,
        reusable,
        monitor,
        eventCondition,
        eventAction,
        eventEnrollment,
        executionArgument,
        control,
        controlling_Program_Invocation,
        controlled_Program_Invocations,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Program_Invocation_instance_definition_details(el);
}

let _cached_encoder_for_Program_Invocation_instance_definition_details: $.ASN1Encoder<Program_Invocation_instance_definition_details> | null = null;

/**
 * @summary Encodes a(n) Program_Invocation_instance_definition_details into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Program_Invocation_instance_definition_details, encoded as an ASN.1 Element.
 */
export
function _encode_Program_Invocation_instance_definition_details (value: Program_Invocation_instance_definition_details, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Program_Invocation_instance_definition_details) { _cached_encoder_for_Program_Invocation_instance_definition_details = function (value: Program_Invocation_instance_definition_details, elGetter: $.ASN1Encoder<Program_Invocation_instance_definition_details>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_ProgramInvocationState, $.BER)(value.programInvocationState, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<Domain_instance>(() => _encode_Domain_instance, $.BER), $.BER)(value.domains, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<Access_Control_List_instance>(() => _encode_Access_Control_List_instance, $.BER), $.BER)(value.accessControl, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.reusable, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.monitor, $.BER),
            /* IF_ABSENT  */ ((value.eventCondition === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<Event_Condition_instance>(() => _encode_Event_Condition_instance, $.BER), $.BER)(value.eventCondition, $.BER)),
            /* IF_ABSENT  */ ((value.eventAction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<Event_Action_instance>(() => _encode_Event_Action_instance, $.BER), $.BER)(value.eventAction, $.BER)),
            /* IF_ABSENT  */ ((value.eventEnrollment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<Event_Enrollment_instance>(() => _encode_Event_Enrollment_instance, $.BER), $.BER)(value.eventEnrollment, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 11, () => _encode_MMSString, $.BER)(value.executionArgument, $.BER)
        ],
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => _encode_Control_State, $.BER)(value.control, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => _encode_Program_Invocation_instance, $.BER)(value.controlling_Program_Invocation, $.BER),
            /* IF_ABSENT  */ ((value.controlled_Program_Invocations === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeSequenceOf<Program_Invocation_instance>(() => _encode_Program_Invocation_instance, $.BER), $.BER)(value.controlled_Program_Invocations, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Program_Invocation_instance_definition_details(value, elGetter);
}


/* eslint-enable */
