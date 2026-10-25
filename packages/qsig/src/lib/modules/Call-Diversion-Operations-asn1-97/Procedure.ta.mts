/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Procedure
 * @description
 *
 * Which call-forwarding procedure is being activated, deactivated, or
 * interrogated (ECMA-174 §6.3.1, §6.5.3.1). Invocation does not use this type;
 * it uses `DiversionReason`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Procedure  ::=  ENUMERATED {
 *     cfu(0),
 *     cfb(1),
 *     cfnr(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Procedure {
    cfu = 0,
    cfb = 1,
    cfnr = 2,
}

/**
 * @summary Procedure
 * @description
 *
 * Which call-forwarding procedure is being activated, deactivated, or
 * interrogated (ECMA-174 §6.3.1, §6.5.3.1). Invocation does not use this type;
 * it uses `DiversionReason`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Procedure  ::=  ENUMERATED {
 *     cfu(0),
 *     cfb(1),
 *     cfnr(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Procedure = _enum_for_Procedure;

/**
 * @summary Procedure
 * @description
 *
 * Which call-forwarding procedure is being activated, deactivated, or
 * interrogated (ECMA-174 §6.3.1, §6.5.3.1). Invocation does not use this type;
 * it uses `DiversionReason`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Procedure  ::=  ENUMERATED {
 *     cfu(0),
 *     cfb(1),
 *     cfnr(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Procedure = _enum_for_Procedure;

/**
 * @summary Procedure_cfu
 * @description
 *
 * Activate, deactivate, or interrogate Call Forwarding Unconditional (ECMA-173
 * §6.1.1; ECMA-174 §6.5.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 */
export
const Procedure_cfu = Procedure.cfu satisfies Procedure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cfu
 * @description Alias of {@link Procedure_cfu}.
 * @constant
 * @type {number}
 */
export
const cfu = Procedure.cfu satisfies Procedure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Procedure_cfb
 * @description
 *
 * Activate, deactivate, or interrogate Call Forwarding Busy (ECMA-173 §7.1.1;
 * ECMA-174 §6.5.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 */
export
const Procedure_cfb = Procedure.cfb satisfies Procedure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cfb
 * @description Alias of {@link Procedure_cfb}.
 * @constant
 * @type {number}
 */
export
const cfb = Procedure.cfb satisfies Procedure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Procedure_cfnr
 * @description
 *
 * Activate, deactivate, or interrogate Call Forwarding No Reply (ECMA-173
 * §8.1.1; ECMA-174 §6.5.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 */
export
const Procedure_cfnr = Procedure.cfnr satisfies Procedure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cfnr
 * @description Alias of {@link Procedure_cfnr}.
 * @constant
 * @type {number}
 */
export
const cfnr = Procedure.cfnr satisfies Procedure; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_Procedure: $.ASN1Decoder<Procedure> = $._decodeEnumerated;

export
const _encode_Procedure: $.ASN1Encoder<Procedure> = $._encodeEnumerated;

/* eslint-enable */
