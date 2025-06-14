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

/* START_OF_SYMBOL_DEFINITION part17MRelClass */
/**
 * @summary part17MRelClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * part17MRelClass OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part17(17) relationshipClass(11)}
 * ```
 *
 * @constant
 */
export const part17MRelClass: OBJECT_IDENTIFIER = new _OID(
    [/* ms */ 9, /* function */ 2, /* part17 */ 17, /* relationshipClass */ 11],
    joint_iso_itu_t
);
/* END_OF_SYMBOL_DEFINITION part17MRelClass */

/* eslint-enable */
