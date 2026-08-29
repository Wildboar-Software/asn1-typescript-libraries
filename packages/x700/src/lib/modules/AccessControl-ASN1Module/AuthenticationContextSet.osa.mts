/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { type AC_AUTH_CONTEXT } from '../AccessControl-ASN1Module/AC-AUTH-CONTEXT.oca.mjs';
/**
 * @summary AuthenticationContextSet
 * @description
 *
 * Extensible object set of `AC-AUTH-CONTEXT` policies used
 * to type `AuthenticationContext.requirements`. Empty in
 * this module (`{...}`). ITU-T Rec. X.741 Cor.3 (02/2000)
 * [A.6](https://www.itu.int/rec/T-REC-X.741-200002-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationContextSet AC-AUTH-CONTEXT ::= {...}
 * ```
 *
 * @constant
 * @type {AC_AUTH_CONTEXT[]}
 *
 */
export const AuthenticationContextSet: AC_AUTH_CONTEXT[] = [];

/* eslint-enable */
