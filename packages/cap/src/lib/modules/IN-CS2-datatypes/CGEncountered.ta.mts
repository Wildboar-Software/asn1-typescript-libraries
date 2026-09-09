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
 * @summary CGEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CGEncountered  ::=  ENUMERATED {
 *   noCGencountered(0), manualCGencountered(1), scpOverload(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CGEncountered {
    noCGencountered = 0,
    manualCGencountered = 1,
    scpOverload = 2,
}

/**
 * @summary CGEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CGEncountered  ::=  ENUMERATED {
 *   noCGencountered(0), manualCGencountered(1), scpOverload(2)}
 * ```
 * 
 * @enum {number}
 */
export
type CGEncountered = _enum_for_CGEncountered;

/**
 * @summary CGEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CGEncountered  ::=  ENUMERATED {
 *   noCGencountered(0), manualCGencountered(1), scpOverload(2)}
 * ```
 * 
 * @enum {number}
 */
export
const CGEncountered = _enum_for_CGEncountered;

/**
 * @summary CGEncountered_noCGencountered
 * @constant
 * @type {number}
 */
export
const CGEncountered_noCGencountered: CGEncountered = CGEncountered.noCGencountered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noCGencountered
 * @constant
 * @type {number}
 */
export
const noCGencountered: CGEncountered = CGEncountered.noCGencountered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CGEncountered_manualCGencountered
 * @constant
 * @type {number}
 */
export
const CGEncountered_manualCGencountered: CGEncountered = CGEncountered.manualCGencountered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary manualCGencountered
 * @constant
 * @type {number}
 */
export
const manualCGencountered: CGEncountered = CGEncountered.manualCGencountered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CGEncountered_scpOverload
 * @constant
 * @type {number}
 */
export
const CGEncountered_scpOverload: CGEncountered = CGEncountered.scpOverload; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary scpOverload
 * @constant
 * @type {number}
 */
export
const scpOverload: CGEncountered = CGEncountered.scpOverload; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CGEncountered: $.ASN1Decoder<CGEncountered> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CGEncountered
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CGEncountered (el: _Element): CGEncountered {
    if (!_cached_decoder_for_CGEncountered) { _cached_decoder_for_CGEncountered = $._decodeEnumerated; }
    return _cached_decoder_for_CGEncountered(el);
}

let _cached_encoder_for_CGEncountered: $.ASN1Encoder<CGEncountered> | null = null;

/**
 * @summary Encodes a(n) CGEncountered into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CGEncountered, encoded as an ASN.1 Element.
 */
export
function _encode_CGEncountered (value: CGEncountered, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CGEncountered) { _cached_encoder_for_CGEncountered = $._encodeEnumerated; }
    return _cached_encoder_for_CGEncountered(value, elGetter);
}


/* eslint-enable */
