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



/* START_OF_SYMBOL_DEFINITION TrustAnchorInfoVersion */
/**
 * @summary TrustAnchorInfoVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrustAnchorInfoVersion  ::=  INTEGER { v1(1) }
 * ```
 */
export
type TrustAnchorInfoVersion = INTEGER;
/* END_OF_SYMBOL_DEFINITION TrustAnchorInfoVersion */

/* START_OF_SYMBOL_DEFINITION TrustAnchorInfoVersion_v1 */
/**
 * @summary TrustAnchorInfoVersion_v1
 * @constant
 * @type {number}
 */
export
const TrustAnchorInfoVersion_v1: TrustAnchorInfoVersion = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TrustAnchorInfoVersion_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary TrustAnchorInfoVersion_v1
 * @constant
 * @type {number}
 */
export
const v1: TrustAnchorInfoVersion = TrustAnchorInfoVersion_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TrustAnchorInfoVersion */
let _cached_decoder_for_TrustAnchorInfoVersion: $.ASN1Decoder<TrustAnchorInfoVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TrustAnchorInfoVersion */

/* START_OF_SYMBOL_DEFINITION _decode_TrustAnchorInfoVersion */
/**
 * @summary Decodes an ASN.1 element into a(n) TrustAnchorInfoVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TrustAnchorInfoVersion} The decoded data structure.
 */
export
function _decode_TrustAnchorInfoVersion (el: _Element) {
    if (!_cached_decoder_for_TrustAnchorInfoVersion) { _cached_decoder_for_TrustAnchorInfoVersion = $._decodeInteger; }
    return _cached_decoder_for_TrustAnchorInfoVersion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TrustAnchorInfoVersion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TrustAnchorInfoVersion */
let _cached_encoder_for_TrustAnchorInfoVersion: $.ASN1Encoder<TrustAnchorInfoVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TrustAnchorInfoVersion */

/* START_OF_SYMBOL_DEFINITION _encode_TrustAnchorInfoVersion */
/**
 * @summary Encodes a(n) TrustAnchorInfoVersion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrustAnchorInfoVersion, encoded as an ASN.1 Element.
 */
export
function _encode_TrustAnchorInfoVersion (value: TrustAnchorInfoVersion, elGetter: $.ASN1Encoder<TrustAnchorInfoVersion>) {
    if (!_cached_encoder_for_TrustAnchorInfoVersion) { _cached_encoder_for_TrustAnchorInfoVersion = $._encodeInteger; }
    return _cached_encoder_for_TrustAnchorInfoVersion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TrustAnchorInfoVersion */

/* eslint-enable */
