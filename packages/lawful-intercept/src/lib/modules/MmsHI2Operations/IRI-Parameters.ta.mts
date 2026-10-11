/* eslint-disable */
import {
    GeneralizedTime,
    INTEGER,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../UmtsHI2Operations/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../UmtsHI2Operations/Location.ta.mjs";
import { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../MmsHI2Operations/PartyInformation.ta.mjs";
// export { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../MmsHI2Operations/PartyInformation.ta.mjs";
import { MMSEvent, _decode_MMSEvent, _encode_MMSEvent, _enum_for_MMSEvent } from "../MmsHI2Operations/MMSEvent.ta.mjs";
// export { MMSEvent, _enum_for_MMSEvent, MMSEvent_send /* IMPORTED_LONG_ENUMERATION_ITEM */, send /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSEvent_notification /* IMPORTED_LONG_ENUMERATION_ITEM */, notification /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSEvent_notificationResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, notificationResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSEvent_retrieval /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieval /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSEvent_retrievalAcknowledgement /* IMPORTED_LONG_ENUMERATION_ITEM */, retrievalAcknowledgement /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSEvent_forwarding /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarding /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSEvent_store /* IMPORTED_LONG_ENUMERATION_ITEM */, store /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSEvent_upload /* IMPORTED_LONG_ENUMERATION_ITEM */, upload /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSEvent_delete /* IMPORTED_LONG_ENUMERATION_ITEM */, delete_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSEvent_delivery /* IMPORTED_LONG_ENUMERATION_ITEM */, delivery /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSEvent_readReplyFromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, readReplyFromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSEvent_readReplyToTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, readReplyToTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSEvent_cancel /* IMPORTED_LONG_ENUMERATION_ITEM */, cancel /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSEvent_viewRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, viewRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSEvent_viewConfirm /* IMPORTED_LONG_ENUMERATION_ITEM */, viewConfirm /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSEvent, _encode_MMSEvent } from "../MmsHI2Operations/MMSEvent.ta.mjs";
import { MMSParties, _decode_MMSParties, _encode_MMSParties } from "../MmsHI2Operations/MMSParties.ta.mjs";
// export { MMSParties, _decode_MMSParties, _encode_MMSParties } from "../MmsHI2Operations/MMSParties.ta.mjs";
import { MessageClass, _decode_MessageClass, _encode_MessageClass } from "../MmsHI2Operations/MessageClass.ta.mjs";
// export { MessageClass, _decode_MessageClass, _encode_MessageClass } from "../MmsHI2Operations/MessageClass.ta.mjs";
import { YesNo, _decode_YesNo, _encode_YesNo } from "../MmsHI2Operations/YesNo.ta.mjs";
// export { YesNo, _decode_YesNo, _encode_YesNo } from "../MmsHI2Operations/YesNo.ta.mjs";
import { ElementDescriptor, _decode_ElementDescriptor, _encode_ElementDescriptor } from "../MmsHI2Operations/ElementDescriptor.ta.mjs";
// export { ElementDescriptor, _decode_ElementDescriptor, _encode_ElementDescriptor } from "../MmsHI2Operations/ElementDescriptor.ta.mjs";
import { EncodedString, _decode_EncodedString, _encode_EncodedString } from "../MmsHI2Operations/EncodedString.ta.mjs";
// export { EncodedString, _decode_EncodedString, _encode_EncodedString } from "../MmsHI2Operations/EncodedString.ta.mjs";
import { ContentClass, _decode_ContentClass, _encode_ContentClass, _enum_for_ContentClass } from "../MmsHI2Operations/ContentClass.ta.mjs";
// export { ContentClass, _enum_for_ContentClass, ContentClass_text /* IMPORTED_LONG_ENUMERATION_ITEM */, text /* IMPORTED_SHORT_ENUMERATION_ITEM */, ContentClass_image_basic /* IMPORTED_LONG_ENUMERATION_ITEM */, image_basic /* IMPORTED_SHORT_ENUMERATION_ITEM */, ContentClass_image_rich /* IMPORTED_LONG_ENUMERATION_ITEM */, image_rich /* IMPORTED_SHORT_ENUMERATION_ITEM */, ContentClass_video_basic /* IMPORTED_LONG_ENUMERATION_ITEM */, video_basic /* IMPORTED_SHORT_ENUMERATION_ITEM */, ContentClass_video_rich /* IMPORTED_LONG_ENUMERATION_ITEM */, video_rich /* IMPORTED_SHORT_ENUMERATION_ITEM */, ContentClass_megapixel /* IMPORTED_LONG_ENUMERATION_ITEM */, megapixel /* IMPORTED_SHORT_ENUMERATION_ITEM */, ContentClass_content_basic /* IMPORTED_LONG_ENUMERATION_ITEM */, content_basic /* IMPORTED_SHORT_ENUMERATION_ITEM */, ContentClass_content_rich /* IMPORTED_LONG_ENUMERATION_ITEM */, content_rich /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ContentClass, _encode_ContentClass } from "../MmsHI2Operations/ContentClass.ta.mjs";
import { ContentLocation, _decode_ContentLocation, _encode_ContentLocation } from "../MmsHI2Operations/ContentLocation.ta.mjs";
// export { ContentLocation, _decode_ContentLocation, _encode_ContentLocation } from "../MmsHI2Operations/ContentLocation.ta.mjs";
import { MMSStatus, _decode_MMSStatus, _encode_MMSStatus, _enum_for_MMSStatus } from "../MmsHI2Operations/MMSStatus.ta.mjs";
// export { MMSStatus, _enum_for_MMSStatus, MMSStatus_expired /* IMPORTED_LONG_ENUMERATION_ITEM */, expired /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStatus_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStatus_rejected /* IMPORTED_LONG_ENUMERATION_ITEM */, rejected /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStatus_deferred /* IMPORTED_LONG_ENUMERATION_ITEM */, deferred /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStatus_unrecognised /* IMPORTED_LONG_ENUMERATION_ITEM */, unrecognised /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStatus_indeterminate /* IMPORTED_LONG_ENUMERATION_ITEM */, indeterminate /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStatus_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, MMSStatus_unreachable /* IMPORTED_LONG_ENUMERATION_ITEM */, unreachable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSStatus, _encode_MMSStatus } from "../MmsHI2Operations/MMSStatus.ta.mjs";
import { PreviouslySentBy, _decode_PreviouslySentBy, _encode_PreviouslySentBy } from "../MmsHI2Operations/PreviouslySentBy.ta.mjs";
// export { PreviouslySentBy, _decode_PreviouslySentBy, _encode_PreviouslySentBy } from "../MmsHI2Operations/PreviouslySentBy.ta.mjs";
import { PreviouslySentByDateTime, _decode_PreviouslySentByDateTime, _encode_PreviouslySentByDateTime } from "../MmsHI2Operations/PreviouslySentByDateTime.ta.mjs";
// export { PreviouslySentByDateTime, _decode_PreviouslySentByDateTime, _encode_PreviouslySentByDateTime } from "../MmsHI2Operations/PreviouslySentByDateTime.ta.mjs";
import { MMSState, _decode_MMSState, _encode_MMSState, _enum_for_MMSState } from "../MmsHI2Operations/MMSState.ta.mjs";
// export { MMSState, _enum_for_MMSState, MMSState_draft /* IMPORTED_LONG_ENUMERATION_ITEM */, draft /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSState_sent /* IMPORTED_LONG_ENUMERATION_ITEM */, sent /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSState_new /* IMPORTED_LONG_ENUMERATION_ITEM */, new_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSState_retreived /* IMPORTED_LONG_ENUMERATION_ITEM */, retreived /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSState_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_MMSState, _encode_MMSState } from "../MmsHI2Operations/MMSState.ta.mjs";
import { ResponseStatus, _decode_ResponseStatus, _encode_ResponseStatus } from "../MmsHI2Operations/ResponseStatus.ta.mjs";
// export { ResponseStatus, _decode_ResponseStatus, _encode_ResponseStatus } from "../MmsHI2Operations/ResponseStatus.ta.mjs";
import { ResponseStatusText, _decode_ResponseStatusText, _encode_ResponseStatusText } from "../MmsHI2Operations/ResponseStatusText.ta.mjs";
// export { ResponseStatusText, _decode_ResponseStatusText, _encode_ResponseStatusText } from "../MmsHI2Operations/ResponseStatusText.ta.mjs";
import { StoreStatus, _decode_StoreStatus, _encode_StoreStatus, _enum_for_StoreStatus } from "../MmsHI2Operations/StoreStatus.ta.mjs";
// export { StoreStatus, _enum_for_StoreStatus, StoreStatus_success /* IMPORTED_LONG_ENUMERATION_ITEM */, success /* IMPORTED_SHORT_ENUMERATION_ITEM */, StoreStatus_errorTransient /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransient /* IMPORTED_SHORT_ENUMERATION_ITEM */, StoreStatus_high /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_StoreStatus, _encode_StoreStatus } from "../MmsHI2Operations/StoreStatus.ta.mjs";
import { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../MmsHI2Operations/MMFlags.ta.mjs";
// export { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../MmsHI2Operations/MMFlags.ta.mjs";
import { MMBoxDescriptionPdus, _decode_MMBoxDescriptionPdus, _encode_MMBoxDescriptionPdus } from "../MmsHI2Operations/MMBoxDescriptionPdus.ta.mjs";
// export { MMBoxDescriptionPdus, _decode_MMBoxDescriptionPdus, _encode_MMBoxDescriptionPdus } from "../MmsHI2Operations/MMBoxDescriptionPdus.ta.mjs";
import { MMSAttributes, _decode_MMSAttributes, _encode_MMSAttributes } from "../MmsHI2Operations/MMSAttributes.ta.mjs";
// export { MMSAttributes, _decode_MMSAttributes, _encode_MMSAttributes } from "../MmsHI2Operations/MMSAttributes.ta.mjs";
import { Priority, _decode_Priority, _encode_Priority, _enum_for_Priority } from "../MmsHI2Operations/Priority.ta.mjs";
// export { Priority, _enum_for_Priority, Priority_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_high /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_Priority, _encode_Priority } from "../MmsHI2Operations/Priority.ta.mjs";
import { MMSCorrelationNumber, _decode_MMSCorrelationNumber, _encode_MMSCorrelationNumber } from "../MmsHI2Operations/MMSCorrelationNumber.ta.mjs";
// export { MMSCorrelationNumber, _decode_MMSCorrelationNumber, _encode_MMSCorrelationNumber } from "../MmsHI2Operations/MMSCorrelationNumber.ta.mjs";
import { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";
// export { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";


/**
 * @summary IRI_Parameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters ::= SEQUENCE
 * {
 *     hi2mmsDomainId                [0]    OBJECT IDENTIFIER,  -- 3GPP HI2 MMS domain
 *     lawfulInterceptionIdentifier            [1] LawfulInterceptionIdentifier,
 *         -- This identifier is associated to the target.
 *     timeStamp                    [3] TimeStamp,
 *         -- date and time of the event triggering the report.
 *     locationOfTheTarget                [4] Location OPTIONAL,
 *         -- location of the target
 *     partyInformation                 [5] SET SIZE (1..10) OF PartyInformation OPTIONAL,
 *         -- This parameter provides the concerned party, the identiy(ies) of the party
 *         -- and all the information provided by the party.
 *     mMSevent                 [7] MMSEvent OPTIONAL,
 * 
 *     serviceCenterAddress                [8] PartyInformation OPTIONAL,
 *         -- this parameter provides the address of the relevant MMS server
 *     mMSParties                [9] MMSParties OPTIONAL,
 *         -- this parameter provides the MMS parties (To, CC, BCC, and From) in the communication. 
 *     mMSVersion                [10] INTEGER OPTIONAL,
 *     transactionID                [11] UTF8String OPTIONAL,
 * 
 *     messageID                    [12] UTF8String OPTIONAL,
 *         -- In accordance with [90] it is encoded as in email address as per RFC2822 [92]. 
 *         -- The characters "<" and ">" are not included. 
 *     mMSDateTime                [13] GeneralizedTime OPTIONAL,
 *     messageClass                [14] MessageClass OPTIONAL,
 *     expiry                    [15] GeneralizedTime OPTIONAL,
 *     distributionIndicator                [16] YesNo OPTIONAL,
 *     elementDescriptor                [17] ElementDescriptor OPTIONAL,
 *     retrievalMode                [18] YesNo OPTIONAL,
 *     -- if retrievalMode is included, it has to be coded to Yes indicating Manual retreival mode 
 *     -- recommended. 
 *     retrievalModeText                [19] EncodedString OPTIONAL,
 *     senderVisibility                [20] YesNo OPTIONAL,
 *     -- Yes indicates Show and No indicates Do Not Show.
 *     deliveryReport                [21] YesNo OPTIONAL,
 *     readReport                [22] YesNo OPTIONAL,
 *     applicID                    [23] UTF8String OPTIONAL,
 *     replyApplicID                [24] UTF8String OPTIONAL,
 *     auxApplicInfo                [25] UTF8String OPTIONAL,
 *     contentClass                [26] ContentClass OPTIONAL,
 *     dRMContent                [27] YesNo OPTIONAL,
 *     replaceID                    [28] UTF8String OPTIONAL,
 *     contentLocation                [29] ContentLocation OPTIONAL,
 *     mMSStatus                [30] MMSStatus OPTIONAL,
 *     reportAllowed                [31] YesNo OPTIONAL,
 *     previouslySentBy                [32] PreviouslySentBy OPTIONAL,
 *     previouslySentByDateTime             [33] PreviouslySentByDateTime OPTIONAL,
 *     mMState                    [34] MMSState OPTIONAL,
 *     desiredDeliveryTime                [35] GeneralizedTime OPTIONAL,
 *     deliveryReportAllowed            [36] YesNo OPTIONAL,
 *     store                    [37] YesNo OPTIONAL,
 *     responseStatus                [38] ResponseStatus OPTIONAL,
 *     responseStatusText                [39] ResponseStatusText OPTIONAL,
 *     storeStatus                [40] StoreStatus OPTIONAL,
 *     storeStatusText                [41] EncodedString OPTIONAL,
 *     -- mMState                [42] MMSState OPTIONAL,  
 *     mMFlags                    [43] MMFlags OPTIONAL,
 *     mMBoxDescriptionPdus            [44] SEQUENCE OF MMBoxDescriptionPdus  OPTIONAL,
 *     cancelID                    [45] UTF8String OPTIONAL,
 * 
 *     cancelStatus                [46] YesNo OPTIONAL,
 *     -- Yes indicates cancel successfully received and No indicates cancel request corrupted.
 *     mMSStart                    [47] INTEGER OPTIONAL,
 *     mMSLimit                    [48] INTEGER OPTIONAL,
 *     mMSAttributes                [49] MMSAttributes OPTIONAL,
 *     mMSTotals                [50] YesNo OPTIONAL,
 *     mMSQuotas                [51] YesNo OPTIONAL,
 *     mMSMessageCount                [52] INTEGER OPTIONAL,
 *     messageSize                [53] INTEGER OPTIONAL,
 *     mMSForwardReqDateTime            [54] GeneralizedTime OPTIONAL,
 *     adaptationAllowed                [55] YesNo OPTIONAL,
 *     priority                    [56] Priority OPTIONAL,
 *     mMSCorrelationNumber            [57] MMSCorrelationNumber OPTIONAL,
 *         -- this parameter provides MMS Correlation number when the event will also provide CC.
 *     contentType                [58] OCTET STRING OPTIONAL,
 *     national-Parameters                [59] National-Parameters OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IRI_Parameters {
    /**
     * @summary `hi2mmsDomainId`.
     * @public
     * @readonly
     */
    readonly hi2mmsDomainId: OBJECT_IDENTIFIER;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @public
     * @readonly
     */
    readonly lawfulInterceptionIdentifier: LawfulInterceptionIdentifier;
    /**
     * @summary `timeStamp`.
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `locationOfTheTarget`.
     * @public
     * @readonly
     */
    readonly locationOfTheTarget: OPTIONAL<Location>;
    /**
     * @summary `partyInformation`.
     * @public
     * @readonly
     */
    readonly partyInformation: OPTIONAL<PartyInformation[]>;
    /**
     * @summary `mMSevent`.
     * @public
     * @readonly
     */
    readonly mMSevent: OPTIONAL<MMSEvent>;
    /**
     * @summary `serviceCenterAddress`.
     * @public
     * @readonly
     */
    readonly serviceCenterAddress: OPTIONAL<PartyInformation>;
    /**
     * @summary `mMSParties`.
     * @public
     * @readonly
     */
    readonly mMSParties: OPTIONAL<MMSParties>;
    /**
     * @summary `mMSVersion`.
     * @public
     * @readonly
     */
    readonly mMSVersion: OPTIONAL<INTEGER>;
    /**
     * @summary `transactionID`.
     * @public
     * @readonly
     */
    readonly transactionID: OPTIONAL<UTF8String>;
    /**
     * @summary `messageID`.
     * @public
     * @readonly
     */
    readonly messageID: OPTIONAL<UTF8String>;
    /**
     * @summary `mMSDateTime`.
     * @public
     * @readonly
     */
    readonly mMSDateTime: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `messageClass`.
     * @public
     * @readonly
     */
    readonly messageClass: OPTIONAL<MessageClass>;
    /**
     * @summary `expiry`.
     * @public
     * @readonly
     */
    readonly expiry: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `distributionIndicator`.
     * @public
     * @readonly
     */
    readonly distributionIndicator: OPTIONAL<YesNo>;
    /**
     * @summary `elementDescriptor`.
     * @public
     * @readonly
     */
    readonly elementDescriptor: OPTIONAL<ElementDescriptor>;
    /**
     * @summary `retrievalMode`.
     * @public
     * @readonly
     */
    readonly retrievalMode: OPTIONAL<YesNo>;
    /**
     * @summary `retrievalModeText`.
     * @public
     * @readonly
     */
    readonly retrievalModeText: OPTIONAL<EncodedString>;
    /**
     * @summary `senderVisibility`.
     * @public
     * @readonly
     */
    readonly senderVisibility: OPTIONAL<YesNo>;
    /**
     * @summary `deliveryReport`.
     * @public
     * @readonly
     */
    readonly deliveryReport: OPTIONAL<YesNo>;
    /**
     * @summary `readReport`.
     * @public
     * @readonly
     */
    readonly readReport: OPTIONAL<YesNo>;
    /**
     * @summary `applicID`.
     * @public
     * @readonly
     */
    readonly applicID: OPTIONAL<UTF8String>;
    /**
     * @summary `replyApplicID`.
     * @public
     * @readonly
     */
    readonly replyApplicID: OPTIONAL<UTF8String>;
    /**
     * @summary `auxApplicInfo`.
     * @public
     * @readonly
     */
    readonly auxApplicInfo: OPTIONAL<UTF8String>;
    /**
     * @summary `contentClass`.
     * @public
     * @readonly
     */
    readonly contentClass: OPTIONAL<ContentClass>;
    /**
     * @summary `dRMContent`.
     * @public
     * @readonly
     */
    readonly dRMContent: OPTIONAL<YesNo>;
    /**
     * @summary `replaceID`.
     * @public
     * @readonly
     */
    readonly replaceID: OPTIONAL<UTF8String>;
    /**
     * @summary `contentLocation`.
     * @public
     * @readonly
     */
    readonly contentLocation: OPTIONAL<ContentLocation>;
    /**
     * @summary `mMSStatus`.
     * @public
     * @readonly
     */
    readonly mMSStatus: OPTIONAL<MMSStatus>;
    /**
     * @summary `reportAllowed`.
     * @public
     * @readonly
     */
    readonly reportAllowed: OPTIONAL<YesNo>;
    /**
     * @summary `previouslySentBy`.
     * @public
     * @readonly
     */
    readonly previouslySentBy: OPTIONAL<PreviouslySentBy>;
    /**
     * @summary `previouslySentByDateTime`.
     * @public
     * @readonly
     */
    readonly previouslySentByDateTime: OPTIONAL<PreviouslySentByDateTime>;
    /**
     * @summary `mMState`.
     * @public
     * @readonly
     */
    readonly mMState: OPTIONAL<MMSState>;
    /**
     * @summary `desiredDeliveryTime`.
     * @public
     * @readonly
     */
    readonly desiredDeliveryTime: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `deliveryReportAllowed`.
     * @public
     * @readonly
     */
    readonly deliveryReportAllowed: OPTIONAL<YesNo>;
    /**
     * @summary `store`.
     * @public
     * @readonly
     */
    readonly store: OPTIONAL<YesNo>;
    /**
     * @summary `responseStatus`.
     * @public
     * @readonly
     */
    readonly responseStatus: OPTIONAL<ResponseStatus>;
    /**
     * @summary `responseStatusText`.
     * @public
     * @readonly
     */
    readonly responseStatusText: OPTIONAL<ResponseStatusText>;
    /**
     * @summary `storeStatus`.
     * @public
     * @readonly
     */
    readonly storeStatus: OPTIONAL<StoreStatus>;
    /**
     * @summary `storeStatusText`.
     * @public
     * @readonly
     */
    readonly storeStatusText: OPTIONAL<EncodedString>;
    /**
     * @summary `mMFlags`.
     * @public
     * @readonly
     */
    readonly mMFlags: OPTIONAL<MMFlags>;
    /**
     * @summary `mMBoxDescriptionPdus`.
     * @public
     * @readonly
     */
    readonly mMBoxDescriptionPdus: OPTIONAL<MMBoxDescriptionPdus[]>;
    /**
     * @summary `cancelID`.
     * @public
     * @readonly
     */
    readonly cancelID: OPTIONAL<UTF8String>;
    /**
     * @summary `cancelStatus`.
     * @public
     * @readonly
     */
    readonly cancelStatus: OPTIONAL<YesNo>;
    /**
     * @summary `mMSStart`.
     * @public
     * @readonly
     */
    readonly mMSStart: OPTIONAL<INTEGER>;
    /**
     * @summary `mMSLimit`.
     * @public
     * @readonly
     */
    readonly mMSLimit: OPTIONAL<INTEGER>;
    /**
     * @summary `mMSAttributes`.
     * @public
     * @readonly
     */
    readonly mMSAttributes: OPTIONAL<MMSAttributes>;
    /**
     * @summary `mMSTotals`.
     * @public
     * @readonly
     */
    readonly mMSTotals: OPTIONAL<YesNo>;
    /**
     * @summary `mMSQuotas`.
     * @public
     * @readonly
     */
    readonly mMSQuotas: OPTIONAL<YesNo>;
    /**
     * @summary `mMSMessageCount`.
     * @public
     * @readonly
     */
    readonly mMSMessageCount: OPTIONAL<INTEGER>;
    /**
     * @summary `messageSize`.
     * @public
     * @readonly
     */
    readonly messageSize: OPTIONAL<INTEGER>;
    /**
     * @summary `mMSForwardReqDateTime`.
     * @public
     * @readonly
     */
    readonly mMSForwardReqDateTime: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `adaptationAllowed`.
     * @public
     * @readonly
     */
    readonly adaptationAllowed: OPTIONAL<YesNo>;
    /**
     * @summary `priority`.
     * @public
     * @readonly
     */
    readonly priority: OPTIONAL<Priority>;
    /**
     * @summary `mMSCorrelationNumber`.
     * @public
     * @readonly
     */
    readonly mMSCorrelationNumber: OPTIONAL<MMSCorrelationNumber>;
    /**
     * @summary `contentType`.
     * @public
     * @readonly
     */
    readonly contentType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `national_Parameters`.
     * @public
     * @readonly
     */
    readonly national_Parameters: OPTIONAL<National_Parameters>;

    constructor (
        hi2mmsDomainId: OBJECT_IDENTIFIER,
        lawfulInterceptionIdentifier: LawfulInterceptionIdentifier,
        timeStamp: TimeStamp,
        locationOfTheTarget: OPTIONAL<Location>,
        partyInformation: OPTIONAL<PartyInformation[]>,
        mMSevent: OPTIONAL<MMSEvent>,
        serviceCenterAddress: OPTIONAL<PartyInformation>,
        mMSParties: OPTIONAL<MMSParties>,
        mMSVersion: OPTIONAL<INTEGER>,
        transactionID: OPTIONAL<UTF8String>,
        messageID: OPTIONAL<UTF8String>,
        mMSDateTime: OPTIONAL<GeneralizedTime>,
        messageClass: OPTIONAL<MessageClass>,
        expiry: OPTIONAL<GeneralizedTime>,
        distributionIndicator: OPTIONAL<YesNo>,
        elementDescriptor: OPTIONAL<ElementDescriptor>,
        retrievalMode: OPTIONAL<YesNo>,
        retrievalModeText: OPTIONAL<EncodedString>,
        senderVisibility: OPTIONAL<YesNo>,
        deliveryReport: OPTIONAL<YesNo>,
        readReport: OPTIONAL<YesNo>,
        applicID: OPTIONAL<UTF8String>,
        replyApplicID: OPTIONAL<UTF8String>,
        auxApplicInfo: OPTIONAL<UTF8String>,
        contentClass: OPTIONAL<ContentClass>,
        dRMContent: OPTIONAL<YesNo>,
        replaceID: OPTIONAL<UTF8String>,
        contentLocation: OPTIONAL<ContentLocation>,
        mMSStatus: OPTIONAL<MMSStatus>,
        reportAllowed: OPTIONAL<YesNo>,
        previouslySentBy: OPTIONAL<PreviouslySentBy>,
        previouslySentByDateTime: OPTIONAL<PreviouslySentByDateTime>,
        mMState: OPTIONAL<MMSState>,
        desiredDeliveryTime: OPTIONAL<GeneralizedTime>,
        deliveryReportAllowed: OPTIONAL<YesNo>,
        store: OPTIONAL<YesNo>,
        responseStatus: OPTIONAL<ResponseStatus>,
        responseStatusText: OPTIONAL<ResponseStatusText>,
        storeStatus: OPTIONAL<StoreStatus>,
        storeStatusText: OPTIONAL<EncodedString>,
        mMFlags: OPTIONAL<MMFlags>,
        mMBoxDescriptionPdus: OPTIONAL<MMBoxDescriptionPdus[]>,
        cancelID: OPTIONAL<UTF8String>,
        cancelStatus: OPTIONAL<YesNo>,
        mMSStart: OPTIONAL<INTEGER>,
        mMSLimit: OPTIONAL<INTEGER>,
        mMSAttributes: OPTIONAL<MMSAttributes>,
        mMSTotals: OPTIONAL<YesNo>,
        mMSQuotas: OPTIONAL<YesNo>,
        mMSMessageCount: OPTIONAL<INTEGER>,
        messageSize: OPTIONAL<INTEGER>,
        mMSForwardReqDateTime: OPTIONAL<GeneralizedTime>,
        adaptationAllowed: OPTIONAL<YesNo>,
        priority: OPTIONAL<Priority>,
        mMSCorrelationNumber: OPTIONAL<MMSCorrelationNumber>,
        contentType: OPTIONAL<OCTET_STRING>,
        national_Parameters: OPTIONAL<National_Parameters>
    ) {
        this.hi2mmsDomainId = hi2mmsDomainId;
        this.lawfulInterceptionIdentifier = lawfulInterceptionIdentifier;
        this.timeStamp = timeStamp;
        this.locationOfTheTarget = locationOfTheTarget;
        this.partyInformation = partyInformation;
        if (this.partyInformation !== undefined && (this.partyInformation.length < 1 || this.partyInformation.length > 10)) {
            throw new ASN1SizeError("partyInformation violates the SIZE constraint");
        }
        this.mMSevent = mMSevent;
        this.serviceCenterAddress = serviceCenterAddress;
        this.mMSParties = mMSParties;
        this.mMSVersion = mMSVersion;
        this.transactionID = transactionID;
        this.messageID = messageID;
        this.mMSDateTime = mMSDateTime;
        this.messageClass = messageClass;
        this.expiry = expiry;
        this.distributionIndicator = distributionIndicator;
        this.elementDescriptor = elementDescriptor;
        this.retrievalMode = retrievalMode;
        this.retrievalModeText = retrievalModeText;
        this.senderVisibility = senderVisibility;
        this.deliveryReport = deliveryReport;
        this.readReport = readReport;
        this.applicID = applicID;
        this.replyApplicID = replyApplicID;
        this.auxApplicInfo = auxApplicInfo;
        this.contentClass = contentClass;
        this.dRMContent = dRMContent;
        this.replaceID = replaceID;
        this.contentLocation = contentLocation;
        this.mMSStatus = mMSStatus;
        this.reportAllowed = reportAllowed;
        this.previouslySentBy = previouslySentBy;
        this.previouslySentByDateTime = previouslySentByDateTime;
        this.mMState = mMState;
        this.desiredDeliveryTime = desiredDeliveryTime;
        this.deliveryReportAllowed = deliveryReportAllowed;
        this.store = store;
        this.responseStatus = responseStatus;
        this.responseStatusText = responseStatusText;
        this.storeStatus = storeStatus;
        this.storeStatusText = storeStatusText;
        this.mMFlags = mMFlags;
        this.mMBoxDescriptionPdus = mMBoxDescriptionPdus;
        this.cancelID = cancelID;
        this.cancelStatus = cancelStatus;
        this.mMSStart = mMSStart;
        this.mMSLimit = mMSLimit;
        this.mMSAttributes = mMSAttributes;
        this.mMSTotals = mMSTotals;
        this.mMSQuotas = mMSQuotas;
        this.mMSMessageCount = mMSMessageCount;
        this.messageSize = messageSize;
        this.mMSForwardReqDateTime = mMSForwardReqDateTime;
        this.adaptationAllowed = adaptationAllowed;
        this.priority = priority;
        this.mMSCorrelationNumber = mMSCorrelationNumber;
        this.contentType = contentType;
        this.national_Parameters = national_Parameters;
    }

    /**
     * @summary Restructures an object into a IRI_Parameters
     * @description
     * 
     * This takes an `object` and converts it to a `IRI_Parameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IRI_Parameters`.
     * @returns {IRI_Parameters}
     */
    public static _from_object (_o: { [_K in keyof (IRI_Parameters)]: (IRI_Parameters)[_K] }): IRI_Parameters {
        return new IRI_Parameters(_o.hi2mmsDomainId, _o.lawfulInterceptionIdentifier, _o.timeStamp, _o.locationOfTheTarget, _o.partyInformation, _o.mMSevent, _o.serviceCenterAddress, _o.mMSParties, _o.mMSVersion, _o.transactionID, _o.messageID, _o.mMSDateTime, _o.messageClass, _o.expiry, _o.distributionIndicator, _o.elementDescriptor, _o.retrievalMode, _o.retrievalModeText, _o.senderVisibility, _o.deliveryReport, _o.readReport, _o.applicID, _o.replyApplicID, _o.auxApplicInfo, _o.contentClass, _o.dRMContent, _o.replaceID, _o.contentLocation, _o.mMSStatus, _o.reportAllowed, _o.previouslySentBy, _o.previouslySentByDateTime, _o.mMState, _o.desiredDeliveryTime, _o.deliveryReportAllowed, _o.store, _o.responseStatus, _o.responseStatusText, _o.storeStatus, _o.storeStatusText, _o.mMFlags, _o.mMBoxDescriptionPdus, _o.cancelID, _o.cancelStatus, _o.mMSStart, _o.mMSLimit, _o.mMSAttributes, _o.mMSTotals, _o.mMSQuotas, _o.mMSMessageCount, _o.messageSize, _o.mMSForwardReqDateTime, _o.adaptationAllowed, _o.priority, _o.mMSCorrelationNumber, _o.contentType, _o.national_Parameters);
    }

        /**
         * @summary The enum used as the type of the component `mMSevent`
         * @public
         * @static
         */

    public static _enum_for_mMSevent = _enum_for_MMSEvent;        /**
         * @summary The enum used as the type of the component `contentClass`
         * @public
         * @static
         */

    public static _enum_for_contentClass = _enum_for_ContentClass;        /**
         * @summary The enum used as the type of the component `mMSStatus`
         * @public
         * @static
         */

    public static _enum_for_mMSStatus = _enum_for_MMSStatus;        /**
         * @summary The enum used as the type of the component `mMState`
         * @public
         * @static
         */

    public static _enum_for_mMState = _enum_for_MMSState;        /**
         * @summary The enum used as the type of the component `storeStatus`
         * @public
         * @static
         */

    public static _enum_for_storeStatus = _enum_for_StoreStatus;        /**
         * @summary The enum used as the type of the component `priority`
         * @public
         * @static
         */

    public static _enum_for_priority = _enum_for_Priority;
}

/**
 * @summary The Leading Root Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    new $.ComponentSpec("hi2mmsDomainId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lawfulInterceptionIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("locationOfTheTarget", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("partyInformation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("mMSevent", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("serviceCenterAddress", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("mMSParties", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("mMSVersion", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("transactionID", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("messageID", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("mMSDateTime", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("expiry", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("distributionIndicator", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("elementDescriptor", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("retrievalMode", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("retrievalModeText", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("senderVisibility", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("deliveryReport", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("readReport", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("applicID", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("replyApplicID", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("auxApplicInfo", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("contentClass", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("dRMContent", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("replaceID", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("contentLocation", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("mMSStatus", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("reportAllowed", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("previouslySentBy", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("previouslySentByDateTime", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("mMState", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("desiredDeliveryTime", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("deliveryReportAllowed", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("store", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("responseStatus", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("responseStatusText", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("storeStatus", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("storeStatusText", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("mMFlags", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("mMBoxDescriptionPdus", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("cancelID", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("cancelStatus", true, $.hasTag(_TagClass.context, 46)),
    new $.ComponentSpec("mMSStart", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("mMSLimit", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("mMSAttributes", true, $.hasTag(_TagClass.context, 49)),
    new $.ComponentSpec("mMSTotals", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("mMSQuotas", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("mMSMessageCount", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("messageSize", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("mMSForwardReqDateTime", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("adaptationAllowed", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("mMSCorrelationNumber", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("contentType", true, $.hasTag(_TagClass.context, 58)),
    new $.ComponentSpec("national-Parameters", true, $.hasTag(_TagClass.context, 59))
];

/**
 * @summary The Trailing Root Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IRI_Parameters: $.ASN1Decoder<IRI_Parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRI_Parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRI_Parameters (el: _Element): IRI_Parameters {
    if (!_cached_decoder_for_IRI_Parameters) { _cached_decoder_for_IRI_Parameters = function (el: _Element): IRI_Parameters {
    let hi2mmsDomainId!: OBJECT_IDENTIFIER;
    let lawfulInterceptionIdentifier!: LawfulInterceptionIdentifier;
    let timeStamp!: TimeStamp;
    let locationOfTheTarget: OPTIONAL<Location>;
    let partyInformation: OPTIONAL<PartyInformation[]>;
    let mMSevent: OPTIONAL<MMSEvent>;
    let serviceCenterAddress: OPTIONAL<PartyInformation>;
    let mMSParties: OPTIONAL<MMSParties>;
    let mMSVersion: OPTIONAL<INTEGER>;
    let transactionID: OPTIONAL<UTF8String>;
    let messageID: OPTIONAL<UTF8String>;
    let mMSDateTime: OPTIONAL<GeneralizedTime>;
    let messageClass: OPTIONAL<MessageClass>;
    let expiry: OPTIONAL<GeneralizedTime>;
    let distributionIndicator: OPTIONAL<YesNo>;
    let elementDescriptor: OPTIONAL<ElementDescriptor>;
    let retrievalMode: OPTIONAL<YesNo>;
    let retrievalModeText: OPTIONAL<EncodedString>;
    let senderVisibility: OPTIONAL<YesNo>;
    let deliveryReport: OPTIONAL<YesNo>;
    let readReport: OPTIONAL<YesNo>;
    let applicID: OPTIONAL<UTF8String>;
    let replyApplicID: OPTIONAL<UTF8String>;
    let auxApplicInfo: OPTIONAL<UTF8String>;
    let contentClass: OPTIONAL<ContentClass>;
    let dRMContent: OPTIONAL<YesNo>;
    let replaceID: OPTIONAL<UTF8String>;
    let contentLocation: OPTIONAL<ContentLocation>;
    let mMSStatus: OPTIONAL<MMSStatus>;
    let reportAllowed: OPTIONAL<YesNo>;
    let previouslySentBy: OPTIONAL<PreviouslySentBy>;
    let previouslySentByDateTime: OPTIONAL<PreviouslySentByDateTime>;
    let mMState: OPTIONAL<MMSState>;
    let desiredDeliveryTime: OPTIONAL<GeneralizedTime>;
    let deliveryReportAllowed: OPTIONAL<YesNo>;
    let store: OPTIONAL<YesNo>;
    let responseStatus: OPTIONAL<ResponseStatus>;
    let responseStatusText: OPTIONAL<ResponseStatusText>;
    let storeStatus: OPTIONAL<StoreStatus>;
    let storeStatusText: OPTIONAL<EncodedString>;
    let mMFlags: OPTIONAL<MMFlags>;
    let mMBoxDescriptionPdus: OPTIONAL<MMBoxDescriptionPdus[]>;
    let cancelID: OPTIONAL<UTF8String>;
    let cancelStatus: OPTIONAL<YesNo>;
    let mMSStart: OPTIONAL<INTEGER>;
    let mMSLimit: OPTIONAL<INTEGER>;
    let mMSAttributes: OPTIONAL<MMSAttributes>;
    let mMSTotals: OPTIONAL<YesNo>;
    let mMSQuotas: OPTIONAL<YesNo>;
    let mMSMessageCount: OPTIONAL<INTEGER>;
    let messageSize: OPTIONAL<INTEGER>;
    let mMSForwardReqDateTime: OPTIONAL<GeneralizedTime>;
    let adaptationAllowed: OPTIONAL<YesNo>;
    let priority: OPTIONAL<Priority>;
    let mMSCorrelationNumber: OPTIONAL<MMSCorrelationNumber>;
    let contentType: OPTIONAL<OCTET_STRING>;
    let national_Parameters: OPTIONAL<National_Parameters>;
    const callbacks: $.DecodingMap = {
        "hi2mmsDomainId": (_el: _Element): void => { hi2mmsDomainId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "locationOfTheTarget": (_el: _Element): void => { locationOfTheTarget = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "partyInformation": (_el: _Element): void => { partyInformation = $._decode_implicit<PartyInformation[]>(() => $._decodeSetOf<PartyInformation>(() => _decode_PartyInformation))(_el); },
        "mMSevent": (_el: _Element): void => { mMSevent = $._decode_implicit<MMSEvent>(() => _decode_MMSEvent)(_el); },
        "serviceCenterAddress": (_el: _Element): void => { serviceCenterAddress = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "mMSParties": (_el: _Element): void => { mMSParties = $._decode_implicit<MMSParties>(() => _decode_MMSParties)(_el); },
        "mMSVersion": (_el: _Element): void => { mMSVersion = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "transactionID": (_el: _Element): void => { transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "mMSDateTime": (_el: _Element): void => { mMSDateTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "messageClass": (_el: _Element): void => { messageClass = $._decode_explicit<MessageClass>(() => _decode_MessageClass)(_el); },
        "expiry": (_el: _Element): void => { expiry = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "distributionIndicator": (_el: _Element): void => { distributionIndicator = $._decode_implicit<YesNo>(() => _decode_YesNo)(_el); },
        "elementDescriptor": (_el: _Element): void => { elementDescriptor = $._decode_implicit<ElementDescriptor>(() => _decode_ElementDescriptor)(_el); },
        "retrievalMode": (_el: _Element): void => { retrievalMode = $._decode_implicit<YesNo>(() => _decode_YesNo)(_el); },
        "retrievalModeText": (_el: _Element): void => { retrievalModeText = $._decode_explicit<EncodedString>(() => _decode_EncodedString)(_el); },
        "senderVisibility": (_el: _Element): void => { senderVisibility = $._decode_implicit<YesNo>(() => _decode_YesNo)(_el); },
        "deliveryReport": (_el: _Element): void => { deliveryReport = $._decode_implicit<YesNo>(() => _decode_YesNo)(_el); },
        "readReport": (_el: _Element): void => { readReport = $._decode_implicit<YesNo>(() => _decode_YesNo)(_el); },
        "applicID": (_el: _Element): void => { applicID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "replyApplicID": (_el: _Element): void => { replyApplicID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "auxApplicInfo": (_el: _Element): void => { auxApplicInfo = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "contentClass": (_el: _Element): void => { contentClass = $._decode_implicit<ContentClass>(() => _decode_ContentClass)(_el); },
        "dRMContent": (_el: _Element): void => { dRMContent = $._decode_implicit<YesNo>(() => _decode_YesNo)(_el); },
        "replaceID": (_el: _Element): void => { replaceID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "contentLocation": (_el: _Element): void => { contentLocation = $._decode_implicit<ContentLocation>(() => _decode_ContentLocation)(_el); },
        "mMSStatus": (_el: _Element): void => { mMSStatus = $._decode_implicit<MMSStatus>(() => _decode_MMSStatus)(_el); },
        "reportAllowed": (_el: _Element): void => { reportAllowed = $._decode_implicit<YesNo>(() => _decode_YesNo)(_el); },
        "previouslySentBy": (_el: _Element): void => { previouslySentBy = $._decode_implicit<PreviouslySentBy>(() => _decode_PreviouslySentBy)(_el); },
        "previouslySentByDateTime": (_el: _Element): void => { previouslySentByDateTime = $._decode_implicit<PreviouslySentByDateTime>(() => _decode_PreviouslySentByDateTime)(_el); },
        "mMState": (_el: _Element): void => { mMState = $._decode_implicit<MMSState>(() => _decode_MMSState)(_el); },
        "desiredDeliveryTime": (_el: _Element): void => { desiredDeliveryTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "deliveryReportAllowed": (_el: _Element): void => { deliveryReportAllowed = $._decode_implicit<YesNo>(() => _decode_YesNo)(_el); },
        "store": (_el: _Element): void => { store = $._decode_implicit<YesNo>(() => _decode_YesNo)(_el); },
        "responseStatus": (_el: _Element): void => { responseStatus = $._decode_implicit<ResponseStatus>(() => _decode_ResponseStatus)(_el); },
        "responseStatusText": (_el: _Element): void => { responseStatusText = $._decode_implicit<ResponseStatusText>(() => _decode_ResponseStatusText)(_el); },
        "storeStatus": (_el: _Element): void => { storeStatus = $._decode_implicit<StoreStatus>(() => _decode_StoreStatus)(_el); },
        "storeStatusText": (_el: _Element): void => { storeStatusText = $._decode_explicit<EncodedString>(() => _decode_EncodedString)(_el); },
        "mMFlags": (_el: _Element): void => { mMFlags = $._decode_implicit<MMFlags>(() => _decode_MMFlags)(_el); },
        "mMBoxDescriptionPdus": (_el: _Element): void => { mMBoxDescriptionPdus = $._decode_implicit<MMBoxDescriptionPdus[]>(() => $._decodeSequenceOf<MMBoxDescriptionPdus>(() => _decode_MMBoxDescriptionPdus))(_el); },
        "cancelID": (_el: _Element): void => { cancelID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "cancelStatus": (_el: _Element): void => { cancelStatus = $._decode_implicit<YesNo>(() => _decode_YesNo)(_el); },
        "mMSStart": (_el: _Element): void => { mMSStart = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mMSLimit": (_el: _Element): void => { mMSLimit = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mMSAttributes": (_el: _Element): void => { mMSAttributes = $._decode_explicit<MMSAttributes>(() => _decode_MMSAttributes)(_el); },
        "mMSTotals": (_el: _Element): void => { mMSTotals = $._decode_implicit<YesNo>(() => _decode_YesNo)(_el); },
        "mMSQuotas": (_el: _Element): void => { mMSQuotas = $._decode_implicit<YesNo>(() => _decode_YesNo)(_el); },
        "mMSMessageCount": (_el: _Element): void => { mMSMessageCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "messageSize": (_el: _Element): void => { messageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mMSForwardReqDateTime": (_el: _Element): void => { mMSForwardReqDateTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "adaptationAllowed": (_el: _Element): void => { adaptationAllowed = $._decode_implicit<YesNo>(() => _decode_YesNo)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<Priority>(() => _decode_Priority)(_el); },
        "mMSCorrelationNumber": (_el: _Element): void => { mMSCorrelationNumber = $._decode_implicit<MMSCorrelationNumber>(() => _decode_MMSCorrelationNumber)(_el); },
        "contentType": (_el: _Element): void => { contentType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "national-Parameters": (_el: _Element): void => { national_Parameters = $._decode_implicit<National_Parameters>(() => _decode_National_Parameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IRI_Parameters,
        _extension_additions_list_spec_for_IRI_Parameters,
        _root_component_type_list_2_spec_for_IRI_Parameters,
        undefined,
    );
    return new IRI_Parameters(
        hi2mmsDomainId,
        lawfulInterceptionIdentifier,
        timeStamp,
        locationOfTheTarget,
        partyInformation,
        mMSevent,
        serviceCenterAddress,
        mMSParties,
        mMSVersion,
        transactionID,
        messageID,
        mMSDateTime,
        messageClass,
        expiry,
        distributionIndicator,
        elementDescriptor,
        retrievalMode,
        retrievalModeText,
        senderVisibility,
        deliveryReport,
        readReport,
        applicID,
        replyApplicID,
        auxApplicInfo,
        contentClass,
        dRMContent,
        replaceID,
        contentLocation,
        mMSStatus,
        reportAllowed,
        previouslySentBy,
        previouslySentByDateTime,
        mMState,
        desiredDeliveryTime,
        deliveryReportAllowed,
        store,
        responseStatus,
        responseStatusText,
        storeStatus,
        storeStatusText,
        mMFlags,
        mMBoxDescriptionPdus,
        cancelID,
        cancelStatus,
        mMSStart,
        mMSLimit,
        mMSAttributes,
        mMSTotals,
        mMSQuotas,
        mMSMessageCount,
        messageSize,
        mMSForwardReqDateTime,
        adaptationAllowed,
        priority,
        mMSCorrelationNumber,
        contentType,
        national_Parameters
    );
}; }
    return _cached_decoder_for_IRI_Parameters(el);
}

let _cached_encoder_for_IRI_Parameters: $.ASN1Encoder<IRI_Parameters> | null = null;

/**
 * @summary Encodes a(n) IRI_Parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRI_Parameters, encoded as an ASN.1 Element.
 */
export
function _encode_IRI_Parameters (value: IRI_Parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRI_Parameters) { _cached_encoder_for_IRI_Parameters = function (value: IRI_Parameters, elGetter: $.ASN1Encoder<IRI_Parameters>): _Element {
    const _components: _Element[] = new Array(57);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.hi2mmsDomainId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfulInterceptionIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    if (value.locationOfTheTarget !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Location, $.BER)(value.locationOfTheTarget, $.BER);
    }
    if (value.partyInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSetOf<PartyInformation>(() => _encode_PartyInformation, $.BER), $.BER)(value.partyInformation, $.BER);
    }
    if (value.mMSevent !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_MMSEvent, $.BER)(value.mMSevent, $.BER);
    }
    if (value.serviceCenterAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_PartyInformation, $.BER)(value.serviceCenterAddress, $.BER);
    }
    if (value.mMSParties !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_MMSParties, $.BER)(value.mMSParties, $.BER);
    }
    if (value.mMSVersion !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.mMSVersion, $.BER);
    }
    if (value.transactionID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER);
    }
    if (value.messageID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeUTF8String, $.BER)(value.messageID, $.BER);
    }
    if (value.mMSDateTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeGeneralizedTime, $.BER)(value.mMSDateTime, $.BER);
    }
    if (value.messageClass !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 14, () => _encode_MessageClass, $.BER)(value.messageClass, $.BER);
    }
    if (value.expiry !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeGeneralizedTime, $.BER)(value.expiry, $.BER);
    }
    if (value.distributionIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_YesNo, $.BER)(value.distributionIndicator, $.BER);
    }
    if (value.elementDescriptor !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_ElementDescriptor, $.BER)(value.elementDescriptor, $.BER);
    }
    if (value.retrievalMode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_YesNo, $.BER)(value.retrievalMode, $.BER);
    }
    if (value.retrievalModeText !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 19, () => _encode_EncodedString, $.BER)(value.retrievalModeText, $.BER);
    }
    if (value.senderVisibility !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_YesNo, $.BER)(value.senderVisibility, $.BER);
    }
    if (value.deliveryReport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_YesNo, $.BER)(value.deliveryReport, $.BER);
    }
    if (value.readReport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_YesNo, $.BER)(value.readReport, $.BER);
    }
    if (value.applicID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeUTF8String, $.BER)(value.applicID, $.BER);
    }
    if (value.replyApplicID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeUTF8String, $.BER)(value.replyApplicID, $.BER);
    }
    if (value.auxApplicInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeUTF8String, $.BER)(value.auxApplicInfo, $.BER);
    }
    if (value.contentClass !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_ContentClass, $.BER)(value.contentClass, $.BER);
    }
    if (value.dRMContent !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => _encode_YesNo, $.BER)(value.dRMContent, $.BER);
    }
    if (value.replaceID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeUTF8String, $.BER)(value.replaceID, $.BER);
    }
    if (value.contentLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_ContentLocation, $.BER)(value.contentLocation, $.BER);
    }
    if (value.mMSStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_MMSStatus, $.BER)(value.mMSStatus, $.BER);
    }
    if (value.reportAllowed !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => _encode_YesNo, $.BER)(value.reportAllowed, $.BER);
    }
    if (value.previouslySentBy !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => _encode_PreviouslySentBy, $.BER)(value.previouslySentBy, $.BER);
    }
    if (value.previouslySentByDateTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => _encode_PreviouslySentByDateTime, $.BER)(value.previouslySentByDateTime, $.BER);
    }
    if (value.mMState !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => _encode_MMSState, $.BER)(value.mMState, $.BER);
    }
    if (value.desiredDeliveryTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 35, () => $._encodeGeneralizedTime, $.BER)(value.desiredDeliveryTime, $.BER);
    }
    if (value.deliveryReportAllowed !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_YesNo, $.BER)(value.deliveryReportAllowed, $.BER);
    }
    if (value.store !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => _encode_YesNo, $.BER)(value.store, $.BER);
    }
    if (value.responseStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => _encode_ResponseStatus, $.BER)(value.responseStatus, $.BER);
    }
    if (value.responseStatusText !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => _encode_ResponseStatusText, $.BER)(value.responseStatusText, $.BER);
    }
    if (value.storeStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => _encode_StoreStatus, $.BER)(value.storeStatus, $.BER);
    }
    if (value.storeStatusText !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 41, () => _encode_EncodedString, $.BER)(value.storeStatusText, $.BER);
    }
    if (value.mMFlags !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 43, () => _encode_MMFlags, $.BER)(value.mMFlags, $.BER);
    }
    if (value.mMBoxDescriptionPdus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 44, () => $._encodeSequenceOf<MMBoxDescriptionPdus>(() => _encode_MMBoxDescriptionPdus, $.BER), $.BER)(value.mMBoxDescriptionPdus, $.BER);
    }
    if (value.cancelID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 45, () => $._encodeUTF8String, $.BER)(value.cancelID, $.BER);
    }
    if (value.cancelStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 46, () => _encode_YesNo, $.BER)(value.cancelStatus, $.BER);
    }
    if (value.mMSStart !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeInteger, $.BER)(value.mMSStart, $.BER);
    }
    if (value.mMSLimit !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 48, () => $._encodeInteger, $.BER)(value.mMSLimit, $.BER);
    }
    if (value.mMSAttributes !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 49, () => _encode_MMSAttributes, $.BER)(value.mMSAttributes, $.BER);
    }
    if (value.mMSTotals !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 50, () => _encode_YesNo, $.BER)(value.mMSTotals, $.BER);
    }
    if (value.mMSQuotas !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => _encode_YesNo, $.BER)(value.mMSQuotas, $.BER);
    }
    if (value.mMSMessageCount !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => $._encodeInteger, $.BER)(value.mMSMessageCount, $.BER);
    }
    if (value.messageSize !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 53, () => $._encodeInteger, $.BER)(value.messageSize, $.BER);
    }
    if (value.mMSForwardReqDateTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 54, () => $._encodeGeneralizedTime, $.BER)(value.mMSForwardReqDateTime, $.BER);
    }
    if (value.adaptationAllowed !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => _encode_YesNo, $.BER)(value.adaptationAllowed, $.BER);
    }
    if (value.priority !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => _encode_Priority, $.BER)(value.priority, $.BER);
    }
    if (value.mMSCorrelationNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => _encode_MMSCorrelationNumber, $.BER)(value.mMSCorrelationNumber, $.BER);
    }
    if (value.contentType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 58, () => $._encodeOctetString, $.BER)(value.contentType, $.BER);
    }
    if (value.national_Parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 59, () => _encode_National_Parameters, $.BER)(value.national_Parameters, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IRI_Parameters(value, elGetter);
}


/* eslint-enable */
