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
 * @summary BioAPI_GUI_ENROLL_TYPE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BioAPI-GUI-ENROLL-TYPE  ::=  BIT STRING {testVerify(0), multipleCapture(1)
 * }(SIZE (32))
 * ```
 */
export
type BioAPI_GUI_ENROLL_TYPE = BIT_STRING;

/**
 * @summary BioAPI_GUI_ENROLL_TYPE_testVerify
 * @constant
 */
export
const BioAPI_GUI_ENROLL_TYPE_testVerify: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary testVerify
 * @constant
 */
export
const testVerify: number = BioAPI_GUI_ENROLL_TYPE_testVerify; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_GUI_ENROLL_TYPE_multipleCapture
 * @constant
 */
export
const BioAPI_GUI_ENROLL_TYPE_multipleCapture: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary multipleCapture
 * @constant
 */
export
const multipleCapture: number = BioAPI_GUI_ENROLL_TYPE_multipleCapture; /* SHORT_NAMED_BIT */

let _cached_decoder_for_BioAPI_GUI_ENROLL_TYPE: $.ASN1Decoder<BioAPI_GUI_ENROLL_TYPE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_GUI_ENROLL_TYPE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BioAPI_GUI_ENROLL_TYPE (el: _Element): BioAPI_GUI_ENROLL_TYPE {
    if (!_cached_decoder_for_BioAPI_GUI_ENROLL_TYPE) { _cached_decoder_for_BioAPI_GUI_ENROLL_TYPE = $._decodeBitString; }
    return _cached_decoder_for_BioAPI_GUI_ENROLL_TYPE(el);
}

let _cached_encoder_for_BioAPI_GUI_ENROLL_TYPE: $.ASN1Encoder<BioAPI_GUI_ENROLL_TYPE> | null = null;

/**
 * @summary Encodes a(n) BioAPI_GUI_ENROLL_TYPE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_GUI_ENROLL_TYPE, encoded as an ASN.1 Element.
 */
export
function _encode_BioAPI_GUI_ENROLL_TYPE (value: BioAPI_GUI_ENROLL_TYPE, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BioAPI_GUI_ENROLL_TYPE) { _cached_encoder_for_BioAPI_GUI_ENROLL_TYPE = $._encodeBitString; }
    return _cached_encoder_for_BioAPI_GUI_ENROLL_TYPE(value, elGetter);
}


/* eslint-enable */
