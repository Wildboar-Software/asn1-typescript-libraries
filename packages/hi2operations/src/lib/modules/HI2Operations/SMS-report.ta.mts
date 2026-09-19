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
import { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
// export { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { SMS_report_sMS_Contents, _decode_SMS_report_sMS_Contents, _encode_SMS_report_sMS_Contents } from "../HI2Operations/SMS-report-sMS-Contents.ta.mjs";
// export { SMS_report_sMS_Contents, _decode_SMS_report_sMS_Contents, _encode_SMS_report_sMS_Contents } from "../HI2Operations/SMS-report-sMS-Contents.ta.mjs";


/**
 * @summary SMS_report
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-report ::= SEQUENCE
 * {
 *     communicationIdentifier        [1] CommunicationIdentifier,
 *         -- used to uniquely identify an intercepted call: the same used for the
 *         -- relevant IRI
 *         -- Called "callIdentifier" in V1.1.1 of ES 201 671 [i.5]
 *     timeStamp                    [2] TimeStamp,
 *         -- date and time of the report. The format is
 *         -- the one defined in case a) of the ASN.1 ITU-T Recommendation X.680 [33].
 *         -- (year month day hour minutes seconds)
 *     sMS-Contents                [3] SEQUENCE
 *     {
 *         initiator            [1] ENUMERATED
 *         {
 *             -- party which sent the SMS
 *             target(0),
 *             server(1),
 *             undefined-party(2),
 *             ...
 *         },
 *         transfer-status        [2] ENUMERATED
 *         {
 *             succeed-transfer(0),
 *                 --the transfer of the SMS message succeeds
 *             not-succeed-transfer(1),
 *             undefined(2),
 *             ...
 *         } OPTIONAL,
 *         other-message        [3] ENUMERATED
 *         {
 *             -- In case of terminating call, indicates if the server will send other SMS.
 *             yes(0),
 *             no(1),
 *             undefined(2),
 *             ...
 *         } OPTIONAL,
 *         content                [4] OCTET STRING (SIZE (1..270)) OPTIONAL,
 *             -- Encoded in the format defined for the SMS mobile.
 *             -- The content and enhancedContent fields are mutually exclusive.
 *             -- The content field is dedicated for 3GPP purposes.
 *         ...,
 *         enhancedContent        [5] SEQUENCE
 *         {
 *             content                [1] OCTET STRING,
 *                 -- The character encoding used in the content field is specified in the
 *                 -- character-encoding field.
 *             character-encoding    [2] ENUMERATED
 *             {
 *                 gsm-7-bit-ascii(0),
 *                 eight-bit-ascii(1),
 *                 eight-bit-binary(2),
 *                 ucs-2(3),
 *                 utf-8(4),
 *                 utf-16(5),
 *                 other(6),
 *                 ...
 *             }
 *         } OPTIONAL
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class SMS_report {
    constructor (
        /**
         * @summary `communicationIdentifier`.
         * @public
         * @readonly
         */
        readonly communicationIdentifier: CommunicationIdentifier,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: TimeStamp,
        /**
         * @summary `sMS_Contents`.
         * @public
         * @readonly
         */
        readonly sMS_Contents: SMS_report_sMS_Contents
    ) {}

    /**
     * @summary Restructures an object into a SMS_report
     * @description
     * 
     * This takes an `object` and converts it to a `SMS_report`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMS_report`.
     * @returns {SMS_report}
     */
    public static _from_object (_o: { [_K in keyof (SMS_report)]: (SMS_report)[_K] }): SMS_report {
        return new SMS_report(_o.communicationIdentifier, _o.timeStamp, _o.sMS_Contents);
    }


}

/**
 * @summary The Leading Root Component Types of SMS_report
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMS_report: $.ComponentSpec[] = [
    new $.ComponentSpec("communicationIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sMS-Contents", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of SMS_report
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMS_report: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMS_report
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMS_report: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMS_report: $.ASN1Decoder<SMS_report> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_report
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMS_report (el: _Element): SMS_report {
    if (!_cached_decoder_for_SMS_report) { _cached_decoder_for_SMS_report = function (el: _Element): SMS_report {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("SMS-report contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "communicationIdentifier";
    sequence[1].name = "timeStamp";
    sequence[2].name = "sMS-Contents";
    let communicationIdentifier!: CommunicationIdentifier;
    let timeStamp!: TimeStamp;
    let sMS_Contents!: SMS_report_sMS_Contents;
    communicationIdentifier = $._decode_implicit<CommunicationIdentifier>(() => _decode_CommunicationIdentifier)(sequence[0]);
    timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(sequence[1]);
    sMS_Contents = $._decode_implicit<SMS_report_sMS_Contents>(() => _decode_SMS_report_sMS_Contents)(sequence[2]);
    return new SMS_report(
        communicationIdentifier,
        timeStamp,
        sMS_Contents,

    );
}; }
    return _cached_decoder_for_SMS_report(el);
}

let _cached_encoder_for_SMS_report: $.ASN1Encoder<SMS_report> | null = null;

/**
 * @summary Encodes a(n) SMS_report into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_report, encoded as an ASN.1 Element.
 */
export
function _encode_SMS_report (value: SMS_report, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMS_report) { _cached_encoder_for_SMS_report = function (value: SMS_report, elGetter: $.ASN1Encoder<SMS_report>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CommunicationIdentifier, $.BER)(value.communicationIdentifier, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SMS_report_sMS_Contents, $.BER)(value.sMS_Contents, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMS_report(value, elGetter);
}


/* eslint-enable */
