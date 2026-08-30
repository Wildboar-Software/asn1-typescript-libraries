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
 * @summary ProtocolId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolId  ::=  ENUMERATED {
 *     gsm-0408  (1),
 *     gsm-0806  (2),
 *     gsm-BSSMAP  (3),
 *     -- Value 3 is reserved and must not be used
 *     ets-300102-1  (4)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ProtocolId {
    gsm_0408 = 1,
    gsm_0806 = 2,
    gsm_BSSMAP = 3,
    ets_300102_1 = 4,
}

/**
 * @summary ProtocolId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolId  ::=  ENUMERATED {
 *     gsm-0408  (1),
 *     gsm-0806  (2),
 *     gsm-BSSMAP  (3),
 *     -- Value 3 is reserved and must not be used
 *     ets-300102-1  (4)}
 * ```
 * 
 * @enum {number}
 */
export
type ProtocolId = _enum_for_ProtocolId;

/**
 * @summary ProtocolId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolId  ::=  ENUMERATED {
 *     gsm-0408  (1),
 *     gsm-0806  (2),
 *     gsm-BSSMAP  (3),
 *     -- Value 3 is reserved and must not be used
 *     ets-300102-1  (4)}
 * ```
 * 
 * @enum {number}
 */
export
const ProtocolId = _enum_for_ProtocolId;

/**
 * @summary ProtocolId_gsm_0408
 * @constant
 * @type {number}
 */
export
const ProtocolId_gsm_0408: ProtocolId = ProtocolId.gsm_0408; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gsm_0408
 * @constant
 * @type {number}
 */
export
const gsm_0408: ProtocolId = ProtocolId.gsm_0408; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProtocolId_gsm_0806
 * @constant
 * @type {number}
 */
export
const ProtocolId_gsm_0806: ProtocolId = ProtocolId.gsm_0806; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gsm_0806
 * @constant
 * @type {number}
 */
export
const gsm_0806: ProtocolId = ProtocolId.gsm_0806; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProtocolId_gsm_BSSMAP
 * @constant
 * @type {number}
 */
export
const ProtocolId_gsm_BSSMAP: ProtocolId = ProtocolId.gsm_BSSMAP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gsm_BSSMAP
 * @constant
 * @type {number}
 */
export
const gsm_BSSMAP: ProtocolId = ProtocolId.gsm_BSSMAP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProtocolId_ets_300102_1
 * @constant
 * @type {number}
 */
export
const ProtocolId_ets_300102_1: ProtocolId = ProtocolId.ets_300102_1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ets_300102_1
 * @constant
 * @type {number}
 */
export
const ets_300102_1: ProtocolId = ProtocolId.ets_300102_1; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ProtocolId: $.ASN1Decoder<ProtocolId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProtocolId (el: _Element): ProtocolId {
    if (!_cached_decoder_for_ProtocolId) { _cached_decoder_for_ProtocolId = $._decodeEnumerated; }
    return _cached_decoder_for_ProtocolId(el);
}

let _cached_encoder_for_ProtocolId: $.ASN1Encoder<ProtocolId> | null = null;

/**
 * @summary Encodes a(n) ProtocolId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolId, encoded as an ASN.1 Element.
 */
export
function _encode_ProtocolId (value: ProtocolId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProtocolId) { _cached_encoder_for_ProtocolId = $._encodeEnumerated; }
    return _cached_encoder_for_ProtocolId(value, elGetter);
}


/* eslint-enable */
