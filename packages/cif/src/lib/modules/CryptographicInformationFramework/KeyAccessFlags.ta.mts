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
 * @summary KeyAccessFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyAccessFlags  ::=  BIT STRING {
 *     sensitive           (0),
 *     extractable         (1),
 *     alwaysSensitive     (2),
 *     neverExtractable    (3),
 *     cardGenerated       (4)
 * }
 * ```
 */
export
type KeyAccessFlags = BIT_STRING;

/**
 * @summary KeyAccessFlags_sensitive
 * @constant
 */
export
const KeyAccessFlags_sensitive: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary sensitive
 * @constant
 */
export
const sensitive: number = KeyAccessFlags_sensitive; /* SHORT_NAMED_BIT */

/**
 * @summary KeyAccessFlags_extractable
 * @constant
 */
export
const KeyAccessFlags_extractable: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary extractable
 * @constant
 */
export
const extractable: number = KeyAccessFlags_extractable; /* SHORT_NAMED_BIT */

/**
 * @summary KeyAccessFlags_alwaysSensitive
 * @constant
 */
export
const KeyAccessFlags_alwaysSensitive: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary alwaysSensitive
 * @constant
 */
export
const alwaysSensitive: number = KeyAccessFlags_alwaysSensitive; /* SHORT_NAMED_BIT */

/**
 * @summary KeyAccessFlags_neverExtractable
 * @constant
 */
export
const KeyAccessFlags_neverExtractable: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary neverExtractable
 * @constant
 */
export
const neverExtractable: number = KeyAccessFlags_neverExtractable; /* SHORT_NAMED_BIT */

/**
 * @summary KeyAccessFlags_cardGenerated
 * @constant
 */
export
const KeyAccessFlags_cardGenerated: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary cardGenerated
 * @constant
 */
export
const cardGenerated: number = KeyAccessFlags_cardGenerated; /* SHORT_NAMED_BIT */

let _cached_decoder_for_KeyAccessFlags: $.ASN1Decoder<KeyAccessFlags> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KeyAccessFlags
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KeyAccessFlags (el: _Element): KeyAccessFlags {
    if (!_cached_decoder_for_KeyAccessFlags) { _cached_decoder_for_KeyAccessFlags = $._decodeBitString; }
    return _cached_decoder_for_KeyAccessFlags(el);
}

let _cached_encoder_for_KeyAccessFlags: $.ASN1Encoder<KeyAccessFlags> | null = null;

/**
 * @summary Encodes a(n) KeyAccessFlags into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyAccessFlags, encoded as an ASN.1 Element.
 */
export
function _encode_KeyAccessFlags (value: KeyAccessFlags, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KeyAccessFlags) { _cached_encoder_for_KeyAccessFlags = $._encodeBitString; }
    return _cached_encoder_for_KeyAccessFlags(value, elGetter);
}


/* eslint-enable */
