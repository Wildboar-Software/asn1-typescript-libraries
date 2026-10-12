/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SwitchOffIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwitchOffIndicator  ::=  ENUMERATED
 * {
 *     normalDetach(1),
 *     switchOff(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SwitchOffIndicator {
    normalDetach = 1,
    switchOff = 2,
}

/**
 * @summary SwitchOffIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwitchOffIndicator  ::=  ENUMERATED
 * {
 *     normalDetach(1),
 *     switchOff(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SwitchOffIndicator = _enum_for_SwitchOffIndicator;

/**
 * @summary SwitchOffIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwitchOffIndicator  ::=  ENUMERATED
 * {
 *     normalDetach(1),
 *     switchOff(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SwitchOffIndicator = _enum_for_SwitchOffIndicator;

/**
 * @summary SwitchOffIndicator_normalDetach
 * @constant
 * @type {number}
 */
export
const SwitchOffIndicator_normalDetach: SwitchOffIndicator = SwitchOffIndicator.normalDetach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalDetach
 * @constant
 * @type {number}
 */
export
const normalDetach: SwitchOffIndicator = SwitchOffIndicator.normalDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SwitchOffIndicator_switchOff
 * @constant
 * @type {number}
 */
export
const SwitchOffIndicator_switchOff: SwitchOffIndicator = SwitchOffIndicator.switchOff; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchOff
 * @constant
 * @type {number}
 */
export
const switchOff: SwitchOffIndicator = SwitchOffIndicator.switchOff; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SwitchOffIndicator: $.ASN1Decoder<SwitchOffIndicator> = $._decodeEnumerated;
export const _encode_SwitchOffIndicator: $.ASN1Encoder<SwitchOffIndicator> = $._encodeEnumerated;


/* eslint-enable */
