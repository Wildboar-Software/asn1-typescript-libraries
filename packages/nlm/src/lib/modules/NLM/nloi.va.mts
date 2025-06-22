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
import { nl } from '../NLM/nl.va.mjs';

/**
 * @summary nloi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nloi OBJECT IDENTIFIER ::= {nl nLM(2)}
 * ```
 *
 * @constant
 */
export const nloi: OBJECT_IDENTIFIER = _OID.fromParts([/* nLM */ 2], nl);

/* eslint-enable */
