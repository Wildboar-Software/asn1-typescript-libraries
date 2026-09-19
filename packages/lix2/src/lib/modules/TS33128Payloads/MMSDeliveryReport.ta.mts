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
import { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
// export { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
import { MMSParty, _decode_MMSParty, _encode_MMSParty } from "../TS33128Payloads/MMSParty.ta.mjs";
// export { MMSParty, _decode_MMSParty, _encode_MMSParty } from "../TS33128Payloads/MMSParty.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { MMSResponseStatus, _enum_for_MMSResponseStatus, MMSResponseStatus_ok /* IMPORTED_LONG_ENUMERATION_ITEM */, ok /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorUnspecified /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnspecified /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageFormatCorrupt /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorUnsupportedMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnsupportedMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientPartialSuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientPartialSuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentMessageFormatCorrupt /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingForwardingDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingForwardingDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentAddressHidingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentAddressHidingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentLackOfPrepaid /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentLackOfPrepaid /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSResponseStatus, _encode_MMSResponseStatus } from "../TS33128Payloads/MMSResponseStatus.ta.mjs";
// export { MMSResponseStatus, _enum_for_MMSResponseStatus, MMSResponseStatus_ok /* IMPORTED_LONG_ENUMERATION_ITEM */, ok /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorUnspecified /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnspecified /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageFormatCorrupt /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorUnsupportedMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnsupportedMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientPartialSuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientPartialSuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentMessageFormatCorrupt /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingForwardingDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingForwardingDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentAddressHidingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentAddressHidingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentLackOfPrepaid /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentLackOfPrepaid /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSResponseStatus, _encode_MMSResponseStatus } from "../TS33128Payloads/MMSResponseStatus.ta.mjs";


/**
 * @summary MMSDeliveryReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSDeliveryReport ::= SEQUENCE
 * {
 *     version             [1] MMSVersion,
 *     messageID           [2] UTF8String,
 *     terminatingMMSParty [3] SEQUENCE OF MMSParty,
 *     mMSDateTime         [4] Timestamp,
 *     responseStatus      [5] MMSResponseStatus,
 *     responseStatusText  [6] UTF8String OPTIONAL,
 *     applicID            [7] UTF8String OPTIONAL,
 *     replyApplicID       [8] UTF8String OPTIONAL,
 *     auxApplicInfo       [9] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMSDeliveryReport {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: MMSVersion,
        /**
         * @summary `messageID`.
         * @public
         * @readonly
         */
        readonly messageID: UTF8String,
        /**
         * @summary `terminatingMMSParty`.
         * @public
         * @readonly
         */
        readonly terminatingMMSParty: MMSParty[],
        /**
         * @summary `mMSDateTime`.
         * @public
         * @readonly
         */
        readonly mMSDateTime: Timestamp,
        /**
         * @summary `responseStatus`.
         * @public
         * @readonly
         */
        readonly responseStatus: MMSResponseStatus,
        /**
         * @summary `responseStatusText`.
         * @public
         * @readonly
         */
        readonly responseStatusText: OPTIONAL<UTF8String>,
        /**
         * @summary `applicID`.
         * @public
         * @readonly
         */
        readonly applicID: OPTIONAL<UTF8String>,
        /**
         * @summary `replyApplicID`.
         * @public
         * @readonly
         */
        readonly replyApplicID: OPTIONAL<UTF8String>,
        /**
         * @summary `auxApplicInfo`.
         * @public
         * @readonly
         */
        readonly auxApplicInfo: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a MMSDeliveryReport
     * @description
     * 
     * This takes an `object` and converts it to a `MMSDeliveryReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSDeliveryReport`.
     * @returns {MMSDeliveryReport}
     */
    public static _from_object (_o: { [_K in keyof (MMSDeliveryReport)]: (MMSDeliveryReport)[_K] }): MMSDeliveryReport {
        return new MMSDeliveryReport(_o.version, _o.messageID, _o.terminatingMMSParty, _o.mMSDateTime, _o.responseStatus, _o.responseStatusText, _o.applicID, _o.replyApplicID, _o.auxApplicInfo);
    }

        /**
         * @summary The enum used as the type of the component `responseStatus`
         * @public
         * @static
         */

    public static _enum_for_responseStatus = _enum_for_MMSResponseStatus;
}

