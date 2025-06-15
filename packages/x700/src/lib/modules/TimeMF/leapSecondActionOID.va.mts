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
 * @summary leapSecondActionOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * leapSecondActionOID OBJECT IDENTIFIER ::= {timeManagement action(9) leapSecondAction(2)}
 * ```
 *
 * @constant
 */
export const leapSecondActionOID: OBJECT_IDENTIFIER = new _OID(
    [/* action */ 9, /* leapSecondAction */ 2],
    timeManagement
);

/* eslint-enable */
