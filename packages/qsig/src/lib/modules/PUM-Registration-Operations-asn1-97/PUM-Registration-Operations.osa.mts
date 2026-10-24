/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { pumRegistr } from "../PUM-Registration-Operations-asn1-97/pumRegistr.oa.mjs";
import { pumDelReg } from "../PUM-Registration-Operations-asn1-97/pumDelReg.oa.mjs";
import { pumDe_reg } from "../PUM-Registration-Operations-asn1-97/pumDe-reg.oa.mjs";
import { pumInterrog } from "../PUM-Registration-Operations-asn1-97/pumInterrog.oa.mjs";
import { pisnEnquiry } from "../WTM-Location-Registration-Operations-asn1-97/pisnEnquiry.oa.mjs";

/**
 * @summary PUM_Registration_Operations
 * @description
 *
 * SS-PUMR operation set (ECMA-282 §6.3.1): `pumRegistr`, `pumDelReg`,
 * `pumDe-reg`, `pumInterrog`, and `pisnEnquiry` imported from
 * `WTM-Location-Registration-Operations-asn1-97`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PUM-Registration-Operations OPERATION ::= {
 *     pumRegistr
 *     | pumDelReg
 *     | pumDe-reg
 *     | pumInterrog
 *     | pisnEnquiry
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const PUM_Registration_Operations: (OPERATION)[] = [ pumRegistr, pumDelReg, pumDe_reg, pumInterrog, pisnEnquiry, ];

/* eslint-enable */
