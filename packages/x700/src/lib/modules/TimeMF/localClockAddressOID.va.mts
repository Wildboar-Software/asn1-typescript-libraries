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
 * @summary localClockAddressOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * localClockAddressOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) localClockAddress(16)}
 * ```
 *
 * @constant
 */
export const localClockAddressOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* localClockAddress */ 16],
    timeManagement
);

/* eslint-enable */
