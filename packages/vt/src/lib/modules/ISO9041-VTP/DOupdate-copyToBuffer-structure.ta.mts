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
 * @summary DOupdate_copyToBuffer_structure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DOupdate-copyToBuffer-structure ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DOupdate_copyToBuffer_structure = INTEGER;

/**
 * @summary DOupdate_copyToBuffer_structure_none
 * @constant
 * @type {number}
 */
export
const DOupdate_copyToBuffer_structure_none: DOupdate_copyToBuffer_structure = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DOupdate_copyToBuffer_structure_none
 * @constant
 * @type {number}
 */
export
const none: DOupdate_copyToBuffer_structure = DOupdate_copyToBuffer_structure_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DOupdate_copyToBuffer_structure_x
 * @constant
 * @type {number}
 */
export
const DOupdate_copyToBuffer_structure_x: DOupdate_copyToBuffer_structure = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DOupdate_copyToBuffer_structure_x
 * @constant
 * @type {number}
 */
export
const x: DOupdate_copyToBuffer_structure = DOupdate_copyToBuffer_structure_x; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DOupdate_copyToBuffer_structure_xAndy
 * @constant
 * @type {number}
 */
export
const DOupdate_copyToBuffer_structure_xAndy: DOupdate_copyToBuffer_structure = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DOupdate_copyToBuffer_structure_xAndy
 * @constant
 * @type {number}
 */
export
const xAndy: DOupdate_copyToBuffer_structure = DOupdate_copyToBuffer_structure_xAndy; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DOupdate_copyToBuffer_structure: $.ASN1Decoder<DOupdate_copyToBuffer_structure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DOupdate_copyToBuffer_structure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DOupdate_copyToBuffer_structure (el: _Element): DOupdate_copyToBuffer_structure {
    if (!_cached_decoder_for_DOupdate_copyToBuffer_structure) { _cached_decoder_for_DOupdate_copyToBuffer_structure = $._decodeInteger; }
    return _cached_decoder_for_DOupdate_copyToBuffer_structure(el);
}

let _cached_encoder_for_DOupdate_copyToBuffer_structure: $.ASN1Encoder<DOupdate_copyToBuffer_structure> | null = null;

/**
 * @summary Encodes a(n) DOupdate_copyToBuffer_structure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DOupdate_copyToBuffer_structure, encoded as an ASN.1 Element.
 */
export
function _encode_DOupdate_copyToBuffer_structure (value: DOupdate_copyToBuffer_structure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DOupdate_copyToBuffer_structure) { _cached_encoder_for_DOupdate_copyToBuffer_structure = $._encodeInteger; }
    return _cached_encoder_for_DOupdate_copyToBuffer_structure(value, elGetter);
}


/* eslint-enable */
