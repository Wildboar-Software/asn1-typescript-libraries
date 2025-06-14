/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import { timeManagement } from '../TimeMF/timeManagement.va.mjs';
/* START_OF_SYMBOL_DEFINITION minimumPollIntervalOID */
/**
 * @summary minimumPollIntervalOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * minimumPollIntervalOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) minimumPollInterval(25)}
 * ```
 *
 * @constant
 */
export const minimumPollIntervalOID: OBJECT_IDENTIFIER = new _OID(
    [/* attribute */ 7, /* minimumPollInterval */ 25],
    timeManagement
);
/* END_OF_SYMBOL_DEFINITION minimumPollIntervalOID */

/* eslint-enable */
