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
import { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
// export { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
import { EC_Class, EC_Class_network_triggered /* IMPORTED_LONG_NAMED_INTEGER */, network_triggered /* IMPORTED_SHORT_NAMED_INTEGER */, EC_Class_monitored /* IMPORTED_LONG_NAMED_INTEGER */, monitored /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_Class, _encode_EC_Class } from "../MMS-Object-Module-1/EC-Class.ta.mjs";
// export { EC_Class, EC_Class_network_triggered /* IMPORTED_LONG_NAMED_INTEGER */, network_triggered /* IMPORTED_SHORT_NAMED_INTEGER */, EC_Class_monitored /* IMPORTED_LONG_NAMED_INTEGER */, monitored /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_Class, _encode_EC_Class } from "../MMS-Object-Module-1/EC-Class.ta.mjs";
import { EC_State, EC_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
// export { EC_State, EC_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
import { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
import { Severity, _decode_Severity, _encode_Severity } from "../MMS-Object-Module-1/Severity.ta.mjs";
// export { Severity, _decode_Severity, _encode_Severity } from "../MMS-Object-Module-1/Severity.ta.mjs";
import { Event_Enrollment_instance, _decode_Event_Enrollment_instance, _encode_Event_Enrollment_instance } from "../MMS-SCI-Module-1/Event-Enrollment-instance.ta.mjs";
// export { Event_Enrollment_instance, _decode_Event_Enrollment_instance, _encode_Event_Enrollment_instance } from "../MMS-SCI-Module-1/Event-Enrollment-instance.ta.mjs";
import { Event_Condition_instance_definition_details_monitoredVariable, _decode_Event_Condition_instance_definition_details_monitoredVariable, _encode_Event_Condition_instance_definition_details_monitoredVariable } from "../MMS-SCI-Module-1/Event-Condition-instance-definition-details-monitoredVariable.ta.mjs";
// export { Event_Condition_instance_definition_details_monitoredVariable, _decode_Event_Condition_instance_definition_details_monitoredVariable, _encode_Event_Condition_instance_definition_details_monitoredVariable } from "../MMS-SCI-Module-1/Event-Condition-instance-definition-details-monitoredVariable.ta.mjs";
import { Event_Condition_instance_definition_details_displayEnhancement, _decode_Event_Condition_instance_definition_details_displayEnhancement, _encode_Event_Condition_instance_definition_details_displayEnhancement } from "../MMS-SCI-Module-1/Event-Condition-instance-definition-details-displayEnhancement.ta.mjs";
// export { Event_Condition_instance_definition_details_displayEnhancement, _decode_Event_Condition_instance_definition_details_displayEnhancement, _encode_Event_Condition_instance_definition_details_displayEnhancement } from "../MMS-SCI-Module-1/Event-Condition-instance-definition-details-displayEnhancement.ta.mjs";
import { Event_Condition_instance_definition_details_group_Priority_Override, _decode_Event_Condition_instance_definition_details_group_Priority_Override, _encode_Event_Condition_instance_definition_details_group_Priority_Override } from "../MMS-SCI-Module-1/Event-Condition-instance-definition-details-group-Priority-Override.ta.mjs";
// export { Event_Condition_instance_definition_details_group_Priority_Override, _decode_Event_Condition_instance_definition_details_group_Priority_Override, _encode_Event_Condition_instance_definition_details_group_Priority_Override } from "../MMS-SCI-Module-1/Event-Condition-instance-definition-details-group-Priority-Override.ta.mjs";
import { Event_Condition_List_instance, _decode_Event_Condition_List_instance, _encode_Event_Condition_List_instance } from "../MMS-SCI-Module-1/Event-Condition-List-instance.ta.mjs";
// export { Event_Condition_List_instance, _decode_Event_Condition_List_instance, _encode_Event_Condition_List_instance } from "../MMS-SCI-Module-1/Event-Condition-List-instance.ta.mjs";


/**
 * @summary Event_Condition_instance_definition_details
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Event-Condition-instance-definition-details ::= SEQUENCE {
 *     accessControl [3] IMPLICIT Access-Control-List-instance,
 *     ecClass [4] IMPLICIT EC-Class,
 *     ecState [5] IMPLICIT EC-State,
 *     priority [6] IMPLICIT Priority,
 *     severity [7] IMPLICIT Severity,
 *     eventEnrollments [8] IMPLICIT SEQUENCE OF Event-Enrollment-instance,
 *     -- The following fields shall be present
 *     -- if and only if the value of &ecClass is monitored.
 *     enabled [9] IMPLICIT BOOLEAN OPTIONAL,
 *     alarmSummaryReports [10] IMPLICIT BOOLEAN OPTIONAL,
 *     monitoredVariable CHOICE {
 *         named [11] IMPLICIT Named-Variable-instance,
 *         unnamed [12] IMPLICIT Unnamed-Variable-instance,
 *         unspecified [13] IMPLICIT NULL
 *     } OPTIONAL,
 *     evaluationInterval [14] IMPLICIT INTEGER OPTIONAL,
 *     ...,
 *     displayEnhancement CHOICE {
 *         text [15] MMSString,
 *         number [16] IMPLICIT INTEGER,
 *         none [17] IMPLICIT NULL
 *     },
 *     group-Priority-Override CHOICE {
 *         priority [18] IMPLICIT Priority,
 *         undefined [19] IMPLICIT NULL
 *     } OPTIONAL,
 *     referencingEventConditionLists [20] IMPLICIT SEQUENCE OF Event-Condition-List-instance
 * }
 * ```
 * 
 * @class
 */
export
class Event_Condition_instance_definition_details {
    constructor (
        /**
         * @summary `accessControl`.
         * @public
         * @readonly
         */
        readonly accessControl: Access_Control_List_instance,
        /**
         * @summary `ecClass`.
         * @public
         * @readonly
         */
        readonly ecClass: EC_Class,
        /**
         * @summary `ecState`.
         * @public
         * @readonly
         */
        readonly ecState: EC_State,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: Priority,
        /**
         * @summary `severity`.
         * @public
         * @readonly
         */
        readonly severity: Severity,
        /**
         * @summary `eventEnrollments`.
         * @public
         * @readonly
         */
        readonly eventEnrollments: Event_Enrollment_instance[],
        /**
         * @summary `enabled`.
         * @public
         * @readonly
         */
        readonly enabled: OPTIONAL<BOOLEAN>,
        /**
         * @summary `alarmSummaryReports`.
         * @public
         * @readonly
         */
        readonly alarmSummaryReports: OPTIONAL<BOOLEAN>,
        /**
         * @summary `monitoredVariable`.
         * @public
         * @readonly
         */
        readonly monitoredVariable: OPTIONAL<Event_Condition_instance_definition_details_monitoredVariable>,
        /**
         * @summary `evaluationInterval`.
         * @public
         * @readonly
         */
        readonly evaluationInterval: OPTIONAL<INTEGER>,
        /**
         * @summary `displayEnhancement`.
         * @public
         * @readonly
         */
        readonly displayEnhancement: Event_Condition_instance_definition_details_displayEnhancement,
        /**
         * @summary `group_Priority_Override`.
         * @public
         * @readonly
         */
        readonly group_Priority_Override: OPTIONAL<Event_Condition_instance_definition_details_group_Priority_Override>,
        /**
         * @summary `referencingEventConditionLists`.
         * @public
         * @readonly
         */
        readonly referencingEventConditionLists: Event_Condition_List_instance[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Event_Condition_instance_definition_details
     * @description
     * 
     * This takes an `object` and converts it to a `Event_Condition_instance_definition_details`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Event_Condition_instance_definition_details`.
     * @returns {Event_Condition_instance_definition_details}
     */
    public static _from_object (_o: { [_K in keyof (Event_Condition_instance_definition_details)]: (Event_Condition_instance_definition_details)[_K] }): Event_Condition_instance_definition_details {
        return new Event_Condition_instance_definition_details(_o.accessControl, _o.ecClass, _o.ecState, _o.priority, _o.severity, _o.eventEnrollments, _o.enabled, _o.alarmSummaryReports, _o.monitoredVariable, _o.evaluationInterval, _o.displayEnhancement, _o.group_Priority_Override, _o.referencingEventConditionLists, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Event_Condition_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Event_Condition_instance_definition_details: $.ComponentSpec[] = [
    new $.ComponentSpec("accessControl", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("ecClass", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("ecState", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("priority", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("severity", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("eventEnrollments", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("enabled", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("alarmSummaryReports", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("monitoredVariable", true, $.or($.hasTag(_TagClass.context, 11), $.hasTag(_TagClass.context, 12), $.hasTag(_TagClass.context, 13))),
    new $.ComponentSpec("evaluationInterval", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of Event_Condition_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Event_Condition_instance_definition_details: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Event_Condition_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Event_Condition_instance_definition_details: $.ComponentSpec[] = [
    new $.ComponentSpec("displayEnhancement", false, $.hasAnyTag),
    new $.ComponentSpec("group-Priority-Override", true, $.or($.hasTag(_TagClass.context, 18), $.hasTag(_TagClass.context, 19))),
    new $.ComponentSpec("referencingEventConditionLists", false, $.hasTag(_TagClass.context, 20))
];

let _cached_decoder_for_Event_Condition_instance_definition_details: $.ASN1Decoder<Event_Condition_instance_definition_details> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Event_Condition_instance_definition_details
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Event_Condition_instance_definition_details (el: _Element): Event_Condition_instance_definition_details {
    if (!_cached_decoder_for_Event_Condition_instance_definition_details) { _cached_decoder_for_Event_Condition_instance_definition_details = function (el: _Element): Event_Condition_instance_definition_details {
    let accessControl!: Access_Control_List_instance;
    let ecClass!: EC_Class;
    let ecState!: EC_State;
    let priority!: Priority;
    let severity!: Severity;
    let eventEnrollments!: Event_Enrollment_instance[];
    let enabled: OPTIONAL<BOOLEAN>;
    let alarmSummaryReports: OPTIONAL<BOOLEAN>;
    let monitoredVariable: OPTIONAL<Event_Condition_instance_definition_details_monitoredVariable>;
    let evaluationInterval: OPTIONAL<INTEGER>;
    let displayEnhancement!: Event_Condition_instance_definition_details_displayEnhancement;
    let group_Priority_Override: OPTIONAL<Event_Condition_instance_definition_details_group_Priority_Override>;
    let referencingEventConditionLists!: Event_Condition_List_instance[];
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "accessControl": (_el: _Element): void => { accessControl = $._decode_implicit<Access_Control_List_instance>(() => _decode_Access_Control_List_instance)(_el); },
        "ecClass": (_el: _Element): void => { ecClass = $._decode_implicit<EC_Class>(() => _decode_EC_Class)(_el); },
        "ecState": (_el: _Element): void => { ecState = $._decode_implicit<EC_State>(() => _decode_EC_State)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<Priority>(() => _decode_Priority)(_el); },
        "severity": (_el: _Element): void => { severity = $._decode_implicit<Severity>(() => _decode_Severity)(_el); },
        "eventEnrollments": (_el: _Element): void => { eventEnrollments = $._decode_implicit<Event_Enrollment_instance[]>(() => $._decodeSequenceOf<Event_Enrollment_instance>(() => _decode_Event_Enrollment_instance))(_el); },
        "enabled": (_el: _Element): void => { enabled = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "alarmSummaryReports": (_el: _Element): void => { alarmSummaryReports = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "monitoredVariable": (_el: _Element): void => { monitoredVariable = _decode_Event_Condition_instance_definition_details_monitoredVariable(_el); },
        "evaluationInterval": (_el: _Element): void => { evaluationInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "displayEnhancement": (_el: _Element): void => { displayEnhancement = _decode_Event_Condition_instance_definition_details_displayEnhancement(_el); },
        "group-Priority-Override": (_el: _Element): void => { group_Priority_Override = _decode_Event_Condition_instance_definition_details_group_Priority_Override(_el); },
        "referencingEventConditionLists": (_el: _Element): void => { referencingEventConditionLists = $._decode_implicit<Event_Condition_List_instance[]>(() => $._decodeSequenceOf<Event_Condition_List_instance>(() => _decode_Event_Condition_List_instance))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Event_Condition_instance_definition_details,
        _extension_additions_list_spec_for_Event_Condition_instance_definition_details,
        _root_component_type_list_2_spec_for_Event_Condition_instance_definition_details,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Event_Condition_instance_definition_details(
        accessControl,
        ecClass,
        ecState,
        priority,
        severity,
        eventEnrollments,
        enabled,
        alarmSummaryReports,
        monitoredVariable,
        evaluationInterval,
        displayEnhancement,
        group_Priority_Override,
        referencingEventConditionLists,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Event_Condition_instance_definition_details(el);
}

let _cached_encoder_for_Event_Condition_instance_definition_details: $.ASN1Encoder<Event_Condition_instance_definition_details> | null = null;

/**
 * @summary Encodes a(n) Event_Condition_instance_definition_details into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Event_Condition_instance_definition_details, encoded as an ASN.1 Element.
 */
export
function _encode_Event_Condition_instance_definition_details (value: Event_Condition_instance_definition_details, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Event_Condition_instance_definition_details) { _cached_encoder_for_Event_Condition_instance_definition_details = function (value: Event_Condition_instance_definition_details, elGetter: $.ASN1Encoder<Event_Condition_instance_definition_details>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Access_Control_List_instance, $.BER)(value.accessControl, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_EC_Class, $.BER)(value.ecClass, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_EC_State, $.BER)(value.ecState, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_Priority, $.BER)(value.priority, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_Severity, $.BER)(value.severity, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<Event_Enrollment_instance>(() => _encode_Event_Enrollment_instance, $.BER), $.BER)(value.eventEnrollments, $.BER),
            /* IF_ABSENT  */ ((value.enabled === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.enabled, $.BER)),
            /* IF_ABSENT  */ ((value.alarmSummaryReports === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeBoolean, $.BER)(value.alarmSummaryReports, $.BER)),
            /* IF_ABSENT  */ ((value.monitoredVariable === undefined) ? undefined : _encode_Event_Condition_instance_definition_details_monitoredVariable(value.monitoredVariable, $.BER)),
            /* IF_ABSENT  */ ((value.evaluationInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.evaluationInterval, $.BER))
        ],
        [
            /* REQUIRED   */ _encode_Event_Condition_instance_definition_details_displayEnhancement(value.displayEnhancement, $.BER),
            /* IF_ABSENT  */ ((value.group_Priority_Override === undefined) ? undefined : _encode_Event_Condition_instance_definition_details_group_Priority_Override(value.group_Priority_Override, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 20, () => $._encodeSequenceOf<Event_Condition_List_instance>(() => _encode_Event_Condition_List_instance, $.BER), $.BER)(value.referencingEventConditionLists, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Event_Condition_instance_definition_details(value, elGetter);
}


/* eslint-enable */
