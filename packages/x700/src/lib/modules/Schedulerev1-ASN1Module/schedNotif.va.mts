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

/* START_OF_SYMBOL_DEFINITION schedNotif */
/**
 * @summary schedNotif
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * schedNotif OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part15(15) notification(10)}
 * ```
 *
 * @constant
 */
export const schedNotif: OBJECT_IDENTIFIER = new _OID(
    [/* ms */ 9, /* function */ 2, /* part15 */ 15, /* notification */ 10],
    joint_iso_itu_t
);
/* END_OF_SYMBOL_DEFINITION schedNotif */

/* eslint-enable */
