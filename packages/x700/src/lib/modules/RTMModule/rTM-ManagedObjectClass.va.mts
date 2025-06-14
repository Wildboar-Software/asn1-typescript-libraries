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

/* START_OF_SYMBOL_DEFINITION rTM_ManagedObjectClass */
/**
 * @summary rTM_ManagedObjectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rTM-ManagedObjectClass OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part22(22) managedObjectClass(3)}
 * ```
 *
 * @constant
 */
export const rTM_ManagedObjectClass: OBJECT_IDENTIFIER = new _OID(
    [/* ms */ 9, /* function */ 2, /* part22 */ 22, /* managedObjectClass */ 3],
    joint_iso_itu_t
);
/* END_OF_SYMBOL_DEFINITION rTM_ManagedObjectClass */

/* eslint-enable */
