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
 * @summary g774_03Notification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * g774-03Notification OBJECT IDENTIFIER ::= {sdhProt notification(10)}
 * ```
 *
 * @constant
 */
export const g774_03Notification: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* notification */ 10],
    sdhProt
);

/* eslint-enable */
