/* eslint-disable */
import {
    joint_iso_itu_t,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';

/**
 * @summary grm_Package
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * grm-Package OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) smi(3) part7(7) package(4)}
 * ```
 *
 * @constant
 */
export const grm_Package: OBJECT_IDENTIFIER = new _OID(
    [/* ms */ 9, /* smi */ 3, /* part7 */ 7, /* package */ 4],
    joint_iso_itu_t
);

/* eslint-enable */
