/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { callOfferRequest } from "../Call-Offer-Operations-asn1-97/callOfferRequest.oa.mjs";
import { pathRetain } from "../Call-Offer-Operations-asn1-97/pathRetain.oa.mjs";
import { serviceAvailable } from "../Call-Offer-Operations-asn1-97/serviceAvailable.oa.mjs";
import { cfbOverride } from "../Call-Offer-Operations-asn1-97/cfbOverride.oa.mjs";

/**
 * @summary Call_Offer_Operations
 * @description
 *
 * Operations of Call-Offer-Operations-asn1-97 (ECMA-192 §6.3.1):
 * `callOfferRequest`, `pathRetain`, `serviceAvailable`, and
 * `cfbOverride`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-192/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Call-Offer-Operations OPERATION ::= {
 *     callOfferRequest
 *     | pathRetain
 *     | serviceAvailable
 *     | cfbOverride
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Call_Offer_Operations: (OPERATION)[] = [ callOfferRequest, pathRetain, serviceAvailable, cfbOverride, ];

/* eslint-enable */
