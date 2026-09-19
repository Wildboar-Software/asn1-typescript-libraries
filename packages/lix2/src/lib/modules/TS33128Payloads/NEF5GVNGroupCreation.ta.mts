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
import { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
// export { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary NEF5GVNGroupCreation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEF5GVNGroupCreation ::= SEQUENCE
 * {
 *     aFID                        [1] AFID,
 *     gPSI                        [2] GPSI,
 *     fiveGLanParametersProvision [3] SBIType
 * }
 * ```
 * 
 * @class
 */
export
class NEF5GVNGroupCreation {
    constructor (
        /**
         * @summary `aFID`.
         * @public
         * @readonly
         */
        readonly aFID: AFID,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: GPSI,
        /**
         * @summary `fiveGLanParametersProvision`.
         * @public
         * @readonly
         */
        readonly fiveGLanParametersProvision: SBIType
    ) {}

    /**
     * @summary Restructures an object into a NEF5GVNGroupCreation
     * @description
     * 
     * This takes an `object` and converts it to a `NEF5GVNGroupCreation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEF5GVNGroupCreation`.
     * @returns {NEF5GVNGroupCreation}
     */
    public static _from_object (_o: { [_K in keyof (NEF5GVNGroupCreation)]: (NEF5GVNGroupCreation)[_K] }): NEF5GVNGroupCreation {
        return new NEF5GVNGroupCreation(_o.aFID, _o.gPSI, _o.fiveGLanParametersProvision);
    }


}

/**
 * @summary The Leading Root Component Types of NEF5GVNGroupCreation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEF5GVNGroupCreation: $.ComponentSpec[] = [
    new $.ComponentSpec("aFID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fiveGLanParametersProvision", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of NEF5GVNGroupCreation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEF5GVNGroupCreation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEF5GVNGroupCreation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEF5GVNGroupCreation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEF5GVNGroupCreation: $.ASN1Decoder<NEF5GVNGroupCreation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEF5GVNGroupCreation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEF5GVNGroupCreation (el: _Element): NEF5GVNGroupCreation {
    if (!_cached_decoder_for_NEF5GVNGroupCreation) { _cached_decoder_for_NEF5GVNGroupCreation = function (el: _Element): NEF5GVNGroupCreation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("NEF5GVNGroupCreation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aFID";
    sequence[1].name = "gPSI";
    sequence[2].name = "fiveGLanParametersProvision";
    let aFID!: AFID;
    let gPSI!: GPSI;
    let fiveGLanParametersProvision!: SBIType;
    aFID = $._decode_implicit<AFID>(() => _decode_AFID)(sequence[0]);
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[1]);
    fiveGLanParametersProvision = $._decode_implicit<SBIType>(() => _decode_SBIType)(sequence[2]);
    return new NEF5GVNGroupCreation(
        aFID,
        gPSI,
        fiveGLanParametersProvision,

    );
}; }
    return _cached_decoder_for_NEF5GVNGroupCreation(el);
}

let _cached_encoder_for_NEF5GVNGroupCreation: $.ASN1Encoder<NEF5GVNGroupCreation> | null = null;

/**
 * @summary Encodes a(n) NEF5GVNGroupCreation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEF5GVNGroupCreation, encoded as an ASN.1 Element.
 */
export
function _encode_NEF5GVNGroupCreation (value: NEF5GVNGroupCreation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEF5GVNGroupCreation) { _cached_encoder_for_NEF5GVNGroupCreation = function (value: NEF5GVNGroupCreation, elGetter: $.ASN1Encoder<NEF5GVNGroupCreation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AFID, $.BER)(value.aFID, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SBIType, $.BER)(value.fiveGLanParametersProvision, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NEF5GVNGroupCreation(value, elGetter);
}


/* eslint-enable */
