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
} from "asn1-ts";

/* START_OF_SYMBOL_DEFINITION der */
/**
 * @summary der
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * der OBJECT IDENTIFIER ::= {joint-iso-itu-t asn1(1) ber-derived(2) distinguished-encoding(1)}
 * ```
 *
 * @constant
 */
export const der: OBJECT_IDENTIFIER = new _OID(
    [/* asn1 */ 1, /* ber-derived */ 2, /* distinguished-encoding */ 1],
    joint_iso_itu_t
);
/* END_OF_SYMBOL_DEFINITION der */

/* eslint-enable */
