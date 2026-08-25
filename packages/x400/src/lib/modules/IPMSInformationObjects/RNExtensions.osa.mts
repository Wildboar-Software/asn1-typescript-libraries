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
import { PrivateIPMSExtensions } from '../IPMSInformationObjects/PrivateIPMSExtensions.osa.mjs';
/**
 * @summary RNExtensions
 * @description
 *
 * The Extensions heading field (D no extensions (i.e., members)) conveys information
 * accommodated by no other heading field. It comprises a Set of zero or more IPMS
 * extensions each conveying one such information item. See ITU-T X.420 (1999), §7.2.17.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RNExtensions IPMS-EXTENSION ::= {PrivateIPMSExtensions, ...}
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION[]}
 *
 */
export const RNExtensions: IPMS_EXTENSION[] = [...PrivateIPMSExtensions];

/* eslint-enable */
