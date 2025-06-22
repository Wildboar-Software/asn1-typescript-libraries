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
import { sdhProt } from '../SDHProtASN1/sdhProt.va.mjs';

/**
 * @summary g774_03Parameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * g774-03Parameter OBJECT IDENTIFIER ::= {sdhProt parameter(5)}
 * ```
 *
 * @constant
 */
export const g774_03Parameter: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* parameter */ 5],
    sdhProt
);

/* eslint-enable */
