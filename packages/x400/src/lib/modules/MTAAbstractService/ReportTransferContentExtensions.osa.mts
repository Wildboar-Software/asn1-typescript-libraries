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
import { type EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
import { content_correlator } from '../MTSAbstractService/content-correlator.oa.mjs';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.mjs';
/**
 * @summary ReportTransferContentExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportTransferContentExtensions EXTENSION ::= {-- May contain the following extensions, private extensions, and future standardised extensions,
 *    -- at most one instance of each extension type:
 *    content-correlator | PrivateExtensions, ...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const ReportTransferContentExtensions: EXTENSION[] = [
    content_correlator,
    ...PrivateExtensions,
];

/* eslint-enable */
