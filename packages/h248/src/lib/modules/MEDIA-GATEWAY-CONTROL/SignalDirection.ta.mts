/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SignalDirection {
    /**
     * The signal is played into the context, toward the other terminations
     * (clause 7.1.11.9).
     */
    internal = 0,
    /**
     * The signal is sent from the MG toward an external point. This is the
     * usual default (clause 7.1.11.9).
     */
    external = 1,
    /**
     * The signal is sent both into the context and toward the outside (clause
     * 7.1.11.9). The Recommendation's prose calls this "bothway".
     */
    both = 2,
}

/**
 * @summary SignalDirection
 * @description
 * 
 * Where a signal is played (ITU-T Rec. H.248.1 (03/2013) clause 7.1.11.9).
 *
 * The default, when the package does not say otherwise, is toward the outside
 * of the context. A direction in the descriptor overrides the package default.
 * If both this parameter and a package direction parameter are present, this
 * one wins. Error 501 ("Not implemented") is returned when the MG cannot
 * produce the requested direction.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignalDirection  ::=  ENUMERATED
 *     {
 *         internal(0),
 *         external(1),
 *         both(2),
 *         ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type SignalDirection = _enum_for_SignalDirection | ENUMERATED;

/**
 * @summary SignalDirection_internal
 * @description
 *
 * The signal is played into the context, toward the other terminations (clause
 * 7.1.11.9).
 *
 * @constant
 * @type {number}
 */
export
const SignalDirection_internal: _enum_for_SignalDirection.internal = _enum_for_SignalDirection.internal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internal
 * @constant
 * @type {number}
 */
export
const internal: _enum_for_SignalDirection.internal = SignalDirection_internal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignalDirection_external
 * @description
 *
 * The signal is sent from the MG toward an external point. This is the usual
 * default (clause 7.1.11.9).
 *
 * @constant
 * @type {number}
 */
export
const SignalDirection_external: _enum_for_SignalDirection.external = _enum_for_SignalDirection.external; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary external
 * @constant
 * @type {number}
 */
export
const external: _enum_for_SignalDirection.external = SignalDirection_external; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignalDirection_both
 * @description
 *
 * The signal is sent both into the context and toward the outside (clause
 * 7.1.11.9). The Recommendation's prose calls this "bothway".
 *
 * @constant
 * @type {number}
 */
export
const SignalDirection_both: _enum_for_SignalDirection.both = _enum_for_SignalDirection.both; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary both
 * @constant
 * @type {number}
 */
export
const both: _enum_for_SignalDirection.both = SignalDirection_both; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SignalDirection: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_SignalDirection: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
