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
 * @summary LDSSecurityObjectVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LDSSecurityObjectVersion  ::=  INTEGER {
 *     v0(0),
 *     v1(1)
 *     -- If LDSSecurityObjectVersion is V1, ldsVersionInfo MUST be present
 * }
 * ```
 */
export
type LDSSecurityObjectVersion = INTEGER;

/**
 * @summary LDSSecurityObjectVersion_v0
 * @constant
 * @type {number}
 */
export
const LDSSecurityObjectVersion_v0: LDSSecurityObjectVersion = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LDSSecurityObjectVersion_v0
 * @constant
 * @type {number}
 */
export
const v0: LDSSecurityObjectVersion = LDSSecurityObjectVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LDSSecurityObjectVersion_v1
 * @constant
 * @type {number}
 */
export
const LDSSecurityObjectVersion_v1: LDSSecurityObjectVersion = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LDSSecurityObjectVersion_v1
 * @constant
 * @type {number}
 */
export
const v1: LDSSecurityObjectVersion = LDSSecurityObjectVersion_v1; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_LDSSecurityObjectVersion: $.ASN1Decoder<LDSSecurityObjectVersion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LDSSecurityObjectVersion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LDSSecurityObjectVersion (el: _Element): LDSSecurityObjectVersion {
    if (!_cached_decoder_for_LDSSecurityObjectVersion) { _cached_decoder_for_LDSSecurityObjectVersion = $._decodeInteger; }
    return _cached_decoder_for_LDSSecurityObjectVersion(el);
}

let _cached_encoder_for_LDSSecurityObjectVersion: $.ASN1Encoder<LDSSecurityObjectVersion> | null = null;

/**
 * @summary Encodes a(n) LDSSecurityObjectVersion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDSSecurityObjectVersion, encoded as an ASN.1 Element.
 */
export
function _encode_LDSSecurityObjectVersion (value: LDSSecurityObjectVersion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LDSSecurityObjectVersion) { _cached_encoder_for_LDSSecurityObjectVersion = $._encodeInteger; }
    return _cached_encoder_for_LDSSecurityObjectVersion(value, elGetter);
}


/* eslint-enable */
