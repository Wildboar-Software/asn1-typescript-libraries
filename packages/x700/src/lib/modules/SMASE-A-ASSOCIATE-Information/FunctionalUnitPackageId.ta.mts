/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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

/**
 * @summary FunctionalUnitPackageId
 * @description
 *
 * Object identifier naming a functional unit package for SMFU
 * negotiation on an association. Assigned by the standard that
 * defines the package; typical form
 * `{joint-iso-itu-t ms(9) function(2) partX(X)
 * functionalUnitPackage(1)}`. ITU-T Rec. X.701 (08/97)
 * [A.3.3](https://www.itu.int/rec/T-REC-X.701-199708-I),
 * A.3.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FunctionalUnitPackageId  ::=  OBJECT IDENTIFIER
 * ```
 */
export type FunctionalUnitPackageId = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_FunctionalUnitPackageId = $._decodeObjectIdentifier;


export const _encode_FunctionalUnitPackageId = $._encodeObjectIdentifier;


/* eslint-enable */
