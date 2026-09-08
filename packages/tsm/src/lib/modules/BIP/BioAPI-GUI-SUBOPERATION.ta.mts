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
enum _enum_for_BioAPI_GUI_SUBOPERATION {
    capture = 0,
    process = 1,
    createtemplate = 2,
    verifymatch = 3,
    identifymatch = 4,
}

/**
 * @summary BioAPI_GUI_SUBOPERATION
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BioAPI-GUI-SUBOPERATION  ::=  ENUMERATED {
 *   capture, process, createtemplate, verifymatch, identifymatch, ...
 *   }
 * ```
 * 
 * @enum {number}
 */
export
type BioAPI_GUI_SUBOPERATION = _enum_for_BioAPI_GUI_SUBOPERATION | ENUMERATED;

/**
 * @summary BioAPI_GUI_SUBOPERATION_capture
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_SUBOPERATION_capture: BioAPI_GUI_SUBOPERATION = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary capture
 * @constant
 * @type {number}
 */
export
const capture: BioAPI_GUI_SUBOPERATION = BioAPI_GUI_SUBOPERATION_capture; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_SUBOPERATION_process
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_SUBOPERATION_process: BioAPI_GUI_SUBOPERATION = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary process
 * @constant
 * @type {number}
 */
export
const process: BioAPI_GUI_SUBOPERATION = BioAPI_GUI_SUBOPERATION_process; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_SUBOPERATION_createtemplate
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_SUBOPERATION_createtemplate: BioAPI_GUI_SUBOPERATION = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary createtemplate
 * @constant
 * @type {number}
 */
export
const createtemplate: BioAPI_GUI_SUBOPERATION = BioAPI_GUI_SUBOPERATION_createtemplate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_SUBOPERATION_verifymatch
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_SUBOPERATION_verifymatch: BioAPI_GUI_SUBOPERATION = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary verifymatch
 * @constant
 * @type {number}
 */
export
const verifymatch: BioAPI_GUI_SUBOPERATION = BioAPI_GUI_SUBOPERATION_verifymatch; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_SUBOPERATION_identifymatch
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_SUBOPERATION_identifymatch: BioAPI_GUI_SUBOPERATION = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary identifymatch
 * @constant
 * @type {number}
 */
export
const identifymatch: BioAPI_GUI_SUBOPERATION = BioAPI_GUI_SUBOPERATION_identifymatch; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_BioAPI_GUI_SUBOPERATION: $.ASN1Decoder<BioAPI_GUI_SUBOPERATION> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_GUI_SUBOPERATION
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BioAPI_GUI_SUBOPERATION (el: _Element): BioAPI_GUI_SUBOPERATION {
    if (!_cached_decoder_for_BioAPI_GUI_SUBOPERATION) { _cached_decoder_for_BioAPI_GUI_SUBOPERATION = $._decodeEnumerated; }
    return _cached_decoder_for_BioAPI_GUI_SUBOPERATION(el);
}

let _cached_encoder_for_BioAPI_GUI_SUBOPERATION: $.ASN1Encoder<BioAPI_GUI_SUBOPERATION> | null = null;

/**
 * @summary Encodes a(n) BioAPI_GUI_SUBOPERATION into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_GUI_SUBOPERATION, encoded as an ASN.1 Element.
 */
export
function _encode_BioAPI_GUI_SUBOPERATION (value: BioAPI_GUI_SUBOPERATION, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BioAPI_GUI_SUBOPERATION) { _cached_encoder_for_BioAPI_GUI_SUBOPERATION = $._encodeEnumerated; }
    return _cached_encoder_for_BioAPI_GUI_SUBOPERATION(value, elGetter);
}


/* eslint-enable */
