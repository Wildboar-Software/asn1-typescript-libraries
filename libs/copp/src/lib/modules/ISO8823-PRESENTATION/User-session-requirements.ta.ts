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

/* START_OF_SYMBOL_DEFINITION User_session_requirements */
/**
 * @summary User_session_requirements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * User-session-requirements  ::=  BIT STRING {
 *   half-duplex(0), duplex(1), expedited-data(2), minor-synchronize(3),
 *   major-synchronize(4), resynchronize(5), activity-management(6),
 *   negotiated-release(7), capability-data(8), exceptions(9), typed-data(10),
 *   symmetric-synchronize(11), data-separation(12)}
 * ```
 */
export type User_session_requirements = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION User_session_requirements */

/* START_OF_SYMBOL_DEFINITION User_session_requirements_half_duplex */
/**
 * @summary User_session_requirements_half_duplex
 * @constant
 */
export const User_session_requirements_half_duplex: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION User_session_requirements_half_duplex */

/* START_OF_SYMBOL_DEFINITION half_duplex */
/**
 * @summary half_duplex
 * @constant
 */
export const half_duplex: number = User_session_requirements_half_duplex; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION half_duplex */

/* START_OF_SYMBOL_DEFINITION User_session_requirements_duplex */
/**
 * @summary User_session_requirements_duplex
 * @constant
 */
export const User_session_requirements_duplex: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION User_session_requirements_duplex */

/* START_OF_SYMBOL_DEFINITION duplex */
/**
 * @summary duplex
 * @constant
 */
export const duplex: number = User_session_requirements_duplex; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION duplex */

/* START_OF_SYMBOL_DEFINITION User_session_requirements_expedited_data */
/**
 * @summary User_session_requirements_expedited_data
 * @constant
 */
export const User_session_requirements_expedited_data: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION User_session_requirements_expedited_data */

/* START_OF_SYMBOL_DEFINITION expedited_data */
/**
 * @summary expedited_data
 * @constant
 */
export const expedited_data: number = User_session_requirements_expedited_data; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION expedited_data */

/* START_OF_SYMBOL_DEFINITION User_session_requirements_minor_synchronize */
/**
 * @summary User_session_requirements_minor_synchronize
 * @constant
 */
export const User_session_requirements_minor_synchronize: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION User_session_requirements_minor_synchronize */

/* START_OF_SYMBOL_DEFINITION minor_synchronize */
/**
 * @summary minor_synchronize
 * @constant
 */
export const minor_synchronize: number = User_session_requirements_minor_synchronize; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION minor_synchronize */

/* START_OF_SYMBOL_DEFINITION User_session_requirements_major_synchronize */
/**
 * @summary User_session_requirements_major_synchronize
 * @constant
 */
export const User_session_requirements_major_synchronize: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION User_session_requirements_major_synchronize */

/* START_OF_SYMBOL_DEFINITION major_synchronize */
/**
 * @summary major_synchronize
 * @constant
 */
export const major_synchronize: number = User_session_requirements_major_synchronize; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION major_synchronize */

/* START_OF_SYMBOL_DEFINITION User_session_requirements_resynchronize */
/**
 * @summary User_session_requirements_resynchronize
 * @constant
 */
export const User_session_requirements_resynchronize: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION User_session_requirements_resynchronize */

/* START_OF_SYMBOL_DEFINITION resynchronize */
/**
 * @summary resynchronize
 * @constant
 */
export const resynchronize: number = User_session_requirements_resynchronize; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION resynchronize */

/* START_OF_SYMBOL_DEFINITION User_session_requirements_activity_management */
/**
 * @summary User_session_requirements_activity_management
 * @constant
 */
export const User_session_requirements_activity_management: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION User_session_requirements_activity_management */

/* START_OF_SYMBOL_DEFINITION activity_management */
/**
 * @summary activity_management
 * @constant
 */
export const activity_management: number = User_session_requirements_activity_management; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION activity_management */

/* START_OF_SYMBOL_DEFINITION User_session_requirements_negotiated_release */
/**
 * @summary User_session_requirements_negotiated_release
 * @constant
 */
