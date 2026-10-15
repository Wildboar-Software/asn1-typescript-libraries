/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EASStatus
 * @description
 * 
 * EAS status (e.g. Enabled, Disabled etc.), if available.
 *
 * 3GPP TS 33.128, clause 7.14.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASStatus  ::=  ENUMERATED
 * {
 *     enabled(1),
 *     disabled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EASStatus {
    enabled = 1,
    disabled = 2,
}

/**
 * @summary EASStatus
 * @description
 * 
 * EAS status (e.g. Enabled, Disabled etc.), if available.
 *
 * 3GPP TS 33.128, clause 7.14.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASStatus  ::=  ENUMERATED
 * {
 *     enabled(1),
 *     disabled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EASStatus = _enum_for_EASStatus;

/**
 * @summary EASStatus
 * @description
 * 
 * EAS status (e.g. Enabled, Disabled etc.), if available.
 *
 * 3GPP TS 33.128, clause 7.14.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASStatus  ::=  ENUMERATED
 * {
 *     enabled(1),
 *     disabled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EASStatus = _enum_for_EASStatus;

/**
 * @summary EASStatus_enabled
 * @constant
 * @type {number}
 */
export
const EASStatus_enabled: EASStatus = EASStatus.enabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enabled
 * @constant
 * @type {number}
 */
export
const enabled: EASStatus = EASStatus.enabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EASStatus_disabled
 * @constant
 * @type {number}
 */
export
const EASStatus_disabled: EASStatus = EASStatus.disabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disabled
 * @constant
 * @type {number}
 */
export
const disabled: EASStatus = EASStatus.disabled; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EASStatus: $.ASN1Decoder<EASStatus> = $._decodeEnumerated;
export const _encode_EASStatus: $.ASN1Encoder<EASStatus> = $._encodeEnumerated;


/* eslint-enable */
