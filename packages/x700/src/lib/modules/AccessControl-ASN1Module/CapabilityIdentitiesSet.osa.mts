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
import { type AC_CAP_IDENTITY } from '../AccessControl-ASN1Module/AC-CAP-IDENTITY.oca.mjs';
/**
 * @summary CapabilityIdentitiesSet
 * @description
 *
 * Extensible object set of `AC-CAP-IDENTITY` types used to
 * type unknown-form capability identities. Empty in this
 * module (`{...}`). ITU-T Rec. X.741 Cor.3 (02/2000)
 * [A.6](https://www.itu.int/rec/T-REC-X.741-200002-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CapabilityIdentitiesSet AC-CAP-IDENTITY ::= {...}
 * ```
 *
 * @constant
 * @type {AC_CAP_IDENTITY[]}
 *
 */
export const CapabilityIdentitiesSet: AC_CAP_IDENTITY[] = [];

/* eslint-enable */
