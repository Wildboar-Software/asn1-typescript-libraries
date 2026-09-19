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
import { NWDAFEvent, _enum_for_NWDAFEvent, NWDAFEvent_serviceExperience /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceExperience /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_uEMobility /* IMPORTED_LONG_ENUMERATION_ITEM */, uEMobility /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_uEComm /* IMPORTED_LONG_ENUMERATION_ITEM */, uEComm /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_abnormalBehaviour /* IMPORTED_LONG_ENUMERATION_ITEM */, abnormalBehaviour /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_dispersion /* IMPORTED_LONG_ENUMERATION_ITEM */, dispersion /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_relativeProximity /* IMPORTED_LONG_ENUMERATION_ITEM */, relativeProximity /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_pDUSessionTraffic /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionTraffic /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFEvent, _encode_NWDAFEvent } from "../TS33128Payloads/NWDAFEvent.ta.mjs";
// export { NWDAFEvent, _enum_for_NWDAFEvent, NWDAFEvent_serviceExperience /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceExperience /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_uEMobility /* IMPORTED_LONG_ENUMERATION_ITEM */, uEMobility /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_uEComm /* IMPORTED_LONG_ENUMERATION_ITEM */, uEComm /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_abnormalBehaviour /* IMPORTED_LONG_ENUMERATION_ITEM */, abnormalBehaviour /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_dispersion /* IMPORTED_LONG_ENUMERATION_ITEM */, dispersion /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_relativeProximity /* IMPORTED_LONG_ENUMERATION_ITEM */, relativeProximity /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_pDUSessionTraffic /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionTraffic /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFEvent, _encode_NWDAFEvent } from "../TS33128Payloads/NWDAFEvent.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { NWDAFAnalyticsInfoResponseCode, _enum_for_NWDAFAnalyticsInfoResponseCode, NWDAFAnalyticsInfoResponseCode_oK200 /* IMPORTED_LONG_ENUMERATION_ITEM */, oK200 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_noContent204 /* IMPORTED_LONG_ENUMERATION_ITEM */, noContent204 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_badRequest400 /* IMPORTED_LONG_ENUMERATION_ITEM */, badRequest400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_unauthorized401 /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorized401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_forbidden403 /* IMPORTED_LONG_ENUMERATION_ITEM */, forbidden403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_notFound404 /* IMPORTED_LONG_ENUMERATION_ITEM */, notFound404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_notAcceptable406 /* IMPORTED_LONG_ENUMERATION_ITEM */, notAcceptable406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_uRITooLong414 /* IMPORTED_LONG_ENUMERATION_ITEM */, uRITooLong414 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_tooManyRequests429 /* IMPORTED_LONG_ENUMERATION_ITEM */, tooManyRequests429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_internalServerError500 /* IMPORTED_LONG_ENUMERATION_ITEM */, internalServerError500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_badGateway502 /* IMPORTED_LONG_ENUMERATION_ITEM */, badGateway502 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_serviceUnavailable503 /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceUnavailable503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFAnalyticsInfoResponseCode, _encode_NWDAFAnalyticsInfoResponseCode } from "../TS33128Payloads/NWDAFAnalyticsInfoResponseCode.ta.mjs";
// export { NWDAFAnalyticsInfoResponseCode, _enum_for_NWDAFAnalyticsInfoResponseCode, NWDAFAnalyticsInfoResponseCode_oK200 /* IMPORTED_LONG_ENUMERATION_ITEM */, oK200 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_noContent204 /* IMPORTED_LONG_ENUMERATION_ITEM */, noContent204 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_badRequest400 /* IMPORTED_LONG_ENUMERATION_ITEM */, badRequest400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_unauthorized401 /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorized401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_forbidden403 /* IMPORTED_LONG_ENUMERATION_ITEM */, forbidden403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_notFound404 /* IMPORTED_LONG_ENUMERATION_ITEM */, notFound404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_notAcceptable406 /* IMPORTED_LONG_ENUMERATION_ITEM */, notAcceptable406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_uRITooLong414 /* IMPORTED_LONG_ENUMERATION_ITEM */, uRITooLong414 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_tooManyRequests429 /* IMPORTED_LONG_ENUMERATION_ITEM */, tooManyRequests429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_internalServerError500 /* IMPORTED_LONG_ENUMERATION_ITEM */, internalServerError500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_badGateway502 /* IMPORTED_LONG_ENUMERATION_ITEM */, badGateway502 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_serviceUnavailable503 /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceUnavailable503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFAnalyticsInfoResponseCode, _encode_NWDAFAnalyticsInfoResponseCode } from "../TS33128Payloads/NWDAFAnalyticsInfoResponseCode.ta.mjs";


