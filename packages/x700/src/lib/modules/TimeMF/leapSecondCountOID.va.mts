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
/**
 * @summary leapSecondCountOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * leapSecondCountOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) leapSecondCount(14)}
 * ```
 *
 * @constant
 */
export const leapSecondCountOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* leapSecondCount */ 14],
    timeManagement
);

/* eslint-enable */
