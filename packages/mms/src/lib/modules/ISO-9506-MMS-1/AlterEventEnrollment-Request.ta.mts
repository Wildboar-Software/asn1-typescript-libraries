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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Transitions, Transitions_idle_to_disabled /* IMPORTED_LONG_NAMED_BIT */, idle_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_disabled /* IMPORTED_LONG_NAMED_BIT */, active_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_idle /* IMPORTED_LONG_NAMED_BIT */, disabled_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_idle /* IMPORTED_LONG_NAMED_BIT */, active_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_active /* IMPORTED_LONG_NAMED_BIT */, disabled_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_idle_to_active /* IMPORTED_LONG_NAMED_BIT */, idle_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_any_to_deleted /* IMPORTED_LONG_NAMED_BIT */, any_to_deleted /* IMPORTED_SHORT_NAMED_BIT */, _decode_Transitions, _encode_Transitions } from "../MMS-Object-Module-1/Transitions.ta.mjs";
// export { Transitions, Transitions_idle_to_disabled /* IMPORTED_LONG_NAMED_BIT */, idle_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_disabled /* IMPORTED_LONG_NAMED_BIT */, active_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_idle /* IMPORTED_LONG_NAMED_BIT */, disabled_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_idle /* IMPORTED_LONG_NAMED_BIT */, active_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_active /* IMPORTED_LONG_NAMED_BIT */, disabled_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_idle_to_active /* IMPORTED_LONG_NAMED_BIT */, idle_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_any_to_deleted /* IMPORTED_LONG_NAMED_BIT */, any_to_deleted /* IMPORTED_SHORT_NAMED_BIT */, _decode_Transitions, _encode_Transitions } from "../MMS-Object-Module-1/Transitions.ta.mjs";
import { AlarmAckRule, AlarmAckRule_none /* IMPORTED_LONG_NAMED_INTEGER */, none /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_simple /* IMPORTED_LONG_NAMED_INTEGER */, simple /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_ack_active /* IMPORTED_LONG_NAMED_INTEGER */, ack_active /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_ack_all /* IMPORTED_LONG_NAMED_INTEGER */, ack_all /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AlarmAckRule, _encode_AlarmAckRule } from "../MMS-Object-Module-1/AlarmAckRule.ta.mjs";
// export { AlarmAckRule, AlarmAckRule_none /* IMPORTED_LONG_NAMED_INTEGER */, none /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_simple /* IMPORTED_LONG_NAMED_INTEGER */, simple /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_ack_active /* IMPORTED_LONG_NAMED_INTEGER */, ack_active /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_ack_all /* IMPORTED_LONG_NAMED_INTEGER */, ack_all /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AlarmAckRule, _encode_AlarmAckRule } from "../MMS-Object-Module-1/AlarmAckRule.ta.mjs";


/**
 * @summary AlterEventEnrollment_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlterEventEnrollment-Request ::= SEQUENCE {
 *    eventEnrollmentName           [0] ObjectName,
 *    eventConditionTransitions     [1] IMPLICIT Transitions OPTIONAL,
 *    alarmAcknowledgmentRule       [2] IMPLICIT AlarmAckRule OPTIONAL   }
 * ```
 * 
 * @class
 */
export
class AlterEventEnrollment_Request {
    constructor (
        /**
         * @summary `eventEnrollmentName`.
         * @public
         * @readonly
         */
        readonly eventEnrollmentName: ObjectName,
        /**
         * @summary `eventConditionTransitions`.
         * @public
         * @readonly
         */
        readonly eventConditionTransitions: OPTIONAL<Transitions>,
        /**
         * @summary `alarmAcknowledgmentRule`.
         * @public
         * @readonly
         */
        readonly alarmAcknowledgmentRule: OPTIONAL<AlarmAckRule>
    ) {}

    /**
     * @summary Restructures an object into a AlterEventEnrollment_Request
     * @description
     * 
     * This takes an `object` and converts it to a `AlterEventEnrollment_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlterEventEnrollment_Request`.
     * @returns {AlterEventEnrollment_Request}
     */
    public static _from_object (_o: { [_K in keyof (AlterEventEnrollment_Request)]: (AlterEventEnrollment_Request)[_K] }): AlterEventEnrollment_Request {
        return new AlterEventEnrollment_Request(_o.eventEnrollmentName, _o.eventConditionTransitions, _o.alarmAcknowledgmentRule);
    }


}

/**
 * @summary The Leading Root Component Types of AlterEventEnrollment_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AlterEventEnrollment_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("eventEnrollmentName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventConditionTransitions", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("alarmAcknowledgmentRule", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AlterEventEnrollment_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AlterEventEnrollment_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AlterEventEnrollment_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AlterEventEnrollment_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AlterEventEnrollment_Request: $.ASN1Decoder<AlterEventEnrollment_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlterEventEnrollment_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlterEventEnrollment_Request (el: _Element): AlterEventEnrollment_Request {
    if (!_cached_decoder_for_AlterEventEnrollment_Request) { _cached_decoder_for_AlterEventEnrollment_Request = function (el: _Element): AlterEventEnrollment_Request {
    let eventEnrollmentName!: ObjectName;
    let eventConditionTransitions: OPTIONAL<Transitions>;
    let alarmAcknowledgmentRule: OPTIONAL<AlarmAckRule>;
    const callbacks: $.DecodingMap = {
        "eventEnrollmentName": (_el: _Element): void => { eventEnrollmentName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "eventConditionTransitions": (_el: _Element): void => { eventConditionTransitions = $._decode_implicit<Transitions>(() => _decode_Transitions)(_el); },
        "alarmAcknowledgmentRule": (_el: _Element): void => { alarmAcknowledgmentRule = $._decode_implicit<AlarmAckRule>(() => _decode_AlarmAckRule)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AlterEventEnrollment_Request,
        _extension_additions_list_spec_for_AlterEventEnrollment_Request,
        _root_component_type_list_2_spec_for_AlterEventEnrollment_Request,
        undefined,
    );
    return new AlterEventEnrollment_Request(
        eventEnrollmentName,
        eventConditionTransitions,
        alarmAcknowledgmentRule
    );
}; }
    return _cached_decoder_for_AlterEventEnrollment_Request(el);
}

let _cached_encoder_for_AlterEventEnrollment_Request: $.ASN1Encoder<AlterEventEnrollment_Request> | null = null;

/**
 * @summary Encodes a(n) AlterEventEnrollment_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlterEventEnrollment_Request, encoded as an ASN.1 Element.
 */
export
function _encode_AlterEventEnrollment_Request (value: AlterEventEnrollment_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlterEventEnrollment_Request) { _cached_encoder_for_AlterEventEnrollment_Request = function (value: AlterEventEnrollment_Request, elGetter: $.ASN1Encoder<AlterEventEnrollment_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.eventEnrollmentName, $.BER),
            /* IF_ABSENT  */ ((value.eventConditionTransitions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Transitions, $.BER)(value.eventConditionTransitions, $.BER)),
            /* IF_ABSENT  */ ((value.alarmAcknowledgmentRule === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AlarmAckRule, $.BER)(value.alarmAcknowledgmentRule, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AlterEventEnrollment_Request(value, elGetter);
}


/* eslint-enable */
