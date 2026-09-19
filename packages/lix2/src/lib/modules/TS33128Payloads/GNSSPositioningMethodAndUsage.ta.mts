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
import { PositioningMode, _enum_for_PositioningMode, PositioningMode_uEBased /* IMPORTED_LONG_ENUMERATION_ITEM */, uEBased /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMode_uEAssisted /* IMPORTED_LONG_ENUMERATION_ITEM */, uEAssisted /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMode_conventional /* IMPORTED_LONG_ENUMERATION_ITEM */, conventional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PositioningMode, _encode_PositioningMode } from "../TS33128Payloads/PositioningMode.ta.mjs";
// export { PositioningMode, _enum_for_PositioningMode, PositioningMode_uEBased /* IMPORTED_LONG_ENUMERATION_ITEM */, uEBased /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMode_uEAssisted /* IMPORTED_LONG_ENUMERATION_ITEM */, uEAssisted /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMode_conventional /* IMPORTED_LONG_ENUMERATION_ITEM */, conventional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PositioningMode, _encode_PositioningMode } from "../TS33128Payloads/PositioningMode.ta.mjs";
import { GNSSID, _enum_for_GNSSID, GNSSID_gPS /* IMPORTED_LONG_ENUMERATION_ITEM */, gPS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_galileo /* IMPORTED_LONG_ENUMERATION_ITEM */, galileo /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_sBAS /* IMPORTED_LONG_ENUMERATION_ITEM */, sBAS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_modernizedGPS /* IMPORTED_LONG_ENUMERATION_ITEM */, modernizedGPS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_qZSS /* IMPORTED_LONG_ENUMERATION_ITEM */, qZSS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_gLONASS /* IMPORTED_LONG_ENUMERATION_ITEM */, gLONASS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_bDS /* IMPORTED_LONG_ENUMERATION_ITEM */, bDS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_nAVIC /* IMPORTED_LONG_ENUMERATION_ITEM */, nAVIC /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GNSSID, _encode_GNSSID } from "../TS33128Payloads/GNSSID.ta.mjs";
// export { GNSSID, _enum_for_GNSSID, GNSSID_gPS /* IMPORTED_LONG_ENUMERATION_ITEM */, gPS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_galileo /* IMPORTED_LONG_ENUMERATION_ITEM */, galileo /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_sBAS /* IMPORTED_LONG_ENUMERATION_ITEM */, sBAS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_modernizedGPS /* IMPORTED_LONG_ENUMERATION_ITEM */, modernizedGPS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_qZSS /* IMPORTED_LONG_ENUMERATION_ITEM */, qZSS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_gLONASS /* IMPORTED_LONG_ENUMERATION_ITEM */, gLONASS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_bDS /* IMPORTED_LONG_ENUMERATION_ITEM */, bDS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_nAVIC /* IMPORTED_LONG_ENUMERATION_ITEM */, nAVIC /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GNSSID, _encode_GNSSID } from "../TS33128Payloads/GNSSID.ta.mjs";
import { Usage, _enum_for_Usage, Usage_unsuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, unsuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, Usage_successResultsNotUsed /* IMPORTED_LONG_ENUMERATION_ITEM */, successResultsNotUsed /* IMPORTED_SHORT_ENUMERATION_ITEM */, Usage_successResultsUsedToVerifyLocation /* IMPORTED_LONG_ENUMERATION_ITEM */, successResultsUsedToVerifyLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Usage_successResultsUsedToGenerateLocation /* IMPORTED_LONG_ENUMERATION_ITEM */, successResultsUsedToGenerateLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Usage_successMethodNotDetermined /* IMPORTED_LONG_ENUMERATION_ITEM */, successMethodNotDetermined /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Usage, _encode_Usage } from "../TS33128Payloads/Usage.ta.mjs";
// export { Usage, _enum_for_Usage, Usage_unsuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, unsuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, Usage_successResultsNotUsed /* IMPORTED_LONG_ENUMERATION_ITEM */, successResultsNotUsed /* IMPORTED_SHORT_ENUMERATION_ITEM */, Usage_successResultsUsedToVerifyLocation /* IMPORTED_LONG_ENUMERATION_ITEM */, successResultsUsedToVerifyLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Usage_successResultsUsedToGenerateLocation /* IMPORTED_LONG_ENUMERATION_ITEM */, successResultsUsedToGenerateLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Usage_successMethodNotDetermined /* IMPORTED_LONG_ENUMERATION_ITEM */, successMethodNotDetermined /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Usage, _encode_Usage } from "../TS33128Payloads/Usage.ta.mjs";


