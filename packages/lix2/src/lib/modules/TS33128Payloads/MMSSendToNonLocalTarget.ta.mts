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
import { MMSDirection, _enum_for_MMSDirection, MMSDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDirection, _encode_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
// export { MMSDirection, _enum_for_MMSDirection, MMSDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDirection, _encode_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
import { MMSContentType, _decode_MMSContentType, _encode_MMSContentType } from "../TS33128Payloads/MMSContentType.ta.mjs";
// export { MMSContentType, _decode_MMSContentType, _encode_MMSContentType } from "../TS33128Payloads/MMSContentType.ta.mjs";
import { MMSMessageClass, _enum_for_MMSMessageClass, MMSMessageClass_personal /* IMPORTED_LONG_ENUMERATION_ITEM */, personal /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_advertisement /* IMPORTED_LONG_ENUMERATION_ITEM */, advertisement /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_informational /* IMPORTED_LONG_ENUMERATION_ITEM */, informational /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_auto /* IMPORTED_LONG_ENUMERATION_ITEM */, auto /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSMessageClass, _encode_MMSMessageClass } from "../TS33128Payloads/MMSMessageClass.ta.mjs";
// export { MMSMessageClass, _enum_for_MMSMessageClass, MMSMessageClass_personal /* IMPORTED_LONG_ENUMERATION_ITEM */, personal /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_advertisement /* IMPORTED_LONG_ENUMERATION_ITEM */, advertisement /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_informational /* IMPORTED_LONG_ENUMERATION_ITEM */, informational /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_auto /* IMPORTED_LONG_ENUMERATION_ITEM */, auto /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSMessageClass, _encode_MMSMessageClass } from "../TS33128Payloads/MMSMessageClass.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { MMSExpiry, _decode_MMSExpiry, _encode_MMSExpiry } from "../TS33128Payloads/MMSExpiry.ta.mjs";
// export { MMSExpiry, _decode_MMSExpiry, _encode_MMSExpiry } from "../TS33128Payloads/MMSExpiry.ta.mjs";
import { MMSPriority, _enum_for_MMSPriority, MMSPriority_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSPriority_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSPriority_high /* IMPORTED_LONG_ENUMERATION_ITEM */, high /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSPriority, _encode_MMSPriority } from "../TS33128Payloads/MMSPriority.ta.mjs";
// export { MMSPriority, _enum_for_MMSPriority, MMSPriority_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSPriority_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSPriority_high /* IMPORTED_LONG_ENUMERATION_ITEM */, high /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSPriority, _encode_MMSPriority } from "../TS33128Payloads/MMSPriority.ta.mjs";
import { MMSSubject, _decode_MMSSubject, _encode_MMSSubject } from "../TS33128Payloads/MMSSubject.ta.mjs";
// export { MMSSubject, _decode_MMSSubject, _encode_MMSSubject } from "../TS33128Payloads/MMSSubject.ta.mjs";
import { MMSPreviouslySentBy, _decode_MMSPreviouslySentBy, _encode_MMSPreviouslySentBy } from "../TS33128Payloads/MMSPreviouslySentBy.ta.mjs";
// export { MMSPreviouslySentBy, _decode_MMSPreviouslySentBy, _encode_MMSPreviouslySentBy } from "../TS33128Payloads/MMSPreviouslySentBy.ta.mjs";
import { MMSContentClass, _enum_for_MMSContentClass, MMSContentClass_text /* IMPORTED_LONG_ENUMERATION_ITEM */, text /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_imageBasic /* IMPORTED_LONG_ENUMERATION_ITEM */, imageBasic /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_imageRich /* IMPORTED_LONG_ENUMERATION_ITEM */, imageRich /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_videoBasic /* IMPORTED_LONG_ENUMERATION_ITEM */, videoBasic /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_videoRich /* IMPORTED_LONG_ENUMERATION_ITEM */, videoRich /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_megaPixel /* IMPORTED_LONG_ENUMERATION_ITEM */, megaPixel /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_contentBasic /* IMPORTED_LONG_ENUMERATION_ITEM */, contentBasic /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_contentRich /* IMPORTED_LONG_ENUMERATION_ITEM */, contentRich /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSContentClass, _encode_MMSContentClass } from "../TS33128Payloads/MMSContentClass.ta.mjs";
// export { MMSContentClass, _enum_for_MMSContentClass, MMSContentClass_text /* IMPORTED_LONG_ENUMERATION_ITEM */, text /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_imageBasic /* IMPORTED_LONG_ENUMERATION_ITEM */, imageBasic /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_imageRich /* IMPORTED_LONG_ENUMERATION_ITEM */, imageRich /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_videoBasic /* IMPORTED_LONG_ENUMERATION_ITEM */, videoBasic /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_videoRich /* IMPORTED_LONG_ENUMERATION_ITEM */, videoRich /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_megaPixel /* IMPORTED_LONG_ENUMERATION_ITEM */, megaPixel /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_contentBasic /* IMPORTED_LONG_ENUMERATION_ITEM */, contentBasic /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSContentClass_contentRich /* IMPORTED_LONG_ENUMERATION_ITEM */, contentRich /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSContentClass, _encode_MMSContentClass } from "../TS33128Payloads/MMSContentClass.ta.mjs";
import { MMSAdaptation, _decode_MMSAdaptation, _encode_MMSAdaptation } from "../TS33128Payloads/MMSAdaptation.ta.mjs";
// export { MMSAdaptation, _decode_MMSAdaptation, _encode_MMSAdaptation } from "../TS33128Payloads/MMSAdaptation.ta.mjs";


/**
 * @summary MMSSendToNonLocalTarget
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSSendToNonLocalTarget ::= SEQUENCE
 * {
 *     version             [1]  MMSVersion,
 *     transactionID       [2]  UTF8String,
 *     messageID           [3]  UTF8String,
 *     terminatingMMSParty [4]  SEQUENCE OF MMSParty,
 *     originatingMMSParty [5]  MMSParty,
 *     direction           [6]  MMSDirection,
 *     contentType         [7]  MMSContentType,
 *     messageClass        [8]  MMSMessageClass OPTIONAL,
 *     dateTime            [9]  Timestamp,
 *     expiry              [10] MMSExpiry OPTIONAL,
 *     deliveryReport      [11] BOOLEAN OPTIONAL,
 *     priority            [12] MMSPriority OPTIONAL,
 *     senderVisibility    [13] BOOLEAN OPTIONAL,
 *     readReport          [14] BOOLEAN OPTIONAL,
 *     subject             [15] MMSSubject OPTIONAL,
 *     forwardCount        [16] INTEGER OPTIONAL,
 *     previouslySentBy    [17] MMSPreviouslySentBy OPTIONAL,
 *     prevSentByDateTime  [18] Timestamp OPTIONAL,
 *     applicID            [19] UTF8String OPTIONAL,
 *     replyApplicID       [20] UTF8String OPTIONAL,
 *     auxApplicInfo       [21] UTF8String OPTIONAL,
 *     contentClass        [22] MMSContentClass OPTIONAL,
 *     dRMContent          [23] BOOLEAN OPTIONAL,
 *     adaptationAllowed   [24] MMSAdaptation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMSSendToNonLocalTarget {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: MMSVersion,
        /**
         * @summary `transactionID`.
         * @public
         * @readonly
         */
        readonly transactionID: UTF8String,
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
         * @summary `originatingMMSParty`.
         * @public
         * @readonly
         */
        readonly originatingMMSParty: MMSParty,
        /**
         * @summary `direction`.
         * @public
         * @readonly
         */
        readonly direction: MMSDirection,
        /**
         * @summary `contentType`.
         * @public
         * @readonly
         */
        readonly contentType: MMSContentType,
        /**
         * @summary `messageClass`.
         * @public
         * @readonly
         */
        readonly messageClass: OPTIONAL<MMSMessageClass>,
        /**
         * @summary `dateTime`.
         * @public
         * @readonly
         */
        readonly dateTime: Timestamp,
        /**
         * @summary `expiry`.
         * @public
         * @readonly
         */
        readonly expiry: OPTIONAL<MMSExpiry>,
        /**
         * @summary `deliveryReport`.
         * @public
         * @readonly
         */
        readonly deliveryReport: OPTIONAL<BOOLEAN>,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<MMSPriority>,
        /**
         * @summary `senderVisibility`.
         * @public
         * @readonly
         */
        readonly senderVisibility: OPTIONAL<BOOLEAN>,
        /**
         * @summary `readReport`.
         * @public
         * @readonly
         */
        readonly readReport: OPTIONAL<BOOLEAN>,
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: OPTIONAL<MMSSubject>,
        /**
         * @summary `forwardCount`.
         * @public
         * @readonly
         */
        readonly forwardCount: OPTIONAL<INTEGER>,
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
         * @summary `adaptationAllowed`.
         * @public
         * @readonly
         */
        readonly adaptationAllowed: OPTIONAL<MMSAdaptation>
    ) {}

    /**
     * @summary Restructures an object into a MMSSendToNonLocalTarget
     * @description
     * 
     * This takes an `object` and converts it to a `MMSSendToNonLocalTarget`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSSendToNonLocalTarget`.
     * @returns {MMSSendToNonLocalTarget}
     */
    public static _from_object (_o: { [_K in keyof (MMSSendToNonLocalTarget)]: (MMSSendToNonLocalTarget)[_K] }): MMSSendToNonLocalTarget {
        return new MMSSendToNonLocalTarget(_o.version, _o.transactionID, _o.messageID, _o.terminatingMMSParty, _o.originatingMMSParty, _o.direction, _o.contentType, _o.messageClass, _o.dateTime, _o.expiry, _o.deliveryReport, _o.priority, _o.senderVisibility, _o.readReport, _o.subject, _o.forwardCount, _o.previouslySentBy, _o.prevSentByDateTime, _o.applicID, _o.replyApplicID, _o.auxApplicInfo, _o.contentClass, _o.dRMContent, _o.adaptationAllowed);
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
         * @summary The enum used as the type of the component `contentClass`
         * @public
         * @static
         */

    public static _enum_for_contentClass = _enum_for_MMSContentClass;
}

