/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { hi3CircuitLIId } from "../HI3CircuitDataOperations/hi3CircuitLIId.va.mjs";
// export { hi3CircuitLIId } from "../HI3CircuitDataOperations/hi3CircuitLIId.va.mjs";


/**
 * @summary hi3CircuitLIOperationId
 * @description
 *
 * `version3(3)` under `hi3CircuitLIId`. `domainID` in `Content-Report` is
 * constrained to this value when FTP is used. The module object identifier in
 * clause D.6 is `version4(4)`. Annex J states that module version as 4. The
 * operation-identifier arc remains `version3(3)`, as assigned in clause D.6.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.6, annex J.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3CircuitLIOperationId OBJECT IDENTIFIER ::= {hi3CircuitLIId version3(3)}
 * ```
 * 
 * @constant
 */
export
const hi3CircuitLIOperationId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* version3 */ 3,
], hi3CircuitLIId);

/* eslint-enable */
