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



/**
 * @summary SupportedCamelPhases
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedCamelPhases  ::=  BIT STRING {
 *     phase1 (0),
 *     phase2 (1),
 *     phase3 (2),
 *     phase4 (3)} (SIZE (1..16))
 * ```
 */
export
type SupportedCamelPhases = BIT_STRING;

/**
 * @summary SupportedCamelPhases_phase1
 * @constant
 */
export
const SupportedCamelPhases_phase1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary phase1
 * @constant
 */
export
const phase1: number = SupportedCamelPhases_phase1; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedCamelPhases_phase2
 * @constant
 */
export
const SupportedCamelPhases_phase2: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary phase2
 * @constant
 */
export
const phase2: number = SupportedCamelPhases_phase2; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedCamelPhases_phase3
 * @constant
 */
export
const SupportedCamelPhases_phase3: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary phase3
 * @constant
 */
export
const phase3: number = SupportedCamelPhases_phase3; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedCamelPhases_phase4
 * @constant
 */
export
const SupportedCamelPhases_phase4: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary phase4
 * @constant
 */
export
const phase4: number = SupportedCamelPhases_phase4; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SupportedCamelPhases: $.ASN1Decoder<SupportedCamelPhases> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedCamelPhases
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SupportedCamelPhases (el: _Element): SupportedCamelPhases {
    if (!_cached_decoder_for_SupportedCamelPhases) { _cached_decoder_for_SupportedCamelPhases = $._decodeBitString; }
    return _cached_decoder_for_SupportedCamelPhases(el);
}

let _cached_encoder_for_SupportedCamelPhases: $.ASN1Encoder<SupportedCamelPhases> | null = null;

/**
 * @summary Encodes a(n) SupportedCamelPhases into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedCamelPhases, encoded as an ASN.1 Element.
 */
export
function _encode_SupportedCamelPhases (value: SupportedCamelPhases, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SupportedCamelPhases) { _cached_encoder_for_SupportedCamelPhases = $._encodeBitString; }
    return _cached_encoder_for_SupportedCamelPhases(value, elGetter);
}


/* eslint-enable */
