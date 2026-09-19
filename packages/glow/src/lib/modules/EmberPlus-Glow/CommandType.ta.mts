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
 * @summary CommandType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommandType  ::= 
 *     INTEGER {
 *         subscribe    (30),
 *         unsubscribe  (31),
 *         getDirectory (32),
 *         invoke       (33)
 *     }
 * ```
 */
export
type CommandType = INTEGER;

/**
 * @summary CommandType_subscribe
 * @constant
 * @type {number}
 */
export
const CommandType_subscribe: CommandType = 30; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CommandType_subscribe
 * @constant
 * @type {number}
 */
export
const subscribe: CommandType = CommandType_subscribe; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CommandType_unsubscribe
 * @constant
 * @type {number}
 */
export
const CommandType_unsubscribe: CommandType = 31; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CommandType_unsubscribe
 * @constant
 * @type {number}
 */
export
const unsubscribe: CommandType = CommandType_unsubscribe; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CommandType_getDirectory
 * @constant
 * @type {number}
 */
export
const CommandType_getDirectory: CommandType = 32; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CommandType_getDirectory
 * @constant
 * @type {number}
 */
export
const getDirectory: CommandType = CommandType_getDirectory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CommandType_invoke
 * @constant
 * @type {number}
 */
export
const CommandType_invoke: CommandType = 33; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CommandType_invoke
 * @constant
 * @type {number}
 */
export
const invoke: CommandType = CommandType_invoke; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_CommandType: $.ASN1Decoder<CommandType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommandType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommandType (el: _Element): CommandType {
    if (!_cached_decoder_for_CommandType) { _cached_decoder_for_CommandType = $._decodeInteger; }
    return _cached_decoder_for_CommandType(el);
}

let _cached_encoder_for_CommandType: $.ASN1Encoder<CommandType> | null = null;

/**
 * @summary Encodes a(n) CommandType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommandType, encoded as an ASN.1 Element.
 */
export
function _encode_CommandType (value: CommandType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommandType) { _cached_encoder_for_CommandType = $._encodeInteger; }
    return _cached_encoder_for_CommandType(value, elGetter);
}


/* eslint-enable */
