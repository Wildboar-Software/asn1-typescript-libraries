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
 * @summary ParameterAccess
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterAccess  ::= 
 *     INTEGER {
 *         none      (0),
 *         read      (1), -- default
 *         write     (2),
 *         readWrite (3)
 *     }
 * ```
 */
export
type ParameterAccess = INTEGER;

/**
 * @summary ParameterAccess_none
 * @constant
 * @type {number}
 */
export
const ParameterAccess_none: ParameterAccess = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterAccess_none
 * @constant
 * @type {number}
 */
export
const none: ParameterAccess = ParameterAccess_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterAccess_read
 * @constant
 * @type {number}
 */
export
const ParameterAccess_read: ParameterAccess = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterAccess_read
 * @constant
 * @type {number}
 */
export
const read: ParameterAccess = ParameterAccess_read; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterAccess_write
 * @constant
 * @type {number}
 */
export
const ParameterAccess_write: ParameterAccess = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterAccess_write
 * @constant
 * @type {number}
 */
export
const write: ParameterAccess = ParameterAccess_write; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterAccess_readWrite
 * @constant
 * @type {number}
 */
export
const ParameterAccess_readWrite: ParameterAccess = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterAccess_readWrite
 * @constant
 * @type {number}
 */
export
const readWrite: ParameterAccess = ParameterAccess_readWrite; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ParameterAccess: $.ASN1Decoder<ParameterAccess> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterAccess
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterAccess (el: _Element): ParameterAccess {
    if (!_cached_decoder_for_ParameterAccess) { _cached_decoder_for_ParameterAccess = $._decodeInteger; }
    return _cached_decoder_for_ParameterAccess(el);
}

let _cached_encoder_for_ParameterAccess: $.ASN1Encoder<ParameterAccess> | null = null;

/**
 * @summary Encodes a(n) ParameterAccess into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterAccess, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterAccess (value: ParameterAccess, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterAccess) { _cached_encoder_for_ParameterAccess = $._encodeInteger; }
    return _cached_encoder_for_ParameterAccess(value, elGetter);
}


/* eslint-enable */
