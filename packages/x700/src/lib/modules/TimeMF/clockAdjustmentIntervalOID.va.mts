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
 * @summary clockAdjustmentIntervalOID
 * @description
 *
 * Registers attribute `clockAdjustmentInterval`: interval
 * over which gradual phase adjustments to the local clock
 * are applied. On `localClock` (`GET-REPLACE`,
 * `SET-BY-CREATE`). ITU-T Rec. X.743 (06/98)
 * [§8.3.1](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * clockAdjustmentIntervalOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) clockAdjustmentInterval(0)}
 * ```
 *
 * @constant
 */
export const clockAdjustmentIntervalOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* clockAdjustmentInterval */ 0],
    timeManagement
);

/* eslint-enable */
