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
 * @summary leapSecondPkgOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * leapSecondPkgOID OBJECT IDENTIFIER ::= {timeManagement package(4) leapSecondPkg(1)}
 * ```
 *
 * @constant
 */
export const leapSecondPkgOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* package */ 4, /* leapSecondPkg */ 1],
    timeManagement
);

/* eslint-enable */
