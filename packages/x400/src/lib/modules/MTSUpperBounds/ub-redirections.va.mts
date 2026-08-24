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
 * @summary ub_redirections
 * @description
 *
 * ASN.1 upper-bound INTEGER `ub_redirections`. This argument contains, if the assignment
 * of alternate-recipients is to be changed, an ordered list of the OR-names of
 * recipient-assigned-alternate-recipients and, optionally, one or more
 * redirection-classes associated with each alternate-recipient. If this argument is
 * present its value completely replaces any previous assignment of alternate-
 * recipients. See ITU-T X.411 (1999), §8.4.1.1.1.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-redirections INTEGER ::= 512
 * ```
 *
 * @constant
 */
export const ub_redirections: INTEGER = 512;

/* eslint-enable */
