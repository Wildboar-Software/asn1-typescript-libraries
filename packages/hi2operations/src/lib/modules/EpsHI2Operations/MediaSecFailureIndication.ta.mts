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
enum _enum_for_MediaSecFailureIndication {
    genericFailure = 0,
}

/**
 * @summary MediaSecFailureIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaSecFailureIndication  ::=  ENUMERATED
 * {
 *  genericFailure (0),
 *  ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MediaSecFailureIndication = _enum_for_MediaSecFailureIndication | ENUMERATED;

/**
 * @summary MediaSecFailureIndication_genericFailure
 * @constant
 * @type {number}
 */
export
const MediaSecFailureIndication_genericFailure: MediaSecFailureIndication = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary genericFailure
 * @constant
 * @type {number}
 */
export
const genericFailure: MediaSecFailureIndication = MediaSecFailureIndication_genericFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MediaSecFailureIndication: $.ASN1Decoder<MediaSecFailureIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaSecFailureIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaSecFailureIndication (el: _Element): MediaSecFailureIndication {
    if (!_cached_decoder_for_MediaSecFailureIndication) { _cached_decoder_for_MediaSecFailureIndication = $._decodeEnumerated; }
    return _cached_decoder_for_MediaSecFailureIndication(el);
}

let _cached_encoder_for_MediaSecFailureIndication: $.ASN1Encoder<MediaSecFailureIndication> | null = null;

/**
 * @summary Encodes a(n) MediaSecFailureIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaSecFailureIndication, encoded as an ASN.1 Element.
 */
export
function _encode_MediaSecFailureIndication (value: MediaSecFailureIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaSecFailureIndication) { _cached_encoder_for_MediaSecFailureIndication = $._encodeEnumerated; }
    return _cached_encoder_for_MediaSecFailureIndication(value, elGetter);
}


/* eslint-enable */
