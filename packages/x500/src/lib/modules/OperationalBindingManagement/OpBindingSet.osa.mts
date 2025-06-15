/* eslint-disable */
import { shadowOperationalBinding } from "../DirectoryShadowAbstractService/shadowOperationalBinding.oa.mjs";
import { hierarchicalOperationalBinding } from "../HierarchicalOperationalBindings/hierarchicalOperationalBinding.oa.mjs";
import { nonSpecificHierarchicalOperationalBinding } from "../HierarchicalOperationalBindings/nonSpecificHierarchicalOperationalBinding.oa.mjs";
import { OPERATIONAL_BINDING } from "../OperationalBindingManagement/OPERATIONAL-BINDING.oca.mjs";
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

/* eslint-enable */
