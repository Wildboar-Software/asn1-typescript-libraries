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
 * @summary MonitorMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorMode      ::=  ENUMERATED {
 *      interrupted(0),
 *      notifyAndContinue(1),
 *      transparent(2)
 *      }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MonitorMode {
    interrupted = 0,
    notifyAndContinue = 1,
    transparent = 2,
}

/**
 * @summary MonitorMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorMode      ::=  ENUMERATED {
 *      interrupted(0),
 *      notifyAndContinue(1),
 *      transparent(2)
 *      }
 * ```
 * 
 * @enum {number}
 */
export
type MonitorMode = _enum_for_MonitorMode;

/**
 * @summary MonitorMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorMode      ::=  ENUMERATED {
 *      interrupted(0),
 *      notifyAndContinue(1),
 *      transparent(2)
 *      }
 * ```
 * 
 * @enum {number}
 */
export
const MonitorMode = _enum_for_MonitorMode;

/**
 * @summary MonitorMode_interrupted
 * @constant
 * @type {number}
 */
export
const MonitorMode_interrupted: MonitorMode = MonitorMode.interrupted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interrupted
 * @constant
 * @type {number}
 */
export
const interrupted: MonitorMode = MonitorMode.interrupted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitorMode_notifyAndContinue
 * @constant
 * @type {number}
 */
export
const MonitorMode_notifyAndContinue: MonitorMode = MonitorMode.notifyAndContinue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyAndContinue
 * @constant
 * @type {number}
 */
export
const notifyAndContinue: MonitorMode = MonitorMode.notifyAndContinue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitorMode_transparent
 * @constant
 * @type {number}
 */
export
const MonitorMode_transparent: MonitorMode = MonitorMode.transparent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transparent
 * @constant
 * @type {number}
 */
export
const transparent: MonitorMode = MonitorMode.transparent; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MonitorMode: $.ASN1Decoder<MonitorMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorMode (el: _Element): MonitorMode {
    if (!_cached_decoder_for_MonitorMode) { _cached_decoder_for_MonitorMode = $._decodeEnumerated; }
    return _cached_decoder_for_MonitorMode(el);
}

let _cached_encoder_for_MonitorMode: $.ASN1Encoder<MonitorMode> | null = null;

/**
 * @summary Encodes a(n) MonitorMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorMode, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorMode (value: MonitorMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorMode) { _cached_encoder_for_MonitorMode = $._encodeEnumerated; }
    return _cached_encoder_for_MonitorMode(value, elGetter);
}


/* eslint-enable */
