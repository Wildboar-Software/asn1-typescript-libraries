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
 * @summary TerminalType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminalType  ::=  ENUMERATED {
 *   unknown(0), dialPulse(1), dtmf(2), isdn(3), isdnNoDtmf(4), spare(16)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TerminalType {
    unknown = 0,
    dialPulse = 1,
    dtmf = 2,
    isdn = 3,
    isdnNoDtmf = 4,
    spare = 16,
}

/**
 * @summary TerminalType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminalType  ::=  ENUMERATED {
 *   unknown(0), dialPulse(1), dtmf(2), isdn(3), isdnNoDtmf(4), spare(16)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TerminalType = _enum_for_TerminalType;

/**
 * @summary TerminalType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminalType  ::=  ENUMERATED {
 *   unknown(0), dialPulse(1), dtmf(2), isdn(3), isdnNoDtmf(4), spare(16)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TerminalType = _enum_for_TerminalType;

/**
 * @summary TerminalType_unknown
 * @constant
 * @type {number}
 */
export
const TerminalType_unknown: TerminalType = TerminalType.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: TerminalType = TerminalType.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminalType_dialPulse
 * @constant
 * @type {number}
 */
export
const TerminalType_dialPulse: TerminalType = TerminalType.dialPulse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dialPulse
 * @constant
 * @type {number}
 */
export
const dialPulse: TerminalType = TerminalType.dialPulse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminalType_dtmf
 * @constant
 * @type {number}
 */
export
const TerminalType_dtmf: TerminalType = TerminalType.dtmf; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dtmf
 * @constant
 * @type {number}
 */
export
const dtmf: TerminalType = TerminalType.dtmf; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminalType_isdn
 * @constant
 * @type {number}
 */
export
const TerminalType_isdn: TerminalType = TerminalType.isdn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary isdn
 * @constant
 * @type {number}
 */
export
const isdn: TerminalType = TerminalType.isdn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminalType_isdnNoDtmf
 * @constant
 * @type {number}
 */
export
const TerminalType_isdnNoDtmf: TerminalType = TerminalType.isdnNoDtmf; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary isdnNoDtmf
 * @constant
 * @type {number}
 */
export
const isdnNoDtmf: TerminalType = TerminalType.isdnNoDtmf; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminalType_spare
 * @constant
 * @type {number}
 */
export
const TerminalType_spare: TerminalType = TerminalType.spare; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary spare
 * @constant
 * @type {number}
 */
export
const spare: TerminalType = TerminalType.spare; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TerminalType: $.ASN1Decoder<TerminalType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminalType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TerminalType (el: _Element): TerminalType {
    if (!_cached_decoder_for_TerminalType) { _cached_decoder_for_TerminalType = $._decodeEnumerated; }
    return _cached_decoder_for_TerminalType(el);
}

let _cached_encoder_for_TerminalType: $.ASN1Encoder<TerminalType> | null = null;

/**
 * @summary Encodes a(n) TerminalType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminalType, encoded as an ASN.1 Element.
 */
export
function _encode_TerminalType (value: TerminalType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TerminalType) { _cached_encoder_for_TerminalType = $._encodeEnumerated; }
    return _cached_encoder_for_TerminalType(value, elGetter);
}


/* eslint-enable */
