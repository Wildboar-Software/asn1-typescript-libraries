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
 * @summary SMS_Address_address_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-Address-address-type ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SMS_Address_address_type = INTEGER;

/**
 * @summary SMS_Address_address_type_unknown_type
 * @constant
 * @type {number}
 */
export
const SMS_Address_address_type_unknown_type: SMS_Address_address_type = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_unknown_type
 * @constant
 * @type {number}
 */
export
const unknown_type: SMS_Address_address_type = SMS_Address_address_type_unknown_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_internat_number
 * @constant
 * @type {number}
 */
export
const SMS_Address_address_type_internat_number: SMS_Address_address_type = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_internat_number
 * @constant
 * @type {number}
 */
export
const internat_number: SMS_Address_address_type = SMS_Address_address_type_internat_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_national_number
 * @constant
 * @type {number}
 */
export
const SMS_Address_address_type_national_number: SMS_Address_address_type = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_national_number
 * @constant
 * @type {number}
 */
export
const national_number: SMS_Address_address_type = SMS_Address_address_type_national_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_net_spec_number
 * @constant
 * @type {number}
 */
export
const SMS_Address_address_type_net_spec_number: SMS_Address_address_type = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_net_spec_number
 * @constant
 * @type {number}
 */
export
const net_spec_number: SMS_Address_address_type = SMS_Address_address_type_net_spec_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_short_number
 * @constant
 * @type {number}
 */
export
const SMS_Address_address_type_short_number: SMS_Address_address_type = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_short_number
 * @constant
 * @type {number}
 */
export
const short_number: SMS_Address_address_type = SMS_Address_address_type_short_number; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_SMS_Address_address_type: $.ASN1Decoder<SMS_Address_address_type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_Address_address_type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMS_Address_address_type (el: _Element): SMS_Address_address_type {
    if (!_cached_decoder_for_SMS_Address_address_type) { _cached_decoder_for_SMS_Address_address_type = $._decodeInteger; }
    return _cached_decoder_for_SMS_Address_address_type(el);
}

let _cached_encoder_for_SMS_Address_address_type: $.ASN1Encoder<SMS_Address_address_type> | null = null;

/**
 * @summary Encodes a(n) SMS_Address_address_type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_Address_address_type, encoded as an ASN.1 Element.
 */
export
function _encode_SMS_Address_address_type (value: SMS_Address_address_type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMS_Address_address_type) { _cached_encoder_for_SMS_Address_address_type = $._encodeInteger; }
    return _cached_encoder_for_SMS_Address_address_type(value, elGetter);
}


/* eslint-enable */
