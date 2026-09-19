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
 * @summary ConnectionDisposition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionDisposition  ::= 
 *     INTEGER {
 *         tally    (0),  -- default
 *         modified (1),  -- sources contains new current state
 *         pending  (2),  -- sources contains future state
 *         locked   (3)   -- error: target locked. sources contains current state
 *         -- more tbd.
 *     }
 * ```
 */
export
type ConnectionDisposition = INTEGER;

/**
 * @summary ConnectionDisposition_tally
 * @constant
 * @type {number}
 */
export
const ConnectionDisposition_tally: ConnectionDisposition = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectionDisposition_tally
 * @constant
 * @type {number}
 */
export
const tally: ConnectionDisposition = ConnectionDisposition_tally; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectionDisposition_modified
 * @constant
 * @type {number}
 */
export
const ConnectionDisposition_modified: ConnectionDisposition = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectionDisposition_modified
 * @constant
 * @type {number}
 */
export
const modified: ConnectionDisposition = ConnectionDisposition_modified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectionDisposition_pending
 * @constant
 * @type {number}
 */
export
const ConnectionDisposition_pending: ConnectionDisposition = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectionDisposition_pending
 * @constant
 * @type {number}
 */
export
const pending: ConnectionDisposition = ConnectionDisposition_pending; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectionDisposition_locked
 * @constant
 * @type {number}
 */
export
const ConnectionDisposition_locked: ConnectionDisposition = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectionDisposition_locked
 * @constant
 * @type {number}
 */
export
const locked: ConnectionDisposition = ConnectionDisposition_locked; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ConnectionDisposition: $.ASN1Decoder<ConnectionDisposition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionDisposition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionDisposition (el: _Element): ConnectionDisposition {
    if (!_cached_decoder_for_ConnectionDisposition) { _cached_decoder_for_ConnectionDisposition = $._decodeInteger; }
    return _cached_decoder_for_ConnectionDisposition(el);
}

let _cached_encoder_for_ConnectionDisposition: $.ASN1Encoder<ConnectionDisposition> | null = null;

/**
 * @summary Encodes a(n) ConnectionDisposition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionDisposition, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionDisposition (value: ConnectionDisposition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionDisposition) { _cached_encoder_for_ConnectionDisposition = $._encodeInteger; }
    return _cached_encoder_for_ConnectionDisposition(value, elGetter);
}


/* eslint-enable */
