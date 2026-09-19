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
 * @summary RemoteUEIDFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUEIDFormat  ::=  ENUMERATED
 * {
 *     nAI(1),
 *     sixtyFourBitString(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RemoteUEIDFormat {
    nAI = 1,
    sixtyFourBitString = 2,
}

/**
 * @summary RemoteUEIDFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUEIDFormat  ::=  ENUMERATED
 * {
 *     nAI(1),
 *     sixtyFourBitString(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RemoteUEIDFormat = _enum_for_RemoteUEIDFormat;

/**
 * @summary RemoteUEIDFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUEIDFormat  ::=  ENUMERATED
 * {
 *     nAI(1),
 *     sixtyFourBitString(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RemoteUEIDFormat = _enum_for_RemoteUEIDFormat;

/**
 * @summary RemoteUEIDFormat_nAI
 * @constant
 * @type {number}
 */
export
const RemoteUEIDFormat_nAI: RemoteUEIDFormat = RemoteUEIDFormat.nAI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nAI
 * @constant
 * @type {number}
 */
export
const nAI: RemoteUEIDFormat = RemoteUEIDFormat.nAI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RemoteUEIDFormat_sixtyFourBitString
 * @constant
 * @type {number}
 */
export
const RemoteUEIDFormat_sixtyFourBitString: RemoteUEIDFormat = RemoteUEIDFormat.sixtyFourBitString; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sixtyFourBitString
 * @constant
 * @type {number}
 */
export
const sixtyFourBitString: RemoteUEIDFormat = RemoteUEIDFormat.sixtyFourBitString; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RemoteUEIDFormat: $.ASN1Decoder<RemoteUEIDFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteUEIDFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoteUEIDFormat (el: _Element): RemoteUEIDFormat {
    if (!_cached_decoder_for_RemoteUEIDFormat) { _cached_decoder_for_RemoteUEIDFormat = $._decodeEnumerated; }
    return _cached_decoder_for_RemoteUEIDFormat(el);
}

let _cached_encoder_for_RemoteUEIDFormat: $.ASN1Encoder<RemoteUEIDFormat> | null = null;

/**
 * @summary Encodes a(n) RemoteUEIDFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteUEIDFormat, encoded as an ASN.1 Element.
 */
export
function _encode_RemoteUEIDFormat (value: RemoteUEIDFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoteUEIDFormat) { _cached_encoder_for_RemoteUEIDFormat = $._encodeEnumerated; }
    return _cached_encoder_for_RemoteUEIDFormat(value, elGetter);
}


/* eslint-enable */
