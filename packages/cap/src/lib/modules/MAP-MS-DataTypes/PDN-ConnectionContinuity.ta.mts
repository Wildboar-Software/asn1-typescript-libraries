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
 * @summary PDN_ConnectionContinuity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDN-ConnectionContinuity  ::=  ENUMERATED {
 *     maintainPDN-Connection    (0),
 *     disconnectPDN-ConnectionWithReactivationRequest    (1),
 *     disconnectPDN-ConnectionWithoutReactivationRequest    (2)
 *  }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PDN_ConnectionContinuity {
    maintainPDN_Connection = 0,
    disconnectPDN_ConnectionWithReactivationRequest = 1,
    disconnectPDN_ConnectionWithoutReactivationRequest = 2,
}

/**
 * @summary PDN_ConnectionContinuity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDN-ConnectionContinuity  ::=  ENUMERATED {
 *     maintainPDN-Connection    (0),
 *     disconnectPDN-ConnectionWithReactivationRequest    (1),
 *     disconnectPDN-ConnectionWithoutReactivationRequest    (2)
 *  }
 * ```
 * 
 * @enum {number}
 */
export
type PDN_ConnectionContinuity = _enum_for_PDN_ConnectionContinuity;

/**
 * @summary PDN_ConnectionContinuity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDN-ConnectionContinuity  ::=  ENUMERATED {
 *     maintainPDN-Connection    (0),
 *     disconnectPDN-ConnectionWithReactivationRequest    (1),
 *     disconnectPDN-ConnectionWithoutReactivationRequest    (2)
 *  }
 * ```
 * 
 * @enum {number}
 */
export
const PDN_ConnectionContinuity = _enum_for_PDN_ConnectionContinuity;

/**
 * @summary PDN_ConnectionContinuity_maintainPDN_Connection
 * @constant
 * @type {number}
 */
export
const PDN_ConnectionContinuity_maintainPDN_Connection: PDN_ConnectionContinuity = PDN_ConnectionContinuity.maintainPDN_Connection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maintainPDN_Connection
 * @constant
 * @type {number}
 */
export
const maintainPDN_Connection: PDN_ConnectionContinuity = PDN_ConnectionContinuity.maintainPDN_Connection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDN_ConnectionContinuity_disconnectPDN_ConnectionWithReactivationRequest
 * @constant
 * @type {number}
 */
export
const PDN_ConnectionContinuity_disconnectPDN_ConnectionWithReactivationRequest: PDN_ConnectionContinuity = PDN_ConnectionContinuity.disconnectPDN_ConnectionWithReactivationRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disconnectPDN_ConnectionWithReactivationRequest
 * @constant
 * @type {number}
 */
export
const disconnectPDN_ConnectionWithReactivationRequest: PDN_ConnectionContinuity = PDN_ConnectionContinuity.disconnectPDN_ConnectionWithReactivationRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDN_ConnectionContinuity_disconnectPDN_ConnectionWithoutReactivationRequest
 * @constant
 * @type {number}
 */
export
const PDN_ConnectionContinuity_disconnectPDN_ConnectionWithoutReactivationRequest: PDN_ConnectionContinuity = PDN_ConnectionContinuity.disconnectPDN_ConnectionWithoutReactivationRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disconnectPDN_ConnectionWithoutReactivationRequest
 * @constant
 * @type {number}
 */
export
const disconnectPDN_ConnectionWithoutReactivationRequest: PDN_ConnectionContinuity = PDN_ConnectionContinuity.disconnectPDN_ConnectionWithoutReactivationRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PDN_ConnectionContinuity: $.ASN1Decoder<PDN_ConnectionContinuity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDN_ConnectionContinuity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDN_ConnectionContinuity (el: _Element): PDN_ConnectionContinuity {
    if (!_cached_decoder_for_PDN_ConnectionContinuity) { _cached_decoder_for_PDN_ConnectionContinuity = $._decodeEnumerated; }
    return _cached_decoder_for_PDN_ConnectionContinuity(el);
}

let _cached_encoder_for_PDN_ConnectionContinuity: $.ASN1Encoder<PDN_ConnectionContinuity> | null = null;

/**
 * @summary Encodes a(n) PDN_ConnectionContinuity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDN_ConnectionContinuity, encoded as an ASN.1 Element.
 */
export
function _encode_PDN_ConnectionContinuity (value: PDN_ConnectionContinuity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDN_ConnectionContinuity) { _cached_encoder_for_PDN_ConnectionContinuity = $._encodeEnumerated; }
    return _cached_encoder_for_PDN_ConnectionContinuity(value, elGetter);
}


/* eslint-enable */
