/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
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
const CauseNas_normalRelease: CauseNas = CauseNas.normalRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalRelease
 * @constant
 * @type {number}
 */
export
const normalRelease: CauseNas = CauseNas.normalRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseNas_authenticationFailure
 * @constant
 * @type {number}
 */
export
const CauseNas_authenticationFailure: CauseNas = CauseNas.authenticationFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationFailure
 * @constant
 * @type {number}
 */
export
const authenticationFailure: CauseNas = CauseNas.authenticationFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseNas_deregister
 * @constant
 * @type {number}
 */
export
const CauseNas_deregister: CauseNas = CauseNas.deregister; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deregister
 * @constant
 * @type {number}
 */
export
const deregister: CauseNas = CauseNas.deregister; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseNas_unspecified
 * @constant
 * @type {number}
 */
export
const CauseNas_unspecified: CauseNas = CauseNas.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified: CauseNas = CauseNas.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_CauseNas: $.ASN1Decoder<CauseNas> = $._decodeEnumerated;

export const _encode_CauseNas: $.ASN1Encoder<CauseNas> = $._encodeEnumerated;


/* eslint-enable */
