/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CauseForTerm
 * @description
 *
 * On a partial record, this is either `partialRecord` or
 * `partialRecordCallReestablishment`. The final record carries the true
 * cause, such as `normalRelease`. A failed re-establishment uses
 * `abnormalRelease` ("stable call abnormal termination"). LCS records use
 * the location-service values and may put a more detailed cause in
 * `diagnostics`.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.6, 5.1.3.9, and 6.1.3.20.
 *
 * This field contains a generalised reason for the release of the connection
 * including the following: normal release; CAMEL initiated call release;
 * partial record generation; partial record call re-establishment;
 * unsuccessful call attempt; abnormal termination during the stable phase;
 * unauthorized network originating a location service request; unauthorized
 * client requesting a location service; position method failure at a
 * location service execution; unknown or unreachable LCS client at a
 * location service request. A more detailed reason may be found in the
 * diagnostics field.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.13.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseForTerm  ::=  INTEGER {
 *    normalRelease                       ( 0 ),
 *    partialRecord                       ( 1 ),
 *    partialRecordCallReestablishment    ( 2 ),
 *    unsuccessfulCallAttempt             ( 3 ),
 *    abnormalRelease                     ( 4 ),
 *    cAMELInitCallRelease                ( 5 ),
 *    unauthorizedRequestingNetwork       ( 52 ),
 *    unauthorizedLCSClient               ( 53 ),
 *    positionMethodFailure               ( 54 ),
 *    unknownOrUnreachableLCSClient       ( 58 )}
 * ```
 */
export
type CauseForTerm = INTEGER;

/**
 * @summary CauseForTerm_normalRelease
 * @description
 *
 * Normal release of the connection. On a sequence of partial records, only
 * the final record carries this true cause. Earlier records use
 * `partialRecord` or `partialRecordCallReestablishment`. 3GPP TS 32.250
 * V19.0.0 clause 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const CauseForTerm_normalRelease = 0 satisfies CauseForTerm; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_normalRelease
 * @description
 *
 * Normal release of the connection. On a sequence of partial records, only
 * the final record carries this true cause. Earlier records use
 * `partialRecord` or `partialRecordCallReestablishment`. 3GPP TS 32.250
 * V19.0.0 clause 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const normalRelease = CauseForTerm_normalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_partialRecord
 * @description
 *
 * A further partial record was opened for the same connection. The final
 * partial record does not use this value; it carries the true termination
 * cause. Partial records share the call reference and increase the sequence
 * number. 3GPP TS 32.250 V19.0.0 clause 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const CauseForTerm_partialRecord = 1 satisfies CauseForTerm; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_partialRecord
 * @description
 *
 * A further partial record was opened for the same connection. The final
 * partial record does not use this value; it carries the true termination
 * cause. Partial records share the call reference and increase the sequence
 * number. 3GPP TS 32.250 V19.0.0 clause 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const partialRecord = CauseForTerm_partialRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_partialRecordCallReestablishment
 * @description
 *
 * The call was closed because the radio link failed and the MS then
 * re-established it. Chargeable duration runs from answer to the MSC
 * server's detection of the failure. The next partial record's seizure time
 * and answer time are both the time the new traffic channel is allocated.
 * These partial records are not contiguous. If re-establishment fails, this
 * value is not used. 3GPP TS 32.250 V19.0.0 clauses 5.1.3.6 and 5.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const CauseForTerm_partialRecordCallReestablishment = 2 satisfies CauseForTerm; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_partialRecordCallReestablishment
 * @description
 *
 * The call was closed because the radio link failed and the MS then
 * re-established it. Chargeable duration runs from answer to the MSC
 * server's detection of the failure. The next partial record's seizure time
 * and answer time are both the time the new traffic channel is allocated.
 * These partial records are not contiguous. If re-establishment fails, this
 * value is not used. 3GPP TS 32.250 V19.0.0 clauses 5.1.3.6 and 5.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const partialRecordCallReestablishment = CauseForTerm_partialRecordCallReestablishment; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_unsuccessfulCallAttempt
 * @description
 *
 * Unsuccessful call attempt. An unsuccessful attempt is also recorded when
 * partial records are generated for a CAMEL FollowOn call that has already
 * reached answer at least once. 3GPP TS 32.250 V19.0.0 clauses 5.1.1 and
 * 6.1.3.1.
 *
 * @constant
 * @type {number}
 */
export
const CauseForTerm_unsuccessfulCallAttempt = 3 satisfies CauseForTerm; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_unsuccessfulCallAttempt
 * @description
 *
 * Unsuccessful call attempt. An unsuccessful attempt is also recorded when
 * partial records are generated for a CAMEL FollowOn call that has already
 * reached answer at least once. 3GPP TS 32.250 V19.0.0 clauses 5.1.1 and
 * 6.1.3.1.
 *
 * @constant
 * @type {number}
 */
export
const unsuccessfulCallAttempt = CauseForTerm_unsuccessfulCallAttempt; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_abnormalRelease
 * @description
 *
 * Abnormal release. Clause 5.1.3.9 says that if call re-establishment fails,
 * the MOC or MTC is closed with cause "stable call abnormal termination" and
 * the chargeable duration runs from answer to detection of the radio-link
 * failure. This is the abnormal-release value of `CauseForTerm`. 3GPP TS
 * 32.250 V19.0.0 clause 5.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const CauseForTerm_abnormalRelease = 4 satisfies CauseForTerm; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_abnormalRelease
 * @description
 *
 * Abnormal release. Clause 5.1.3.9 says that if call re-establishment fails,
 * the MOC or MTC is closed with cause "stable call abnormal termination" and
 * the chargeable duration runs from answer to detection of the radio-link
 * failure. This is the abnormal-release value of `CauseForTerm`. 3GPP TS
 * 32.250 V19.0.0 clause 5.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const abnormalRelease = CauseForTerm_abnormalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_cAMELInitCallRelease
 * @description
 *
 * Call released by CAMEL. TS 32.250 names CAMEL as a source of call handling
 * and of partial records, and does not give this value a separate generation
 * rule. 3GPP TS 32.250 V19.0.0 clause 5.1.3.2.
 *
 * @constant
 * @type {number}
 */
export
const CauseForTerm_cAMELInitCallRelease = 5 satisfies CauseForTerm; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_cAMELInitCallRelease
 * @description
 *
 * Call released by CAMEL. TS 32.250 names CAMEL as a source of call handling
 * and of partial records, and does not give this value a separate generation
 * rule. 3GPP TS 32.250 V19.0.0 clause 5.1.3.2.
 *
 * @constant
 * @type {number}
 */
export
const cAMELInitCallRelease = CauseForTerm_cAMELInitCallRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_unauthorizedRequestingNetwork
 * @description
 *
 * The location request ended because the requesting network was not
 * authorized. On an LCS CDR, `causeForTerm` is the reason the location
 * service ended and `diagnostics` may carry a more detailed cause. 3GPP TS
 * 32.250 V19.0.0 clauses 6.1.3.20, 6.1.3.21, and 6.1.3.22.
 *
 * @constant
 * @type {number}
 */
export
const CauseForTerm_unauthorizedRequestingNetwork = 52 satisfies CauseForTerm; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_unauthorizedRequestingNetwork
 * @description
 *
 * The location request ended because the requesting network was not
 * authorized. On an LCS CDR, `causeForTerm` is the reason the location
 * service ended and `diagnostics` may carry a more detailed cause. 3GPP TS
 * 32.250 V19.0.0 clauses 6.1.3.20, 6.1.3.21, and 6.1.3.22.
 *
 * @constant
 * @type {number}
 */
export
const unauthorizedRequestingNetwork = CauseForTerm_unauthorizedRequestingNetwork; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_unauthorizedLCSClient
 * @description
 *
 * The location request ended because the LCS client was not authorized. On
 * an LCS CDR, `diagnostics` may carry a more detailed cause. 3GPP TS 32.250
 * V19.0.0 clauses 6.1.3.20, 6.1.3.21, and 6.1.3.22.
 *
 * @constant
 * @type {number}
 */
export
const CauseForTerm_unauthorizedLCSClient = 53 satisfies CauseForTerm; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_unauthorizedLCSClient
 * @description
 *
 * The location request ended because the LCS client was not authorized. On
 * an LCS CDR, `diagnostics` may carry a more detailed cause. 3GPP TS 32.250
 * V19.0.0 clauses 6.1.3.20, 6.1.3.21, and 6.1.3.22.
 *
 * @constant
 * @type {number}
 */
export
const unauthorizedLCSClient = CauseForTerm_unauthorizedLCSClient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_positionMethodFailure
 * @description
 *
 * The location request ended because the positioning method failed. On an
 * LCS CDR, `lcsCause` is the radio-interface result when a failure or
 * partial success is known, and `diagnostics` may carry a more detailed
 * cause. 3GPP TS 32.250 V19.0.0 clauses 6.1.3.20, 6.1.3.21, and 6.1.3.22.
 *
 * @constant
 * @type {number}
 */
export
const CauseForTerm_positionMethodFailure = 54 satisfies CauseForTerm; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_positionMethodFailure
 * @description
 *
 * The location request ended because the positioning method failed. On an
 * LCS CDR, `lcsCause` is the radio-interface result when a failure or
 * partial success is known, and `diagnostics` may carry a more detailed
 * cause. 3GPP TS 32.250 V19.0.0 clauses 6.1.3.20, 6.1.3.21, and 6.1.3.22.
 *
 * @constant
 * @type {number}
 */
export
const positionMethodFailure = CauseForTerm_positionMethodFailure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_unknownOrUnreachableLCSClient
 * @description
 *
 * The location request ended because the LCS client was unknown or
 * unreachable. On an LCS CDR, `diagnostics` may carry a more detailed cause.
 * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.20, 6.1.3.21, and 6.1.3.22.
 *
 * @constant
 * @type {number}
 */
export
const CauseForTerm_unknownOrUnreachableLCSClient = 58 satisfies CauseForTerm; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_unknownOrUnreachableLCSClient
 * @description
 *
 * The location request ended because the LCS client was unknown or
 * unreachable. On an LCS CDR, `diagnostics` may carry a more detailed cause.
 * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.20, 6.1.3.21, and 6.1.3.22.
 *
 * @constant
 * @type {number}
 */
export
const unknownOrUnreachableLCSClient = CauseForTerm_unknownOrUnreachableLCSClient; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CauseForTerm: $.ASN1Decoder<CauseForTerm> = $._decodeInteger;

export
const _encode_CauseForTerm: $.ASN1Encoder<CauseForTerm> = $._encodeInteger;

/* eslint-enable */
