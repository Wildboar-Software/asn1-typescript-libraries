/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { callOfferRequest } from "../Call-Offer-Operations-asn1-97/callOfferRequest.oa.mjs";
// export { callOfferRequest } from "../Call-Offer-Operations-asn1-97/callOfferRequest.oa.mjs";
import { pathRetain } from "../Call-Offer-Operations-asn1-97/pathRetain.oa.mjs";
// export { pathRetain } from "../Call-Offer-Operations-asn1-97/pathRetain.oa.mjs";
import { serviceAvailable } from "../Call-Offer-Operations-asn1-97/serviceAvailable.oa.mjs";
// export { serviceAvailable } from "../Call-Offer-Operations-asn1-97/serviceAvailable.oa.mjs";
import { cfbOverride } from "../Call-Offer-Operations-asn1-97/cfbOverride.oa.mjs";
// export { cfbOverride } from "../Call-Offer-Operations-asn1-97/cfbOverride.oa.mjs";


/**
 * @summary Call_Offer_Operations
 * @description
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
