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
 * Privilege-assignment content error. Spec also names
 * `invalidDelegationPath` and `invalidPublicKeyCertificate` (this
 * ENUMERATED is extensible). None of the three are further defined.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§9](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
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
 * @description
 *
 * Named by §9; the spec does not further define it.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§9](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const AssignErr_invalidAttributeCertificate: AssignErr = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidAttributeCertificate
 * @description
 *
 * Named by §9; the spec does not further define it.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§9](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 * @type {number}
 */
export const invalidAttributeCertificate: AssignErr = AssignErr_invalidAttributeCertificate; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_AssignErr = $._decodeEnumerated;




export const _encode_AssignErr = $._encodeEnumerated;


/* eslint-enable */
