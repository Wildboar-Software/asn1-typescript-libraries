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
import { PrivateIPMSExtensions } from '../IPMSInformationObjects/PrivateIPMSExtensions.osa.mjs';
/* START_OF_SYMBOL_DEFINITION RNExtensions */
/**
 * @summary RNExtensions
 * @description
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
/* END_OF_SYMBOL_DEFINITION RNExtensions */

/* eslint-enable */
