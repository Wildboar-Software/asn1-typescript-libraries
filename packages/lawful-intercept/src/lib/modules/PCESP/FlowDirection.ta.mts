/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_FlowDirection
 * @description
 *
 * Downstream, upstream, or both, as named on `CCOpen`, `CCClose`, and
 * `CCChange`. This edition does not define the three directions. See
 * `FlowDirection`.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_FlowDirection {
    /**
     * Named direction on call-content messages. This edition does not define
     * downstream.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    downstream = 1,
    /**
     * Named direction on call-content messages. This edition does not define
     * upstream.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    upstream = 2,
    /**
     * Both directions. The ASN.1 name is `downstream-and-upstream`. This
     * edition does not define the direction.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    downstream_and_upstream = 3,
}

/**
 * @summary FlowDirection
 * @description
 *
 * Direction named on `CCOpen`, `CCClose`, and `CCChange`: downstream, upstream,
 * or both.
 *
 * This edition gives no further definition of those three values. Clause
 * 8.4.2.1.5 defines a different enumeration, `DirectionType` (`toTarget`,
 * `fromTarget`, `unknown`), which is the direction of a signal relative to the
 * target on `TARGETACTIVITYMONITOR`.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.5 and annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FlowDirection  ::=  ENUMERATED {
 *     downstream (1),
 *     upstream (2),
 *     downstream-and-upstream (3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FlowDirection = _enum_for_FlowDirection | ENUMERATED;

/**
 * @summary FlowDirection_downstream
 * @description
 *
 * Named direction on call-content messages. This edition does not define
 * downstream.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const FlowDirection_downstream = _enum_for_FlowDirection.downstream satisfies FlowDirection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary downstream
 * @description
 *
 * Named direction on call-content messages. This edition does not define
 * downstream.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const downstream = FlowDirection_downstream satisfies FlowDirection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FlowDirection_upstream
 * @description
 *
 * Named direction on call-content messages. This edition does not define
 * upstream.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const FlowDirection_upstream = _enum_for_FlowDirection.upstream satisfies FlowDirection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary upstream
 * @description
 *
 * Named direction on call-content messages. This edition does not define
 * upstream.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const upstream = FlowDirection_upstream satisfies FlowDirection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FlowDirection_downstream_and_upstream
 * @description
 *
 * Both directions. The ASN.1 name is `downstream-and-upstream`. This edition
 * does not define the direction.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const FlowDirection_downstream_and_upstream = _enum_for_FlowDirection.downstream_and_upstream satisfies FlowDirection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary downstream_and_upstream
 * @description
 *
 * Both directions. The ASN.1 name is `downstream-and-upstream`. This edition
 * does not define the direction.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const downstream_and_upstream = FlowDirection_downstream_and_upstream satisfies FlowDirection; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FlowDirection: $.ASN1Decoder<FlowDirection> = $._decodeEnumerated;
export const _encode_FlowDirection: $.ASN1Encoder<FlowDirection> = $._encodeEnumerated;


/* eslint-enable */
