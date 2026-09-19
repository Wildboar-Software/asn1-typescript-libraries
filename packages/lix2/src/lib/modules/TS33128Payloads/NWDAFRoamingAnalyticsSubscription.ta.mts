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
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { NWDAFEventsSubscriptionOpType, _enum_for_NWDAFEventsSubscriptionOpType, NWDAFEventsSubscriptionOpType_pOST /* IMPORTED_LONG_ENUMERATION_ITEM */, pOST /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionOpType_pUT /* IMPORTED_LONG_ENUMERATION_ITEM */, pUT /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionOpType_dELETE /* IMPORTED_LONG_ENUMERATION_ITEM */, dELETE /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFEventsSubscriptionOpType, _encode_NWDAFEventsSubscriptionOpType } from "../TS33128Payloads/NWDAFEventsSubscriptionOpType.ta.mjs";
// export { NWDAFEventsSubscriptionOpType, _enum_for_NWDAFEventsSubscriptionOpType, NWDAFEventsSubscriptionOpType_pOST /* IMPORTED_LONG_ENUMERATION_ITEM */, pOST /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionOpType_pUT /* IMPORTED_LONG_ENUMERATION_ITEM */, pUT /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionOpType_dELETE /* IMPORTED_LONG_ENUMERATION_ITEM */, dELETE /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFEventsSubscriptionOpType, _encode_NWDAFEventsSubscriptionOpType } from "../TS33128Payloads/NWDAFEventsSubscriptionOpType.ta.mjs";
import { NWDAFEvent, _enum_for_NWDAFEvent, NWDAFEvent_serviceExperience /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceExperience /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_uEMobility /* IMPORTED_LONG_ENUMERATION_ITEM */, uEMobility /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_uEComm /* IMPORTED_LONG_ENUMERATION_ITEM */, uEComm /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_abnormalBehaviour /* IMPORTED_LONG_ENUMERATION_ITEM */, abnormalBehaviour /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_dispersion /* IMPORTED_LONG_ENUMERATION_ITEM */, dispersion /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_relativeProximity /* IMPORTED_LONG_ENUMERATION_ITEM */, relativeProximity /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_pDUSessionTraffic /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionTraffic /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFEvent, _encode_NWDAFEvent } from "../TS33128Payloads/NWDAFEvent.ta.mjs";
// export { NWDAFEvent, _enum_for_NWDAFEvent, NWDAFEvent_serviceExperience /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceExperience /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_uEMobility /* IMPORTED_LONG_ENUMERATION_ITEM */, uEMobility /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_uEComm /* IMPORTED_LONG_ENUMERATION_ITEM */, uEComm /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_abnormalBehaviour /* IMPORTED_LONG_ENUMERATION_ITEM */, abnormalBehaviour /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_dispersion /* IMPORTED_LONG_ENUMERATION_ITEM */, dispersion /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_relativeProximity /* IMPORTED_LONG_ENUMERATION_ITEM */, relativeProximity /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_pDUSessionTraffic /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionTraffic /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFEvent, _encode_NWDAFEvent } from "../TS33128Payloads/NWDAFEvent.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { NWDAFEventsSubscriptionResponseCode, _enum_for_NWDAFEventsSubscriptionResponseCode, NWDAFEventsSubscriptionResponseCode_oK200 /* IMPORTED_LONG_ENUMERATION_ITEM */, oK200 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_created201 /* IMPORTED_LONG_ENUMERATION_ITEM */, created201 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_noContent204 /* IMPORTED_LONG_ENUMERATION_ITEM */, noContent204 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_temporaryRedirect307 /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryRedirect307 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_permanentRedirect308 /* IMPORTED_LONG_ENUMERATION_ITEM */, permanentRedirect308 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_badRequest400 /* IMPORTED_LONG_ENUMERATION_ITEM */, badRequest400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_unauthorized401 /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorized401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_forbidden403 /* IMPORTED_LONG_ENUMERATION_ITEM */, forbidden403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_notFound404 /* IMPORTED_LONG_ENUMERATION_ITEM */, notFound404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_notAcceptable406 /* IMPORTED_LONG_ENUMERATION_ITEM */, notAcceptable406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_lengthRequired411 /* IMPORTED_LONG_ENUMERATION_ITEM */, lengthRequired411 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_payloadTooLarge413 /* IMPORTED_LONG_ENUMERATION_ITEM */, payloadTooLarge413 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_unsupportedMediaType415 /* IMPORTED_LONG_ENUMERATION_ITEM */, unsupportedMediaType415 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_tooManyRequests429 /* IMPORTED_LONG_ENUMERATION_ITEM */, tooManyRequests429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_internalServerError500 /* IMPORTED_LONG_ENUMERATION_ITEM */, internalServerError500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_notImplemented501 /* IMPORTED_LONG_ENUMERATION_ITEM */, notImplemented501 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_badGateway502 /* IMPORTED_LONG_ENUMERATION_ITEM */, badGateway502 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_serviceUnavailable503 /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceUnavailable503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFEventsSubscriptionResponseCode, _encode_NWDAFEventsSubscriptionResponseCode } from "../TS33128Payloads/NWDAFEventsSubscriptionResponseCode.ta.mjs";
// export { NWDAFEventsSubscriptionResponseCode, _enum_for_NWDAFEventsSubscriptionResponseCode, NWDAFEventsSubscriptionResponseCode_oK200 /* IMPORTED_LONG_ENUMERATION_ITEM */, oK200 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_created201 /* IMPORTED_LONG_ENUMERATION_ITEM */, created201 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_noContent204 /* IMPORTED_LONG_ENUMERATION_ITEM */, noContent204 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_temporaryRedirect307 /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryRedirect307 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_permanentRedirect308 /* IMPORTED_LONG_ENUMERATION_ITEM */, permanentRedirect308 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_badRequest400 /* IMPORTED_LONG_ENUMERATION_ITEM */, badRequest400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_unauthorized401 /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorized401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_forbidden403 /* IMPORTED_LONG_ENUMERATION_ITEM */, forbidden403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_notFound404 /* IMPORTED_LONG_ENUMERATION_ITEM */, notFound404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_notAcceptable406 /* IMPORTED_LONG_ENUMERATION_ITEM */, notAcceptable406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_lengthRequired411 /* IMPORTED_LONG_ENUMERATION_ITEM */, lengthRequired411 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_payloadTooLarge413 /* IMPORTED_LONG_ENUMERATION_ITEM */, payloadTooLarge413 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_unsupportedMediaType415 /* IMPORTED_LONG_ENUMERATION_ITEM */, unsupportedMediaType415 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_tooManyRequests429 /* IMPORTED_LONG_ENUMERATION_ITEM */, tooManyRequests429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_internalServerError500 /* IMPORTED_LONG_ENUMERATION_ITEM */, internalServerError500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_notImplemented501 /* IMPORTED_LONG_ENUMERATION_ITEM */, notImplemented501 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_badGateway502 /* IMPORTED_LONG_ENUMERATION_ITEM */, badGateway502 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_serviceUnavailable503 /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceUnavailable503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFEventsSubscriptionResponseCode, _encode_NWDAFEventsSubscriptionResponseCode } from "../TS33128Payloads/NWDAFEventsSubscriptionResponseCode.ta.mjs";


