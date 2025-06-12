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

/* START_OF_SYMBOL_DEFINITION _enum_for_CreateVpnLCSError */
export enum _enum_for_CreateVpnLCSError {
    unknownServiceClass = 1,
    requestedBandwidthNotAvailable = 2,
    resourcesUnavailable = 3,
    invalidScheduleConflict = 4,
    contractViolation = 5,
    invalidParameterValue = 6,
    requiredParameterNotSupplied = 7,
    nonExistentSAP = 8,
    sAPnotinVPN = 9,
    serviceClassnotinserviceClassList = 10,
    invalidTerminationDate = 11,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CreateVpnLCSError */

/* START_OF_SYMBOL_DEFINITION CreateVpnLCSError */
/**
 * @summary CreateVpnLCSError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreateVpnLCSError  ::=  ENUMERATED {
 *   unknownServiceClass(1), requestedBandwidthNotAvailable(2),
 *   resourcesUnavailable(3), invalidScheduleConflict(4), contractViolation(5),
 *   invalidParameterValue(6), requiredParameterNotSupplied(7), nonExistentSAP(8),
 *   sAPnotinVPN(9), serviceClassnotinserviceClassList(10),
 *   invalidTerminationDate(11), ...
 *   }
 * ```@enum {number}
 */
export type CreateVpnLCSError = _enum_for_CreateVpnLCSError | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION CreateVpnLCSError */

/* START_OF_SYMBOL_DEFINITION CreateVpnLCSError_unknownServiceClass */
/**
 * @summary CreateVpnLCSError_unknownServiceClass
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_unknownServiceClass: CreateVpnLCSError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateVpnLCSError_unknownServiceClass */

/* START_OF_SYMBOL_DEFINITION unknownServiceClass */
/**
 * @summary unknownServiceClass
 * @constant
 * @type {number}
 */
export const unknownServiceClass: CreateVpnLCSError = CreateVpnLCSError_unknownServiceClass; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownServiceClass */

/* START_OF_SYMBOL_DEFINITION CreateVpnLCSError_requestedBandwidthNotAvailable */
/**
 * @summary CreateVpnLCSError_requestedBandwidthNotAvailable
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_requestedBandwidthNotAvailable: CreateVpnLCSError = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateVpnLCSError_requestedBandwidthNotAvailable */

/* START_OF_SYMBOL_DEFINITION requestedBandwidthNotAvailable */
/**
 * @summary requestedBandwidthNotAvailable
 * @constant
 * @type {number}
 */
export const requestedBandwidthNotAvailable: CreateVpnLCSError = CreateVpnLCSError_requestedBandwidthNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION requestedBandwidthNotAvailable */

/* START_OF_SYMBOL_DEFINITION CreateVpnLCSError_resourcesUnavailable */
/**
 * @summary CreateVpnLCSError_resourcesUnavailable
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_resourcesUnavailable: CreateVpnLCSError = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateVpnLCSError_resourcesUnavailable */

/* START_OF_SYMBOL_DEFINITION resourcesUnavailable */
/**
 * @summary resourcesUnavailable
 * @constant
 * @type {number}
 */
export const resourcesUnavailable: CreateVpnLCSError = CreateVpnLCSError_resourcesUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION resourcesUnavailable */

/* START_OF_SYMBOL_DEFINITION CreateVpnLCSError_invalidScheduleConflict */
/**
 * @summary CreateVpnLCSError_invalidScheduleConflict
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_invalidScheduleConflict: CreateVpnLCSError = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateVpnLCSError_invalidScheduleConflict */

/* START_OF_SYMBOL_DEFINITION invalidScheduleConflict */
/**
 * @summary invalidScheduleConflict
 * @constant
 * @type {number}
 */
export const invalidScheduleConflict: CreateVpnLCSError = CreateVpnLCSError_invalidScheduleConflict; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidScheduleConflict */

/* START_OF_SYMBOL_DEFINITION CreateVpnLCSError_contractViolation */
/**
 * @summary CreateVpnLCSError_contractViolation
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_contractViolation: CreateVpnLCSError = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateVpnLCSError_contractViolation */

/* START_OF_SYMBOL_DEFINITION contractViolation */
/**
 * @summary contractViolation
 * @constant
 * @type {number}
 */
export const contractViolation: CreateVpnLCSError = CreateVpnLCSError_contractViolation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION contractViolation */

/* START_OF_SYMBOL_DEFINITION CreateVpnLCSError_invalidParameterValue */
/**
 * @summary CreateVpnLCSError_invalidParameterValue
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_invalidParameterValue: CreateVpnLCSError = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateVpnLCSError_invalidParameterValue */

/* START_OF_SYMBOL_DEFINITION invalidParameterValue */
/**
 * @summary invalidParameterValue
 * @constant
 * @type {number}
 */
export const invalidParameterValue: CreateVpnLCSError = CreateVpnLCSError_invalidParameterValue; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidParameterValue */

/* START_OF_SYMBOL_DEFINITION CreateVpnLCSError_requiredParameterNotSupplied */
/**
 * @summary CreateVpnLCSError_requiredParameterNotSupplied
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_requiredParameterNotSupplied: CreateVpnLCSError = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateVpnLCSError_requiredParameterNotSupplied */

/* START_OF_SYMBOL_DEFINITION requiredParameterNotSupplied */
/**
 * @summary requiredParameterNotSupplied
 * @constant
 * @type {number}
 */
export const requiredParameterNotSupplied: CreateVpnLCSError = CreateVpnLCSError_requiredParameterNotSupplied; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION requiredParameterNotSupplied */

/* START_OF_SYMBOL_DEFINITION CreateVpnLCSError_nonExistentSAP */
/**
 * @summary CreateVpnLCSError_nonExistentSAP
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_nonExistentSAP: CreateVpnLCSError = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateVpnLCSError_nonExistentSAP */

/* START_OF_SYMBOL_DEFINITION nonExistentSAP */
/**
 * @summary nonExistentSAP
 * @constant
 * @type {number}
 */
export const nonExistentSAP: CreateVpnLCSError = CreateVpnLCSError_nonExistentSAP; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nonExistentSAP */

/* START_OF_SYMBOL_DEFINITION CreateVpnLCSError_sAPnotinVPN */
/**
 * @summary CreateVpnLCSError_sAPnotinVPN
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_sAPnotinVPN: CreateVpnLCSError = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateVpnLCSError_sAPnotinVPN */

/* START_OF_SYMBOL_DEFINITION sAPnotinVPN */
/**
 * @summary sAPnotinVPN
 * @constant
 * @type {number}
 */
export const sAPnotinVPN: CreateVpnLCSError = CreateVpnLCSError_sAPnotinVPN; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sAPnotinVPN */

/* START_OF_SYMBOL_DEFINITION CreateVpnLCSError_serviceClassnotinserviceClassList */
/**
 * @summary CreateVpnLCSError_serviceClassnotinserviceClassList
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_serviceClassnotinserviceClassList: CreateVpnLCSError = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateVpnLCSError_serviceClassnotinserviceClassList */

/* START_OF_SYMBOL_DEFINITION serviceClassnotinserviceClassList */
/**
 * @summary serviceClassnotinserviceClassList
 * @constant
 * @type {number}
 */
export const serviceClassnotinserviceClassList: CreateVpnLCSError = CreateVpnLCSError_serviceClassnotinserviceClassList; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION serviceClassnotinserviceClassList */

/* START_OF_SYMBOL_DEFINITION CreateVpnLCSError_invalidTerminationDate */
/**
 * @summary CreateVpnLCSError_invalidTerminationDate
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_invalidTerminationDate: CreateVpnLCSError = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateVpnLCSError_invalidTerminationDate */

/* START_OF_SYMBOL_DEFINITION invalidTerminationDate */
/**
 * @summary invalidTerminationDate
 * @constant
 * @type {number}
 */
export const invalidTerminationDate: CreateVpnLCSError = CreateVpnLCSError_invalidTerminationDate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidTerminationDate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateVpnLCSError */
let _cached_decoder_for_CreateVpnLCSError: $.ASN1Decoder<CreateVpnLCSError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateVpnLCSError */

/* START_OF_SYMBOL_DEFINITION _decode_CreateVpnLCSError */
/**
 * @summary Decodes an ASN.1 element into a(n) CreateVpnLCSError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CreateVpnLCSError} The decoded data structure.
 */
export function _decode_CreateVpnLCSError(el: _Element) {
    if (!_cached_decoder_for_CreateVpnLCSError) {
        _cached_decoder_for_CreateVpnLCSError = $._decodeEnumerated;
    }
    return _cached_decoder_for_CreateVpnLCSError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CreateVpnLCSError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateVpnLCSError */
let _cached_encoder_for_CreateVpnLCSError: $.ASN1Encoder<CreateVpnLCSError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateVpnLCSError */

/* START_OF_SYMBOL_DEFINITION _encode_CreateVpnLCSError */
/**
 * @summary Encodes a(n) CreateVpnLCSError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateVpnLCSError, encoded as an ASN.1 Element.
 */
export function _encode_CreateVpnLCSError(
    value: CreateVpnLCSError,
    elGetter: $.ASN1Encoder<CreateVpnLCSError>
) {
    if (!_cached_encoder_for_CreateVpnLCSError) {
        _cached_encoder_for_CreateVpnLCSError = $._encodeEnumerated;
    }
    return _cached_encoder_for_CreateVpnLCSError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CreateVpnLCSError */

/* eslint-enable */