/**
 * @summary NWDAFAnalyticsInfoQuery
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFAnalyticsInfoQuery ::= SEQUENCE
 * {
 *     sUPI                           [1] SUPI,
 *     nWDAFEvent                     [2] NWDAFEvent,
 *     nWDAFEventReportingRequirement [3] SBIType OPTIONAL,
 *     nWDAFEventFilter               [4] SBIType OPTIONAL,
 *     nWDAFAnalyticsData             [5] SBIType OPTIONAL,
 *     nWDAFAnalyticsInfoResponseCode [6] NWDAFAnalyticsInfoResponseCode
 * }
 * ```
 * 
 * @class
 */
export
class NWDAFAnalyticsInfoQuery {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `nWDAFEvent`.
         * @public
         * @readonly
         */
        readonly nWDAFEvent: NWDAFEvent,
        /**
         * @summary `nWDAFEventReportingRequirement`.
         * @public
         * @readonly
         */
        readonly nWDAFEventReportingRequirement: OPTIONAL<SBIType>,
        /**
         * @summary `nWDAFEventFilter`.
         * @public
         * @readonly
         */
        readonly nWDAFEventFilter: OPTIONAL<SBIType>,
        /**
         * @summary `nWDAFAnalyticsData`.
         * @public
         * @readonly
         */
        readonly nWDAFAnalyticsData: OPTIONAL<SBIType>,
        /**
         * @summary `nWDAFAnalyticsInfoResponseCode`.
         * @public
         * @readonly
         */
        readonly nWDAFAnalyticsInfoResponseCode: NWDAFAnalyticsInfoResponseCode
    ) {}

    /**
     * @summary Restructures an object into a NWDAFAnalyticsInfoQuery
     * @description
     * 
     * This takes an `object` and converts it to a `NWDAFAnalyticsInfoQuery`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NWDAFAnalyticsInfoQuery`.
     * @returns {NWDAFAnalyticsInfoQuery}
     */
    public static _from_object (_o: { [_K in keyof (NWDAFAnalyticsInfoQuery)]: (NWDAFAnalyticsInfoQuery)[_K] }): NWDAFAnalyticsInfoQuery {
        return new NWDAFAnalyticsInfoQuery(_o.sUPI, _o.nWDAFEvent, _o.nWDAFEventReportingRequirement, _o.nWDAFEventFilter, _o.nWDAFAnalyticsData, _o.nWDAFAnalyticsInfoResponseCode);
    }

        /**
         * @summary The enum used as the type of the component `nWDAFEvent`
         * @public
         * @static
         */

    public static _enum_for_nWDAFEvent = _enum_for_NWDAFEvent;        /**
         * @summary The enum used as the type of the component `nWDAFAnalyticsInfoResponseCode`
         * @public
         * @static
         */

    public static _enum_for_nWDAFAnalyticsInfoResponseCode = _enum_for_NWDAFAnalyticsInfoResponseCode;
}

