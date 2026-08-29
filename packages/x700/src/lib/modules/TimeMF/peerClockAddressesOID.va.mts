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
 * @summary peerClockAddressesOID
 * @description
 *
 * Registers attribute `peerClockAddresses`: network
 * addresses of peers currently maintained by this node. On
 * `localClock` (`GET-REPLACE`, `ADD-REMOVE`,
 * `SET-BY-CREATE`). ITU-T Rec. X.743 (06/98)
 * [§8.3.16](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.16.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * peerClockAddressesOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) peerClockAddresses(27)}
 * ```
 *
 * @constant
 */
export const peerClockAddressesOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* peerClockAddresses */ 27],
    timeManagement
);

/* eslint-enable */
