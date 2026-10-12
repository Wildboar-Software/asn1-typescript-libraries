/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccResultData_processingTerminated
 * @description
 * 
 * Appended as the last euiccResult entry when the eUICC stops the remaining
 * PSMO or eCO list (SGP.32 v1.2, section 5.9.1). Commands that already ran
 * keep their own result entries. Section 5.9.1 names resultSizeOverflow and
 * unknownOrDamagedCommand. It lists interruption and undefinedError in section
 * 2.11.2.1 and does not further define those two conditions.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccResultData-processingTerminated ::= INTEGER {
 *     resultSizeOverflow(1),
 *     unknownOrDamagedCommand(2),
 *     interruption(3),
 *     undefinedError(127)
 * }
 * ```
 */
export
type EuiccResultData_processingTerminated = INTEGER;

/**
 * @summary EuiccResultData_processingTerminated_resultSizeOverflow
 * @constant
 * @type {number}
 * @description
 * A listProfileInfo PSMO could not be encoded because the response would
 * exceed the size limit (SGP.32 v1.2, section 5.9.1). Section 5.9.1 gives
 * large Profile icons as an example.
 */
export
const EuiccResultData_processingTerminated_resultSizeOverflow: EuiccResultData_processingTerminated = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_resultSizeOverflow
 * @constant
 * @type {number}
 * @description
 * listProfileInfo output exceeded the response size limit (SGP.32 v1.2,
 * section 5.9.1).
 */
export
const resultSizeOverflow: EuiccResultData_processingTerminated = EuiccResultData_processingTerminated_resultSizeOverflow; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_unknownOrDamagedCommand
 * @constant
 * @type {number}
 * @description
 * A PSMO or eCO is unknown, unsupported, or its command data cannot be
 * interpreted (SGP.32 v1.2, section 5.9.1). Also returned for
 * setFallbackAttribute when the eUICC does not support the Fallback Mechanism
 * (section 3.4.6).
 */
export
const EuiccResultData_processingTerminated_unknownOrDamagedCommand: EuiccResultData_processingTerminated = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_unknownOrDamagedCommand
 * @constant
 * @type {number}
 * @description
 * The command is unknown, unsupported, or its data cannot be interpreted
 * (SGP.32 v1.2, section 5.9.1).
 */
export
const unknownOrDamagedCommand: EuiccResultData_processingTerminated = EuiccResultData_processingTerminated_unknownOrDamagedCommand; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_interruption
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists interruption(3) in section 2.11.2.1 and does not further
 * define the condition that produces it. Section 5.9.1 describes a
 * non-resumable interruption as reverting the package and discarding partial
 * results, and does not name this code as the response.
 */
export
const EuiccResultData_processingTerminated_interruption: EuiccResultData_processingTerminated = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_interruption
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists this code in section 2.11.2.1 and does not further define
 * the condition that produces it.
 */
export
const interruption: EuiccResultData_processingTerminated = EuiccResultData_processingTerminated_interruption; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists undefinedError(127) under processingTerminated in section
 * 2.11.2.1 and does not further define the condition that produces it.
 */
export
const EuiccResultData_processingTerminated_undefinedError: EuiccResultData_processingTerminated = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists this code under processingTerminated in section 2.11.2.1
 * and does not further define the condition that produces it.
 */
export
const undefinedError: EuiccResultData_processingTerminated = EuiccResultData_processingTerminated_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EuiccResultData_processingTerminated: $.ASN1Decoder<EuiccResultData_processingTerminated> = $._decodeInteger;
export const _encode_EuiccResultData_processingTerminated: $.ASN1Encoder<EuiccResultData_processingTerminated> = $._encodeInteger;


/* eslint-enable */
