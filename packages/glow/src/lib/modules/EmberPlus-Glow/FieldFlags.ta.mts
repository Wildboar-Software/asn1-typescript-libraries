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
 * @summary FieldFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldFlags  ::= 
 *     INTEGER {
 *         sparse            (-2),
 *         all               (-1),
 *         default           ( 0), -- same as "all"
 *         identifier        ( 1),
 *         description       ( 2),
 *         tree              ( 3),
 *         value             ( 4),
 *         connections       ( 5)
 *     }
 * ```
 */
export
type FieldFlags = INTEGER;

/**
 * @summary FieldFlags_sparse
 * @constant
 * @type {number}
 */
export
const FieldFlags_sparse: FieldFlags = -2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FieldFlags_sparse
 * @constant
 * @type {number}
 */
export
const sparse: FieldFlags = FieldFlags_sparse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FieldFlags_all
 * @constant
 * @type {number}
 */
export
const FieldFlags_all: FieldFlags = -1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FieldFlags_all
 * @constant
 * @type {number}
 */
export
const all: FieldFlags = FieldFlags_all; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FieldFlags_default_
 * @constant
 * @type {number}
 */
export
const FieldFlags_default_: FieldFlags = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FieldFlags_default_
 * @constant
 * @type {number}
 */
export
const default_: FieldFlags = FieldFlags_default_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FieldFlags_identifier
 * @constant
 * @type {number}
 */
export
const FieldFlags_identifier: FieldFlags = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FieldFlags_identifier
 * @constant
 * @type {number}
 */
export
const identifier: FieldFlags = FieldFlags_identifier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FieldFlags_description
 * @constant
 * @type {number}
 */
export
const FieldFlags_description: FieldFlags = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FieldFlags_description
 * @constant
 * @type {number}
 */
export
const description: FieldFlags = FieldFlags_description; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FieldFlags_tree
 * @constant
 * @type {number}
 */
export
const FieldFlags_tree: FieldFlags = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FieldFlags_tree
 * @constant
 * @type {number}
 */
export
const tree: FieldFlags = FieldFlags_tree; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FieldFlags_value
 * @constant
 * @type {number}
 */
export
const FieldFlags_value: FieldFlags = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FieldFlags_value
 * @constant
 * @type {number}
 */
export
const value: FieldFlags = FieldFlags_value; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FieldFlags_connections
 * @constant
 * @type {number}
 */
export
const FieldFlags_connections: FieldFlags = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FieldFlags_connections
 * @constant
 * @type {number}
 */
export
const connections: FieldFlags = FieldFlags_connections; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_FieldFlags: $.ASN1Decoder<FieldFlags> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FieldFlags
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FieldFlags (el: _Element): FieldFlags {
    if (!_cached_decoder_for_FieldFlags) { _cached_decoder_for_FieldFlags = $._decodeInteger; }
    return _cached_decoder_for_FieldFlags(el);
}

let _cached_encoder_for_FieldFlags: $.ASN1Encoder<FieldFlags> | null = null;

/**
 * @summary Encodes a(n) FieldFlags into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FieldFlags, encoded as an ASN.1 Element.
 */
export
function _encode_FieldFlags (value: FieldFlags, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FieldFlags) { _cached_encoder_for_FieldFlags = $._encodeInteger; }
    return _cached_encoder_for_FieldFlags(value, elGetter);
}


/* eslint-enable */
