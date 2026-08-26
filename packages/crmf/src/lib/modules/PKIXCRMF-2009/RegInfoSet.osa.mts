/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import { regInfo_certReq } from "../PKIXCRMF-2009/regInfo-certReq.oa.mjs";
import { regInfo_utf8Pairs } from "../PKIXCRMF-2009/regInfo-utf8Pairs.oa.mjs";


/**
 * @summary RegInfoSet
 * @description
 *
 * `ATTRIBUTE` object set for `CertReqMsg.regInfo`:
 * `utf8Pairs` and `certReq` ([RFC 4211 §7](https://datatracker.ietf.org/doc/html/rfc4211#section-7);
 * [RFC 5912 §10](https://datatracker.ietf.org/doc/html/rfc5912#section-10)).
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
