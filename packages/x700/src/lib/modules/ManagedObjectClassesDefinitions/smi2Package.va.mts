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

/* START_OF_SYMBOL_DEFINITION smi2Package */
/**
 * @summary smi2Package
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * smi2Package OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) smi(3) part2(2) package(4)}
 * ```
 *
 * @constant
 */
export const smi2Package: OBJECT_IDENTIFIER = new _OID(
    [/* ms */ 9, /* smi */ 3, /* part2 */ 2, /* package */ 4],
    joint_iso_itu_t
);
/* END_OF_SYMBOL_DEFINITION smi2Package */

/* eslint-enable */
