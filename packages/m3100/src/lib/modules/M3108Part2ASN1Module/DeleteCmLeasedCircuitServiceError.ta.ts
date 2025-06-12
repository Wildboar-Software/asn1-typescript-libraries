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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_DeleteCmLeasedCircuitServiceError */
export enum _enum_for_DeleteCmLeasedCircuitServiceError {
    alreadyDeleted = 0,
    contractViolation = 1,
    invalidCircuitNumber = 2,
    unlockedAdministrativeState = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DeleteCmLeasedCircuitServiceError */

/* START_OF_SYMBOL_DEFINITION DeleteCmLeasedCircuitServiceError */
/**
 * @summary DeleteCmLeasedCircuitServiceError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteCmLeasedCircuitServiceError  ::=  ENUMERATED {
 *   alreadyDeleted(0), contractViolation(1), invalidCircuitNumber(2),
 *   unlockedAdministrativeState(3), ...
 *   }
 * ```@enum {number}
 */
export type DeleteCmLeasedCircuitServiceError =
    | _enum_for_DeleteCmLeasedCircuitServiceError
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION DeleteCmLeasedCircuitServiceError */

/* START_OF_SYMBOL_DEFINITION DeleteCmLeasedCircuitServiceError_alreadyDeleted */
/**
 * @summary DeleteCmLeasedCircuitServiceError_alreadyDeleted
 * @constant
 * @type {number}
 */
export const DeleteCmLeasedCircuitServiceError_alreadyDeleted: DeleteCmLeasedCircuitServiceError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteCmLeasedCircuitServiceError_alreadyDeleted */

/* START_OF_SYMBOL_DEFINITION alreadyDeleted */
/**
 * @summary alreadyDeleted
 * @constant
 * @type {number}
 */
export const alreadyDeleted: DeleteCmLeasedCircuitServiceError = DeleteCmLeasedCircuitServiceError_alreadyDeleted; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION alreadyDeleted */

/* START_OF_SYMBOL_DEFINITION DeleteCmLeasedCircuitServiceError_contractViolation */
/**
 * @summary DeleteCmLeasedCircuitServiceError_contractViolation
 * @constant
 * @type {number}
 */
export const DeleteCmLeasedCircuitServiceError_contractViolation: DeleteCmLeasedCircuitServiceError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteCmLeasedCircuitServiceError_contractViolation */

/* START_OF_SYMBOL_DEFINITION contractViolation */
/**
 * @summary contractViolation
 * @constant
 * @type {number}
 */
export const contractViolation: DeleteCmLeasedCircuitServiceError = DeleteCmLeasedCircuitServiceError_contractViolation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION contractViolation */

/* START_OF_SYMBOL_DEFINITION DeleteCmLeasedCircuitServiceError_invalidCircuitNumber */
/**
 * @summary DeleteCmLeasedCircuitServiceError_invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const DeleteCmLeasedCircuitServiceError_invalidCircuitNumber: DeleteCmLeasedCircuitServiceError = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteCmLeasedCircuitServiceError_invalidCircuitNumber */

/* START_OF_SYMBOL_DEFINITION invalidCircuitNumber */
/**
 * @summary invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const invalidCircuitNumber: DeleteCmLeasedCircuitServiceError = DeleteCmLeasedCircuitServiceError_invalidCircuitNumber; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidCircuitNumber */

/* START_OF_SYMBOL_DEFINITION DeleteCmLeasedCircuitServiceError_unlockedAdministrativeState */
/**
 * @summary DeleteCmLeasedCircuitServiceError_unlockedAdministrativeState
 * @constant
 * @type {number}
 */
export const DeleteCmLeasedCircuitServiceError_unlockedAdministrativeState: DeleteCmLeasedCircuitServiceError = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteCmLeasedCircuitServiceError_unlockedAdministrativeState */

/* START_OF_SYMBOL_DEFINITION unlockedAdministrativeState */
/**
 * @summary unlockedAdministrativeState
 * @constant
 * @type {number}
 */
export const unlockedAdministrativeState: DeleteCmLeasedCircuitServiceError = DeleteCmLeasedCircuitServiceError_unlockedAdministrativeState; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unlockedAdministrativeState */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteCmLeasedCircuitServiceError */
let _cached_decoder_for_DeleteCmLeasedCircuitServiceError: $.ASN1Decoder<DeleteCmLeasedCircuitServiceError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteCmLeasedCircuitServiceError */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteCmLeasedCircuitServiceError */
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteCmLeasedCircuitServiceError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteCmLeasedCircuitServiceError} The decoded data structure.
 */
export function _decode_DeleteCmLeasedCircuitServiceError(el: _Element) {
    if (!_cached_decoder_for_DeleteCmLeasedCircuitServiceError) {
        _cached_decoder_for_DeleteCmLeasedCircuitServiceError =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_DeleteCmLeasedCircuitServiceError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeleteCmLeasedCircuitServiceError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteCmLeasedCircuitServiceError */
let _cached_encoder_for_DeleteCmLeasedCircuitServiceError: $.ASN1Encoder<DeleteCmLeasedCircuitServiceError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteCmLeasedCircuitServiceError */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteCmLeasedCircuitServiceError */
/**
 * @summary Encodes a(n) DeleteCmLeasedCircuitServiceError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteCmLeasedCircuitServiceError, encoded as an ASN.1 Element.
 */
export function _encode_DeleteCmLeasedCircuitServiceError(
    value: DeleteCmLeasedCircuitServiceError,
    elGetter: $.ASN1Encoder<DeleteCmLeasedCircuitServiceError>
) {
    if (!_cached_encoder_for_DeleteCmLeasedCircuitServiceError) {
        _cached_encoder_for_DeleteCmLeasedCircuitServiceError =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_DeleteCmLeasedCircuitServiceError(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_DeleteCmLeasedCircuitServiceError */

/* eslint-enable */
