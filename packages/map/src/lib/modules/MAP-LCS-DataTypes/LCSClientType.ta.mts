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



export
enum _enum_for_LCSClientType {
    emergencyServices = 0,
    valueAddedServices = 1,
    plmnOperatorServices = 2,
    lawfulInterceptServices = 3,
}

/**
 * @summary LCSClientType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSClientType  ::=  ENUMERATED {
 *     emergencyServices    (0),
 *     valueAddedServices    (1),
 *     plmnOperatorServices    (2),
 *     lawfulInterceptServices    (3),
 *     ... }
 * ```
 * 
 * @enum {number}
 */
export
type LCSClientType = _enum_for_LCSClientType | ENUMERATED;

/**
 * @summary LCSClientType_emergencyServices
 * @constant
 * @type {number}
 */
export
const LCSClientType_emergencyServices: LCSClientType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergencyServices
 * @constant
 * @type {number}
 */
export
const emergencyServices: LCSClientType = LCSClientType_emergencyServices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCSClientType_valueAddedServices
 * @constant
 * @type {number}
 */
export
const LCSClientType_valueAddedServices: LCSClientType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary valueAddedServices
 * @constant
 * @type {number}
 */
export
const valueAddedServices: LCSClientType = LCSClientType_valueAddedServices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCSClientType_plmnOperatorServices
 * @constant
 * @type {number}
 */
export
const LCSClientType_plmnOperatorServices: LCSClientType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary plmnOperatorServices
 * @constant
 * @type {number}
 */
export
const plmnOperatorServices: LCSClientType = LCSClientType_plmnOperatorServices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCSClientType_lawfulInterceptServices
 * @constant
 * @type {number}
 */
export
const LCSClientType_lawfulInterceptServices: LCSClientType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lawfulInterceptServices
 * @constant
 * @type {number}
 */
export
const lawfulInterceptServices: LCSClientType = LCSClientType_lawfulInterceptServices; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LCSClientType: $.ASN1Decoder<LCSClientType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCSClientType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCSClientType (el: _Element): LCSClientType {
    if (!_cached_decoder_for_LCSClientType) { _cached_decoder_for_LCSClientType = $._decodeEnumerated; }
    return _cached_decoder_for_LCSClientType(el);
}

let _cached_encoder_for_LCSClientType: $.ASN1Encoder<LCSClientType> | null = null;

/**
 * @summary Encodes a(n) LCSClientType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSClientType, encoded as an ASN.1 Element.
 */
export
function _encode_LCSClientType (value: LCSClientType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCSClientType) { _cached_encoder_for_LCSClientType = $._encodeEnumerated; }
    return _cached_encoder_for_LCSClientType(value, elGetter);
}


/* eslint-enable */
