/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Intercepted_Call_State
 * @description
 * 
 * State of the intercepted call. Optional on the IRI record. Idle means the
 * call has been released, and the reason is then in
 * `release-Reason-Of-Intercepted-Call`. Set-up in process means the call is
 * being set up. Connected means the answer has been received. TS 101 671 does
 * not map these values onto the GSM event table; that table selects the IRI
 * record type.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Intercepted-Call-State  ::=  ENUMERATED
 * {
 *     idle(1),
 *         -- When the intercept call is released, the state is IDLE and the reason is provided
 *         -- by the release-Reason-Of-Intercepted-Call parameter.
 *     setUpInProcess(2),
 *         -- The set-up of the call is in process
 *     connected(3),
 *         -- The answer has been received
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Intercepted_Call_State {
    /**
     * The intercepted call has been released. The reason is in
     * `release-Reason-Of-Intercepted-Call`.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    idle = 1,
    /**
     * The set-up of the call is in process.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    setUpInProcess = 2,
    /**
     * The answer has been received.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    connected = 3,
}

/**
 * @summary Intercepted_Call_State
 * @description
 * 
 * State of the intercepted call. Optional on the IRI record. Idle means the
 * call has been released, and the reason is then in
 * `release-Reason-Of-Intercepted-Call`. Set-up in process means the call is
 * being set up. Connected means the answer has been received. TS 101 671 does
 * not map these values onto the GSM event table; that table selects the IRI
 * record type.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Intercepted-Call-State  ::=  ENUMERATED
 * {
 *     idle(1),
 *         -- When the intercept call is released, the state is IDLE and the reason is provided
 *         -- by the release-Reason-Of-Intercepted-Call parameter.
 *     setUpInProcess(2),
 *         -- The set-up of the call is in process
 *     connected(3),
 *         -- The answer has been received
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Intercepted_Call_State = _enum_for_Intercepted_Call_State | ENUMERATED;

/**
 * @summary Intercepted_Call_State_idle
 * @description
 *
 * The intercepted call has been released. The reason is in
 * `release-Reason-Of-Intercepted-Call`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Intercepted_Call_State_idle: Intercepted_Call_State = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary idle
 * @description
 *
 * The intercepted call has been released. The reason is in
 * `release-Reason-Of-Intercepted-Call`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const idle: Intercepted_Call_State = Intercepted_Call_State_idle; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Intercepted_Call_State_setUpInProcess
 * @description
 *
 * The set-up of the call is in process.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Intercepted_Call_State_setUpInProcess: Intercepted_Call_State = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary setUpInProcess
 * @description
 *
 * The set-up of the call is in process.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const setUpInProcess: Intercepted_Call_State = Intercepted_Call_State_setUpInProcess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Intercepted_Call_State_connected
 * @description
 *
 * The answer has been received.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Intercepted_Call_State_connected: Intercepted_Call_State = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connected
 * @description
 *
 * The answer has been received.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const connected: Intercepted_Call_State = Intercepted_Call_State_connected; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Intercepted_Call_State: $.ASN1Decoder<Intercepted_Call_State> = $._decodeEnumerated;
export const _encode_Intercepted_Call_State: $.ASN1Encoder<Intercepted_Call_State> = $._encodeEnumerated;


/* eslint-enable */
