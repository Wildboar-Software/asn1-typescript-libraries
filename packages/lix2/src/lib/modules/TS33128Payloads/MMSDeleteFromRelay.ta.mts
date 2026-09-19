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
import { MMSDirection, _enum_for_MMSDirection, MMSDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDirection, _encode_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
// export { MMSDirection, _enum_for_MMSDirection, MMSDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDirection, _encode_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
import { MMSDeleteResponseStatus, _enum_for_MMSDeleteResponseStatus, MMSDeleteResponseStatus_ok /* IMPORTED_LONG_ENUMERATION_ITEM */, ok /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorUnspecified /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnspecified /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageFormatCorrupt /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorUnsupportedMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnsupportedMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorTransientFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorTransientSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorTransientMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorTransientNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorTransientPartialSuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientPartialSuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentMessageFormatCorrupt /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentReplyChargingForwardingDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingForwardingDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentReplyChargingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentAddressHidingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentAddressHidingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentLackOfPrepaid /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentLackOfPrepaid /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDeleteResponseStatus, _encode_MMSDeleteResponseStatus } from "../TS33128Payloads/MMSDeleteResponseStatus.ta.mjs";
// export { MMSDeleteResponseStatus, _enum_for_MMSDeleteResponseStatus, MMSDeleteResponseStatus_ok /* IMPORTED_LONG_ENUMERATION_ITEM */, ok /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorUnspecified /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnspecified /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageFormatCorrupt /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorUnsupportedMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnsupportedMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorTransientFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorTransientSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorTransientMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorTransientNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorTransientPartialSuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientPartialSuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentMessageFormatCorrupt /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentReplyChargingForwardingDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingForwardingDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentReplyChargingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentAddressHidingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentAddressHidingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDeleteResponseStatus_errorPermanentLackOfPrepaid /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentLackOfPrepaid /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDeleteResponseStatus, _encode_MMSDeleteResponseStatus } from "../TS33128Payloads/MMSDeleteResponseStatus.ta.mjs";


/**
 * @summary MMSDeleteFromRelay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSDeleteFromRelay ::= SEQUENCE
 * {
 *     transactionID        [1] UTF8String,
 *     version              [2] MMSVersion,
 *     direction            [3] MMSDirection,
 *     contentLocationReq   [4] SEQUENCE OF UTF8String,
 *     contentLocationConf  [5] SEQUENCE OF UTF8String,
 *     deleteResponseStatus [6] MMSDeleteResponseStatus,
 *     deleteResponseText   [7] SEQUENCE OF UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class MMSDeleteFromRelay {
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
         * @summary `direction`.
         * @public
         * @readonly
         */
        readonly direction: MMSDirection,
        /**
         * @summary `contentLocationReq`.
         * @public
         * @readonly
         */
        readonly contentLocationReq: UTF8String[],
        /**
         * @summary `contentLocationConf`.
         * @public
         * @readonly
         */
        readonly contentLocationConf: UTF8String[],
        /**
         * @summary `deleteResponseStatus`.
         * @public
         * @readonly
         */
        readonly deleteResponseStatus: MMSDeleteResponseStatus,
        /**
         * @summary `deleteResponseText`.
         * @public
         * @readonly
         */
        readonly deleteResponseText: UTF8String[]
    ) {}

    /**
     * @summary Restructures an object into a MMSDeleteFromRelay
     * @description
     * 
     * This takes an `object` and converts it to a `MMSDeleteFromRelay`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSDeleteFromRelay`.
     * @returns {MMSDeleteFromRelay}
     */
    public static _from_object (_o: { [_K in keyof (MMSDeleteFromRelay)]: (MMSDeleteFromRelay)[_K] }): MMSDeleteFromRelay {
        return new MMSDeleteFromRelay(_o.transactionID, _o.version, _o.direction, _o.contentLocationReq, _o.contentLocationConf, _o.deleteResponseStatus, _o.deleteResponseText);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_MMSDirection;        /**
         * @summary The enum used as the type of the component `deleteResponseStatus`
         * @public
         * @static
         */

    public static _enum_for_deleteResponseStatus = _enum_for_MMSDeleteResponseStatus;
}

