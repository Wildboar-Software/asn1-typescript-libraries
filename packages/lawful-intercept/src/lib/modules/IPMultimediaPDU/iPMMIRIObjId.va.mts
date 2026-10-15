/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { iPMultimediaPDUObjId } from "../IPMultimediaPDU/iPMultimediaPDUObjId.va.mjs";
// export { iPMultimediaPDUObjId } from "../IPMultimediaPDU/iPMultimediaPDUObjId.va.mjs";


/**
 * @summary iPMMIRIObjId
 * @description
 *
 * Relative OID placed in `IPMMIRI.iPMMIRIObjId`. Value
 * `{iPMultimediaPDUObjId iRI(1)}`.
 *
 * Identifies an HI2 intercept-related-information PDU for an IP
 * multimedia signalling or control event.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clauses 6.1 and 7.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223205/03.22.01_60/ts_10223205v032201p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iPMMIRIObjId RELATIVE-OID ::= {iPMultimediaPDUObjId iRI(1)}
 * ```
 * 
 * @constant
 */
export
const iPMMIRIObjId: RELATIVE_OID = [ ...iPMultimediaPDUObjId, /* iRI */ 1 ];

/* eslint-enable */
