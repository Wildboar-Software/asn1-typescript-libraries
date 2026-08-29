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
 * @summary protocolResetActionOID
 * @description
 *
 * Registers confirmed action `protocolReset`: restart the
 * time synchronization protocol (`ProtocolResetInfo`). On
 * `synchronizationProtocol`. ITU-T Rec. X.743 (06/98)
 * [§8.4.3](https://www.itu.int/rec/T-REC-X.743-199806-I), §9.8, A.3.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protocolResetActionOID OBJECT IDENTIFIER ::= {timeManagement action(9) protocolResetAction(3)}
 * ```
 *
 * @constant
 */
export const protocolResetActionOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* action */ 9, /* protocolResetAction */ 3],
    timeManagement
);

/* eslint-enable */
