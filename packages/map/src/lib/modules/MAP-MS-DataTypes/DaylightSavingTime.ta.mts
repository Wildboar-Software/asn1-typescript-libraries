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
 * @summary DaylightSavingTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DaylightSavingTime  ::=  ENUMERATED {
 *     noAdjustment    (0),
 *     plusOneHourAdjustment    (1),
 *     plusTwoHoursAdjustment    (2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DaylightSavingTime {
    noAdjustment = 0,
    plusOneHourAdjustment = 1,
    plusTwoHoursAdjustment = 2,
}

/**
 * @summary DaylightSavingTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DaylightSavingTime  ::=  ENUMERATED {
 *     noAdjustment    (0),
 *     plusOneHourAdjustment    (1),
 *     plusTwoHoursAdjustment    (2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type DaylightSavingTime = _enum_for_DaylightSavingTime;

/**
 * @summary DaylightSavingTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DaylightSavingTime  ::=  ENUMERATED {
 *     noAdjustment    (0),
 *     plusOneHourAdjustment    (1),
 *     plusTwoHoursAdjustment    (2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const DaylightSavingTime = _enum_for_DaylightSavingTime;

/**
 * @summary DaylightSavingTime_noAdjustment
 * @constant
 * @type {number}
 */
export
const DaylightSavingTime_noAdjustment: DaylightSavingTime = DaylightSavingTime.noAdjustment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAdjustment
 * @constant
 * @type {number}
 */
export
const noAdjustment: DaylightSavingTime = DaylightSavingTime.noAdjustment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DaylightSavingTime_plusOneHourAdjustment
 * @constant
 * @type {number}
 */
export
const DaylightSavingTime_plusOneHourAdjustment: DaylightSavingTime = DaylightSavingTime.plusOneHourAdjustment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary plusOneHourAdjustment
 * @constant
 * @type {number}
 */
export
const plusOneHourAdjustment: DaylightSavingTime = DaylightSavingTime.plusOneHourAdjustment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DaylightSavingTime_plusTwoHoursAdjustment
 * @constant
 * @type {number}
 */
export
const DaylightSavingTime_plusTwoHoursAdjustment: DaylightSavingTime = DaylightSavingTime.plusTwoHoursAdjustment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary plusTwoHoursAdjustment
 * @constant
 * @type {number}
 */
export
const plusTwoHoursAdjustment: DaylightSavingTime = DaylightSavingTime.plusTwoHoursAdjustment; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DaylightSavingTime: $.ASN1Decoder<DaylightSavingTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DaylightSavingTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DaylightSavingTime (el: _Element): DaylightSavingTime {
    if (!_cached_decoder_for_DaylightSavingTime) { _cached_decoder_for_DaylightSavingTime = $._decodeEnumerated; }
    return _cached_decoder_for_DaylightSavingTime(el);
}

let _cached_encoder_for_DaylightSavingTime: $.ASN1Encoder<DaylightSavingTime> | null = null;

/**
 * @summary Encodes a(n) DaylightSavingTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DaylightSavingTime, encoded as an ASN.1 Element.
 */
export
function _encode_DaylightSavingTime (value: DaylightSavingTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DaylightSavingTime) { _cached_encoder_for_DaylightSavingTime = $._encodeEnumerated; }
    return _cached_encoder_for_DaylightSavingTime(value, elGetter);
}


/* eslint-enable */
