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
 * @summary clockResetActionOID
 * @description
 *
 * Registers confirmed action `clockReset`: reset a clock
 * source to a given value (`ClockResetInfo` / clock value).
 * On `clockSource`. ITU-T Rec. X.743 (06/98)
 * [§8.4.1](https://www.itu.int/rec/T-REC-X.743-199806-I), §9.6, A.3.1.
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
