/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TLS13PSKKeyExchangeMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13PSKKeyExchangeMode  ::=  ENUMERATED
 * {
 *     pSKKE(1),
 *     pSKDHEKE(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TLS13PSKKeyExchangeMode {
    pSKKE = 1,
    pSKDHEKE = 2,
}

/**
 * @summary TLS13PSKKeyExchangeMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13PSKKeyExchangeMode  ::=  ENUMERATED
 * {
 *     pSKKE(1),
 *     pSKDHEKE(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TLS13PSKKeyExchangeMode = _enum_for_TLS13PSKKeyExchangeMode;

/**
 * @summary TLS13PSKKeyExchangeMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13PSKKeyExchangeMode  ::=  ENUMERATED
 * {
 *     pSKKE(1),
 *     pSKDHEKE(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TLS13PSKKeyExchangeMode = _enum_for_TLS13PSKKeyExchangeMode;

/**
 * @summary TLS13PSKKeyExchangeMode_pSKKE
 * @constant
 * @type {number}
 */
export
const TLS13PSKKeyExchangeMode_pSKKE: TLS13PSKKeyExchangeMode = TLS13PSKKeyExchangeMode.pSKKE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pSKKE
 * @constant
 * @type {number}
 */
export
const pSKKE: TLS13PSKKeyExchangeMode = TLS13PSKKeyExchangeMode.pSKKE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13PSKKeyExchangeMode_pSKDHEKE
 * @constant
 * @type {number}
 */
export
const TLS13PSKKeyExchangeMode_pSKDHEKE: TLS13PSKKeyExchangeMode = TLS13PSKKeyExchangeMode.pSKDHEKE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pSKDHEKE
 * @constant
 * @type {number}
 */
export
const pSKDHEKE: TLS13PSKKeyExchangeMode = TLS13PSKKeyExchangeMode.pSKDHEKE; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TLS13PSKKeyExchangeMode: $.ASN1Decoder<TLS13PSKKeyExchangeMode> = $._decodeEnumerated;
export const _encode_TLS13PSKKeyExchangeMode: $.ASN1Encoder<TLS13PSKKeyExchangeMode> = $._encodeEnumerated;


/* eslint-enable */
