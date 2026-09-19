/* eslint-disable */
import {
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
import { MMSReadStatus, _decode_MMSReadStatus, _encode_MMSReadStatus, _enum_for_MMSReadStatus } from "../TS33128Payloads/MMSReadStatus.ta.mjs";
// export { MMSReadStatus, _enum_for_MMSReadStatus, MMSReadStatus_read /* IMPORTED_LONG_ENUMERATION_ITEM */, read /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReadStatus_deletedWithoutBeingRead /* IMPORTED_LONG_ENUMERATION_ITEM */, deletedWithoutBeingRead /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSReadStatus, _encode_MMSReadStatus } from "../TS33128Payloads/MMSReadStatus.ta.mjs";
import { MMSReadStatusText, _decode_MMSReadStatusText, _encode_MMSReadStatusText } from "../TS33128Payloads/MMSReadStatusText.ta.mjs";
// export { MMSReadStatusText, _decode_MMSReadStatusText, _encode_MMSReadStatusText } from "../TS33128Payloads/MMSReadStatusText.ta.mjs";


/**
 * @summary MMSReadReportNonLocalTarget
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReadReportNonLocalTarget ::= SEQUENCE
 * {
 *     version             [1] MMSVersion,
 *     transactionID       [2] UTF8String,
 *     terminatingMMSParty [3] SEQUENCE OF MMSParty,
 *     originatingMMSParty [4] SEQUENCE OF MMSParty,
 *     direction           [5] MMSDirection,
 *     messageID           [6] UTF8String,
 *     mMSDateTime         [7] Timestamp,
 *     readStatus          [8] MMSReadStatus,
 *     readStatusText      [9] MMSReadStatusText OPTIONAL,
 *     applicID            [10] UTF8String OPTIONAL,
 *     replyApplicID       [11] UTF8String OPTIONAL,
 *     auxApplicInfo       [12] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMSReadReportNonLocalTarget {
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
         * @summary `originatingMMSParty`.
         * @public
         * @readonly
         */
        readonly originatingMMSParty: MMSParty[],
        /**
         * @summary `direction`.
         * @public
         * @readonly
         */
        readonly direction: MMSDirection,
        /**
         * @summary `messageID`.
         * @public
         * @readonly
         */
        readonly messageID: UTF8String,
        /**
         * @summary `mMSDateTime`.
         * @public
         * @readonly
         */
        readonly mMSDateTime: Timestamp,
        /**
         * @summary `readStatus`.
         * @public
         * @readonly
         */
        readonly readStatus: MMSReadStatus,
        /**
         * @summary `readStatusText`.
         * @public
         * @readonly
         */
        readonly readStatusText: OPTIONAL<MMSReadStatusText>,
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
     * @summary Restructures an object into a MMSReadReportNonLocalTarget
     * @description
     * 
     * This takes an `object` and converts it to a `MMSReadReportNonLocalTarget`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSReadReportNonLocalTarget`.
     * @returns {MMSReadReportNonLocalTarget}
     */
    public static _from_object (_o: { [_K in keyof (MMSReadReportNonLocalTarget)]: (MMSReadReportNonLocalTarget)[_K] }): MMSReadReportNonLocalTarget {
        return new MMSReadReportNonLocalTarget(_o.version, _o.transactionID, _o.terminatingMMSParty, _o.originatingMMSParty, _o.direction, _o.messageID, _o.mMSDateTime, _o.readStatus, _o.readStatusText, _o.applicID, _o.replyApplicID, _o.auxApplicInfo);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_MMSDirection;        /**
         * @summary The enum used as the type of the component `readStatus`
         * @public
         * @static
         */

    public static _enum_for_readStatus = _enum_for_MMSReadStatus;
}

/**
 * @summary The Leading Root Component Types of MMSReadReportNonLocalTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSReadReportNonLocalTarget: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("terminatingMMSParty", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("originatingMMSParty", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mMSDateTime", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("readStatus", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("readStatusText", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("applicID", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("replyApplicID", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("auxApplicInfo", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of MMSReadReportNonLocalTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSReadReportNonLocalTarget: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSReadReportNonLocalTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSReadReportNonLocalTarget: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSReadReportNonLocalTarget: $.ASN1Decoder<MMSReadReportNonLocalTarget> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSReadReportNonLocalTarget
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSReadReportNonLocalTarget (el: _Element): MMSReadReportNonLocalTarget {
    if (!_cached_decoder_for_MMSReadReportNonLocalTarget) { _cached_decoder_for_MMSReadReportNonLocalTarget = function (el: _Element): MMSReadReportNonLocalTarget {
    let version!: MMSVersion;
    let transactionID!: UTF8String;
    let terminatingMMSParty!: MMSParty[];
    let originatingMMSParty!: MMSParty[];
    let direction!: MMSDirection;
    let messageID!: UTF8String;
    let mMSDateTime!: Timestamp;
    let readStatus!: MMSReadStatus;
    let readStatusText: OPTIONAL<MMSReadStatusText>;
    let applicID: OPTIONAL<UTF8String>;
    let replyApplicID: OPTIONAL<UTF8String>;
    let auxApplicInfo: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(_el); },
        "transactionID": (_el: _Element): void => { transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "terminatingMMSParty": (_el: _Element): void => { terminatingMMSParty = $._decode_implicit<MMSParty[]>(() => $._decodeSequenceOf<MMSParty>(() => _decode_MMSParty))(_el); },
        "originatingMMSParty": (_el: _Element): void => { originatingMMSParty = $._decode_implicit<MMSParty[]>(() => $._decodeSequenceOf<MMSParty>(() => _decode_MMSParty))(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<MMSDirection>(() => _decode_MMSDirection)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "mMSDateTime": (_el: _Element): void => { mMSDateTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "readStatus": (_el: _Element): void => { readStatus = $._decode_implicit<MMSReadStatus>(() => _decode_MMSReadStatus)(_el); },
        "readStatusText": (_el: _Element): void => { readStatusText = $._decode_implicit<MMSReadStatusText>(() => _decode_MMSReadStatusText)(_el); },
        "applicID": (_el: _Element): void => { applicID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "replyApplicID": (_el: _Element): void => { replyApplicID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "auxApplicInfo": (_el: _Element): void => { auxApplicInfo = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSReadReportNonLocalTarget,
        _extension_additions_list_spec_for_MMSReadReportNonLocalTarget,
        _root_component_type_list_2_spec_for_MMSReadReportNonLocalTarget,
        undefined,
    );
    return new MMSReadReportNonLocalTarget(
        version,
        transactionID,
        terminatingMMSParty,
        originatingMMSParty,
        direction,
        messageID,
        mMSDateTime,
        readStatus,
        readStatusText,
        applicID,
        replyApplicID,
        auxApplicInfo
    );
}; }
    return _cached_decoder_for_MMSReadReportNonLocalTarget(el);
}

let _cached_encoder_for_MMSReadReportNonLocalTarget: $.ASN1Encoder<MMSReadReportNonLocalTarget> | null = null;

/**
 * @summary Encodes a(n) MMSReadReportNonLocalTarget into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSReadReportNonLocalTarget, encoded as an ASN.1 Element.
 */
export
function _encode_MMSReadReportNonLocalTarget (value: MMSReadReportNonLocalTarget, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSReadReportNonLocalTarget) { _cached_encoder_for_MMSReadReportNonLocalTarget = function (value: MMSReadReportNonLocalTarget, elGetter: $.ASN1Encoder<MMSReadReportNonLocalTarget>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSVersion, $.BER)(value.version, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.terminatingMMSParty, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.originatingMMSParty, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_MMSDirection, $.BER)(value.direction, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.messageID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_Timestamp, $.BER)(value.mMSDateTime, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_MMSReadStatus, $.BER)(value.readStatus, $.BER),
            /* IF_ABSENT  */ ((value.readStatusText === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_MMSReadStatusText, $.BER)(value.readStatusText, $.BER)),
            /* IF_ABSENT  */ ((value.applicID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeUTF8String, $.BER)(value.applicID, $.BER)),
            /* IF_ABSENT  */ ((value.replyApplicID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeUTF8String, $.BER)(value.replyApplicID, $.BER)),
            /* IF_ABSENT  */ ((value.auxApplicInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeUTF8String, $.BER)(value.auxApplicInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSReadReportNonLocalTarget(value, elGetter);
}


/* eslint-enable */
