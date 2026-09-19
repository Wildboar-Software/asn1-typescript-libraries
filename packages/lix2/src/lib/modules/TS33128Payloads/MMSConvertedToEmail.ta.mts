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
import { MMSParty, _decode_MMSParty, _encode_MMSParty } from "../TS33128Payloads/MMSParty.ta.mjs";
// export { MMSParty, _decode_MMSParty, _encode_MMSParty } from "../TS33128Payloads/MMSParty.ta.mjs";
import { MMSContentType, _decode_MMSContentType, _encode_MMSContentType } from "../TS33128Payloads/MMSContentType.ta.mjs";
// export { MMSContentType, _decode_MMSContentType, _encode_MMSContentType } from "../TS33128Payloads/MMSContentType.ta.mjs";
import { MMSMessageClass, _decode_MMSMessageClass, _encode_MMSMessageClass, _enum_for_MMSMessageClass } from "../TS33128Payloads/MMSMessageClass.ta.mjs";
// export { MMSMessageClass, _enum_for_MMSMessageClass, MMSMessageClass_personal /* IMPORTED_LONG_ENUMERATION_ITEM */, personal /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_advertisement /* IMPORTED_LONG_ENUMERATION_ITEM */, advertisement /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_informational /* IMPORTED_LONG_ENUMERATION_ITEM */, informational /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_auto /* IMPORTED_LONG_ENUMERATION_ITEM */, auto /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSMessageClass, _encode_MMSMessageClass } from "../TS33128Payloads/MMSMessageClass.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { MMSExpiry, _decode_MMSExpiry, _encode_MMSExpiry } from "../TS33128Payloads/MMSExpiry.ta.mjs";
// export { MMSExpiry, _decode_MMSExpiry, _encode_MMSExpiry } from "../TS33128Payloads/MMSExpiry.ta.mjs";
import { MMSPriority, _decode_MMSPriority, _encode_MMSPriority, _enum_for_MMSPriority } from "../TS33128Payloads/MMSPriority.ta.mjs";
// export { MMSPriority, _enum_for_MMSPriority, MMSPriority_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSPriority_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSPriority_high /* IMPORTED_LONG_ENUMERATION_ITEM */, high /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSPriority, _encode_MMSPriority } from "../TS33128Payloads/MMSPriority.ta.mjs";
import { MMState, _decode_MMState, _encode_MMState, _enum_for_MMState } from "../TS33128Payloads/MMState.ta.mjs";
// export { MMState, _enum_for_MMState, MMState_draft /* IMPORTED_LONG_ENUMERATION_ITEM */, draft /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_sent /* IMPORTED_LONG_ENUMERATION_ITEM */, sent /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_new /* IMPORTED_LONG_ENUMERATION_ITEM */, new_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMState, _encode_MMState } from "../TS33128Payloads/MMState.ta.mjs";
import { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
// export { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
import { MMSSubject, _decode_MMSSubject, _encode_MMSSubject } from "../TS33128Payloads/MMSSubject.ta.mjs";
// export { MMSSubject, _decode_MMSSubject, _encode_MMSSubject } from "../TS33128Payloads/MMSSubject.ta.mjs";


/**
 * @summary MMSConvertedToEmail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSConvertedToEmail ::= SEQUENCE
 * {
 *     version             [1]  MMSVersion,
 *     transactionID       [2]  UTF8String,
 *     terminatingMMSParty [3]  SEQUENCE OF MMSParty,
 *     contentType         [4]  MMSContentType,
 *     originatingMMSParty [5]  MMSParty,
 *     messageClass        [6]  MMSMessageClass OPTIONAL,
 *     dateTime            [7]  Timestamp,
 *     expiry              [8]  MMSExpiry OPTIONAL,
 *     desiredDeliveryTime [9]  Timestamp OPTIONAL,
 *     deliveryReport      [10] BOOLEAN OPTIONAL,
 *     priority            [11] MMSPriority OPTIONAL,
 *     senderVisibility    [12] BOOLEAN OPTIONAL,
 *     store               [13] BOOLEAN OPTIONAL,
 *     state               [14] MMState OPTIONAL,
 *     flags               [15] MMFlags OPTIONAL,
 *     readReport          [16] BOOLEAN OPTIONAL,
 *     subject             [17] MMSSubject OPTIONAL,
 *     messageID           [18] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMSConvertedToEmail {
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
         * @summary `desiredDeliveryTime`.
         * @public
         * @readonly
         */
        readonly desiredDeliveryTime: OPTIONAL<Timestamp>,
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
     * @summary Restructures an object into a MMSConvertedToEmail
     * @description
     * 
     * This takes an `object` and converts it to a `MMSConvertedToEmail`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSConvertedToEmail`.
     * @returns {MMSConvertedToEmail}
     */
    public static _from_object (_o: { [_K in keyof (MMSConvertedToEmail)]: (MMSConvertedToEmail)[_K] }): MMSConvertedToEmail {
        return new MMSConvertedToEmail(_o.version, _o.transactionID, _o.terminatingMMSParty, _o.contentType, _o.originatingMMSParty, _o.messageClass, _o.dateTime, _o.expiry, _o.desiredDeliveryTime, _o.deliveryReport, _o.priority, _o.senderVisibility, _o.store, _o.state, _o.flags, _o.readReport, _o.subject, _o.messageID);
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

    public static _enum_for_priority = _enum_for_MMSPriority;        /**
         * @summary The enum used as the type of the component `state`
         * @public
         * @static
         */

    public static _enum_for_state = _enum_for_MMState;
}

/**
 * @summary The Leading Root Component Types of MMSConvertedToEmail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSConvertedToEmail: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("terminatingMMSParty", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("contentType", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("originatingMMSParty", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("dateTime", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("expiry", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("desiredDeliveryTime", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("deliveryReport", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("senderVisibility", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("store", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("state", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("flags", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("readReport", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("subject", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("messageID", true, $.hasTag(_TagClass.context, 18))
];

/**
 * @summary The Trailing Root Component Types of MMSConvertedToEmail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSConvertedToEmail: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSConvertedToEmail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSConvertedToEmail: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSConvertedToEmail: $.ASN1Decoder<MMSConvertedToEmail> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSConvertedToEmail
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSConvertedToEmail (el: _Element): MMSConvertedToEmail {
    if (!_cached_decoder_for_MMSConvertedToEmail) { _cached_decoder_for_MMSConvertedToEmail = function (el: _Element): MMSConvertedToEmail {
    let version!: MMSVersion;
    let transactionID!: UTF8String;
    let terminatingMMSParty!: MMSParty[];
    let contentType!: MMSContentType;
    let originatingMMSParty!: MMSParty;
    let messageClass: OPTIONAL<MMSMessageClass>;
    let dateTime!: Timestamp;
    let expiry: OPTIONAL<MMSExpiry>;
    let desiredDeliveryTime: OPTIONAL<Timestamp>;
    let deliveryReport: OPTIONAL<BOOLEAN>;
    let priority: OPTIONAL<MMSPriority>;
    let senderVisibility: OPTIONAL<BOOLEAN>;
    let store: OPTIONAL<BOOLEAN>;
    let state: OPTIONAL<MMState>;
    let flags: OPTIONAL<MMFlags>;
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
        "desiredDeliveryTime": (_el: _Element): void => { desiredDeliveryTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "deliveryReport": (_el: _Element): void => { deliveryReport = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<MMSPriority>(() => _decode_MMSPriority)(_el); },
        "senderVisibility": (_el: _Element): void => { senderVisibility = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "store": (_el: _Element): void => { store = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "state": (_el: _Element): void => { state = $._decode_implicit<MMState>(() => _decode_MMState)(_el); },
        "flags": (_el: _Element): void => { flags = $._decode_implicit<MMFlags>(() => _decode_MMFlags)(_el); },
        "readReport": (_el: _Element): void => { readReport = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "subject": (_el: _Element): void => { subject = $._decode_implicit<MMSSubject>(() => _decode_MMSSubject)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSConvertedToEmail,
        _extension_additions_list_spec_for_MMSConvertedToEmail,
        _root_component_type_list_2_spec_for_MMSConvertedToEmail,
        undefined,
    );
    return new MMSConvertedToEmail(
        version,
        transactionID,
        terminatingMMSParty,
        contentType,
        originatingMMSParty,
        messageClass,
        dateTime,
        expiry,
        desiredDeliveryTime,
        deliveryReport,
        priority,
        senderVisibility,
        store,
        state,
        flags,
        readReport,
        subject,
        messageID
    );
}; }
    return _cached_decoder_for_MMSConvertedToEmail(el);
}

let _cached_encoder_for_MMSConvertedToEmail: $.ASN1Encoder<MMSConvertedToEmail> | null = null;

/**
 * @summary Encodes a(n) MMSConvertedToEmail into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSConvertedToEmail, encoded as an ASN.1 Element.
 */
export
function _encode_MMSConvertedToEmail (value: MMSConvertedToEmail, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSConvertedToEmail) { _cached_encoder_for_MMSConvertedToEmail = function (value: MMSConvertedToEmail, elGetter: $.ASN1Encoder<MMSConvertedToEmail>): _Element {
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
            /* IF_ABSENT  */ ((value.desiredDeliveryTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_Timestamp, $.BER)(value.desiredDeliveryTime, $.BER)),
            /* IF_ABSENT  */ ((value.deliveryReport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeBoolean, $.BER)(value.deliveryReport, $.BER)),
            /* IF_ABSENT  */ ((value.priority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_MMSPriority, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.senderVisibility === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER)(value.senderVisibility, $.BER)),
            /* IF_ABSENT  */ ((value.store === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeBoolean, $.BER)(value.store, $.BER)),
            /* IF_ABSENT  */ ((value.state === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_MMState, $.BER)(value.state, $.BER)),
            /* IF_ABSENT  */ ((value.flags === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_MMFlags, $.BER)(value.flags, $.BER)),
            /* IF_ABSENT  */ ((value.readReport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeBoolean, $.BER)(value.readReport, $.BER)),
            /* IF_ABSENT  */ ((value.subject === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_MMSSubject, $.BER)(value.subject, $.BER)),
            /* IF_ABSENT  */ ((value.messageID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => $._encodeUTF8String, $.BER)(value.messageID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSConvertedToEmail(value, elGetter);
}


/* eslint-enable */
