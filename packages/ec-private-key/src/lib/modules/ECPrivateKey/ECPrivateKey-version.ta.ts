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
import * as $ from "asn1-ts/dist/node/functional";



/* START_OF_SYMBOL_DEFINITION ECPrivateKey_version */
/**
 * @summary ECPrivateKey_version
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECPrivateKey-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ECPrivateKey_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION ECPrivateKey_version */

/* START_OF_SYMBOL_DEFINITION ECPrivateKey_version_ecPrivkeyVer1 */
/**
 * @summary ECPrivateKey_version_ecPrivkeyVer1
 * @constant
 * @type {number}
 */
export
const ECPrivateKey_version_ecPrivkeyVer1: ECPrivateKey_version = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ECPrivateKey_version_ecPrivkeyVer1 */

/* START_OF_SYMBOL_DEFINITION ecPrivkeyVer1 */
/**
 * @summary ECPrivateKey_version_ecPrivkeyVer1
 * @constant
 * @type {number}
 */
export
const ecPrivkeyVer1: ECPrivateKey_version = ECPrivateKey_version_ecPrivkeyVer1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ecPrivkeyVer1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPrivateKey_version */
let _cached_decoder_for_ECPrivateKey_version: $.ASN1Decoder<ECPrivateKey_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPrivateKey_version */

/* START_OF_SYMBOL_DEFINITION _decode_ECPrivateKey_version */
/**
 * @summary Decodes an ASN.1 element into a(n) ECPrivateKey_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECPrivateKey_version} The decoded data structure.
 */
export
function _decode_ECPrivateKey_version (el: _Element) {
    if (!_cached_decoder_for_ECPrivateKey_version) { _cached_decoder_for_ECPrivateKey_version = $._decodeInteger; }
    return _cached_decoder_for_ECPrivateKey_version(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECPrivateKey_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPrivateKey_version */
let _cached_encoder_for_ECPrivateKey_version: $.ASN1Encoder<ECPrivateKey_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPrivateKey_version */

/* START_OF_SYMBOL_DEFINITION _encode_ECPrivateKey_version */
/**
 * @summary Encodes a(n) ECPrivateKey_version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECPrivateKey_version, encoded as an ASN.1 Element.
 */
export
function _encode_ECPrivateKey_version (value: ECPrivateKey_version, elGetter: $.ASN1Encoder<ECPrivateKey_version>) {
    if (!_cached_encoder_for_ECPrivateKey_version) { _cached_encoder_for_ECPrivateKey_version = $._encodeInteger; }
    return _cached_encoder_for_ECPrivateKey_version(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECPrivateKey_version */

/* eslint-enable */
