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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Nullable, _get_decoder_for_Nullable, _get_encoder_for_Nullable } from "../ISO-9506-MMS-1/Nullable.ta.mjs";
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
import { Unsigned8, _decode_Unsigned8, _encode_Unsigned8 } from "../ISO-9506-MMS-1/Unsigned8.ta.mjs";
import { EC_State, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
import { EN_Additional_Detail, _decode_EN_Additional_Detail, _encode_EN_Additional_Detail } from "../ISO-9506-MMS-1/EN-Additional-Detail.ta.mjs";
import { AlarmAckRule, _decode_AlarmAckRule, _encode_AlarmAckRule } from "../MMS-Object-Module-1/AlarmAckRule.ta.mjs";
import { EE_State, _decode_EE_State, _encode_EE_State } from "../ISO-9506-MMS-1/EE-State.ta.mjs";
import { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";


/**
 * @summary AlarmEnrollmentSummary
 * @description
 *
 * One GetAlarmEnrollmentSummary Result(+) entry for a
 * notification Event Enrollment whose `&aaRule` is not
 * `none`. Combines enrollment ack state with the referenced
 * monitored Event Condition. Display Enhancement is CS
 * (`cspi`). `enrollmentState` follows the EE-State mapping
 * of ISO 9506-1:2003 §21.5.1.2.5.
 *
 * [ISO 9506-1:2003 §18.6.1.2.1] [ISO 9506-2:2003 §18.6.2.1]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlarmEnrollmentSummary ::= SEQUENCE {
 *    eventEnrollmentName           [0] ObjectName,
 *    clientApplication             [2] Nullable{ApplicationReference} OPTIONAL,
 *    severity                      [3] IMPLICIT Unsigned8,
 *    currentState                  [4] IMPLICIT EC-State,
 *    displayEnhancement            [5] Nullable{EN-Additional-Detail} OPTIONAL,
 *    notificationLost              [6] IMPLICIT BOOLEAN DEFAULT FALSE,
 *    alarmAcknowledgmentRule       [7] IMPLICIT AlarmAckRule,
 *    enrollmentState               [8] IMPLICIT EE-State OPTIONAL,
 *    timeOfLastTransitionToActive  [9] EventTime OPTIONAL,
 *    timeActiveAcknowledged        [10] EventTime OPTIONAL,
 *    timeOfLastTransitionToIdle    [11] EventTime OPTIONAL,
 *    timeIdleAcknowledged          [12] EventTime OPTIONAL    }
 * ```
 * 
 * @class
 */
export
class AlarmEnrollmentSummary {
    constructor (
        /**
         * @summary `eventEnrollmentName`.
         * @description
         *
         * `&name` of the notification Event Enrollment.
         *
         * [ISO 9506-1:2003 §18.6.1.2.1.1]
         *
         * @public
         * @readonly
         */
        readonly eventEnrollmentName: ObjectName,
        /**
         * @summary `clientApplication`.
         * @description
         *
         * Enrollment `&clientApplication`. Omitted if it
         * specifies the requesting client. Requires `tpy`.
         *
         * [ISO 9506-1:2003 §18.6.1.2.1.2]
         *
         * @public
         * @readonly
         */
        readonly clientApplication: OPTIONAL<Nullable<ApplicationReference>>,
        /**
         * @summary `severity`.
         * @description
         *
         * `&severity` of the referenced Event Condition.
         *
         * [ISO 9506-1:2003 §18.6.1.2.1.3]
         *
         * @public
         * @readonly
         */
        readonly severity: Unsigned8,
        /**
         * @summary `currentState`.
         * @description
         *
         * `&ecState` of the referenced Event Condition.
         * Disabled conditions do not notify.
         *
         * [ISO 9506-1:2003 §18.6.1.2.1.4]
         *
         * @public
         * @readonly
         */
        readonly currentState: EC_State,
        /**
         * @summary `displayEnhancement`.
         * @description
         *
         * Present only if `cspi` was negotiated. Enrollment
         * `&displayEnhancement` if defined; otherwise the
         * Event Condition's.
         *
         * [ISO 9506-1:2003 §18.6.1.2.1.5]
         *
         * @public
         * @readonly
         */
        readonly displayEnhancement: OPTIONAL<Nullable<EN_Additional_Detail>>,
        /**
         * @summary `notificationLost`.
         * @description
         *
         * Enrollment `&notificationLost`. True if prior
         * notifications were dropped due to resource limits.
         * Default false.
         *
         * [ISO 9506-1:2003 §18.6.1.2.1.6]
         *
         * @public
         * @readonly
         */
        readonly notificationLost: OPTIONAL<BOOLEAN>,
        /**
         * @summary `alarmAcknowledgmentRule`.
         * @description
         *
         * Enrollment `&aaRule`: `none`, `simple`,
         * `ack-active`, or `ack-all`. Enrollments with
         * `none` are excluded from this summary.
         *
         * [ISO 9506-1:2003 §18.6.1.2.1.7]
         *
         * @public
         * @readonly
         */
        readonly alarmAcknowledgmentRule: AlarmAckRule,
        /**
         * @summary `enrollmentState`.
         * @description
         *
         * Combined EE-State from Event Condition `&ecState`
         * and enrollment `&ackState` per ISO 9506-1:2003
         * §21.5.1.2.5.
         *
         * [ISO 9506-1:2003 §18.6.1.2.1.8]
         *
         * @public
         * @readonly
         */
        readonly enrollmentState: OPTIONAL<EE_State>,
        /**
         * @summary `timeOfLastTransitionToActive`.
         * @description
         *
         * Referenced Event Condition `&timeToActive`.
         * Omitted if undefined.
         *
         * [ISO 9506-1:2003 §18.6.1.2.1.9]
         *
         * @public
         * @readonly
         */
        readonly timeOfLastTransitionToActive: OPTIONAL<EventTime>,
        /**
         * @summary `timeActiveAcknowledged`.
         * @description
         *
         * Enrollment `&timeActiveAck`. Omitted if undefined.
         *
         * [ISO 9506-1:2003 §18.6.1.2.1.10]
         *
         * @public
         * @readonly
         */
        readonly timeActiveAcknowledged: OPTIONAL<EventTime>,
        /**
         * @summary `timeOfLastTransitionToIdle`.
         * @description
         *
         * Referenced Event Condition `&timeToIdle`. Omitted
         * if undefined.
         *
         * [ISO 9506-1:2003 §18.6.1.2.1.11]
         *
         * @public
         * @readonly
         */
        readonly timeOfLastTransitionToIdle: OPTIONAL<EventTime>,
        /**
         * @summary `timeIdleAcknowledged`.
         * @description
         *
         * Enrollment `&timeIdleAck`. Omitted if undefined.
         *
         * [ISO 9506-1:2003 §18.6.1.2.1.12]
         *
         * @public
         * @readonly
         */
        readonly timeIdleAcknowledged: OPTIONAL<EventTime>
    ) {}

    /**
     * @summary Restructures an object into a AlarmEnrollmentSummary
     * @description
     * 
     * This takes an `object` and converts it to a `AlarmEnrollmentSummary`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlarmEnrollmentSummary`.
     * @returns {AlarmEnrollmentSummary}
     */
    public static _from_object (_o: { [_K in keyof (AlarmEnrollmentSummary)]: (AlarmEnrollmentSummary)[_K] }): AlarmEnrollmentSummary {
        return new AlarmEnrollmentSummary(_o.eventEnrollmentName, _o.clientApplication, _o.severity, _o.currentState, _o.displayEnhancement, _o.notificationLost, _o.alarmAcknowledgmentRule, _o.enrollmentState, _o.timeOfLastTransitionToActive, _o.timeActiveAcknowledged, _o.timeOfLastTransitionToIdle, _o.timeIdleAcknowledged);
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
 * @summary The Leading Root Component Types of AlarmEnrollmentSummary
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AlarmEnrollmentSummary: $.ComponentSpec[] = [
    new $.ComponentSpec("eventEnrollmentName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("clientApplication", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("severity", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("currentState", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("displayEnhancement", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("notificationLost", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("alarmAcknowledgmentRule", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("enrollmentState", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("timeOfLastTransitionToActive", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("timeActiveAcknowledged", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("timeOfLastTransitionToIdle", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("timeIdleAcknowledged", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of AlarmEnrollmentSummary
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AlarmEnrollmentSummary: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AlarmEnrollmentSummary
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AlarmEnrollmentSummary: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AlarmEnrollmentSummary: $.ASN1Decoder<AlarmEnrollmentSummary> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlarmEnrollmentSummary
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlarmEnrollmentSummary (el: _Element): AlarmEnrollmentSummary {
    if (!_cached_decoder_for_AlarmEnrollmentSummary) { _cached_decoder_for_AlarmEnrollmentSummary = function (el: _Element): AlarmEnrollmentSummary {
    let eventEnrollmentName!: ObjectName;
    let clientApplication: OPTIONAL<Nullable<ApplicationReference>>;
    let severity!: Unsigned8;
    let currentState!: EC_State;
    let displayEnhancement: OPTIONAL<Nullable<EN_Additional_Detail>>;
    let notificationLost: OPTIONAL<BOOLEAN> = AlarmEnrollmentSummary._default_value_for_notificationLost;
    let alarmAcknowledgmentRule!: AlarmAckRule;
    let enrollmentState: OPTIONAL<EE_State>;
    let timeOfLastTransitionToActive: OPTIONAL<EventTime>;
    let timeActiveAcknowledged: OPTIONAL<EventTime>;
    let timeOfLastTransitionToIdle: OPTIONAL<EventTime>;
    let timeIdleAcknowledged: OPTIONAL<EventTime>;
    const callbacks: $.DecodingMap = {
        "eventEnrollmentName": (_el: _Element): void => { eventEnrollmentName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "clientApplication": (_el: _Element): void => { clientApplication = $._decode_explicit<Nullable<ApplicationReference>>(() => _get_decoder_for_Nullable<ApplicationReference>(_decode_ApplicationReference))(_el); },
        "severity": (_el: _Element): void => { severity = $._decode_implicit<Unsigned8>(() => _decode_Unsigned8)(_el); },
        "currentState": (_el: _Element): void => { currentState = $._decode_implicit<EC_State>(() => _decode_EC_State)(_el); },
        "displayEnhancement": (_el: _Element): void => { displayEnhancement = $._decode_explicit<Nullable<EN_Additional_Detail>>(() => _get_decoder_for_Nullable<EN_Additional_Detail>(_decode_EN_Additional_Detail))(_el); },
        "notificationLost": (_el: _Element): void => { notificationLost = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "alarmAcknowledgmentRule": (_el: _Element): void => { alarmAcknowledgmentRule = $._decode_implicit<AlarmAckRule>(() => _decode_AlarmAckRule)(_el); },
        "enrollmentState": (_el: _Element): void => { enrollmentState = $._decode_implicit<EE_State>(() => _decode_EE_State)(_el); },
        "timeOfLastTransitionToActive": (_el: _Element): void => { timeOfLastTransitionToActive = $._decode_explicit<EventTime>(() => _decode_EventTime)(_el); },
        "timeActiveAcknowledged": (_el: _Element): void => { timeActiveAcknowledged = $._decode_explicit<EventTime>(() => _decode_EventTime)(_el); },
        "timeOfLastTransitionToIdle": (_el: _Element): void => { timeOfLastTransitionToIdle = $._decode_explicit<EventTime>(() => _decode_EventTime)(_el); },
        "timeIdleAcknowledged": (_el: _Element): void => { timeIdleAcknowledged = $._decode_explicit<EventTime>(() => _decode_EventTime)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AlarmEnrollmentSummary,
        _extension_additions_list_spec_for_AlarmEnrollmentSummary,
        _root_component_type_list_2_spec_for_AlarmEnrollmentSummary,
        undefined,
    );
    return new AlarmEnrollmentSummary(
        eventEnrollmentName,
        clientApplication,
        severity,
        currentState,
        displayEnhancement,
        notificationLost,
        alarmAcknowledgmentRule,
        enrollmentState,
        timeOfLastTransitionToActive,
        timeActiveAcknowledged,
        timeOfLastTransitionToIdle,
        timeIdleAcknowledged
    );
}; }
    return _cached_decoder_for_AlarmEnrollmentSummary(el);
}

let _cached_encoder_for_AlarmEnrollmentSummary: $.ASN1Encoder<AlarmEnrollmentSummary> | null = null;

/**
 * @summary Encodes a(n) AlarmEnrollmentSummary into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmEnrollmentSummary, encoded as an ASN.1 Element.
 */
export
function _encode_AlarmEnrollmentSummary (value: AlarmEnrollmentSummary, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlarmEnrollmentSummary) { _cached_encoder_for_AlarmEnrollmentSummary = function (value: AlarmEnrollmentSummary): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.eventEnrollmentName, $.BER),
            /* IF_ABSENT  */ ((value.clientApplication === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _get_encoder_for_Nullable<ApplicationReference>(_encode_ApplicationReference), $.BER)(value.clientApplication, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Unsigned8, $.BER)(value.severity, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_EC_State, $.BER)(value.currentState, $.BER),
            /* IF_ABSENT  */ ((value.displayEnhancement === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _get_encoder_for_Nullable<EN_Additional_Detail>(_encode_EN_Additional_Detail), $.BER)(value.displayEnhancement, $.BER)),
            /* IF_DEFAULT */ (value.notificationLost === undefined || $.deepEq(value.notificationLost, AlarmEnrollmentSummary._default_value_for_notificationLost) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.notificationLost, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_AlarmAckRule, $.BER)(value.alarmAcknowledgmentRule, $.BER),
            /* IF_ABSENT  */ ((value.enrollmentState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_EE_State, $.BER)(value.enrollmentState, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfLastTransitionToActive === undefined) ? undefined : $._encode_explicit(_TagClass.context, 9, () => _encode_EventTime, $.BER)(value.timeOfLastTransitionToActive, $.BER)),
            /* IF_ABSENT  */ ((value.timeActiveAcknowledged === undefined) ? undefined : $._encode_explicit(_TagClass.context, 10, () => _encode_EventTime, $.BER)(value.timeActiveAcknowledged, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfLastTransitionToIdle === undefined) ? undefined : $._encode_explicit(_TagClass.context, 11, () => _encode_EventTime, $.BER)(value.timeOfLastTransitionToIdle, $.BER)),
            /* IF_ABSENT  */ ((value.timeIdleAcknowledged === undefined) ? undefined : $._encode_explicit(_TagClass.context, 12, () => _encode_EventTime, $.BER)(value.timeIdleAcknowledged, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AlarmEnrollmentSummary(value, elGetter);
}


/* eslint-enable */
