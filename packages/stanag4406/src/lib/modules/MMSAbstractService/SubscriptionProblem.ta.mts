/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubscriptionProblem
 * @description
 * 
 * Why a management or origination operation failed subscription checking: the
 * MMS element of service, or the MTS element of service, is not subscribed.
 * STANAG 4406 (Ed. 2), Annex A, Annex G.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   mms-eos-not-subcribed(0),
 *   mts-eos-not-subcribed(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SubscriptionProblem {
    mms_eos_not_subcribed = 0,
    mts_eos_not_subcribed = 1,
}

/**
 * @summary SubscriptionProblem
 * @description
 * 
 * Why a management or origination operation failed subscription checking: the
 * MMS element of service, or the MTS element of service, is not subscribed.
 * STANAG 4406 (Ed. 2), Annex A, Annex G.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   mms-eos-not-subcribed(0),
 *   mts-eos-not-subcribed(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SubscriptionProblem = _enum_for_SubscriptionProblem;

/**
 * @summary SubscriptionProblem
 * @description
 * 
 * Why a management or origination operation failed subscription checking: the
 * MMS element of service, or the MTS element of service, is not subscribed.
 * STANAG 4406 (Ed. 2), Annex A, Annex G.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   mms-eos-not-subcribed(0),
 *   mts-eos-not-subcribed(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SubscriptionProblem = _enum_for_SubscriptionProblem;

/**
 * @summary SubscriptionProblem_mms_eos_not_subcribed
 * @description
 *
 * The MMS element of service is not subscribed. The module spells this
 * `subcribed`, as Annex G does. STANAG 4406 (Ed. 2), Annex A, Annex G.
 * @constant
 * @type {number}
 */
export
const SubscriptionProblem_mms_eos_not_subcribed: SubscriptionProblem = SubscriptionProblem.mms_eos_not_subcribed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mms_eos_not_subcribed
 * @description
 *
 * The MMS element of service is not subscribed. The module spells this
 * `subcribed`, as Annex G does. STANAG 4406 (Ed. 2), Annex A, Annex G.
 * @constant
 * @type {number}
 */
export
const mms_eos_not_subcribed: SubscriptionProblem = SubscriptionProblem.mms_eos_not_subcribed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionProblem_mts_eos_not_subcribed
 * @description
 *
 * The MTS element of service is not subscribed. The module spells this
 * `subcribed`, as Annex G does. STANAG 4406 (Ed. 2), Annex A, Annex G.
 * @constant
 * @type {number}
 */
export
const SubscriptionProblem_mts_eos_not_subcribed: SubscriptionProblem = SubscriptionProblem.mts_eos_not_subcribed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mts_eos_not_subcribed
 * @description
 *
 * The MTS element of service is not subscribed. The module spells this
 * `subcribed`, as Annex G does. STANAG 4406 (Ed. 2), Annex A, Annex G.
 * @constant
 * @type {number}
 */
export
const mts_eos_not_subcribed: SubscriptionProblem = SubscriptionProblem.mts_eos_not_subcribed; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SubscriptionProblem: $.ASN1Decoder<SubscriptionProblem> = $._decodeEnumerated;
export const _encode_SubscriptionProblem: $.ASN1Encoder<SubscriptionProblem> = $._encodeEnumerated;


/* eslint-enable */
