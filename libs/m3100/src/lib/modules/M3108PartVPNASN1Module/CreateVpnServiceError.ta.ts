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

/* START_OF_SYMBOL_DEFINITION _enum_for_CreateVpnServiceError */
export enum _enum_for_CreateVpnServiceError {
    invalidServiceClasses = 1,
    duplicatedVPNIdentifier = 2,
    invalidSAG = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CreateVpnServiceError */

/* START_OF_SYMBOL_DEFINITION CreateVpnServiceError */
/**
 * @summary CreateVpnServiceError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreateVpnServiceError  ::=  ENUMERATED {
 *   invalidServiceClasses(1), duplicatedVPNIdentifier(2), invalidSAG(3), ...
 *   }
 * ```@enum {number}
 */
export type CreateVpnServiceError =
    | _enum_for_CreateVpnServiceError
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION CreateVpnServiceError */

/* START_OF_SYMBOL_DEFINITION CreateVpnServiceError_invalidServiceClasses */
/**
 * @summary CreateVpnServiceError_invalidServiceClasses
 * @constant
 * @type {number}
 */
export const CreateVpnServiceError_invalidServiceClasses: CreateVpnServiceError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateVpnServiceError_invalidServiceClasses */

/* START_OF_SYMBOL_DEFINITION invalidServiceClasses */
/**
 * @summary invalidServiceClasses
 * @constant
 * @type {number}
 */
export const invalidServiceClasses: CreateVpnServiceError = CreateVpnServiceError_invalidServiceClasses; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidServiceClasses */

/* START_OF_SYMBOL_DEFINITION CreateVpnServiceError_duplicatedVPNIdentifier */
/**
 * @summary CreateVpnServiceError_duplicatedVPNIdentifier
 * @constant
 * @type {number}
 */
export const CreateVpnServiceError_duplicatedVPNIdentifier: CreateVpnServiceError = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateVpnServiceError_duplicatedVPNIdentifier */

/* START_OF_SYMBOL_DEFINITION duplicatedVPNIdentifier */
/**
 * @summary duplicatedVPNIdentifier
 * @constant
 * @type {number}
 */
export const duplicatedVPNIdentifier: CreateVpnServiceError = CreateVpnServiceError_duplicatedVPNIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION duplicatedVPNIdentifier */

/* START_OF_SYMBOL_DEFINITION CreateVpnServiceError_invalidSAG */
/**
 * @summary CreateVpnServiceError_invalidSAG
 * @constant
 * @type {number}
 */
export const CreateVpnServiceError_invalidSAG: CreateVpnServiceError = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateVpnServiceError_invalidSAG */

/* START_OF_SYMBOL_DEFINITION invalidSAG */
/**
 * @summary invalidSAG
 * @constant
 * @type {number}
 */
export const invalidSAG: CreateVpnServiceError = CreateVpnServiceError_invalidSAG; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidSAG */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateVpnServiceError */
let _cached_decoder_for_CreateVpnServiceError: $.ASN1Decoder<CreateVpnServiceError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateVpnServiceError */

/* START_OF_SYMBOL_DEFINITION _decode_CreateVpnServiceError */
/**
 * @summary Decodes an ASN.1 element into a(n) CreateVpnServiceError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CreateVpnServiceError} The decoded data structure.
 */
export function _decode_CreateVpnServiceError(el: _Element) {
    if (!_cached_decoder_for_CreateVpnServiceError) {
        _cached_decoder_for_CreateVpnServiceError = $._decodeEnumerated;
    }
    return _cached_decoder_for_CreateVpnServiceError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CreateVpnServiceError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateVpnServiceError */
let _cached_encoder_for_CreateVpnServiceError: $.ASN1Encoder<CreateVpnServiceError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateVpnServiceError */

/* START_OF_SYMBOL_DEFINITION _encode_CreateVpnServiceError */
/**
 * @summary Encodes a(n) CreateVpnServiceError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateVpnServiceError, encoded as an ASN.1 Element.
 */
export function _encode_CreateVpnServiceError(
    value: CreateVpnServiceError,
    elGetter: $.ASN1Encoder<CreateVpnServiceError>
) {
    if (!_cached_encoder_for_CreateVpnServiceError) {
        _cached_encoder_for_CreateVpnServiceError = $._encodeEnumerated;
    }
    return _cached_encoder_for_CreateVpnServiceError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CreateVpnServiceError */

/* eslint-enable */
