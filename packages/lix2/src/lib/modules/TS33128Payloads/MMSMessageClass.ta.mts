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
 * @summary MMSMessageClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSMessageClass  ::=  ENUMERATED
 * {
 *     personal(1),
 *     advertisement(2),
 *     informational(3),
 *     auto(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSMessageClass {
    personal = 1,
    advertisement = 2,
    informational = 3,
    auto = 4,
}

/**
 * @summary MMSMessageClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSMessageClass  ::=  ENUMERATED
 * {
 *     personal(1),
 *     advertisement(2),
 *     informational(3),
 *     auto(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSMessageClass = _enum_for_MMSMessageClass;

/**
 * @summary MMSMessageClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSMessageClass  ::=  ENUMERATED
 * {
 *     personal(1),
 *     advertisement(2),
 *     informational(3),
 *     auto(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSMessageClass = _enum_for_MMSMessageClass;

/**
 * @summary MMSMessageClass_personal
 * @constant
 * @type {number}
 */
export
const MMSMessageClass_personal: MMSMessageClass = MMSMessageClass.personal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal
 * @constant
 * @type {number}
 */
export
const personal: MMSMessageClass = MMSMessageClass.personal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSMessageClass_advertisement
 * @constant
 * @type {number}
 */
export
const MMSMessageClass_advertisement: MMSMessageClass = MMSMessageClass.advertisement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary advertisement
 * @constant
 * @type {number}
 */
export
const advertisement: MMSMessageClass = MMSMessageClass.advertisement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSMessageClass_informational
 * @constant
 * @type {number}
 */
export
const MMSMessageClass_informational: MMSMessageClass = MMSMessageClass.informational; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary informational
 * @constant
 * @type {number}
 */
export
const informational: MMSMessageClass = MMSMessageClass.informational; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSMessageClass_auto
 * @constant
 * @type {number}
 */
export
const MMSMessageClass_auto: MMSMessageClass = MMSMessageClass.auto; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auto
 * @constant
 * @type {number}
 */
export
const auto: MMSMessageClass = MMSMessageClass.auto; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMSMessageClass: $.ASN1Decoder<MMSMessageClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSMessageClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSMessageClass (el: _Element): MMSMessageClass {
    if (!_cached_decoder_for_MMSMessageClass) { _cached_decoder_for_MMSMessageClass = $._decodeEnumerated; }
    return _cached_decoder_for_MMSMessageClass(el);
}

let _cached_encoder_for_MMSMessageClass: $.ASN1Encoder<MMSMessageClass> | null = null;

/**
 * @summary Encodes a(n) MMSMessageClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSMessageClass, encoded as an ASN.1 Element.
 */
export
function _encode_MMSMessageClass (value: MMSMessageClass, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSMessageClass) { _cached_encoder_for_MMSMessageClass = $._encodeEnumerated; }
    return _cached_encoder_for_MMSMessageClass(value, elGetter);
}


/* eslint-enable */
