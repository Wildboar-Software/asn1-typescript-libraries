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
 * @summary VolInc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VolInc  ::=  ENUMERATED
 * {     increment                 (0),
 *     decrement                 (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_VolInc {
    increment = 0,
    decrement = 1,
}

/**
 * @summary VolInc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VolInc  ::=  ENUMERATED
 * {     increment                 (0),
 *     decrement                 (1) }
 * ```
 * 
 * @enum {number}
 */
export
type VolInc = _enum_for_VolInc;

/**
 * @summary VolInc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VolInc  ::=  ENUMERATED
 * {     increment                 (0),
 *     decrement                 (1) }
 * ```
 * 
 * @enum {number}
 */
export
const VolInc = _enum_for_VolInc;

/**
 * @summary VolInc_increment
 * @constant
 * @type {number}
 */
export
const VolInc_increment: VolInc = VolInc.increment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary increment
 * @constant
 * @type {number}
 */
export
const increment: VolInc = VolInc.increment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VolInc_decrement
 * @constant
 * @type {number}
 */
export
const VolInc_decrement: VolInc = VolInc.decrement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary decrement
 * @constant
 * @type {number}
 */
export
const decrement: VolInc = VolInc.decrement; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_VolInc: $.ASN1Decoder<VolInc> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VolInc
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VolInc (el: _Element): VolInc {
    if (!_cached_decoder_for_VolInc) { _cached_decoder_for_VolInc = $._decodeEnumerated; }
    return _cached_decoder_for_VolInc(el);
}

let _cached_encoder_for_VolInc: $.ASN1Encoder<VolInc> | null = null;

/**
 * @summary Encodes a(n) VolInc into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VolInc, encoded as an ASN.1 Element.
 */
export
function _encode_VolInc (value: VolInc, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VolInc) { _cached_encoder_for_VolInc = $._encodeEnumerated; }
    return _cached_encoder_for_VolInc(value, elGetter);
}


/* eslint-enable */
