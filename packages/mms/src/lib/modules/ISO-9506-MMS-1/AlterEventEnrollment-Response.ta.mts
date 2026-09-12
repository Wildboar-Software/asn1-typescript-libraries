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
import { AlterEventEnrollment_Response_currentState, _decode_AlterEventEnrollment_Response_currentState, _encode_AlterEventEnrollment_Response_currentState } from "../ISO-9506-MMS-1/AlterEventEnrollment-Response-currentState.ta.mjs";
// export { AlterEventEnrollment_Response_currentState, _decode_AlterEventEnrollment_Response_currentState, _encode_AlterEventEnrollment_Response_currentState } from "../ISO-9506-MMS-1/AlterEventEnrollment-Response-currentState.ta.mjs";
import { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";
// export { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";


/**
 * @summary AlterEventEnrollment_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlterEventEnrollment-Response ::= SEQUENCE {
 *    currentState                  [0] CHOICE {
 *        state                         [0] IMPLICIT EE-State,
 *        undefined                     [1] IMPLICIT NULL   },
 *    transitionTime                [1] EventTime    }
 * ```
 * 
 * @class
 */
export
class AlterEventEnrollment_Response {
    constructor (
        /**
         * @summary `currentState`.
         * @public
         * @readonly
         */
        readonly currentState: AlterEventEnrollment_Response_currentState,
        /**
         * @summary `transitionTime`.
         * @public
         * @readonly
         */
        readonly transitionTime: EventTime
    ) {}

    /**
     * @summary Restructures an object into a AlterEventEnrollment_Response
     * @description
     * 
     * This takes an `object` and converts it to a `AlterEventEnrollment_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlterEventEnrollment_Response`.
     * @returns {AlterEventEnrollment_Response}
     */
    public static _from_object (_o: { [_K in keyof (AlterEventEnrollment_Response)]: (AlterEventEnrollment_Response)[_K] }): AlterEventEnrollment_Response {
        return new AlterEventEnrollment_Response(_o.currentState, _o.transitionTime);
    }


}

/**
 * @summary The Leading Root Component Types of AlterEventEnrollment_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AlterEventEnrollment_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("currentState", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("transitionTime", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AlterEventEnrollment_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AlterEventEnrollment_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AlterEventEnrollment_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AlterEventEnrollment_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AlterEventEnrollment_Response: $.ASN1Decoder<AlterEventEnrollment_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlterEventEnrollment_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlterEventEnrollment_Response (el: _Element): AlterEventEnrollment_Response {
    if (!_cached_decoder_for_AlterEventEnrollment_Response) { _cached_decoder_for_AlterEventEnrollment_Response = function (el: _Element): AlterEventEnrollment_Response {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AlterEventEnrollment-Response contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "currentState";
    sequence[1].name = "transitionTime";
    let currentState!: AlterEventEnrollment_Response_currentState;
    let transitionTime!: EventTime;
    currentState = $._decode_explicit<AlterEventEnrollment_Response_currentState>(() => _decode_AlterEventEnrollment_Response_currentState)(sequence[0]);
    transitionTime = $._decode_explicit<EventTime>(() => _decode_EventTime)(sequence[1]);
    return new AlterEventEnrollment_Response(
        currentState,
        transitionTime,

    );
}; }
    return _cached_decoder_for_AlterEventEnrollment_Response(el);
}

let _cached_encoder_for_AlterEventEnrollment_Response: $.ASN1Encoder<AlterEventEnrollment_Response> | null = null;

/**
 * @summary Encodes a(n) AlterEventEnrollment_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlterEventEnrollment_Response, encoded as an ASN.1 Element.
 */
export
function _encode_AlterEventEnrollment_Response (value: AlterEventEnrollment_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlterEventEnrollment_Response) { _cached_encoder_for_AlterEventEnrollment_Response = function (value: AlterEventEnrollment_Response, elGetter: $.ASN1Encoder<AlterEventEnrollment_Response>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_AlterEventEnrollment_Response_currentState, $.BER)(value.currentState, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_EventTime, $.BER)(value.transitionTime, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AlterEventEnrollment_Response(value, elGetter);
}


/* eslint-enable */
