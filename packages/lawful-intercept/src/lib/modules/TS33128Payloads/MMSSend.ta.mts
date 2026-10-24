/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    type UTF8String,
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
import { MMSSubject, _decode_MMSSubject, _encode_MMSSubject } from "../TS33128Payloads/MMSSubject.ta.mjs";
// export { MMSSubject, _decode_MMSSubject, _encode_MMSSubject } from "../TS33128Payloads/MMSSubject.ta.mjs";
import { MMSMessageClass, _decode_MMSMessageClass, _encode_MMSMessageClass, _enum_for_MMSMessageClass } from "../TS33128Payloads/MMSMessageClass.ta.mjs";
// export { MMSMessageClass, _enum_for_MMSMessageClass, MMSMessageClass_personal /* IMPORTED_LONG_ENUMERATION_ITEM */, personal /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_advertisement /* IMPORTED_LONG_ENUMERATION_ITEM */, advertisement /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_informational /* IMPORTED_LONG_ENUMERATION_ITEM */, informational /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_auto /* IMPORTED_LONG_ENUMERATION_ITEM */, auto /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSMessageClass, _encode_MMSMessageClass } from "../TS33128Payloads/MMSMessageClass.ta.mjs";
import { MMSExpiry, _decode_MMSExpiry, _encode_MMSExpiry } from "../TS33128Payloads/MMSExpiry.ta.mjs";
// export { MMSExpiry, _decode_MMSExpiry, _encode_MMSExpiry } from "../TS33128Payloads/MMSExpiry.ta.mjs";
import { MMSPriority, _decode_MMSPriority, _encode_MMSPriority, _enum_for_MMSPriority } from "../TS33128Payloads/MMSPriority.ta.mjs";
// export { MMSPriority, _enum_for_MMSPriority, MMSPriority_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSPriority_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSPriority_high /* IMPORTED_LONG_ENUMERATION_ITEM */, high /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSPriority, _encode_MMSPriority } from "../TS33128Payloads/MMSPriority.ta.mjs";
import { MMState, _decode_MMState, _encode_MMState, _enum_for_MMState } from "../TS33128Payloads/MMState.ta.mjs";
// export { MMState, _enum_for_MMState, MMState_draft /* IMPORTED_LONG_ENUMERATION_ITEM */, draft /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_sent /* IMPORTED_LONG_ENUMERATION_ITEM */, sent /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_new /* IMPORTED_LONG_ENUMERATION_ITEM */, new_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMState, _encode_MMState } from "../TS33128Payloads/MMState.ta.mjs";
import { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
// export { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
import { MMSReplyCharging, _decode_MMSReplyCharging, _encode_MMSReplyCharging, _enum_for_MMSReplyCharging } from "../TS33128Payloads/MMSReplyCharging.ta.mjs";
// export { MMSReplyCharging, _enum_for_MMSReplyCharging, MMSReplyCharging_requested /* IMPORTED_LONG_ENUMERATION_ITEM */, requested /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_requestedTextOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedTextOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_accepted /* IMPORTED_LONG_ENUMERATION_ITEM */, accepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_acceptedTextOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, acceptedTextOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSReplyCharging, _encode_MMSReplyCharging } from "../TS33128Payloads/MMSReplyCharging.ta.mjs";
import { MMSContentClass, _decode_MMSContentClass, _encode_MMSContentClass, _enum_for_MMSContentClass } from "../TS33128Payloads/MMSContentClass.ta.mjs";
// export { MMSContentClass, _enum_for_MMSContentClass, MMSContentClass_text /* IMPORTED_LONG_ENUMERATION_ITEM */, text /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_imageBasic /* IMPORTED_LONG_ENUMERATION_ITEM */, imageBasic /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_imageRich /* IMPORTED_LONG_ENUMERATION_ITEM */, imageRich /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_videoBasic /* IMPORTED_LONG_ENUMERATION_ITEM */, videoBasic /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_videoRich /* IMPORTED_LONG_ENUMERATION_ITEM */, videoRich /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_megaPixel /* IMPORTED_LONG_ENUMERATION_ITEM */, megaPixel /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_contentBasic /* IMPORTED_LONG_ENUMERATION_ITEM */, contentBasic /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_contentRich /* IMPORTED_LONG_ENUMERATION_ITEM */, contentRich /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSContentClass, _encode_MMSContentClass } from "../TS33128Payloads/MMSContentClass.ta.mjs";
import { MMSAdaptation, _decode_MMSAdaptation, _encode_MMSAdaptation } from "../TS33128Payloads/MMSAdaptation.ta.mjs";
// export { MMSAdaptation, _decode_MMSAdaptation, _encode_MMSAdaptation } from "../TS33128Payloads/MMSAdaptation.ta.mjs";
import { MMSContentType, _decode_MMSContentType, _encode_MMSContentType } from "../TS33128Payloads/MMSContentType.ta.mjs";
// export { MMSContentType, _decode_MMSContentType, _encode_MMSContentType } from "../TS33128Payloads/MMSContentType.ta.mjs";
import { MMSResponseStatus, _decode_MMSResponseStatus, _encode_MMSResponseStatus, _enum_for_MMSResponseStatus } from "../TS33128Payloads/MMSResponseStatus.ta.mjs";
// export { MMSResponseStatus, _enum_for_MMSResponseStatus, MMSResponseStatus_ok /* IMPORTED_LONG_ENUMERATION_ITEM */, ok /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorUnspecified /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnspecified /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageFormatCorrupt /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorUnsupportedMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnsupportedMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorTransientPartialSuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientPartialSuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentMessageFormatCorrupt /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingForwardingDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingForwardingDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentReplyChargingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentAddressHidingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentAddressHidingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSResponseStatus_errorPermanentLackOfPrepaid /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentLackOfPrepaid /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSResponseStatus, _encode_MMSResponseStatus } from "../TS33128Payloads/MMSResponseStatus.ta.mjs";


/**
 * @summary MMSSend
 * @description
 * 
 * The IRI-POI in the MMS Proxy-Relay shall generate an xIRI containing an
 * MMSSend record when the MMS Proxy-Relay sends m-send-conf (as defined in
 * OMA-TS-MMS_ENC [39] clause 6.1.1) to local target UE.
 *
 * 3GPP TS 33.128, clause 7.4.3.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSSend ::= SEQUENCE
 * {
 *     transactionID       [1]  UTF8String,
 *     version             [2]  MMSVersion,
 *     dateTime            [3]  Timestamp,
 *     originatingMMSParty [4]  MMSParty,
 *     terminatingMMSParty [5]  SEQUENCE OF MMSParty OPTIONAL,
 *     cCRecipients        [6]  SEQUENCE OF MMSParty OPTIONAL,
 *     bCCRecipients       [7]  SEQUENCE OF MMSParty OPTIONAL,
 *     direction           [8]  MMSDirection,
 *     subject             [9]  MMSSubject OPTIONAL,
 *     messageClass        [10]  MMSMessageClass OPTIONAL,
 *     expiry              [11] MMSExpiry,
 *     desiredDeliveryTime [12] Timestamp OPTIONAL,
 *     priority            [13] MMSPriority OPTIONAL,
 *     senderVisibility    [14] BOOLEAN OPTIONAL,
 *     deliveryReport      [15] BOOLEAN OPTIONAL,
 *     readReport          [16] BOOLEAN OPTIONAL,
 *     store               [17] BOOLEAN OPTIONAL,
 *     state               [18] MMState OPTIONAL,
 *     flags               [19] MMFlags OPTIONAL,
 *     replyCharging       [20] MMSReplyCharging OPTIONAL,
 *     applicID            [21] UTF8String OPTIONAL,
 *     replyApplicID       [22] UTF8String OPTIONAL,
 *     auxApplicInfo       [23] UTF8String OPTIONAL,
 *     contentClass        [24] MMSContentClass OPTIONAL,
 *     dRMContent          [25] BOOLEAN OPTIONAL,
 *     adaptationAllowed   [26] MMSAdaptation OPTIONAL,
 *     contentType         [27] MMSContentType,
 *     responseStatus      [28] MMSResponseStatus,
 *     responseStatusText  [29] UTF8String OPTIONAL,
 *     messageID           [30] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class MMSSend {
    /**
     * @summary `transactionID`.
     * @description
     *
     * An ID used to correlate an MMS request and response between the target
     * and the MMS Proxy-Relay. As defined in OMA-TS-MMS_ENC [39] clause 7.3.63.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
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
     * 3GPP TS 33.128, clause 7.4.3.1.
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
     * originating MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly dateTime: Timestamp;
    /**
     * @summary `originatingMMSParty`.
     * @description
     *
     * ID(s) of the originating party in one or more of the formats described in
     * clause 7.4.2.1. When address translation occurs (such as the case of a
     * token sent by the client and replaced with a proper address by the MMS
     * Proxy-Relay), both the pre and post translated addresses (with
     * appropriate correlation) are included.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
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
     * appropriate correlation) are included. This parameter is included if the
     * corresponding MM includes a "TO" field. At least one of the
     * terminatingMMSParty, cCRecipients, or bCCRecipients must be included.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
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
     * parameter is included if the corresponding MM includes a "CC" field. At
     * least one of the terminatingMMSParty, cCRecipients, or bCCRecipients must
     * be included.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
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
     * parameter is included if the corresponding MM includes a "BCC" field. At
     * least one of the terminatingMMSParty, cCRecipients, or bCCRecipients must
     * be included.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
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
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly direction: MMSDirection;
    /**
     * @summary `subject`.
     * @description
     *
     * The subject of the MM. Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly subject: OPTIONAL<MMSSubject>;
    /**
     * @summary `messageClass`.
     * @description
     *
     * Class of the MM. For example, a value of "auto" is automatically
     * generated by the UE. If the field is not present, the class should be
     * interpreted as "personal". Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly messageClass: OPTIONAL<MMSMessageClass>;
    /**
     * @summary `expiry`.
     * @description
     *
     * Length of time in seconds the MM will be stored in MMS Proxy-Relay or
     * time to delete the MM. The field has two formats, either absolute or
     * relative.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly expiry: MMSExpiry;
    /**
     * @summary `desiredDeliveryTime`.
     * @description
     *
     * Date and Time of desired delivery. Indicates the earliest possible
     * delivery of the MM to the recipient. Include if sent to the MMS
     * Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly desiredDeliveryTime: OPTIONAL<Timestamp>;
    /**
     * @summary `priority`.
     * @description
     *
     * Priority of the MM assigned by the originator MMS Client. Include if sent
     * to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly priority: OPTIONAL<MMSPriority>;
    /**
     * @summary `senderVisibility`.
     * @description
     *
     * An indication that the sender's address should not be delivered to the
     * recipient. Sent by the target to indicate the target's visibility to the
     * other party or if not signalled by the target and the default is to not
     * make target visible to the other party. The values given in
     * OMA-TS-MMS_ENC [39] clause 7.3.52 shall be encoded as follows: "Show" =
     * True, "Hide" = False. Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly senderVisibility: OPTIONAL<BOOLEAN>;
    /**
     * @summary `deliveryReport`.
     * @description
     *
     * Specifies whether the originator MM UE requests a delivery report from
     * each recipient. Sent by the target to indicate the desired delivery
     * report. The values given in OMA-TS-MMS_ENC [39] clause 7.3.13. shall be
     * encoded as follows: "Yes" = True, "No" = False. Include if sent to the
     * MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly deliveryReport: OPTIONAL<BOOLEAN>;
    /**
     * @summary `readReport`.
     * @description
     *
     * Specifies whether the originator MM UE requests a read report from each
     * recipient. Sent by the target to indicate the desired read report. The
     * values given in OMA-TS-MMS_ENC [39] clause 7.3.37 shall be encoded as
     * follows: "Yes" = True, "No" = False. Include if sent to the MMS
     * Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly readReport: OPTIONAL<BOOLEAN>;
    /**
     * @summary `store`.
     * @description
     *
     * Specifies whether the originator MM UE wants the submitted MM to be saved
     * in the user's MMBox, in addition to sending it.Sent by the target to
     * indicate the MM is to be stored. The values given in OMA-TS-MMS_ENC [39]
     * clause 7.3.56 shall be encoded as follows: "Yes" = True, "No" = False.
     * Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly store: OPTIONAL<BOOLEAN>;
    /**
     * @summary `state`.
     * @description
     *
     * Identifies the value of the MM State associated with a to be stored or
     * stored MM. See OMA-TS-MMS_ENC [39] clause 7.3.33. Include if sent to the
     * MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
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
     * associated with a stored MM. See OMA-TS-MMS_ENC [39] clause 7.3.32.
     * Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly flags: OPTIONAL<MMFlags>;
    /**
     * @summary `replyCharging`.
     * @description
     *
     * If this field is present its value is set to "accepted" or "accepted text
     * only" and the MMS-version-value of the M-Notification.ind PDU is higher
     * than 1.0, this header field will indicate that a reply to this particular
     * MM is free of charge for the recipient. If the Reply-Charging service is
     * offered and the request for reply-charging has been accepted by the MMS
     * service provider the value of this header field SHALL be set to
     * "accepted" or "accepted text only". See OMA-TS-MMS_ENC [39] clause
     * 7.3.43. Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly replyCharging: OPTIONAL<MMSReplyCharging>;
    /**
     * @summary `applicID`.
     * @description
     *
     * Identification of the originating application of the original MM. Sent by
     * the target to identify the destination application as defined in
     * OMA-TS-MMS_ENC [39] clause 7.3.2. Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly applicID: OPTIONAL<UTF8String>;
    /**
     * @summary `replyApplicID`.
     * @description
     *
     * Identification of an application to which replies, delivery reports, and
     * read reports are addressed. Sent by the target to identify the
     * application to which replies, delivery reports, and read reports are
     * addressed as defined in OMA-TS-MMS_ENC [39] clause 7.3.42. Include if
     * sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly replyApplicID: OPTIONAL<UTF8String>;
    /**
     * @summary `auxApplicInfo`.
     * @description
     *
     * Auxiliary application addressing information as indicated in the original
     * MM. As defined in OMA-TS-MMS_ENC [39] clause 7.3.4. Include if sent to
     * the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly auxApplicInfo: OPTIONAL<UTF8String>;
    /**
     * @summary `contentClass`.
     * @description
     *
     * Classifies the content of the MM to the smallest content class to which
     * the message belongs. Sent by the target to identify the class of the
     * content. See OMA-TS-MMS_ENC [39] clause 7.3.9. Include if sent to the MMS
     * Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly contentClass: OPTIONAL<MMSContentClass>;
    /**
     * @summary `dRMContent`.
     * @description
     *
     * Indicates if the MM contains any DRM-protected element. Provide when sent
     * by the target to indicate if the MM contains any DRM-protected element.
     * The values given in OMA-TS-MMS_ENC [39] clause 7.3.16 shall be encoded as
     * follows: "Yes" = True, "No" = False. Include if sent to the MMS
     * Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly dRMContent: OPTIONAL<BOOLEAN>;
    /**
     * @summary `adaptationAllowed`.
     * @description
     *
     * Provide when sent by the target to identify whether the target wishes the
     * MM to be adapted or not. If overridden, an indication shall be included
     * in the parameter. Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly adaptationAllowed: OPTIONAL<MMSAdaptation>;
    /**
     * @summary `contentType`.
     * @description
     *
     * The content type of the MM. See OMA-TS-MMS_ENC [39] clause 7.3.11.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly contentType: MMSContentType;
    /**
     * @summary `responseStatus`.
     * @description
     *
     * MMS specific status. See OMA-TS-MMS_ENC [39] clause 7.3.48.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
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
     * 3GPP TS 33.128, clause 7.4.3.1.
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
     * defined in OMA-TS-MMS_ENC [39] clause 7.3.29.
     *
     * 3GPP TS 33.128, clause 7.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly messageID: UTF8String;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        transactionID: UTF8String,
        version: MMSVersion,
        dateTime: Timestamp,
        originatingMMSParty: MMSParty,
        terminatingMMSParty: OPTIONAL<MMSParty[]>,
        cCRecipients: OPTIONAL<MMSParty[]>,
        bCCRecipients: OPTIONAL<MMSParty[]>,
        direction: MMSDirection,
        subject: OPTIONAL<MMSSubject>,
        messageClass: OPTIONAL<MMSMessageClass>,
        expiry: MMSExpiry,
        desiredDeliveryTime: OPTIONAL<Timestamp>,
        priority: OPTIONAL<MMSPriority>,
        senderVisibility: OPTIONAL<BOOLEAN>,
        deliveryReport: OPTIONAL<BOOLEAN>,
        readReport: OPTIONAL<BOOLEAN>,
        store: OPTIONAL<BOOLEAN>,
        state: OPTIONAL<MMState>,
        flags: OPTIONAL<MMFlags>,
        replyCharging: OPTIONAL<MMSReplyCharging>,
        applicID: OPTIONAL<UTF8String>,
        replyApplicID: OPTIONAL<UTF8String>,
        auxApplicInfo: OPTIONAL<UTF8String>,
        contentClass: OPTIONAL<MMSContentClass>,
        dRMContent: OPTIONAL<BOOLEAN>,
        adaptationAllowed: OPTIONAL<MMSAdaptation>,
        contentType: MMSContentType,
        responseStatus: MMSResponseStatus,
        responseStatusText: OPTIONAL<UTF8String>,
        messageID: UTF8String,
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
        this.subject = subject;
        this.messageClass = messageClass;
        this.expiry = expiry;
        this.desiredDeliveryTime = desiredDeliveryTime;
        this.priority = priority;
        this.senderVisibility = senderVisibility;
        this.deliveryReport = deliveryReport;
        this.readReport = readReport;
        this.store = store;
        this.state = state;
        this.flags = flags;
        this.replyCharging = replyCharging;
        this.applicID = applicID;
        this.replyApplicID = replyApplicID;
        this.auxApplicInfo = auxApplicInfo;
        this.contentClass = contentClass;
        this.dRMContent = dRMContent;
        this.adaptationAllowed = adaptationAllowed;
        this.contentType = contentType;
        this.responseStatus = responseStatus;
        this.responseStatusText = responseStatusText;
        this.messageID = messageID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMSSend
     * @description
     * 
     * This takes an `object` and converts it to a `MMSSend`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSSend`.
     * @returns {MMSSend}
     */
    public static _from_object (_o: { [_K in keyof (MMSSend)]: (MMSSend)[_K] }): MMSSend {
        return new MMSSend(_o.transactionID, _o.version, _o.dateTime, _o.originatingMMSParty, _o.terminatingMMSParty, _o.cCRecipients, _o.bCCRecipients, _o.direction, _o.subject, _o.messageClass, _o.expiry, _o.desiredDeliveryTime, _o.priority, _o.senderVisibility, _o.deliveryReport, _o.readReport, _o.store, _o.state, _o.flags, _o.replyCharging, _o.applicID, _o.replyApplicID, _o.auxApplicInfo, _o.contentClass, _o.dRMContent, _o.adaptationAllowed, _o.contentType, _o.responseStatus, _o.responseStatusText, _o.messageID, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_MMSDirection;        /**
         * @summary The enum used as the type of the component `messageClass`
         * @public
         * @static
         */

    public static _enum_for_messageClass = _enum_for_MMSMessageClass;        /**
         * @summary The enum used as the type of the component `priority`
         * @public
         * @static
         */

    public static _enum_for_priority = _enum_for_MMSPriority;        /**
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
         * @summary The enum used as the type of the component `contentClass`
         * @public
         * @static
         */

    public static _enum_for_contentClass = _enum_for_MMSContentClass;        /**
         * @summary The enum used as the type of the component `responseStatus`
         * @public
         * @static
         */

    public static _enum_for_responseStatus = _enum_for_MMSResponseStatus;
}

/**
 * @summary The Leading Root Component Types of MMSSend
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSSend: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dateTime", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("originatingMMSParty", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("terminatingMMSParty", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("cCRecipients", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("bCCRecipients", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("subject", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("expiry", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("desiredDeliveryTime", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("senderVisibility", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("deliveryReport", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("readReport", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("store", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("state", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("flags", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("replyCharging", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("applicID", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("replyApplicID", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("auxApplicInfo", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("contentClass", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("dRMContent", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("adaptationAllowed", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("contentType", false, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("responseStatus", false, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("responseStatusText", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Trailing Root Component Types of MMSSend
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSSend: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSSend
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSSend: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSSend: $.ASN1Decoder<MMSSend> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSSend
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSSend (el: _Element): MMSSend {
    if (!_cached_decoder_for_MMSSend) { _cached_decoder_for_MMSSend = function (el: _Element): MMSSend {
    let transactionID!: UTF8String;
    let version!: MMSVersion;
    let dateTime!: Timestamp;
    let originatingMMSParty!: MMSParty;
    let terminatingMMSParty: OPTIONAL<MMSParty[]>;
    let cCRecipients: OPTIONAL<MMSParty[]>;
    let bCCRecipients: OPTIONAL<MMSParty[]>;
    let direction!: MMSDirection;
    let subject: OPTIONAL<MMSSubject>;
    let messageClass: OPTIONAL<MMSMessageClass>;
    let expiry!: MMSExpiry;
    let desiredDeliveryTime: OPTIONAL<Timestamp>;
    let priority: OPTIONAL<MMSPriority>;
    let senderVisibility: OPTIONAL<BOOLEAN>;
    let deliveryReport: OPTIONAL<BOOLEAN>;
    let readReport: OPTIONAL<BOOLEAN>;
    let store: OPTIONAL<BOOLEAN>;
    let state: OPTIONAL<MMState>;
    let flags: OPTIONAL<MMFlags>;
    let replyCharging: OPTIONAL<MMSReplyCharging>;
    let applicID: OPTIONAL<UTF8String>;
    let replyApplicID: OPTIONAL<UTF8String>;
    let auxApplicInfo: OPTIONAL<UTF8String>;
    let contentClass: OPTIONAL<MMSContentClass>;
    let dRMContent: OPTIONAL<BOOLEAN>;
    let adaptationAllowed: OPTIONAL<MMSAdaptation>;
    let contentType!: MMSContentType;
    let responseStatus!: MMSResponseStatus;
    let responseStatusText: OPTIONAL<UTF8String>;
    let messageID!: UTF8String;
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
        "subject": (_el: _Element): void => { subject = $._decode_implicit<MMSSubject>(() => _decode_MMSSubject)(_el); },
        "messageClass": (_el: _Element): void => { messageClass = $._decode_implicit<MMSMessageClass>(() => _decode_MMSMessageClass)(_el); },
        "expiry": (_el: _Element): void => { expiry = $._decode_implicit<MMSExpiry>(() => _decode_MMSExpiry)(_el); },
        "desiredDeliveryTime": (_el: _Element): void => { desiredDeliveryTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<MMSPriority>(() => _decode_MMSPriority)(_el); },
        "senderVisibility": (_el: _Element): void => { senderVisibility = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "deliveryReport": (_el: _Element): void => { deliveryReport = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "readReport": (_el: _Element): void => { readReport = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "store": (_el: _Element): void => { store = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "state": (_el: _Element): void => { state = $._decode_implicit<MMState>(() => _decode_MMState)(_el); },
        "flags": (_el: _Element): void => { flags = $._decode_implicit<MMFlags>(() => _decode_MMFlags)(_el); },
        "replyCharging": (_el: _Element): void => { replyCharging = $._decode_implicit<MMSReplyCharging>(() => _decode_MMSReplyCharging)(_el); },
        "applicID": (_el: _Element): void => { applicID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "replyApplicID": (_el: _Element): void => { replyApplicID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "auxApplicInfo": (_el: _Element): void => { auxApplicInfo = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "contentClass": (_el: _Element): void => { contentClass = $._decode_implicit<MMSContentClass>(() => _decode_MMSContentClass)(_el); },
        "dRMContent": (_el: _Element): void => { dRMContent = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "adaptationAllowed": (_el: _Element): void => { adaptationAllowed = $._decode_implicit<MMSAdaptation>(() => _decode_MMSAdaptation)(_el); },
        "contentType": (_el: _Element): void => { contentType = $._decode_implicit<MMSContentType>(() => _decode_MMSContentType)(_el); },
        "responseStatus": (_el: _Element): void => { responseStatus = $._decode_implicit<MMSResponseStatus>(() => _decode_MMSResponseStatus)(_el); },
        "responseStatusText": (_el: _Element): void => { responseStatusText = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSSend,
        _extension_additions_list_spec_for_MMSSend,
        _root_component_type_list_2_spec_for_MMSSend,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MMSSend(
        transactionID,
        version,
        dateTime,
        originatingMMSParty,
        terminatingMMSParty,
        cCRecipients,
        bCCRecipients,
        direction,
        subject,
        messageClass,
        expiry,
        desiredDeliveryTime,
        priority,
        senderVisibility,
        deliveryReport,
        readReport,
        store,
        state,
        flags,
        replyCharging,
        applicID,
        replyApplicID,
        auxApplicInfo,
        contentClass,
        dRMContent,
        adaptationAllowed,
        contentType,
        responseStatus,
        responseStatusText,
        messageID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MMSSend(el);
}

let _cached_encoder_for_MMSSend: $.ASN1Encoder<MMSSend> | null = null;

/**
 * @summary Encodes a(n) MMSSend into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSSend, encoded as an ASN.1 Element.
 */
export
function _encode_MMSSend (value: MMSSend, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSSend) { _cached_encoder_for_MMSSend = function (value: MMSSend, elGetter: $.ASN1Encoder<MMSSend>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(30 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSVersion, $.BER)(value.version, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Timestamp, $.BER)(value.dateTime, $.BER);
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
    if (value.subject !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_MMSSubject, $.BER)(value.subject, $.BER);
    }
    if (value.messageClass !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_MMSMessageClass, $.BER)(value.messageClass, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => _encode_MMSExpiry, $.BER)(value.expiry, $.BER);
    if (value.desiredDeliveryTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_Timestamp, $.BER)(value.desiredDeliveryTime, $.BER);
    }
    if (value.priority !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_MMSPriority, $.BER)(value.priority, $.BER);
    }
    if (value.senderVisibility !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeBoolean, $.BER)(value.senderVisibility, $.BER);
    }
    if (value.deliveryReport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeBoolean, $.BER)(value.deliveryReport, $.BER);
    }
    if (value.readReport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeBoolean, $.BER)(value.readReport, $.BER);
    }
    if (value.store !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeBoolean, $.BER)(value.store, $.BER);
    }
    if (value.state !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_MMState, $.BER)(value.state, $.BER);
    }
    if (value.flags !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_MMFlags, $.BER)(value.flags, $.BER);
    }
    if (value.replyCharging !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_MMSReplyCharging, $.BER)(value.replyCharging, $.BER);
    }
    if (value.applicID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeUTF8String, $.BER)(value.applicID, $.BER);
    }
    if (value.replyApplicID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeUTF8String, $.BER)(value.replyApplicID, $.BER);
    }
    if (value.auxApplicInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeUTF8String, $.BER)(value.auxApplicInfo, $.BER);
    }
    if (value.contentClass !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_MMSContentClass, $.BER)(value.contentClass, $.BER);
    }
    if (value.dRMContent !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeBoolean, $.BER)(value.dRMContent, $.BER);
    }
    if (value.adaptationAllowed !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_MMSAdaptation, $.BER)(value.adaptationAllowed, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 27, () => _encode_MMSContentType, $.BER)(value.contentType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 28, () => _encode_MMSResponseStatus, $.BER)(value.responseStatus, $.BER);
    if (value.responseStatusText !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeUTF8String, $.BER)(value.responseStatusText, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 30, () => $._encodeUTF8String, $.BER)(value.messageID, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMSSend(value, elGetter);
}


/* eslint-enable */