/**
 * @summary The Leading Root Component Types of MMSSendToNonLocalTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSSendToNonLocalTarget: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("terminatingMMSParty", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("originatingMMSParty", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("contentType", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("dateTime", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("expiry", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("deliveryReport", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("senderVisibility", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("readReport", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("subject", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("forwardCount", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("previouslySentBy", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("prevSentByDateTime", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("applicID", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("replyApplicID", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("auxApplicInfo", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("contentClass", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("dRMContent", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("adaptationAllowed", true, $.hasTag(_TagClass.context, 24))
];

/**
 * @summary The Trailing Root Component Types of MMSSendToNonLocalTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSSendToNonLocalTarget: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSSendToNonLocalTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSSendToNonLocalTarget: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSSendToNonLocalTarget: $.ASN1Decoder<MMSSendToNonLocalTarget> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSSendToNonLocalTarget
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSSendToNonLocalTarget (el: _Element): MMSSendToNonLocalTarget {
    if (!_cached_decoder_for_MMSSendToNonLocalTarget) { _cached_decoder_for_MMSSendToNonLocalTarget = function (el: _Element): MMSSendToNonLocalTarget {
    let version!: MMSVersion;
    let transactionID!: UTF8String;
    let messageID!: UTF8String;
    let terminatingMMSParty!: MMSParty[];
    let originatingMMSParty!: MMSParty;
    let direction!: MMSDirection;
    let contentType!: MMSContentType;
    let messageClass: OPTIONAL<MMSMessageClass>;
    let dateTime!: Timestamp;
    let expiry: OPTIONAL<MMSExpiry>;
    let deliveryReport: OPTIONAL<BOOLEAN>;
    let priority: OPTIONAL<MMSPriority>;
    let senderVisibility: OPTIONAL<BOOLEAN>;
    let readReport: OPTIONAL<BOOLEAN>;
    let subject: OPTIONAL<MMSSubject>;
    let forwardCount: OPTIONAL<INTEGER>;
    let previouslySentBy: OPTIONAL<MMSPreviouslySentBy>;
    let prevSentByDateTime: OPTIONAL<Timestamp>;
    let applicID: OPTIONAL<UTF8String>;
    let replyApplicID: OPTIONAL<UTF8String>;
    let auxApplicInfo: OPTIONAL<UTF8String>;
    let contentClass: OPTIONAL<MMSContentClass>;
    let dRMContent: OPTIONAL<BOOLEAN>;
    let adaptationAllowed: OPTIONAL<MMSAdaptation>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(_el); },
        "transactionID": (_el: _Element): void => { transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "terminatingMMSParty": (_el: _Element): void => { terminatingMMSParty = $._decode_implicit<MMSParty[]>(() => $._decodeSequenceOf<MMSParty>(() => _decode_MMSParty))(_el); },
        "originatingMMSParty": (_el: _Element): void => { originatingMMSParty = $._decode_implicit<MMSParty>(() => _decode_MMSParty)(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<MMSDirection>(() => _decode_MMSDirection)(_el); },
        "contentType": (_el: _Element): void => { contentType = $._decode_implicit<MMSContentType>(() => _decode_MMSContentType)(_el); },
        "messageClass": (_el: _Element): void => { messageClass = $._decode_implicit<MMSMessageClass>(() => _decode_MMSMessageClass)(_el); },
        "dateTime": (_el: _Element): void => { dateTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "expiry": (_el: _Element): void => { expiry = $._decode_implicit<MMSExpiry>(() => _decode_MMSExpiry)(_el); },
        "deliveryReport": (_el: _Element): void => { deliveryReport = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<MMSPriority>(() => _decode_MMSPriority)(_el); },
        "senderVisibility": (_el: _Element): void => { senderVisibility = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "readReport": (_el: _Element): void => { readReport = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "subject": (_el: _Element): void => { subject = $._decode_implicit<MMSSubject>(() => _decode_MMSSubject)(_el); },
        "forwardCount": (_el: _Element): void => { forwardCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "previouslySentBy": (_el: _Element): void => { previouslySentBy = $._decode_implicit<MMSPreviouslySentBy>(() => _decode_MMSPreviouslySentBy)(_el); },
        "prevSentByDateTime": (_el: _Element): void => { prevSentByDateTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "applicID": (_el: _Element): void => { applicID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "replyApplicID": (_el: _Element): void => { replyApplicID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "auxApplicInfo": (_el: _Element): void => { auxApplicInfo = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "contentClass": (_el: _Element): void => { contentClass = $._decode_implicit<MMSContentClass>(() => _decode_MMSContentClass)(_el); },
        "dRMContent": (_el: _Element): void => { dRMContent = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "adaptationAllowed": (_el: _Element): void => { adaptationAllowed = $._decode_implicit<MMSAdaptation>(() => _decode_MMSAdaptation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSSendToNonLocalTarget,
        _extension_additions_list_spec_for_MMSSendToNonLocalTarget,
        _root_component_type_list_2_spec_for_MMSSendToNonLocalTarget,
        undefined,
    );
    return new MMSSendToNonLocalTarget(
        version,
        transactionID,
        messageID,
        terminatingMMSParty,
        originatingMMSParty,
        direction,
        contentType,
        messageClass,
        dateTime,
        expiry,
        deliveryReport,
        priority,
        senderVisibility,
        readReport,
        subject,
        forwardCount,
        previouslySentBy,
        prevSentByDateTime,
        applicID,
        replyApplicID,
        auxApplicInfo,
        contentClass,
        dRMContent,
        adaptationAllowed
    );
}; }
    return _cached_decoder_for_MMSSendToNonLocalTarget(el);
}

let _cached_encoder_for_MMSSendToNonLocalTarget: $.ASN1Encoder<MMSSendToNonLocalTarget> | null = null;

/**
 * @summary Encodes a(n) MMSSendToNonLocalTarget into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSSendToNonLocalTarget, encoded as an ASN.1 Element.
 */
