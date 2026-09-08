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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { GpLocationInfoList, _decode_GpLocationInfoList, _encode_GpLocationInfoList } from "../CSTA-call-control/GpLocationInfoList.ta.mjs";
// export { GpLocationInfoList, _decode_GpLocationInfoList, _encode_GpLocationInfoList } from "../CSTA-call-control/GpLocationInfoList.ta.mjs";
import { UsageRules, _decode_UsageRules, _encode_UsageRules } from "../CSTA-call-control/UsageRules.ta.mjs";
// export { UsageRules, _decode_UsageRules, _encode_UsageRules } from "../CSTA-call-control/UsageRules.ta.mjs";
import { Method, _enum_for_Method, Method_a_GPS /* IMPORTED_LONG_ENUMERATION_ITEM */, a_GPS /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_aOA /* IMPORTED_LONG_ENUMERATION_ITEM */, aOA /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_cell /* IMPORTED_LONG_ENUMERATION_ITEM */, cell /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_derived /* IMPORTED_LONG_ENUMERATION_ITEM */, derived /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_deviceAssistedAGps /* IMPORTED_LONG_ENUMERATION_ITEM */, deviceAssistedAGps /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_deviceBasedAGps /* IMPORTED_LONG_ENUMERATION_ITEM */, deviceBasedAGps /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_dHCP /* IMPORTED_LONG_ENUMERATION_ITEM */, dHCP /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_gPS /* IMPORTED_LONG_ENUMERATION_ITEM */, gPS /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_handsetAflt /* IMPORTED_LONG_ENUMERATION_ITEM */, handsetAflt /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_handsetEflt /* IMPORTED_LONG_ENUMERATION_ITEM */, handsetEflt /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_hybridAGps /* IMPORTED_LONG_ENUMERATION_ITEM */, hybridAGps /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_ipdl /* IMPORTED_LONG_ENUMERATION_ITEM */, ipdl /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_lldpMed /* IMPORTED_LONG_ENUMERATION_ITEM */, lldpMed /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_manual /* IMPORTED_LONG_ENUMERATION_ITEM */, manual /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_mpl /* IMPORTED_LONG_ENUMERATION_ITEM */, mpl /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_nmr /* IMPORTED_LONG_ENUMERATION_ITEM */, nmr /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_otdoa /* IMPORTED_LONG_ENUMERATION_ITEM */, otdoa /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_rfid /* IMPORTED_LONG_ENUMERATION_ITEM */, rfid /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_rssi /* IMPORTED_LONG_ENUMERATION_ITEM */, rssi /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_rssiRtt /* IMPORTED_LONG_ENUMERATION_ITEM */, rssiRtt /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_rtt /* IMPORTED_LONG_ENUMERATION_ITEM */, rtt /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_ta /* IMPORTED_LONG_ENUMERATION_ITEM */, ta /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_taNmr /* IMPORTED_LONG_ENUMERATION_ITEM */, taNmr /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_triangulation /* IMPORTED_LONG_ENUMERATION_ITEM */, triangulation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_utdoa /* IMPORTED_LONG_ENUMERATION_ITEM */, utdoa /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_wiremap /* IMPORTED_LONG_ENUMERATION_ITEM */, wiremap /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_locMet80211 /* IMPORTED_LONG_ENUMERATION_ITEM */, locMet80211 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Method, _encode_Method } from "../CSTA-call-control/Method.ta.mjs";
// export { Method, _enum_for_Method, Method_a_GPS /* IMPORTED_LONG_ENUMERATION_ITEM */, a_GPS /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_aOA /* IMPORTED_LONG_ENUMERATION_ITEM */, aOA /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_cell /* IMPORTED_LONG_ENUMERATION_ITEM */, cell /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_derived /* IMPORTED_LONG_ENUMERATION_ITEM */, derived /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_deviceAssistedAGps /* IMPORTED_LONG_ENUMERATION_ITEM */, deviceAssistedAGps /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_deviceBasedAGps /* IMPORTED_LONG_ENUMERATION_ITEM */, deviceBasedAGps /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_dHCP /* IMPORTED_LONG_ENUMERATION_ITEM */, dHCP /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_gPS /* IMPORTED_LONG_ENUMERATION_ITEM */, gPS /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_handsetAflt /* IMPORTED_LONG_ENUMERATION_ITEM */, handsetAflt /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_handsetEflt /* IMPORTED_LONG_ENUMERATION_ITEM */, handsetEflt /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_hybridAGps /* IMPORTED_LONG_ENUMERATION_ITEM */, hybridAGps /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_ipdl /* IMPORTED_LONG_ENUMERATION_ITEM */, ipdl /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_lldpMed /* IMPORTED_LONG_ENUMERATION_ITEM */, lldpMed /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_manual /* IMPORTED_LONG_ENUMERATION_ITEM */, manual /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_mpl /* IMPORTED_LONG_ENUMERATION_ITEM */, mpl /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_nmr /* IMPORTED_LONG_ENUMERATION_ITEM */, nmr /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_otdoa /* IMPORTED_LONG_ENUMERATION_ITEM */, otdoa /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_rfid /* IMPORTED_LONG_ENUMERATION_ITEM */, rfid /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_rssi /* IMPORTED_LONG_ENUMERATION_ITEM */, rssi /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_rssiRtt /* IMPORTED_LONG_ENUMERATION_ITEM */, rssiRtt /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_rtt /* IMPORTED_LONG_ENUMERATION_ITEM */, rtt /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_ta /* IMPORTED_LONG_ENUMERATION_ITEM */, ta /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_taNmr /* IMPORTED_LONG_ENUMERATION_ITEM */, taNmr /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_triangulation /* IMPORTED_LONG_ENUMERATION_ITEM */, triangulation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_utdoa /* IMPORTED_LONG_ENUMERATION_ITEM */, utdoa /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_wiremap /* IMPORTED_LONG_ENUMERATION_ITEM */, wiremap /* IMPORTED_SHORT_ENUMERATION_ITEM */, Method_locMet80211 /* IMPORTED_LONG_ENUMERATION_ITEM */, locMet80211 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Method, _encode_Method } from "../CSTA-call-control/Method.ta.mjs";
import { ProvidedBy, _decode_ProvidedBy, _encode_ProvidedBy } from "../CSTA-call-control/ProvidedBy.ta.mjs";
// export { ProvidedBy, _decode_ProvidedBy, _encode_ProvidedBy } from "../CSTA-call-control/ProvidedBy.ta.mjs";


