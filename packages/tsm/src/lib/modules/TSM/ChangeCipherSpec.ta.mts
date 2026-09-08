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



export
enum _enum_for_ChangeCipherSpec {
    change_cipher_spec = 1,
}

/**
 * @summary ChangeCipherSpec
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeCipherSpec     ::=     ENUMERATED {
 * change-cipher-spec(1),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ChangeCipherSpec = _enum_for_ChangeCipherSpec | ENUMERATED;

/**
 * @summary ChangeCipherSpec_change_cipher_spec
 * @constant
 * @type {number}
 */
export
const ChangeCipherSpec_change_cipher_spec: ChangeCipherSpec = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary change_cipher_spec
 * @constant
 * @type {number}
 */
export
const change_cipher_spec: ChangeCipherSpec = ChangeCipherSpec_change_cipher_spec; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ChangeCipherSpec: $.ASN1Decoder<ChangeCipherSpec> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeCipherSpec
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeCipherSpec (el: _Element): ChangeCipherSpec {
    if (!_cached_decoder_for_ChangeCipherSpec) { _cached_decoder_for_ChangeCipherSpec = $._decodeEnumerated; }
    return _cached_decoder_for_ChangeCipherSpec(el);
}

let _cached_encoder_for_ChangeCipherSpec: $.ASN1Encoder<ChangeCipherSpec> | null = null;

/**
 * @summary Encodes a(n) ChangeCipherSpec into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeCipherSpec, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeCipherSpec (value: ChangeCipherSpec, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeCipherSpec) { _cached_encoder_for_ChangeCipherSpec = $._encodeEnumerated; }
    return _cached_encoder_for_ChangeCipherSpec(value, elGetter);
}


/* eslint-enable */
