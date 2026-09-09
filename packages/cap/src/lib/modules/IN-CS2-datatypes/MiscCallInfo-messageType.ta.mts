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
 * @summary MiscCallInfo_messageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MiscCallInfo-messageType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MiscCallInfo_messageType {
    request = 0,
    notification = 1,
}

/**
 * @summary MiscCallInfo_messageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MiscCallInfo-messageType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type MiscCallInfo_messageType = _enum_for_MiscCallInfo_messageType;

/**
 * @summary MiscCallInfo_messageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MiscCallInfo-messageType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const MiscCallInfo_messageType = _enum_for_MiscCallInfo_messageType;

/**
 * @summary MiscCallInfo_messageType_request
 * @constant
 * @type {number}
 */
export
const MiscCallInfo_messageType_request: MiscCallInfo_messageType = MiscCallInfo_messageType.request; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary request
 * @constant
 * @type {number}
 */
export
const request: MiscCallInfo_messageType = MiscCallInfo_messageType.request; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MiscCallInfo_messageType_notification
 * @constant
 * @type {number}
 */
export
const MiscCallInfo_messageType_notification: MiscCallInfo_messageType = MiscCallInfo_messageType.notification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notification
 * @constant
 * @type {number}
 */
export
const notification: MiscCallInfo_messageType = MiscCallInfo_messageType.notification; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MiscCallInfo_messageType: $.ASN1Decoder<MiscCallInfo_messageType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MiscCallInfo_messageType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MiscCallInfo_messageType (el: _Element): MiscCallInfo_messageType {
    if (!_cached_decoder_for_MiscCallInfo_messageType) { _cached_decoder_for_MiscCallInfo_messageType = $._decodeEnumerated; }
    return _cached_decoder_for_MiscCallInfo_messageType(el);
}

let _cached_encoder_for_MiscCallInfo_messageType: $.ASN1Encoder<MiscCallInfo_messageType> | null = null;

/**
 * @summary Encodes a(n) MiscCallInfo_messageType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MiscCallInfo_messageType, encoded as an ASN.1 Element.
 */
export
function _encode_MiscCallInfo_messageType (value: MiscCallInfo_messageType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MiscCallInfo_messageType) { _cached_encoder_for_MiscCallInfo_messageType = $._encodeEnumerated; }
    return _cached_encoder_for_MiscCallInfo_messageType(value, elGetter);
}


/* eslint-enable */