/**
 * @summary GeoPriv
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeoPriv ::= SEQUENCE                                    -- Conforming RFC 4119
 * {    gpLocationInfo            GpLocationInfoList,
 *     usageRules            [0] IMPLICIT UsageRules                OPTIONAL,
 *     method                [1] IMPLICIT Method                OPTIONAL,
 *     providedBy            [2] IMPLICIT ProvidedBy             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GeoPriv {
    constructor (
        /**
         * @summary `gpLocationInfo`.
         * @public
         * @readonly
         */
        readonly gpLocationInfo: GpLocationInfoList,
        /**
         * @summary `usageRules`.
         * @public
         * @readonly
         */
        readonly usageRules: OPTIONAL<UsageRules>,
        /**
         * @summary `method`.
         * @public
         * @readonly
         */
        readonly method: OPTIONAL<Method>,
        /**
         * @summary `providedBy`.
         * @public
         * @readonly
         */
        readonly providedBy: OPTIONAL<ProvidedBy>
    ) {}

    /**
     * @summary Restructures an object into a GeoPriv
     * @description
     * 
     * This takes an `object` and converts it to a `GeoPriv`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GeoPriv`.
     * @returns {GeoPriv}
     */
    public static _from_object (_o: { [_K in keyof (GeoPriv)]: (GeoPriv)[_K] }): GeoPriv {
        return new GeoPriv(_o.gpLocationInfo, _o.usageRules, _o.method, _o.providedBy);
    }

        /**
         * @summary The enum used as the type of the component `method`
         * @public
         * @static
         */

    public static _enum_for_method = _enum_for_Method;
}

/**
 * @summary The Leading Root Component Types of GeoPriv
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GeoPriv: $.ComponentSpec[] = [
    new $.ComponentSpec("gpLocationInfo", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("usageRules", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("method", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("providedBy", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GeoPriv
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GeoPriv: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GeoPriv
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GeoPriv: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GeoPriv: $.ASN1Decoder<GeoPriv> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeoPriv
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GeoPriv (el: _Element): GeoPriv {
    if (!_cached_decoder_for_GeoPriv) { _cached_decoder_for_GeoPriv = function (el: _Element): GeoPriv {
    let gpLocationInfo!: GpLocationInfoList;
    let usageRules: OPTIONAL<UsageRules>;
    let method: OPTIONAL<Method>;
    let providedBy: OPTIONAL<ProvidedBy>;
    const callbacks: $.DecodingMap = {
        "gpLocationInfo": (_el: _Element): void => { gpLocationInfo = _decode_GpLocationInfoList(_el); },
        "usageRules": (_el: _Element): void => { usageRules = $._decode_implicit<UsageRules>(() => _decode_UsageRules)(_el); },
        "method": (_el: _Element): void => { method = $._decode_implicit<Method>(() => _decode_Method)(_el); },
        "providedBy": (_el: _Element): void => { providedBy = $._decode_implicit<ProvidedBy>(() => _decode_ProvidedBy)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GeoPriv,
        _extension_additions_list_spec_for_GeoPriv,
        _root_component_type_list_2_spec_for_GeoPriv,
        undefined,
    );
    return new GeoPriv(
        gpLocationInfo,
        usageRules,
        method,
        providedBy
    );
}; }
    return _cached_decoder_for_GeoPriv(el);
}

let _cached_encoder_for_GeoPriv: $.ASN1Encoder<GeoPriv> | null = null;

/**
 * @summary Encodes a(n) GeoPriv into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeoPriv, encoded as an ASN.1 Element.
 */
export
function _encode_GeoPriv (value: GeoPriv, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GeoPriv) { _cached_encoder_for_GeoPriv = function (value: GeoPriv, elGetter: $.ASN1Encoder<GeoPriv>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GpLocationInfoList(value.gpLocationInfo, $.BER),
            /* IF_ABSENT  */ ((value.usageRules === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_UsageRules, $.BER)(value.usageRules, $.BER)),
            /* IF_ABSENT  */ ((value.method === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Method, $.BER)(value.method, $.BER)),
            /* IF_ABSENT  */ ((value.providedBy === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ProvidedBy, $.BER)(value.providedBy, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GeoPriv(value, elGetter);
}


/* eslint-enable */
