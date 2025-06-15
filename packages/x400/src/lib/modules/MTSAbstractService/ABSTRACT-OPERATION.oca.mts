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
} from 'asn1-ts';
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
/**
 * @summary ABSTRACT_OPERATION
 * @description
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
