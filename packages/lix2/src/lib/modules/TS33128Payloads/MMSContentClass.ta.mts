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
 * @summary MMSContentClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSContentClass  ::=  ENUMERATED
 * {
 *     text(1),
 *     imageBasic(2),
 *     imageRich(3),
 *     videoBasic(4),
 *     videoRich(5),
 *     megaPixel(6),
 *     contentBasic(7),
 *     contentRich(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSContentClass {
    text = 1,
    imageBasic = 2,
    imageRich = 3,
    videoBasic = 4,
    videoRich = 5,
    megaPixel = 6,
    contentBasic = 7,
    contentRich = 8,
}

/**
 * @summary MMSContentClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSContentClass  ::=  ENUMERATED
 * {
 *     text(1),
 *     imageBasic(2),
 *     imageRich(3),
 *     videoBasic(4),
 *     videoRich(5),
 *     megaPixel(6),
 *     contentBasic(7),
 *     contentRich(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSContentClass = _enum_for_MMSContentClass;

/**
 * @summary MMSContentClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSContentClass  ::=  ENUMERATED
 * {
 *     text(1),
 *     imageBasic(2),
 *     imageRich(3),
 *     videoBasic(4),
 *     videoRich(5),
 *     megaPixel(6),
 *     contentBasic(7),
 *     contentRich(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSContentClass = _enum_for_MMSContentClass;

/**
 * @summary MMSContentClass_text
 * @constant
 * @type {number}
 */
export
const MMSContentClass_text: MMSContentClass = MMSContentClass.text; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary text
 * @constant
 * @type {number}
 */
export
const text: MMSContentClass = MMSContentClass.text; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_imageBasic
 * @constant
 * @type {number}
 */
export
const MMSContentClass_imageBasic: MMSContentClass = MMSContentClass.imageBasic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imageBasic
 * @constant
 * @type {number}
 */
export
const imageBasic: MMSContentClass = MMSContentClass.imageBasic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_imageRich
 * @constant
 * @type {number}
 */
export
const MMSContentClass_imageRich: MMSContentClass = MMSContentClass.imageRich; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imageRich
 * @constant
 * @type {number}
 */
export
const imageRich: MMSContentClass = MMSContentClass.imageRich; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_videoBasic
 * @constant
 * @type {number}
 */
export
const MMSContentClass_videoBasic: MMSContentClass = MMSContentClass.videoBasic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoBasic
 * @constant
 * @type {number}
 */
export
const videoBasic: MMSContentClass = MMSContentClass.videoBasic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_videoRich
 * @constant
 * @type {number}
 */
export
const MMSContentClass_videoRich: MMSContentClass = MMSContentClass.videoRich; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoRich
 * @constant
 * @type {number}
 */
export
const videoRich: MMSContentClass = MMSContentClass.videoRich; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_megaPixel
 * @constant
 * @type {number}
 */
export
const MMSContentClass_megaPixel: MMSContentClass = MMSContentClass.megaPixel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary megaPixel
 * @constant
 * @type {number}
 */
export
const megaPixel: MMSContentClass = MMSContentClass.megaPixel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_contentBasic
 * @constant
 * @type {number}
 */
export
const MMSContentClass_contentBasic: MMSContentClass = MMSContentClass.contentBasic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contentBasic
 * @constant
 * @type {number}
 */
export
const contentBasic: MMSContentClass = MMSContentClass.contentBasic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_contentRich
 * @constant
 * @type {number}
 */
export
const MMSContentClass_contentRich: MMSContentClass = MMSContentClass.contentRich; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contentRich
 * @constant
 * @type {number}
 */
export
const contentRich: MMSContentClass = MMSContentClass.contentRich; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMSContentClass: $.ASN1Decoder<MMSContentClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSContentClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSContentClass (el: _Element): MMSContentClass {
    if (!_cached_decoder_for_MMSContentClass) { _cached_decoder_for_MMSContentClass = $._decodeEnumerated; }
    return _cached_decoder_for_MMSContentClass(el);
}

let _cached_encoder_for_MMSContentClass: $.ASN1Encoder<MMSContentClass> | null = null;

/**
 * @summary Encodes a(n) MMSContentClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSContentClass, encoded as an ASN.1 Element.
 */
export
function _encode_MMSContentClass (value: MMSContentClass, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSContentClass) { _cached_encoder_for_MMSContentClass = $._encodeEnumerated; }
    return _cached_encoder_for_MMSContentClass(value, elGetter);
}


/* eslint-enable */
