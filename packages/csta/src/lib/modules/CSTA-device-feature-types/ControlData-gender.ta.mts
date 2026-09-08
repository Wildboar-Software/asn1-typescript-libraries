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
 * @summary ControlData_gender
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlData-gender ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ControlData_gender {
    male = 0,
    female = 1,
}

/**
 * @summary ControlData_gender
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlData-gender ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type ControlData_gender = _enum_for_ControlData_gender;

/**
 * @summary ControlData_gender
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlData-gender ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const ControlData_gender = _enum_for_ControlData_gender;

/**
 * @summary ControlData_gender_male
 * @constant
 * @type {number}
 */
export
const ControlData_gender_male: ControlData_gender = ControlData_gender.male; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary male
 * @constant
 * @type {number}
 */
export
const male: ControlData_gender = ControlData_gender.male; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ControlData_gender_female
 * @constant
 * @type {number}
 */
export
const ControlData_gender_female: ControlData_gender = ControlData_gender.female; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary female
 * @constant
 * @type {number}
 */
export
const female: ControlData_gender = ControlData_gender.female; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ControlData_gender: $.ASN1Decoder<ControlData_gender> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlData_gender
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ControlData_gender (el: _Element): ControlData_gender {
    if (!_cached_decoder_for_ControlData_gender) { _cached_decoder_for_ControlData_gender = $._decodeEnumerated; }
    return _cached_decoder_for_ControlData_gender(el);
}

let _cached_encoder_for_ControlData_gender: $.ASN1Encoder<ControlData_gender> | null = null;

/**
 * @summary Encodes a(n) ControlData_gender into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlData_gender, encoded as an ASN.1 Element.
 */
export
function _encode_ControlData_gender (value: ControlData_gender, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ControlData_gender) { _cached_encoder_for_ControlData_gender = $._encodeEnumerated; }
    return _cached_encoder_for_ControlData_gender(value, elGetter);
}


/* eslint-enable */
