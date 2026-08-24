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
 * @summary ub_security_labels
 * @description
 *
 * ASN.1 upper-bound INTEGER `ub_security_labels`. This component contains the
 * security-labels of the MTS-user, if they are to be constrained within a
 * deliverable-class. If the security-labels of the message to be delivered do not match
 * those specified by the deliverable-security-labels, then the message does not satisfy
 * the constraints of this deliverable-class and no other criteria of the
 * deliverable-class need be considered. See ITU-T X.411 (1999), §8.4.1.1.1.3.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-security-labels INTEGER ::= 256
 * ```
 *
 * @constant
 */
export const ub_security_labels: INTEGER = 256;

/* eslint-enable */
