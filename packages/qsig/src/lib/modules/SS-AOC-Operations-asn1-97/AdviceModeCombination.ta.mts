/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AdviceModeCombination
 * @description
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
 * @constant
 * @type {number}
 */
export
const AdviceModeCombination_rate: AdviceModeCombination = AdviceModeCombination.rate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rate
 * @constant
 * @type {number}
 */
export
const rate: AdviceModeCombination = AdviceModeCombination.rate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdviceModeCombination_rateInterim
 * @constant
 * @type {number}
 */
export
const AdviceModeCombination_rateInterim: AdviceModeCombination = AdviceModeCombination.rateInterim; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rateInterim
 * @constant
 * @type {number}
 */
export
const rateInterim: AdviceModeCombination = AdviceModeCombination.rateInterim; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdviceModeCombination_rateFinal
 * @constant
 * @type {number}
 */
export
const AdviceModeCombination_rateFinal: AdviceModeCombination = AdviceModeCombination.rateFinal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rateFinal
 * @constant
 * @type {number}
 */
export
const rateFinal: AdviceModeCombination = AdviceModeCombination.rateFinal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdviceModeCombination_interim
 * @constant
 * @type {number}
 */
export
const AdviceModeCombination_interim: AdviceModeCombination = AdviceModeCombination.interim; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interim
 * @constant
 * @type {number}
 */
export
const interim: AdviceModeCombination = AdviceModeCombination.interim; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdviceModeCombination_final
 * @constant
 * @type {number}
 */
export
const AdviceModeCombination_final: AdviceModeCombination = AdviceModeCombination.final; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary final
 * @constant
 * @type {number}
 */
export
const final: AdviceModeCombination = AdviceModeCombination.final; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdviceModeCombination_interimFinal
 * @constant
 * @type {number}
 */
export
const AdviceModeCombination_interimFinal: AdviceModeCombination = AdviceModeCombination.interimFinal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interimFinal
 * @constant
 * @type {number}
 */
export
const interimFinal: AdviceModeCombination = AdviceModeCombination.interimFinal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdviceModeCombination_rateInterimFinal
 * @constant
 * @type {number}
 */
export
const AdviceModeCombination_rateInterimFinal: AdviceModeCombination = AdviceModeCombination.rateInterimFinal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rateInterimFinal
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
