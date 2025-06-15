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
import { absence_advice } from '../IPMSInformationObjects/absence-advice.oa.mjs';
import { change_of_address_advice } from '../IPMSInformationObjects/change-of-address-advice.oa.mjs';
/**
 * @summary AdviceNotifications
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdviceNotifications IPMS-EXTENSION ::= {absence-advice | change-of-address-advice, ...}
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION[]}
 *
 */
export const AdviceNotifications: IPMS_EXTENSION[] = [
    absence_advice,
    change_of_address_advice,
];

/* eslint-enable */
