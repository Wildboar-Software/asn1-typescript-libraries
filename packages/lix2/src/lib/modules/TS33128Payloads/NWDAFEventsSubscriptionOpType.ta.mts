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
 * @summary NWDAFEventsSubscriptionOpType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEventsSubscriptionOpType  ::=  ENUMERATED
 * {
 *     pOST(1),
 *     pUT(2),
 *     dELETE(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NWDAFEventsSubscriptionOpType {
    pOST = 1,
    pUT = 2,
    dELETE = 3,
}

/**
 * @summary NWDAFEventsSubscriptionOpType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEventsSubscriptionOpType  ::=  ENUMERATED
 * {
 *     pOST(1),
 *     pUT(2),
 *     dELETE(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NWDAFEventsSubscriptionOpType = _enum_for_NWDAFEventsSubscriptionOpType;

/**
 * @summary NWDAFEventsSubscriptionOpType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEventsSubscriptionOpType  ::=  ENUMERATED
 * {
 *     pOST(1),
 *     pUT(2),
 *     dELETE(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NWDAFEventsSubscriptionOpType = _enum_for_NWDAFEventsSubscriptionOpType;

/**
 * @summary NWDAFEventsSubscriptionOpType_pOST
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionOpType_pOST: NWDAFEventsSubscriptionOpType = NWDAFEventsSubscriptionOpType.pOST; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pOST
 * @constant
 * @type {number}
 */
export
const pOST: NWDAFEventsSubscriptionOpType = NWDAFEventsSubscriptionOpType.pOST; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionOpType_pUT
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionOpType_pUT: NWDAFEventsSubscriptionOpType = NWDAFEventsSubscriptionOpType.pUT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pUT
 * @constant
 * @type {number}
 */
export
const pUT: NWDAFEventsSubscriptionOpType = NWDAFEventsSubscriptionOpType.pUT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionOpType_dELETE
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionOpType_dELETE: NWDAFEventsSubscriptionOpType = NWDAFEventsSubscriptionOpType.dELETE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dELETE
 * @constant
 * @type {number}
 */
export
const dELETE: NWDAFEventsSubscriptionOpType = NWDAFEventsSubscriptionOpType.dELETE; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NWDAFEventsSubscriptionOpType: $.ASN1Decoder<NWDAFEventsSubscriptionOpType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NWDAFEventsSubscriptionOpType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NWDAFEventsSubscriptionOpType (el: _Element): NWDAFEventsSubscriptionOpType {
    if (!_cached_decoder_for_NWDAFEventsSubscriptionOpType) { _cached_decoder_for_NWDAFEventsSubscriptionOpType = $._decodeEnumerated; }
    return _cached_decoder_for_NWDAFEventsSubscriptionOpType(el);
}

let _cached_encoder_for_NWDAFEventsSubscriptionOpType: $.ASN1Encoder<NWDAFEventsSubscriptionOpType> | null = null;

/**
 * @summary Encodes a(n) NWDAFEventsSubscriptionOpType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NWDAFEventsSubscriptionOpType, encoded as an ASN.1 Element.
 */
export
function _encode_NWDAFEventsSubscriptionOpType (value: NWDAFEventsSubscriptionOpType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NWDAFEventsSubscriptionOpType) { _cached_encoder_for_NWDAFEventsSubscriptionOpType = $._encodeEnumerated; }
    return _cached_encoder_for_NWDAFEventsSubscriptionOpType(value, elGetter);
}


/* eslint-enable */
