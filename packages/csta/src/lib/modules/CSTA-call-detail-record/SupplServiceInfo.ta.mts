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
 * @summary SupplServiceInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupplServiceInfo  ::=  BIT STRING
 * {     normalCall                 (0),
 *     consultationCall             (1),
 *     transferCall                 (2),
 *     callCompletion                 (3),
 *     callForwarding                 (4),
 *     callDiversion                 (5),
 *     conferencing                 (6),
 *     intrusion                 (7),
 *     userUserInfo                 (8),
 *     other                     (9) }
 * ```
 */
export
type SupplServiceInfo = BIT_STRING;

/**
 * @summary SupplServiceInfo_normalCall
 * @constant
 */
export
const SupplServiceInfo_normalCall: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary normalCall
 * @constant
 */
export
const normalCall: number = SupplServiceInfo_normalCall; /* SHORT_NAMED_BIT */

/**
 * @summary SupplServiceInfo_consultationCall
 * @constant
 */
export
const SupplServiceInfo_consultationCall: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary consultationCall
 * @constant
 */
export
const consultationCall: number = SupplServiceInfo_consultationCall; /* SHORT_NAMED_BIT */

/**
 * @summary SupplServiceInfo_transferCall
 * @constant
 */
export
const SupplServiceInfo_transferCall: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary transferCall
 * @constant
 */
export
const transferCall: number = SupplServiceInfo_transferCall; /* SHORT_NAMED_BIT */

/**
 * @summary SupplServiceInfo_callCompletion
 * @constant
 */
export
const SupplServiceInfo_callCompletion: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary callCompletion
 * @constant
 */
export
const callCompletion: number = SupplServiceInfo_callCompletion; /* SHORT_NAMED_BIT */

/**
 * @summary SupplServiceInfo_callForwarding
 * @constant
 */
export
const SupplServiceInfo_callForwarding: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary callForwarding
 * @constant
 */
export
const callForwarding: number = SupplServiceInfo_callForwarding; /* SHORT_NAMED_BIT */

/**
 * @summary SupplServiceInfo_callDiversion
 * @constant
 */
export
const SupplServiceInfo_callDiversion: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary callDiversion
 * @constant
 */
export
const callDiversion: number = SupplServiceInfo_callDiversion; /* SHORT_NAMED_BIT */

/**
 * @summary SupplServiceInfo_conferencing
 * @constant
 */
export
const SupplServiceInfo_conferencing: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary conferencing
 * @constant
 */
export
const conferencing: number = SupplServiceInfo_conferencing; /* SHORT_NAMED_BIT */

/**
 * @summary SupplServiceInfo_intrusion
 * @constant
 */
export
const SupplServiceInfo_intrusion: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary intrusion
 * @constant
 */
export
const intrusion: number = SupplServiceInfo_intrusion; /* SHORT_NAMED_BIT */

/**
 * @summary SupplServiceInfo_userUserInfo
 * @constant
 */
export
const SupplServiceInfo_userUserInfo: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary userUserInfo
 * @constant
 */
export
const userUserInfo: number = SupplServiceInfo_userUserInfo; /* SHORT_NAMED_BIT */

/**
 * @summary SupplServiceInfo_other
 * @constant
 */
export
const SupplServiceInfo_other: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary other
 * @constant
 */
export
const other: number = SupplServiceInfo_other; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SupplServiceInfo: $.ASN1Decoder<SupplServiceInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupplServiceInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SupplServiceInfo (el: _Element): SupplServiceInfo {
    if (!_cached_decoder_for_SupplServiceInfo) { _cached_decoder_for_SupplServiceInfo = $._decodeBitString; }
    return _cached_decoder_for_SupplServiceInfo(el);
}

let _cached_encoder_for_SupplServiceInfo: $.ASN1Encoder<SupplServiceInfo> | null = null;

/**
 * @summary Encodes a(n) SupplServiceInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupplServiceInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SupplServiceInfo (value: SupplServiceInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SupplServiceInfo) { _cached_encoder_for_SupplServiceInfo = $._encodeBitString; }
    return _cached_encoder_for_SupplServiceInfo(value, elGetter);
}


/* eslint-enable */