export const User_session_requirements_negotiated_release: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION User_session_requirements_negotiated_release */

/* START_OF_SYMBOL_DEFINITION negotiated_release */
/**
 * @summary negotiated_release
 * @constant
 */
export const negotiated_release: number = User_session_requirements_negotiated_release; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION negotiated_release */

/* START_OF_SYMBOL_DEFINITION User_session_requirements_capability_data */
/**
 * @summary User_session_requirements_capability_data
 * @constant
 */
export const User_session_requirements_capability_data: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION User_session_requirements_capability_data */

/* START_OF_SYMBOL_DEFINITION capability_data */
/**
 * @summary capability_data
 * @constant
 */
export const capability_data: number = User_session_requirements_capability_data; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION capability_data */

/* START_OF_SYMBOL_DEFINITION User_session_requirements_exceptions */
/**
 * @summary User_session_requirements_exceptions
 * @constant
 */
export const User_session_requirements_exceptions: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION User_session_requirements_exceptions */

/* START_OF_SYMBOL_DEFINITION exceptions */
/**
 * @summary exceptions
 * @constant
 */
export const exceptions: number = User_session_requirements_exceptions; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION exceptions */

/* START_OF_SYMBOL_DEFINITION User_session_requirements_typed_data */
/**
 * @summary User_session_requirements_typed_data
 * @constant
 */
export const User_session_requirements_typed_data: number = 10; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION User_session_requirements_typed_data */

/* START_OF_SYMBOL_DEFINITION typed_data */
/**
 * @summary typed_data
 * @constant
 */
export const typed_data: number = User_session_requirements_typed_data; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typed_data */

/* START_OF_SYMBOL_DEFINITION User_session_requirements_symmetric_synchronize */
/**
 * @summary User_session_requirements_symmetric_synchronize
 * @constant
 */
export const User_session_requirements_symmetric_synchronize: number = 11; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION User_session_requirements_symmetric_synchronize */

/* START_OF_SYMBOL_DEFINITION symmetric_synchronize */
/**
 * @summary symmetric_synchronize
 * @constant
 */
export const symmetric_synchronize: number = User_session_requirements_symmetric_synchronize; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION symmetric_synchronize */

/* START_OF_SYMBOL_DEFINITION User_session_requirements_data_separation */
/**
 * @summary User_session_requirements_data_separation
 * @constant
 */
export const User_session_requirements_data_separation: number = 12; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION User_session_requirements_data_separation */

/* START_OF_SYMBOL_DEFINITION data_separation */
/**
 * @summary data_separation
 * @constant
 */
export const data_separation: number = User_session_requirements_data_separation; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION data_separation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_User_session_requirements */
let _cached_decoder_for_User_session_requirements: $.ASN1Decoder<User_session_requirements> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_User_session_requirements */

/* START_OF_SYMBOL_DEFINITION _decode_User_session_requirements */
/**
 * @summary Decodes an ASN.1 element into a(n) User_session_requirements
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {User_session_requirements} The decoded data structure.
 */
export function _decode_User_session_requirements(el: _Element) {
    if (!_cached_decoder_for_User_session_requirements) {
        _cached_decoder_for_User_session_requirements = $._decodeBitString;
    }
    return _cached_decoder_for_User_session_requirements(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_User_session_requirements */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_User_session_requirements */
let _cached_encoder_for_User_session_requirements: $.ASN1Encoder<User_session_requirements> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_User_session_requirements */

/* START_OF_SYMBOL_DEFINITION _encode_User_session_requirements */
/**
 * @summary Encodes a(n) User_session_requirements into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The User_session_requirements, encoded as an ASN.1 Element.
 */
export function _encode_User_session_requirements(
    value: User_session_requirements,
    elGetter: $.ASN1Encoder<User_session_requirements>
) {
    if (!_cached_encoder_for_User_session_requirements) {
        _cached_encoder_for_User_session_requirements = $._encodeBitString;
    }
    return _cached_encoder_for_User_session_requirements(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_User_session_requirements */

/* eslint-enable */
