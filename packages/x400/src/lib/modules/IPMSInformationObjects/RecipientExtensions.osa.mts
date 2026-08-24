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
import { circulation_list_indicator } from '../IPMSHeadingExtensions/circulation-list-indicator.oa.mjs';
import { precedence } from '../IPMSHeadingExtensions/precedence.oa.mjs';
import { recipient_security_request } from '../IPMSSecurityExtensions/recipient-security-request.oa.mjs';
import { PrivateIPMSExtensions } from '../IPMSInformationObjects/PrivateIPMSExtensions.osa.mjs';
/**
 * @summary RecipientExtensions
 * @description
 *
 * Information object set `RecipientExtensions`. The Extensions heading field (D no
 * extensions (i.e., members)) conveys information accommodated by no other heading
 * field. It comprises a Set of zero or more IPMS extensions each conveying one such
 * information item. See ITU-T X.420 (1999), §7.2.17.
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
