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



export
enum _enum_for_SMS_report_sMS_Contents_initiator {
    target = 0,
    server = 1,
    undefined_party = 2,
}

/**
 * @summary SMS_report_sMS_Contents_initiator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-report-sMS-Contents-initiator ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type SMS_report_sMS_Contents_initiator = _enum_for_SMS_report_sMS_Contents_initiator | ENUMERATED;

/**
 * @summary SMS_report_sMS_Contents_initiator_target
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_initiator_target: SMS_report_sMS_Contents_initiator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary target
 * @constant
 * @type {number}
 */
export
const target: SMS_report_sMS_Contents_initiator = SMS_report_sMS_Contents_initiator_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_initiator_server
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_initiator_server: SMS_report_sMS_Contents_initiator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary server
 * @constant
 * @type {number}
 */
export
const server: SMS_report_sMS_Contents_initiator = SMS_report_sMS_Contents_initiator_server; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_initiator_undefined_party
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_initiator_undefined_party: SMS_report_sMS_Contents_initiator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined_party
 * @constant
 * @type {number}
 */
export
const undefined_party: SMS_report_sMS_Contents_initiator = SMS_report_sMS_Contents_initiator_undefined_party; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SMS_report_sMS_Contents_initiator: $.ASN1Decoder<SMS_report_sMS_Contents_initiator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_report_sMS_Contents_initiator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMS_report_sMS_Contents_initiator (el: _Element): SMS_report_sMS_Contents_initiator {
    if (!_cached_decoder_for_SMS_report_sMS_Contents_initiator) { _cached_decoder_for_SMS_report_sMS_Contents_initiator = $._decodeEnumerated; }
    return _cached_decoder_for_SMS_report_sMS_Contents_initiator(el);
}

let _cached_encoder_for_SMS_report_sMS_Contents_initiator: $.ASN1Encoder<SMS_report_sMS_Contents_initiator> | null = null;

/**
 * @summary Encodes a(n) SMS_report_sMS_Contents_initiator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_report_sMS_Contents_initiator, encoded as an ASN.1 Element.
 */
export
function _encode_SMS_report_sMS_Contents_initiator (value: SMS_report_sMS_Contents_initiator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMS_report_sMS_Contents_initiator) { _cached_encoder_for_SMS_report_sMS_Contents_initiator = $._encodeEnumerated; }
    return _cached_encoder_for_SMS_report_sMS_Contents_initiator(value, elGetter);
}


/* eslint-enable */
