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
 * @summary Resume
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Resume  ::=  BIT STRING
 * {     msgToResume                 ( 0),     -- optional parameters
 *     resource                ( 4),     -- optional parameters
 *     duration                 ( 1),     -- optional parameters
 *     privateData                 ( 2),     -- optional parameters
 *     privateDataInAck             ( 3) }
 * ```
 */
export
type Resume = BIT_STRING;

/**
 * @summary Resume_msgToResume
 * @constant
 */
export
const Resume_msgToResume: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary msgToResume
 * @constant
 */
export
const msgToResume: number = Resume_msgToResume; /* SHORT_NAMED_BIT */

/**
 * @summary Resume_resource
 * @constant
 */
export
const Resume_resource: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = Resume_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Resume_duration
 * @constant
 */
export
const Resume_duration: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary duration
 * @constant
 */
export
const duration: number = Resume_duration; /* SHORT_NAMED_BIT */

/**
 * @summary Resume_privateData
 * @constant
 */
export
const Resume_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Resume_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Resume_privateDataInAck
 * @constant
 */
export
const Resume_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = Resume_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Resume: $.ASN1Decoder<Resume> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Resume
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Resume (el: _Element): Resume {
    if (!_cached_decoder_for_Resume) { _cached_decoder_for_Resume = $._decodeBitString; }
    return _cached_decoder_for_Resume(el);
}

let _cached_encoder_for_Resume: $.ASN1Encoder<Resume> | null = null;

/**
 * @summary Encodes a(n) Resume into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Resume, encoded as an ASN.1 Element.
 */
export
function _encode_Resume (value: Resume, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Resume) { _cached_encoder_for_Resume = $._encodeBitString; }
    return _cached_encoder_for_Resume(value, elGetter);
}


/* eslint-enable */
