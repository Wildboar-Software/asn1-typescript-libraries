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
 * @summary leapSecondActionOID
 * @description
 *
 * Registers confirmed action `leapSecond`: distribute that a
 * leap second is about to occur and set the corresponding
 * protocol parameters (`LeapSecondInfo`). On
 * `synchronizationProtocol`. ITU-T Rec. X.743 (06/98)
 * [§8.4.2](https://www.itu.int/rec/T-REC-X.743-199806-I), §9.7, A.3.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * leapSecondActionOID OBJECT IDENTIFIER ::= {timeManagement action(9) leapSecondAction(2)}
 * ```
 *
 * @constant
 */
export const leapSecondActionOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* action */ 9, /* leapSecondAction */ 2],
    timeManagement
);

/* eslint-enable */
