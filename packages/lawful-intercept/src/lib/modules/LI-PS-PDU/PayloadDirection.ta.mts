/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_PayloadDirection
 * @description
 *
 * Direction of intercepted IRI or CC. On IRI it is optional and is used only
 * where the service-specific standard says so, and only in the way that
 * standard describes. On CC it is optional. The same enumeration is used for
 * `sessionDirection` on an IRI payload, under the same service-specific
 * restriction.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7, clause 5.2.12.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_PayloadDirection {
    /**
     * Intercepted data sent from the target.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7, clause 5.2.12.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    fromTarget = 0,
    /**
     * Intercepted data sent to the target.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7, clause 5.2.12.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    toTarget = 1,
    /**
     * The direction could not be determined.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7, clause 5.2.12.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    indeterminate = 2,
    /**
     * For services where the traffic is a combination of both directions.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7, clause 5.2.12.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    combined = 3,
    /**
     * Direction is not a meaningful property of the intercepted service.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7, clause 5.2.12.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    notapplicable = 4,
}

/**
 * @summary PayloadDirection
 * @description
 * 
 * Direction of intercepted IRI or CC. On IRI it is optional and is used only
 * where the service-specific standard says so, and only in the way that
 * standard describes. On CC it is optional. The same enumeration is used for
 * `sessionDirection` on an IRI payload, under the same service-specific
 * restriction.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7, clause 5.2.12.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PayloadDirection  ::=  ENUMERATED
 * {
 *     fromTarget(0),
 *     toTarget(1),
 *     ...,
 *     indeterminate(2),
 *         -- Indication that the direction was indeterminate
 *     combined(3),
 *         -- Indication applicable to some services that the traffic is actually a combination
 *         -- of To and From
 *     notapplicable(4)
 *         -- Indication that direction of interceptable service does not make sense
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PayloadDirection = _enum_for_PayloadDirection | ENUMERATED;

/**
 * @summary PayloadDirection_fromTarget
 * @description
 *
 * Intercepted data sent from the target.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7, clause 5.2.12.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const PayloadDirection_fromTarget = _enum_for_PayloadDirection.fromTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @description
 *
 * Intercepted data sent from the target.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7, clause 5.2.12.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const fromTarget = PayloadDirection_fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PayloadDirection_toTarget
 * @description
 *
 * Intercepted data sent to the target.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7, clause 5.2.12.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const PayloadDirection_toTarget = _enum_for_PayloadDirection.toTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @description
 *
 * Intercepted data sent to the target.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7, clause 5.2.12.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const toTarget = PayloadDirection_toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PayloadDirection_indeterminate
 * @description
 *
 * The direction could not be determined.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7, clause 5.2.12.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const PayloadDirection_indeterminate = _enum_for_PayloadDirection.indeterminate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary indeterminate
 * @description
 *
 * The direction could not be determined.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7, clause 5.2.12.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const indeterminate = PayloadDirection_indeterminate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PayloadDirection_combined
 * @description
 *
 * For services where the traffic is a combination of both directions.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7, clause 5.2.12.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const PayloadDirection_combined = _enum_for_PayloadDirection.combined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combined
 * @description
 *
 * For services where the traffic is a combination of both directions.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7, clause 5.2.12.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const combined = PayloadDirection_combined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PayloadDirection_notapplicable
 * @description
 *
 * Direction is not a meaningful property of the intercepted service.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7, clause 5.2.12.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const PayloadDirection_notapplicable = _enum_for_PayloadDirection.notapplicable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notapplicable
 * @description
 *
 * Direction is not a meaningful property of the intercepted service.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7, clause 5.2.12.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const notapplicable = PayloadDirection_notapplicable; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PayloadDirection: $.ASN1Decoder<PayloadDirection> = $._decodeEnumerated;
export const _encode_PayloadDirection: $.ASN1Encoder<PayloadDirection> = $._encodeEnumerated;


/* eslint-enable */
