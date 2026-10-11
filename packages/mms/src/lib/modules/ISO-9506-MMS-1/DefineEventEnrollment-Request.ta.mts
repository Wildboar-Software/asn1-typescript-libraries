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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Transitions, _decode_Transitions, _encode_Transitions } from "../MMS-Object-Module-1/Transitions.ta.mjs";
import { AlarmAckRule, _decode_AlarmAckRule, _encode_AlarmAckRule } from "../MMS-Object-Module-1/AlarmAckRule.ta.mjs";
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";


/**
 * @summary DefineEventEnrollment_Request
 * @description
 *
 * Confirmed request: create a `notification` Event Enrollment (not `modifier`;
 * those come from AttachToEventCondition). Duration is `current` (this AA) or
 * `permanent` (until deleted). `&aaRule` applies only when the Event Condition
 * is monitored. Disabled conditions do not notify. Result(+) empty.
 *
 * [ISO 9506-1:2003 §21.2]
 * [ISO 9506-2:2003 §21.2]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefineEventEnrollment-Request ::= SEQUENCE {
 *    eventEnrollmentName              [0] ObjectName,
 *    eventConditionName               [1] ObjectName,
 *    eventConditionTransitions        [2] IMPLICIT Transitions,
 *    alarmAcknowledgmentRule          [3] IMPLICIT AlarmAckRule,
 *    eventActionName                  [4] ObjectName OPTIONAL
 * ,  clientApplication                [5] ApplicationReference OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class DefineEventEnrollment_Request {
    constructor (
        /**
         * @summary `eventEnrollmentName`.
         * @description
         *
         * `&name` of the enrollment to create.
         *
         * [ISO 9506-1:2003 §21.2.1.1.1]
         *
         * @public
         * @readonly
         */
        readonly eventEnrollmentName: ObjectName,
        /**
         * @summary `eventConditionName`.
         * @description
         *
         * Event Condition that drives this enrollment.
         *
         * [ISO 9506-1:2003 §21.2.1.1.2]
         *
         * @public
         * @readonly
         */
        readonly eventConditionName: ObjectName,
        /**
         * @summary `eventConditionTransitions`.
         * @description
         *
         * `&ecTransitions`. Empty set for network-triggered. If `&aaRule` is not
         * `none`, must include transitions to active; `ack-all` also idle.
         *
         * [ISO 9506-1:2003 §21.2.1.1.3]
         *
         * @public
         * @readonly
         */
        readonly eventConditionTransitions: Transitions,
        /**
         * @summary `alarmAcknowledgmentRule`.
         * @description
         *
         * `&aaRule`: `none` (ack allowed, no `&ackState` effect), `simple` (active ack
         * updates state), `ack-active` (active ack required), `ack-all` (active and
         * idle required). Never required for disabled transitions.
         *
         * [ISO 9506-1:2003 §21.2.1.1.4]
         *
         * @public
         * @readonly
         */
        readonly alarmAcknowledgmentRule: AlarmAckRule,
        /**
         * @summary `eventActionName`.
         * @description
         *
         * Optional Event Action executed on matching transitions.
         *
         * [ISO 9506-1:2003 §21.2.1.1.5]
         *
         * @public
         * @readonly
         */
        readonly eventActionName: OPTIONAL<ObjectName>,
        /**
         * @summary `clientApplication`.
         * @description
         *
         * Enrolled client. Requires `tpy`. Default: requesting client.
         *
         * [ISO 9506-1:2003 §21.2.1.1.6]
         *
         * @public
         * @readonly
         */
        readonly clientApplication: OPTIONAL<ApplicationReference>
    ) {}

    /**
     * @summary Restructures an object into a DefineEventEnrollment_Request
     * @description
     * 
     * This takes an `object` and converts it to a `DefineEventEnrollment_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefineEventEnrollment_Request`.
     * @returns {DefineEventEnrollment_Request}
     */
    public static _from_object (_o: { [_K in keyof (DefineEventEnrollment_Request)]: (DefineEventEnrollment_Request)[_K] }): DefineEventEnrollment_Request {
        return new DefineEventEnrollment_Request(_o.eventEnrollmentName, _o.eventConditionName, _o.eventConditionTransitions, _o.alarmAcknowledgmentRule, _o.eventActionName, _o.clientApplication);
    }


}

