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
 * @summary SMS_Address_numbering_plan
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-Address-numbering-plan ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SMS_Address_numbering_plan = INTEGER;

/**
 * @summary SMS_Address_numbering_plan_unknown_numbering
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_unknown_numbering: SMS_Address_numbering_plan = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_unknown_numbering
 * @constant
 * @type {number}
 */
export
const unknown_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_unknown_numbering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_iSDN_numbering
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_iSDN_numbering: SMS_Address_numbering_plan = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_iSDN_numbering
 * @constant
 * @type {number}
 */
export
const iSDN_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_iSDN_numbering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_data_network_numbering
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_data_network_numbering: SMS_Address_numbering_plan = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_data_network_numbering
 * @constant
 * @type {number}
 */
export
const data_network_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_data_network_numbering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_telex_numbering
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_telex_numbering: SMS_Address_numbering_plan = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_telex_numbering
 * @constant
 * @type {number}
 */
export
const telex_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_telex_numbering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_national_numbering
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_national_numbering: SMS_Address_numbering_plan = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_national_numbering
 * @constant
 * @type {number}
 */
export
const national_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_national_numbering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_private_numbering
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_private_numbering: SMS_Address_numbering_plan = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_private_numbering
 * @constant
 * @type {number}
 */
export
const private_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_private_numbering; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_SMS_Address_numbering_plan: $.ASN1Decoder<SMS_Address_numbering_plan> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_Address_numbering_plan
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMS_Address_numbering_plan (el: _Element): SMS_Address_numbering_plan {
    if (!_cached_decoder_for_SMS_Address_numbering_plan) { _cached_decoder_for_SMS_Address_numbering_plan = $._decodeInteger; }
    return _cached_decoder_for_SMS_Address_numbering_plan(el);
}

let _cached_encoder_for_SMS_Address_numbering_plan: $.ASN1Encoder<SMS_Address_numbering_plan> | null = null;

/**
 * @summary Encodes a(n) SMS_Address_numbering_plan into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_Address_numbering_plan, encoded as an ASN.1 Element.
 */
export
function _encode_SMS_Address_numbering_plan (value: SMS_Address_numbering_plan, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMS_Address_numbering_plan) { _cached_encoder_for_SMS_Address_numbering_plan = $._encodeInteger; }
    return _cached_encoder_for_SMS_Address_numbering_plan(value, elGetter);
}


/* eslint-enable */
