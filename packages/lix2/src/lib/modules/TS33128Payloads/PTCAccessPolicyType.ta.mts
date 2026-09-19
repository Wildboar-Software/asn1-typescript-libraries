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
 * @summary PTCAccessPolicyType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCAccessPolicyType   ::=  ENUMERATED
 * {
 *     pTCUserAccessPolicyAttempt(1),
 *     groupAuthorizationRulesAttempt(2),
 *     pTCUserAccessPolicyQuery(3),
 *     groupAuthorizationRulesQuery(4),
 *     pTCUserAccessPolicyResult(5),
 *     groupAuthorizationRulesResult(6),
 *     requestUnsuccessful(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCAccessPolicyType {
    pTCUserAccessPolicyAttempt = 1,
    groupAuthorizationRulesAttempt = 2,
    pTCUserAccessPolicyQuery = 3,
    groupAuthorizationRulesQuery = 4,
    pTCUserAccessPolicyResult = 5,
    groupAuthorizationRulesResult = 6,
    requestUnsuccessful = 7,
}

/**
 * @summary PTCAccessPolicyType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCAccessPolicyType   ::=  ENUMERATED
 * {
 *     pTCUserAccessPolicyAttempt(1),
 *     groupAuthorizationRulesAttempt(2),
 *     pTCUserAccessPolicyQuery(3),
 *     groupAuthorizationRulesQuery(4),
 *     pTCUserAccessPolicyResult(5),
 *     groupAuthorizationRulesResult(6),
 *     requestUnsuccessful(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCAccessPolicyType = _enum_for_PTCAccessPolicyType;

/**
 * @summary PTCAccessPolicyType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCAccessPolicyType   ::=  ENUMERATED
 * {
 *     pTCUserAccessPolicyAttempt(1),
 *     groupAuthorizationRulesAttempt(2),
 *     pTCUserAccessPolicyQuery(3),
 *     groupAuthorizationRulesQuery(4),
 *     pTCUserAccessPolicyResult(5),
 *     groupAuthorizationRulesResult(6),
 *     requestUnsuccessful(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCAccessPolicyType = _enum_for_PTCAccessPolicyType;

/**
 * @summary PTCAccessPolicyType_pTCUserAccessPolicyAttempt
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyType_pTCUserAccessPolicyAttempt: PTCAccessPolicyType = PTCAccessPolicyType.pTCUserAccessPolicyAttempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCUserAccessPolicyAttempt
 * @constant
 * @type {number}
 */
export
const pTCUserAccessPolicyAttempt: PTCAccessPolicyType = PTCAccessPolicyType.pTCUserAccessPolicyAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCAccessPolicyType_groupAuthorizationRulesAttempt
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyType_groupAuthorizationRulesAttempt: PTCAccessPolicyType = PTCAccessPolicyType.groupAuthorizationRulesAttempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupAuthorizationRulesAttempt
 * @constant
 * @type {number}
 */
export
const groupAuthorizationRulesAttempt: PTCAccessPolicyType = PTCAccessPolicyType.groupAuthorizationRulesAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCAccessPolicyType_pTCUserAccessPolicyQuery
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyType_pTCUserAccessPolicyQuery: PTCAccessPolicyType = PTCAccessPolicyType.pTCUserAccessPolicyQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCUserAccessPolicyQuery
 * @constant
 * @type {number}
 */
export
const pTCUserAccessPolicyQuery: PTCAccessPolicyType = PTCAccessPolicyType.pTCUserAccessPolicyQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCAccessPolicyType_groupAuthorizationRulesQuery
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyType_groupAuthorizationRulesQuery: PTCAccessPolicyType = PTCAccessPolicyType.groupAuthorizationRulesQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupAuthorizationRulesQuery
 * @constant
 * @type {number}
 */
export
const groupAuthorizationRulesQuery: PTCAccessPolicyType = PTCAccessPolicyType.groupAuthorizationRulesQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCAccessPolicyType_pTCUserAccessPolicyResult
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyType_pTCUserAccessPolicyResult: PTCAccessPolicyType = PTCAccessPolicyType.pTCUserAccessPolicyResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCUserAccessPolicyResult
 * @constant
 * @type {number}
 */
export
const pTCUserAccessPolicyResult: PTCAccessPolicyType = PTCAccessPolicyType.pTCUserAccessPolicyResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCAccessPolicyType_groupAuthorizationRulesResult
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyType_groupAuthorizationRulesResult: PTCAccessPolicyType = PTCAccessPolicyType.groupAuthorizationRulesResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupAuthorizationRulesResult
 * @constant
 * @type {number}
 */
export
const groupAuthorizationRulesResult: PTCAccessPolicyType = PTCAccessPolicyType.groupAuthorizationRulesResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCAccessPolicyType_requestUnsuccessful
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyType_requestUnsuccessful: PTCAccessPolicyType = PTCAccessPolicyType.requestUnsuccessful; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestUnsuccessful
 * @constant
 * @type {number}
 */
export
const requestUnsuccessful: PTCAccessPolicyType = PTCAccessPolicyType.requestUnsuccessful; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PTCAccessPolicyType: $.ASN1Decoder<PTCAccessPolicyType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCAccessPolicyType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCAccessPolicyType (el: _Element): PTCAccessPolicyType {
    if (!_cached_decoder_for_PTCAccessPolicyType) { _cached_decoder_for_PTCAccessPolicyType = $._decodeEnumerated; }
    return _cached_decoder_for_PTCAccessPolicyType(el);
}

let _cached_encoder_for_PTCAccessPolicyType: $.ASN1Encoder<PTCAccessPolicyType> | null = null;

/**
 * @summary Encodes a(n) PTCAccessPolicyType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCAccessPolicyType, encoded as an ASN.1 Element.
 */
export
function _encode_PTCAccessPolicyType (value: PTCAccessPolicyType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCAccessPolicyType) { _cached_encoder_for_PTCAccessPolicyType = $._encodeEnumerated; }
    return _cached_encoder_for_PTCAccessPolicyType(value, elGetter);
}


/* eslint-enable */
