/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import { regInfo_certReq } from "../PKIXCRMF-2009/regInfo-certReq.oa.mjs";
import { regInfo_utf8Pairs } from "../PKIXCRMF-2009/regInfo-utf8Pairs.oa.mjs";


/**
 * @summary RegInfoSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegInfoSet ATTRIBUTE ::= { regInfo-utf8Pairs | regInfo-certReq }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const RegInfoSet: ATTRIBUTE[] = [regInfo_utf8Pairs, regInfo_certReq];

/* eslint-enable */
