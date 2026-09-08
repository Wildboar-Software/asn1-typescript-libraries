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
enum _enum_for_BioAPI_GUI_OPERATION {
    capture = 0,
    process = 1,
    createtemplate = 2,
    verifymatch = 3,
    identifymatch = 4,
    verify = 5,
    identify = 6,
    enroll = 7,
}

/**
 * @summary BioAPI_GUI_OPERATION
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BioAPI-GUI-OPERATION  ::=  ENUMERATED {
 *   capture, process, createtemplate, verifymatch, identifymatch, verify,
 *   identify, enroll, ...
 *   }
 * ```
 * 
 * @enum {number}
 */
export
type BioAPI_GUI_OPERATION = _enum_for_BioAPI_GUI_OPERATION | ENUMERATED;

/**
 * @summary BioAPI_GUI_OPERATION_capture
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_OPERATION_capture: BioAPI_GUI_OPERATION = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary capture
 * @constant
 * @type {number}
 */
export
const capture: BioAPI_GUI_OPERATION = BioAPI_GUI_OPERATION_capture; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_OPERATION_process
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_OPERATION_process: BioAPI_GUI_OPERATION = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary process
 * @constant
 * @type {number}
 */
export
const process: BioAPI_GUI_OPERATION = BioAPI_GUI_OPERATION_process; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_OPERATION_createtemplate
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_OPERATION_createtemplate: BioAPI_GUI_OPERATION = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary createtemplate
 * @constant
 * @type {number}
 */
export
const createtemplate: BioAPI_GUI_OPERATION = BioAPI_GUI_OPERATION_createtemplate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_OPERATION_verifymatch
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_OPERATION_verifymatch: BioAPI_GUI_OPERATION = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary verifymatch
 * @constant
 * @type {number}
 */
export
const verifymatch: BioAPI_GUI_OPERATION = BioAPI_GUI_OPERATION_verifymatch; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_OPERATION_identifymatch
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_OPERATION_identifymatch: BioAPI_GUI_OPERATION = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary identifymatch
 * @constant
 * @type {number}
 */
export
const identifymatch: BioAPI_GUI_OPERATION = BioAPI_GUI_OPERATION_identifymatch; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_OPERATION_verify
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_OPERATION_verify: BioAPI_GUI_OPERATION = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary verify
 * @constant
 * @type {number}
 */
export
const verify: BioAPI_GUI_OPERATION = BioAPI_GUI_OPERATION_verify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_OPERATION_identify
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_OPERATION_identify: BioAPI_GUI_OPERATION = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary identify
 * @constant
 * @type {number}
 */
export
const identify: BioAPI_GUI_OPERATION = BioAPI_GUI_OPERATION_identify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_OPERATION_enroll
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_OPERATION_enroll: BioAPI_GUI_OPERATION = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enroll
 * @constant
 * @type {number}
 */
export
const enroll: BioAPI_GUI_OPERATION = BioAPI_GUI_OPERATION_enroll; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_BioAPI_GUI_OPERATION: $.ASN1Decoder<BioAPI_GUI_OPERATION> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_GUI_OPERATION
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BioAPI_GUI_OPERATION (el: _Element): BioAPI_GUI_OPERATION {
    if (!_cached_decoder_for_BioAPI_GUI_OPERATION) { _cached_decoder_for_BioAPI_GUI_OPERATION = $._decodeEnumerated; }
    return _cached_decoder_for_BioAPI_GUI_OPERATION(el);
}

let _cached_encoder_for_BioAPI_GUI_OPERATION: $.ASN1Encoder<BioAPI_GUI_OPERATION> | null = null;

/**
 * @summary Encodes a(n) BioAPI_GUI_OPERATION into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_GUI_OPERATION, encoded as an ASN.1 Element.
 */
export
function _encode_BioAPI_GUI_OPERATION (value: BioAPI_GUI_OPERATION, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BioAPI_GUI_OPERATION) { _cached_encoder_for_BioAPI_GUI_OPERATION = $._encodeEnumerated; }
    return _cached_encoder_for_BioAPI_GUI_OPERATION(value, elGetter);
}


/* eslint-enable */
