/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { hi3GPRSLIId } from "../Gprs-HI3-PS/hi3GPRSLIId.va.mjs";
// export { hi3GPRSLIId } from "../Gprs-HI3-PS/hi3GPRSLIId.va.mjs";


/**
 * @summary hi3GPRSLIIdOperationId
 * @description
 *
 * `version3(3)` under `hi3GPRSLIId`. `domainID` in `ETSI-CC-PDU` is constrained
 * to this value when the FTP delivery mechanism is used. The module object
 * identifier in clause D.9 is the same version.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.9.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3GPRSLIIdOperationId OBJECT IDENTIFIER ::= {hi3GPRSLIId version3(3)}
 * ```
 * 
 * @constant
 */
export
const hi3GPRSLIIdOperationId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* version3 */ 3,
], hi3GPRSLIId);

/* eslint-enable */
