/* eslint-disable */
import { InvokeId } from "../Facility-Information-Element-Components/InvokeId.ta.mjs";


/**
 * @summary noInvokeId
 * @description
 * 
 * The invoke identifier used on a reject when no invocation can be identified:
 * `InvokeId` alternative `absent`.
 *
 * ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis (`noInvokeId`).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * noInvokeId InvokeId ::= absent:NULL
 * ```
 * 
 * @constant
 */
export
const noInvokeId: InvokeId = { absent: null };

/* eslint-enable */
