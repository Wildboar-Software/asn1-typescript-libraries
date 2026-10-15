/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_CCLink_State {
    /**
     * The set-up of the delivery call is in process.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    setUpInProcess = 1,
    /**
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    callActive = 2,
    /**
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    callReleased = 3,
    /**
     * The CC link cannot be established because the mediation function lacks
     * resources. Table A.4.2 lists lack of system resources among the events
     * that can raise an LI alarm.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.4.4.2, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    lack_of_resource = 4,
}

/**
 * @summary CCLink_State
 * @description
 * 
 * State of a CC link toward the LEMF. An extension marker follows the named
 * states.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCLink-State  ::=  ENUMERATED
 * {
 *     setUpInProcess(1),
 *         -- The set-up of the call is in process.
 *     callActive(2),
 *     callReleased(3),
 *     lack-of-resource(4),
 *         -- The lack-of-resource state is sent when a CC Link cannot
 *         -- be established because of lack of resource at the MF level
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
 * The set-up of the delivery call is in process.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const CCLink_State_setUpInProcess: CCLink_State = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary setUpInProcess
 * @description
 *
 * The set-up of the delivery call is in process.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const setUpInProcess: CCLink_State = CCLink_State_setUpInProcess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCLink_State_callActive
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const CCLink_State_callActive: CCLink_State = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callActive
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callActive: CCLink_State = CCLink_State_callActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCLink_State_callReleased
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const CCLink_State_callReleased: CCLink_State = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callReleased
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callReleased: CCLink_State = CCLink_State_callReleased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCLink_State_lack_of_resource
 * @description
 *
 * The CC link cannot be established because the mediation function lacks
 * resources. Table A.4.2 lists lack of system resources among the events that
 * can raise an LI alarm.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.4.4.2, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const CCLink_State_lack_of_resource: CCLink_State = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lack_of_resource
 * @description
 *
 * The CC link cannot be established because the mediation function lacks
 * resources. Table A.4.2 lists lack of system resources among the events that
 * can raise an LI alarm.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.4.4.2, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const lack_of_resource: CCLink_State = CCLink_State_lack_of_resource; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CCLink_State: $.ASN1Decoder<CCLink_State> = $._decodeEnumerated;
export const _encode_CCLink_State: $.ASN1Encoder<CCLink_State> = $._encodeEnumerated;


/* eslint-enable */
