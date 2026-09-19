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
import { MMSDirection, _decode_MMSDirection, _encode_MMSDirection, _enum_for_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
// export { MMSDirection, _enum_for_MMSDirection, MMSDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDirection, _encode_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { MMStatus, _decode_MMStatus, _encode_MMStatus, _enum_for_MMStatus } from "../TS33128Payloads/MMStatus.ta.mjs";
// export { MMStatus, _enum_for_MMStatus, MMStatus_expired /* IMPORTED_LONG_ENUMERATION_ITEM */, expired /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_rejected /* IMPORTED_LONG_ENUMERATION_ITEM */, rejected /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_deferred /* IMPORTED_LONG_ENUMERATION_ITEM */, deferred /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_unrecognized /* IMPORTED_LONG_ENUMERATION_ITEM */, unrecognized /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_indeterminate /* IMPORTED_LONG_ENUMERATION_ITEM */, indeterminate /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_unreachable /* IMPORTED_LONG_ENUMERATION_ITEM */, unreachable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMStatus, _encode_MMStatus } from "../TS33128Payloads/MMStatus.ta.mjs";
import { MMStatusExtension, _decode_MMStatusExtension, _encode_MMStatusExtension, _enum_for_MMStatusExtension } from "../TS33128Payloads/MMStatusExtension.ta.mjs";
// export { MMStatusExtension, _enum_for_MMStatusExtension, MMStatusExtension_rejectionByMMSRecipient /* IMPORTED_LONG_ENUMERATION_ITEM */, rejectionByMMSRecipient /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatusExtension_rejectionByOtherRS /* IMPORTED_LONG_ENUMERATION_ITEM */, rejectionByOtherRS /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMStatusExtension, _encode_MMStatusExtension } from "../TS33128Payloads/MMStatusExtension.ta.mjs";
import { MMStatusText, _decode_MMStatusText, _encode_MMStatusText } from "../TS33128Payloads/MMStatusText.ta.mjs";
// export { MMStatusText, _decode_MMStatusText, _encode_MMStatusText } from "../TS33128Payloads/MMStatusText.ta.mjs";


/**
 * @summary MMSDeliveryReportNonLocalTarget
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSDeliveryReportNonLocalTarget ::= SEQUENCE
 * {
 *     version             [1]  MMSVersion,
 *     transactionID       [2]  UTF8String,
 *     messageID           [3]  UTF8String,
 *     terminatingMMSParty [4]  SEQUENCE OF MMSParty,
 *     originatingMMSParty [5]  MMSParty,
 *     direction           [6]  MMSDirection,
 *     mMSDateTime         [7]  Timestamp,
 *     forwardToOriginator [8]  BOOLEAN OPTIONAL,
 *     status              [9]  MMStatus,
 *     statusExtension     [10] MMStatusExtension,
 *     statusText          [11] MMStatusText,
 *     applicID            [12] UTF8String OPTIONAL,
 *     replyApplicID       [13] UTF8String OPTIONAL,
 *     auxApplicInfo       [14] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMSDeliveryReportNonLocalTarget {
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
         * @summary `mMSDateTime`.
         * @public
         * @readonly
         */
        readonly mMSDateTime: Timestamp,
        /**
         * @summary `forwardToOriginator`.
         * @public
         * @readonly
         */
        readonly forwardToOriginator: OPTIONAL<BOOLEAN>,
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: MMStatus,
        /**
         * @summary `statusExtension`.
         * @public
         * @readonly
         */
        readonly statusExtension: MMStatusExtension,
        /**
         * @summary `statusText`.
         * @public
         * @readonly
         */
        readonly statusText: MMStatusText,
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
        readonly auxApplicInfo: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a MMSDeliveryReportNonLocalTarget
     * @description
     * 
     * This takes an `object` and converts it to a `MMSDeliveryReportNonLocalTarget`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSDeliveryReportNonLocalTarget`.
     * @returns {MMSDeliveryReportNonLocalTarget}
     */
    public static _from_object (_o: { [_K in keyof (MMSDeliveryReportNonLocalTarget)]: (MMSDeliveryReportNonLocalTarget)[_K] }): MMSDeliveryReportNonLocalTarget {
        return new MMSDeliveryReportNonLocalTarget(_o.version, _o.transactionID, _o.messageID, _o.terminatingMMSParty, _o.originatingMMSParty, _o.direction, _o.mMSDateTime, _o.forwardToOriginator, _o.status, _o.statusExtension, _o.statusText, _o.applicID, _o.replyApplicID, _o.auxApplicInfo);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_MMSDirection;        /**
         * @summary The enum used as the type of the component `status`
         * @public
         * @static
         */

    public static _enum_for_status = _enum_for_MMStatus;        /**
         * @summary The enum used as the type of the component `statusExtension`
         * @public
         * @static
         */

    public static _enum_for_statusExtension = _enum_for_MMStatusExtension;
}

/**
 * @summary The Leading Root Component Types of MMSDeliveryReportNonLocalTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSDeliveryReportNonLocalTarget: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("terminatingMMSParty", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("originatingMMSParty", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mMSDateTime", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("forwardToOriginator", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("status", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("statusExtension", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("statusText", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("applicID", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("replyApplicID", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("auxApplicInfo", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of MMSDeliveryReportNonLocalTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSDeliveryReportNonLocalTarget: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSDeliveryReportNonLocalTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSDeliveryReportNonLocalTarget: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSDeliveryReportNonLocalTarget: $.ASN1Decoder<MMSDeliveryReportNonLocalTarget> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSDeliveryReportNonLocalTarget
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSDeliveryReportNonLocalTarget (el: _Element): MMSDeliveryReportNonLocalTarget {
    if (!_cached_decoder_for_MMSDeliveryReportNonLocalTarget) { _cached_decoder_for_MMSDeliveryReportNonLocalTarget = function (el: _Element): MMSDeliveryReportNonLocalTarget {
    let version!: MMSVersion;
    let transactionID!: UTF8String;
    let messageID!: UTF8String;
    let terminatingMMSParty!: MMSParty[];
    let originatingMMSParty!: MMSParty;
    let direction!: MMSDirection;
    let mMSDateTime!: Timestamp;
    let forwardToOriginator: OPTIONAL<BOOLEAN>;
    let status!: MMStatus;
    let statusExtension!: MMStatusExtension;
    let statusText!: MMStatusText;
    let applicID: OPTIONAL<UTF8String>;
    let replyApplicID: OPTIONAL<UTF8String>;
    let auxApplicInfo: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(_el); },
        "transactionID": (_el: _Element): void => { transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "terminatingMMSParty": (_el: _Element): void => { terminatingMMSParty = $._decode_implicit<MMSParty[]>(() => $._decodeSequenceOf<MMSParty>(() => _decode_MMSParty))(_el); },
        "originatingMMSParty": (_el: _Element): void => { originatingMMSParty = $._decode_implicit<MMSParty>(() => _decode_MMSParty)(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<MMSDirection>(() => _decode_MMSDirection)(_el); },
        "mMSDateTime": (_el: _Element): void => { mMSDateTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "forwardToOriginator": (_el: _Element): void => { forwardToOriginator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "status": (_el: _Element): void => { status = $._decode_implicit<MMStatus>(() => _decode_MMStatus)(_el); },
        "statusExtension": (_el: _Element): void => { statusExtension = $._decode_implicit<MMStatusExtension>(() => _decode_MMStatusExtension)(_el); },
        "statusText": (_el: _Element): void => { statusText = $._decode_implicit<MMStatusText>(() => _decode_MMStatusText)(_el); },
        "applicID": (_el: _Element): void => { applicID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "replyApplicID": (_el: _Element): void => { replyApplicID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "auxApplicInfo": (_el: _Element): void => { auxApplicInfo = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSDeliveryReportNonLocalTarget,
        _extension_additions_list_spec_for_MMSDeliveryReportNonLocalTarget,
        _root_component_type_list_2_spec_for_MMSDeliveryReportNonLocalTarget,
        undefined,
    );
    return new MMSDeliveryReportNonLocalTarget(
        version,
        transactionID,
        messageID,
        terminatingMMSParty,
        originatingMMSParty,
        direction,
        mMSDateTime,
        forwardToOriginator,
        status,
        statusExtension,
        statusText,
        applicID,
        replyApplicID,
        auxApplicInfo
    );
}; }
    return _cached_decoder_for_MMSDeliveryReportNonLocalTarget(el);
}

let _cached_encoder_for_MMSDeliveryReportNonLocalTarget: $.ASN1Encoder<MMSDeliveryReportNonLocalTarget> | null = null;

/**
 * @summary Encodes a(n) MMSDeliveryReportNonLocalTarget into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSDeliveryReportNonLocalTarget, encoded as an ASN.1 Element.
 */
export
function _encode_MMSDeliveryReportNonLocalTarget (value: MMSDeliveryReportNonLocalTarget, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSDeliveryReportNonLocalTarget) { _cached_encoder_for_MMSDeliveryReportNonLocalTarget = function (value: MMSDeliveryReportNonLocalTarget, elGetter: $.ASN1Encoder<MMSDeliveryReportNonLocalTarget>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSVersion, $.BER)(value.version, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.messageID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.terminatingMMSParty, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_MMSParty, $.BER)(value.originatingMMSParty, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_MMSDirection, $.BER)(value.direction, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_Timestamp, $.BER)(value.mMSDateTime, $.BER),
            /* IF_ABSENT  */ ((value.forwardToOriginator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.forwardToOriginator, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_MMStatus, $.BER)(value.status, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => _encode_MMStatusExtension, $.BER)(value.statusExtension, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => _encode_MMStatusText, $.BER)(value.statusText, $.BER),
            /* IF_ABSENT  */ ((value.applicID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeUTF8String, $.BER)(value.applicID, $.BER)),
            /* IF_ABSENT  */ ((value.replyApplicID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeUTF8String, $.BER)(value.replyApplicID, $.BER)),
            /* IF_ABSENT  */ ((value.auxApplicInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeUTF8String, $.BER)(value.auxApplicInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSDeliveryReportNonLocalTarget(value, elGetter);
}


/* eslint-enable */
