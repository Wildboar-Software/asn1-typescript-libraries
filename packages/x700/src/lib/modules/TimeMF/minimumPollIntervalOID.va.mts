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
} from '@wildboar/asn1';
import { timeManagement } from '../TimeMF/timeManagement.va.mjs';
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
export const minimumPollIntervalOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* minimumPollInterval */ 25],
    timeManagement
);

/* eslint-enable */
