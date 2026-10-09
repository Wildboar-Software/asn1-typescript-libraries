/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProcessingInformation_processingContext
 * @description
 * Processing context of a Processing record. The exp-1 search terms for Use
 * attribute ProcessingContext are Access, Search, Retrieval,
 * RecordPresentation, and RecordHandling. ANSI/NISO Z39.50-2003 §3.2.10.3.14;
 * Appendix ATR, table 3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProcessingInformation-processingContext ::= INTEGER {
 *     access (0),
 *     -- e.g. choosing databases
 *     search (1),
 *     -- e.g. "search strategies" or search
 *     -- forms
 *     retrieval (2),
 *     -- e.g. recommended element
 *     -- combinations
 *     record-presentation (3),
 *     -- display of retrieved records
 *     record-handling (4)  -- handling (e.g. saving) of retrieved
 *     -- records
 * }
 * ```
 */
export
type ProcessingInformation_processingContext = INTEGER;

/**
 * @summary ProcessingInformation_processingContext_access
 * @description
 * Access context, for example choosing databases. The ProcessingContext search
 * term is Access. ANSI/NISO Z39.50-2003 §3.2.10.3.14; Appendix ATR, table 3.
 * @constant
 * @type {number}
 */
export
const ProcessingInformation_processingContext_access: ProcessingInformation_processingContext = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_access
 * @description
 * Short name for `ProcessingInformation_processingContext_access`.
 * @constant
 * @type {number}
 */
export
const access: ProcessingInformation_processingContext = ProcessingInformation_processingContext_access; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_search
 * @description
 * Search context, for example search strategies or search forms. The
 * ProcessingContext search term is Search. ANSI/NISO Z39.50-2003 §3.2.10.3.14;
 * Appendix ATR, table 3.
 * @constant
 * @type {number}
 */
export
const ProcessingInformation_processingContext_search: ProcessingInformation_processingContext = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_search
 * @description
 * Short name for `ProcessingInformation_processingContext_search`.
 * @constant
 * @type {number}
 */
export
const search: ProcessingInformation_processingContext = ProcessingInformation_processingContext_search; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_retrieval
 * @description
 * Retrieval context, for example recommended element combinations. The
 * ProcessingContext search term is Retrieval. ANSI/NISO Z39.50-2003
 * §3.2.10.3.14; Appendix ATR, table 3.
 * @constant
 * @type {number}
 */
export
const ProcessingInformation_processingContext_retrieval: ProcessingInformation_processingContext = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_retrieval
 * @description
 * Short name for `ProcessingInformation_processingContext_retrieval`.
 * @constant
 * @type {number}
 */
export
const retrieval: ProcessingInformation_processingContext = ProcessingInformation_processingContext_retrieval; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_record_presentation
 * @description
 * Display of retrieved records. The ProcessingContext search term is
 * RecordPresentation. ANSI/NISO Z39.50-2003 §3.2.10.3.14; Appendix ATR, table
 * 3.
 * @constant
 * @type {number}
 */
export
const ProcessingInformation_processingContext_record_presentation: ProcessingInformation_processingContext = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_record_presentation
 * @description
 * Short name for `ProcessingInformation_processingContext_record_presentation`.
 * @constant
 * @type {number}
 */
export
const record_presentation: ProcessingInformation_processingContext = ProcessingInformation_processingContext_record_presentation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_record_handling
 * @description
 * Handling of retrieved records, for example saving them. The ProcessingContext
 * search term is RecordHandling. ANSI/NISO Z39.50-2003 §3.2.10.3.14; Appendix
 * ATR, table 3.
 * @constant
 * @type {number}
 */
export
const ProcessingInformation_processingContext_record_handling: ProcessingInformation_processingContext = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_record_handling
 * @description
 * Short name for `ProcessingInformation_processingContext_record_handling`.
 * @constant
 * @type {number}
 */
export
const record_handling: ProcessingInformation_processingContext = ProcessingInformation_processingContext_record_handling; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProcessingInformation_processingContext = $._decodeInteger;
export const _encode_ProcessingInformation_processingContext = $._encodeInteger;


/* eslint-enable */
