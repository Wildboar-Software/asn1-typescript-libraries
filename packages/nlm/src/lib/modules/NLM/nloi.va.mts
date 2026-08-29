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
import { nl } from '../NLM/nl.va.mjs';

/**
 * @summary nloi
 * @description
 *
 * NLM module root `{nl nLM(2)}`. All NLM GDMO registrations and this ASN.1
 * module hang under this arc.
 * ITU-T Rec. X.283 (12/97)
 * [§6.1.1](https://www.itu.int/rec/T-REC-X.283-199712-I), Annex A.
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
