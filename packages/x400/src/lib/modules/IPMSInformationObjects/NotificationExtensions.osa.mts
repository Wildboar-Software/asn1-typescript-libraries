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
import { ipn_security_response } from '../IPMSSecurityExtensions/ipn-security-response.oa.mjs';
import { PrivateIPMSExtensions } from '../IPMSInformationObjects/PrivateIPMSExtensions.osa.mjs';
/**
 * @summary NotificationExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotificationExtensions IPMS-EXTENSION ::= {ipn-security-response | PrivateIPMSExtensions, ...}
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION[]}
 *
 */
export const NotificationExtensions: IPMS_EXTENSION[] = [
    ipn_security_response,
    ...PrivateIPMSExtensions,
];

/* eslint-enable */
