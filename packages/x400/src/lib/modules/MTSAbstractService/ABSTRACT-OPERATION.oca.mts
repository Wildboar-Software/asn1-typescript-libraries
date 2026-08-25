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
import { type OPERATION } from '@wildboar/rose';
/**
 * @summary ABSTRACT_OPERATION
 * @description
 *
 * ROSE `OPERATION` alias used by MTS, MS, and IPMS abstract operations. See ITU-T X.411
 * (1999).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ABSTRACT-OPERATION ::= OPERATION
 * ```
 *
 * @interface
 */
export type ABSTRACT_OPERATION <Argument = any, Result = any> = OPERATION <Argument, Result>;

/* eslint-enable */
