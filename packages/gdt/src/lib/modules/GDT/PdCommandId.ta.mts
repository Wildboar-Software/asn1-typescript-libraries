/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PdCommandId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PdCommandId  ::=  INTEGER {
 *     pdci-add        (1),  -- add item to list
 *     pdci-del        (2),  -- delete item from list
 *     pdci-match      (3)   -- math item in list
 * }
 * ```
 */
export
type PdCommandId = INTEGER;

/**
 * @summary PdCommandId_pdci_add
 * @constant
 * @type {number}
 */
export
const PdCommandId_pdci_add = 1 satisfies PdCommandId; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PdCommandId_pdci_add
 * @constant
 * @type {number}
 */
export
const pdci_add = PdCommandId_pdci_add; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PdCommandId_pdci_del
 * @constant
 * @type {number}
 */
export
const PdCommandId_pdci_del = 2 satisfies PdCommandId; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PdCommandId_pdci_del
 * @constant
 * @type {number}
 */
export
const pdci_del = PdCommandId_pdci_del; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PdCommandId_pdci_match
 * @constant
 * @type {number}
 */
export
const PdCommandId_pdci_match = 3 satisfies PdCommandId; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PdCommandId_pdci_match
 * @constant
 * @type {number}
 */
export
const pdci_match = PdCommandId_pdci_match; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_PdCommandId = $._decodeInteger;
export const _encode_PdCommandId = $._encodeInteger;


/* eslint-enable */
