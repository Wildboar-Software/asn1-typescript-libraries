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
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.mjs';
/* START_OF_SYMBOL_DEFINITION ReportDeliveryResultExtensions */
/**
 * @summary ReportDeliveryResultExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportDeliveryResultExtensions EXTENSION ::= {PrivateExtensions, ...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const ReportDeliveryResultExtensions: EXTENSION[] = [
    ...PrivateExtensions,
];
/* END_OF_SYMBOL_DEFINITION ReportDeliveryResultExtensions */

/* eslint-enable */
