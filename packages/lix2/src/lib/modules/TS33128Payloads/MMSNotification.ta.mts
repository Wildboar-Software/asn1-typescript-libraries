/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
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
import { MMSDirection, _decode_MMSDirection, _encode_MMSDirection, _enum_for_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
// export { MMSDirection, _enum_for_MMSDirection, MMSDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDirection, _encode_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
import { MMSSubject, _decode_MMSSubject, _encode_MMSSubject } from "../TS33128Payloads/MMSSubject.ta.mjs";
// export { MMSSubject, _decode_MMSSubject, _encode_MMSSubject } from "../TS33128Payloads/MMSSubject.ta.mjs";
import { MMSMessageClass, _decode_MMSMessageClass, _encode_MMSMessageClass, _enum_for_MMSMessageClass } from "../TS33128Payloads/MMSMessageClass.ta.mjs";
// export { MMSMessageClass, _enum_for_MMSMessageClass, MMSMessageClass_personal /* IMPORTED_LONG_ENUMERATION_ITEM */, personal /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_advertisement /* IMPORTED_LONG_ENUMERATION_ITEM */, advertisement /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_informational /* IMPORTED_LONG_ENUMERATION_ITEM */, informational /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_auto /* IMPORTED_LONG_ENUMERATION_ITEM */, auto /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSMessageClass, _encode_MMSMessageClass } from "../TS33128Payloads/MMSMessageClass.ta.mjs";
import { MMSPriority, _decode_MMSPriority, _encode_MMSPriority, _enum_for_MMSPriority } from "../TS33128Payloads/MMSPriority.ta.mjs";
// export { MMSPriority, _enum_for_MMSPriority, MMSPriority_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSPriority_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSPriority_high /* IMPORTED_LONG_ENUMERATION_ITEM */, high /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSPriority, _encode_MMSPriority } from "../TS33128Payloads/MMSPriority.ta.mjs";
import { MMSExpiry, _decode_MMSExpiry, _encode_MMSExpiry } from "../TS33128Payloads/MMSExpiry.ta.mjs";
// export { MMSExpiry, _decode_MMSExpiry, _encode_MMSExpiry } from "../TS33128Payloads/MMSExpiry.ta.mjs";
import { MMSReplyCharging, _decode_MMSReplyCharging, _encode_MMSReplyCharging, _enum_for_MMSReplyCharging } from "../TS33128Payloads/MMSReplyCharging.ta.mjs";
// export { MMSReplyCharging, _enum_for_MMSReplyCharging, MMSReplyCharging_requested /* IMPORTED_LONG_ENUMERATION_ITEM */, requested /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_requestedTextOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedTextOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_accepted /* IMPORTED_LONG_ENUMERATION_ITEM */, accepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_acceptedTextOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, acceptedTextOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSReplyCharging, _encode_MMSReplyCharging } from "../TS33128Payloads/MMSReplyCharging.ta.mjs";


/**
 * @summary MMSNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSNotification ::= SEQUENCE
 * {
 *     transactionID           [1]  UTF8String,
 *     version                 [2]  MMSVersion,
 *     originatingMMSParty     [3]  MMSParty OPTIONAL,
 *     direction               [4]  MMSDirection,
 *     subject                 [5]  MMSSubject OPTIONAL,
 *     deliveryReportRequested [6]  BOOLEAN OPTIONAL,
 *     stored                  [7]  BOOLEAN OPTIONAL,
 *     messageClass            [8]  MMSMessageClass,
 *     priority                [9]  MMSPriority OPTIONAL,
 *     messageSize             [10]  INTEGER,
 *     expiry                  [11] MMSExpiry,
 *     replyCharging           [12] MMSReplyCharging OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMSNotification {
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
         * @summary `originatingMMSParty`.
         * @public
         * @readonly
         */
        readonly originatingMMSParty: OPTIONAL<MMSParty>,
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
         * @summary `deliveryReportRequested`.
         * @public
         * @readonly
         */
        readonly deliveryReportRequested: OPTIONAL<BOOLEAN>,
        /**
         * @summary `stored`.
         * @public
         * @readonly
         */
        readonly stored: OPTIONAL<BOOLEAN>,
        /**
         * @summary `messageClass`.
         * @public
         * @readonly
         */
        readonly messageClass: MMSMessageClass,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<MMSPriority>,
        /**
         * @summary `messageSize`.
         * @public
         * @readonly
         */
        readonly messageSize: INTEGER,
        /**
         * @summary `expiry`.
         * @public
         * @readonly
         */
        readonly expiry: MMSExpiry,
        /**
         * @summary `replyCharging`.
         * @public
         * @readonly
         */
        readonly replyCharging: OPTIONAL<MMSReplyCharging>
    ) {}

    /**
     * @summary Restructures an object into a MMSNotification
     * @description
     * 
     * This takes an `object` and converts it to a `MMSNotification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSNotification`.
     * @returns {MMSNotification}
     */
    public static _from_object (_o: { [_K in keyof (MMSNotification)]: (MMSNotification)[_K] }): MMSNotification {
        return new MMSNotification(_o.transactionID, _o.version, _o.originatingMMSParty, _o.direction, _o.subject, _o.deliveryReportRequested, _o.stored, _o.messageClass, _o.priority, _o.messageSize, _o.expiry, _o.replyCharging);
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
         * @summary The enum used as the type of the component `replyCharging`
         * @public
         * @static
         */

    public static _enum_for_replyCharging = _enum_for_MMSReplyCharging;
}

