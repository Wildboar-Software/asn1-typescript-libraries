/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';

/**
 * @summary ub_auto_actions
 * @description
 *
 * ASN.1 upper-bound INTEGER `ub_auto_actions`. An auto-action is an action performed
 * automatically by the MS whenever the conditions defined for its performance are
 * satisfied. These conditions are registered with the MS either by subscription, or by
 * means of the Register-MS abstract- operation (see 8.2.5). See ITU-T X.413 (1999),
 * §6.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-auto-actions INTEGER ::= 128
 * ```
 *
 * @constant
 */
export const ub_auto_actions: INTEGER = 128;

/* eslint-enable */
