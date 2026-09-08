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
 * @summary ReplaceMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReplaceMode  ::=  ENUMERATED
 * {    replaceAll            (0),
 *     replacePortion            (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReplaceMode {
    replaceAll = 0,
    replacePortion = 1,
}

/**
 * @summary ReplaceMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReplaceMode  ::=  ENUMERATED
 * {    replaceAll            (0),
 *     replacePortion            (1) }
 * ```
 * 
 * @enum {number}
 */
export
type ReplaceMode = _enum_for_ReplaceMode;

/**
 * @summary ReplaceMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReplaceMode  ::=  ENUMERATED
 * {    replaceAll            (0),
 *     replacePortion            (1) }
 * ```
 * 
 * @enum {number}
 */
export
const ReplaceMode = _enum_for_ReplaceMode;

/**
 * @summary ReplaceMode_replaceAll
 * @constant
 * @type {number}
 */
export
const ReplaceMode_replaceAll: ReplaceMode = ReplaceMode.replaceAll; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary replaceAll
 * @constant
 * @type {number}
 */
export
const replaceAll: ReplaceMode = ReplaceMode.replaceAll; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReplaceMode_replacePortion
 * @constant
 * @type {number}
 */
export
const ReplaceMode_replacePortion: ReplaceMode = ReplaceMode.replacePortion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary replacePortion
 * @constant
 * @type {number}
 */
export
const replacePortion: ReplaceMode = ReplaceMode.replacePortion; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ReplaceMode: $.ASN1Decoder<ReplaceMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReplaceMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReplaceMode (el: _Element): ReplaceMode {
    if (!_cached_decoder_for_ReplaceMode) { _cached_decoder_for_ReplaceMode = $._decodeEnumerated; }
    return _cached_decoder_for_ReplaceMode(el);
}

let _cached_encoder_for_ReplaceMode: $.ASN1Encoder<ReplaceMode> | null = null;

/**
 * @summary Encodes a(n) ReplaceMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplaceMode, encoded as an ASN.1 Element.
 */
export
function _encode_ReplaceMode (value: ReplaceMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReplaceMode) { _cached_encoder_for_ReplaceMode = $._encodeEnumerated; }
    return _cached_encoder_for_ReplaceMode(value, elGetter);
}


/* eslint-enable */
