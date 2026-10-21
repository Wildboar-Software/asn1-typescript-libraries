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
