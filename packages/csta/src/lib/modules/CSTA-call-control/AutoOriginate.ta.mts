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
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary AutoOriginate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AutoOriginate  ::=  ENUMERATED
 * {     prompt                         ( 0),
 *     doNotPrompt                     ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AutoOriginate {
    prompt = 0,
    doNotPrompt = 1,
}

/**
 * @summary AutoOriginate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AutoOriginate  ::=  ENUMERATED
 * {     prompt                         ( 0),
 *     doNotPrompt                     ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
type AutoOriginate = _enum_for_AutoOriginate;

/**
 * @summary AutoOriginate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AutoOriginate  ::=  ENUMERATED
 * {     prompt                         ( 0),
 *     doNotPrompt                     ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
const AutoOriginate = _enum_for_AutoOriginate;

/**
 * @summary AutoOriginate_prompt
 * @constant
 * @type {number}
 */
export
const AutoOriginate_prompt: AutoOriginate = AutoOriginate.prompt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary prompt
 * @constant
 * @type {number}
 */
export
const prompt: AutoOriginate = AutoOriginate.prompt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AutoOriginate_doNotPrompt
 * @constant
 * @type {number}
 */
export
const AutoOriginate_doNotPrompt: AutoOriginate = AutoOriginate.doNotPrompt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary doNotPrompt
 * @constant
 * @type {number}
 */
export
const doNotPrompt: AutoOriginate = AutoOriginate.doNotPrompt; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AutoOriginate: $.ASN1Decoder<AutoOriginate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoOriginate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AutoOriginate (el: _Element): AutoOriginate {
    if (!_cached_decoder_for_AutoOriginate) { _cached_decoder_for_AutoOriginate = $._decodeEnumerated; }
    return _cached_decoder_for_AutoOriginate(el);
}

let _cached_encoder_for_AutoOriginate: $.ASN1Encoder<AutoOriginate> | null = null;

/**
 * @summary Encodes a(n) AutoOriginate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoOriginate, encoded as an ASN.1 Element.
 */
export
function _encode_AutoOriginate (value: AutoOriginate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AutoOriginate) { _cached_encoder_for_AutoOriginate = $._encodeEnumerated; }
    return _cached_encoder_for_AutoOriginate(value, elGetter);
}


/* eslint-enable */
