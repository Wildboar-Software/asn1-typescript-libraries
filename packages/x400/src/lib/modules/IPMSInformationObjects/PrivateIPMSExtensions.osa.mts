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
import { type IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/**
 * @summary PrivateIPMSExtensions
 * @description
 *
 * The Extensions heading field (D no extensions (i.e., members)) conveys information
 * accommodated by no other heading field. It comprises a Set of zero or more IPMS
 * extensions each conveying one such information item. See ITU-T X.420 (1999), §7.2.17.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateIPMSExtensions IPMS-EXTENSION ::= {...}
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION[]}
 *
 */
export const PrivateIPMSExtensions: IPMS_EXTENSION[] = [];

/* eslint-enable */
