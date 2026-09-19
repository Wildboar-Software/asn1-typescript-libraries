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
import { MMSPreviouslySentBy, _decode_MMSPreviouslySentBy, _encode_MMSPreviouslySentBy } from "../TS33128Payloads/MMSPreviouslySentBy.ta.mjs";
// export { MMSPreviouslySentBy, _decode_MMSPreviouslySentBy, _encode_MMSPreviouslySentBy } from "../TS33128Payloads/MMSPreviouslySentBy.ta.mjs";
import { MMSDirection, _decode_MMSDirection, _encode_MMSDirection, _enum_for_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
// export { MMSDirection, _enum_for_MMSDirection, MMSDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDirection, _encode_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
import { MMSSubject, _decode_MMSSubject, _encode_MMSSubject } from "../TS33128Payloads/MMSSubject.ta.mjs";
// export { MMSSubject, _decode_MMSSubject, _encode_MMSSubject } from "../TS33128Payloads/MMSSubject.ta.mjs";
import { MMState, _decode_MMState, _encode_MMState, _enum_for_MMState } from "../TS33128Payloads/MMState.ta.mjs";
// export { MMState, _enum_for_MMState, MMState_draft /* IMPORTED_LONG_ENUMERATION_ITEM */, draft /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_sent /* IMPORTED_LONG_ENUMERATION_ITEM */, sent /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_new /* IMPORTED_LONG_ENUMERATION_ITEM */, new_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMState, _encode_MMState } from "../TS33128Payloads/MMState.ta.mjs";
import { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
// export { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
import { MMSMessageClass, _decode_MMSMessageClass, _encode_MMSMessageClass, _enum_for_MMSMessageClass } from "../TS33128Payloads/MMSMessageClass.ta.mjs";
// export { MMSMessageClass, _enum_for_MMSMessageClass, MMSMessageClass_personal /* IMPORTED_LONG_ENUMERATION_ITEM */, personal /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_advertisement /* IMPORTED_LONG_ENUMERATION_ITEM */, advertisement /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_informational /* IMPORTED_LONG_ENUMERATION_ITEM */, informational /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_auto /* IMPORTED_LONG_ENUMERATION_ITEM */, auto /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSMessageClass, _encode_MMSMessageClass } from "../TS33128Payloads/MMSMessageClass.ta.mjs";
import { MMSPriority, _decode_MMSPriority, _encode_MMSPriority, _enum_for_MMSPriority } from "../TS33128Payloads/MMSPriority.ta.mjs";
// export { MMSPriority, _enum_for_MMSPriority, MMSPriority_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSPriority_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSPriority_high /* IMPORTED_LONG_ENUMERATION_ITEM */, high /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSPriority, _encode_MMSPriority } from "../TS33128Payloads/MMSPriority.ta.mjs";
import { MMSReplyCharging, _decode_MMSReplyCharging, _encode_MMSReplyCharging, _enum_for_MMSReplyCharging } from "../TS33128Payloads/MMSReplyCharging.ta.mjs";
// export { MMSReplyCharging, _enum_for_MMSReplyCharging, MMSReplyCharging_requested /* IMPORTED_LONG_ENUMERATION_ITEM */, requested /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_requestedTextOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedTextOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_accepted /* IMPORTED_LONG_ENUMERATION_ITEM */, accepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_acceptedTextOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, acceptedTextOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSReplyCharging, _encode_MMSReplyCharging } from "../TS33128Payloads/MMSReplyCharging.ta.mjs";
import { MMSRetrieveStatus, _decode_MMSRetrieveStatus, _encode_MMSRetrieveStatus, _enum_for_MMSRetrieveStatus } from "../TS33128Payloads/MMSRetrieveStatus.ta.mjs";
// export { MMSRetrieveStatus, _enum_for_MMSRetrieveStatus, MMSRetrieveStatus_success /* IMPORTED_LONG_ENUMERATION_ITEM */, success /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSRetrieveStatus_errorTransientFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSRetrieveStatus_errorTransientMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSRetrieveStatus_errorTransientNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSRetrieveStatus_errorPermanentFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSRetrieveStatus_errorPermanentServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSRetrieveStatus_errorPermanentMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSRetrieveStatus_errorPermanentContentUnsupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentContentUnsupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSRetrieveStatus, _encode_MMSRetrieveStatus } from "../TS33128Payloads/MMSRetrieveStatus.ta.mjs";
import { MMSContentClass, _decode_MMSContentClass, _encode_MMSContentClass, _enum_for_MMSContentClass } from "../TS33128Payloads/MMSContentClass.ta.mjs";
// export { MMSContentClass, _enum_for_MMSContentClass, MMSContentClass_text /* IMPORTED_LONG_ENUMERATION_ITEM */, text /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_imageBasic /* IMPORTED_LONG_ENUMERATION_ITEM */, imageBasic /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_imageRich /* IMPORTED_LONG_ENUMERATION_ITEM */, imageRich /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_videoBasic /* IMPORTED_LONG_ENUMERATION_ITEM */, videoBasic /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_videoRich /* IMPORTED_LONG_ENUMERATION_ITEM */, videoRich /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_megaPixel /* IMPORTED_LONG_ENUMERATION_ITEM */, megaPixel /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_contentBasic /* IMPORTED_LONG_ENUMERATION_ITEM */, contentBasic /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_contentRich /* IMPORTED_LONG_ENUMERATION_ITEM */, contentRich /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSContentClass, _encode_MMSContentClass } from "../TS33128Payloads/MMSContentClass.ta.mjs";


/**
 * @summary MMSRetrieval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSRetrieval ::= SEQUENCE
 * {
 *     transactionID       [1]  UTF8String,
 *     version             [2]  MMSVersion,
 *     messageID           [3]  UTF8String,
 *     dateTime            [4]  Timestamp,
 *     originatingMMSParty [5]  MMSParty OPTIONAL,
 *     previouslySentBy    [6]  MMSPreviouslySentBy OPTIONAL,
 *     prevSentByDateTime  [7]  Timestamp OPTIONAL,
 *     terminatingMMSParty [8]  SEQUENCE OF MMSParty OPTIONAL,
 *     cCRecipients        [9]  SEQUENCE OF MMSParty OPTIONAL,
 *     direction           [10] MMSDirection,
 *     subject             [11] MMSSubject OPTIONAL,
 *     state               [12] MMState OPTIONAL,
 *     flags               [13] MMFlags OPTIONAL,
 *     messageClass        [14] MMSMessageClass OPTIONAL,
 *     priority            [15] MMSPriority,
 *     deliveryReport      [16] BOOLEAN OPTIONAL,
 *     readReport          [17] BOOLEAN OPTIONAL,
 *     replyCharging       [18] MMSReplyCharging OPTIONAL,
 *     retrieveStatus      [19] MMSRetrieveStatus OPTIONAL,
 *     retrieveStatusText  [20] UTF8String OPTIONAL,
 *     applicID            [21] UTF8String OPTIONAL,
 *     replyApplicID       [22] UTF8String OPTIONAL,
 *     auxApplicInfo       [23] UTF8String OPTIONAL,
 *     contentClass        [24] MMSContentClass OPTIONAL,
 *     dRMContent          [25] BOOLEAN OPTIONAL,
 *     replaceID           [26] UTF8String OPTIONAL,
 *     contentType         [27] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMSRetrieval {
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
         * @summary `messageID`.
         * @public
         * @readonly
         */
        readonly messageID: UTF8String,
        /**
         * @summary `dateTime`.
         * @public
         * @readonly
         */
        readonly dateTime: Timestamp,
        /**
         * @summary `originatingMMSParty`.
         * @public
         * @readonly
         */
        readonly originatingMMSParty: OPTIONAL<MMSParty>,
        /**
         * @summary `previouslySentBy`.
         * @public
         * @readonly
         */
        readonly previouslySentBy: OPTIONAL<MMSPreviouslySentBy>,
        /**
         * @summary `prevSentByDateTime`.
         * @public
         * @readonly
         */
        readonly prevSentByDateTime: OPTIONAL<Timestamp>,
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
         * @summary `direction`.
         * @public
         * @readonly
         */
        readonly direction: MMSDirection,
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: OPTIONAL<MMSSubject>,
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
         * @summary `messageClass`.
         * @public
         * @readonly
         */
        readonly messageClass: OPTIONAL<MMSMessageClass>,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: MMSPriority,
        /**
         * @summary `deliveryReport`.
         * @public
         * @readonly
         */
        readonly deliveryReport: OPTIONAL<BOOLEAN>,
        /**
         * @summary `readReport`.
         * @public
         * @readonly
         */
        readonly readReport: OPTIONAL<BOOLEAN>,
        /**
         * @summary `replyCharging`.
         * @public
         * @readonly
         */
        readonly replyCharging: OPTIONAL<MMSReplyCharging>,
        /**
         * @summary `retrieveStatus`.
         * @public
         * @readonly
         */
        readonly retrieveStatus: OPTIONAL<MMSRetrieveStatus>,
        /**
         * @summary `retrieveStatusText`.
         * @public
         * @readonly
         */
        readonly retrieveStatusText: OPTIONAL<UTF8String>,
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
        readonly auxApplicInfo: OPTIONAL<UTF8String>,
        /**
         * @summary `contentClass`.
         * @public
         * @readonly
         */
        readonly contentClass: OPTIONAL<MMSContentClass>,
        /**
         * @summary `dRMContent`.
         * @public
         * @readonly
         */
        readonly dRMContent: OPTIONAL<BOOLEAN>,
        /**
         * @summary `replaceID`.
         * @public
         * @readonly
         */
        readonly replaceID: OPTIONAL<UTF8String>,
        /**
         * @summary `contentType`.
         * @public
         * @readonly
         */
        readonly contentType: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a MMSRetrieval
     * @description
     * 
     * This takes an `object` and converts it to a `MMSRetrieval`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSRetrieval`.
     * @returns {MMSRetrieval}
     */
    public static _from_object (_o: { [_K in keyof (MMSRetrieval)]: (MMSRetrieval)[_K] }): MMSRetrieval {
        return new MMSRetrieval(_o.transactionID, _o.version, _o.messageID, _o.dateTime, _o.originatingMMSParty, _o.previouslySentBy, _o.prevSentByDateTime, _o.terminatingMMSParty, _o.cCRecipients, _o.direction, _o.subject, _o.state, _o.flags, _o.messageClass, _o.priority, _o.deliveryReport, _o.readReport, _o.replyCharging, _o.retrieveStatus, _o.retrieveStatusText, _o.applicID, _o.replyApplicID, _o.auxApplicInfo, _o.contentClass, _o.dRMContent, _o.replaceID, _o.contentType);
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
         * @summary The enum used as the type of the component `replyCharging`
         * @public
         * @static
         */

    public static _enum_for_replyCharging = _enum_for_MMSReplyCharging;        /**
         * @summary The enum used as the type of the component `retrieveStatus`
         * @public
         * @static
         */

    public static _enum_for_retrieveStatus = _enum_for_MMSRetrieveStatus;        /**
         * @summary The enum used as the type of the component `contentClass`
         * @public
         * @static
         */

    public static _enum_for_contentClass = _enum_for_MMSContentClass;
}

/**
 * @summary The Leading Root Component Types of MMSRetrieval
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSRetrieval: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("dateTime", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("originatingMMSParty", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("previouslySentBy", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("prevSentByDateTime", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("terminatingMMSParty", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("cCRecipients", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("subject", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("state", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("flags", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("priority", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("deliveryReport", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("readReport", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("replyCharging", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("retrieveStatus", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("retrieveStatusText", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("applicID", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("replyApplicID", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("auxApplicInfo", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("contentClass", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("dRMContent", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("replaceID", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("contentType", true, $.hasTag(_TagClass.context, 27))
];

/**
 * @summary The Trailing Root Component Types of MMSRetrieval
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSRetrieval: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSRetrieval
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSRetrieval: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSRetrieval: $.ASN1Decoder<MMSRetrieval> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSRetrieval
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSRetrieval (el: _Element): MMSRetrieval {
    if (!_cached_decoder_for_MMSRetrieval) { _cached_decoder_for_MMSRetrieval = function (el: _Element): MMSRetrieval {
    let transactionID!: UTF8String;
    let version!: MMSVersion;
    let messageID!: UTF8String;
    let dateTime!: Timestamp;
    let originatingMMSParty: OPTIONAL<MMSParty>;
    let previouslySentBy: OPTIONAL<MMSPreviouslySentBy>;
    let prevSentByDateTime: OPTIONAL<Timestamp>;
    let terminatingMMSParty: OPTIONAL<MMSParty[]>;
    let cCRecipients: OPTIONAL<MMSParty[]>;
    let direction!: MMSDirection;
    let subject: OPTIONAL<MMSSubject>;
    let state: OPTIONAL<MMState>;
    let flags: OPTIONAL<MMFlags>;
    let messageClass: OPTIONAL<MMSMessageClass>;
    let priority!: MMSPriority;
    let deliveryReport: OPTIONAL<BOOLEAN>;
    let readReport: OPTIONAL<BOOLEAN>;
    let replyCharging: OPTIONAL<MMSReplyCharging>;
    let retrieveStatus: OPTIONAL<MMSRetrieveStatus>;
    let retrieveStatusText: OPTIONAL<UTF8String>;
    let applicID: OPTIONAL<UTF8String>;
    let replyApplicID: OPTIONAL<UTF8String>;
    let auxApplicInfo: OPTIONAL<UTF8String>;
    let contentClass: OPTIONAL<MMSContentClass>;
    let dRMContent: OPTIONAL<BOOLEAN>;
    let replaceID: OPTIONAL<UTF8String>;
    let contentType: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "transactionID": (_el: _Element): void => { transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "version": (_el: _Element): void => { version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "dateTime": (_el: _Element): void => { dateTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "originatingMMSParty": (_el: _Element): void => { originatingMMSParty = $._decode_implicit<MMSParty>(() => _decode_MMSParty)(_el); },
        "previouslySentBy": (_el: _Element): void => { previouslySentBy = $._decode_implicit<MMSPreviouslySentBy>(() => _decode_MMSPreviouslySentBy)(_el); },
        "prevSentByDateTime": (_el: _Element): void => { prevSentByDateTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "terminatingMMSParty": (_el: _Element): void => { terminatingMMSParty = $._decode_implicit<MMSParty[]>(() => $._decodeSequenceOf<MMSParty>(() => _decode_MMSParty))(_el); },
        "cCRecipients": (_el: _Element): void => { cCRecipients = $._decode_implicit<MMSParty[]>(() => $._decodeSequenceOf<MMSParty>(() => _decode_MMSParty))(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<MMSDirection>(() => _decode_MMSDirection)(_el); },
        "subject": (_el: _Element): void => { subject = $._decode_implicit<MMSSubject>(() => _decode_MMSSubject)(_el); },
        "state": (_el: _Element): void => { state = $._decode_implicit<MMState>(() => _decode_MMState)(_el); },
        "flags": (_el: _Element): void => { flags = $._decode_implicit<MMFlags>(() => _decode_MMFlags)(_el); },
        "messageClass": (_el: _Element): void => { messageClass = $._decode_implicit<MMSMessageClass>(() => _decode_MMSMessageClass)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<MMSPriority>(() => _decode_MMSPriority)(_el); },
        "deliveryReport": (_el: _Element): void => { deliveryReport = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "readReport": (_el: _Element): void => { readReport = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "replyCharging": (_el: _Element): void => { replyCharging = $._decode_implicit<MMSReplyCharging>(() => _decode_MMSReplyCharging)(_el); },
        "retrieveStatus": (_el: _Element): void => { retrieveStatus = $._decode_implicit<MMSRetrieveStatus>(() => _decode_MMSRetrieveStatus)(_el); },
        "retrieveStatusText": (_el: _Element): void => { retrieveStatusText = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "applicID": (_el: _Element): void => { applicID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "replyApplicID": (_el: _Element): void => { replyApplicID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "auxApplicInfo": (_el: _Element): void => { auxApplicInfo = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "contentClass": (_el: _Element): void => { contentClass = $._decode_implicit<MMSContentClass>(() => _decode_MMSContentClass)(_el); },
        "dRMContent": (_el: _Element): void => { dRMContent = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "replaceID": (_el: _Element): void => { replaceID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "contentType": (_el: _Element): void => { contentType = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSRetrieval,
        _extension_additions_list_spec_for_MMSRetrieval,
        _root_component_type_list_2_spec_for_MMSRetrieval,
        undefined,
    );
    return new MMSRetrieval(
        transactionID,
        version,
        messageID,
        dateTime,
        originatingMMSParty,
        previouslySentBy,
        prevSentByDateTime,
        terminatingMMSParty,
        cCRecipients,
        direction,
        subject,
        state,
        flags,
        messageClass,
        priority,
        deliveryReport,
        readReport,
        replyCharging,
        retrieveStatus,
        retrieveStatusText,
        applicID,
        replyApplicID,
        auxApplicInfo,
        contentClass,
        dRMContent,
        replaceID,
        contentType
    );
}; }
    return _cached_decoder_for_MMSRetrieval(el);
}

let _cached_encoder_for_MMSRetrieval: $.ASN1Encoder<MMSRetrieval> | null = null;

/**
 * @summary Encodes a(n) MMSRetrieval into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSRetrieval, encoded as an ASN.1 Element.
 */
export
function _encode_MMSRetrieval (value: MMSRetrieval, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSRetrieval) { _cached_encoder_for_MMSRetrieval = function (value: MMSRetrieval, elGetter: $.ASN1Encoder<MMSRetrieval>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSVersion, $.BER)(value.version, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.messageID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Timestamp, $.BER)(value.dateTime, $.BER),
            /* IF_ABSENT  */ ((value.originatingMMSParty === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MMSParty, $.BER)(value.originatingMMSParty, $.BER)),
            /* IF_ABSENT  */ ((value.previouslySentBy === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_MMSPreviouslySentBy, $.BER)(value.previouslySentBy, $.BER)),
            /* IF_ABSENT  */ ((value.prevSentByDateTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Timestamp, $.BER)(value.prevSentByDateTime, $.BER)),
            /* IF_ABSENT  */ ((value.terminatingMMSParty === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.terminatingMMSParty, $.BER)),
            /* IF_ABSENT  */ ((value.cCRecipients === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.cCRecipients, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => _encode_MMSDirection, $.BER)(value.direction, $.BER),
            /* IF_ABSENT  */ ((value.subject === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_MMSSubject, $.BER)(value.subject, $.BER)),
            /* IF_ABSENT  */ ((value.state === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_MMState, $.BER)(value.state, $.BER)),
            /* IF_ABSENT  */ ((value.flags === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_MMFlags, $.BER)(value.flags, $.BER)),
            /* IF_ABSENT  */ ((value.messageClass === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_MMSMessageClass, $.BER)(value.messageClass, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => _encode_MMSPriority, $.BER)(value.priority, $.BER),
            /* IF_ABSENT  */ ((value.deliveryReport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeBoolean, $.BER)(value.deliveryReport, $.BER)),
            /* IF_ABSENT  */ ((value.readReport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeBoolean, $.BER)(value.readReport, $.BER)),
            /* IF_ABSENT  */ ((value.replyCharging === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_MMSReplyCharging, $.BER)(value.replyCharging, $.BER)),
            /* IF_ABSENT  */ ((value.retrieveStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_MMSRetrieveStatus, $.BER)(value.retrieveStatus, $.BER)),
            /* IF_ABSENT  */ ((value.retrieveStatusText === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => $._encodeUTF8String, $.BER)(value.retrieveStatusText, $.BER)),
            /* IF_ABSENT  */ ((value.applicID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => $._encodeUTF8String, $.BER)(value.applicID, $.BER)),
            /* IF_ABSENT  */ ((value.replyApplicID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => $._encodeUTF8String, $.BER)(value.replyApplicID, $.BER)),
            /* IF_ABSENT  */ ((value.auxApplicInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => $._encodeUTF8String, $.BER)(value.auxApplicInfo, $.BER)),
            /* IF_ABSENT  */ ((value.contentClass === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => _encode_MMSContentClass, $.BER)(value.contentClass, $.BER)),
            /* IF_ABSENT  */ ((value.dRMContent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => $._encodeBoolean, $.BER)(value.dRMContent, $.BER)),
            /* IF_ABSENT  */ ((value.replaceID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => $._encodeUTF8String, $.BER)(value.replaceID, $.BER)),
            /* IF_ABSENT  */ ((value.contentType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => $._encodeUTF8String, $.BER)(value.contentType, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSRetrieval(value, elGetter);
}


/* eslint-enable */
