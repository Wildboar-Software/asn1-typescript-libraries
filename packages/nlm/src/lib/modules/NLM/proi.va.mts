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
} from '@wildboar/asn1';
import { nloi } from '../NLM/nloi.va.mjs';

/**
 * @summary proi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * proi OBJECT IDENTIFIER ::= {nloi parameter(5)}
 * ```
 *
 * @constant
 */
export const proi: OBJECT_IDENTIFIER = _OID.fromParts([/* parameter */ 5], nloi);

/* eslint-enable */
