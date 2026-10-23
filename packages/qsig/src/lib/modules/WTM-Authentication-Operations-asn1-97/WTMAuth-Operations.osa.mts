/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { authWtmUser } from "../WTM-Authentication-Operations-asn1-97/authWtmUser.oa.mjs";
import { getWtatParam } from "../WTM-Authentication-Operations-asn1-97/getWtatParam.oa.mjs";
import { wtatParamEnq } from "../WTM-Authentication-Operations-asn1-97/wtatParamEnq.oa.mjs";
import { getWtanParam } from "../WTM-Authentication-Operations-asn1-97/getWtanParam.oa.mjs";
import { wtanParamEnq } from "../WTM-Authentication-Operations-asn1-97/wtanParamEnq.oa.mjs";
import { transferAuthParam } from "../WTM-Authentication-Operations-asn1-97/transferAuthParam.oa.mjs";

/**
 * @summary WTMAuth_Operations
 * @description
 *
 * Operations for authentication of a WTM user (SS-WTAT) and of the PISN
 * (SS-WTAN). ECMA-306 2nd edition, December 2001, §6.3.1 table 1, module
 * `WTM-Authentication-Operations-asn1-97`. `authWtmUser`, `getWtatParam`, and
 * `wtatParamEnq` belong to SS-WTAT. `getWtanParam` and `wtanParamEnq` belong to
 * SS-WTAN. `transferAuthParam` is the interaction with wireless terminal
 * information exchange (ANF-WTINFO). Both services use challenge and response.
 * The algorithms are outside the scope of ECMA-306 (§1).
 *
 * Invoke APDUs travel in a Facility information element. The NFE
 * `destinationEntity` is `endPINX`. The interpretation APDU is omitted or has
 * value `rejectAnyUnrecognisedInvokePdu` (§6.3.2.1, §7.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WTMAuth-Operations OPERATION ::= {
 *     authWtmUser
 *     | getWtatParam
 *     | wtatParamEnq
 *     | getWtanParam
 *     | wtanParamEnq
 *     | transferAuthParam
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const WTMAuth_Operations: (OPERATION)[] = [ authWtmUser, getWtatParam, wtatParamEnq, getWtanParam, wtanParamEnq, transferAuthParam, ];

/* eslint-enable */
