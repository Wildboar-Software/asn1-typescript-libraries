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
 * @summary TimerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimerID  ::=  ENUMERATED {tssf(0)
 *                         -- others ffs
 *                         }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TimerID {
    tssf = 0,
}

/**
 * @summary TimerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimerID  ::=  ENUMERATED {tssf(0)
 *                         -- others ffs
 *                         }
 * ```
 * 
 * @enum {number}
 */
export
type TimerID = _enum_for_TimerID;

/**
 * @summary TimerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimerID  ::=  ENUMERATED {tssf(0)
 *                         -- others ffs
 *                         }
 * ```
 * 
 * @enum {number}
 */
export
const TimerID = _enum_for_TimerID;

/**
 * @summary TimerID_tssf
 * @constant
 * @type {number}
 */
export
const TimerID_tssf: TimerID = TimerID.tssf; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tssf
 * @constant
 * @type {number}
 */
export
const tssf: TimerID = TimerID.tssf; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TimerID: $.ASN1Decoder<TimerID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimerID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimerID (el: _Element): TimerID {
    if (!_cached_decoder_for_TimerID) { _cached_decoder_for_TimerID = $._decodeEnumerated; }
    return _cached_decoder_for_TimerID(el);
}

let _cached_encoder_for_TimerID: $.ASN1Encoder<TimerID> | null = null;

/**
 * @summary Encodes a(n) TimerID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimerID, encoded as an ASN.1 Element.
 */
export
function _encode_TimerID (value: TimerID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimerID) { _cached_encoder_for_TimerID = $._encodeEnumerated; }
    return _cached_encoder_for_TimerID(value, elGetter);
}


/* eslint-enable */
