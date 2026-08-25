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
 * @summary ub_authorization_information
 * @description
 *
 * The Authorization Information indicates who authorized the interchange. This is
 * semantically identical to the "Authorization information" in the ANSIX12 Interchange.
 * See ITU-T X.435 (1999), §8.2.3.12.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-authorization-information INTEGER ::= 10
 * ```
 *
 * @constant
 */
export const ub_authorization_information: INTEGER = 10;

/* eslint-enable */
