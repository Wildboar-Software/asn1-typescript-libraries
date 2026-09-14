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
 * @summary ECParameters_version
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECParameters-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ECParameters_version = INTEGER;

/**
 * @summary ECParameters_version_ecpVerl
 * @constant
 * @type {number}
 */
export
const ECParameters_version_ecpVerl: ECParameters_version = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ECParameters_version_ecpVerl
 * @constant
 * @type {number}
 */
export
const ecpVerl: ECParameters_version = ECParameters_version_ecpVerl; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ECParameters_version: $.ASN1Decoder<ECParameters_version> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ECParameters_version
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ECParameters_version (el: _Element): ECParameters_version {
    if (!_cached_decoder_for_ECParameters_version) { _cached_decoder_for_ECParameters_version = $._decodeInteger; }
    return _cached_decoder_for_ECParameters_version(el);
}

let _cached_encoder_for_ECParameters_version: $.ASN1Encoder<ECParameters_version> | null = null;

/**
 * @summary Encodes a(n) ECParameters_version into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECParameters_version, encoded as an ASN.1 Element.
 */
export
function _encode_ECParameters_version (value: ECParameters_version, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ECParameters_version) { _cached_encoder_for_ECParameters_version = $._encodeInteger; }
    return _cached_encoder_for_ECParameters_version(value, elGetter);
}


/* eslint-enable */
