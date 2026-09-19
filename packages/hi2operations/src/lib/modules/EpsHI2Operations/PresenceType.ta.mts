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
enum _enum_for_PresenceType {
    pTCClient = 1,
    pTCGroup = 2,
}

/**
 * @summary PresenceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceType  ::=  ENUMERATED
 * {
 *  pTCClient (1),
 *  pTCGroup (2),
 *  -- identifies the type of presenceID given [PTC Client(s) or PTC group].
 *  ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PresenceType = _enum_for_PresenceType | ENUMERATED;

/**
 * @summary PresenceType_pTCClient
 * @constant
 * @type {number}
 */
export
const PresenceType_pTCClient: PresenceType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCClient
 * @constant
 * @type {number}
 */
export
const pTCClient: PresenceType = PresenceType_pTCClient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceType_pTCGroup
 * @constant
 * @type {number}
 */
export
const PresenceType_pTCGroup: PresenceType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroup
 * @constant
 * @type {number}
 */
export
const pTCGroup: PresenceType = PresenceType_pTCGroup; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PresenceType: $.ASN1Decoder<PresenceType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresenceType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresenceType (el: _Element): PresenceType {
    if (!_cached_decoder_for_PresenceType) { _cached_decoder_for_PresenceType = $._decodeEnumerated; }
    return _cached_decoder_for_PresenceType(el);
}

let _cached_encoder_for_PresenceType: $.ASN1Encoder<PresenceType> | null = null;

/**
 * @summary Encodes a(n) PresenceType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresenceType, encoded as an ASN.1 Element.
 */
export
function _encode_PresenceType (value: PresenceType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresenceType) { _cached_encoder_for_PresenceType = $._encodeEnumerated; }
    return _cached_encoder_for_PresenceType(value, elGetter);
}


/* eslint-enable */
