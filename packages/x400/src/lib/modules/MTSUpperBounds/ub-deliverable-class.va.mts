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
 * @summary ub_deliverable_class
 * @description
 *
 * ASN.1 upper-bound INTEGER `ub_deliverable_class`. This argument contains all the sets
 * of criteria that determine which messages shall be delivered to the MTS-user, if any
 * of these criteria are to be changed. If present, this argument replaces the previously
 * registered deliverable-classes. See ITU-T X.411 (1999), §8.4.1.1.1.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-deliverable-class INTEGER ::= 256
 * ```
 *
 * @constant
 */
export const ub_deliverable_class: INTEGER = 256;

/* eslint-enable */
