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



/**
 * @summary BioAPI_BIR_SUBTYPE_vein_only_subtype
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BioAPI-BIR-SUBTYPE-vein-only-subtype ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type BioAPI_BIR_SUBTYPE_vein_only_subtype = BIT_STRING;

/**
 * @summary BioAPI_BIR_SUBTYPE_vein_only_subtype_left
 * @constant
 */
export
const BioAPI_BIR_SUBTYPE_vein_only_subtype_left: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary left
 * @constant
 */
export
const left: number = BioAPI_BIR_SUBTYPE_vein_only_subtype_left; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_BIR_SUBTYPE_vein_only_subtype_right
 * @constant
 */
export
const BioAPI_BIR_SUBTYPE_vein_only_subtype_right: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary right
 * @constant
 */
export
const right: number = BioAPI_BIR_SUBTYPE_vein_only_subtype_right; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_BIR_SUBTYPE_vein_only_subtype_veinPalm
 * @constant
 */
export
const BioAPI_BIR_SUBTYPE_vein_only_subtype_veinPalm: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary veinPalm
 * @constant
 */
export
const veinPalm: number = BioAPI_BIR_SUBTYPE_vein_only_subtype_veinPalm; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_BIR_SUBTYPE_vein_only_subtype_veinBackofhand
 * @constant
 */
export
const BioAPI_BIR_SUBTYPE_vein_only_subtype_veinBackofhand: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary veinBackofhand
 * @constant
 */
export
const veinBackofhand: number = BioAPI_BIR_SUBTYPE_vein_only_subtype_veinBackofhand; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_BIR_SUBTYPE_vein_only_subtype_veinWrist
 * @constant
 */
export
const BioAPI_BIR_SUBTYPE_vein_only_subtype_veinWrist: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary veinWrist
 * @constant
 */
export
const veinWrist: number = BioAPI_BIR_SUBTYPE_vein_only_subtype_veinWrist; /* SHORT_NAMED_BIT */

let _cached_decoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype: $.ASN1Decoder<BioAPI_BIR_SUBTYPE_vein_only_subtype> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BIR_SUBTYPE_vein_only_subtype
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BioAPI_BIR_SUBTYPE_vein_only_subtype (el: _Element): BioAPI_BIR_SUBTYPE_vein_only_subtype {
    if (!_cached_decoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype) { _cached_decoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype = $._decodeBitString; }
    return _cached_decoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype(el);
}

let _cached_encoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype: $.ASN1Encoder<BioAPI_BIR_SUBTYPE_vein_only_subtype> | null = null;

/**
 * @summary Encodes a(n) BioAPI_BIR_SUBTYPE_vein_only_subtype into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BIR_SUBTYPE_vein_only_subtype, encoded as an ASN.1 Element.
 */
export
function _encode_BioAPI_BIR_SUBTYPE_vein_only_subtype (value: BioAPI_BIR_SUBTYPE_vein_only_subtype, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype) { _cached_encoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype = $._encodeBitString; }
    return _cached_encoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype(value, elGetter);
}


/* eslint-enable */
