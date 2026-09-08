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
 * @summary LampColor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LampColor  ::=  INTEGER
 * {     noColor                 (0),
 *     red                     (1),
 *     yellow                     (2),
 *     green                     (3),
 *     blue                     (4),
 *     unknown                 (5) } (0..100)
 * ```
 */
export
type LampColor = INTEGER;

/**
 * @summary LampColor_noColor
 * @constant
 * @type {number}
 */
export
const LampColor_noColor: LampColor = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_noColor
 * @constant
 * @type {number}
 */
export
const noColor: LampColor = LampColor_noColor; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_red
 * @constant
 * @type {number}
 */
export
const LampColor_red: LampColor = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_red
 * @constant
 * @type {number}
 */
export
const red: LampColor = LampColor_red; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_yellow
 * @constant
 * @type {number}
 */
export
const LampColor_yellow: LampColor = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_yellow
 * @constant
 * @type {number}
 */
export
const yellow: LampColor = LampColor_yellow; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_green
 * @constant
 * @type {number}
 */
export
const LampColor_green: LampColor = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_green
 * @constant
 * @type {number}
 */
export
const green: LampColor = LampColor_green; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_blue
 * @constant
 * @type {number}
 */
export
const LampColor_blue: LampColor = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_blue
 * @constant
 * @type {number}
 */
export
const blue: LampColor = LampColor_blue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_unknown
 * @constant
 * @type {number}
 */
export
const LampColor_unknown: LampColor = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_unknown
 * @constant
 * @type {number}
 */
export
const unknown: LampColor = LampColor_unknown; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_LampColor: $.ASN1Decoder<LampColor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LampColor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LampColor (el: _Element): LampColor {
    if (!_cached_decoder_for_LampColor) { _cached_decoder_for_LampColor = $._decodeInteger; }
    return _cached_decoder_for_LampColor(el);
}

let _cached_encoder_for_LampColor: $.ASN1Encoder<LampColor> | null = null;

/**
 * @summary Encodes a(n) LampColor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LampColor, encoded as an ASN.1 Element.
 */
export
function _encode_LampColor (value: LampColor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LampColor) { _cached_encoder_for_LampColor = $._encodeInteger; }
    return _cached_encoder_for_LampColor(value, elGetter);
}


/* eslint-enable */