/**
 * @summary The Leading Root Component Types of NWDAFAnalyticsInfoQuery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NWDAFAnalyticsInfoQuery: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nWDAFEvent", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nWDAFEventReportingRequirement", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("nWDAFEventFilter", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("nWDAFAnalyticsData", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("nWDAFAnalyticsInfoResponseCode", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of NWDAFAnalyticsInfoQuery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NWDAFAnalyticsInfoQuery: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NWDAFAnalyticsInfoQuery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NWDAFAnalyticsInfoQuery: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NWDAFAnalyticsInfoQuery: $.ASN1Decoder<NWDAFAnalyticsInfoQuery> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NWDAFAnalyticsInfoQuery
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NWDAFAnalyticsInfoQuery (el: _Element): NWDAFAnalyticsInfoQuery {
    if (!_cached_decoder_for_NWDAFAnalyticsInfoQuery) { _cached_decoder_for_NWDAFAnalyticsInfoQuery = function (el: _Element): NWDAFAnalyticsInfoQuery {
    let sUPI!: SUPI;
    let nWDAFEvent!: NWDAFEvent;
    let nWDAFEventReportingRequirement: OPTIONAL<SBIType>;
    let nWDAFEventFilter: OPTIONAL<SBIType>;
    let nWDAFAnalyticsData: OPTIONAL<SBIType>;
    let nWDAFAnalyticsInfoResponseCode!: NWDAFAnalyticsInfoResponseCode;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "nWDAFEvent": (_el: _Element): void => { nWDAFEvent = $._decode_implicit<NWDAFEvent>(() => _decode_NWDAFEvent)(_el); },
        "nWDAFEventReportingRequirement": (_el: _Element): void => { nWDAFEventReportingRequirement = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "nWDAFEventFilter": (_el: _Element): void => { nWDAFEventFilter = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "nWDAFAnalyticsData": (_el: _Element): void => { nWDAFAnalyticsData = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "nWDAFAnalyticsInfoResponseCode": (_el: _Element): void => { nWDAFAnalyticsInfoResponseCode = $._decode_implicit<NWDAFAnalyticsInfoResponseCode>(() => _decode_NWDAFAnalyticsInfoResponseCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NWDAFAnalyticsInfoQuery,
        _extension_additions_list_spec_for_NWDAFAnalyticsInfoQuery,
        _root_component_type_list_2_spec_for_NWDAFAnalyticsInfoQuery,
        undefined,
    );
    return new NWDAFAnalyticsInfoQuery(
        sUPI,
        nWDAFEvent,
        nWDAFEventReportingRequirement,
        nWDAFEventFilter,
        nWDAFAnalyticsData,
        nWDAFAnalyticsInfoResponseCode
    );
}; }
    return _cached_decoder_for_NWDAFAnalyticsInfoQuery(el);
}

let _cached_encoder_for_NWDAFAnalyticsInfoQuery: $.ASN1Encoder<NWDAFAnalyticsInfoQuery> | null = null;

/**
 * @summary Encodes a(n) NWDAFAnalyticsInfoQuery into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NWDAFAnalyticsInfoQuery, encoded as an ASN.1 Element.
 */
export
function _encode_NWDAFAnalyticsInfoQuery (value: NWDAFAnalyticsInfoQuery, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NWDAFAnalyticsInfoQuery) { _cached_encoder_for_NWDAFAnalyticsInfoQuery = function (value: NWDAFAnalyticsInfoQuery, elGetter: $.ASN1Encoder<NWDAFAnalyticsInfoQuery>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_NWDAFEvent, $.BER)(value.nWDAFEvent, $.BER),
            /* IF_ABSENT  */ ((value.nWDAFEventReportingRequirement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SBIType, $.BER)(value.nWDAFEventReportingRequirement, $.BER)),
            /* IF_ABSENT  */ ((value.nWDAFEventFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SBIType, $.BER)(value.nWDAFEventFilter, $.BER)),
            /* IF_ABSENT  */ ((value.nWDAFAnalyticsData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SBIType, $.BER)(value.nWDAFAnalyticsData, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_NWDAFAnalyticsInfoResponseCode, $.BER)(value.nWDAFAnalyticsInfoResponseCode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NWDAFAnalyticsInfoQuery(value, elGetter);
}


/* eslint-enable */
