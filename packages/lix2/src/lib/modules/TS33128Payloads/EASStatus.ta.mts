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
 * @summary EASStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASStatus  ::=  ENUMERATED
 * {
 *     enabled(1),
 *     disabled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EASStatus {
    enabled = 1,
    disabled = 2,
}

/**
 * @summary EASStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASStatus  ::=  ENUMERATED
 * {
 *     enabled(1),
 *     disabled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EASStatus = _enum_for_EASStatus;

/**
 * @summary EASStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASStatus  ::=  ENUMERATED
 * {
 *     enabled(1),
 *     disabled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EASStatus = _enum_for_EASStatus;

/**
 * @summary EASStatus_enabled
 * @constant
 * @type {number}
 */
export
const EASStatus_enabled: EASStatus = EASStatus.enabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enabled
 * @constant
 * @type {number}
 */
export
const enabled: EASStatus = EASStatus.enabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EASStatus_disabled
 * @constant
 * @type {number}
 */
export
const EASStatus_disabled: EASStatus = EASStatus.disabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disabled
 * @constant
 * @type {number}
 */
export
const disabled: EASStatus = EASStatus.disabled; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EASStatus: $.ASN1Decoder<EASStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EASStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EASStatus (el: _Element): EASStatus {
    if (!_cached_decoder_for_EASStatus) { _cached_decoder_for_EASStatus = $._decodeEnumerated; }
    return _cached_decoder_for_EASStatus(el);
}

let _cached_encoder_for_EASStatus: $.ASN1Encoder<EASStatus> | null = null;

/**
 * @summary Encodes a(n) EASStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASStatus, encoded as an ASN.1 Element.
 */
export
function _encode_EASStatus (value: EASStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EASStatus) { _cached_encoder_for_EASStatus = $._encodeEnumerated; }
    return _cached_encoder_for_EASStatus(value, elGetter);
}


/* eslint-enable */
