/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StationaryIndication
 * @description
 * 
 * Indicates whether the UE is stationary or mobile, if available. See TS 38.413
 * [23] clause 9.3.1.144. Encoded according to TS 29.571 [17] clause 5.4.3.21.
 * The SBIReference for this parameter shall be populated with
 * 'TS29571_CommonData.yaml#/components/schemas/StationaryIndication'.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.12.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StationaryIndication  ::=  ENUMERATED
 * {
 *     stationary(1),
 *     mobile(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_StationaryIndication {
    stationary = 1,
    mobile = 2,
}

/**
 * @summary StationaryIndication
 * @description
 * 
 * Indicates whether the UE is stationary or mobile, if available. See TS 38.413
 * [23] clause 9.3.1.144. Encoded according to TS 29.571 [17] clause 5.4.3.21.
 * The SBIReference for this parameter shall be populated with
 * 'TS29571_CommonData.yaml#/components/schemas/StationaryIndication'.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.12.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StationaryIndication  ::=  ENUMERATED
 * {
 *     stationary(1),
 *     mobile(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type StationaryIndication = _enum_for_StationaryIndication;

/**
 * @summary StationaryIndication
 * @description
 * 
 * Indicates whether the UE is stationary or mobile, if available. See TS 38.413
 * [23] clause 9.3.1.144. Encoded according to TS 29.571 [17] clause 5.4.3.21.
 * The SBIReference for this parameter shall be populated with
 * 'TS29571_CommonData.yaml#/components/schemas/StationaryIndication'.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.12.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StationaryIndication  ::=  ENUMERATED
 * {
 *     stationary(1),
 *     mobile(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const StationaryIndication = _enum_for_StationaryIndication;

/**
 * @summary StationaryIndication_stationary
 * @constant
 * @type {number}
 */
export
const StationaryIndication_stationary = StationaryIndication.stationary satisfies StationaryIndication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stationary
 * @constant
 * @type {number}
 */
export
const stationary = StationaryIndication.stationary satisfies StationaryIndication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StationaryIndication_mobile
 * @constant
 * @type {number}
 */
export
const StationaryIndication_mobile = StationaryIndication.mobile satisfies StationaryIndication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mobile
 * @constant
 * @type {number}
 */
export
const mobile = StationaryIndication.mobile satisfies StationaryIndication; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_StationaryIndication: $.ASN1Decoder<StationaryIndication> = $._decodeEnumerated;
export const _encode_StationaryIndication: $.ASN1Encoder<StationaryIndication> = $._encodeEnumerated;


/* eslint-enable */
