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
 * @summary MMStatusExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatusExtension  ::=  ENUMERATED
 * {
 *     rejectionByMMSRecipient(0),
 *     rejectionByOtherRS(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMStatusExtension {
    rejectionByMMSRecipient = 0,
    rejectionByOtherRS = 1,
}

/**
 * @summary MMStatusExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatusExtension  ::=  ENUMERATED
 * {
 *     rejectionByMMSRecipient(0),
 *     rejectionByOtherRS(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMStatusExtension = _enum_for_MMStatusExtension;

/**
 * @summary MMStatusExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatusExtension  ::=  ENUMERATED
 * {
 *     rejectionByMMSRecipient(0),
 *     rejectionByOtherRS(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMStatusExtension = _enum_for_MMStatusExtension;

/**
 * @summary MMStatusExtension_rejectionByMMSRecipient
 * @constant
 * @type {number}
 */
export
const MMStatusExtension_rejectionByMMSRecipient: MMStatusExtension = MMStatusExtension.rejectionByMMSRecipient; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejectionByMMSRecipient
 * @constant
 * @type {number}
 */
export
const rejectionByMMSRecipient: MMStatusExtension = MMStatusExtension.rejectionByMMSRecipient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusExtension_rejectionByOtherRS
 * @constant
 * @type {number}
 */
export
const MMStatusExtension_rejectionByOtherRS: MMStatusExtension = MMStatusExtension.rejectionByOtherRS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejectionByOtherRS
 * @constant
 * @type {number}
 */
export
const rejectionByOtherRS: MMStatusExtension = MMStatusExtension.rejectionByOtherRS; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMStatusExtension: $.ASN1Decoder<MMStatusExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMStatusExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMStatusExtension (el: _Element): MMStatusExtension {
    if (!_cached_decoder_for_MMStatusExtension) { _cached_decoder_for_MMStatusExtension = $._decodeEnumerated; }
    return _cached_decoder_for_MMStatusExtension(el);
}

let _cached_encoder_for_MMStatusExtension: $.ASN1Encoder<MMStatusExtension> | null = null;

/**
 * @summary Encodes a(n) MMStatusExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMStatusExtension, encoded as an ASN.1 Element.
 */
export
function _encode_MMStatusExtension (value: MMStatusExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMStatusExtension) { _cached_encoder_for_MMStatusExtension = $._encodeEnumerated; }
    return _cached_encoder_for_MMStatusExtension(value, elGetter);
}


/* eslint-enable */
