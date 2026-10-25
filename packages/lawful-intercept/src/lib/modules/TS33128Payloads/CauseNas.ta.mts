/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CauseNas
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseNas  ::=  ENUMERATED
 * {
 *     normalRelease(1),
 *     authenticationFailure(2),
 *     deregister(3),
 *     unspecified(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CauseNas {
    normalRelease = 1,
    authenticationFailure = 2,
    deregister = 3,
    unspecified = 4,
}

/**
 * @summary CauseNas
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseNas  ::=  ENUMERATED
 * {
 *     normalRelease(1),
 *     authenticationFailure(2),
 *     deregister(3),
 *     unspecified(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CauseNas = _enum_for_CauseNas;

/**
 * @summary CauseNas
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseNas  ::=  ENUMERATED
 * {
 *     normalRelease(1),
 *     authenticationFailure(2),
 *     deregister(3),
 *     unspecified(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CauseNas = _enum_for_CauseNas;

/**
 * @summary CauseNas_normalRelease
 * @constant
 * @type {number}
 */
export
const CauseNas_normalRelease = CauseNas.normalRelease satisfies CauseNas; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalRelease
 * @constant
 * @type {number}
 */
export
const normalRelease = CauseNas.normalRelease satisfies CauseNas; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseNas_authenticationFailure
 * @constant
 * @type {number}
 */
export
const CauseNas_authenticationFailure = CauseNas.authenticationFailure satisfies CauseNas; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationFailure
 * @constant
 * @type {number}
 */
export
const authenticationFailure = CauseNas.authenticationFailure satisfies CauseNas; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseNas_deregister
 * @constant
 * @type {number}
 */
export
const CauseNas_deregister = CauseNas.deregister satisfies CauseNas; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deregister
 * @constant
 * @type {number}
 */
export
const deregister = CauseNas.deregister satisfies CauseNas; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseNas_unspecified
 * @constant
 * @type {number}
 */
export
const CauseNas_unspecified = CauseNas.unspecified satisfies CauseNas; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified = CauseNas.unspecified satisfies CauseNas; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CauseNas: $.ASN1Decoder<CauseNas> = $._decodeEnumerated;
export const _encode_CauseNas: $.ASN1Encoder<CauseNas> = $._encodeEnumerated;


/* eslint-enable */
