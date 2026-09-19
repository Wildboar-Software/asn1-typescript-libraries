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



export
enum _enum_for_AlertIndicator {
    sent = 1,
    received = 2,
    cancelled = 3,
}

/**
 * @summary AlertIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertIndicator  ::=  ENUMERATED
 * {
 *  -- indicates the group call alert condition.
 *  sent (1),
 *  received (2),
 *  cancelled (3),
 *  ...
 *  }
 * ```
 * 
 * @enum {number}
 */
export
type AlertIndicator = _enum_for_AlertIndicator | ENUMERATED;

/**
 * @summary AlertIndicator_sent
 * @constant
 * @type {number}
 */
export
const AlertIndicator_sent: AlertIndicator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sent
 * @constant
 * @type {number}
 */
export
const sent: AlertIndicator = AlertIndicator_sent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertIndicator_received
 * @constant
 * @type {number}
 */
export
const AlertIndicator_received: AlertIndicator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary received
 * @constant
 * @type {number}
 */
export
const received: AlertIndicator = AlertIndicator_received; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertIndicator_cancelled
 * @constant
 * @type {number}
 */
export
const AlertIndicator_cancelled: AlertIndicator = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelled
 * @constant
 * @type {number}
 */
export
const cancelled: AlertIndicator = AlertIndicator_cancelled; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AlertIndicator: $.ASN1Decoder<AlertIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlertIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlertIndicator (el: _Element): AlertIndicator {
    if (!_cached_decoder_for_AlertIndicator) { _cached_decoder_for_AlertIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_AlertIndicator(el);
}

let _cached_encoder_for_AlertIndicator: $.ASN1Encoder<AlertIndicator> | null = null;

/**
 * @summary Encodes a(n) AlertIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlertIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_AlertIndicator (value: AlertIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlertIndicator) { _cached_encoder_for_AlertIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_AlertIndicator(value, elGetter);
}


/* eslint-enable */
