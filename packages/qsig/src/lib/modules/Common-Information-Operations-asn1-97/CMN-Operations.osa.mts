/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { cmnRequest } from "../Common-Information-Operations-asn1-97/cmnRequest.oa.mjs";
import { cmnInform } from "../Common-Information-Operations-asn1-97/cmnInform.oa.mjs";

/**
 * @summary CMN_Operations
 * @description
 *
 * Operations of module Common-Information-Operations-asn1-97 (ECMA-251
 * §6.3.1, Table 1): cmnRequest and cmnInform.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CMN-Operations OPERATION ::= { cmnRequest | cmnInform }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const CMN_Operations: (OPERATION)[] = [ cmnRequest, cmnInform, ];

/* eslint-enable */
