/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ClientPartToKeep_action
 * @description
 * 
 * What the update does to every supplied record. One action per task
 * package.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartToKeep-action ::= INTEGER {
 *     recordInsert (1),
 *     recordReplace (2),
 *     recordDelete (3),
 *     elementUpdate (4)
 * }
 * ```
 */
export
type ClientPartToKeep_action = INTEGER;

/**
 * @summary ClientPartToKeep_action_recordInsert
 * @description
 * 
 * Insert new records. The client supplies whole records.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5.
 * 
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_action_recordInsert: ClientPartToKeep_action = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_recordInsert
 * @description
 * 
 * Insert new records; supply whole records (EXT.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const recordInsert: ClientPartToKeep_action = ClientPartToKeep_action_recordInsert; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_recordReplace
 * @description
 * 
 * Replace existing records. The client supplies whole records. Each
 * record, or its record id or supplemental id, must identify the database
 * record.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5.
 * 
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_action_recordReplace: ClientPartToKeep_action = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_recordReplace
 * @description
 * 
 * Replace existing records; each must be identifiable (EXT.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const recordReplace: ClientPartToKeep_action = ClientPartToKeep_action_recordReplace; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_recordDelete
 * @description
 * 
 * Delete existing records. Each record must be identifiable. The whole
 * record need not be supplied.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5.
 * 
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_action_recordDelete: ClientPartToKeep_action = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_recordDelete
 * @description
 * 
 * Delete existing records; identification is enough (EXT.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const recordDelete: ClientPartToKeep_action = ClientPartToKeep_action_recordDelete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_elementUpdate
 * @description
 * 
 * Replace corresponding elements in the database record; the rest of that
 * record is unchanged. Elements must be identifiable, for example by tags
 * the schema defines. If an element has no counterpart, more than one
 * counterpart, or is not sufficiently identified, that record is not
 * updated. Supplemental id may identify the record, not an element.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5.
 * 
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_action_elementUpdate: ClientPartToKeep_action = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_elementUpdate
 * @description
 * 
 * Replace matching elements only; the rest of the record stays (EXT.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const elementUpdate: ClientPartToKeep_action = ClientPartToKeep_action_elementUpdate; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ClientPartToKeep_action = $._decodeInteger;
export const _encode_ClientPartToKeep_action = $._encodeInteger;


/* eslint-enable */
