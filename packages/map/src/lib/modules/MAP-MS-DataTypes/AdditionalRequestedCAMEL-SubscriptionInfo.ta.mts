/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AdditionalRequestedCAMEL_SubscriptionInfo {
    mt_sms_CSI = 0,
    mg_csi = 1,
    o_IM_CSI = 2,
    d_IM_CSI = 3,
    vt_IM_CSI = 4,
}

/**
 * @summary AdditionalRequestedCAMEL_SubscriptionInfo
 * @description
 *
 * Selects additional CAMEL Subscription Information beyond the basic CSI set
 * (MT-SMS-CSI, MG-CSI, O-IM-CSI, D-IM-CSI, VT-IM-CSI). Exception handling:
 * unknown values shall be discarded by the receiver (3GPP TS 29.002 V19.1.0
 * clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalRequestedCAMEL-SubscriptionInfo  ::=  ENUMERATED {
 *     mt-sms-CSI    (0),
 *     mg-csi    (1),
 *     o-IM-CSI    (2),
 *     d-IM-CSI    (3),
 *     vt-IM-CSI    (4),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type AdditionalRequestedCAMEL_SubscriptionInfo = _enum_for_AdditionalRequestedCAMEL_SubscriptionInfo | ENUMERATED;

/**
 * @summary AdditionalRequestedCAMEL_SubscriptionInfo_mt_sms_CSI
 * @constant
 * @type {number}
 */
export
const AdditionalRequestedCAMEL_SubscriptionInfo_mt_sms_CSI: AdditionalRequestedCAMEL_SubscriptionInfo = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mt_sms_CSI
 * @constant
 * @type {number}
 */
export
const mt_sms_CSI: AdditionalRequestedCAMEL_SubscriptionInfo = AdditionalRequestedCAMEL_SubscriptionInfo_mt_sms_CSI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalRequestedCAMEL_SubscriptionInfo_mg_csi
 * @constant
 * @type {number}
 */
export
const AdditionalRequestedCAMEL_SubscriptionInfo_mg_csi: AdditionalRequestedCAMEL_SubscriptionInfo = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mg_csi
 * @constant
 * @type {number}
 */
export
const mg_csi: AdditionalRequestedCAMEL_SubscriptionInfo = AdditionalRequestedCAMEL_SubscriptionInfo_mg_csi; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalRequestedCAMEL_SubscriptionInfo_o_IM_CSI
 * @constant
 * @type {number}
 */
export
const AdditionalRequestedCAMEL_SubscriptionInfo_o_IM_CSI: AdditionalRequestedCAMEL_SubscriptionInfo = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary o_IM_CSI
 * @constant
 * @type {number}
 */
export
const o_IM_CSI: AdditionalRequestedCAMEL_SubscriptionInfo = AdditionalRequestedCAMEL_SubscriptionInfo_o_IM_CSI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalRequestedCAMEL_SubscriptionInfo_d_IM_CSI
 * @constant
 * @type {number}
 */
export
const AdditionalRequestedCAMEL_SubscriptionInfo_d_IM_CSI: AdditionalRequestedCAMEL_SubscriptionInfo = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d_IM_CSI
 * @constant
 * @type {number}
 */
export
const d_IM_CSI: AdditionalRequestedCAMEL_SubscriptionInfo = AdditionalRequestedCAMEL_SubscriptionInfo_d_IM_CSI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalRequestedCAMEL_SubscriptionInfo_vt_IM_CSI
 * @constant
 * @type {number}
 */
export
const AdditionalRequestedCAMEL_SubscriptionInfo_vt_IM_CSI: AdditionalRequestedCAMEL_SubscriptionInfo = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary vt_IM_CSI
 * @constant
 * @type {number}
 */
export
const vt_IM_CSI: AdditionalRequestedCAMEL_SubscriptionInfo = AdditionalRequestedCAMEL_SubscriptionInfo_vt_IM_CSI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalRequestedCAMEL_SubscriptionInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AdditionalRequestedCAMEL_SubscriptionInfo = $._decodeEnumerated;

/**
 * @summary Encodes a(n) AdditionalRequestedCAMEL_SubscriptionInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalRequestedCAMEL_SubscriptionInfo, encoded as an ASN.1 Element.
 */
export const _encode_AdditionalRequestedCAMEL_SubscriptionInfo = $._encodeEnumerated;


/* eslint-enable */
