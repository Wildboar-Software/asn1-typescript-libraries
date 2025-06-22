/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_AssignErr {
    invalidAttributeCertificate = 0,
}


/**
 * @summary AssignErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssignErr  ::=  ENUMERATED {
 *   invalidAttributeCertificate (0),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export type AssignErr = _enum_for_AssignErr | ENUMERATED;


/**
 * @summary AssignErr_invalidAttributeCertificate
 * @constant
 * @type {number}
 */
export const AssignErr_invalidAttributeCertificate: AssignErr = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidAttributeCertificate
 * @constant
 * @type {number}
 */
export const invalidAttributeCertificate: AssignErr = AssignErr_invalidAttributeCertificate; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_AssignErr = $._decodeEnumerated;




export const _encode_AssignErr = $._encodeEnumerated;


/* eslint-enable */
