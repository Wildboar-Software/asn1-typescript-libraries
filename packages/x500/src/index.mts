/**
 * X.500 directory data structures and utilities
 *
 * This module exports the following:
 *
 * - Data structures for X.500 directory data
 * - Utilities for working with X.500 directory data
 * - Comparators for comparing X.500 directory data
 * - Stringifiers for stringifying X.500 directory data
 * - Types for implementing matching rules
 * - Functions for implementing basic access control
 * - Functions for implementing distributed operations
 * - Functions for evaluating filters and entry information selection
 * - Functions for PKI / PMI verification
 * 
 * Below is a very stripped down example of how to use the module to perform a
 * `compare` operation.
 * 
 * @example
 * ```typescript
 * const reqData = new CompareArgumentData(
 *     {
 *         rdnSequence: dn, // The DN to compare: defined outside of this example
 *     },
 *     new AttributeValueAssertion(
 *         commonName["&id"],
 *         { utf8String: "hi mom" },
 *     ),
 * );
 * const arg: CompareArgument = {
 *     unsigned: reqData,
 * };
 * const compareArgumentEl = _encode_CompareArgument(arg);
 * 
 * const idmPdu: IDM_PDU = {
 *     request: new Request(1, id_opcode_compare, compareArgumentEl),
 * };
 * const idmPduEl = _encode_IDM_PDU(idmPdu);
 * const idmPduBytes = idmPduEl.toBytes();
 * 
 * // Frame idmPduBytes and send it to the server
 * // Read response from IDM frame
 * const idmResponseEl = new BERElement();
 * idmResponseEl.fromBytes(idmPduResponseBytes);
 * const outcome = _decode_IDM_PDU(idmResponseEl);
 * if ("result" in outcome) {
 *     // Obviously, in a real application, you would want to
 *     // check that this is the result corresponding to the request.
 *     const result = _decode_CompareResult(outcome.result.result);
 *     const resultData = getOptionallyProtectedValue(result);
 *     if (resultData.matched) {
 *         console.log("we found the 'hi mom' entry");
 *     }
 * }
 * 
 * ```
 * 
 * @module
 */
