/* eslint-disable */
import {
    type RELATIVE_OID
} from "@wildboar/asn1";
import { iPMultimediaPDUObjId } from "../IPMultimediaPDU/iPMultimediaPDUObjId.va.mjs";
// export { iPMultimediaPDUObjId } from "../IPMultimediaPDU/iPMultimediaPDUObjId.va.mjs";


/**
 * @summary iPMMCCObjId
 * @description
 *
 * Relative OID placed in `IPMMCC.iPMMCCObjId`. Value
 * `{iPMultimediaPDUObjId cC(2)}`.
 *
 * Identifies an HI3 content-of-communication PDU carrying one
 * intercepted multimedia packet.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clauses 5.5 and 7.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223205/03.22.01_60/ts_10223205v032201p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iPMMCCObjId RELATIVE-OID ::= {iPMultimediaPDUObjId cC(2)}
 * ```
 * 
 * @constant
 */
export
const iPMMCCObjId: RELATIVE_OID = [ ...iPMultimediaPDUObjId, /* cC */ 2 ];

/* eslint-enable */
