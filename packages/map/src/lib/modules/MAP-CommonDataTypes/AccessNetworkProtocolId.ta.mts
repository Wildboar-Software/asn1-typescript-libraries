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
enum _enum_for_AccessNetworkProtocolId {
    ts3G_48006 = 1,
    ts3G_25413 = 2,
}

/**
 * @summary AccessNetworkProtocolId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessNetworkProtocolId  ::=  ENUMERATED {
 *     ts3G-48006   (1),
 *     ts3G-25413 (2),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type AccessNetworkProtocolId = _enum_for_AccessNetworkProtocolId | ENUMERATED;

/**
 * @summary AccessNetworkProtocolId_ts3G_48006
 * @constant
 * @type {number}
 */
export
const AccessNetworkProtocolId_ts3G_48006: AccessNetworkProtocolId = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ts3G_48006
 * @constant
 * @type {number}
 */
export
const ts3G_48006: AccessNetworkProtocolId = AccessNetworkProtocolId_ts3G_48006; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessNetworkProtocolId_ts3G_25413
 * @constant
 * @type {number}
 */
export
const AccessNetworkProtocolId_ts3G_25413: AccessNetworkProtocolId = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ts3G_25413
 * @constant
 * @type {number}
 */
export
const ts3G_25413: AccessNetworkProtocolId = AccessNetworkProtocolId_ts3G_25413; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AccessNetworkProtocolId: $.ASN1Decoder<AccessNetworkProtocolId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessNetworkProtocolId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessNetworkProtocolId (el: _Element): AccessNetworkProtocolId {
    if (!_cached_decoder_for_AccessNetworkProtocolId) { _cached_decoder_for_AccessNetworkProtocolId = $._decodeEnumerated; }
    return _cached_decoder_for_AccessNetworkProtocolId(el);
}

let _cached_encoder_for_AccessNetworkProtocolId: $.ASN1Encoder<AccessNetworkProtocolId> | null = null;

/**
 * @summary Encodes a(n) AccessNetworkProtocolId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessNetworkProtocolId, encoded as an ASN.1 Element.
 */
export
function _encode_AccessNetworkProtocolId (value: AccessNetworkProtocolId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessNetworkProtocolId) { _cached_encoder_for_AccessNetworkProtocolId = $._encodeEnumerated; }
    return _cached_encoder_for_AccessNetworkProtocolId(value, elGetter);
}


/* eslint-enable */
