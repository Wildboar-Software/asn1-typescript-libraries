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
 * @summary RegionalSubscriptionResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegionalSubscriptionResponse  ::=  ENUMERATED {
 *     networkNode-AreaRestricted    (0),
 *     tooManyZoneCodes    (1),
 *     zoneCodesConflict    (2),
 *     regionalSubscNotSupported    (3)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RegionalSubscriptionResponse {
    networkNode_AreaRestricted = 0,
    tooManyZoneCodes = 1,
    zoneCodesConflict = 2,
    regionalSubscNotSupported = 3,
}

/**
 * @summary RegionalSubscriptionResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegionalSubscriptionResponse  ::=  ENUMERATED {
 *     networkNode-AreaRestricted    (0),
 *     tooManyZoneCodes    (1),
 *     zoneCodesConflict    (2),
 *     regionalSubscNotSupported    (3)}
 * ```
 * 
 * @enum {number}
 */
export
type RegionalSubscriptionResponse = _enum_for_RegionalSubscriptionResponse;

/**
 * @summary RegionalSubscriptionResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegionalSubscriptionResponse  ::=  ENUMERATED {
 *     networkNode-AreaRestricted    (0),
 *     tooManyZoneCodes    (1),
 *     zoneCodesConflict    (2),
 *     regionalSubscNotSupported    (3)}
 * ```
 * 
 * @enum {number}
 */
export
const RegionalSubscriptionResponse = _enum_for_RegionalSubscriptionResponse;

/**
 * @summary RegionalSubscriptionResponse_networkNode_AreaRestricted
 * @constant
 * @type {number}
 */
export
const RegionalSubscriptionResponse_networkNode_AreaRestricted: RegionalSubscriptionResponse = RegionalSubscriptionResponse.networkNode_AreaRestricted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkNode_AreaRestricted
 * @constant
 * @type {number}
 */
export
const networkNode_AreaRestricted: RegionalSubscriptionResponse = RegionalSubscriptionResponse.networkNode_AreaRestricted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegionalSubscriptionResponse_tooManyZoneCodes
 * @constant
 * @type {number}
 */
export
const RegionalSubscriptionResponse_tooManyZoneCodes: RegionalSubscriptionResponse = RegionalSubscriptionResponse.tooManyZoneCodes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tooManyZoneCodes
 * @constant
 * @type {number}
 */
export
const tooManyZoneCodes: RegionalSubscriptionResponse = RegionalSubscriptionResponse.tooManyZoneCodes; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegionalSubscriptionResponse_zoneCodesConflict
 * @constant
 * @type {number}
 */
export
const RegionalSubscriptionResponse_zoneCodesConflict: RegionalSubscriptionResponse = RegionalSubscriptionResponse.zoneCodesConflict; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary zoneCodesConflict
 * @constant
 * @type {number}
 */
export
const zoneCodesConflict: RegionalSubscriptionResponse = RegionalSubscriptionResponse.zoneCodesConflict; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegionalSubscriptionResponse_regionalSubscNotSupported
 * @constant
 * @type {number}
 */
export
const RegionalSubscriptionResponse_regionalSubscNotSupported: RegionalSubscriptionResponse = RegionalSubscriptionResponse.regionalSubscNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary regionalSubscNotSupported
 * @constant
 * @type {number}
 */
export
const regionalSubscNotSupported: RegionalSubscriptionResponse = RegionalSubscriptionResponse.regionalSubscNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RegionalSubscriptionResponse: $.ASN1Decoder<RegionalSubscriptionResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegionalSubscriptionResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegionalSubscriptionResponse (el: _Element): RegionalSubscriptionResponse {
    if (!_cached_decoder_for_RegionalSubscriptionResponse) { _cached_decoder_for_RegionalSubscriptionResponse = $._decodeEnumerated; }
    return _cached_decoder_for_RegionalSubscriptionResponse(el);
}

let _cached_encoder_for_RegionalSubscriptionResponse: $.ASN1Encoder<RegionalSubscriptionResponse> | null = null;

/**
 * @summary Encodes a(n) RegionalSubscriptionResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegionalSubscriptionResponse, encoded as an ASN.1 Element.
 */
export
function _encode_RegionalSubscriptionResponse (value: RegionalSubscriptionResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegionalSubscriptionResponse) { _cached_encoder_for_RegionalSubscriptionResponse = $._encodeEnumerated; }
    return _cached_encoder_for_RegionalSubscriptionResponse(value, elGetter);
}


/* eslint-enable */
