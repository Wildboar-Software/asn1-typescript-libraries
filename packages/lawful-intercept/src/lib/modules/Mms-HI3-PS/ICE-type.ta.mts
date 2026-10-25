/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ICE_type {
    mMSC = 1,
    mMSProxyRelay = 2,
}

/**
 * @summary ICE_type
 * @description
 * 
 * Where the MMS content was intercepted. This module defines the MMSC and the
 * MMS Proxy-Relay.
 * 
 * 3GPP TS 33.108, annex B.16.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ICE-type  ::=  ENUMERATED
 * {
 *     mMSC (1),
 *     mMSProxyRelay    (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ICE_type = _enum_for_ICE_type | ENUMERATED;

/**
 * @summary ICE_type_mMSC
 * @description
 * 
 * MMS content intercepted at the MMSC. 3GPP TS 33.108, annex B.16.
 * @constant
 * @type {number}
 */
export
const ICE_type_mMSC: _enum_for_ICE_type.mMSC = _enum_for_ICE_type.mMSC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMSC
 * @description
 * 
 * Intercepted at the MMSC. Annex B.16.
 * @constant
 * @type {number}
 */
export
const mMSC: _enum_for_ICE_type.mMSC = ICE_type_mMSC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_mMSProxyRelay
 * @description
 * 
 * MMS content intercepted at the MMS Proxy-Relay. Clause 15.3.2.1: the MMS
 * Proxy-Relay provides correlation numbers and target identities to DF3. 3GPP
 * TS 33.108, annex B.16.
 * @constant
 * @type {number}
 */
export
const ICE_type_mMSProxyRelay: _enum_for_ICE_type.mMSProxyRelay = _enum_for_ICE_type.mMSProxyRelay; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMSProxyRelay
 * @description
 * 
 * Intercepted at the MMS Proxy-Relay. Clause 15.3.2.1.
 * @constant
 * @type {number}
 */
export
const mMSProxyRelay: _enum_for_ICE_type.mMSProxyRelay = ICE_type_mMSProxyRelay; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ICE_type: $.ASN1Decoder<ICE_type> = $._decodeEnumerated;
export const _encode_ICE_type: $.ASN1Encoder<ICE_type> = $._encodeEnumerated;


/* eslint-enable */
