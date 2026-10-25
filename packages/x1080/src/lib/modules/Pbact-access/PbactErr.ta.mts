/* eslint-disable */
import {
    type ENUMERATED,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_PbactErr {
    noSuchService = 0,
    invalidOperationForService = 1,
    insufficientAccessRigth = 2,
    noSuchObject = 3,
    noSuchAttribute = 4,
    noSuchAttributeValue = 5,
    objectAlreadyExists = 6,
    attributeAlreadyExists = 7,
    attributeValueAlreadyExists = 8,
    noInformation = 9,
}


/**
 * @summary PbactErr
 * @description
 *
 * PBACT content error (`ActErr`) on an assertion operation.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PbactErr  ::=  ENUMERATED {
 *   noSuchService,
 *   invalidOperationForService,
 *   insufficientAccessRigth,
 *   noSuchObject,
 *   noSuchAttribute,
 *   noSuchAttributeValue,
 *   objectAlreadyExists,
 *   attributeAlreadyExists,
 *   attributeValueAlreadyExists,
 *   noInformation,
 *   ... }
 * ```
 *
 * @enum {number}
 */
export type PbactErr = _enum_for_PbactErr | ENUMERATED;


/**
 * @summary PbactErr_noSuchService
 * @description
 *
 * Service not permitted to know about, or unsupported.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const PbactErr_noSuchService = _enum_for_PbactErr.noSuchService satisfies PbactErr; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noSuchService
 * @description
 *
 * Service not permitted to know about, or unsupported.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const noSuchService = PbactErr_noSuchService satisfies PbactErr; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PbactErr_invalidOperationForService
 * @description
 *
 * Operation not relevant for the service.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const PbactErr_invalidOperationForService = _enum_for_PbactErr.invalidOperationForService satisfies PbactErr; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidOperationForService
 * @description
 *
 * Operation not relevant for the service.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const invalidOperationForService = PbactErr_invalidOperationForService satisfies PbactErr; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PbactErr_insufficientAccessRigth
 * @description
 *
 * No permission for the service or operation. Spec name
 * `insufficientAccessRight`.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const PbactErr_insufficientAccessRigth = _enum_for_PbactErr.insufficientAccessRigth satisfies PbactErr; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary insufficientAccessRigth
 * @description
 *
 * No permission for the service or operation. Spec name
 * `insufficientAccessRight`.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const insufficientAccessRigth = PbactErr_insufficientAccessRigth satisfies PbactErr; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PbactErr_noSuchObject
 * @description
 *
 * Object missing, or the accessor is not allowed to know it exists.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const PbactErr_noSuchObject = _enum_for_PbactErr.noSuchObject satisfies PbactErr; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noSuchObject
 * @description
 *
 * Object missing, or the accessor is not allowed to know it exists.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const noSuchObject = PbactErr_noSuchObject satisfies PbactErr; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PbactErr_noSuchAttribute
 * @description
 *
 * Attribute missing, or the accessor is not allowed to know it
 * exists.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const PbactErr_noSuchAttribute = _enum_for_PbactErr.noSuchAttribute satisfies PbactErr; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noSuchAttribute
 * @description
 *
 * Attribute missing, or the accessor is not allowed to know it
 * exists.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const noSuchAttribute = PbactErr_noSuchAttribute satisfies PbactErr; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PbactErr_noSuchAttributeValue
 * @description
 *
 * Value missing, or the accessor is not allowed to know it exists.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const PbactErr_noSuchAttributeValue = _enum_for_PbactErr.noSuchAttributeValue satisfies PbactErr; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noSuchAttributeValue
 * @description
 *
 * Value missing, or the accessor is not allowed to know it exists.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const noSuchAttributeValue = PbactErr_noSuchAttributeValue satisfies PbactErr; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PbactErr_objectAlreadyExists
 * @description
 *
 * Add DN collision, and the accessor may know the existing object.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const PbactErr_objectAlreadyExists = _enum_for_PbactErr.objectAlreadyExists satisfies PbactErr; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary objectAlreadyExists
 * @description
 *
 * Add DN collision, and the accessor may know the existing object.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const objectAlreadyExists = PbactErr_objectAlreadyExists satisfies PbactErr; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PbactErr_attributeAlreadyExists
 * @description
 *
 * Add an attribute type that already exists, and the accessor may
 * know it.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const PbactErr_attributeAlreadyExists = _enum_for_PbactErr.attributeAlreadyExists satisfies PbactErr; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary attributeAlreadyExists
 * @description
 *
 * Add an attribute type that already exists, and the accessor may
 * know it.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const attributeAlreadyExists = PbactErr_attributeAlreadyExists satisfies PbactErr; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PbactErr_attributeValueAlreadyExists
 * @description
 *
 * Add a value that already exists, and the accessor may know it.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const PbactErr_attributeValueAlreadyExists = _enum_for_PbactErr.attributeValueAlreadyExists satisfies PbactErr; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary attributeValueAlreadyExists
 * @description
 *
 * Add a value that already exists, and the accessor may know it.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const attributeValueAlreadyExists = PbactErr_attributeValueAlreadyExists satisfies PbactErr; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PbactErr_noInformation
 * @description
 *
 * Requested information is unavailable, or the accessor may not know
 * it exists.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const PbactErr_noInformation = _enum_for_PbactErr.noInformation satisfies PbactErr; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noInformation
 * @description
 *
 * Requested information is unavailable, or the accessor may not know
 * it exists.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.13](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const noInformation = PbactErr_noInformation satisfies PbactErr; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_PbactErr = $._decodeEnumerated;




export const _encode_PbactErr = $._encodeEnumerated;


/* eslint-enable */
