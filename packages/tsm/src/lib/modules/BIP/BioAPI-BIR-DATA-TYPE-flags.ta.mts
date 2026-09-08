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
 * @summary BioAPI_BIR_DATA_TYPE_flags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BioAPI-BIR-DATA-TYPE-flags ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type BioAPI_BIR_DATA_TYPE_flags = BIT_STRING;

/**
 * @summary BioAPI_BIR_DATA_TYPE_flags_encrypted
 * @constant
 */
export
const BioAPI_BIR_DATA_TYPE_flags_encrypted: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary encrypted
 * @constant
 */
export
const encrypted: number = BioAPI_BIR_DATA_TYPE_flags_encrypted; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_BIR_DATA_TYPE_flags_signed
 * @constant
 */
export
const BioAPI_BIR_DATA_TYPE_flags_signed: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary signed
 * @constant
 */
export
const signed: number = BioAPI_BIR_DATA_TYPE_flags_signed; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_BIR_DATA_TYPE_flags_index_present
 * @constant
 */
export
const BioAPI_BIR_DATA_TYPE_flags_index_present: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary index_present
 * @constant
 */
export
const index_present: number = BioAPI_BIR_DATA_TYPE_flags_index_present; /* SHORT_NAMED_BIT */

let _cached_decoder_for_BioAPI_BIR_DATA_TYPE_flags: $.ASN1Decoder<BioAPI_BIR_DATA_TYPE_flags> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BIR_DATA_TYPE_flags
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BioAPI_BIR_DATA_TYPE_flags (el: _Element): BioAPI_BIR_DATA_TYPE_flags {
    if (!_cached_decoder_for_BioAPI_BIR_DATA_TYPE_flags) { _cached_decoder_for_BioAPI_BIR_DATA_TYPE_flags = $._decodeBitString; }
    return _cached_decoder_for_BioAPI_BIR_DATA_TYPE_flags(el);
}

let _cached_encoder_for_BioAPI_BIR_DATA_TYPE_flags: $.ASN1Encoder<BioAPI_BIR_DATA_TYPE_flags> | null = null;

/**
 * @summary Encodes a(n) BioAPI_BIR_DATA_TYPE_flags into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BIR_DATA_TYPE_flags, encoded as an ASN.1 Element.
 */
export
function _encode_BioAPI_BIR_DATA_TYPE_flags (value: BioAPI_BIR_DATA_TYPE_flags, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BioAPI_BIR_DATA_TYPE_flags) { _cached_encoder_for_BioAPI_BIR_DATA_TYPE_flags = $._encodeBitString; }
    return _cached_encoder_for_BioAPI_BIR_DATA_TYPE_flags(value, elGetter);
}


/* eslint-enable */
