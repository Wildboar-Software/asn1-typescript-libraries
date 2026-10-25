/* eslint-disable */
import {
    type RELATIVE_OID
} from "@wildboar/asn1";
import { l2AccessPDUObjId } from "../L2AccessPDU/l2AccessPDUObjId.va.mjs";
// export { l2AccessPDUObjId } from "../L2AccessPDU/l2AccessPDUObjId.va.mjs";


/**
 * @summary l2CCObjId
 * @description
 *
 * Relative object identifier of the layer 2 CC definition,
 * `{l2AccessPDUObjId cC(2)}`. `L2CC.l2CCObjId` carries the identifier of the
 * definition in use. For this module that value is this constant.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 7.1, clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * l2CCObjId RELATIVE-OID ::= {l2AccessPDUObjId cC(2)}
 * ```
 * 
 * @constant
 */
export
const l2CCObjId: RELATIVE_OID = [ ...l2AccessPDUObjId, /* cC */ 2 ];

/* eslint-enable */
