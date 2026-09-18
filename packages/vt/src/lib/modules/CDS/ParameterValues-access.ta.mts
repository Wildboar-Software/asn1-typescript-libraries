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
 * @summary ParameterValues_access
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-access ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ParameterValues_access = INTEGER;

/**
 * @summary ParameterValues_access_wavar
 * @constant
 * @type {number}
 */
export
const ParameterValues_access_wavar: ParameterValues_access = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_access_wavar
 * @constant
 * @type {number}
 */
export
const wavar: ParameterValues_access = ParameterValues_access_wavar; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_access_waci
 * @constant
 * @type {number}
 */
export
const ParameterValues_access_waci: ParameterValues_access = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_access_waci
 * @constant
 * @type {number}
 */
export
const waci: ParameterValues_access = ParameterValues_access_waci; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_access_waca
 * @constant
 * @type {number}
 */
export
const ParameterValues_access_waca: ParameterValues_access = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_access_waca
 * @constant
 * @type {number}
 */
export
const waca: ParameterValues_access = ParameterValues_access_waca; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ParameterValues_access: $.ASN1Decoder<ParameterValues_access> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValues_access
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValues_access (el: _Element): ParameterValues_access {
    if (!_cached_decoder_for_ParameterValues_access) { _cached_decoder_for_ParameterValues_access = $._decodeInteger; }
    return _cached_decoder_for_ParameterValues_access(el);
}

let _cached_encoder_for_ParameterValues_access: $.ASN1Encoder<ParameterValues_access> | null = null;

/**
 * @summary Encodes a(n) ParameterValues_access into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValues_access, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValues_access (value: ParameterValues_access, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValues_access) { _cached_encoder_for_ParameterValues_access = $._encodeInteger; }
    return _cached_encoder_for_ParameterValues_access(value, elGetter);
}


/* eslint-enable */