/**
 * @summary GNSSPositioningMethodAndUsage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GNSSPositioningMethodAndUsage ::= SEQUENCE
 * {
 *     mode                                [1] PositioningMode,
 *     gNSS                                [2] GNSSID,
 *     usage                               [3] Usage
 * }
 * ```
 * 
 * @class
 */
export
class GNSSPositioningMethodAndUsage {
    constructor (
        /**
         * @summary `mode`.
         * @public
         * @readonly
         */
        readonly mode: PositioningMode,
        /**
         * @summary `gNSS`.
         * @public
         * @readonly
         */
        readonly gNSS: GNSSID,
        /**
         * @summary `usage`.
         * @public
         * @readonly
         */
        readonly usage: Usage
    ) {}

    /**
     * @summary Restructures an object into a GNSSPositioningMethodAndUsage
     * @description
     * 
     * This takes an `object` and converts it to a `GNSSPositioningMethodAndUsage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GNSSPositioningMethodAndUsage`.
     * @returns {GNSSPositioningMethodAndUsage}
     */
    public static _from_object (_o: { [_K in keyof (GNSSPositioningMethodAndUsage)]: (GNSSPositioningMethodAndUsage)[_K] }): GNSSPositioningMethodAndUsage {
        return new GNSSPositioningMethodAndUsage(_o.mode, _o.gNSS, _o.usage);
    }

        /**
         * @summary The enum used as the type of the component `mode`
         * @public
         * @static
         */

    public static _enum_for_mode = _enum_for_PositioningMode;        /**
         * @summary The enum used as the type of the component `gNSS`
         * @public
         * @static
         */

    public static _enum_for_gNSS = _enum_for_GNSSID;        /**
         * @summary The enum used as the type of the component `usage`
         * @public
         * @static
         */

    public static _enum_for_usage = _enum_for_Usage;
}

/**
 * @summary The Leading Root Component Types of GNSSPositioningMethodAndUsage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GNSSPositioningMethodAndUsage: $.ComponentSpec[] = [
    new $.ComponentSpec("mode", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gNSS", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("usage", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of GNSSPositioningMethodAndUsage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GNSSPositioningMethodAndUsage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GNSSPositioningMethodAndUsage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GNSSPositioningMethodAndUsage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GNSSPositioningMethodAndUsage: $.ASN1Decoder<GNSSPositioningMethodAndUsage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GNSSPositioningMethodAndUsage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GNSSPositioningMethodAndUsage (el: _Element): GNSSPositioningMethodAndUsage {
    if (!_cached_decoder_for_GNSSPositioningMethodAndUsage) { _cached_decoder_for_GNSSPositioningMethodAndUsage = function (el: _Element): GNSSPositioningMethodAndUsage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("GNSSPositioningMethodAndUsage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mode";
    sequence[1].name = "gNSS";
    sequence[2].name = "usage";
    let mode!: PositioningMode;
    let gNSS!: GNSSID;
    let usage!: Usage;
    mode = $._decode_implicit<PositioningMode>(() => _decode_PositioningMode)(sequence[0]);
    gNSS = $._decode_implicit<GNSSID>(() => _decode_GNSSID)(sequence[1]);
    usage = $._decode_implicit<Usage>(() => _decode_Usage)(sequence[2]);
    return new GNSSPositioningMethodAndUsage(
        mode,
        gNSS,
        usage,

    );
}; }
    return _cached_decoder_for_GNSSPositioningMethodAndUsage(el);
}

let _cached_encoder_for_GNSSPositioningMethodAndUsage: $.ASN1Encoder<GNSSPositioningMethodAndUsage> | null = null;

/**
 * @summary Encodes a(n) GNSSPositioningMethodAndUsage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GNSSPositioningMethodAndUsage, encoded as an ASN.1 Element.
 */
export
function _encode_GNSSPositioningMethodAndUsage (value: GNSSPositioningMethodAndUsage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GNSSPositioningMethodAndUsage) { _cached_encoder_for_GNSSPositioningMethodAndUsage = function (value: GNSSPositioningMethodAndUsage, elGetter: $.ASN1Encoder<GNSSPositioningMethodAndUsage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PositioningMode, $.BER)(value.mode, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_GNSSID, $.BER)(value.gNSS, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Usage, $.BER)(value.usage, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GNSSPositioningMethodAndUsage(value, elGetter);
}


/* eslint-enable */
