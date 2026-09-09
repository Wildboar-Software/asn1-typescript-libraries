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
enum _enum_for_NetworkAccessMode {
    packetAndCircuit = 0,
    onlyCircuit = 1,
    onlyPacket = 2,
}

/**
 * @summary NetworkAccessMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkAccessMode  ::=  ENUMERATED {
 *     packetAndCircuit    (0),
 *     onlyCircuit    (1),
 *     onlyPacket    (2),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type NetworkAccessMode = _enum_for_NetworkAccessMode | ENUMERATED;

/**
 * @summary NetworkAccessMode_packetAndCircuit
 * @constant
 * @type {number}
 */
export
const NetworkAccessMode_packetAndCircuit: NetworkAccessMode = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary packetAndCircuit
 * @constant
 * @type {number}
 */
export
const packetAndCircuit: NetworkAccessMode = NetworkAccessMode_packetAndCircuit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkAccessMode_onlyCircuit
 * @constant
 * @type {number}
 */
export
const NetworkAccessMode_onlyCircuit: NetworkAccessMode = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onlyCircuit
 * @constant
 * @type {number}
 */
export
const onlyCircuit: NetworkAccessMode = NetworkAccessMode_onlyCircuit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkAccessMode_onlyPacket
 * @constant
 * @type {number}
 */
export
const NetworkAccessMode_onlyPacket: NetworkAccessMode = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onlyPacket
 * @constant
 * @type {number}
 */
export
const onlyPacket: NetworkAccessMode = NetworkAccessMode_onlyPacket; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NetworkAccessMode: $.ASN1Decoder<NetworkAccessMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkAccessMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkAccessMode (el: _Element): NetworkAccessMode {
    if (!_cached_decoder_for_NetworkAccessMode) { _cached_decoder_for_NetworkAccessMode = $._decodeEnumerated; }
    return _cached_decoder_for_NetworkAccessMode(el);
}

let _cached_encoder_for_NetworkAccessMode: $.ASN1Encoder<NetworkAccessMode> | null = null;

/**
 * @summary Encodes a(n) NetworkAccessMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkAccessMode, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkAccessMode (value: NetworkAccessMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkAccessMode) { _cached_encoder_for_NetworkAccessMode = $._encodeEnumerated; }
    return _cached_encoder_for_NetworkAccessMode(value, elGetter);
}


/* eslint-enable */
