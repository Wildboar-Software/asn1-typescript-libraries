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
 * @summary MonitorType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorType  ::=  ENUMERATED
 * {     call                 (0),
 *      device             (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MonitorType {
    call = 0,
    device = 1,
}

/**
 * @summary MonitorType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorType  ::=  ENUMERATED
 * {     call                 (0),
 *      device             (1) }
 * ```
 * 
 * @enum {number}
 */
export
type MonitorType = _enum_for_MonitorType;

/**
 * @summary MonitorType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorType  ::=  ENUMERATED
 * {     call                 (0),
 *      device             (1) }
 * ```
 * 
 * @enum {number}
 */
export
const MonitorType = _enum_for_MonitorType;

/**
 * @summary MonitorType_call
 * @constant
 * @type {number}
 */
export
const MonitorType_call: MonitorType = MonitorType.call; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary call
 * @constant
 * @type {number}
 */
export
const call: MonitorType = MonitorType.call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitorType_device
 * @constant
 * @type {number}
 */
export
const MonitorType_device: MonitorType = MonitorType.device; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary device
 * @constant
 * @type {number}
 */
export
const device: MonitorType = MonitorType.device; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MonitorType: $.ASN1Decoder<MonitorType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorType (el: _Element): MonitorType {
    if (!_cached_decoder_for_MonitorType) { _cached_decoder_for_MonitorType = $._decodeEnumerated; }
    return _cached_decoder_for_MonitorType(el);
}

let _cached_encoder_for_MonitorType: $.ASN1Encoder<MonitorType> | null = null;

/**
 * @summary Encodes a(n) MonitorType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorType, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorType (value: MonitorType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorType) { _cached_encoder_for_MonitorType = $._encodeEnumerated; }
    return _cached_encoder_for_MonitorType(value, elGetter);
}


/* eslint-enable */
