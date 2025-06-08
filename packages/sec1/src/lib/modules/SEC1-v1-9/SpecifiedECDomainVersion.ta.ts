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



/* START_OF_SYMBOL_DEFINITION SpecifiedECDomainVersion */
/**
 * @summary SpecifiedECDomainVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpecifiedECDomainVersion  ::=  INTEGER {
 *     ecdpVer1(1),
 *     ecdpVer2(2),
 *     ecdpVer3(3)
 * }
 * ```
 */
export
type SpecifiedECDomainVersion = INTEGER;
/* END_OF_SYMBOL_DEFINITION SpecifiedECDomainVersion */

/* START_OF_SYMBOL_DEFINITION SpecifiedECDomainVersion_ecdpVer1 */
/**
 * @summary SpecifiedECDomainVersion_ecdpVer1
 * @constant
 * @type {number}
 */
export
const SpecifiedECDomainVersion_ecdpVer1: SpecifiedECDomainVersion = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SpecifiedECDomainVersion_ecdpVer1 */

/* START_OF_SYMBOL_DEFINITION ecdpVer1 */
/**
 * @summary SpecifiedECDomainVersion_ecdpVer1
 * @constant
 * @type {number}
 */
export
const ecdpVer1: SpecifiedECDomainVersion = SpecifiedECDomainVersion_ecdpVer1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ecdpVer1 */

/* START_OF_SYMBOL_DEFINITION SpecifiedECDomainVersion_ecdpVer2 */
/**
 * @summary SpecifiedECDomainVersion_ecdpVer2
 * @constant
 * @type {number}
 */
export
const SpecifiedECDomainVersion_ecdpVer2: SpecifiedECDomainVersion = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SpecifiedECDomainVersion_ecdpVer2 */

/* START_OF_SYMBOL_DEFINITION ecdpVer2 */
/**
 * @summary SpecifiedECDomainVersion_ecdpVer2
 * @constant
 * @type {number}
 */
export
const ecdpVer2: SpecifiedECDomainVersion = SpecifiedECDomainVersion_ecdpVer2; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ecdpVer2 */

/* START_OF_SYMBOL_DEFINITION SpecifiedECDomainVersion_ecdpVer3 */
/**
 * @summary SpecifiedECDomainVersion_ecdpVer3
 * @constant
 * @type {number}
 */
export
const SpecifiedECDomainVersion_ecdpVer3: SpecifiedECDomainVersion = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SpecifiedECDomainVersion_ecdpVer3 */

/* START_OF_SYMBOL_DEFINITION ecdpVer3 */
/**
 * @summary SpecifiedECDomainVersion_ecdpVer3
 * @constant
 * @type {number}
 */
export
const ecdpVer3: SpecifiedECDomainVersion = SpecifiedECDomainVersion_ecdpVer3; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ecdpVer3 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecifiedECDomainVersion */
let _cached_decoder_for_SpecifiedECDomainVersion: $.ASN1Decoder<SpecifiedECDomainVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecifiedECDomainVersion */

/* START_OF_SYMBOL_DEFINITION _decode_SpecifiedECDomainVersion */
/**
 * @summary Decodes an ASN.1 element into a(n) SpecifiedECDomainVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SpecifiedECDomainVersion} The decoded data structure.
 */
export
function _decode_SpecifiedECDomainVersion (el: _Element) {
    if (!_cached_decoder_for_SpecifiedECDomainVersion) { _cached_decoder_for_SpecifiedECDomainVersion = $._decodeInteger; }
    return _cached_decoder_for_SpecifiedECDomainVersion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SpecifiedECDomainVersion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecifiedECDomainVersion */
let _cached_encoder_for_SpecifiedECDomainVersion: $.ASN1Encoder<SpecifiedECDomainVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecifiedECDomainVersion */

/* START_OF_SYMBOL_DEFINITION _encode_SpecifiedECDomainVersion */
/**
 * @summary Encodes a(n) SpecifiedECDomainVersion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecifiedECDomainVersion, encoded as an ASN.1 Element.
 */
export
function _encode_SpecifiedECDomainVersion (value: SpecifiedECDomainVersion, elGetter: $.ASN1Encoder<SpecifiedECDomainVersion>) {
    if (!_cached_encoder_for_SpecifiedECDomainVersion) { _cached_encoder_for_SpecifiedECDomainVersion = $._encodeInteger; }
    return _cached_encoder_for_SpecifiedECDomainVersion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SpecifiedECDomainVersion */

/* eslint-enable */