/**
 * @summary NWDAFRoamingAnalyticsSubscription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFRoamingAnalyticsSubscription ::= SEQUENCE
 * {
 *     sUPI                                [1] SUPI,
 *     pLMNID                              [2] PLMNID,
 *     nWDAFEventsSubscriptionOpType       [3] NWDAFEventsSubscriptionOpType,
 *     nWDAFSubscribedEventList            [4] SEQUENCE SIZE(1..MAX) OF NWDAFEvent,
 *     nWDAFEventsSubscription             [5] SBIType,
 *     nWDAFEventsSubscriptionID           [6] UTF8String OPTIONAL,
 *     nWDAFEventsSubscriptionResponseCode [7] NWDAFEventsSubscriptionResponseCode
 * }
 * ```
 * 
 * @class
 */
export
class NWDAFRoamingAnalyticsSubscription {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `pLMNID`.
         * @public
         * @readonly
         */
        readonly pLMNID: PLMNID,
        /**
         * @summary `nWDAFEventsSubscriptionOpType`.
         * @public
         * @readonly
         */
        readonly nWDAFEventsSubscriptionOpType: NWDAFEventsSubscriptionOpType,
        /**
         * @summary `nWDAFSubscribedEventList`.
         * @public
         * @readonly
         */
        readonly nWDAFSubscribedEventList: NWDAFEvent[],
        /**
         * @summary `nWDAFEventsSubscription`.
         * @public
         * @readonly
         */
        readonly nWDAFEventsSubscription: SBIType,
        /**
         * @summary `nWDAFEventsSubscriptionID`.
         * @public
         * @readonly
         */
        readonly nWDAFEventsSubscriptionID: OPTIONAL<UTF8String>,
        /**
         * @summary `nWDAFEventsSubscriptionResponseCode`.
         * @public
         * @readonly
         */
        readonly nWDAFEventsSubscriptionResponseCode: NWDAFEventsSubscriptionResponseCode
    ) {}

    /**
     * @summary Restructures an object into a NWDAFRoamingAnalyticsSubscription
     * @description
     * 
     * This takes an `object` and converts it to a `NWDAFRoamingAnalyticsSubscription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NWDAFRoamingAnalyticsSubscription`.
     * @returns {NWDAFRoamingAnalyticsSubscription}
     */
    public static _from_object (_o: { [_K in keyof (NWDAFRoamingAnalyticsSubscription)]: (NWDAFRoamingAnalyticsSubscription)[_K] }): NWDAFRoamingAnalyticsSubscription {
        return new NWDAFRoamingAnalyticsSubscription(_o.sUPI, _o.pLMNID, _o.nWDAFEventsSubscriptionOpType, _o.nWDAFSubscribedEventList, _o.nWDAFEventsSubscription, _o.nWDAFEventsSubscriptionID, _o.nWDAFEventsSubscriptionResponseCode);
    }

        /**
         * @summary The enum used as the type of the component `nWDAFEventsSubscriptionOpType`
         * @public
         * @static
         */

    public static _enum_for_nWDAFEventsSubscriptionOpType = _enum_for_NWDAFEventsSubscriptionOpType;        /**
         * @summary The enum used as the type of the component `nWDAFEventsSubscriptionResponseCode`
         * @public
         * @static
         */

    public static _enum_for_nWDAFEventsSubscriptionResponseCode = _enum_for_NWDAFEventsSubscriptionResponseCode;
}

