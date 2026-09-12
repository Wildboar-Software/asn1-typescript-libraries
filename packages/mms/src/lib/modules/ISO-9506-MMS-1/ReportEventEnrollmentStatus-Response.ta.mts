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
import { Transitions, Transitions_idle_to_disabled /* IMPORTED_LONG_NAMED_BIT */, idle_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_disabled /* IMPORTED_LONG_NAMED_BIT */, active_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_idle /* IMPORTED_LONG_NAMED_BIT */, disabled_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_idle /* IMPORTED_LONG_NAMED_BIT */, active_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_active /* IMPORTED_LONG_NAMED_BIT */, disabled_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_idle_to_active /* IMPORTED_LONG_NAMED_BIT */, idle_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_any_to_deleted /* IMPORTED_LONG_NAMED_BIT */, any_to_deleted /* IMPORTED_SHORT_NAMED_BIT */, _decode_Transitions, _encode_Transitions } from "../MMS-Object-Module-1/Transitions.ta.mjs";
// export { Transitions, Transitions_idle_to_disabled /* IMPORTED_LONG_NAMED_BIT */, idle_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_disabled /* IMPORTED_LONG_NAMED_BIT */, active_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_idle /* IMPORTED_LONG_NAMED_BIT */, disabled_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_idle /* IMPORTED_LONG_NAMED_BIT */, active_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_active /* IMPORTED_LONG_NAMED_BIT */, disabled_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_idle_to_active /* IMPORTED_LONG_NAMED_BIT */, idle_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_any_to_deleted /* IMPORTED_LONG_NAMED_BIT */, any_to_deleted /* IMPORTED_SHORT_NAMED_BIT */, _decode_Transitions, _encode_Transitions } from "../MMS-Object-Module-1/Transitions.ta.mjs";
import { EE_Duration, EE_Duration_current /* IMPORTED_LONG_NAMED_INTEGER */, current /* IMPORTED_SHORT_NAMED_INTEGER */, EE_Duration_permanent /* IMPORTED_LONG_NAMED_INTEGER */, permanent /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EE_Duration, _encode_EE_Duration } from "../MMS-Object-Module-1/EE-Duration.ta.mjs";
// export { EE_Duration, EE_Duration_current /* IMPORTED_LONG_NAMED_INTEGER */, current /* IMPORTED_SHORT_NAMED_INTEGER */, EE_Duration_permanent /* IMPORTED_LONG_NAMED_INTEGER */, permanent /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EE_Duration, _encode_EE_Duration } from "../MMS-Object-Module-1/EE-Duration.ta.mjs";
import { AlarmAckRule, AlarmAckRule_none /* IMPORTED_LONG_NAMED_INTEGER */, none /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_simple /* IMPORTED_LONG_NAMED_INTEGER */, simple /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_ack_active /* IMPORTED_LONG_NAMED_INTEGER */, ack_active /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_ack_all /* IMPORTED_LONG_NAMED_INTEGER */, ack_all /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AlarmAckRule, _encode_AlarmAckRule } from "../MMS-Object-Module-1/AlarmAckRule.ta.mjs";
// export { AlarmAckRule, AlarmAckRule_none /* IMPORTED_LONG_NAMED_INTEGER */, none /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_simple /* IMPORTED_LONG_NAMED_INTEGER */, simple /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_ack_active /* IMPORTED_LONG_NAMED_INTEGER */, ack_active /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_ack_all /* IMPORTED_LONG_NAMED_INTEGER */, ack_all /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AlarmAckRule, _encode_AlarmAckRule } from "../MMS-Object-Module-1/AlarmAckRule.ta.mjs";
import { EE_State, EE_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_activeNoAckA /* IMPORTED_LONG_NAMED_INTEGER */, activeNoAckA /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_idleNoAckI /* IMPORTED_LONG_NAMED_INTEGER */, idleNoAckI /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_idleNoAckA /* IMPORTED_LONG_NAMED_INTEGER */, idleNoAckA /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_idleAcked /* IMPORTED_LONG_NAMED_INTEGER */, idleAcked /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_activeAcked /* IMPORTED_LONG_NAMED_INTEGER */, activeAcked /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_undefined /* IMPORTED_LONG_NAMED_INTEGER */, undefined /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EE_State, _encode_EE_State } from "../ISO-9506-MMS-1/EE-State.ta.mjs";
// export { EE_State, EE_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_activeNoAckA /* IMPORTED_LONG_NAMED_INTEGER */, activeNoAckA /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_idleNoAckI /* IMPORTED_LONG_NAMED_INTEGER */, idleNoAckI /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_idleNoAckA /* IMPORTED_LONG_NAMED_INTEGER */, idleNoAckA /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_idleAcked /* IMPORTED_LONG_NAMED_INTEGER */, idleAcked /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_activeAcked /* IMPORTED_LONG_NAMED_INTEGER */, activeAcked /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_undefined /* IMPORTED_LONG_NAMED_INTEGER */, undefined /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EE_State, _encode_EE_State } from "../ISO-9506-MMS-1/EE-State.ta.mjs";


/**
 * @summary ReportEventEnrollmentStatus_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportEventEnrollmentStatus-Response ::= SEQUENCE {
 *    eventConditionTransitions     [0] IMPLICIT Transitions,
 *    notificationLost              [1] IMPLICIT BOOLEAN DEFAULT FALSE,
 *    duration                      [2] IMPLICIT EE-Duration,
 *    alarmAcknowledgmentRule       [3] IMPLICIT AlarmAckRule OPTIONAL,
 *    currentState                  [4] IMPLICIT EE-State  }
 * ```
 * 
 * @class
 */
