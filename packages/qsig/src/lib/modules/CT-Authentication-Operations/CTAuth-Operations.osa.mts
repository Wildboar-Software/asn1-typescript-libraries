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
 * Operations for authentication of a CTM user (SS-CTAT) and of the PISN
 * (SS-CTAN). ECMA-243 2nd edition, September 1997, §6.3.1 table 1.
 * `authCtmUser`, `getCtatParam`, and `ctatParamEnq` belong to SS-CTAT.
 * `getCtanParam` and `ctanParamEnq` belong to SS-CTAN. `transferAuthParam` is
 * the interaction with cordless terminal location registration (SS-CTLR). Both
 * services use challenge and response. The algorithms are outside the scope of
 * ECMA-243 (§1).
 *
 * Invoke APDUs travel in a Facility information element. The NFE
 * `destinationEntity` is `endPINX`. The interpretation APDU is omitted or has
 * value `rejectAnyUnrecognisedInvokePdu` (§6.3.2.1, §7.3.2.1).
 *
 * Table 1 is the X.208 module `CT-Authentication-Operations`. ECMA-243 2nd
 * edition has no asn1-97 module. These fences use the X.680 operation class;
 * the types and local codes are those of table 1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
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