/**
 * @summary The Leading Root Component Types of NWDAFRoamingAnalyticsSubscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NWDAFRoamingAnalyticsSubscription: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pLMNID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nWDAFEventsSubscriptionOpType", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("nWDAFSubscribedEventList", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("nWDAFEventsSubscription", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("nWDAFEventsSubscriptionID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("nWDAFEventsSubscriptionResponseCode", false, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of NWDAFRoamingAnalyticsSubscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NWDAFRoamingAnalyticsSubscription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NWDAFRoamingAnalyticsSubscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NWDAFRoamingAnalyticsSubscription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NWDAFRoamingAnalyticsSubscription: $.ASN1Decoder<NWDAFRoamingAnalyticsSubscription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NWDAFRoamingAnalyticsSubscription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NWDAFRoamingAnalyticsSubscription (el: _Element): NWDAFRoamingAnalyticsSubscription {
    if (!_cached_decoder_for_NWDAFRoamingAnalyticsSubscription) { _cached_decoder_for_NWDAFRoamingAnalyticsSubscription = function (el: _Element): NWDAFRoamingAnalyticsSubscription {
    let sUPI!: SUPI;
    let pLMNID!: PLMNID;
    let nWDAFEventsSubscriptionOpType!: NWDAFEventsSubscriptionOpType;
    let nWDAFSubscribedEventList!: NWDAFEvent[];
    let nWDAFEventsSubscription!: SBIType;
    let nWDAFEventsSubscriptionID: OPTIONAL<UTF8String>;
    let nWDAFEventsSubscriptionResponseCode!: NWDAFEventsSubscriptionResponseCode;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "pLMNID": (_el: _Element): void => { pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "nWDAFEventsSubscriptionOpType": (_el: _Element): void => { nWDAFEventsSubscriptionOpType = $._decode_implicit<NWDAFEventsSubscriptionOpType>(() => _decode_NWDAFEventsSubscriptionOpType)(_el); },
        "nWDAFSubscribedEventList": (_el: _Element): void => { nWDAFSubscribedEventList = $._decode_implicit<NWDAFEvent[]>(() => $._decodeSequenceOf<NWDAFEvent>(() => _decode_NWDAFEvent))(_el); },
        "nWDAFEventsSubscription": (_el: _Element): void => { nWDAFEventsSubscription = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "nWDAFEventsSubscriptionID": (_el: _Element): void => { nWDAFEventsSubscriptionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "nWDAFEventsSubscriptionResponseCode": (_el: _Element): void => { nWDAFEventsSubscriptionResponseCode = $._decode_implicit<NWDAFEventsSubscriptionResponseCode>(() => _decode_NWDAFEventsSubscriptionResponseCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NWDAFRoamingAnalyticsSubscription,
        _extension_additions_list_spec_for_NWDAFRoamingAnalyticsSubscription,
        _root_component_type_list_2_spec_for_NWDAFRoamingAnalyticsSubscription,
        undefined,
    );
    return new NWDAFRoamingAnalyticsSubscription(
        sUPI,
        pLMNID,
        nWDAFEventsSubscriptionOpType,
        nWDAFSubscribedEventList,
        nWDAFEventsSubscription,
        nWDAFEventsSubscriptionID,
        nWDAFEventsSubscriptionResponseCode
    );
}; }
    return _cached_decoder_for_NWDAFRoamingAnalyticsSubscription(el);
}

let _cached_encoder_for_NWDAFRoamingAnalyticsSubscription: $.ASN1Encoder<NWDAFRoamingAnalyticsSubscription> | null = null;

/**
 * @summary Encodes a(n) NWDAFRoamingAnalyticsSubscription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NWDAFRoamingAnalyticsSubscription, encoded as an ASN.1 Element.
 */
export
function _encode_NWDAFRoamingAnalyticsSubscription (value: NWDAFRoamingAnalyticsSubscription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NWDAFRoamingAnalyticsSubscription) { _cached_encoder_for_NWDAFRoamingAnalyticsSubscription = function (value: NWDAFRoamingAnalyticsSubscription, elGetter: $.ASN1Encoder<NWDAFRoamingAnalyticsSubscription>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_NWDAFEventsSubscriptionOpType, $.BER)(value.nWDAFEventsSubscriptionOpType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<NWDAFEvent>(() => _encode_NWDAFEvent, $.BER), $.BER)(value.nWDAFSubscribedEventList, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_SBIType, $.BER)(value.nWDAFEventsSubscription, $.BER),
            /* IF_ABSENT  */ ((value.nWDAFEventsSubscriptionID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.nWDAFEventsSubscriptionID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_NWDAFEventsSubscriptionResponseCode, $.BER)(value.nWDAFEventsSubscriptionResponseCode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NWDAFRoamingAnalyticsSubscription(value, elGetter);
}


/* eslint-enable */