export
class ReportEventEnrollmentStatus_Response {
    constructor (
        /**
         * @summary `eventConditionTransitions`.
         * @public
         * @readonly
         */
        readonly eventConditionTransitions: Transitions,
        /**
         * @summary `notificationLost`.
         * @public
         * @readonly
         */
        readonly notificationLost: OPTIONAL<BOOLEAN>,
        /**
         * @summary `duration`.
         * @public
         * @readonly
         */
        readonly duration: EE_Duration,
        /**
         * @summary `alarmAcknowledgmentRule`.
         * @public
         * @readonly
         */
        readonly alarmAcknowledgmentRule: OPTIONAL<AlarmAckRule>,
        /**
         * @summary `currentState`.
         * @public
         * @readonly
         */
        readonly currentState: EE_State
    ) {}

    /**
     * @summary Restructures an object into a ReportEventEnrollmentStatus_Response
     * @description
     * 
     * This takes an `object` and converts it to a `ReportEventEnrollmentStatus_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportEventEnrollmentStatus_Response`.
     * @returns {ReportEventEnrollmentStatus_Response}
     */
    public static _from_object (_o: { [_K in keyof (ReportEventEnrollmentStatus_Response)]: (ReportEventEnrollmentStatus_Response)[_K] }): ReportEventEnrollmentStatus_Response {
        return new ReportEventEnrollmentStatus_Response(_o.eventConditionTransitions, _o.notificationLost, _o.duration, _o.alarmAcknowledgmentRule, _o.currentState);
    }

    /**
     * @summary Getter that returns the default value for `notificationLost`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_notificationLost () { return false; }
}

/**
 * @summary The Leading Root Component Types of ReportEventEnrollmentStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportEventEnrollmentStatus_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("eventConditionTransitions", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("notificationLost", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("alarmAcknowledgmentRule", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("currentState", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ReportEventEnrollmentStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportEventEnrollmentStatus_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportEventEnrollmentStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportEventEnrollmentStatus_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportEventEnrollmentStatus_Response: $.ASN1Decoder<ReportEventEnrollmentStatus_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportEventEnrollmentStatus_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportEventEnrollmentStatus_Response (el: _Element): ReportEventEnrollmentStatus_Response {
    if (!_cached_decoder_for_ReportEventEnrollmentStatus_Response) { _cached_decoder_for_ReportEventEnrollmentStatus_Response = function (el: _Element): ReportEventEnrollmentStatus_Response {
    let eventConditionTransitions!: Transitions;
    let notificationLost: OPTIONAL<BOOLEAN> = ReportEventEnrollmentStatus_Response._default_value_for_notificationLost;
    let duration!: EE_Duration;
    let alarmAcknowledgmentRule: OPTIONAL<AlarmAckRule>;
    let currentState!: EE_State;
    const callbacks: $.DecodingMap = {
        "eventConditionTransitions": (_el: _Element): void => { eventConditionTransitions = $._decode_implicit<Transitions>(() => _decode_Transitions)(_el); },
        "notificationLost": (_el: _Element): void => { notificationLost = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<EE_Duration>(() => _decode_EE_Duration)(_el); },
        "alarmAcknowledgmentRule": (_el: _Element): void => { alarmAcknowledgmentRule = $._decode_implicit<AlarmAckRule>(() => _decode_AlarmAckRule)(_el); },
        "currentState": (_el: _Element): void => { currentState = $._decode_implicit<EE_State>(() => _decode_EE_State)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReportEventEnrollmentStatus_Response,
        _extension_additions_list_spec_for_ReportEventEnrollmentStatus_Response,
        _root_component_type_list_2_spec_for_ReportEventEnrollmentStatus_Response,
        undefined,
    );
    return new ReportEventEnrollmentStatus_Response(
        eventConditionTransitions,
        notificationLost,
        duration,
        alarmAcknowledgmentRule,
        currentState
    );
}; }
    return _cached_decoder_for_ReportEventEnrollmentStatus_Response(el);
}

let _cached_encoder_for_ReportEventEnrollmentStatus_Response: $.ASN1Encoder<ReportEventEnrollmentStatus_Response> | null = null;

/**
 * @summary Encodes a(n) ReportEventEnrollmentStatus_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportEventEnrollmentStatus_Response, encoded as an ASN.1 Element.
 */
export
function _encode_ReportEventEnrollmentStatus_Response (value: ReportEventEnrollmentStatus_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportEventEnrollmentStatus_Response) { _cached_encoder_for_ReportEventEnrollmentStatus_Response = function (value: ReportEventEnrollmentStatus_Response, elGetter: $.ASN1Encoder<ReportEventEnrollmentStatus_Response>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Transitions, $.BER)(value.eventConditionTransitions, $.BER),
            /* IF_DEFAULT */ (value.notificationLost === undefined || $.deepEq(value.notificationLost, ReportEventEnrollmentStatus_Response._default_value_for_notificationLost) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.notificationLost, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EE_Duration, $.BER)(value.duration, $.BER),
            /* IF_ABSENT  */ ((value.alarmAcknowledgmentRule === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AlarmAckRule, $.BER)(value.alarmAcknowledgmentRule, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_EE_State, $.BER)(value.currentState, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReportEventEnrollmentStatus_Response(value, elGetter);
}


/* eslint-enable */
