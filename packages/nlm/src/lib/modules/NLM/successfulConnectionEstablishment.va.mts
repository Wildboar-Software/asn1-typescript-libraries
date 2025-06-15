/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import { sseoi } from '../NLM/sseoi.va.mjs';

/**
 * @summary successfulConnectionEstablishment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * successfulConnectionEstablishment OBJECT IDENTIFIER ::= {sseoi informationtype(4) successfulConnectionEstablishment(3)}
 * ```
 *
 * @constant
 */
export const successfulConnectionEstablishment: OBJECT_IDENTIFIER = new _OID(
    [/* informationtype */ 4, /* successfulConnectionEstablishment */ 3],
    sseoi
);

/* eslint-enable */
