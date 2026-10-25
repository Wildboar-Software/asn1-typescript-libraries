/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CauseForRecordClosing
 * @description
 *
 * Why the CDF closed this CDR (clause 6.1.3.3). A session CDR closes on
 * Charging Data Request [Stop], and a partial CDR may be closed earlier on
 * [Interim] (clause 6.1.3.2). TS 32.260 does not assign these enumerated
 * values; the cause names follow the CDR parameter in TS 32.298.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.3.
 *
 * This field contains a reason for the release of the CDR including the
 * following: normal release: end of session; partial record generation: time
 * (duration) limit, maximum number of changes in charging conditions (e.g.
 * maximum number in 'List of Message Bodies' exceeded) or service change
 * (e.g. change in media components, Access Transfer); abnormal termination;
 * management intervention (request due to O&M reasons); CCF initiated record
 * closure. A more detailed reason may be found in the Service Reason Return
 * Code field.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.11.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseForRecordClosing  ::=  ENUMERATED {
 *    serviceDeliveryEndSuccessfully    ( 0 ),
 *    unSuccessfulServiceDelivery       ( 1 ),
 *    timeLimit                         ( 3 ),
 *    serviceChange                     ( 4 ),
 *    managementIntervention            ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CauseForRecordClosing {
    serviceDeliveryEndSuccessfully = 0,
    unSuccessfulServiceDelivery = 1,
    timeLimit = 3,
    serviceChange = 4,
    managementIntervention = 5,
}

/**
 * @summary CauseForRecordClosing
 * @description
 *
 * Why the CDF closed this CDR (clause 6.1.3.3). A session CDR closes on
 * Charging Data Request [Stop], and a partial CDR may be closed earlier on
 * [Interim] (clause 6.1.3.2). TS 32.260 does not assign these enumerated
 * values; the cause names follow the CDR parameter in TS 32.298.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.3.
 *
 * This field contains a reason for the release of the CDR including the
 * following: normal release: end of session; partial record generation: time
 * (duration) limit, maximum number of changes in charging conditions (e.g.
 * maximum number in 'List of Message Bodies' exceeded) or service change
 * (e.g. change in media components, Access Transfer); abnormal termination;
 * management intervention (request due to O&M reasons); CCF initiated record
 * closure. A more detailed reason may be found in the Service Reason Return
 * Code field.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.11.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseForRecordClosing  ::=  ENUMERATED {
 *    serviceDeliveryEndSuccessfully    ( 0 ),
 *    unSuccessfulServiceDelivery       ( 1 ),
 *    timeLimit                         ( 3 ),
 *    serviceChange                     ( 4 ),
 *    managementIntervention            ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
type CauseForRecordClosing = _enum_for_CauseForRecordClosing;

/**
 * @summary CauseForRecordClosing
 * @description
 *
 * Why the CDF closed this CDR (clause 6.1.3.3). A session CDR closes on
 * Charging Data Request [Stop], and a partial CDR may be closed earlier on
 * [Interim] (clause 6.1.3.2). TS 32.260 does not assign these enumerated
 * values; the cause names follow the CDR parameter in TS 32.298.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.3.
 *
 * This field contains a reason for the release of the CDR including the
 * following: normal release: end of session; partial record generation: time
 * (duration) limit, maximum number of changes in charging conditions (e.g.
 * maximum number in 'List of Message Bodies' exceeded) or service change
 * (e.g. change in media components, Access Transfer); abnormal termination;
 * management intervention (request due to O&M reasons); CCF initiated record
 * closure. A more detailed reason may be found in the Service Reason Return
 * Code field.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.11.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseForRecordClosing  ::=  ENUMERATED {
 *    serviceDeliveryEndSuccessfully    ( 0 ),
 *    unSuccessfulServiceDelivery       ( 1 ),
 *    timeLimit                         ( 3 ),
 *    serviceChange                     ( 4 ),
 *    managementIntervention            ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
const CauseForRecordClosing = _enum_for_CauseForRecordClosing;

/**
 * @summary CauseForRecordClosing_serviceDeliveryEndSuccessfully
 * @description
 *
 * The CDR was closed because service delivery ended. TS 32.260 clause
 * 6.1.3.3 does not name this value; it matches the normal release cause in
 * TS 32.298.
 *
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_serviceDeliveryEndSuccessfully = CauseForRecordClosing.serviceDeliveryEndSuccessfully satisfies CauseForRecordClosing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceDeliveryEndSuccessfully
 * @description
 *
 * The CDR was closed because service delivery ended. TS 32.260 clause
 * 6.1.3.3 does not name this value; it matches the normal release cause in
 * TS 32.298.
 *
 * @constant
 * @type {number}
 */
export
const serviceDeliveryEndSuccessfully = CauseForRecordClosing.serviceDeliveryEndSuccessfully satisfies CauseForRecordClosing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_unSuccessfulServiceDelivery
 * @description
 *
 * Service delivery did not succeed. TS 32.260 does not name this value; it
 * matches the unsuccessful cause in TS 32.298.
 *
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_unSuccessfulServiceDelivery = CauseForRecordClosing.unSuccessfulServiceDelivery satisfies CauseForRecordClosing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unSuccessfulServiceDelivery
 * @description
 *
 * Service delivery did not succeed. TS 32.260 does not name this value; it
 * matches the unsuccessful cause in TS 32.298.
 *
 * @constant
 * @type {number}
 */
export
const unSuccessfulServiceDelivery = CauseForRecordClosing.unSuccessfulServiceDelivery satisfies CauseForRecordClosing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_timeLimit
 * @description
 *
 * The CDR was closed because a time limit, or the maximum number of
 * charging-condition changes, was reached. TS 32.260 does not name this
 * value.
 *
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_timeLimit = CauseForRecordClosing.timeLimit satisfies CauseForRecordClosing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeLimit
 * @description
 *
 * The CDR was closed because a time limit, or the maximum number of
 * charging-condition changes, was reached. TS 32.260 does not name this
 * value.
 *
 * @constant
 * @type {number}
 */
export
const timeLimit = CauseForRecordClosing.timeLimit satisfies CauseForRecordClosing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_serviceChange
 * @description
 *
 * The CDR was closed because the service changed, for example the media
 * components or an access transfer. TS 32.260 does not name this value.
 *
 * 3GPP TS 32.260 V20.1.0.
 *
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_serviceChange = CauseForRecordClosing.serviceChange satisfies CauseForRecordClosing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceChange
 * @description
 *
 * The CDR was closed because the service changed, for example the media
 * components or an access transfer. TS 32.260 does not name this value.
 *
 * 3GPP TS 32.260 V20.1.0.
 *
 * @constant
 * @type {number}
 */
export
const serviceChange = CauseForRecordClosing.serviceChange satisfies CauseForRecordClosing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_managementIntervention
 * @description
 *
 * The CDR was closed by O&M. TS 32.260 clause 6.1.3.3 does not name this
 * value.
 *
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_managementIntervention = CauseForRecordClosing.managementIntervention satisfies CauseForRecordClosing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary managementIntervention
 * @description
 *
 * The CDR was closed by O&M. TS 32.260 clause 6.1.3.3 does not name this
 * value.
 *
 * @constant
 * @type {number}
 */
export
const managementIntervention = CauseForRecordClosing.managementIntervention satisfies CauseForRecordClosing; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CauseForRecordClosing: $.ASN1Decoder<CauseForRecordClosing> = $._decodeEnumerated;

export
const _encode_CauseForRecordClosing: $.ASN1Encoder<CauseForRecordClosing> = $._encodeEnumerated;

/* eslint-enable */
