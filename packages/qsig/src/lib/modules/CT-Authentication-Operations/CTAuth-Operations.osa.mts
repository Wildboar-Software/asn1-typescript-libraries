/* eslint-disable */
import type { OPERATION } from "@wildboar/rose";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { authCtmUser } from "../CT-Authentication-Operations/authCtmUser.oa.mjs";
// export { authCtmUser } from "../CT-Authentication-Operations/authCtmUser.oa.mjs";
import { getCtatParam } from "../CT-Authentication-Operations/getCtatParam.oa.mjs";
// export { getCtatParam } from "../CT-Authentication-Operations/getCtatParam.oa.mjs";
import { ctatParamEnq } from "../CT-Authentication-Operations/ctatParamEnq.oa.mjs";
// export { ctatParamEnq } from "../CT-Authentication-Operations/ctatParamEnq.oa.mjs";
import { getCtanParam } from "../CT-Authentication-Operations/getCtanParam.oa.mjs";
// export { getCtanParam } from "../CT-Authentication-Operations/getCtanParam.oa.mjs";
import { ctanParamEnq } from "../CT-Authentication-Operations/ctanParamEnq.oa.mjs";
// export { ctanParamEnq } from "../CT-Authentication-Operations/ctanParamEnq.oa.mjs";
import { transferAuthParam } from "../CT-Authentication-Operations/transferAuthParam.oa.mjs";
// export { transferAuthParam } from "../CT-Authentication-Operations/transferAuthParam.oa.mjs";


/**
 * @summary CTAuth_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTAuth-Operations OPERATION ::= {
 *     authCtmUser
 *     | getCtatParam
 *     | ctatParamEnq
 *     | getCtanParam
 *     | ctanParamEnq
 *     | transferAuthParam
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const CTAuth_Operations: (OPERATION)[] = [ authCtmUser, getCtatParam, ctatParamEnq, getCtanParam, ctanParamEnq, transferAuthParam, ];

/* eslint-enable */
