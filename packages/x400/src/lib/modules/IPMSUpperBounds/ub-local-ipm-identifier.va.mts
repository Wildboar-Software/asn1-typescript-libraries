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
 * @summary ub_local_ipm_identifier
 * @description
 *
 * ASN.1 upper-bound INTEGER `ub_local_ipm_identifier`. An IPM identifier is an
 * information item that unambiguously and uniquely identifies an IPM, distinguishing it
 * from all other IPMs ever conveyed by any user. IPMIdentifier ::= [APPLICATION 11] SET
 * { user ORName OPTIONAL, user-relative-identifier LocalIPMIdentifier} An IPM identifier
 * has the following components: a) User (O): Identifies the user who originates the IPM.
 * See ITU-T X.420 (1999), §7.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-local-ipm-identifier INTEGER ::= 64
 * ```
 *
 * @constant
 */
export const ub_local_ipm_identifier: INTEGER = 64;

/* eslint-enable */
