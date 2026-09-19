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
enum _enum_for_PreEstStatus {
    established = 1,
    modify = 2,
    released = 3,
}

/**
 * @summary PreEstStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PreEstStatus  ::=  ENUMERATED
 * {
 *  established (1),
 *  modify (2),
 *  released (3),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PreEstStatus = _enum_for_PreEstStatus | ENUMERATED;

/**
 * @summary PreEstStatus_established
 * @constant
 * @type {number}
 */
export
const PreEstStatus_established: PreEstStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary established
 * @constant
 * @type {number}
 */
export
const established: PreEstStatus = PreEstStatus_established; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PreEstStatus_modify
 * @constant
 * @type {number}
 */
export
const PreEstStatus_modify: PreEstStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modify
 * @constant
 * @type {number}
 */
export
const modify: PreEstStatus = PreEstStatus_modify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PreEstStatus_released
 * @constant
 * @type {number}
 */
export
const PreEstStatus_released: PreEstStatus = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary released
 * @constant
 * @type {number}
 */
export
const released: PreEstStatus = PreEstStatus_released; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PreEstStatus: $.ASN1Decoder<PreEstStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PreEstStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PreEstStatus (el: _Element): PreEstStatus {
    if (!_cached_decoder_for_PreEstStatus) { _cached_decoder_for_PreEstStatus = $._decodeEnumerated; }
    return _cached_decoder_for_PreEstStatus(el);
}

let _cached_encoder_for_PreEstStatus: $.ASN1Encoder<PreEstStatus> | null = null;

/**
 * @summary Encodes a(n) PreEstStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PreEstStatus, encoded as an ASN.1 Element.
 */
export
function _encode_PreEstStatus (value: PreEstStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PreEstStatus) { _cached_encoder_for_PreEstStatus = $._encodeEnumerated; }
    return _cached_encoder_for_PreEstStatus(value, elGetter);
}


/* eslint-enable */
