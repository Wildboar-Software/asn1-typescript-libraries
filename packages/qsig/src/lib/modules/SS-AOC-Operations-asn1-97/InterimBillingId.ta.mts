/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary InterimBillingId
 * @description
 *
 * Billing identification on an interim charge. Only one value applies. If the
 * element is absent, the default is normal charging (ECMA-211 §B.1.3, §B.2).
 * Value 1 is unassigned; ECMA-212 §6.3.1 does not explain the gap. Diversion
 * and transfer identifications appear only on `FinalBillingId`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterimBillingId  ::=  ENUMERATED {
 *     normalCharging(0),
 *     creditCardCharging(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_InterimBillingId {
    normalCharging = 0,
    creditCardCharging = 2,
}

/**
 * @summary InterimBillingId
 * @description
 *
 * Billing identification on an interim charge. Only one value applies. If the
 * element is absent, the default is normal charging (ECMA-211 §B.1.3, §B.2).
 * Value 1 is unassigned; ECMA-212 §6.3.1 does not explain the gap. Diversion
 * and transfer identifications appear only on `FinalBillingId`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterimBillingId  ::=  ENUMERATED {
 *     normalCharging(0),
 *     creditCardCharging(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type InterimBillingId = _enum_for_InterimBillingId;

/**
 * @summary InterimBillingId
 * @description
 *
 * Billing identification on an interim charge. Only one value applies. If the
 * element is absent, the default is normal charging (ECMA-211 §B.1.3, §B.2).
 * Value 1 is unassigned; ECMA-212 §6.3.1 does not explain the gap. Diversion
 * and transfer identifications appear only on `FinalBillingId`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterimBillingId  ::=  ENUMERATED {
 *     normalCharging(0),
 *     creditCardCharging(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const InterimBillingId = _enum_for_InterimBillingId;

/**
 * @summary InterimBillingId_normalCharging
 * @description
 *
 * The calling user is charged under normal charging (ECMA-211 §B.1.3). May be
 * omitted; absence means this value (§B.2).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const InterimBillingId_normalCharging = InterimBillingId.normalCharging satisfies InterimBillingId; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalCharging
 * @description Alias of {@link InterimBillingId_normalCharging}.
 * @constant
 * @type {number}
 */
export
const normalCharging = InterimBillingId.normalCharging satisfies InterimBillingId; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterimBillingId_creditCardCharging
 * @description Charges are paid by credit card (ECMA-211 §B.1.3).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const InterimBillingId_creditCardCharging = InterimBillingId.creditCardCharging satisfies InterimBillingId; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary creditCardCharging
 * @description Alias of {@link InterimBillingId_creditCardCharging}.
 * @constant
 * @type {number}
 */
export
const creditCardCharging = InterimBillingId.creditCardCharging satisfies InterimBillingId; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_InterimBillingId: $.ASN1Decoder<InterimBillingId> = $._decodeEnumerated;

export
const _encode_InterimBillingId: $.ASN1Encoder<InterimBillingId> = $._encodeEnumerated;

/* eslint-enable */
