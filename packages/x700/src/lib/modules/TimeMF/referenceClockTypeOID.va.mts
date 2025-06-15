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
 * @summary referenceClockTypeOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * referenceClockTypeOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) referenceClockType(29)}
 * ```
 *
 * @constant
 */
export const referenceClockTypeOID: OBJECT_IDENTIFIER = new _OID(
    [/* attribute */ 7, /* referenceClockType */ 29],
    timeManagement
);

/* eslint-enable */
