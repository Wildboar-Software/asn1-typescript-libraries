/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { pstnIsdnPDUObjId } from "../PstnIsdnPDU/pstnIsdnPDUObjId.va.mjs";
// export { pstnIsdnPDUObjId } from "../PstnIsdnPDU/pstnIsdnPDUObjId.va.mjs";


/**
 * @summary pstnIsdnIRIObjId
 * @description
 *
 * Relative object identifier of PSTN/ISDN supplementary-information IRI,
 * `{pstnIsdnPDUObjId iRI(1)}`. The absolute OID is `0.4.0.2.2.5.6.6.1`.
 *
 * Clause 5.2 assigns this IRI to `PstnIsdnIRI`. IRI events defined by
 * ETSI TS 101 671 are a different structure, `ETSI671IRI`, and are not
 * identified by this OID.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 5.2 and annex A.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223206/03.05.01_60/ts_10223206v030501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pstnIsdnIRIObjId RELATIVE-OID ::= {pstnIsdnPDUObjId iRI(1)}
 * ```
 * 
 * @constant
 */
export
const pstnIsdnIRIObjId: RELATIVE_OID = [ ...pstnIsdnPDUObjId, /* iRI */ 1 ];

/* eslint-enable */
