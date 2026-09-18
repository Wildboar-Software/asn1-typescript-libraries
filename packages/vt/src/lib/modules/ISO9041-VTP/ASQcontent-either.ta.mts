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
 * @summary ASQcontent_either
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASQcontent-either ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ASQcontent_either = INTEGER;

/**
 * @summary ASQcontent_either_a_mode
 * @constant
 * @type {number}
 */
export
const ASQcontent_either_a_mode: ASQcontent_either = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASQcontent_either_a_mode
 * @constant
 * @type {number}
 */
export
const a_mode: ASQcontent_either = ASQcontent_either_a_mode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ASQcontent_either_s_mode
 * @constant
 * @type {number}
 */
export
const ASQcontent_either_s_mode: ASQcontent_either = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASQcontent_either_s_mode
 * @constant
 * @type {number}
 */
export
const s_mode: ASQcontent_either = ASQcontent_either_s_mode; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ASQcontent_either: $.ASN1Decoder<ASQcontent_either> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ASQcontent_either
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ASQcontent_either (el: _Element): ASQcontent_either {
    if (!_cached_decoder_for_ASQcontent_either) { _cached_decoder_for_ASQcontent_either = $._decodeInteger; }
    return _cached_decoder_for_ASQcontent_either(el);
}

let _cached_encoder_for_ASQcontent_either: $.ASN1Encoder<ASQcontent_either> | null = null;

/**
 * @summary Encodes a(n) ASQcontent_either into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASQcontent_either, encoded as an ASN.1 Element.
 */
export
function _encode_ASQcontent_either (value: ASQcontent_either, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ASQcontent_either) { _cached_encoder_for_ASQcontent_either = $._encodeInteger; }
    return _cached_encoder_for_ASQcontent_either(value, elGetter);
}


/* eslint-enable */