export
function _encode_MMSSendToNonLocalTarget (value: MMSSendToNonLocalTarget, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSSendToNonLocalTarget) { _cached_encoder_for_MMSSendToNonLocalTarget = function (value: MMSSendToNonLocalTarget, elGetter: $.ASN1Encoder<MMSSendToNonLocalTarget>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSVersion, $.BER)(value.version, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.messageID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.terminatingMMSParty, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_MMSParty, $.BER)(value.originatingMMSParty, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_MMSDirection, $.BER)(value.direction, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_MMSContentType, $.BER)(value.contentType, $.BER),
            /* IF_ABSENT  */ ((value.messageClass === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_MMSMessageClass, $.BER)(value.messageClass, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_Timestamp, $.BER)(value.dateTime, $.BER),
            /* IF_ABSENT  */ ((value.expiry === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_MMSExpiry, $.BER)(value.expiry, $.BER)),
            /* IF_ABSENT  */ ((value.deliveryReport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.deliveryReport, $.BER)),
            /* IF_ABSENT  */ ((value.priority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_MMSPriority, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.senderVisibility === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeBoolean, $.BER)(value.senderVisibility, $.BER)),
            /* IF_ABSENT  */ ((value.readReport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeBoolean, $.BER)(value.readReport, $.BER)),
            /* IF_ABSENT  */ ((value.subject === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_MMSSubject, $.BER)(value.subject, $.BER)),
            /* IF_ABSENT  */ ((value.forwardCount === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER)(value.forwardCount, $.BER)),
            /* IF_ABSENT  */ ((value.previouslySentBy === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_MMSPreviouslySentBy, $.BER)(value.previouslySentBy, $.BER)),
            /* IF_ABSENT  */ ((value.prevSentByDateTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_Timestamp, $.BER)(value.prevSentByDateTime, $.BER)),
            /* IF_ABSENT  */ ((value.applicID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => $._encodeUTF8String, $.BER)(value.applicID, $.BER)),
            /* IF_ABSENT  */ ((value.replyApplicID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => $._encodeUTF8String, $.BER)(value.replyApplicID, $.BER)),
            /* IF_ABSENT  */ ((value.auxApplicInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => $._encodeUTF8String, $.BER)(value.auxApplicInfo, $.BER)),
            /* IF_ABSENT  */ ((value.contentClass === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_MMSContentClass, $.BER)(value.contentClass, $.BER)),
            /* IF_ABSENT  */ ((value.dRMContent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => $._encodeBoolean, $.BER)(value.dRMContent, $.BER)),
            /* IF_ABSENT  */ ((value.adaptationAllowed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => _encode_MMSAdaptation, $.BER)(value.adaptationAllowed, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSSendToNonLocalTarget(value, elGetter);
}


/* eslint-enable */
