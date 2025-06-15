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
import { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.mjs';
/**
 * @summary ABSTRACT_ERROR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ABSTRACT-ERROR ::= ERROR
 * ```
 *
 * @interface
 */
export type ABSTRACT_ERROR <ParameterType> = ERROR <ParameterType>;

/* eslint-enable */
