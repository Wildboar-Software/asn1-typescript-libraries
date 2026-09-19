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
 * @summary RegistrationAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationAction  ::=  INTEGER {
 *     ra-reg-request  (0),
 *     ra-reg-result   (1)
 * }
 * ```
 */
export
type RegistrationAction = INTEGER;

/**
 * @summary RegistrationAction_ra_reg_request
 * @constant
 * @type {number}
 */
export
const RegistrationAction_ra_reg_request: RegistrationAction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RegistrationAction_ra_reg_request
 * @constant
 * @type {number}
 */
export
const ra_reg_request: RegistrationAction = RegistrationAction_ra_reg_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RegistrationAction_ra_reg_result
 * @constant
 * @type {number}
 */
export
const RegistrationAction_ra_reg_result: RegistrationAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RegistrationAction_ra_reg_result
 * @constant
 * @type {number}
 */
export
const ra_reg_result: RegistrationAction = RegistrationAction_ra_reg_result; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RegistrationAction: $.ASN1Decoder<RegistrationAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegistrationAction (el: _Element): RegistrationAction {
    if (!_cached_decoder_for_RegistrationAction) { _cached_decoder_for_RegistrationAction = $._decodeInteger; }
    return _cached_decoder_for_RegistrationAction(el);
}

let _cached_encoder_for_RegistrationAction: $.ASN1Encoder<RegistrationAction> | null = null;

/**
 * @summary Encodes a(n) RegistrationAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationAction, encoded as an ASN.1 Element.
 */
export
function _encode_RegistrationAction (value: RegistrationAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegistrationAction) { _cached_encoder_for_RegistrationAction = $._encodeInteger; }
    return _cached_encoder_for_RegistrationAction(value, elGetter);
}


/* eslint-enable */