/**
 * @summary The Leading Root Component Types of MMSNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSNotification: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("originatingMMSParty", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("subject", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("deliveryReportRequested", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("stored", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("messageClass", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("messageSize", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("expiry", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("replyCharging", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of MMSNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSNotification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSNotification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSNotification: $.ASN1Decoder<MMSNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSNotification (el: _Element): MMSNotification {
    if (!_cached_decoder_for_MMSNotification) { _cached_decoder_for_MMSNotification = function (el: _Element): MMSNotification {
    let transactionID!: UTF8String;
    let version!: MMSVersion;
    let originatingMMSParty: OPTIONAL<MMSParty>;
    let direction!: MMSDirection;
    let subject: OPTIONAL<MMSSubject>;
    let deliveryReportRequested: OPTIONAL<BOOLEAN>;
    let stored: OPTIONAL<BOOLEAN>;
    let messageClass!: MMSMessageClass;
    let priority: OPTIONAL<MMSPriority>;
    let messageSize!: INTEGER;
    let expiry!: MMSExpiry;
    let replyCharging: OPTIONAL<MMSReplyCharging>;
    const callbacks: $.DecodingMap = {
        "transactionID": (_el: _Element): void => { transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "version": (_el: _Element): void => { version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(_el); },
        "originatingMMSParty": (_el: _Element): void => { originatingMMSParty = $._decode_implicit<MMSParty>(() => _decode_MMSParty)(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<MMSDirection>(() => _decode_MMSDirection)(_el); },
        "subject": (_el: _Element): void => { subject = $._decode_implicit<MMSSubject>(() => _decode_MMSSubject)(_el); },
        "deliveryReportRequested": (_el: _Element): void => { deliveryReportRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "stored": (_el: _Element): void => { stored = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "messageClass": (_el: _Element): void => { messageClass = $._decode_implicit<MMSMessageClass>(() => _decode_MMSMessageClass)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<MMSPriority>(() => _decode_MMSPriority)(_el); },
        "messageSize": (_el: _Element): void => { messageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "expiry": (_el: _Element): void => { expiry = $._decode_implicit<MMSExpiry>(() => _decode_MMSExpiry)(_el); },
        "replyCharging": (_el: _Element): void => { replyCharging = $._decode_implicit<MMSReplyCharging>(() => _decode_MMSReplyCharging)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSNotification,
        _extension_additions_list_spec_for_MMSNotification,
        _root_component_type_list_2_spec_for_MMSNotification,
        undefined,
    );
    return new MMSNotification(
        transactionID,
        version,
        originatingMMSParty,
        direction,
        subject,
        deliveryReportRequested,
        stored,
        messageClass,
        priority,
        messageSize,
        expiry,
        replyCharging
    );
}; }
    return _cached_decoder_for_MMSNotification(el);
}

let _cached_encoder_for_MMSNotification: $.ASN1Encoder<MMSNotification> | null = null;

/**
 * @summary Encodes a(n) MMSNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSNotification, encoded as an ASN.1 Element.
 */
export
function _encode_MMSNotification (value: MMSNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSNotification) { _cached_encoder_for_MMSNotification = function (value: MMSNotification, elGetter: $.ASN1Encoder<MMSNotification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSVersion, $.BER)(value.version, $.BER),
            /* IF_ABSENT  */ ((value.originatingMMSParty === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MMSParty, $.BER)(value.originatingMMSParty, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMSDirection, $.BER)(value.direction, $.BER),
            /* IF_ABSENT  */ ((value.subject === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MMSSubject, $.BER)(value.subject, $.BER)),
            /* IF_ABSENT  */ ((value.deliveryReportRequested === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.deliveryReportRequested, $.BER)),
            /* IF_ABSENT  */ ((value.stored === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.stored, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_MMSMessageClass, $.BER)(value.messageClass, $.BER),
            /* IF_ABSENT  */ ((value.priority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_MMSPriority, $.BER)(value.priority, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.messageSize, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => _encode_MMSExpiry, $.BER)(value.expiry, $.BER),
            /* IF_ABSENT  */ ((value.replyCharging === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_MMSReplyCharging, $.BER)(value.replyCharging, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSNotification(value, elGetter);
}


/* eslint-enable */