/**
 * @summary The Leading Root Component Types of MMSDeleteFromRelay
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSDeleteFromRelay: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("contentLocationReq", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("contentLocationConf", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("deleteResponseStatus", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("deleteResponseText", false, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of MMSDeleteFromRelay
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSDeleteFromRelay: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSDeleteFromRelay
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSDeleteFromRelay: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSDeleteFromRelay: $.ASN1Decoder<MMSDeleteFromRelay> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSDeleteFromRelay
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSDeleteFromRelay (el: _Element): MMSDeleteFromRelay {
    if (!_cached_decoder_for_MMSDeleteFromRelay) { _cached_decoder_for_MMSDeleteFromRelay = function (el: _Element): MMSDeleteFromRelay {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 7) {
        throw new _ConstructionError("MMSDeleteFromRelay contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "transactionID";
    sequence[1].name = "version";
    sequence[2].name = "direction";
    sequence[3].name = "contentLocationReq";
    sequence[4].name = "contentLocationConf";
    sequence[5].name = "deleteResponseStatus";
    sequence[6].name = "deleteResponseText";
    let transactionID!: UTF8String;
    let version!: MMSVersion;
    let direction!: MMSDirection;
    let contentLocationReq!: UTF8String[];
    let contentLocationConf!: UTF8String[];
    let deleteResponseStatus!: MMSDeleteResponseStatus;
    let deleteResponseText!: UTF8String[];
    transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[0]);
    version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(sequence[1]);
    direction = $._decode_implicit<MMSDirection>(() => _decode_MMSDirection)(sequence[2]);
    contentLocationReq = $._decode_implicit<UTF8String[]>(() => $._decodeSequenceOf<UTF8String>(() => $._decodeUTF8String))(sequence[3]);
    contentLocationConf = $._decode_implicit<UTF8String[]>(() => $._decodeSequenceOf<UTF8String>(() => $._decodeUTF8String))(sequence[4]);
    deleteResponseStatus = $._decode_implicit<MMSDeleteResponseStatus>(() => _decode_MMSDeleteResponseStatus)(sequence[5]);
    deleteResponseText = $._decode_implicit<UTF8String[]>(() => $._decodeSequenceOf<UTF8String>(() => $._decodeUTF8String))(sequence[6]);
    return new MMSDeleteFromRelay(
        transactionID,
        version,
        direction,
        contentLocationReq,
        contentLocationConf,
        deleteResponseStatus,
        deleteResponseText,

    );
}; }
    return _cached_decoder_for_MMSDeleteFromRelay(el);
}

let _cached_encoder_for_MMSDeleteFromRelay: $.ASN1Encoder<MMSDeleteFromRelay> | null = null;

/**
 * @summary Encodes a(n) MMSDeleteFromRelay into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSDeleteFromRelay, encoded as an ASN.1 Element.
 */
export
function _encode_MMSDeleteFromRelay (value: MMSDeleteFromRelay, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSDeleteFromRelay) { _cached_encoder_for_MMSDeleteFromRelay = function (value: MMSDeleteFromRelay, elGetter: $.ASN1Encoder<MMSDeleteFromRelay>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSVersion, $.BER)(value.version, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_MMSDirection, $.BER)(value.direction, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<UTF8String>(() => $._encodeUTF8String, $.BER), $.BER)(value.contentLocationReq, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<UTF8String>(() => $._encodeUTF8String, $.BER), $.BER)(value.contentLocationConf, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_MMSDeleteResponseStatus, $.BER)(value.deleteResponseStatus, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<UTF8String>(() => $._encodeUTF8String, $.BER), $.BER)(value.deleteResponseText, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSDeleteFromRelay(value, elGetter);
}


/* eslint-enable */
