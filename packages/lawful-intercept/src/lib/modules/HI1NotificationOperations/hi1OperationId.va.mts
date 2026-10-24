/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { hi1NotificationOperationsId } from "../HI1NotificationOperations/hi1NotificationOperationsId.va.mjs";
// export { hi1NotificationOperationsId } from "../HI1NotificationOperations/hi1NotificationOperationsId.va.mjs";


/**
 * @summary hi1OperationId
 * @description
 *
 * `version6(6)` under `hi1NotificationOperationsId`. `domainID` in this module
 * is constrained to this value. The module object identifier in clause D.4 is
 * `version7(7)`. Annex J lists the module as version 6 and says annex D
 * prevails. The TETRA `hi1OperationId` is `version0(0)` under
 * `tetra(6) hi1(1)`, not this value.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.4, annex J, clause D.10.2.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi1OperationId OBJECT IDENTIFIER ::= {hi1NotificationOperationsId version6(6)}
 * ```
 * 
 * @constant
 */
export
const hi1OperationId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* version6 */ 6,
], hi1NotificationOperationsId);

/* eslint-enable */
