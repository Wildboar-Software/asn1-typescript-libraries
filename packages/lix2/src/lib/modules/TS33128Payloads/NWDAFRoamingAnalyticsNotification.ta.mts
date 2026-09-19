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


/**
 * @summary NWDAFRoamingAnalyticsNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFRoamingAnalyticsNotification ::= SEQUENCE
 * {
 *     sUPI                          [1] SUPI,
 *     nWDAFNotifiedEventList        [2] SEQUENCE SIZE(1..MAX) OF NWDAFEvent,
 *     nWDAFEventsNotification       [3] SBIType
 * }
 * ```
 * 
 * @class
 */
export
class NWDAFRoamingAnalyticsNotification {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `nWDAFNotifiedEventList`.
         * @public
         * @readonly
         */
        readonly nWDAFNotifiedEventList: NWDAFEvent[],
        /**
         * @summary `nWDAFEventsNotification`.
         * @public
         * @readonly
         */
        readonly nWDAFEventsNotification: SBIType
    ) {}

    /**
     * @summary Restructures an object into a NWDAFRoamingAnalyticsNotification
     * @description
     * 
     * This takes an `object` and converts it to a `NWDAFRoamingAnalyticsNotification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NWDAFRoamingAnalyticsNotification`.
     * @returns {NWDAFRoamingAnalyticsNotification}
     */
    public static _from_object (_o: { [_K in keyof (NWDAFRoamingAnalyticsNotification)]: (NWDAFRoamingAnalyticsNotification)[_K] }): NWDAFRoamingAnalyticsNotification {
        return new NWDAFRoamingAnalyticsNotification(_o.sUPI, _o.nWDAFNotifiedEventList, _o.nWDAFEventsNotification);
    }


}

/**
 * @summary The Leading Root Component Types of NWDAFRoamingAnalyticsNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NWDAFRoamingAnalyticsNotification: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nWDAFNotifiedEventList", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nWDAFEventsNotification", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of NWDAFRoamingAnalyticsNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NWDAFRoamingAnalyticsNotification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NWDAFRoamingAnalyticsNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NWDAFRoamingAnalyticsNotification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NWDAFRoamingAnalyticsNotification: $.ASN1Decoder<NWDAFRoamingAnalyticsNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NWDAFRoamingAnalyticsNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NWDAFRoamingAnalyticsNotification (el: _Element): NWDAFRoamingAnalyticsNotification {
    if (!_cached_decoder_for_NWDAFRoamingAnalyticsNotification) { _cached_decoder_for_NWDAFRoamingAnalyticsNotification = function (el: _Element): NWDAFRoamingAnalyticsNotification {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("NWDAFRoamingAnalyticsNotification contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sUPI";
    sequence[1].name = "nWDAFNotifiedEventList";
    sequence[2].name = "nWDAFEventsNotification";
    let sUPI!: SUPI;
    let nWDAFNotifiedEventList!: NWDAFEvent[];
    let nWDAFEventsNotification!: SBIType;
    sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(sequence[0]);
    nWDAFNotifiedEventList = $._decode_implicit<NWDAFEvent[]>(() => $._decodeSequenceOf<NWDAFEvent>(() => _decode_NWDAFEvent))(sequence[1]);
    nWDAFEventsNotification = $._decode_implicit<SBIType>(() => _decode_SBIType)(sequence[2]);
    return new NWDAFRoamingAnalyticsNotification(
        sUPI,
        nWDAFNotifiedEventList,
        nWDAFEventsNotification,

    );
}; }
    return _cached_decoder_for_NWDAFRoamingAnalyticsNotification(el);
}

let _cached_encoder_for_NWDAFRoamingAnalyticsNotification: $.ASN1Encoder<NWDAFRoamingAnalyticsNotification> | null = null;

/**
 * @summary Encodes a(n) NWDAFRoamingAnalyticsNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NWDAFRoamingAnalyticsNotification, encoded as an ASN.1 Element.
 */
export
function _encode_NWDAFRoamingAnalyticsNotification (value: NWDAFRoamingAnalyticsNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NWDAFRoamingAnalyticsNotification) { _cached_encoder_for_NWDAFRoamingAnalyticsNotification = function (value: NWDAFRoamingAnalyticsNotification, elGetter: $.ASN1Encoder<NWDAFRoamingAnalyticsNotification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<NWDAFEvent>(() => _encode_NWDAFEvent, $.BER), $.BER)(value.nWDAFNotifiedEventList, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SBIType, $.BER)(value.nWDAFEventsNotification, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NWDAFRoamingAnalyticsNotification(value, elGetter);
}


/* eslint-enable */
