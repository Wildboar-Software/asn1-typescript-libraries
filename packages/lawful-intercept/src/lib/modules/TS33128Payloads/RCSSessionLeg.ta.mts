/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RCSSessionLeg
 * @description
 * 
 * The RCSSessionLeg shall be set to indicate whether the SIP Session Exchange
 * is between the server and a remote endpoint or between the server and the
 * local client.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionLeg  ::=  ENUMERATED
 * {
 *     remoteLeg(1),
 *     localLeg(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RCSSessionLeg {
    /**
     * @description
     *
     * Shall be selected if the exchange took place between the server and a
     * remote endpoint.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.4.
     */
    remoteLeg = 1,
    /**
     * @description
     *
     * Shall be selected if the exchange took place between the server and the
     * local client.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.4.
     */
    localLeg = 2,
}

/**
 * @summary RCSSessionLeg
 * @description
 * 
 * The RCSSessionLeg shall be set to indicate whether the SIP Session Exchange
 * is between the server and a remote endpoint or between the server and the
 * local client.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionLeg  ::=  ENUMERATED
 * {
 *     remoteLeg(1),
 *     localLeg(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RCSSessionLeg = _enum_for_RCSSessionLeg;

/**
 * @summary RCSSessionLeg
 * @description
 * 
 * The RCSSessionLeg shall be set to indicate whether the SIP Session Exchange
 * is between the server and a remote endpoint or between the server and the
 * local client.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionLeg  ::=  ENUMERATED
 * {
 *     remoteLeg(1),
 *     localLeg(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RCSSessionLeg = _enum_for_RCSSessionLeg;

/**
 * @summary RCSSessionLeg_remoteLeg
 * @description
 *
 * Shall be selected if the exchange took place between the server and a remote
 * endpoint.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.4.
 *
 * @constant
 * @type {number}
 */
export
const RCSSessionLeg_remoteLeg = RCSSessionLeg.remoteLeg; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remoteLeg
 * @description
 *
 * Shall be selected if the exchange took place between the server and a remote
 * endpoint.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.4.
 *
 * @constant
 * @type {number}
 */
export
const remoteLeg = RCSSessionLeg.remoteLeg; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionLeg_localLeg
 * @description
 *
 * Shall be selected if the exchange took place between the server and the local
 * client.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.4.
 *
 * @constant
 * @type {number}
 */
export
const RCSSessionLeg_localLeg = RCSSessionLeg.localLeg; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localLeg
 * @description
 *
 * Shall be selected if the exchange took place between the server and the local
 * client.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.4.
 *
 * @constant
 * @type {number}
 */
export
const localLeg = RCSSessionLeg.localLeg; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RCSSessionLeg: $.ASN1Decoder<RCSSessionLeg> = $._decodeEnumerated;
export const _encode_RCSSessionLeg: $.ASN1Encoder<RCSSessionLeg> = $._encodeEnumerated;


/* eslint-enable */
