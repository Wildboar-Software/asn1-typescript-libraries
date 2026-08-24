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
 * @summary ub_interchange_control_reference
 * @description
 *
 * ASN.1 upper-bound INTEGER `ub_interchange_control_reference`. Indicates the
 * Interchange Control Reference as assigned by the Interchange sender. This is
 * semantically identical to the "Interchange control reference" of the EDIFACT UNB
 * segment. See ITU-T X.435 (1999), §8.2.3.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-interchange-control-reference INTEGER ::= 14
 * ```
 *
 * @constant
 */
export const ub_interchange_control_reference: INTEGER = 14;

/* eslint-enable */
