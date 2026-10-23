/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { mWIActivate } from "../MWI-Operations-asn1-97/mWIActivate.oa.mjs";
import { mWIDeactivate } from "../MWI-Operations-asn1-97/mWIDeactivate.oa.mjs";
import { mWIInterrogate } from "../MWI-Operations-asn1-97/mWIInterrogate.oa.mjs";

/**
 * @summary MWI_Operations
 * @description
 *
 * Object set of the SS-MWI operations (ECMA-242 §6.3.1): `mWIActivate`,
 * `mWIDeactivate`, and `mWIInterrogate`. All three use a call-independent
 * signalling connection (§6.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
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
