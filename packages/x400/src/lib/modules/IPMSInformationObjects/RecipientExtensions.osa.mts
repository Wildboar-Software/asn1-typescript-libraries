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
} from 'asn1-ts';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
import { circulation_list_indicator } from '../IPMSHeadingExtensions/circulation-list-indicator.oa.mjs';
import { precedence } from '../IPMSHeadingExtensions/precedence.oa.mjs';
import { recipient_security_request } from '../IPMSSecurityExtensions/recipient-security-request.oa.mjs';
import { PrivateIPMSExtensions } from '../IPMSInformationObjects/PrivateIPMSExtensions.osa.mjs';
/**
 * @summary RecipientExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientExtensions IPMS-EXTENSION ::= {circulation-list-indicator | precedence | recipient-security-request |
 *    PrivateIPMSExtensions, ...}
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION[]}
 *
 */
export const RecipientExtensions: IPMS_EXTENSION[] = [
    circulation_list_indicator,
    precedence,
    recipient_security_request,
    ...PrivateIPMSExtensions,
];

/* eslint-enable */
