/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ForwardDuStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardDuStatus         ::=     INTEGER
 * { radiated                       (0)
 * , expired                        (1)
 * , interrupted                    (2)
 * , acknowledged                   (3)     -- FSP
 * , productionStarted              (4)     -- CLTU: 'radiation started'
 * , productionNotStarted           (5)     -- CLTU: 'radiation not started'
 * , unsupportedTransmissionMode    (6)     -- FSP
 * }
 * ```
 */
export
type ForwardDuStatus = INTEGER;

/**
 * @summary ForwardDuStatus_radiated
 * @constant
 * @type {number}
 */
export
const ForwardDuStatus_radiated: ForwardDuStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_radiated
 * @constant
 * @type {number}
 */
export
const radiated: ForwardDuStatus = ForwardDuStatus_radiated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_expired
 * @constant
 * @type {number}
 */
export
const ForwardDuStatus_expired: ForwardDuStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_expired
 * @constant
 * @type {number}
 */
export
const expired: ForwardDuStatus = ForwardDuStatus_expired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_interrupted
 * @constant
 * @type {number}
 */
export
const ForwardDuStatus_interrupted: ForwardDuStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_interrupted
 * @constant
 * @type {number}
 */
export
const interrupted: ForwardDuStatus = ForwardDuStatus_interrupted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_acknowledged
 * @constant
 * @type {number}
 */
export
const ForwardDuStatus_acknowledged: ForwardDuStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_acknowledged
 * @constant
 * @type {number}
 */
export
const acknowledged: ForwardDuStatus = ForwardDuStatus_acknowledged; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_productionStarted
 * @constant
 * @type {number}
 */
export
const ForwardDuStatus_productionStarted: ForwardDuStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_productionStarted
 * @constant
 * @type {number}
 */
export
const productionStarted: ForwardDuStatus = ForwardDuStatus_productionStarted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_productionNotStarted
 * @constant
 * @type {number}
 */
export
const ForwardDuStatus_productionNotStarted: ForwardDuStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_productionNotStarted
 * @constant
 * @type {number}
 */
export
const productionNotStarted: ForwardDuStatus = ForwardDuStatus_productionNotStarted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_unsupportedTransmissionMode
 * @constant
 * @type {number}
 */
export
const ForwardDuStatus_unsupportedTransmissionMode: ForwardDuStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_unsupportedTransmissionMode
 * @constant
 * @type {number}
 */
export
const unsupportedTransmissionMode: ForwardDuStatus = ForwardDuStatus_unsupportedTransmissionMode; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ForwardDuStatus: $.ASN1Decoder<ForwardDuStatus> = $._decodeInteger;
export const _encode_ForwardDuStatus: $.ASN1Encoder<ForwardDuStatus> = $._encodeInteger;


/* eslint-enable */
