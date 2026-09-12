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
import { EC_State, EC_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
// export { EC_State, EC_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
import { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";
// export { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";


/**
 * @summary ReportEventConditionStatus_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportEventConditionStatus-Response ::= SEQUENCE {
 *    currentState                     [0] IMPLICIT EC-State,
 *    numberOfEventEnrollments         [1] IMPLICIT Unsigned32,
 *    enabled                          [2] IMPLICIT BOOLEAN OPTIONAL,
 *    timeOfLastTransitionToActive     [3] EventTime OPTIONAL,
 *    timeOfLastTransitionToIdle       [4] EventTime OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ReportEventConditionStatus_Response {
    constructor (
        /**
         * @summary `currentState`.
         * @public
         * @readonly
         */
        readonly currentState: EC_State,
        /**
         * @summary `numberOfEventEnrollments`.
         * @public
         * @readonly
         */
        readonly numberOfEventEnrollments: Unsigned32,
        /**
         * @summary `enabled`.
         * @public
         * @readonly
         */
        readonly enabled: OPTIONAL<BOOLEAN>,
        /**
         * @summary `timeOfLastTransitionToActive`.
         * @public
         * @readonly
         */
        readonly timeOfLastTransitionToActive: OPTIONAL<EventTime>,
        /**
         * @summary `timeOfLastTransitionToIdle`.
         * @public
         * @readonly
         */
        readonly timeOfLastTransitionToIdle: OPTIONAL<EventTime>
    ) {}

    /**
     * @summary Restructures an object into a ReportEventConditionStatus_Response
     * @description
     * 
     * This takes an `object` and converts it to a `ReportEventConditionStatus_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportEventConditionStatus_Response`.
     * @returns {ReportEventConditionStatus_Response}
     */
    public static _from_object (_o: { [_K in keyof (ReportEventConditionStatus_Response)]: (ReportEventConditionStatus_Response)[_K] }): ReportEventConditionStatus_Response {
        return new ReportEventConditionStatus_Response(_o.currentState, _o.numberOfEventEnrollments, _o.enabled, _o.timeOfLastTransitionToActive, _o.timeOfLastTransitionToIdle);
    }


}

/**
 * @summary The Leading Root Component Types of ReportEventConditionStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportEventConditionStatus_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("currentState", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numberOfEventEnrollments", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("enabled", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timeOfLastTransitionToActive", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("timeOfLastTransitionToIdle", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ReportEventConditionStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportEventConditionStatus_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportEventConditionStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportEventConditionStatus_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportEventConditionStatus_Response: $.ASN1Decoder<ReportEventConditionStatus_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportEventConditionStatus_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportEventConditionStatus_Response (el: _Element): ReportEventConditionStatus_Response {
    if (!_cached_decoder_for_ReportEventConditionStatus_Response) { _cached_decoder_for_ReportEventConditionStatus_Response = function (el: _Element): ReportEventConditionStatus_Response {
    let currentState!: EC_State;
    let numberOfEventEnrollments!: Unsigned32;
    let enabled: OPTIONAL<BOOLEAN>;
    let timeOfLastTransitionToActive: OPTIONAL<EventTime>;
    let timeOfLastTransitionToIdle: OPTIONAL<EventTime>;
    const callbacks: $.DecodingMap = {
        "currentState": (_el: _Element): void => { currentState = $._decode_implicit<EC_State>(() => _decode_EC_State)(_el); },
        "numberOfEventEnrollments": (_el: _Element): void => { numberOfEventEnrollments = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); },
        "enabled": (_el: _Element): void => { enabled = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "timeOfLastTransitionToActive": (_el: _Element): void => { timeOfLastTransitionToActive = $._decode_explicit<EventTime>(() => _decode_EventTime)(_el); },
        "timeOfLastTransitionToIdle": (_el: _Element): void => { timeOfLastTransitionToIdle = $._decode_explicit<EventTime>(() => _decode_EventTime)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReportEventConditionStatus_Response,
        _extension_additions_list_spec_for_ReportEventConditionStatus_Response,
        _root_component_type_list_2_spec_for_ReportEventConditionStatus_Response,
        undefined,
    );
    return new ReportEventConditionStatus_Response(
        currentState,
        numberOfEventEnrollments,
        enabled,
        timeOfLastTransitionToActive,
        timeOfLastTransitionToIdle
    );
}; }
    return _cached_decoder_for_ReportEventConditionStatus_Response(el);
}

let _cached_encoder_for_ReportEventConditionStatus_Response: $.ASN1Encoder<ReportEventConditionStatus_Response> | null = null;

/**
 * @summary Encodes a(n) ReportEventConditionStatus_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportEventConditionStatus_Response, encoded as an ASN.1 Element.
 */
export
function _encode_ReportEventConditionStatus_Response (value: ReportEventConditionStatus_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportEventConditionStatus_Response) { _cached_encoder_for_ReportEventConditionStatus_Response = function (value: ReportEventConditionStatus_Response, elGetter: $.ASN1Encoder<ReportEventConditionStatus_Response>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EC_State, $.BER)(value.currentState, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Unsigned32, $.BER)(value.numberOfEventEnrollments, $.BER),
            /* IF_ABSENT  */ ((value.enabled === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.enabled, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfLastTransitionToActive === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_EventTime, $.BER)(value.timeOfLastTransitionToActive, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfLastTransitionToIdle === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_EventTime, $.BER)(value.timeOfLastTransitionToIdle, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReportEventConditionStatus_Response(value, elGetter);
}


/* eslint-enable */
