/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { l2AccessPDUObjId } from "../L2AccessPDU/l2AccessPDUObjId.va.mjs";
// export { l2AccessPDUObjId } from "../L2AccessPDU/l2AccessPDUObjId.va.mjs";


/**
 * @summary l2IRIOnlyObjId
 * @description
 *
 * Relative object identifier of the layer 2 IRI-only definition,
 * `{l2AccessPDUObjId iRIOnly(3)}`. `L2IRIOnly.l2IRIOnlyObjId` carries the
 * identifier of the definition in use. For this module that value is this
 * constant.
 *
 * The ASN.1 heading calls `L2IRIOnly` intercept-related information for
 * IRI-only intercepts. Clauses 6 and 7 and annex A do not describe that PDU.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * l2IRIOnlyObjId RELATIVE-OID ::= {l2AccessPDUObjId iRIOnly(3)}
 * ```
 * 
 * @constant
 */
export
const l2IRIOnlyObjId: RELATIVE_OID = [ ...l2AccessPDUObjId, /* iRIOnly */ 3 ];

/* eslint-enable */
