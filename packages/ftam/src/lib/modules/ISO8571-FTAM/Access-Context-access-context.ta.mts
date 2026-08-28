/* eslint-disable */
import {
  INTEGER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Access_Context_access_context
 * @description
 *
 * The seven access contexts. Read uses this to filter what is
 * transferred; nodes still appear in preorder.
 * ISO 8571-2:1988 §7.5 Table 1; ISO 8571-3:1988 Table 27.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Access-Context-access-context ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Access_Context_access_context = INTEGER;


/**
 * @summary Access_Context_access_context_hierarchical_all_data_units
 * @description HA. Node-Descriptor, Enter/Exit-Subtree, and
 * File-Contents of the full addressed subtree (ISO 8571-2:1988
 * §7.5.1).
 * @constant
 * @type {number}
 */
export const Access_Context_access_context_hierarchical_all_data_units: Access_Context_access_context = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Access_Context_access_context_hierarchical_all_data_units
 * @constant
 * @type {number}
 */
export const hierarchical_all_data_units: Access_Context_access_context = Access_Context_access_context_hierarchical_all_data_units; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Access_Context_access_context_hierarchical_no_data_units
 * @description HN. Structuring only: Node-Descriptor,
 * Enter/Exit-Subtree; no File-Contents (ISO 8571-2:1988 §7.5.2).
 * @constant
 * @type {number}
 */
export const Access_Context_access_context_hierarchical_no_data_units: Access_Context_access_context = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Access_Context_access_context_hierarchical_no_data_units
 * @constant
 * @type {number}
 */
export const hierarchical_no_data_units: Access_Context_access_context = Access_Context_access_context_hierarchical_no_data_units; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Access_Context_access_context_flat_all_data_units
 * @description FA. Node-Descriptor and File-Contents for nodes with
 * `data-exists` TRUE; no enter/exit (ISO 8571-2:1988 §7.5.3).
 * @constant
 * @type {number}
 */
export const Access_Context_access_context_flat_all_data_units: Access_Context_access_context = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Access_Context_access_context_flat_all_data_units
 * @constant
 * @type {number}
 */
export const flat_all_data_units: Access_Context_access_context = Access_Context_access_context_flat_all_data_units; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Access_Context_access_context_flat_one_level_data_unit
 * @description FL. As FA, but only nodes at `level-number` relative
 * to the addressed FADU root. `level-number` is present iff FL
 * (ISO 8571-2:1988 §7.5.4).
 * @constant
 * @type {number}
 */
export const Access_Context_access_context_flat_one_level_data_unit: Access_Context_access_context = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Access_Context_access_context_flat_one_level_data_unit
 * @constant
 * @type {number}
 */
export const flat_one_level_data_unit: Access_Context_access_context = Access_Context_access_context_flat_one_level_data_unit; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Access_Context_access_context_flat_Single_data_unit
 * @description FS. Single Node-Descriptor and the DU of the
 * addressed FADU root (ISO 8571-2:1988 §7.5.5).
 * @constant
 * @type {number}
 */
export const Access_Context_access_context_flat_Single_data_unit: Access_Context_access_context = 4; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Access_Context_access_context_flat_Single_data_unit
 * @constant
 * @type {number}
 */
export const flat_Single_data_unit: Access_Context_access_context = Access_Context_access_context_flat_Single_data_unit; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Access_Context_access_context_unstructured_all_data_units
 * @description UA. File-Contents only from the addressed FADU
 * (ISO 8571-2:1988 §7.5.6).
 * @constant
 * @type {number}
 */
export const Access_Context_access_context_unstructured_all_data_units: Access_Context_access_context = 5; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Access_Context_access_context_unstructured_all_data_units
 * @constant
 * @type {number}
 */
export const unstructured_all_data_units: Access_Context_access_context = Access_Context_access_context_unstructured_all_data_units; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Access_Context_access_context_unstructured_Single_data_unit
 * @description US. File-Contents of the DU of the addressed FADU
 * root (ISO 8571-2:1988 §7.5.7).
 * @constant
 * @type {number}
 */
export const Access_Context_access_context_unstructured_Single_data_unit: Access_Context_access_context = 6; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Access_Context_access_context_unstructured_Single_data_unit
 * @constant
 * @type {number}
 */
export const unstructured_Single_data_unit: Access_Context_access_context = Access_Context_access_context_unstructured_Single_data_unit; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Access_Context_access_context = $._decodeInteger;




export const _encode_Access_Context_access_context = $._encodeInteger;


/* eslint-enable */
