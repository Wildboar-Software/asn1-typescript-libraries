/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CCLink_State
 * @description
 * 
 * State of a content-of-communication link toward the LEMF. The module defines
 * set-up in process, active, released, and lack of resource at the mediation
 * function. It states further behaviour only for set-up in process and for lack
 * of resource.
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
 * CCLink-State  ::=  ENUMERATED
 * {
 *     setUpInProcess(1),
 *         -- The set-up of the call is in process
 *     callActive(2),
 *     callReleased(3),
 *     lack-of-resource(4),
 *         -- The lack-of-resource state is sent when a CC Link cannot
 *         -- be established because of lack of resource at the MF level.
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CCLink_State {
    /**
     * The set-up of the call is in process.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    setUpInProcess = 1,
    /**
     * The CC link is active. TS 101 671 names this state and does not define
     * further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    callActive = 2,
    /**
     * The CC link has been released. TS 101 671 names this state and does not
     * define further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    callReleased = 3,
    /**
     * Sent when a CC link cannot be established because of lack of resource at
     * the mediation function.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    lack_of_resource = 4,
}

/**
 * @summary CCLink_State
 * @description
 * 
 * State of a content-of-communication link toward the LEMF. The module defines
 * set-up in process, active, released, and lack of resource at the mediation
 * function. It states further behaviour only for set-up in process and for lack
 * of resource.
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
 * CCLink-State  ::=  ENUMERATED
 * {
 *     setUpInProcess(1),
 *         -- The set-up of the call is in process
 *     callActive(2),
 *     callReleased(3),
 *     lack-of-resource(4),
 *         -- The lack-of-resource state is sent when a CC Link cannot
 *         -- be established because of lack of resource at the MF level.
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CCLink_State = _enum_for_CCLink_State | ENUMERATED;

/**
 * @summary CCLink_State_setUpInProcess
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
const CCLink_State_setUpInProcess: _enum_for_CCLink_State.setUpInProcess = _enum_for_CCLink_State.setUpInProcess; /* LONG_NAMED_ENUMERATED_VALUE */

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
const setUpInProcess: _enum_for_CCLink_State.setUpInProcess = CCLink_State_setUpInProcess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCLink_State_callActive
 * @description
 *
 * The CC link is active. TS 101 671 names this state and does not define
 * further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const CCLink_State_callActive: _enum_for_CCLink_State.callActive = _enum_for_CCLink_State.callActive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callActive
 * @description
 *
 * The CC link is active. TS 101 671 names this state and does not define
 * further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callActive: _enum_for_CCLink_State.callActive = CCLink_State_callActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCLink_State_callReleased
 * @description
 *
 * The CC link has been released. TS 101 671 names this state and does not
 * define further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const CCLink_State_callReleased: _enum_for_CCLink_State.callReleased = _enum_for_CCLink_State.callReleased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callReleased
 * @description
 *
 * The CC link has been released. TS 101 671 names this state and does not
 * define further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callReleased: _enum_for_CCLink_State.callReleased = CCLink_State_callReleased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCLink_State_lack_of_resource
 * @description
 *
 * Sent when a CC link cannot be established because of lack of resource at the
 * mediation function.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const CCLink_State_lack_of_resource: _enum_for_CCLink_State.lack_of_resource = _enum_for_CCLink_State.lack_of_resource; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lack_of_resource
 * @description
 *
 * Sent when a CC link cannot be established because of lack of resource at the
 * mediation function.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const lack_of_resource: _enum_for_CCLink_State.lack_of_resource = CCLink_State_lack_of_resource; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CCLink_State: $.ASN1Decoder<CCLink_State> = $._decodeEnumerated;
export const _encode_CCLink_State: $.ASN1Encoder<CCLink_State> = $._encodeEnumerated;


/* eslint-enable */
