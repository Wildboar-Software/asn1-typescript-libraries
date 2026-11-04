/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DSAQualitySyntax_serviceQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DSAQualitySyntax-serviceQuality ::= ENUMERATED {
 *     defunct       (0),
 *     experimental  (1),
 *     best-effort   (2),
 *     pilot-service (3),
 *     full-service  (4) }
 * ```
 * 
 * @enum {number}
 */
export
const _enum_for_DSAQualitySyntax_serviceQuality: {
    readonly defunct: 0;
    readonly experimental: 1;
    readonly best_effort: 2;
    readonly pilot_service: 3;
    readonly full_service: 4;
} = {
    defunct: 0,
    experimental: 1,
    best_effort: 2,
    pilot_service: 3,
    full_service: 4,
};

export
type _enum_for_DSAQualitySyntax_serviceQuality = ENUMERATED;

/**
 * @summary DSAQualitySyntax_serviceQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DSAQualitySyntax-serviceQuality ::= ENUMERATED {
 *     defunct       (0),
 *     experimental  (1),
 *     best-effort   (2),
 *     pilot-service (3),
 *     full-service  (4) }
 * ```
 * 
 * @enum {number}
 */
export
type DSAQualitySyntax_serviceQuality = _enum_for_DSAQualitySyntax_serviceQuality;

/**
 * @summary DSAQualitySyntax_serviceQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DSAQualitySyntax-serviceQuality ::= ENUMERATED {
 *     defunct       (0),
 *     experimental  (1),
 *     best-effort   (2),
 *     pilot-service (3),
 *     full-service  (4) }
 * ```
 * 
 * @enum {number}
 */
export
const DSAQualitySyntax_serviceQuality: typeof _enum_for_DSAQualitySyntax_serviceQuality = _enum_for_DSAQualitySyntax_serviceQuality;

/**
 * @summary DSAQualitySyntax_serviceQuality_defunct
 * @constant
 * @type {number}
 */
export
const DSAQualitySyntax_serviceQuality_defunct: number = DSAQualitySyntax_serviceQuality.defunct satisfies DSAQualitySyntax_serviceQuality; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary defunct
 * @constant
 * @type {number}
 */
export
const defunct: number = DSAQualitySyntax_serviceQuality_defunct; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DSAQualitySyntax_serviceQuality_experimental
 * @constant
 * @type {number}
 */
export
const DSAQualitySyntax_serviceQuality_experimental: number = DSAQualitySyntax_serviceQuality.experimental satisfies DSAQualitySyntax_serviceQuality; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary experimental
 * @constant
 * @type {number}
 */
export
const experimental: number = DSAQualitySyntax_serviceQuality_experimental; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DSAQualitySyntax_serviceQuality_best_effort
 * @constant
 * @type {number}
 */
export
const DSAQualitySyntax_serviceQuality_best_effort: number = DSAQualitySyntax_serviceQuality.best_effort satisfies DSAQualitySyntax_serviceQuality; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary best_effort
 * @constant
 * @type {number}
 */
export
const best_effort: number = DSAQualitySyntax_serviceQuality_best_effort; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DSAQualitySyntax_serviceQuality_pilot_service
 * @constant
 * @type {number}
 */
export
const DSAQualitySyntax_serviceQuality_pilot_service: number = DSAQualitySyntax_serviceQuality.pilot_service satisfies DSAQualitySyntax_serviceQuality; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pilot_service
 * @constant
 * @type {number}
 */
export
const pilot_service: number = DSAQualitySyntax_serviceQuality_pilot_service; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DSAQualitySyntax_serviceQuality_full_service
 * @constant
 * @type {number}
 */
export
const DSAQualitySyntax_serviceQuality_full_service: number = DSAQualitySyntax_serviceQuality.full_service satisfies DSAQualitySyntax_serviceQuality; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary full_service
 * @constant
 * @type {number}
 */
export
const full_service: number = DSAQualitySyntax_serviceQuality_full_service; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DSAQualitySyntax_serviceQuality: $.ASN1Decoder<DSAQualitySyntax_serviceQuality> = $._decodeEnumerated;

export
const _encode_DSAQualitySyntax_serviceQuality: $.ASN1Encoder<DSAQualitySyntax_serviceQuality> = $._encodeEnumerated;

/* eslint-enable */
