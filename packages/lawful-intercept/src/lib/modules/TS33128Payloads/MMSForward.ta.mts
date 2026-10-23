/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
// export { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { MMSParty, _decode_MMSParty, _encode_MMSParty } from "../TS33128Payloads/MMSParty.ta.mjs";
// export { MMSParty, _decode_MMSParty, _encode_MMSParty } from "../TS33128Payloads/MMSParty.ta.mjs";
import { MMSDirection, _decode_MMSDirection, _encode_MMSDirection, _enum_for_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
// export { MMSDirection, _enum_for_MMSDirection, MMSDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDirection, _encode_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
import { MMSExpiry, _decode_MMSExpiry, _encode_MMSExpiry } from "../TS33128Payloads/MMSExpiry.ta.mjs";
// export { MMSExpiry, _decode_MMSExpiry, _encode_MMSExpiry } from "../TS33128Payloads/MMSExpiry.ta.mjs";
import { MMState, _decode_MMState, _encode_MMState, _enum_for_MMState } from "../TS33128Payloads/MMState.ta.mjs";
// export { MMState, _enum_for_MMState, MMState_draft /* IMPORTED_LONG_ENUMERATION_ITEM */, draft /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_sent /* IMPORTED_LONG_ENUMERATION_ITEM */, sent /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_new /* IMPORTED_LONG_ENUMERATION_ITEM */, new_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMState, _encode_MMState } from "../TS33128Payloads/MMState.ta.mjs";
import { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
// export { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
import { MMSReplyCharging, _decode_MMSReplyCharging, _encode_MMSReplyCharging, _enum_for_MMSReplyCharging } from "../TS33128Payloads/MMSReplyCharging.ta.mjs";
// export { MMSReplyCharging, _enum_for_MMSReplyCharging, MMSReplyCharging_requested /* IMPORTED_LONG_ENUMERATION_ITEM */, requested /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_requestedTextOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedTextOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_accepted /* IMPORTED_LONG_ENUMERATION_ITEM */, accepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_acceptedTextOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, acceptedTextOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSReplyCharging, _encode_MMSReplyCharging } from "../TS33128Payloads/MMSReplyCharging.ta.mjs";
import { MMSResponseStatus, _decode_MMSResponseStatus, _encode_MMSResponseStatus, _enum_for_MMSResponseStatus } from "../TS33128Payloads/MMSResponseStatus.ta.mjs";
// export { MMSResponseStatus, _enum_for_MMSResponseStatus, MMSResponseStatus_ok /* IMPORTED_LONG_ENUMERATION_ITEM */, ok /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorUnspecified /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnspecified /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageFormatCorrupt /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorUnsupportedMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnsupportedMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientPartialSuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientPartialSuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingForwardingDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingForwardingDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentAddressHidingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentAddressHidingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentLackOfPrepaid /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentLackOfPrepaid /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSResponseStatus, _encode_MMSResponseStatus } from "../TS33128Payloads/MMSResponseStatus.ta.mjs";
import { MMSStoreStatus, _decode_MMSStoreStatus, _encode_MMSStoreStatus, _enum_for_MMSStoreStatus } from "../TS33128Payloads/MMSStoreStatus.ta.mjs";
// export { MMSStoreStatus, _enum_for_MMSStoreStatus, MMSStoreStatus_success /* IMPORTED_LONG_ENUMERATION_ITEM */, success /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStoreStatus_errorTransientFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorTransientNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStoreStatus_errorMMBoxFull /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMMBoxFull /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSStoreStatus, _encode_MMSStoreStatus } from "../TS33128Payloads/MMSStoreStatus.ta.mjs";


/**
 * @summary MMSForward
 * @description
 * 
 * The IRI-POI in the MMS Proxy-Relay shall generate an xIRI containing an
 * MMSForward record when the MMS Proxy-Relay sends an m-forward-conf (as
 * defined in OMA-TS-MMS_ENC [39] clause 6.5.2) to the MMS client in the target
 * UE.
 *
 * 3GPP TS 33.128, clause 7.4.3.8.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @summary `transactionID`.
     * @description
     *
     * An ID used to correlate an MMS request and response between the target
     * and the MMS Proxy-Relay. As defined in OMA-TS-MMS_ENC [39] clause 7.3.63.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly transactionID: UTF8String;
    /**
     * @summary `version`.
     * @description
     *
     * The version of MM, to include major and minor version.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly version: MMSVersion;
    /**
     * @summary `dateTime`.
     * @description
     *
     * Date and Time when the MM was last handled (either originated or
     * forwarded). For origination, included by the sending MMS client or the
     * originating MMS Proxy-Relay. Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly dateTime: OPTIONAL<Timestamp>;
    /**
     * @summary `originatingMMSParty`.
     * @description
     *
     * ID(s) of the originating (forwarding) party in one or more of the formats
     * described in clause 7.4.2.1. When address translation occurs (such as the
     * case of a token sent by the client and replaced with a proper address to
     * the MMS Proxy-Relay), both the pre and post translated addresses (with
     * appropriate correlation) are included.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly originatingMMSParty: MMSParty;
    /**
     * @summary `terminatingMMSParty`.
     * @description
     *
     * ID(s) of the terminating party in one or more of the formats described in
     * clause 7.4.2.1. When address translation occurs (such as the case of a
     * token sent by the client and replaced with a proper address by the MMS
     * Proxy-Relay), both the pre and post translated addresses (with
     * appropriate correlation) are included. Include if sent to the MMS
     * Proxy-Relay. At least one of the terminatingMMSParty, cCRecipients, or
     * bCCRecipients must be included.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly terminatingMMSParty: OPTIONAL<MMSParty[]>;
    /**
     * @summary `cCRecipients`.
     * @description
     *
     * Address of a recipient; the "CC" field may include addresses of multiple
     * recipients. When address translation occurs, both the pre and post
     * translated addresses (with appropriate correlation) are included. This
     * parameter is included if the corresponding MM includes a "CC" field.
     * Include if sent to the MMS Proxy-Relay. At least one of the
     * terminatingMMSParty, cCRecipients, or bCCRecipients must be included.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly cCRecipients: OPTIONAL<MMSParty[]>;
    /**
     * @summary `bCCRecipients`.
     * @description
     *
     * Address of a recipient; the "BCC" field may include addresses of multiple
     * recipients. When address translation occurs, both the pre and post
     * translated addresses (with appropriate correlation) are included. This
     * parameter is included if the corresponding MM includes a "BCC" field.
     * Include if sent to the MMS Proxy-Relay. At least one of the
     * terminatingMMSParty, cCRecipients, or bCCRecipients must be included.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly bCCRecipients: OPTIONAL<MMSParty[]>;
    /**
     * @summary `direction`.
     * @description
     *
     * Indicates the direction of the MM. This shall be encoded as "from
     * target".
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly direction: MMSDirection;
    /**
     * @summary `expiry`.
     * @description
     *
     * Length of time in seconds the MM will be stored in MMS Proxy-Relay or
     * time to delete the MM. The field has two formats, either absolute or
     * relative. Include either the signalled expiry or the default, whichever
     * applies. Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly expiry: OPTIONAL<MMSExpiry>;
    /**
     * @summary `desiredDeliveryTime`.
     * @description
     *
     * Date and Time of desired delivery. Indicates the earliest possible
     * delivery of the MM to the recipient. Include if sent to the MMS
     * Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly desiredDeliveryTime: OPTIONAL<Timestamp>;
    /**
     * @summary `deliveryReportAllowed`.
     * @description
     *
     * An indication that the target requested reporting to the original sender
     * or the default, whichever applies. The values given in OMA-TS-MMS_ENC
     * [39] clause 7.3.47 shall be encoded as follows: "Yes" = True, "No" =
     * False. Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly deliveryReportAllowed: OPTIONAL<BOOLEAN>;
    /**
     * @summary `deliveryReport`.
     * @description
     *
     * Specifies whether the originator MMS UE requests a delivery report from
     * each recipient. The values given in OMA-TS-MMS_ENC [39] clause 7.3.13.
     * shall be encoded as follows: "Yes" = True, "No" = False. Include if sent
     * to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly deliveryReport: OPTIONAL<BOOLEAN>;
    /**
     * @summary `store`.
     * @description
     *
     * Specifies whether the originator MMS UE wants the submitted MM to be
     * saved in the user's MMBox, in addition to sending it. Sent by the target
     * to have the forwarded MM stored. The values given in OMA-TS-MMS_ENC [39]
     * clause 7.3.56 shall be encoded as follows: "Yes" = True, "No" = False.
     * Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly store: OPTIONAL<BOOLEAN>;
    /**
     * @summary `state`.
     * @description
     *
     * Identifies the value of the MM State associated with a MM to be stored or
     * stored MM. Sets the state for the forwarded MM when it is stored. As
     * defined in OMA-TS-MMS_ENC [39] clause 7.3.33. Include if sent to the MMS
     * Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly state: OPTIONAL<MMState>;
    /**
     * @summary `flags`.
     * @description
     *
     * Identifies a keyword to add or remove from the list of keywords
     * associated with a stored MM. Include if sent to the MMS Proxy-relay. See
     * OMA-TS-MMS_ENC [39] clause 7.3.32.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly flags: OPTIONAL<MMFlags>;
    /**
     * @summary `contentLocationReq`.
     * @description
     *
     * The content-location-value field defines the URL for the MMS server
     * location of the content to be retrieved as it appears in the
     * m-forward-req. As defined in OMA-TS-MMS_ENC [39] clause 7.3.10.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly contentLocationReq: UTF8String;
    /**
     * @summary `replyCharging`.
     * @description
     *
     * If this field is present its value is set to "accepted" or "accepted text
     * only" and the MMS-version-value is higher than 1.0, this header field
     * will indicate that a reply to this particular MM is free of charge for
     * the recipient. If the Reply-Charging service is offered and the request
     * for reply-charging has been accepted by the MMS service provider the
     * value of this header field SHALL be set to "accepted" or "accepted text
     * only". See OMA-TS-MMS_ENC [39] clause 7.3.43. Include if sent to the MMS
     * Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly replyCharging: OPTIONAL<MMSReplyCharging>;
    /**
     * @summary `responseStatus`.
     * @description
     *
     * MMS specific status. See OMA-TS-MMS_ENC [39] clause 7.3.48.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly responseStatus: MMSResponseStatus;
    /**
     * @summary `responseStatusText`.
     * @description
     *
     * Text that qualifies the Response Status. Include if sent to the target.
     * As defined in OMA-TS-MMS_ENC [39] clause 7.3.49. Include if sent by the
     * MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly responseStatusText: OPTIONAL<UTF8String>;
    /**
     * @summary `messageID`.
     * @description
     *
     * An ID assigned by the MMS Proxy-Relay to uniquely identify an MM. As
     * defined in OMA-TS-MMS_ENC [39] clause 7.3.29. Include if sent by the MMS
     * Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly messageID: OPTIONAL<UTF8String>;
    /**
     * @summary `contentLocationConf`.
     * @description
     *
     * The content-location-value field defines the URL for the MMS server
     * location of the MM as it appears in the m-forward-conf. As defined in
     * OMA-TS-MMS_ENC [39] clause 7.3.10. Include if sent by the MMS
     * Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly contentLocationConf: OPTIONAL<UTF8String>;
    /**
     * @summary `storeStatus`.
     * @description
     *
     * Indicates if the MM was successfully stored in the MMBox. Include if sent
     * by the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly storeStatus: OPTIONAL<MMSStoreStatus>;
    /**
     * @summary `storeStatusText`.
     * @description
     *
     * Text that qualifies the Store Status. As defined in OMA-TS-MMS_ENC [39]
     * clause 7.3.59. Include if sent by the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly storeStatusText: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        transactionID: UTF8String,
        version: MMSVersion,
        dateTime: OPTIONAL<Timestamp>,
        originatingMMSParty: MMSParty,
        terminatingMMSParty: OPTIONAL<MMSParty[]>,
        cCRecipients: OPTIONAL<MMSParty[]>,
        bCCRecipients: OPTIONAL<MMSParty[]>,
        direction: MMSDirection,
        expiry: OPTIONAL<MMSExpiry>,
        desiredDeliveryTime: OPTIONAL<Timestamp>,
        deliveryReportAllowed: OPTIONAL<BOOLEAN>,
        deliveryReport: OPTIONAL<BOOLEAN>,
        store: OPTIONAL<BOOLEAN>,
        state: OPTIONAL<MMState>,
        flags: OPTIONAL<MMFlags>,
        contentLocationReq: UTF8String,
        replyCharging: OPTIONAL<MMSReplyCharging>,
        responseStatus: MMSResponseStatus,
        responseStatusText?: OPTIONAL<UTF8String>,
        messageID?: OPTIONAL<UTF8String>,
        contentLocationConf?: OPTIONAL<UTF8String>,
        storeStatus?: OPTIONAL<MMSStoreStatus>,
        storeStatusText?: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.transactionID = transactionID;
        this.version = version;
        this.dateTime = dateTime;
        this.originatingMMSParty = originatingMMSParty;
        this.terminatingMMSParty = terminatingMMSParty;
        this.cCRecipients = cCRecipients;
        this.bCCRecipients = bCCRecipients;
        this.direction = direction;
        this.expiry = expiry;
        this.desiredDeliveryTime = desiredDeliveryTime;
        this.deliveryReportAllowed = deliveryReportAllowed;
        this.deliveryReport = deliveryReport;
        this.store = store;
        this.state = state;
        this.flags = flags;
        this.contentLocationReq = contentLocationReq;
        this.replyCharging = replyCharging;
        this.responseStatus = responseStatus;
        this.responseStatusText = responseStatusText;
        this.messageID = messageID;
        this.contentLocationConf = contentLocationConf;
        this.storeStatus = storeStatus;
        this.storeStatusText = storeStatusText;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new MMSForward(_o.transactionID, _o.version, _o.dateTime, _o.originatingMMSParty, _o.terminatingMMSParty, _o.cCRecipients, _o.bCCRecipients, _o.direction, _o.expiry, _o.desiredDeliveryTime, _o.deliveryReportAllowed, _o.deliveryReport, _o.store, _o.state, _o.flags, _o.contentLocationReq, _o.replyCharging, _o.responseStatus, _o.responseStatusText, _o.messageID, _o.contentLocationConf, _o.storeStatus, _o.storeStatusText, _o._unrecognizedExtensionsList);
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
    const _unrecognizedExtensionsList: _Element[] = [];
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
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
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
        storeStatusText,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(23 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSVersion, $.BER)(value.version, $.BER);
    if (value.dateTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Timestamp, $.BER)(value.dateTime, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMSParty, $.BER)(value.originatingMMSParty, $.BER);
    if (value.terminatingMMSParty !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.terminatingMMSParty, $.BER);
    }
    if (value.cCRecipients !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.cCRecipients, $.BER);
    }
    if (value.bCCRecipients !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.bCCRecipients, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_MMSDirection, $.BER)(value.direction, $.BER);
    if (value.expiry !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_MMSExpiry, $.BER)(value.expiry, $.BER);
    }
    if (value.desiredDeliveryTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_Timestamp, $.BER)(value.desiredDeliveryTime, $.BER);
    }
    if (value.deliveryReportAllowed !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.deliveryReportAllowed, $.BER);
    }
    if (value.deliveryReport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER)(value.deliveryReport, $.BER);
    }
    if (value.store !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeBoolean, $.BER)(value.store, $.BER);
    }
    if (value.state !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_MMState, $.BER)(value.state, $.BER);
    }
    if (value.flags !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_MMFlags, $.BER)(value.flags, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => $._encodeUTF8String, $.BER)(value.contentLocationReq, $.BER);
    if (value.replyCharging !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_MMSReplyCharging, $.BER)(value.replyCharging, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 18, () => _encode_MMSResponseStatus, $.BER)(value.responseStatus, $.BER);
    if (value.responseStatusText !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeUTF8String, $.BER)(value.responseStatusText, $.BER);
    }
    if (value.messageID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeUTF8String, $.BER)(value.messageID, $.BER);
    }
    if (value.contentLocationConf !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeUTF8String, $.BER)(value.contentLocationConf, $.BER);
    }
    if (value.storeStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_MMSStoreStatus, $.BER)(value.storeStatus, $.BER);
    }
    if (value.storeStatusText !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeUTF8String, $.BER)(value.storeStatusText, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMSForward(value, elGetter);
}


/* eslint-enable */
