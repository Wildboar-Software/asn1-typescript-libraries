/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
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
 * The IRI-POI in the MMS Proxy-Relay shall generate an xIRI containing an
 * MMSConvertedToEmail record when the MMS Proxy-Relay transforms a submitted MM
 * into an email format (as defined in TS 23.140 [40] Table D1.1) to a non-local
 * target ID.
 *
 * 3GPP TS 33.128, clause 7.4.3.4A.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @summary `version`.
     * @description
     *
     * The version of MM, to include major and minor version. Retreaved from the
     * submitted MM being transformed into external format.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
     *
     * @public
     * @readonly
     */
    readonly version: MMSVersion;
    /**
     * @summary `transactionID`.
     * @description
     *
     * An ID used to correlate an MMS request and response between the sender
     * and the MMS Proxy-Relay. Retreaved from the submitted MM. As defined in
     * OMA-TS-MMS_ENC [39] clause 7.3.63.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
     *
     * @public
     * @readonly
     */
    readonly transactionID: UTF8String;
    /**
     * @summary `terminatingMMSParty`.
     * @description
     *
     * ID(s) of the terminating party in one or more of the formats described in
     * clause 7.4.2.1.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
     *
     * @public
     * @readonly
     */
    readonly terminatingMMSParty: MMSParty[];
    /**
     * @summary `contentType`.
     * @description
     *
     * The content type of the MM. As defined in TS 23.140 [40] clause D1.1.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
     *
     * @public
     * @readonly
     */
    readonly contentType: MMSContentType;
    /**
     * @summary `originatingMMSParty`.
     * @description
     *
     * ID of the originating party in one or more of the formats described in
     * clause 7.4.2.1.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
     *
     * @public
     * @readonly
     */
    readonly originatingMMSParty: MMSParty;
    /**
     * @summary `messageClass`.
     * @description
     *
     * Class of the MM. For example, a value of "auto" is automatically
     * generated by the UE. If the field is not present, the class should be
     * interpreted as "personal". Retreaved from the submitted MM being
     * transformed into external format. Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
     *
     * @public
     * @readonly
     */
    readonly messageClass: OPTIONAL<MMSMessageClass>;
    /**
     * @summary `dateTime`.
     * @description
     *
     * Date and time when the MM was last handled (either originated or
     * forwarded). For origination, included by the sending MMS client or the
     * originating MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
     *
     * @public
     * @readonly
     */
    readonly dateTime: Timestamp;
    /**
     * @summary `expiry`.
     * @description
     *
     * Length of time in seconds the MM will be stored in MMS Proxy-Relay or
     * time to delete the MM. The field has two formats, either absolute or
     * relative. Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
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
     * Proxy-Relay. Retrieved from the submitted MM as defined in TS 23.140 [40]
     * table D1.1.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
     *
     * @public
     * @readonly
     */
    readonly desiredDeliveryTime: OPTIONAL<Timestamp>;
    /**
     * @summary `deliveryReport`.
     * @description
     *
     * Specifies whether the originator MM UE requests a delivery report from
     * each recipient. Sent by the sender to indicate the desired delivery
     * report. Shall be encoded as follows: "Yes" = True, "No" = False. Include
     * if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
     *
     * @public
     * @readonly
     */
    readonly deliveryReport: OPTIONAL<BOOLEAN>;
    /**
     * @summary `priority`.
     * @description
     *
     * Priority of the MM assigned by the originator MMS Client. Include if sent
     * to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
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
     * recipient. Sent by the sender to indicate the sender's visibility to the
     * other party or if not signalled by the sender and the default is to not
     * make sender visible to the other party. Shall be encoded as follows:
     * "Show" = True, "Hide" = False. Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
     *
     * @public
     * @readonly
     */
    readonly senderVisibility: OPTIONAL<BOOLEAN>;
    /**
     * @summary `store`.
     * @description
     *
     * Specifies whether the originator MM UE wants the submitted MM to be saved
     * in the user's MMBox, in addition to sending it. Shall be encoded as
     * follows: "Yes" = True, "No" = False. Include if sent to the MMS
     * Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
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
     * stored MM. Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
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
     * associated with a stored MM. Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
     *
     * @public
     * @readonly
     */
    readonly flags: OPTIONAL<MMFlags>;
    /**
     * @summary `readReport`.
     * @description
     *
     * Specifies whether the originator MM UE requests a read reply report from
     * each recipient. Sent by the sender to indicate the desired read reply
     * report. Shall be encoded as follows: "Yes" = True, "No" = False. Include
     * if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
     *
     * @public
     * @readonly
     */
    readonly readReport: OPTIONAL<BOOLEAN>;
    /**
     * @summary `subject`.
     * @description
     *
     * The subject of the MM. Include if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
     *
     * @public
     * @readonly
     */
    readonly subject: OPTIONAL<MMSSubject>;
    /**
     * @summary `messageID`.
     * @description
     *
     * An ID assigned by the MMS Proxy-Relay to uniquely identify an MM. As
     * defined in TS 23.140 [40] clause D1.1. Shall be included when it is
     * generated by the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.4A.
     *
     * @public
     * @readonly
     */
    readonly messageID: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        version: MMSVersion,
        transactionID: UTF8String,
        terminatingMMSParty: MMSParty[],
        contentType: MMSContentType,
        originatingMMSParty: MMSParty,
        messageClass: OPTIONAL<MMSMessageClass>,
        dateTime: Timestamp,
        expiry?: OPTIONAL<MMSExpiry>,
        desiredDeliveryTime?: OPTIONAL<Timestamp>,
        deliveryReport?: OPTIONAL<BOOLEAN>,
        priority?: OPTIONAL<MMSPriority>,
        senderVisibility?: OPTIONAL<BOOLEAN>,
        store?: OPTIONAL<BOOLEAN>,
        state?: OPTIONAL<MMState>,
        flags?: OPTIONAL<MMFlags>,
        readReport?: OPTIONAL<BOOLEAN>,
        subject?: OPTIONAL<MMSSubject>,
        messageID?: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.version = version;
        this.transactionID = transactionID;
        this.terminatingMMSParty = terminatingMMSParty;
        this.contentType = contentType;
        this.originatingMMSParty = originatingMMSParty;
        this.messageClass = messageClass;
        this.dateTime = dateTime;
        this.expiry = expiry;
        this.desiredDeliveryTime = desiredDeliveryTime;
        this.deliveryReport = deliveryReport;
        this.priority = priority;
        this.senderVisibility = senderVisibility;
        this.store = store;
        this.state = state;
        this.flags = flags;
        this.readReport = readReport;
        this.subject = subject;
        this.messageID = messageID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new MMSConvertedToEmail(_o.version, _o.transactionID, _o.terminatingMMSParty, _o.contentType, _o.originatingMMSParty, _o.messageClass, _o.dateTime, _o.expiry, _o.desiredDeliveryTime, _o.deliveryReport, _o.priority, _o.senderVisibility, _o.store, _o.state, _o.flags, _o.readReport, _o.subject, _o.messageID, _o._unrecognizedExtensionsList);
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
    const _unrecognizedExtensionsList: _Element[] = [];
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
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
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
        messageID,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(18 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSVersion, $.BER)(value.version, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.terminatingMMSParty, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMSContentType, $.BER)(value.contentType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_MMSParty, $.BER)(value.originatingMMSParty, $.BER);
    if (value.messageClass !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_MMSMessageClass, $.BER)(value.messageClass, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_Timestamp, $.BER)(value.dateTime, $.BER);
    if (value.expiry !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_MMSExpiry, $.BER)(value.expiry, $.BER);
    }
    if (value.desiredDeliveryTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_Timestamp, $.BER)(value.desiredDeliveryTime, $.BER);
    }
    if (value.deliveryReport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeBoolean, $.BER)(value.deliveryReport, $.BER);
    }
    if (value.priority !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_MMSPriority, $.BER)(value.priority, $.BER);
    }
    if (value.senderVisibility !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER)(value.senderVisibility, $.BER);
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
    if (value.readReport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeBoolean, $.BER)(value.readReport, $.BER);
    }
    if (value.subject !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_MMSSubject, $.BER)(value.subject, $.BER);
    }
    if (value.messageID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeUTF8String, $.BER)(value.messageID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMSConvertedToEmail(value, elGetter);
}


/* eslint-enable */
