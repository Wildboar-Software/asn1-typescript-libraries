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
import { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
// export { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
import { EE_Class, _decode_EE_Class, _encode_EE_Class } from "../MMS-Object-Module-1/EE-Class.ta.mjs";
// export { EE_Class, EE_Class_modifier /* IMPORTED_LONG_NAMED_INTEGER */, modifier /* IMPORTED_SHORT_NAMED_INTEGER */, EE_Class_notification /* IMPORTED_LONG_NAMED_INTEGER */, notification /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EE_Class, _encode_EE_Class } from "../MMS-Object-Module-1/EE-Class.ta.mjs";
import { Event_Condition_instance, _decode_Event_Condition_instance, _encode_Event_Condition_instance } from "../MMS-SCI-Module-1/Event-Condition-instance.ta.mjs";
// export { Event_Condition_instance, _decode_Event_Condition_instance, _encode_Event_Condition_instance } from "../MMS-SCI-Module-1/Event-Condition-instance.ta.mjs";
import { Transitions, _decode_Transitions, _encode_Transitions } from "../MMS-Object-Module-1/Transitions.ta.mjs";
// export { Transitions, Transitions_idle_to_disabled /* IMPORTED_LONG_NAMED_BIT */, idle_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_disabled /* IMPORTED_LONG_NAMED_BIT */, active_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_idle /* IMPORTED_LONG_NAMED_BIT */, disabled_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_idle /* IMPORTED_LONG_NAMED_BIT */, active_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_active /* IMPORTED_LONG_NAMED_BIT */, disabled_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_idle_to_active /* IMPORTED_LONG_NAMED_BIT */, idle_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_any_to_deleted /* IMPORTED_LONG_NAMED_BIT */, any_to_deleted /* IMPORTED_SHORT_NAMED_BIT */, _decode_Transitions, _encode_Transitions } from "../MMS-Object-Module-1/Transitions.ta.mjs";
import { Event_Enrollment_instance_definition_details_remainingDelay, _decode_Event_Enrollment_instance_definition_details_remainingDelay, _encode_Event_Enrollment_instance_definition_details_remainingDelay } from "../MMS-SCI-Module-1/Event-Enrollment-instance-definition-details-remainingDelay.ta.mjs";
// export { Event_Enrollment_instance_definition_details_remainingDelay, _decode_Event_Enrollment_instance_definition_details_remainingDelay, _encode_Event_Enrollment_instance_definition_details_remainingDelay } from "../MMS-SCI-Module-1/Event-Enrollment-instance-definition-details-remainingDelay.ta.mjs";
import { Event_Action_instance, _decode_Event_Action_instance, _encode_Event_Action_instance } from "../MMS-SCI-Module-1/Event-Action-instance.ta.mjs";
// export { Event_Action_instance, _decode_Event_Action_instance, _encode_Event_Action_instance } from "../MMS-SCI-Module-1/Event-Action-instance.ta.mjs";
import { EE_Duration, _decode_EE_Duration, _encode_EE_Duration } from "../MMS-Object-Module-1/EE-Duration.ta.mjs";
// export { EE_Duration, EE_Duration_current /* IMPORTED_LONG_NAMED_INTEGER */, current /* IMPORTED_SHORT_NAMED_INTEGER */, EE_Duration_permanent /* IMPORTED_LONG_NAMED_INTEGER */, permanent /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EE_Duration, _encode_EE_Duration } from "../MMS-Object-Module-1/EE-Duration.ta.mjs";
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
// export { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
import { AlarmAckRule, _decode_AlarmAckRule, _encode_AlarmAckRule } from "../MMS-Object-Module-1/AlarmAckRule.ta.mjs";
// export { AlarmAckRule, AlarmAckRule_none /* IMPORTED_LONG_NAMED_INTEGER */, none /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_simple /* IMPORTED_LONG_NAMED_INTEGER */, simple /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_ack_active /* IMPORTED_LONG_NAMED_INTEGER */, ack_active /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_ack_all /* IMPORTED_LONG_NAMED_INTEGER */, ack_all /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AlarmAckRule, _encode_AlarmAckRule } from "../MMS-Object-Module-1/AlarmAckRule.ta.mjs";
import { Event_Enrollment_instance_definition_details_displayEnhancement, _decode_Event_Enrollment_instance_definition_details_displayEnhancement, _encode_Event_Enrollment_instance_definition_details_displayEnhancement } from "../MMS-SCI-Module-1/Event-Enrollment-instance-definition-details-displayEnhancement.ta.mjs";
// export { Event_Enrollment_instance_definition_details_displayEnhancement, _decode_Event_Enrollment_instance_definition_details_displayEnhancement, _encode_Event_Enrollment_instance_definition_details_displayEnhancement } from "../MMS-SCI-Module-1/Event-Enrollment-instance-definition-details-displayEnhancement.ta.mjs";


/**
 * @summary Event_Enrollment_instance_definition_details
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Event-Enrollment-instance-definition-details ::= SEQUENCE {
 *     accessControl [3] IMPLICIT Access-Control-List-instance,
 *     eeClass [4] IMPLICIT EE-Class,
 *     eventCondition [5] IMPLICIT Event-Condition-instance,
 *     ecTransitions [6] IMPLICIT Transitions,
 *     -- The following parameter is present if and only if the
 *     -- value of &eeClass is modifier.
 *     remainingDelay CHOICE {
 *         time [7] IMPLICIT INTEGER,
 *         forever [8] IMPLICIT NULL
 *     } OPTIONAL,
 *     -- The remaining parameters are present if and only if the
 *     -- value of &eeClass is notification.
 *     eventAction [9] IMPLICIT Event-Action-instance OPTIONAL,
 *     duration [10] IMPLICIT EE-Duration OPTIONAL,
 *     clientApplication [11] IMPLICIT ApplicationReference OPTIONAL,
 *     aaRule [12] IMPLICIT AlarmAckRule OPTIONAL,
 *     ...,
 *     displayEnhancement CHOICE {
 *         text [13] MMSString,
 *         number [14] IMPLICIT INTEGER,
 *         none [15] IMPLICIT NULL
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class Event_Enrollment_instance_definition_details {
    constructor (
        /**
         * @summary `accessControl`.
         * @public
         * @readonly
         */
        readonly accessControl: Access_Control_List_instance,
        /**
         * @summary `eeClass`.
         * @public
         * @readonly
         */
        readonly eeClass: EE_Class,
        /**
         * @summary `eventCondition`.
         * @public
         * @readonly
         */
        readonly eventCondition: Event_Condition_instance,
        /**
         * @summary `ecTransitions`.
         * @public
         * @readonly
         */
        readonly ecTransitions: Transitions,
        /**
         * @summary `remainingDelay`.
         * @public
         * @readonly
         */
        readonly remainingDelay: OPTIONAL<Event_Enrollment_instance_definition_details_remainingDelay>,
        /**
         * @summary `eventAction`.
         * @public
         * @readonly
         */
        readonly eventAction: OPTIONAL<Event_Action_instance>,
        /**
         * @summary `duration`.
         * @public
         * @readonly
         */
        readonly duration: OPTIONAL<EE_Duration>,
        /**
         * @summary `clientApplication`.
         * @public
         * @readonly
         */
        readonly clientApplication: OPTIONAL<ApplicationReference>,
        /**
         * @summary `aaRule`.
         * @public
         * @readonly
         */
        readonly aaRule: OPTIONAL<AlarmAckRule>,
        /**
         * @summary `displayEnhancement`.
         * @public
         * @readonly
         */
        readonly displayEnhancement: Event_Enrollment_instance_definition_details_displayEnhancement,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Event_Enrollment_instance_definition_details
     * @description
     * 
     * This takes an `object` and converts it to a `Event_Enrollment_instance_definition_details`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Event_Enrollment_instance_definition_details`.
     * @returns {Event_Enrollment_instance_definition_details}
     */
    public static _from_object (_o: { [_K in keyof (Event_Enrollment_instance_definition_details)]: (Event_Enrollment_instance_definition_details)[_K] }): Event_Enrollment_instance_definition_details {
        return new Event_Enrollment_instance_definition_details(_o.accessControl, _o.eeClass, _o.eventCondition, _o.ecTransitions, _o.remainingDelay, _o.eventAction, _o.duration, _o.clientApplication, _o.aaRule, _o.displayEnhancement, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Event_Enrollment_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Event_Enrollment_instance_definition_details: $.ComponentSpec[] = [
    new $.ComponentSpec("accessControl", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("eeClass", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eventCondition", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("ecTransitions", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("remainingDelay", true, $.or($.hasTag(_TagClass.context, 7), $.hasTag(_TagClass.context, 8))),
    new $.ComponentSpec("eventAction", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("duration", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("clientApplication", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("aaRule", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of Event_Enrollment_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Event_Enrollment_instance_definition_details: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Event_Enrollment_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Event_Enrollment_instance_definition_details: $.ComponentSpec[] = [
    new $.ComponentSpec("displayEnhancement", false, $.hasAnyTag)
];

let _cached_decoder_for_Event_Enrollment_instance_definition_details: $.ASN1Decoder<Event_Enrollment_instance_definition_details> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Event_Enrollment_instance_definition_details
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Event_Enrollment_instance_definition_details (el: _Element): Event_Enrollment_instance_definition_details {
    if (!_cached_decoder_for_Event_Enrollment_instance_definition_details) { _cached_decoder_for_Event_Enrollment_instance_definition_details = function (el: _Element): Event_Enrollment_instance_definition_details {
    let accessControl!: Access_Control_List_instance;
    let eeClass!: EE_Class;
    let eventCondition!: Event_Condition_instance;
    let ecTransitions!: Transitions;
    let remainingDelay: OPTIONAL<Event_Enrollment_instance_definition_details_remainingDelay>;
    let eventAction: OPTIONAL<Event_Action_instance>;
    let duration: OPTIONAL<EE_Duration>;
    let clientApplication: OPTIONAL<ApplicationReference>;
    let aaRule: OPTIONAL<AlarmAckRule>;
    let displayEnhancement!: Event_Enrollment_instance_definition_details_displayEnhancement;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "accessControl": (_el: _Element): void => { accessControl = $._decode_implicit<Access_Control_List_instance>(() => _decode_Access_Control_List_instance)(_el); },
        "eeClass": (_el: _Element): void => { eeClass = $._decode_implicit<EE_Class>(() => _decode_EE_Class)(_el); },
        "eventCondition": (_el: _Element): void => { eventCondition = $._decode_implicit<Event_Condition_instance>(() => _decode_Event_Condition_instance)(_el); },
        "ecTransitions": (_el: _Element): void => { ecTransitions = $._decode_implicit<Transitions>(() => _decode_Transitions)(_el); },
        "remainingDelay": (_el: _Element): void => { remainingDelay = _decode_Event_Enrollment_instance_definition_details_remainingDelay(_el); },
        "eventAction": (_el: _Element): void => { eventAction = $._decode_implicit<Event_Action_instance>(() => _decode_Event_Action_instance)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<EE_Duration>(() => _decode_EE_Duration)(_el); },
        "clientApplication": (_el: _Element): void => { clientApplication = $._decode_implicit<ApplicationReference>(() => _decode_ApplicationReference)(_el); },
        "aaRule": (_el: _Element): void => { aaRule = $._decode_implicit<AlarmAckRule>(() => _decode_AlarmAckRule)(_el); },
        "displayEnhancement": (_el: _Element): void => { displayEnhancement = _decode_Event_Enrollment_instance_definition_details_displayEnhancement(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Event_Enrollment_instance_definition_details,
        _extension_additions_list_spec_for_Event_Enrollment_instance_definition_details,
        _root_component_type_list_2_spec_for_Event_Enrollment_instance_definition_details,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Event_Enrollment_instance_definition_details(
        accessControl,
        eeClass,
        eventCondition,
        ecTransitions,
        remainingDelay,
        eventAction,
        duration,
        clientApplication,
        aaRule,
        displayEnhancement,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Event_Enrollment_instance_definition_details(el);
}

let _cached_encoder_for_Event_Enrollment_instance_definition_details: $.ASN1Encoder<Event_Enrollment_instance_definition_details> | null = null;

/**
 * @summary Encodes a(n) Event_Enrollment_instance_definition_details into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Event_Enrollment_instance_definition_details, encoded as an ASN.1 Element.
 */
export
function _encode_Event_Enrollment_instance_definition_details (value: Event_Enrollment_instance_definition_details, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Event_Enrollment_instance_definition_details) { _cached_encoder_for_Event_Enrollment_instance_definition_details = function (value: Event_Enrollment_instance_definition_details): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Access_Control_List_instance, $.BER)(value.accessControl, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_EE_Class, $.BER)(value.eeClass, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Event_Condition_instance, $.BER)(value.eventCondition, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_Transitions, $.BER)(value.ecTransitions, $.BER),
            /* IF_ABSENT  */ ((value.remainingDelay === undefined) ? undefined : _encode_Event_Enrollment_instance_definition_details_remainingDelay(value.remainingDelay, $.BER)),
            /* IF_ABSENT  */ ((value.eventAction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_Event_Action_instance, $.BER)(value.eventAction, $.BER)),
            /* IF_ABSENT  */ ((value.duration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_EE_Duration, $.BER)(value.duration, $.BER)),
            /* IF_ABSENT  */ ((value.clientApplication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_ApplicationReference, $.BER)(value.clientApplication, $.BER)),
            /* IF_ABSENT  */ ((value.aaRule === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_AlarmAckRule, $.BER)(value.aaRule, $.BER))
        ],
        [
            /* REQUIRED   */ _encode_Event_Enrollment_instance_definition_details_displayEnhancement(value.displayEnhancement, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Event_Enrollment_instance_definition_details(value, elGetter);
}


/* eslint-enable */
