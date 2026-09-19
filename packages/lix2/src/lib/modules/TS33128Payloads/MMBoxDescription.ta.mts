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
import { MMState, _decode_MMState, _encode_MMState, _enum_for_MMState } from "../TS33128Payloads/MMState.ta.mjs";
// export { MMState, _enum_for_MMState, MMState_draft /* IMPORTED_LONG_ENUMERATION_ITEM */, draft /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_sent /* IMPORTED_LONG_ENUMERATION_ITEM */, sent /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_new /* IMPORTED_LONG_ENUMERATION_ITEM */, new_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMState, _encode_MMState } from "../TS33128Payloads/MMState.ta.mjs";
import { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
// export { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { MMSParty, _decode_MMSParty, _encode_MMSParty } from "../TS33128Payloads/MMSParty.ta.mjs";
// export { MMSParty, _decode_MMSParty, _encode_MMSParty } from "../TS33128Payloads/MMSParty.ta.mjs";
import { MMSMessageClass, _decode_MMSMessageClass, _encode_MMSMessageClass, _enum_for_MMSMessageClass } from "../TS33128Payloads/MMSMessageClass.ta.mjs";
// export { MMSMessageClass, _enum_for_MMSMessageClass, MMSMessageClass_personal /* IMPORTED_LONG_ENUMERATION_ITEM */, personal /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_advertisement /* IMPORTED_LONG_ENUMERATION_ITEM */, advertisement /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_informational /* IMPORTED_LONG_ENUMERATION_ITEM */, informational /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSMessageClass_auto /* IMPORTED_LONG_ENUMERATION_ITEM */, auto /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSMessageClass, _encode_MMSMessageClass } from "../TS33128Payloads/MMSMessageClass.ta.mjs";
import { MMSSubject, _decode_MMSSubject, _encode_MMSSubject } from "../TS33128Payloads/MMSSubject.ta.mjs";
// export { MMSSubject, _decode_MMSSubject, _encode_MMSSubject } from "../TS33128Payloads/MMSSubject.ta.mjs";
import { MMSPriority, _decode_MMSPriority, _encode_MMSPriority, _enum_for_MMSPriority } from "../TS33128Payloads/MMSPriority.ta.mjs";
// export { MMSPriority, _enum_for_MMSPriority, MMSPriority_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSPriority_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSPriority_high /* IMPORTED_LONG_ENUMERATION_ITEM */, high /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSPriority, _encode_MMSPriority } from "../TS33128Payloads/MMSPriority.ta.mjs";
import { MMSReplyCharging, _decode_MMSReplyCharging, _encode_MMSReplyCharging, _enum_for_MMSReplyCharging } from "../TS33128Payloads/MMSReplyCharging.ta.mjs";
// export { MMSReplyCharging, _enum_for_MMSReplyCharging, MMSReplyCharging_requested /* IMPORTED_LONG_ENUMERATION_ITEM */, requested /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_requestedTextOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedTextOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_accepted /* IMPORTED_LONG_ENUMERATION_ITEM */, accepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReplyCharging_acceptedTextOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, acceptedTextOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSReplyCharging, _encode_MMSReplyCharging } from "../TS33128Payloads/MMSReplyCharging.ta.mjs";
import { MMSPreviouslySentBy, _decode_MMSPreviouslySentBy, _encode_MMSPreviouslySentBy } from "../TS33128Payloads/MMSPreviouslySentBy.ta.mjs";
// export { MMSPreviouslySentBy, _decode_MMSPreviouslySentBy, _encode_MMSPreviouslySentBy } from "../TS33128Payloads/MMSPreviouslySentBy.ta.mjs";


/**
 * @summary MMBoxDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMBoxDescription ::= SEQUENCE
 * {
 *     contentLocation          [1]  UTF8String OPTIONAL,
 *     messageID                [2]  UTF8String OPTIONAL,
 *     state                    [3]  MMState OPTIONAL,
 *     flags                    [4]  SEQUENCE OF MMFlags OPTIONAL,
 *     dateTime                 [5]  Timestamp OPTIONAL,
 *     originatingMMSParty      [6]  MMSParty OPTIONAL,
 *     terminatingMMSParty      [7]  SEQUENCE OF MMSParty OPTIONAL,
 *     cCRecipients             [8]  SEQUENCE OF MMSParty OPTIONAL,
 *     bCCRecipients            [9]  SEQUENCE OF MMSParty OPTIONAL,
 *     messageClass             [10] MMSMessageClass OPTIONAL,
 *     subject                  [11] MMSSubject OPTIONAL,
 *     priority                 [12] MMSPriority OPTIONAL,
 *     deliveryTime             [13] Timestamp OPTIONAL,
 *     readReport               [14] BOOLEAN OPTIONAL,
 *     messageSize              [15] INTEGER OPTIONAL,
 *     replyCharging            [16] MMSReplyCharging OPTIONAL,
 *     previouslySentBy         [17] MMSPreviouslySentBy OPTIONAL,
 *     previouslySentByDateTime [18] Timestamp OPTIONAL,
 *     contentType              [19] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMBoxDescription {
    constructor (
        /**
         * @summary `contentLocation`.
         * @public
         * @readonly
         */
        readonly contentLocation: OPTIONAL<UTF8String>,
        /**
         * @summary `messageID`.
         * @public
         * @readonly
         */
        readonly messageID: OPTIONAL<UTF8String>,
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
        readonly flags: OPTIONAL<MMFlags[]>,
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
        readonly originatingMMSParty: OPTIONAL<MMSParty>,
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
         * @summary `messageClass`.
         * @public
         * @readonly
         */
        readonly messageClass: OPTIONAL<MMSMessageClass>,
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: OPTIONAL<MMSSubject>,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<MMSPriority>,
        /**
         * @summary `deliveryTime`.
         * @public
         * @readonly
         */
        readonly deliveryTime: OPTIONAL<Timestamp>,
        /**
         * @summary `readReport`.
         * @public
         * @readonly
         */
        readonly readReport: OPTIONAL<BOOLEAN>,
        /**
         * @summary `messageSize`.
         * @public
         * @readonly
         */
        readonly messageSize: OPTIONAL<INTEGER>,
        /**
         * @summary `replyCharging`.
         * @public
         * @readonly
         */
        readonly replyCharging: OPTIONAL<MMSReplyCharging>,
        /**
         * @summary `previouslySentBy`.
         * @public
         * @readonly
         */
        readonly previouslySentBy: OPTIONAL<MMSPreviouslySentBy>,
        /**
         * @summary `previouslySentByDateTime`.
         * @public
         * @readonly
         */
        readonly previouslySentByDateTime: OPTIONAL<Timestamp>,
        /**
         * @summary `contentType`.
         * @public
         * @readonly
         */
        readonly contentType: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a MMBoxDescription
     * @description
     * 
     * This takes an `object` and converts it to a `MMBoxDescription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMBoxDescription`.
     * @returns {MMBoxDescription}
     */
    public static _from_object (_o: { [_K in keyof (MMBoxDescription)]: (MMBoxDescription)[_K] }): MMBoxDescription {
        return new MMBoxDescription(_o.contentLocation, _o.messageID, _o.state, _o.flags, _o.dateTime, _o.originatingMMSParty, _o.terminatingMMSParty, _o.cCRecipients, _o.bCCRecipients, _o.messageClass, _o.subject, _o.priority, _o.deliveryTime, _o.readReport, _o.messageSize, _o.replyCharging, _o.previouslySentBy, _o.previouslySentByDateTime, _o.contentType);
    }

        /**
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

    public static _enum_for_replyCharging = _enum_for_MMSReplyCharging;
}

/**
 * @summary The Leading Root Component Types of MMBoxDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMBoxDescription: $.ComponentSpec[] = [
    new $.ComponentSpec("contentLocation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("messageID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("state", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("flags", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("dateTime", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("originatingMMSParty", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("terminatingMMSParty", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("cCRecipients", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("bCCRecipients", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("subject", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("deliveryTime", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("readReport", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("messageSize", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("replyCharging", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("previouslySentBy", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("previouslySentByDateTime", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("contentType", true, $.hasTag(_TagClass.context, 19))
];

/**
 * @summary The Trailing Root Component Types of MMBoxDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMBoxDescription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMBoxDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMBoxDescription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMBoxDescription: $.ASN1Decoder<MMBoxDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMBoxDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMBoxDescription (el: _Element): MMBoxDescription {
    if (!_cached_decoder_for_MMBoxDescription) { _cached_decoder_for_MMBoxDescription = function (el: _Element): MMBoxDescription {
    let contentLocation: OPTIONAL<UTF8String>;
    let messageID: OPTIONAL<UTF8String>;
    let state: OPTIONAL<MMState>;
    let flags: OPTIONAL<MMFlags[]>;
    let dateTime: OPTIONAL<Timestamp>;
    let originatingMMSParty: OPTIONAL<MMSParty>;
    let terminatingMMSParty: OPTIONAL<MMSParty[]>;
    let cCRecipients: OPTIONAL<MMSParty[]>;
    let bCCRecipients: OPTIONAL<MMSParty[]>;
    let messageClass: OPTIONAL<MMSMessageClass>;
    let subject: OPTIONAL<MMSSubject>;
    let priority: OPTIONAL<MMSPriority>;
    let deliveryTime: OPTIONAL<Timestamp>;
    let readReport: OPTIONAL<BOOLEAN>;
    let messageSize: OPTIONAL<INTEGER>;
    let replyCharging: OPTIONAL<MMSReplyCharging>;
    let previouslySentBy: OPTIONAL<MMSPreviouslySentBy>;
    let previouslySentByDateTime: OPTIONAL<Timestamp>;
    let contentType: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "contentLocation": (_el: _Element): void => { contentLocation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "state": (_el: _Element): void => { state = $._decode_implicit<MMState>(() => _decode_MMState)(_el); },
        "flags": (_el: _Element): void => { flags = $._decode_implicit<MMFlags[]>(() => $._decodeSequenceOf<MMFlags>(() => _decode_MMFlags))(_el); },
        "dateTime": (_el: _Element): void => { dateTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "originatingMMSParty": (_el: _Element): void => { originatingMMSParty = $._decode_implicit<MMSParty>(() => _decode_MMSParty)(_el); },
        "terminatingMMSParty": (_el: _Element): void => { terminatingMMSParty = $._decode_implicit<MMSParty[]>(() => $._decodeSequenceOf<MMSParty>(() => _decode_MMSParty))(_el); },
        "cCRecipients": (_el: _Element): void => { cCRecipients = $._decode_implicit<MMSParty[]>(() => $._decodeSequenceOf<MMSParty>(() => _decode_MMSParty))(_el); },
        "bCCRecipients": (_el: _Element): void => { bCCRecipients = $._decode_implicit<MMSParty[]>(() => $._decodeSequenceOf<MMSParty>(() => _decode_MMSParty))(_el); },
        "messageClass": (_el: _Element): void => { messageClass = $._decode_implicit<MMSMessageClass>(() => _decode_MMSMessageClass)(_el); },
        "subject": (_el: _Element): void => { subject = $._decode_implicit<MMSSubject>(() => _decode_MMSSubject)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<MMSPriority>(() => _decode_MMSPriority)(_el); },
        "deliveryTime": (_el: _Element): void => { deliveryTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "readReport": (_el: _Element): void => { readReport = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "messageSize": (_el: _Element): void => { messageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "replyCharging": (_el: _Element): void => { replyCharging = $._decode_implicit<MMSReplyCharging>(() => _decode_MMSReplyCharging)(_el); },
        "previouslySentBy": (_el: _Element): void => { previouslySentBy = $._decode_implicit<MMSPreviouslySentBy>(() => _decode_MMSPreviouslySentBy)(_el); },
        "previouslySentByDateTime": (_el: _Element): void => { previouslySentByDateTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "contentType": (_el: _Element): void => { contentType = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMBoxDescription,
        _extension_additions_list_spec_for_MMBoxDescription,
        _root_component_type_list_2_spec_for_MMBoxDescription,
        undefined,
    );
    return new MMBoxDescription(
        contentLocation,
        messageID,
        state,
        flags,
        dateTime,
        originatingMMSParty,
        terminatingMMSParty,
        cCRecipients,
        bCCRecipients,
        messageClass,
        subject,
        priority,
        deliveryTime,
        readReport,
        messageSize,
        replyCharging,
        previouslySentBy,
        previouslySentByDateTime,
        contentType
    );
}; }
    return _cached_decoder_for_MMBoxDescription(el);
}

let _cached_encoder_for_MMBoxDescription: $.ASN1Encoder<MMBoxDescription> | null = null;

/**
 * @summary Encodes a(n) MMBoxDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMBoxDescription, encoded as an ASN.1 Element.
 */
export
function _encode_MMBoxDescription (value: MMBoxDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMBoxDescription) { _cached_encoder_for_MMBoxDescription = function (value: MMBoxDescription, elGetter: $.ASN1Encoder<MMBoxDescription>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.contentLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.contentLocation, $.BER)),
            /* IF_ABSENT  */ ((value.messageID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.messageID, $.BER)),
            /* IF_ABSENT  */ ((value.state === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MMState, $.BER)(value.state, $.BER)),
            /* IF_ABSENT  */ ((value.flags === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<MMFlags>(() => _encode_MMFlags, $.BER), $.BER)(value.flags, $.BER)),
            /* IF_ABSENT  */ ((value.dateTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Timestamp, $.BER)(value.dateTime, $.BER)),
            /* IF_ABSENT  */ ((value.originatingMMSParty === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_MMSParty, $.BER)(value.originatingMMSParty, $.BER)),
            /* IF_ABSENT  */ ((value.terminatingMMSParty === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.terminatingMMSParty, $.BER)),
            /* IF_ABSENT  */ ((value.cCRecipients === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.cCRecipients, $.BER)),
            /* IF_ABSENT  */ ((value.bCCRecipients === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.bCCRecipients, $.BER)),
            /* IF_ABSENT  */ ((value.messageClass === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_MMSMessageClass, $.BER)(value.messageClass, $.BER)),
            /* IF_ABSENT  */ ((value.subject === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_MMSSubject, $.BER)(value.subject, $.BER)),
            /* IF_ABSENT  */ ((value.priority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_MMSPriority, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.deliveryTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_Timestamp, $.BER)(value.deliveryTime, $.BER)),
            /* IF_ABSENT  */ ((value.readReport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeBoolean, $.BER)(value.readReport, $.BER)),
            /* IF_ABSENT  */ ((value.messageSize === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.messageSize, $.BER)),
            /* IF_ABSENT  */ ((value.replyCharging === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_MMSReplyCharging, $.BER)(value.replyCharging, $.BER)),
            /* IF_ABSENT  */ ((value.previouslySentBy === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_MMSPreviouslySentBy, $.BER)(value.previouslySentBy, $.BER)),
            /* IF_ABSENT  */ ((value.previouslySentByDateTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_Timestamp, $.BER)(value.previouslySentByDateTime, $.BER)),
            /* IF_ABSENT  */ ((value.contentType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => $._encodeUTF8String, $.BER)(value.contentType, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMBoxDescription(value, elGetter);
}


/* eslint-enable */
