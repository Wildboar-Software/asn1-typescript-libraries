/* eslint-disable */
import { shadowOperationalBinding } from "../DirectoryShadowAbstractService/shadowOperationalBinding.oa.js";
import { hierarchicalOperationalBinding } from "../HierarchicalOperationalBindings/hierarchicalOperationalBinding.oa.js";
import { nonSpecificHierarchicalOperationalBinding } from "../HierarchicalOperationalBindings/nonSpecificHierarchicalOperationalBinding.oa.js";
import { OPERATIONAL_BINDING } from "../OperationalBindingManagement/OPERATIONAL-BINDING.oca.js";
export { shadowOperationalBinding } from "../DirectoryShadowAbstractService/shadowOperationalBinding.oa.js";
export { hierarchicalOperationalBinding } from "../HierarchicalOperationalBindings/hierarchicalOperationalBinding.oa.js";
export { nonSpecificHierarchicalOperationalBinding } from "../HierarchicalOperationalBindings/nonSpecificHierarchicalOperationalBinding.oa.js";
export { OPERATIONAL_BINDING } from "../OperationalBindingManagement/OPERATIONAL-BINDING.oca.js";

/* START_OF_SYMBOL_DEFINITION OpBindingSet */
/**
 * @summary OpBindingSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OpBindingSet OPERATIONAL-BINDING ::= {
 *   shadowOperationalBinding |
 *   hierarchicalOperationalBinding |
 *   nonSpecificHierarchicalOperationalBinding }
 * ```
 *
 * @constant
 * @type {OPERATIONAL_BINDING[]}
 *
 */
export const OpBindingSet: OPERATIONAL_BINDING[] = [
    shadowOperationalBinding,
    hierarchicalOperationalBinding,
    nonSpecificHierarchicalOperationalBinding,
];
/* END_OF_SYMBOL_DEFINITION OpBindingSet */

/* eslint-enable */
