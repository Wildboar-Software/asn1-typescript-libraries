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
import { sdhProt } from '../SDHProtASN1/sdhProt.va.mjs';

/**
 * @summary g774_03Package
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * g774-03Package OBJECT IDENTIFIER ::= {sdhProt package(4)}
 * ```
 *
 * @constant
 */
export const g774_03Package: OBJECT_IDENTIFIER = new _OID(
    [/* package */ 4],
    sdhProt
);

/* eslint-enable */
