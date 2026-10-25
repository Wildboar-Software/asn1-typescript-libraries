/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary APIDirection
 * @description
 *
 * Invocation or notification for a northbound API event.
 * Category Oc on the EA-SCE-CDR.
 *
 * `invocation` is a request the SCEF receives from the SCS/AS
 * over T8. `notification` is a report the SCEF receives from a
 * 3GPP network element and sends to the SCS/AS (clause 5.3.2.1).
 * Both are chargeable per T8 transaction (clause 5.2.1).
 *
 * Clause 6.3.1.4 defines API Direction for NEF and CAPIF
 * converged charging with four roles: an invocation from an AF
 * to the NEF, a notification from the NEF to an AF, an
 * invocation from an API invoker or API provider to the CCF, and
 * a notification from the CCF to that invoker or provider. The
 * values of this type are `invocation` and `notification`.
 *
 * 3GPP TS 32.254 V20.0.0 clauses 5.2.1, 5.3.2.1 and 6.3.1.2
 * and table 6.1.3.2.1.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APIDirection  ::=  ENUMERATED {
 *    invocation      ( 0 ),
 *    notification    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_APIDirection {
    invocation = 0,
    notification = 1,
}

/**
 * @summary APIDirection
 * @description
 *
 * Invocation or notification for a northbound API event.
 * Category Oc on the EA-SCE-CDR.
 *
 * `invocation` is a request the SCEF receives from the SCS/AS
 * over T8. `notification` is a report the SCEF receives from a
 * 3GPP network element and sends to the SCS/AS (clause 5.3.2.1).
 * Both are chargeable per T8 transaction (clause 5.2.1).
 *
 * Clause 6.3.1.4 defines API Direction for NEF and CAPIF
 * converged charging with four roles: an invocation from an AF
 * to the NEF, a notification from the NEF to an AF, an
 * invocation from an API invoker or API provider to the CCF, and
 * a notification from the CCF to that invoker or provider. The
 * values of this type are `invocation` and `notification`.
 *
 * 3GPP TS 32.254 V20.0.0 clauses 5.2.1, 5.3.2.1 and 6.3.1.2
 * and table 6.1.3.2.1.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APIDirection  ::=  ENUMERATED {
 *    invocation      ( 0 ),
 *    notification    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type APIDirection = _enum_for_APIDirection;

/**
 * @summary APIDirection
 * @description
 *
 * Invocation or notification for a northbound API event.
 * Category Oc on the EA-SCE-CDR.
 *
 * `invocation` is a request the SCEF receives from the SCS/AS
 * over T8. `notification` is a report the SCEF receives from a
 * 3GPP network element and sends to the SCS/AS (clause 5.3.2.1).
 * Both are chargeable per T8 transaction (clause 5.2.1).
 *
 * Clause 6.3.1.4 defines API Direction for NEF and CAPIF
 * converged charging with four roles: an invocation from an AF
 * to the NEF, a notification from the NEF to an AF, an
 * invocation from an API invoker or API provider to the CCF, and
 * a notification from the CCF to that invoker or provider. The
 * values of this type are `invocation` and `notification`.
 *
 * 3GPP TS 32.254 V20.0.0 clauses 5.2.1, 5.3.2.1 and 6.3.1.2
 * and table 6.1.3.2.1.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APIDirection  ::=  ENUMERATED {
 *    invocation      ( 0 ),
 *    notification    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const APIDirection: typeof _enum_for_APIDirection = _enum_for_APIDirection;

/**
 * @summary APIDirection_invocation
 * @description
 *
 * API invocation. The SCEF received a request from the SCS/AS
 * over T8.
 *
 * 3GPP TS 32.254 V20.0.0 clauses 5.2.1 and 5.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const APIDirection_invocation: _enum_for_APIDirection.invocation = APIDirection.invocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invocation
 * @description
 *
 * API invocation received from the SCS/AS. See
 * {@link APIDirection_invocation}.
 *
 * @constant
 * @type {number}
 */
export
const invocation: _enum_for_APIDirection.invocation = APIDirection.invocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APIDirection_notification
 * @description
 *
 * API notification. A 3GPP network element triggered the SCEF,
 * which sends the notification to the SCS/AS. The triggering
 * element is `APINetworkServiceNode`.
 *
 * 3GPP TS 32.254 V20.0.0 clauses 5.3.2.1 and 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const APIDirection_notification: _enum_for_APIDirection.notification = APIDirection.notification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notification
 * @description
 *
 * API notification toward the SCS/AS. See
 * {@link APIDirection_notification}.
 *
 * @constant
 * @type {number}
 */
export
const notification: _enum_for_APIDirection.notification = APIDirection.notification; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_APIDirection: $.ASN1Decoder<APIDirection> = $._decodeEnumerated;

export
const _encode_APIDirection: $.ASN1Encoder<APIDirection> = $._encodeEnumerated;

/* eslint-enable */
