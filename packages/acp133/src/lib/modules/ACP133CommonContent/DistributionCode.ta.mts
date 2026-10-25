/* eslint-disable */
import {
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DistributionCode
 * @description
 *
 * A distribution code, including a Subject Indicator
 * Code (SIC). `distributionCodeAction` lists the codes
 * an organization, person, or role handles for action.
 * `distributionCodeInfo` lists the codes handled for
 * information.
 *
 * ACP 133 (June 1998), Table 3-2, lists the
 * `distributionCodesHandled` auxiliary class on address
 * lists, organizational persons, roles, and units.
 *
 * [draft-dally-acp133-and-ldap-01, section 3.40](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.40)
 * and
 * [section 3.41](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.41).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DistributionCode  ::=  PrintableString
 * ```
 */
export
type DistributionCode = PrintableString; // PrintableString
export const _decode_DistributionCode = $._decodePrintableString;
export const _encode_DistributionCode = $._encodePrintableString;


/* eslint-enable */
