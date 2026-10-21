/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { mWIActivate } from "../MWI-Operations-asn1-97/mWIActivate.oa.mjs";
import { mWIDeactivate } from "../MWI-Operations-asn1-97/mWIDeactivate.oa.mjs";
import { mWIInterrogate } from "../MWI-Operations-asn1-97/mWIInterrogate.oa.mjs";

/**
 * @summary MWI_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MWI-Operations OPERATION ::= {
 *     mWIActivate
 *     | mWIDeactivate
 *     | mWIInterrogate
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const MWI_Operations: (OPERATION)[] = [ mWIActivate, mWIDeactivate, mWIInterrogate, ];

/* eslint-enable */
