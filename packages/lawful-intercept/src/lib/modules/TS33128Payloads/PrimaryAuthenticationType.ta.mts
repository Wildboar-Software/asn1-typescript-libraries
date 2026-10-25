/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PrimaryAuthenticationType
 * @description
 * 
 * Indicates the authentication method used by the remote ProSE UE to gain
 * access to the serving network. See TS 29.503 [25] clause 6.3.6.3.3.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.10.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrimaryAuthenticationType  ::=  ENUMERATED
 * {
 *     eAPAKAPrime(1),
 *     fiveGAKA(2),
 *     eAPTLS(3),
 *     none(4),
 *     ePSAKA(5),
 *     eAPAKA(6),
 *     iMSAKA(7),
 *     gBAAKA(8),
 *     uMTSAKA(9)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PrimaryAuthenticationType {
    eAPAKAPrime = 1,
    fiveGAKA = 2,
    eAPTLS = 3,
    none = 4,
    ePSAKA = 5,
    eAPAKA = 6,
    iMSAKA = 7,
    gBAAKA = 8,
    uMTSAKA = 9,
}

/**
 * @summary PrimaryAuthenticationType
 * @description
 * 
 * Indicates the authentication method used by the remote ProSE UE to gain
 * access to the serving network. See TS 29.503 [25] clause 6.3.6.3.3.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.10.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrimaryAuthenticationType  ::=  ENUMERATED
 * {
 *     eAPAKAPrime(1),
 *     fiveGAKA(2),
 *     eAPTLS(3),
 *     none(4),
 *     ePSAKA(5),
 *     eAPAKA(6),
 *     iMSAKA(7),
 *     gBAAKA(8),
 *     uMTSAKA(9)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PrimaryAuthenticationType = _enum_for_PrimaryAuthenticationType;

/**
 * @summary PrimaryAuthenticationType
 * @description
 * 
 * Indicates the authentication method used by the remote ProSE UE to gain
 * access to the serving network. See TS 29.503 [25] clause 6.3.6.3.3.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.10.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrimaryAuthenticationType  ::=  ENUMERATED
 * {
 *     eAPAKAPrime(1),
 *     fiveGAKA(2),
 *     eAPTLS(3),
 *     none(4),
 *     ePSAKA(5),
 *     eAPAKA(6),
 *     iMSAKA(7),
 *     gBAAKA(8),
 *     uMTSAKA(9)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PrimaryAuthenticationType: typeof _enum_for_PrimaryAuthenticationType = _enum_for_PrimaryAuthenticationType;

/**
 * @summary PrimaryAuthenticationType_eAPAKAPrime
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_eAPAKAPrime: _enum_for_PrimaryAuthenticationType.eAPAKAPrime = PrimaryAuthenticationType.eAPAKAPrime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eAPAKAPrime
 * @constant
 * @type {number}
 */
export
const eAPAKAPrime: _enum_for_PrimaryAuthenticationType.eAPAKAPrime = PrimaryAuthenticationType.eAPAKAPrime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrimaryAuthenticationType_fiveGAKA
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_fiveGAKA: _enum_for_PrimaryAuthenticationType.fiveGAKA = PrimaryAuthenticationType.fiveGAKA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fiveGAKA
 * @constant
 * @type {number}
 */
export
const fiveGAKA: _enum_for_PrimaryAuthenticationType.fiveGAKA = PrimaryAuthenticationType.fiveGAKA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrimaryAuthenticationType_eAPTLS
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_eAPTLS: _enum_for_PrimaryAuthenticationType.eAPTLS = PrimaryAuthenticationType.eAPTLS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eAPTLS
 * @constant
 * @type {number}
 */
export
const eAPTLS: _enum_for_PrimaryAuthenticationType.eAPTLS = PrimaryAuthenticationType.eAPTLS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrimaryAuthenticationType_none
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_none: _enum_for_PrimaryAuthenticationType.none = PrimaryAuthenticationType.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: _enum_for_PrimaryAuthenticationType.none = PrimaryAuthenticationType.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrimaryAuthenticationType_ePSAKA
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_ePSAKA: _enum_for_PrimaryAuthenticationType.ePSAKA = PrimaryAuthenticationType.ePSAKA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSAKA
 * @constant
 * @type {number}
 */
export
const ePSAKA: _enum_for_PrimaryAuthenticationType.ePSAKA = PrimaryAuthenticationType.ePSAKA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrimaryAuthenticationType_eAPAKA
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_eAPAKA: _enum_for_PrimaryAuthenticationType.eAPAKA = PrimaryAuthenticationType.eAPAKA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eAPAKA
 * @constant
 * @type {number}
 */
export
const eAPAKA: _enum_for_PrimaryAuthenticationType.eAPAKA = PrimaryAuthenticationType.eAPAKA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrimaryAuthenticationType_iMSAKA
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_iMSAKA: _enum_for_PrimaryAuthenticationType.iMSAKA = PrimaryAuthenticationType.iMSAKA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSAKA
 * @constant
 * @type {number}
 */
export
const iMSAKA: _enum_for_PrimaryAuthenticationType.iMSAKA = PrimaryAuthenticationType.iMSAKA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrimaryAuthenticationType_gBAAKA
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_gBAAKA: _enum_for_PrimaryAuthenticationType.gBAAKA = PrimaryAuthenticationType.gBAAKA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gBAAKA
 * @constant
 * @type {number}
 */
export
const gBAAKA: _enum_for_PrimaryAuthenticationType.gBAAKA = PrimaryAuthenticationType.gBAAKA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrimaryAuthenticationType_uMTSAKA
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_uMTSAKA: _enum_for_PrimaryAuthenticationType.uMTSAKA = PrimaryAuthenticationType.uMTSAKA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uMTSAKA
 * @constant
 * @type {number}
 */
export
const uMTSAKA: _enum_for_PrimaryAuthenticationType.uMTSAKA = PrimaryAuthenticationType.uMTSAKA; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PrimaryAuthenticationType: $.ASN1Decoder<PrimaryAuthenticationType> = $._decodeEnumerated;
export const _encode_PrimaryAuthenticationType: $.ASN1Encoder<PrimaryAuthenticationType> = $._encodeEnumerated;


/* eslint-enable */
