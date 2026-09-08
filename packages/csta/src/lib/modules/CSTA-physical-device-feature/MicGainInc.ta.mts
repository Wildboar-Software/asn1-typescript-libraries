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
 * @summary MicGainInc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MicGainInc  ::=  ENUMERATED
 * {     increment                 (0),
 *     decrement                 (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MicGainInc {
    increment = 0,
    decrement = 1,
}

/**
 * @summary MicGainInc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MicGainInc  ::=  ENUMERATED
 * {     increment                 (0),
 *     decrement                 (1) }
 * ```
 * 
 * @enum {number}
 */
export
type MicGainInc = _enum_for_MicGainInc;

/**
 * @summary MicGainInc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MicGainInc  ::=  ENUMERATED
 * {     increment                 (0),
 *     decrement                 (1) }
 * ```
 * 
 * @enum {number}
 */
export
const MicGainInc = _enum_for_MicGainInc;

/**
 * @summary MicGainInc_increment
 * @constant
 * @type {number}
 */
export
const MicGainInc_increment: MicGainInc = MicGainInc.increment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary increment
 * @constant
 * @type {number}
 */
export
const increment: MicGainInc = MicGainInc.increment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MicGainInc_decrement
 * @constant
 * @type {number}
 */
export
const MicGainInc_decrement: MicGainInc = MicGainInc.decrement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary decrement
 * @constant
 * @type {number}
 */
export
const decrement: MicGainInc = MicGainInc.decrement; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MicGainInc: $.ASN1Decoder<MicGainInc> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MicGainInc
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MicGainInc (el: _Element): MicGainInc {
    if (!_cached_decoder_for_MicGainInc) { _cached_decoder_for_MicGainInc = $._decodeEnumerated; }
    return _cached_decoder_for_MicGainInc(el);
}

let _cached_encoder_for_MicGainInc: $.ASN1Encoder<MicGainInc> | null = null;

/**
 * @summary Encodes a(n) MicGainInc into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MicGainInc, encoded as an ASN.1 Element.
 */
export
function _encode_MicGainInc (value: MicGainInc, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MicGainInc) { _cached_encoder_for_MicGainInc = $._encodeEnumerated; }
    return _cached_encoder_for_MicGainInc(value, elGetter);
}


/* eslint-enable */
