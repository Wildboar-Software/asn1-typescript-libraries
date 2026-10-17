/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { pstnIsdnPDUObjId } from "../PstnIsdnPDU/pstnIsdnPDUObjId.va.mjs";
// export { pstnIsdnPDUObjId } from "../PstnIsdnPDU/pstnIsdnPDUObjId.va.mjs";


/**
 * @summary pstnIsdnCCObjId
 * @description
 *
 * Relative object identifier of PSTN/ISDN content of communication,
 * `{pstnIsdnPDUObjId cC(2)}`. The absolute OID is `0.4.0.2.2.5.6.6.2`.
 *
 * Clause 5.2 sends CC in `PstnIsdnCC`. The same structure may also carry
 * supplementary information. Occasions on which CC is produced are those of
 * ETSI TS 101 671; ISDN detail is the state model in ETSI TR 102 053,
 * clause 6.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clauses 5.2, 6.1, and annex A.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223206/03.05.01_60/ts_10223206v030501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pstnIsdnCCObjId RELATIVE-OID ::= {pstnIsdnPDUObjId cC(2)}
 * ```
 * 
 * @constant
 */
export
const pstnIsdnCCObjId: RELATIVE_OID = [ ...pstnIsdnPDUObjId, /* cC */ 2 ];

/* eslint-enable */
