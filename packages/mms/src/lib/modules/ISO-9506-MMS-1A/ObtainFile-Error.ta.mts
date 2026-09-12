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
 * @summary ObtainFile_Error
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObtainFile-Error  ::=  INTEGER {
 *     source-file            (0),
 *     destination-file       (1)
 * } (0..1)
 * ```
 */
export
type ObtainFile_Error = INTEGER;

/**
 * @summary ObtainFile_Error_source_file
 * @constant
 * @type {number}
 */
export
const ObtainFile_Error_source_file: ObtainFile_Error = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObtainFile_Error_source_file
 * @constant
 * @type {number}
 */
export
const source_file: ObtainFile_Error = ObtainFile_Error_source_file; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObtainFile_Error_destination_file
 * @constant
 * @type {number}
 */
export
const ObtainFile_Error_destination_file: ObtainFile_Error = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObtainFile_Error_destination_file
 * @constant
 * @type {number}
 */
export
const destination_file: ObtainFile_Error = ObtainFile_Error_destination_file; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ObtainFile_Error: $.ASN1Decoder<ObtainFile_Error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObtainFile_Error
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ObtainFile_Error (el: _Element): ObtainFile_Error {
    if (!_cached_decoder_for_ObtainFile_Error) { _cached_decoder_for_ObtainFile_Error = $._decodeInteger; }
    return _cached_decoder_for_ObtainFile_Error(el);
}

let _cached_encoder_for_ObtainFile_Error: $.ASN1Encoder<ObtainFile_Error> | null = null;

/**
 * @summary Encodes a(n) ObtainFile_Error into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObtainFile_Error, encoded as an ASN.1 Element.
 */
export
function _encode_ObtainFile_Error (value: ObtainFile_Error, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ObtainFile_Error) { _cached_encoder_for_ObtainFile_Error = $._encodeInteger; }
    return _cached_encoder_for_ObtainFile_Error(value, elGetter);
}


/* eslint-enable */
