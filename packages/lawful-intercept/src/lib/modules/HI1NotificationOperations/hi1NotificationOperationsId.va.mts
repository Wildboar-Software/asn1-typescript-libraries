/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../HI1NotificationOperations/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../HI1NotificationOperations/lawfulInterceptDomainId.va.mjs";


/**
 * @summary hi1NotificationOperationsId
 * @description
 *
 * Common HI1 notification arc: `hi1(0) notificationOperations(1)` under
 * `lawfulInterceptDomainId`. The ROSE operation code of
 * `sending-of-HI1-Notification` is `version1(1)` under this value. The module
 * object identifier in clause D.4 adds `version7(7)`. Annex J lists that module
 * as version 6 and says that, where the summary and annex D differ, annex D is
 * valid. The TETRA notification module is under `tetra(6)`, not under `hi1(0)`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.2, clause D.4, annex J.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi1NotificationOperationsId OBJECT IDENTIFIER ::= {lawfulInterceptDomainId hi1(0) notificationOperations(1)}
 * ```
 * 
 * @constant
 */
export
const hi1NotificationOperationsId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi1 */ 0,
    /* notificationOperations */ 1,
], lawfulInterceptDomainId);

/* eslint-enable */