/**
 * @summary The Leading Root Component Types of MMSDeliveryReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSDeliveryReport: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("terminatingMMSParty", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mMSDateTime", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("responseStatus", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("responseStatusText", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("applicID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("replyApplicID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("auxApplicInfo", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of MMSDeliveryReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSDeliveryReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSDeliveryReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSDeliveryReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSDeliveryReport: $.ASN1Decoder<MMSDeliveryReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSDeliveryReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSDeliveryReport (el: _Element): MMSDeliveryReport {
    if (!_cached_decoder_for_MMSDeliveryReport) { _cached_decoder_for_MMSDeliveryReport = function (el: _Element): MMSDeliveryReport {
    let version!: MMSVersion;
    let messageID!: UTF8String;
    let terminatingMMSParty!: MMSParty[];
    let mMSDateTime!: Timestamp;
    let responseStatus!: MMSResponseStatus;
    let responseStatusText: OPTIONAL<UTF8String>;
    let applicID: OPTIONAL<UTF8String>;
    let replyApplicID: OPTIONAL<UTF8String>;
    let auxApplicInfo: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "terminatingMMSParty": (_el: _Element): void => { terminatingMMSParty = $._decode_implicit<MMSParty[]>(() => $._decodeSequenceOf<MMSParty>(() => _decode_MMSParty))(_el); },
        "mMSDateTime": (_el: _Element): void => { mMSDateTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "responseStatus": (_el: _Element): void => { responseStatus = $._decode_implicit<MMSResponseStatus>(() => _decode_MMSResponseStatus)(_el); },
        "responseStatusText": (_el: _Element): void => { responseStatusText = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "applicID": (_el: _Element): void => { applicID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "replyApplicID": (_el: _Element): void => { replyApplicID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "auxApplicInfo": (_el: _Element): void => { auxApplicInfo = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSDeliveryReport,
        _extension_additions_list_spec_for_MMSDeliveryReport,
        _root_component_type_list_2_spec_for_MMSDeliveryReport,
        undefined,
    );
    return new MMSDeliveryReport(
        version,
        messageID,
        terminatingMMSParty,
        mMSDateTime,
        responseStatus,
        responseStatusText,
        applicID,
        replyApplicID,
        auxApplicInfo
    );
}; }
    return _cached_decoder_for_MMSDeliveryReport(el);
}

let _cached_encoder_for_MMSDeliveryReport: $.ASN1Encoder<MMSDeliveryReport> | null = null;

/**
 * @summary Encodes a(n) MMSDeliveryReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSDeliveryReport, encoded as an ASN.1 Element.
 */
export
function _encode_MMSDeliveryReport (value: MMSDeliveryReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSDeliveryReport) { _cached_encoder_for_MMSDeliveryReport = function (value: MMSDeliveryReport, elGetter: $.ASN1Encoder<MMSDeliveryReport>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSVersion, $.BER)(value.version, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.messageID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.terminatingMMSParty, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Timestamp, $.BER)(value.mMSDateTime, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_MMSResponseStatus, $.BER)(value.responseStatus, $.BER),
            /* IF_ABSENT  */ ((value.responseStatusText === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.responseStatusText, $.BER)),
            /* IF_ABSENT  */ ((value.applicID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.applicID, $.BER)),
            /* IF_ABSENT  */ ((value.replyApplicID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeUTF8String, $.BER)(value.replyApplicID, $.BER)),
            /* IF_ABSENT  */ ((value.auxApplicInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.auxApplicInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSDeliveryReport(value, elGetter);
}


/* eslint-enable */
