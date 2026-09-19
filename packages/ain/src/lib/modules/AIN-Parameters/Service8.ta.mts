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
 * @summary Service8
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service8 ::=  ENUMERATED{
 *         customerOriginatedTrace(0),
 *         cancelCallWaiting(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Service8 {
    customerOriginatedTrace = 0,
    cancelCallWaiting = 1,
}

/**
 * @summary Service8
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service8 ::=  ENUMERATED{
 *         customerOriginatedTrace(0),
 *         cancelCallWaiting(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Service8 = _enum_for_Service8;

/**
 * @summary Service8
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service8 ::=  ENUMERATED{
 *         customerOriginatedTrace(0),
 *         cancelCallWaiting(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const Service8 = _enum_for_Service8;

/**
 * @summary Service8_customerOriginatedTrace
 * @constant
 * @type {number}
 */
export
const Service8_customerOriginatedTrace: Service8 = Service8.customerOriginatedTrace; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary customerOriginatedTrace
 * @constant
 * @type {number}
 */
export
const customerOriginatedTrace: Service8 = Service8.customerOriginatedTrace; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Service8_cancelCallWaiting
 * @constant
 * @type {number}
 */
export
const Service8_cancelCallWaiting: Service8 = Service8.cancelCallWaiting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelCallWaiting
 * @constant
 * @type {number}
 */
export
const cancelCallWaiting: Service8 = Service8.cancelCallWaiting; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Service8: $.ASN1Decoder<Service8> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Service8
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Service8 (el: _Element): Service8 {
    if (!_cached_decoder_for_Service8) { _cached_decoder_for_Service8 = $._decodeEnumerated; }
    return _cached_decoder_for_Service8(el);
}

let _cached_encoder_for_Service8: $.ASN1Encoder<Service8> | null = null;

/**
 * @summary Encodes a(n) Service8 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Service8, encoded as an ASN.1 Element.
 */
export
function _encode_Service8 (value: Service8, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Service8) { _cached_encoder_for_Service8 = $._encodeEnumerated; }
    return _cached_encoder_for_Service8(value, elGetter);
}


/* eslint-enable */
