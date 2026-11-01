/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { topDonorDN } from "../OrganizationAndGroupSchema/topDonorDN.oa.mjs";

/**
 * @summary OrganizationalFinanceAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OrganizationalFinanceAttributes ATTRIBUTE ::= {
 *     BasicBalanceSheetAttributes
 *     | BasicIncomeStatementAttributes
 *     | FinanceAttributes
 *     | AccountingAttributes
 *     | topDonorDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const OrganizationalFinanceAttributes: (ATTRIBUTE)[] = [ ...BasicBalanceSheetAttributes, ...BasicIncomeStatementAttributes, ...FinanceAttributes, ...AccountingAttributes, topDonorDN, ];

/* eslint-enable */
