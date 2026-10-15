/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_OperatorLeaMessagePriority
 * @description
 *
 * How seriously an operator-to-LEA report affects the intercepted data.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.2.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_OperatorLeaMessagePriority {
    /**
     * An error condition that has an impact on the quality of the intercepted
     * data.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.2.2.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    error = 1,
    /**
     * A condition that will have no direct impact on the quality of the
     * intercepted data.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.2.2.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    informational = 2,
}

/**
 * @summary OperatorLeaMessagePriority
 * @description
 * 
 * How seriously an operator-to-LEA report affects the intercepted data.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.2.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperatorLeaMessagePriority  ::=  ENUMERATED
 * {
 *     error(1),
 *         -- reporting of error conditions that have impact on the quality of the
 *         -- intercepted data
 *     informational(2),
 *         -- reporting of conditions that will not have direct impact on the quality of
 *         -- the intercepted data
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type OperatorLeaMessagePriority = _enum_for_OperatorLeaMessagePriority | ENUMERATED;

/**
 * @summary OperatorLeaMessagePriority_error
 * @description
 *
 * An error condition that has an impact on the quality of the intercepted data.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.2.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const OperatorLeaMessagePriority_error: OperatorLeaMessagePriority = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error
 * @description
 *
 * An error condition that has an impact on the quality of the intercepted data.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.2.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const error: OperatorLeaMessagePriority = OperatorLeaMessagePriority_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperatorLeaMessagePriority_informational
 * @description
 *
 * A condition that will have no direct impact on the quality of the intercepted
 * data.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.2.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const OperatorLeaMessagePriority_informational: OperatorLeaMessagePriority = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary informational
 * @description
 *
 * A condition that will have no direct impact on the quality of the intercepted
 * data.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.2.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const informational: OperatorLeaMessagePriority = OperatorLeaMessagePriority_informational; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_OperatorLeaMessagePriority: $.ASN1Decoder<OperatorLeaMessagePriority> = $._decodeEnumerated;
export const _encode_OperatorLeaMessagePriority: $.ASN1Encoder<OperatorLeaMessagePriority> = $._encodeEnumerated;


/* eslint-enable */
