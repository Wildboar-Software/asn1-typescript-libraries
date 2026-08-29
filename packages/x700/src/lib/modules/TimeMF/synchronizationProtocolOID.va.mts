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
 * @summary synchronizationProtocolOID
 * @description
 *
 * Registers the `synchronizationProtocol` managed object
 * class: one instantiation of a protocol that exchanges time
 * among local clocks. Attributes identify the instance and
 * type, the clock being synchronized, and peer clocks.
 * Actions: `leapSecond`, `protocolReset`. Subclassed for
 * specific protocols (e.g. `ntpProtocol`). ITU-T Rec. X.743 (06/98)
 * [§8.2.4](https://www.itu.int/rec/T-REC-X.743-199806-I), A.1.4, §7.2.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * synchronizationProtocolOID OBJECT IDENTIFIER ::= {timeManagement managedObjectClass(3) synchronizationProtocol(3)}
 * ```
 *
 * @constant
 */
export const synchronizationProtocolOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* managedObjectClass */ 3, /* synchronizationProtocol */ 3],
    timeManagement
);

/* eslint-enable */
