/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { l2AccessPDUObjId } from "../L2AccessPDU/l2AccessPDUObjId.va.mjs";
// export { l2AccessPDUObjId } from "../L2AccessPDU/l2AccessPDUObjId.va.mjs";


/**
 * @summary l2IRIObjId
 * @description
 *
 * Relative object identifier of the layer 2 IRI definition,
 * `{l2AccessPDUObjId iRI(1)}`. `L2IRI.l2IRIObjId` carries the identifier of
 * the definition in use. For this module that value is this constant.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * l2IRIObjId RELATIVE-OID ::= {l2AccessPDUObjId iRI(1)}
 * ```
 * 
 * @constant
 */
export
const l2IRIObjId: RELATIVE_OID = [ ...l2AccessPDUObjId, /* iRI */ 1 ];

/* eslint-enable */
