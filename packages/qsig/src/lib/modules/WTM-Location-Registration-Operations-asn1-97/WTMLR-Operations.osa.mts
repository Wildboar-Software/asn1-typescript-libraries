/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { locUpdate } from "../WTM-Location-Registration-Operations-asn1-97/locUpdate.oa.mjs";
import { locDelete } from "../WTM-Location-Registration-Operations-asn1-97/locDelete.oa.mjs";
import { locDeReg } from "../WTM-Location-Registration-Operations-asn1-97/locDeReg.oa.mjs";
import { pisnEnquiry } from "../WTM-Location-Registration-Operations-asn1-97/pisnEnquiry.oa.mjs";
import { getRRCInf } from "../WTM-Location-Registration-Operations-asn1-97/getRRCInf.oa.mjs";
import { locInfoCheck } from "../WTM-Location-Registration-Operations-asn1-97/locInfoCheck.oa.mjs";

/**
 * @summary WTMLR_Operations
 * @description
 *
 * SS-WTLR and ANF-WTINFO operations (ECMA-302 §6.3.1): `locUpdate`,
 * `locDelete`, `locDeReg`, `pisnEnquiry`, `getRRCInf`, and `locInfoCheck`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WTMLR-Operations OPERATION ::= {
 *     locUpdate
 *     | locDelete
 *     | locDeReg
 *     | pisnEnquiry
 *     | getRRCInf
 *     | locInfoCheck
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const WTMLR_Operations: (OPERATION)[] = [ locUpdate, locDelete, locDeReg, pisnEnquiry, getRRCInf, locInfoCheck, ];

/* eslint-enable */
