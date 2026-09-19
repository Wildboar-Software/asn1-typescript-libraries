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
 * @summary RCSSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionType  ::=  ENUMERATED
 * {
 *     largeMessageStandalone(1),
 *     oneTo1Chat(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RCSSessionType {
    largeMessageStandalone = 1,
    oneTo1Chat = 2,
}

/**
 * @summary RCSSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionType  ::=  ENUMERATED
 * {
 *     largeMessageStandalone(1),
 *     oneTo1Chat(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RCSSessionType = _enum_for_RCSSessionType;

/**
 * @summary RCSSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionType  ::=  ENUMERATED
 * {
 *     largeMessageStandalone(1),
 *     oneTo1Chat(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RCSSessionType = _enum_for_RCSSessionType;

/**
 * @summary RCSSessionType_largeMessageStandalone
 * @constant
 * @type {number}
 */
export
const RCSSessionType_largeMessageStandalone: RCSSessionType = RCSSessionType.largeMessageStandalone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary largeMessageStandalone
 * @constant
 * @type {number}
 */
export
const largeMessageStandalone: RCSSessionType = RCSSessionType.largeMessageStandalone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionType_oneTo1Chat
 * @constant
 * @type {number}
 */
export
const RCSSessionType_oneTo1Chat: RCSSessionType = RCSSessionType.oneTo1Chat; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneTo1Chat
 * @constant
 * @type {number}
 */
export
const oneTo1Chat: RCSSessionType = RCSSessionType.oneTo1Chat; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RCSSessionType: $.ASN1Decoder<RCSSessionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSSessionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSSessionType (el: _Element): RCSSessionType {
    if (!_cached_decoder_for_RCSSessionType) { _cached_decoder_for_RCSSessionType = $._decodeEnumerated; }
    return _cached_decoder_for_RCSSessionType(el);
}

let _cached_encoder_for_RCSSessionType: $.ASN1Encoder<RCSSessionType> | null = null;

/**
 * @summary Encodes a(n) RCSSessionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSSessionType, encoded as an ASN.1 Element.
 */
export
function _encode_RCSSessionType (value: RCSSessionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSSessionType) { _cached_encoder_for_RCSSessionType = $._encodeEnumerated; }
    return _cached_encoder_for_RCSSessionType(value, elGetter);
}


/* eslint-enable */
