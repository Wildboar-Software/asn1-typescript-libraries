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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary Media
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Media  ::=  ENUMERATED {voiceMail(0), faxGroup3(1), faxGroup4(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Media {
    voiceMail = 0,
    faxGroup3 = 1,
    faxGroup4 = 2,
}

/**
 * @summary Media
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Media  ::=  ENUMERATED {voiceMail(0), faxGroup3(1), faxGroup4(2)}
 * ```
 * 
 * @enum {number}
 */
export
type Media = _enum_for_Media;

/**
 * @summary Media
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Media  ::=  ENUMERATED {voiceMail(0), faxGroup3(1), faxGroup4(2)}
 * ```
 * 
 * @enum {number}
 */
export
const Media = _enum_for_Media;

/**
 * @summary Media_voiceMail
 * @constant
 * @type {number}
 */
export
const Media_voiceMail: Media = Media.voiceMail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceMail
 * @constant
 * @type {number}
 */
export
const voiceMail: Media = Media.voiceMail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Media_faxGroup3
 * @constant
 * @type {number}
 */
export
const Media_faxGroup3: Media = Media.faxGroup3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary faxGroup3
 * @constant
 * @type {number}
 */
export
const faxGroup3: Media = Media.faxGroup3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Media_faxGroup4
 * @constant
 * @type {number}
 */
export
const Media_faxGroup4: Media = Media.faxGroup4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary faxGroup4
 * @constant
 * @type {number}
 */
export
const faxGroup4: Media = Media.faxGroup4; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Media: $.ASN1Decoder<Media> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Media
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Media (el: _Element): Media {
    if (!_cached_decoder_for_Media) { _cached_decoder_for_Media = $._decodeEnumerated; }
    return _cached_decoder_for_Media(el);
}

let _cached_encoder_for_Media: $.ASN1Encoder<Media> | null = null;

/**
 * @summary Encodes a(n) Media into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Media, encoded as an ASN.1 Element.
 */
export
function _encode_Media (value: Media, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Media) { _cached_encoder_for_Media = $._encodeEnumerated; }
    return _cached_encoder_for_Media(value, elGetter);
}


/* eslint-enable */
