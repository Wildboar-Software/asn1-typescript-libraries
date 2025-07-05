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
import { AdviceNotifications } from '../IPMSInformationObjects/AdviceNotifications.osa.mjs';
import { PrivateIPMSExtensions } from '../IPMSInformationObjects/PrivateIPMSExtensions.osa.mjs';
/**
 * @summary OtherNotifications
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherNotifications IPMS-EXTENSION ::= {AdviceNotifications | PrivateIPMSExtensions, ...}
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION[]}
 *
 */
export const OtherNotifications: IPMS_EXTENSION[] = [
    ...AdviceNotifications,
    ...PrivateIPMSExtensions,
];

/* eslint-enable */
