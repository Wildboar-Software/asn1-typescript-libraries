/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AdviceModeCombination
 * @description
 *
 * One or more advice modes operating at the same time (ECMA-212 §4.2.2). Charge
 * rate provision supplies the rate, interim charge provision supplies subtotals
 * during the call and a total at the end, and final charge provision supplies
 * the total at the end (§4.2.3 to §4.2.5). A service may be met by more than
 * one combination; AOC-D, for example, may use rate alone, interim alone, or
 * rate together with final (§6.1). On a request, zero elements means any
 * combination is acceptable, one element means only that combination is
 * acceptable, and several elements are acceptable combinations with the most
 * preferred first (§6.6.1.1.4). A further request while AOC is already active
 * shall contain at least one element (§6.6.1.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdviceModeCombination  ::=  ENUMERATED {
 *     -- advice mode combination
 *     rate(0), -- charge rate provision
 *     rateInterim(1), -- charge rate and interim charge provision
 *     rateFinal(2), -- charge rate and final charge provision
 *     interim(3), -- interim charge provision
 *     final(4), -- final charge provision
 *     interimFinal(5), -- interim charge and final charge provision
 *     rateInterimFinal(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AdviceModeCombination {
    rate = 0,
    rateInterim = 1,
    rateFinal = 2,
    interim = 3,
    final = 4,
    interimFinal = 5,
    rateInterimFinal = 6,
}

/**
 * @summary AdviceModeCombination
 * @description
 *
 * One or more advice modes operating at the same time (ECMA-212 §4.2.2). Charge
 * rate provision supplies the rate, interim charge provision supplies subtotals
 * during the call and a total at the end, and final charge provision supplies
 * the total at the end (§4.2.3 to §4.2.5). A service may be met by more than
 * one combination; AOC-D, for example, may use rate alone, interim alone, or
 * rate together with final (§6.1). On a request, zero elements means any
 * combination is acceptable, one element means only that combination is
 * acceptable, and several elements are acceptable combinations with the most
 * preferred first (§6.6.1.1.4). A further request while AOC is already active
 * shall contain at least one element (§6.6.1.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdviceModeCombination  ::=  ENUMERATED {
 *     -- advice mode combination
 *     rate(0), -- charge rate provision
 *     rateInterim(1), -- charge rate and interim charge provision
 *     rateFinal(2), -- charge rate and final charge provision
 *     interim(3), -- interim charge provision
 *     final(4), -- final charge provision
 *     interimFinal(5), -- interim charge and final charge provision
 *     rateInterimFinal(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AdviceModeCombination = _enum_for_AdviceModeCombination;

/**
 * @summary AdviceModeCombination
 * @description
 *
 * One or more advice modes operating at the same time (ECMA-212 §4.2.2). Charge
 * rate provision supplies the rate, interim charge provision supplies subtotals
 * during the call and a total at the end, and final charge provision supplies
 * the total at the end (§4.2.3 to §4.2.5). A service may be met by more than
 * one combination; AOC-D, for example, may use rate alone, interim alone, or
 * rate together with final (§6.1). On a request, zero elements means any
 * combination is acceptable, one element means only that combination is
 * acceptable, and several elements are acceptable combinations with the most
 * preferred first (§6.6.1.1.4). A further request while AOC is already active
 * shall contain at least one element (§6.6.1.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdviceModeCombination  ::=  ENUMERATED {
 *     -- advice mode combination
 *     rate(0), -- charge rate provision
 *     rateInterim(1), -- charge rate and interim charge provision
 *     rateFinal(2), -- charge rate and final charge provision
 *     interim(3), -- interim charge provision
 *     final(4), -- final charge provision
 *     interimFinal(5), -- interim charge and final charge provision
 *     rateInterimFinal(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AdviceModeCombination = _enum_for_AdviceModeCombination;

/**
 * @summary AdviceModeCombination_rate
 * @description Charge rate provision (ECMA-212 §6.3.1, §4.2.3).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const AdviceModeCombination_rate: AdviceModeCombination = AdviceModeCombination.rate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rate
 * @description Alias of {@link AdviceModeCombination_rate}.
 * @constant
 * @type {number}
 */
export
const rate: AdviceModeCombination = AdviceModeCombination.rate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdviceModeCombination_rateInterim
 * @description
 *
 * Charge rate provision and interim charge provision together (ECMA-212
 * §6.3.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const AdviceModeCombination_rateInterim: AdviceModeCombination = AdviceModeCombination.rateInterim; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rateInterim
 * @description Alias of {@link AdviceModeCombination_rateInterim}.
 * @constant
 * @type {number}
 */
export
const rateInterim: AdviceModeCombination = AdviceModeCombination.rateInterim; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdviceModeCombination_rateFinal
 * @description
 *
 * Charge rate provision and final charge provision together (ECMA-212 §6.3.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const AdviceModeCombination_rateFinal: AdviceModeCombination = AdviceModeCombination.rateFinal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rateFinal
 * @description Alias of {@link AdviceModeCombination_rateFinal}.
 * @constant
 * @type {number}
 */
export
const rateFinal: AdviceModeCombination = AdviceModeCombination.rateFinal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdviceModeCombination_interim
 * @description Interim charge provision (ECMA-212 §6.3.1, §4.2.4).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const AdviceModeCombination_interim: AdviceModeCombination = AdviceModeCombination.interim; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interim
 * @description Alias of {@link AdviceModeCombination_interim}.
 * @constant
 * @type {number}
 */
export
const interim: AdviceModeCombination = AdviceModeCombination.interim; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdviceModeCombination_final
 * @description Final charge provision (ECMA-212 §6.3.1, §4.2.5).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const AdviceModeCombination_final: AdviceModeCombination = AdviceModeCombination.final; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary final
 * @description Alias of {@link AdviceModeCombination_final}.
 * @constant
 * @type {number}
 */
export
const final: AdviceModeCombination = AdviceModeCombination.final; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdviceModeCombination_interimFinal
 * @description
 *
 * Interim charge provision and final charge provision together (ECMA-212
 * §6.3.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const AdviceModeCombination_interimFinal: AdviceModeCombination = AdviceModeCombination.interimFinal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interimFinal
 * @description Alias of {@link AdviceModeCombination_interimFinal}.
 * @constant
 * @type {number}
 */
export
const interimFinal: AdviceModeCombination = AdviceModeCombination.interimFinal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdviceModeCombination_rateInterimFinal
 * @description
 *
 * Charge rate, interim charge, and final charge provision together (ECMA-212
 * §6.3.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const AdviceModeCombination_rateInterimFinal: AdviceModeCombination = AdviceModeCombination.rateInterimFinal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rateInterimFinal
 * @description Alias of {@link AdviceModeCombination_rateInterimFinal}.
 * @constant
 * @type {number}
 */
export
const rateInterimFinal: AdviceModeCombination = AdviceModeCombination.rateInterimFinal; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_AdviceModeCombination: $.ASN1Decoder<AdviceModeCombination> = $._decodeEnumerated;

export
const _encode_AdviceModeCombination: $.ASN1Encoder<AdviceModeCombination> = $._encodeEnumerated;

/* eslint-enable */