/**
 * @summary The Leading Root Component Types of DefineEventEnrollment_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DefineEventEnrollment_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("eventEnrollmentName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventConditionName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventConditionTransitions", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("alarmAcknowledgmentRule", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("eventActionName", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("clientApplication", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of DefineEventEnrollment_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DefineEventEnrollment_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DefineEventEnrollment_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DefineEventEnrollment_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DefineEventEnrollment_Request: $.ASN1Decoder<DefineEventEnrollment_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefineEventEnrollment_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefineEventEnrollment_Request (el: _Element): DefineEventEnrollment_Request {
    if (!_cached_decoder_for_DefineEventEnrollment_Request) { _cached_decoder_for_DefineEventEnrollment_Request = function (el: _Element): DefineEventEnrollment_Request {
    let eventEnrollmentName!: ObjectName;
    let eventConditionName!: ObjectName;
    let eventConditionTransitions!: Transitions;
    let alarmAcknowledgmentRule!: AlarmAckRule;
    let eventActionName: OPTIONAL<ObjectName>;
    let clientApplication: OPTIONAL<ApplicationReference>;
    const callbacks: $.DecodingMap = {
        "eventEnrollmentName": (_el: _Element): void => { eventEnrollmentName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "eventConditionName": (_el: _Element): void => { eventConditionName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "eventConditionTransitions": (_el: _Element): void => { eventConditionTransitions = $._decode_implicit<Transitions>(() => _decode_Transitions)(_el); },
        "alarmAcknowledgmentRule": (_el: _Element): void => { alarmAcknowledgmentRule = $._decode_implicit<AlarmAckRule>(() => _decode_AlarmAckRule)(_el); },
        "eventActionName": (_el: _Element): void => { eventActionName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "clientApplication": (_el: _Element): void => { clientApplication = $._decode_explicit<ApplicationReference>(() => _decode_ApplicationReference)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DefineEventEnrollment_Request,
        _extension_additions_list_spec_for_DefineEventEnrollment_Request,
        _root_component_type_list_2_spec_for_DefineEventEnrollment_Request,
        undefined,
    );
    return new DefineEventEnrollment_Request(
        eventEnrollmentName,
        eventConditionName,
        eventConditionTransitions,
        alarmAcknowledgmentRule,
        eventActionName,
        clientApplication
    );
}; }
    return _cached_decoder_for_DefineEventEnrollment_Request(el);
}

let _cached_encoder_for_DefineEventEnrollment_Request: $.ASN1Encoder<DefineEventEnrollment_Request> | null = null;

/**
 * @summary Encodes a(n) DefineEventEnrollment_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefineEventEnrollment_Request, encoded as an ASN.1 Element.
 */
export
function _encode_DefineEventEnrollment_Request (value: DefineEventEnrollment_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefineEventEnrollment_Request) { _cached_encoder_for_DefineEventEnrollment_Request = function (value: DefineEventEnrollment_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.eventEnrollmentName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ObjectName, $.BER)(value.eventConditionName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Transitions, $.BER)(value.eventConditionTransitions, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_AlarmAckRule, $.BER)(value.alarmAcknowledgmentRule, $.BER),
            /* IF_ABSENT  */ ((value.eventActionName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_ObjectName, $.BER)(value.eventActionName, $.BER)),
            /* IF_ABSENT  */ ((value.clientApplication === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_ApplicationReference, $.BER)(value.clientApplication, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DefineEventEnrollment_Request(value, elGetter);
}


/* eslint-enable */
