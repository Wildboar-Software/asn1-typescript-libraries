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


/**
 * @summary MMSConvertedFromEmail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSConvertedFromEmail ::= SEQUENCE
 * {
 *     version             [1]  MMSVersion,
 *     transactionID       [2]  UTF8String,
 *     terminatingMMSParty [3]  SEQUENCE OF MMSParty,
 *     contentType         [4]  MMSContentType,
 *     originatingMMSParty [5]  MMSParty,
 *     messageClass        [6]  MMSMessageClass OPTIONAL,
 *     dateTime            [7]  Timestamp,
 *     expiry              [8]  MMSExpiry OPTIONAL,
 *     deliveryReport      [9]  BOOLEAN OPTIONAL,
 *     priority            [10] MMSPriority OPTIONAL,
 *     readReport          [11] BOOLEAN OPTIONAL,
 *     subject             [12] MMSSubject OPTIONAL,
 *     messageID           [13] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMSConvertedFromEmail {
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
         * @summary `terminatingMMSParty`.
         * @public
         * @readonly
         */
        readonly terminatingMMSParty: MMSParty[],
        /**
         * @summary `contentType`.
         * @public
         * @readonly
         */
        readonly contentType: MMSContentType,
        /**
         * @summary `originatingMMSParty`.
         * @public
         * @readonly
         */
        readonly originatingMMSParty: MMSParty,
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
         * @summary `messageID`.
         * @public
         * @readonly
         */
        readonly messageID: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a MMSConvertedFromEmail
     * @description
     * 
     * This takes an `object` and converts it to a `MMSConvertedFromEmail`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSConvertedFromEmail`.
     * @returns {MMSConvertedFromEmail}
     */
    public static _from_object (_o: { [_K in keyof (MMSConvertedFromEmail)]: (MMSConvertedFromEmail)[_K] }): MMSConvertedFromEmail {
        return new MMSConvertedFromEmail(_o.version, _o.transactionID, _o.terminatingMMSParty, _o.contentType, _o.originatingMMSParty, _o.messageClass, _o.dateTime, _o.expiry, _o.deliveryReport, _o.priority, _o.readReport, _o.subject, _o.messageID);
    }

        /**
         * @summary The enum used as the type of the component `messageClass`
         * @public
         * @static
         */

    public static _enum_for_messageClass = _enum_for_MMSMessageClass;        /**
         * @summary The enum used as the type of the component `priority`
         * @public
         * @static
         */

    public static _enum_for_priority = _enum_for_MMSPriority;
}

/**
 * @summary The Leading Root Component Types of MMSConvertedFromEmail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSConvertedFromEmail: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("terminatingMMSParty", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("contentType", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("originatingMMSParty", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("dateTime", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("expiry", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("deliveryReport", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("readReport", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("subject", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("messageID", true, $.hasTag(_TagClass.context, 13))
];

/**
 * @summary The Trailing Root Component Types of MMSConvertedFromEmail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSConvertedFromEmail: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSConvertedFromEmail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSConvertedFromEmail: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSConvertedFromEmail: $.ASN1Decoder<MMSConvertedFromEmail> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSConvertedFromEmail
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSConvertedFromEmail (el: _Element): MMSConvertedFromEmail {
    if (!_cached_decoder_for_MMSConvertedFromEmail) { _cached_decoder_for_MMSConvertedFromEmail = function (el: _Element): MMSConvertedFromEmail {
    let version!: MMSVersion;
    let transactionID!: UTF8String;
    let terminatingMMSParty!: MMSParty[];
    let contentType!: MMSContentType;
    let originatingMMSParty!: MMSParty;
    let messageClass: OPTIONAL<MMSMessageClass>;
    let dateTime!: Timestamp;
    let expiry: OPTIONAL<MMSExpiry>;
    let deliveryReport: OPTIONAL<BOOLEAN>;
    let priority: OPTIONAL<MMSPriority>;
    let readReport: OPTIONAL<BOOLEAN>;
    let subject: OPTIONAL<MMSSubject>;
    let messageID: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(_el); },
        "transactionID": (_el: _Element): void => { transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "terminatingMMSParty": (_el: _Element): void => { terminatingMMSParty = $._decode_implicit<MMSParty[]>(() => $._decodeSequenceOf<MMSParty>(() => _decode_MMSParty))(_el); },
        "contentType": (_el: _Element): void => { contentType = $._decode_implicit<MMSContentType>(() => _decode_MMSContentType)(_el); },
        "originatingMMSParty": (_el: _Element): void => { originatingMMSParty = $._decode_implicit<MMSParty>(() => _decode_MMSParty)(_el); },
        "messageClass": (_el: _Element): void => { messageClass = $._decode_implicit<MMSMessageClass>(() => _decode_MMSMessageClass)(_el); },
        "dateTime": (_el: _Element): void => { dateTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "expiry": (_el: _Element): void => { expiry = $._decode_implicit<MMSExpiry>(() => _decode_MMSExpiry)(_el); },
        "deliveryReport": (_el: _Element): void => { deliveryReport = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<MMSPriority>(() => _decode_MMSPriority)(_el); },
        "readReport": (_el: _Element): void => { readReport = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "subject": (_el: _Element): void => { subject = $._decode_implicit<MMSSubject>(() => _decode_MMSSubject)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSConvertedFromEmail,
        _extension_additions_list_spec_for_MMSConvertedFromEmail,
        _root_component_type_list_2_spec_for_MMSConvertedFromEmail,
        undefined,
    );
    return new MMSConvertedFromEmail(
        version,
        transactionID,
        terminatingMMSParty,
        contentType,
        originatingMMSParty,
        messageClass,
        dateTime,
        expiry,
        deliveryReport,
        priority,
        readReport,
        subject,
        messageID
    );
}; }
    return _cached_decoder_for_MMSConvertedFromEmail(el);
}

let _cached_encoder_for_MMSConvertedFromEmail: $.ASN1Encoder<MMSConvertedFromEmail> | null = null;

/**
 * @summary Encodes a(n) MMSConvertedFromEmail into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSConvertedFromEmail, encoded as an ASN.1 Element.
 */
export
function _encode_MMSConvertedFromEmail (value: MMSConvertedFromEmail, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSConvertedFromEmail) { _cached_encoder_for_MMSConvertedFromEmail = function (value: MMSConvertedFromEmail, elGetter: $.ASN1Encoder<MMSConvertedFromEmail>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSVersion, $.BER)(value.version, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.terminatingMMSParty, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMSContentType, $.BER)(value.contentType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_MMSParty, $.BER)(value.originatingMMSParty, $.BER),
            /* IF_ABSENT  */ ((value.messageClass === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_MMSMessageClass, $.BER)(value.messageClass, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_Timestamp, $.BER)(value.dateTime, $.BER),
            /* IF_ABSENT  */ ((value.expiry === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_MMSExpiry, $.BER)(value.expiry, $.BER)),
            /* IF_ABSENT  */ ((value.deliveryReport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.deliveryReport, $.BER)),
            /* IF_ABSENT  */ ((value.priority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_MMSPriority, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.readReport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.readReport, $.BER)),
            /* IF_ABSENT  */ ((value.subject === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_MMSSubject, $.BER)(value.subject, $.BER)),
            /* IF_ABSENT  */ ((value.messageID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeUTF8String, $.BER)(value.messageID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSConvertedFromEmail(value, elGetter);
}


/* eslint-enable */
