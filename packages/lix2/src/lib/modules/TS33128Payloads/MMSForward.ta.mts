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
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { MMSParty, _decode_MMSParty, _encode_MMSParty } from "../TS33128Payloads/MMSParty.ta.mjs";
// export { MMSParty, _decode_MMSParty, _encode_MMSParty } from "../TS33128Payloads/MMSParty.ta.mjs";
import { MMSDirection, _enum_for_MMSDirection, MMSDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDirection, _encode_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
// export { MMSDirection, _enum_for_MMSDirection, MMSDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDirection, _encode_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
import { MMSExpiry, _decode_MMSExpiry, _encode_MMSExpiry } from "../TS33128Payloads/MMSExpiry.ta.mjs";
// export { MMSExpiry, _decode_MMSExpiry, _encode_MMSExpiry } from "../TS33128Payloads/MMSExpiry.ta.mjs";
import { MMState, _enum_for_MMState, MMState_draft /* IMPORTED_LONG_ENUMERATION_ITEM */, draft /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_sent /* IMPORTED_LONG_ENUMERATION_ITEM */, sent /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_new /* IMPORTED_LONG_ENUMERATION_ITEM */, new_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMState, _encode_MMState } from "../TS33128Payloads/MMState.ta.mjs";
// export { MMState, _enum_for_MMState, MMState_draft /* IMPORTED_LONG_ENUMERATION_ITEM */, draft /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_sent /* IMPORTED_LONG_ENUMERATION_ITEM */, sent /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_new /* IMPORTED_LONG_ENUMERATION_ITEM */, new_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMState, _encode_MMState } from "../TS33128Payloads/MMState.ta.mjs";
import { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
// export { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
import { MMSReplyCharging, _enum_for_MMSReplyCharging, MMSReplyCharging_requested /* IMPORTED_LONG_ENUMERATION_ITEM */, requested /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_requestedTextOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedTextOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_accepted /* IMPORTED_LONG_ENUMERATION_ITEM */, accepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_acceptedTextOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, acceptedTextOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSReplyCharging, _encode_MMSReplyCharging } from "../TS33128Payloads/MMSReplyCharging.ta.mjs";
// export { MMSReplyCharging, _enum_for_MMSReplyCharging, MMSReplyCharging_requested /* IMPORTED_LONG_ENUMERATION_ITEM */, requested /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_requestedTextOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedTextOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_accepted /* IMPORTED_LONG_ENUMERATION_ITEM */, accepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_acceptedTextOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, acceptedTextOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSReplyCharging, _encode_MMSReplyCharging } from "../TS33128Payloads/MMSReplyCharging.ta.mjs";
import { MMSResponseStatus, _enum_for_MMSResponseStatus, MMSResponseStatus_ok /* IMPORTED_LONG_ENUMERATION_ITEM */, ok /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorUnspecified /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnspecified /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageFormatCorrupt /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorUnsupportedMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnsupportedMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientPartialSuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientPartialSuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingForwardingDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingForwardingDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentAddressHidingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentAddressHidingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentLackOfPrepaid /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentLackOfPrepaid /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSResponseStatus, _encode_MMSResponseStatus } from "../TS33128Payloads/MMSResponseStatus.ta.mjs";
// export { MMSResponseStatus, _enum_for_MMSResponseStatus, MMSResponseStatus_ok /* IMPORTED_LONG_ENUMERATION_ITEM */, ok /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorUnspecified /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnspecified /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageFormatCorrupt /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorUnsupportedMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnsupportedMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientPartialSuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientPartialSuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingForwardingDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingForwardingDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentAddressHidingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentAddressHidingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentLackOfPrepaid /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentLackOfPrepaid /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSResponseStatus, _encode_MMSResponseStatus } from "../TS33128Payloads/MMSResponseStatus.ta.mjs";
import { MMSStoreStatus, _enum_for_MMSStoreStatus, MMSStoreStatus_success /* IMPORTED_LONG_ENUMERATION_ITEM */, success /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStoreStatus_errorTransientFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorTransientNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorMMBoxFull /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMMBoxFull /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSStoreStatus, _encode_MMSStoreStatus } from "../TS33128Payloads/MMSStoreStatus.ta.mjs";
// export { MMSStoreStatus, _enum_for_MMSStoreStatus, MMSStoreStatus_success /* IMPORTED_LONG_ENUMERATION_ITEM */, success /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStoreStatus_errorTransientFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorTransientNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorMMBoxFull /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMMBoxFull /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSStoreStatus, _encode_MMSStoreStatus } from "../TS33128Payloads/MMSStoreStatus.ta.mjs";


/**
 * @summary MMSForward
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSForward ::= SEQUENCE
 * {
 *     transactionID         [1]  UTF8String,
 *     version               [2]  MMSVersion,
 *     dateTime              [3]  Timestamp OPTIONAL,
 *     originatingMMSParty   [4]  MMSParty,
 *     terminatingMMSParty   [5]  SEQUENCE OF MMSParty OPTIONAL,
 *     cCRecipients          [6]  SEQUENCE OF MMSParty OPTIONAL,
 *     bCCRecipients         [7]  SEQUENCE OF MMSParty OPTIONAL,
 *     direction             [8]  MMSDirection,
 *     expiry                [9]  MMSExpiry OPTIONAL,
 *     desiredDeliveryTime   [10] Timestamp OPTIONAL,
 *     deliveryReportAllowed [11] BOOLEAN OPTIONAL,
 *     deliveryReport        [12] BOOLEAN OPTIONAL,
 *     store                 [13] BOOLEAN OPTIONAL,
 *     state                 [14] MMState OPTIONAL,
 *     flags                 [15] MMFlags OPTIONAL,
 *     contentLocationReq    [16] UTF8String,
 *     replyCharging         [17] MMSReplyCharging OPTIONAL,
 *     responseStatus        [18] MMSResponseStatus,
 *     responseStatusText    [19] UTF8String  OPTIONAL,
 *     messageID             [20] UTF8String OPTIONAL,
 *     contentLocationConf   [21] UTF8String OPTIONAL,
 *     storeStatus           [22] MMSStoreStatus OPTIONAL,
 *     storeStatusText       [23] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMSForward {
    constructor (
        /**
         * @summary `transactionID`.
         * @public
         * @readonly
         */
        readonly transactionID: UTF8String,
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: MMSVersion,
        /**
         * @summary `dateTime`.
         * @public
         * @readonly
         */
        readonly dateTime: OPTIONAL<Timestamp>,
        /**
         * @summary `originatingMMSParty`.
         * @public
         * @readonly
         */
        readonly originatingMMSParty: MMSParty,
        /**
         * @summary `terminatingMMSParty`.
         * @public
         * @readonly
         */
        readonly terminatingMMSParty: OPTIONAL<MMSParty[]>,
        /**
         * @summary `cCRecipients`.
         * @public
         * @readonly
         */
        readonly cCRecipients: OPTIONAL<MMSParty[]>,
        /**
         * @summary `bCCRecipients`.
         * @public
         * @readonly
         */
        readonly bCCRecipients: OPTIONAL<MMSParty[]>,
        /**
         * @summary `direction`.
         * @public
         * @readonly
         */
        readonly direction: MMSDirection,
        /**
         * @summary `expiry`.
         * @public
         * @readonly
         */
        readonly expiry: OPTIONAL<MMSExpiry>,
        /**
         * @summary `desiredDeliveryTime`.
         * @public
         * @readonly
         */
        readonly desiredDeliveryTime: OPTIONAL<Timestamp>,
        /**
         * @summary `deliveryReportAllowed`.
         * @public
         * @readonly
         */
        readonly deliveryReportAllowed: OPTIONAL<BOOLEAN>,
        /**
         * @summary `deliveryReport`.
         * @public
         * @readonly
         */
        readonly deliveryReport: OPTIONAL<BOOLEAN>,
        /**
         * @summary `store`.
         * @public
         * @readonly
         */
        readonly store: OPTIONAL<BOOLEAN>,
        /**
         * @summary `state`.
         * @public
         * @readonly
         */
        readonly state: OPTIONAL<MMState>,
        /**
         * @summary `flags`.
         * @public
         * @readonly
         */
        readonly flags: OPTIONAL<MMFlags>,
        /**
         * @summary `contentLocationReq`.
         * @public
         * @readonly
         */
        readonly contentLocationReq: UTF8String,
        /**
         * @summary `replyCharging`.
         * @public
         * @readonly
         */
        readonly replyCharging: OPTIONAL<MMSReplyCharging>,
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
         * @summary `messageID`.
         * @public
         * @readonly
         */
        readonly messageID: OPTIONAL<UTF8String>,
        /**
         * @summary `contentLocationConf`.
         * @public
         * @readonly
         */
        readonly contentLocationConf: OPTIONAL<UTF8String>,
        /**
         * @summary `storeStatus`.
         * @public
         * @readonly
         */
        readonly storeStatus: OPTIONAL<MMSStoreStatus>,
        /**
         * @summary `storeStatusText`.
         * @public
         * @readonly
         */
        readonly storeStatusText: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a MMSForward
     * @description
     * 
     * This takes an `object` and converts it to a `MMSForward`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSForward`.
     * @returns {MMSForward}
     */
    public static _from_object (_o: { [_K in keyof (MMSForward)]: (MMSForward)[_K] }): MMSForward {
        return new MMSForward(_o.transactionID, _o.version, _o.dateTime, _o.originatingMMSParty, _o.terminatingMMSParty, _o.cCRecipients, _o.bCCRecipients, _o.direction, _o.expiry, _o.desiredDeliveryTime, _o.deliveryReportAllowed, _o.deliveryReport, _o.store, _o.state, _o.flags, _o.contentLocationReq, _o.replyCharging, _o.responseStatus, _o.responseStatusText, _o.messageID, _o.contentLocationConf, _o.storeStatus, _o.storeStatusText);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_MMSDirection;        /**
         * @summary The enum used as the type of the component `state`
         * @public
         * @static
         */

    public static _enum_for_state = _enum_for_MMState;        /**
         * @summary The enum used as the type of the component `replyCharging`
         * @public
         * @static
         */

    public static _enum_for_replyCharging = _enum_for_MMSReplyCharging;        /**
         * @summary The enum used as the type of the component `responseStatus`
         * @public
         * @static
         */

    public static _enum_for_responseStatus = _enum_for_MMSResponseStatus;        /**
         * @summary The enum used as the type of the component `storeStatus`
         * @public
         * @static
         */

    public static _enum_for_storeStatus = _enum_for_MMSStoreStatus;
}

/**
 * @summary The Leading Root Component Types of MMSForward
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSForward: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dateTime", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("originatingMMSParty", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("terminatingMMSParty", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("cCRecipients", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("bCCRecipients", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("expiry", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("desiredDeliveryTime", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("deliveryReportAllowed", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("deliveryReport", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("store", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("state", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("flags", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("contentLocationReq", false, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("replyCharging", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("responseStatus", false, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("responseStatusText", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("messageID", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("contentLocationConf", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("storeStatus", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("storeStatusText", true, $.hasTag(_TagClass.context, 23))
];

/**
 * @summary The Trailing Root Component Types of MMSForward
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSForward: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSForward
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSForward: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSForward: $.ASN1Decoder<MMSForward> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSForward
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSForward (el: _Element): MMSForward {
    if (!_cached_decoder_for_MMSForward) { _cached_decoder_for_MMSForward = function (el: _Element): MMSForward {
    let transactionID!: UTF8String;
    let version!: MMSVersion;
    let dateTime: OPTIONAL<Timestamp>;
    let originatingMMSParty!: MMSParty;
    let terminatingMMSParty: OPTIONAL<MMSParty[]>;
    let cCRecipients: OPTIONAL<MMSParty[]>;
    let bCCRecipients: OPTIONAL<MMSParty[]>;
    let direction!: MMSDirection;
    let expiry: OPTIONAL<MMSExpiry>;
    let desiredDeliveryTime: OPTIONAL<Timestamp>;
    let deliveryReportAllowed: OPTIONAL<BOOLEAN>;
    let deliveryReport: OPTIONAL<BOOLEAN>;
    let store: OPTIONAL<BOOLEAN>;
    let state: OPTIONAL<MMState>;
    let flags: OPTIONAL<MMFlags>;
    let contentLocationReq!: UTF8String;
    let replyCharging: OPTIONAL<MMSReplyCharging>;
    let responseStatus!: MMSResponseStatus;
    let responseStatusText: OPTIONAL<UTF8String>;
    let messageID: OPTIONAL<UTF8String>;
    let contentLocationConf: OPTIONAL<UTF8String>;
    let storeStatus: OPTIONAL<MMSStoreStatus>;
    let storeStatusText: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "transactionID": (_el: _Element): void => { transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "version": (_el: _Element): void => { version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(_el); },
        "dateTime": (_el: _Element): void => { dateTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "originatingMMSParty": (_el: _Element): void => { originatingMMSParty = $._decode_implicit<MMSParty>(() => _decode_MMSParty)(_el); },
        "terminatingMMSParty": (_el: _Element): void => { terminatingMMSParty = $._decode_implicit<MMSParty[]>(() => $._decodeSequenceOf<MMSParty>(() => _decode_MMSParty))(_el); },
        "cCRecipients": (_el: _Element): void => { cCRecipients = $._decode_implicit<MMSParty[]>(() => $._decodeSequenceOf<MMSParty>(() => _decode_MMSParty))(_el); },
        "bCCRecipients": (_el: _Element): void => { bCCRecipients = $._decode_implicit<MMSParty[]>(() => $._decodeSequenceOf<MMSParty>(() => _decode_MMSParty))(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<MMSDirection>(() => _decode_MMSDirection)(_el); },
        "expiry": (_el: _Element): void => { expiry = $._decode_implicit<MMSExpiry>(() => _decode_MMSExpiry)(_el); },
        "desiredDeliveryTime": (_el: _Element): void => { desiredDeliveryTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "deliveryReportAllowed": (_el: _Element): void => { deliveryReportAllowed = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "deliveryReport": (_el: _Element): void => { deliveryReport = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "store": (_el: _Element): void => { store = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "state": (_el: _Element): void => { state = $._decode_implicit<MMState>(() => _decode_MMState)(_el); },
        "flags": (_el: _Element): void => { flags = $._decode_implicit<MMFlags>(() => _decode_MMFlags)(_el); },
        "contentLocationReq": (_el: _Element): void => { contentLocationReq = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "replyCharging": (_el: _Element): void => { replyCharging = $._decode_implicit<MMSReplyCharging>(() => _decode_MMSReplyCharging)(_el); },
        "responseStatus": (_el: _Element): void => { responseStatus = $._decode_implicit<MMSResponseStatus>(() => _decode_MMSResponseStatus)(_el); },
        "responseStatusText": (_el: _Element): void => { responseStatusText = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "contentLocationConf": (_el: _Element): void => { contentLocationConf = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "storeStatus": (_el: _Element): void => { storeStatus = $._decode_implicit<MMSStoreStatus>(() => _decode_MMSStoreStatus)(_el); },
        "storeStatusText": (_el: _Element): void => { storeStatusText = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSForward,
        _extension_additions_list_spec_for_MMSForward,
        _root_component_type_list_2_spec_for_MMSForward,
        undefined,
    );
    return new MMSForward(
        transactionID,
        version,
        dateTime,
        originatingMMSParty,
        terminatingMMSParty,
        cCRecipients,
        bCCRecipients,
        direction,
        expiry,
        desiredDeliveryTime,
        deliveryReportAllowed,
        deliveryReport,
        store,
        state,
        flags,
        contentLocationReq,
        replyCharging,
        responseStatus,
        responseStatusText,
        messageID,
        contentLocationConf,
        storeStatus,
        storeStatusText
    );
}; }
    return _cached_decoder_for_MMSForward(el);
}

let _cached_encoder_for_MMSForward: $.ASN1Encoder<MMSForward> | null = null;

/**
 * @summary Encodes a(n) MMSForward into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSForward, encoded as an ASN.1 Element.
 */
export
function _encode_MMSForward (value: MMSForward, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSForward) { _cached_encoder_for_MMSForward = function (value: MMSForward, elGetter: $.ASN1Encoder<MMSForward>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSVersion, $.BER)(value.version, $.BER),
            /* IF_ABSENT  */ ((value.dateTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Timestamp, $.BER)(value.dateTime, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMSParty, $.BER)(value.originatingMMSParty, $.BER),
            /* IF_ABSENT  */ ((value.terminatingMMSParty === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.terminatingMMSParty, $.BER)),
            /* IF_ABSENT  */ ((value.cCRecipients === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.cCRecipients, $.BER)),
            /* IF_ABSENT  */ ((value.bCCRecipients === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.bCCRecipients, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_MMSDirection, $.BER)(value.direction, $.BER),
            /* IF_ABSENT  */ ((value.expiry === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_MMSExpiry, $.BER)(value.expiry, $.BER)),
            /* IF_ABSENT  */ ((value.desiredDeliveryTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_Timestamp, $.BER)(value.desiredDeliveryTime, $.BER)),
            /* IF_ABSENT  */ ((value.deliveryReportAllowed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.deliveryReportAllowed, $.BER)),
            /* IF_ABSENT  */ ((value.deliveryReport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER)(value.deliveryReport, $.BER)),
            /* IF_ABSENT  */ ((value.store === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeBoolean, $.BER)(value.store, $.BER)),
            /* IF_ABSENT  */ ((value.state === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_MMState, $.BER)(value.state, $.BER)),
            /* IF_ABSENT  */ ((value.flags === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_MMFlags, $.BER)(value.flags, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => $._encodeUTF8String, $.BER)(value.contentLocationReq, $.BER),
            /* IF_ABSENT  */ ((value.replyCharging === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_MMSReplyCharging, $.BER)(value.replyCharging, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 18, () => _encode_MMSResponseStatus, $.BER)(value.responseStatus, $.BER),
            /* IF_ABSENT  */ ((value.responseStatusText === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => $._encodeUTF8String, $.BER)(value.responseStatusText, $.BER)),
            /* IF_ABSENT  */ ((value.messageID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => $._encodeUTF8String, $.BER)(value.messageID, $.BER)),
            /* IF_ABSENT  */ ((value.contentLocationConf === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => $._encodeUTF8String, $.BER)(value.contentLocationConf, $.BER)),
            /* IF_ABSENT  */ ((value.storeStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_MMSStoreStatus, $.BER)(value.storeStatus, $.BER)),
            /* IF_ABSENT  */ ((value.storeStatusText === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => $._encodeUTF8String, $.BER)(value.storeStatusText, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSForward(value, elGetter);
}


/* eslint-enable */
