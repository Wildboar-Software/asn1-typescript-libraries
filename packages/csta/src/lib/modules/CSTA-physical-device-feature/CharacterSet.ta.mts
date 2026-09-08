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
 * @summary CharacterSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CharacterSet  ::=  ENUMERATED
 * {     ascii                     (0),
 *     unicode                 (1),
 *     proprietary                 (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CharacterSet {
    ascii = 0,
    unicode = 1,
    proprietary = 2,
}

/**
 * @summary CharacterSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CharacterSet  ::=  ENUMERATED
 * {     ascii                     (0),
 *     unicode                 (1),
 *     proprietary                 (2) }
 * ```
 * 
 * @enum {number}
 */
export
type CharacterSet = _enum_for_CharacterSet;

/**
 * @summary CharacterSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CharacterSet  ::=  ENUMERATED
 * {     ascii                     (0),
 *     unicode                 (1),
 *     proprietary                 (2) }
 * ```
 * 
 * @enum {number}
 */
export
const CharacterSet = _enum_for_CharacterSet;

/**
 * @summary CharacterSet_ascii
 * @constant
 * @type {number}
 */
export
const CharacterSet_ascii: CharacterSet = CharacterSet.ascii; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ascii
 * @constant
 * @type {number}
 */
export
const ascii: CharacterSet = CharacterSet.ascii; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CharacterSet_unicode
 * @constant
 * @type {number}
 */
export
const CharacterSet_unicode: CharacterSet = CharacterSet.unicode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unicode
 * @constant
 * @type {number}
 */
export
const unicode: CharacterSet = CharacterSet.unicode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CharacterSet_proprietary
 * @constant
 * @type {number}
 */
export
const CharacterSet_proprietary: CharacterSet = CharacterSet.proprietary; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proprietary
 * @constant
 * @type {number}
 */
export
const proprietary: CharacterSet = CharacterSet.proprietary; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CharacterSet: $.ASN1Decoder<CharacterSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CharacterSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CharacterSet (el: _Element): CharacterSet {
    if (!_cached_decoder_for_CharacterSet) { _cached_decoder_for_CharacterSet = $._decodeEnumerated; }
    return _cached_decoder_for_CharacterSet(el);
}

let _cached_encoder_for_CharacterSet: $.ASN1Encoder<CharacterSet> | null = null;

/**
 * @summary Encodes a(n) CharacterSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CharacterSet, encoded as an ASN.1 Element.
 */
export
function _encode_CharacterSet (value: CharacterSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CharacterSet) { _cached_encoder_for_CharacterSet = $._encodeEnumerated; }
    return _cached_encoder_for_CharacterSet(value, elGetter);
}


/* eslint-enable */
