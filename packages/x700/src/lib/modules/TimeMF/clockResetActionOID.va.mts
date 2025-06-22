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
 * @summary clockResetActionOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * clockResetActionOID OBJECT IDENTIFIER ::= {timeManagement action(9) clockResetAction(1)}
 * ```
 *
 * @constant
 */
export const clockResetActionOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* action */ 9, /* clockResetAction */ 1],
    timeManagement
);

/* eslint-enable */
