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
enum _enum_for_Ext_ProtocolId {
    ets_300356 = 1,
}

/**
 * @summary Ext_ProtocolId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-ProtocolId  ::=  ENUMERATED {
 *     ets-300356  (1),
 *     ... 
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Ext_ProtocolId = _enum_for_Ext_ProtocolId | ENUMERATED;

/**
 * @summary Ext_ProtocolId_ets_300356
 * @constant
 * @type {number}
 */
export
const Ext_ProtocolId_ets_300356: Ext_ProtocolId = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ets_300356
 * @constant
 * @type {number}
 */
export
const ets_300356: Ext_ProtocolId = Ext_ProtocolId_ets_300356; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Ext_ProtocolId: $.ASN1Decoder<Ext_ProtocolId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_ProtocolId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_ProtocolId (el: _Element): Ext_ProtocolId {
    if (!_cached_decoder_for_Ext_ProtocolId) { _cached_decoder_for_Ext_ProtocolId = $._decodeEnumerated; }
    return _cached_decoder_for_Ext_ProtocolId(el);
}

let _cached_encoder_for_Ext_ProtocolId: $.ASN1Encoder<Ext_ProtocolId> | null = null;

/**
 * @summary Encodes a(n) Ext_ProtocolId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_ProtocolId, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_ProtocolId (value: Ext_ProtocolId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_ProtocolId) { _cached_encoder_for_Ext_ProtocolId = $._encodeEnumerated; }
    return _cached_encoder_for_Ext_ProtocolId(value, elGetter);
}


/* eslint-enable */