export * from "./lib/errors.mjs";
export type { ACDFTupleExtended } from "./lib/types/ACDFTupleExtended.mjs";
export type { ACDFTuple } from "./lib/types/ACDFTuple.mjs";
export type { ApproxMatcher } from "./lib/types/ApproxMatcher.mjs";
export type { ATVAC } from "./lib/types/AttributeTypeValueAndContextsTuple.mjs";
export type { ChainedRequest } from "./lib/types/ChainedRequest.mjs";
export type { ChainedResultOrError } from "./lib/types/ChainedResultOrError.mjs";
export type { ChainedResult } from "./lib/types/ChainedResult.mjs";
export type { Chained } from "./lib/types/Chained.mjs";
export type { ContextMatcher } from "./lib/types/ContextMatcher.mjs";
export type { EqualityMatcher } from "./lib/types/EqualityMatcher.mjs";
export type { Error_ } from "./lib/types/Error_.mjs";
export type { OrderingMatcher } from "./lib/types/OrderingMatcher.mjs";
export type { ProtectedItem } from "./lib/types/ProtectedItem.mjs";
export type { Request } from "./lib/types/Request.mjs";
export type { ResultOrError } from "./lib/types/ResultOrError.mjs";
export type { Result } from "./lib/types/Result.mjs";
export type { StringDecoder } from "./lib/types/StringDecoder.mjs";
export type { StringEncoder } from "./lib/types/StringEncoder.mjs";
export { SubstringSelection } from "./lib/types/SubstringSelection.mjs";
export type { SubstringsMatcher } from "./lib/types/SubstringsMatcher.mjs";
export { bacACDF } from "./lib/bac/bacACDF.mjs";
export { deniesAccess } from "./lib/bac/deniesAccess.mjs";
export { discardNonRelevantACDFTuples } from "./lib/bac/discardNonRelevantACDFTuples.mjs";
export { getACDFTuplesFromACIItem } from "./lib/bac/getACDFTuplesFromACIItem.mjs";
export { grantsAccess } from "./lib/bac/grantsAccess.mjs";
export { itemIsProtected } from "./lib/bac/itemIsProtected.mjs";
export { splitGrantsAndDenials } from "./lib/bac/splitGrantsAndDenials.mjs";
export { userWithinACIUserClass } from "./lib/bac/userWithinACIUserClass.mjs";
export { compareAlgorithmIdentifier } from "./lib/comparators/compareAlgorithmIdentifier.mjs";
export { compareAttCertIssuer } from "./lib/comparators/compareAttCertIssuer.mjs";
export { default as compareAttributeTypeAndValue } from "./lib/comparators/compareAttributeTypeAndValue.mjs";
export { compareAuthenticationLevel } from "./lib/comparators/compareAuthenticationLevel.mjs";
export { default as compareAuthorityKeyIdentifier } from "./lib/comparators/compareAuthorityKeyIdentifier.mjs";
export { compareBitStrings } from "./lib/comparators/compareBitStrings.mjs";
export { default as compareDistinguishedName } from "./lib/comparators/compareDistinguishedName.mjs";
export { compareElements } from "./lib/comparators/compareElements.mjs";
export { compareGeneralNames } from "./lib/comparators/compareGeneralNames.mjs";
export { compareGeneralName } from "./lib/comparators/compareGeneralName.mjs";
export { default as compareGeneralSubtrees } from "./lib/comparators/compareGeneralSubtrees.mjs";
export { compareGeneralSubtree } from "./lib/comparators/compareGeneralSubtree.mjs";
export { compareHolder } from "./lib/comparators/compareHolder.mjs";
export { compareIssuerSerial } from "./lib/comparators/compareIssuerSerial.mjs";
export { compareNameConstraintsSyntax } from "./lib/comparators/compareNameConstraintsSyntax.mjs";
export { default as compareName } from "./lib/comparators/compareName.mjs";
export { default as compareNSAPs } from "./lib/comparators/compareNSAPs.mjs";
export { default as compareRDNSequence } from "./lib/comparators/compareRDNSequence.mjs";
export { default as compareRelativeDistinguishedName } from "./lib/comparators/compareRelativeDistinguishedName.mjs";
export { compareRoleSpecCertIdentifier } from "./lib/comparators/compareRoleSpecCertIdentifier.mjs";
export { codeToString } from "./lib/stringifiers/codeToString.mjs";
export { directoryStringToString } from "./lib/stringifiers/directoryStringToString.mjs";
export { teletexToString } from "./lib/stringifiers/teletexToString.mjs";
export { compareSocketToNSAP } from "./lib/distributed/compareSocketToNSAP.mjs";
export { IPV4_AFI_IDI } from "./lib/distributed/IPV4_AFI_IDI.mjs";
export * from "./lib/distributed/ipv4.mjs";
export { loopDetected } from "./lib/distributed/loopDetected.mjs";
export { naddrToURI } from "./lib/distributed/naddrToURI.mjs";
export * from "./lib/distributed/uri.mjs";
export { boundariesOfPeriodOccurrence } from "./lib/utils/boundariesOfPeriodOccurrence.mjs";
export { checkNameForm } from "./lib/utils/checkNameForm.mjs";
export { compareCode } from "./lib/utils/compareCode.mjs";
export { dateIsBetweenDayTimeBand } from "./lib/utils/dateIsBetweenDayTimeBand.mjs";
export { defaultEntryInformationSelection } from "./lib/utils/defaultEntryInformationSelection.mjs";
export { determineStructuralObjectClass } from "./lib/utils/determineStructuralObjectClass.mjs";
export { dnWithinGeneralSubtree } from "./lib/utils/dnWithinGeneralSubtree.mjs";
export { dnWithinSubtreeSpecification } from "./lib/utils/dnWithinSubtreeSpecification.mjs";
export { dnWithinSubtree } from "./lib/utils/dnWithinSubtree.mjs";
export { evaluateContextAssertion } from "./lib/utils/evaluateContextAssertion.mjs";
export { evaluateFilter } from "./lib/utils/evaluateFilter.mjs";
export { getAttributeSize } from "./lib/utils/getAttributeSize.mjs";
export { getAttributeTypesFromFilterItem } from "./lib/utils/getAttributeTypesFromFilterItem.mjs";
export { getAttributeTypesFromFilter } from "./lib/utils/getAttributeTypesFromFilter.mjs";
export { getDateFromTime } from "./lib/utils/getDateFromTime.mjs";
export { getMatchingRulesFromFilter } from "./lib/utils/getMatchingRulesFromFilter.mjs";
export { getOptionallyProtectedValue } from "./lib/utils/getOptionallyProtectedValue.mjs";
export { getRDN } from "./lib/utils/getRDN.mjs";
export { getValueTuplesFromAttribute } from "./lib/utils/getValueTuplesFromAttribute.mjs";
export { groupByOID } from "./lib/utils/groupByOID.mjs";
export { isModificationOperation } from "./lib/utils/isModificationOperation.mjs";
export { objectClassesWithinRefinement } from "./lib/utils/objectClassesWithinRefinement.mjs";
export { selectFromEntry } from "./lib/utils/selectFromEntry.mjs";
export { splitIntoMastersAndShadows } from "./lib/utils/splitIntoMastersAndShadows.mjs";
export { validateObjectClasses } from "./lib/utils/validateObjectClasses.mjs";
export { prepString } from "./lib/utils/prepString.mjs";
