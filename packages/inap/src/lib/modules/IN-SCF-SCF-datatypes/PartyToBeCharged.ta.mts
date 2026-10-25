/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartyToBeCharged
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyToBeCharged  ::=  ENUMERATED {orignating(0), terminating(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PartyToBeCharged {
    orignating = 0,
    terminating = 1,
}

/**
 * @summary PartyToBeCharged
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyToBeCharged  ::=  ENUMERATED {orignating(0), terminating(1)}
 * ```
 * 
 * @enum {number}
 */
export
type PartyToBeCharged = _enum_for_PartyToBeCharged;

/**
 * @summary PartyToBeCharged
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyToBeCharged  ::=  ENUMERATED {orignating(0), terminating(1)}
 * ```
 * 
 * @enum {number}
 */
export
const PartyToBeCharged: typeof _enum_for_PartyToBeCharged = _enum_for_PartyToBeCharged;

/**
 * @summary PartyToBeCharged_orignating
 * @constant
 * @type {number}
 */
export
const PartyToBeCharged_orignating: _enum_for_PartyToBeCharged.orignating = PartyToBeCharged.orignating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary orignating
 * @constant
 * @type {number}
 */
export
const orignating: _enum_for_PartyToBeCharged.orignating = PartyToBeCharged.orignating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyToBeCharged_terminating
 * @constant
 * @type {number}
 */
export
const PartyToBeCharged_terminating: _enum_for_PartyToBeCharged.terminating = PartyToBeCharged.terminating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating
 * @constant
 * @type {number}
 */
export
const terminating: _enum_for_PartyToBeCharged.terminating = PartyToBeCharged.terminating; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_PartyToBeCharged(el: _Element): PartyToBeCharged {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case PartyToBeCharged.orignating: return PartyToBeCharged.orignating;
        case PartyToBeCharged.terminating: return PartyToBeCharged.terminating;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for PartyToBeCharged.",
                el,
            );
    }
}

export
const _encode_PartyToBeCharged: $.ASN1Encoder<PartyToBeCharged> = $._encodeEnumerated as $.ASN1Encoder<PartyToBeCharged>;

/* eslint-enable */
