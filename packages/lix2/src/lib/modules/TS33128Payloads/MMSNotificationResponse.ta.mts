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
import { MMStatus, _enum_for_MMStatus, MMStatus_expired /* IMPORTED_LONG_ENUMERATION_ITEM */, expired /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_rejected /* IMPORTED_LONG_ENUMERATION_ITEM */, rejected /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_deferred /* IMPORTED_LONG_ENUMERATION_ITEM */, deferred /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_unrecognized /* IMPORTED_LONG_ENUMERATION_ITEM */, unrecognized /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_indeterminate /* IMPORTED_LONG_ENUMERATION_ITEM */, indeterminate /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_unreachable /* IMPORTED_LONG_ENUMERATION_ITEM */, unreachable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMStatus, _encode_MMStatus } from "../TS33128Payloads/MMStatus.ta.mjs";
// export { MMStatus, _enum_for_MMStatus, MMStatus_expired /* IMPORTED_LONG_ENUMERATION_ITEM */, expired /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_rejected /* IMPORTED_LONG_ENUMERATION_ITEM */, rejected /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_deferred /* IMPORTED_LONG_ENUMERATION_ITEM */, deferred /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_unrecognized /* IMPORTED_LONG_ENUMERATION_ITEM */, unrecognized /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_indeterminate /* IMPORTED_LONG_ENUMERATION_ITEM */, indeterminate /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_unreachable /* IMPORTED_LONG_ENUMERATION_ITEM */, unreachable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMStatus, _encode_MMStatus } from "../TS33128Payloads/MMStatus.ta.mjs";


/**
 * @summary MMSNotificationResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSNotificationResponse ::= SEQUENCE
 * {
 *     transactionID [1] UTF8String,
 *     version       [2] MMSVersion,
 *     direction     [3] MMSDirection,
 *     status        [4] MMStatus,
 *     reportAllowed [5] BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMSNotificationResponse {
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
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: MMStatus,
        /**
         * @summary `reportAllowed`.
         * @public
         * @readonly
         */
        readonly reportAllowed: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a MMSNotificationResponse
     * @description
     * 
     * This takes an `object` and converts it to a `MMSNotificationResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSNotificationResponse`.
     * @returns {MMSNotificationResponse}
     */
    public static _from_object (_o: { [_K in keyof (MMSNotificationResponse)]: (MMSNotificationResponse)[_K] }): MMSNotificationResponse {
        return new MMSNotificationResponse(_o.transactionID, _o.version, _o.direction, _o.status, _o.reportAllowed);
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

    public static _enum_for_status = _enum_for_MMStatus;
}

/**
 * @summary The Leading Root Component Types of MMSNotificationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSNotificationResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("status", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("reportAllowed", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of MMSNotificationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSNotificationResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSNotificationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSNotificationResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSNotificationResponse: $.ASN1Decoder<MMSNotificationResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSNotificationResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSNotificationResponse (el: _Element): MMSNotificationResponse {
    if (!_cached_decoder_for_MMSNotificationResponse) { _cached_decoder_for_MMSNotificationResponse = function (el: _Element): MMSNotificationResponse {
    let transactionID!: UTF8String;
    let version!: MMSVersion;
    let direction!: MMSDirection;
    let status!: MMStatus;
    let reportAllowed: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "transactionID": (_el: _Element): void => { transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "version": (_el: _Element): void => { version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<MMSDirection>(() => _decode_MMSDirection)(_el); },
        "status": (_el: _Element): void => { status = $._decode_implicit<MMStatus>(() => _decode_MMStatus)(_el); },
        "reportAllowed": (_el: _Element): void => { reportAllowed = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSNotificationResponse,
        _extension_additions_list_spec_for_MMSNotificationResponse,
        _root_component_type_list_2_spec_for_MMSNotificationResponse,
        undefined,
    );
    return new MMSNotificationResponse(
        transactionID,
        version,
        direction,
        status,
        reportAllowed
    );
}; }
    return _cached_decoder_for_MMSNotificationResponse(el);
}

let _cached_encoder_for_MMSNotificationResponse: $.ASN1Encoder<MMSNotificationResponse> | null = null;

/**
 * @summary Encodes a(n) MMSNotificationResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSNotificationResponse, encoded as an ASN.1 Element.
 */
export
function _encode_MMSNotificationResponse (value: MMSNotificationResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSNotificationResponse) { _cached_encoder_for_MMSNotificationResponse = function (value: MMSNotificationResponse, elGetter: $.ASN1Encoder<MMSNotificationResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSVersion, $.BER)(value.version, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_MMSDirection, $.BER)(value.direction, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMStatus, $.BER)(value.status, $.BER),
            /* IF_ABSENT  */ ((value.reportAllowed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.reportAllowed, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSNotificationResponse(value, elGetter);
}


/* eslint-enable */
