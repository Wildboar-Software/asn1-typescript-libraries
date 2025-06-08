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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION RegistrationTypes_standard_parameters */
/**
 * @summary RegistrationTypes_standard_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegistrationTypes-standard-parameters ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RegistrationTypes_standard_parameters = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION RegistrationTypes_standard_parameters */

/* START_OF_SYMBOL_DEFINITION RegistrationTypes_standard_parameters_user_name */
/**
 * @summary RegistrationTypes_standard_parameters_user_name
 * @constant
 */
export const RegistrationTypes_standard_parameters_user_name: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RegistrationTypes_standard_parameters_user_name */

/* START_OF_SYMBOL_DEFINITION user_name */
/**
 * @summary user_name
 * @constant
 */
export const user_name: number = RegistrationTypes_standard_parameters_user_name; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION user_name */

/* START_OF_SYMBOL_DEFINITION RegistrationTypes_standard_parameters_user_address */
/**
 * @summary RegistrationTypes_standard_parameters_user_address
 * @constant
 */
export const RegistrationTypes_standard_parameters_user_address: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RegistrationTypes_standard_parameters_user_address */

/* START_OF_SYMBOL_DEFINITION user_address */
/**
 * @summary user_address
 * @constant
 */
export const user_address: number = RegistrationTypes_standard_parameters_user_address; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION user_address */

/* START_OF_SYMBOL_DEFINITION RegistrationTypes_standard_parameters_deliverable_class */
/**
 * @summary RegistrationTypes_standard_parameters_deliverable_class
 * @constant
 */
export const RegistrationTypes_standard_parameters_deliverable_class: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RegistrationTypes_standard_parameters_deliverable_class */

/* START_OF_SYMBOL_DEFINITION deliverable_class */
/**
 * @summary deliverable_class
 * @constant
 */
export const deliverable_class: number = RegistrationTypes_standard_parameters_deliverable_class; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION deliverable_class */

/* START_OF_SYMBOL_DEFINITION RegistrationTypes_standard_parameters_default_delivery_controls */
/**
 * @summary RegistrationTypes_standard_parameters_default_delivery_controls
 * @constant
 */
export const RegistrationTypes_standard_parameters_default_delivery_controls: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RegistrationTypes_standard_parameters_default_delivery_controls */

/* START_OF_SYMBOL_DEFINITION default_delivery_controls */
/**
 * @summary default_delivery_controls
 * @constant
 */
export const default_delivery_controls: number = RegistrationTypes_standard_parameters_default_delivery_controls; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION default_delivery_controls */

/* START_OF_SYMBOL_DEFINITION RegistrationTypes_standard_parameters_redirections */
/**
 * @summary RegistrationTypes_standard_parameters_redirections
 * @constant
 */
export const RegistrationTypes_standard_parameters_redirections: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RegistrationTypes_standard_parameters_redirections */

/* START_OF_SYMBOL_DEFINITION redirections */
/**
 * @summary redirections
 * @constant
 */
export const redirections: number = RegistrationTypes_standard_parameters_redirections; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION redirections */

/* START_OF_SYMBOL_DEFINITION RegistrationTypes_standard_parameters_restricted_delivery */
/**
 * @summary RegistrationTypes_standard_parameters_restricted_delivery
 * @constant
 */
export const RegistrationTypes_standard_parameters_restricted_delivery: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RegistrationTypes_standard_parameters_restricted_delivery */

/* START_OF_SYMBOL_DEFINITION restricted_delivery */
/**
 * @summary restricted_delivery
 * @constant
 */
export const restricted_delivery: number = RegistrationTypes_standard_parameters_restricted_delivery; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION restricted_delivery */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationTypes_standard_parameters */
let _cached_decoder_for_RegistrationTypes_standard_parameters: $.ASN1Decoder<RegistrationTypes_standard_parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationTypes_standard_parameters */

/* START_OF_SYMBOL_DEFINITION _decode_RegistrationTypes_standard_parameters */
/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationTypes_standard_parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegistrationTypes_standard_parameters} The decoded data structure.
 */
export function _decode_RegistrationTypes_standard_parameters(el: _Element) {
    if (!_cached_decoder_for_RegistrationTypes_standard_parameters) {
        _cached_decoder_for_RegistrationTypes_standard_parameters =
            $._decodeBitString;
    }
    return _cached_decoder_for_RegistrationTypes_standard_parameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RegistrationTypes_standard_parameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationTypes_standard_parameters */
let _cached_encoder_for_RegistrationTypes_standard_parameters: $.ASN1Encoder<RegistrationTypes_standard_parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationTypes_standard_parameters */

/* START_OF_SYMBOL_DEFINITION _encode_RegistrationTypes_standard_parameters */
/**
 * @summary Encodes a(n) RegistrationTypes_standard_parameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationTypes_standard_parameters, encoded as an ASN.1 Element.
 */
export function _encode_RegistrationTypes_standard_parameters(
    value: RegistrationTypes_standard_parameters,
    elGetter: $.ASN1Encoder<RegistrationTypes_standard_parameters>
) {
    if (!_cached_encoder_for_RegistrationTypes_standard_parameters) {
        _cached_encoder_for_RegistrationTypes_standard_parameters =
            $._encodeBitString;
    }
    return _cached_encoder_for_RegistrationTypes_standard_parameters(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_RegistrationTypes_standard_parameters */

/* eslint-enable */
