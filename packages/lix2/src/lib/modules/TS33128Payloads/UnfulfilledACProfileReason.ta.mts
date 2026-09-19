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
 * @summary UnfulfilledACProfileReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnfulfilledACProfileReason  ::=  ENUMERATED
 * {
 *     eASNotAvailable(1),
 *     requirementsUnfulfilled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UnfulfilledACProfileReason {
    eASNotAvailable = 1,
    requirementsUnfulfilled = 2,
}

/**
 * @summary UnfulfilledACProfileReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnfulfilledACProfileReason  ::=  ENUMERATED
 * {
 *     eASNotAvailable(1),
 *     requirementsUnfulfilled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UnfulfilledACProfileReason = _enum_for_UnfulfilledACProfileReason;

/**
 * @summary UnfulfilledACProfileReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnfulfilledACProfileReason  ::=  ENUMERATED
 * {
 *     eASNotAvailable(1),
 *     requirementsUnfulfilled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UnfulfilledACProfileReason = _enum_for_UnfulfilledACProfileReason;

/**
 * @summary UnfulfilledACProfileReason_eASNotAvailable
 * @constant
 * @type {number}
 */
export
const UnfulfilledACProfileReason_eASNotAvailable: UnfulfilledACProfileReason = UnfulfilledACProfileReason.eASNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eASNotAvailable
 * @constant
 * @type {number}
 */
export
const eASNotAvailable: UnfulfilledACProfileReason = UnfulfilledACProfileReason.eASNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnfulfilledACProfileReason_requirementsUnfulfilled
 * @constant
 * @type {number}
 */
export
const UnfulfilledACProfileReason_requirementsUnfulfilled: UnfulfilledACProfileReason = UnfulfilledACProfileReason.requirementsUnfulfilled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requirementsUnfulfilled
 * @constant
 * @type {number}
 */
export
const requirementsUnfulfilled: UnfulfilledACProfileReason = UnfulfilledACProfileReason.requirementsUnfulfilled; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_UnfulfilledACProfileReason: $.ASN1Decoder<UnfulfilledACProfileReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnfulfilledACProfileReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnfulfilledACProfileReason (el: _Element): UnfulfilledACProfileReason {
    if (!_cached_decoder_for_UnfulfilledACProfileReason) { _cached_decoder_for_UnfulfilledACProfileReason = $._decodeEnumerated; }
    return _cached_decoder_for_UnfulfilledACProfileReason(el);
}

let _cached_encoder_for_UnfulfilledACProfileReason: $.ASN1Encoder<UnfulfilledACProfileReason> | null = null;

/**
 * @summary Encodes a(n) UnfulfilledACProfileReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnfulfilledACProfileReason, encoded as an ASN.1 Element.
 */
export
function _encode_UnfulfilledACProfileReason (value: UnfulfilledACProfileReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnfulfilledACProfileReason) { _cached_encoder_for_UnfulfilledACProfileReason = $._encodeEnumerated; }
    return _cached_encoder_for_UnfulfilledACProfileReason(value, elGetter);
}


/* eslint-enable */
