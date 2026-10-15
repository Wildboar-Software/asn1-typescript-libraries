/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TPDU_direction
 * @description
 * 
 * Direction of a conference T-PDU: from or to the target, unknown, the
 * conference as target, from or to the mixer, or combined.
 * 
 * 3GPP TS 33.108, annex L.2.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TPDU-direction  ::=  ENUMERATED
 * {
 *     from-target     (1),
 *     to-target         (2),
 *     unknown         (3),
 *     conftarget      (4),
 *       -- When the conference is the target (4) is used to denote there is no
 *       -- directionality.
 *     from-mixer        (5),
 *       -- Indicates the stream sent from the conference server towards the conference party.
 *     to-mixer        (6),
 *       -- Indicates the stream sent from the conference party towards the conference party server.
 *     combined        (7)
 *       -- Indicates that combined CC delivery is used.
 * 
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TPDU_direction {
    from_target = 1,
    to_target = 2,
    unknown = 3,
    conftarget = 4,
    from_mixer = 5,
    to_mixer = 6,
    combined = 7,
}

/**
 * @summary TPDU_direction
 * @description
 * 
 * Direction of a conference T-PDU: from or to the target, unknown, the
 * conference as target, from or to the mixer, or combined.
 * 
 * 3GPP TS 33.108, annex L.2.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TPDU-direction  ::=  ENUMERATED
 * {
 *     from-target     (1),
 *     to-target         (2),
 *     unknown         (3),
 *     conftarget      (4),
 *       -- When the conference is the target (4) is used to denote there is no
 *       -- directionality.
 *     from-mixer        (5),
 *       -- Indicates the stream sent from the conference server towards the conference party.
 *     to-mixer        (6),
 *       -- Indicates the stream sent from the conference party towards the conference party server.
 *     combined        (7)
 *       -- Indicates that combined CC delivery is used.
 * 
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TPDU_direction = _enum_for_TPDU_direction;

/**
 * @summary TPDU_direction
 * @description
 * 
 * Direction of a conference T-PDU: from or to the target, unknown, the
 * conference as target, from or to the mixer, or combined.
 * 
 * 3GPP TS 33.108, annex L.2.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TPDU-direction  ::=  ENUMERATED
 * {
 *     from-target     (1),
 *     to-target         (2),
 *     unknown         (3),
 *     conftarget      (4),
 *       -- When the conference is the target (4) is used to denote there is no
 *       -- directionality.
 *     from-mixer        (5),
 *       -- Indicates the stream sent from the conference server towards the conference party.
 *     to-mixer        (6),
 *       -- Indicates the stream sent from the conference party towards the conference party server.
 *     combined        (7)
 *       -- Indicates that combined CC delivery is used.
 * 
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TPDU_direction = _enum_for_TPDU_direction;

/**
 * @summary TPDU_direction_from_target
 * @description
 * 
 * CC coming from the target to the conference mixer. 3GPP TS 33.108, annex L.2.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_from_target: TPDU_direction = TPDU_direction.from_target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary from_target
 * @description
 * 
 * From the target to the conference mixer. Annex L.2.
 * @constant
 * @type {number}
 */
export
const from_target: TPDU_direction = TPDU_direction.from_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_to_target
 * @description
 * 
 * CC sent towards the target from the conference mixer. 3GPP TS 33.108, annex
 * L.2.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_to_target: TPDU_direction = TPDU_direction.to_target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary to_target
 * @description
 * 
 * Towards the target from the conference mixer. Annex L.2.
 * @constant
 * @type {number}
 */
export
const to_target: TPDU_direction = TPDU_direction.to_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_unknown
 * @description
 * 
 * T-PDU direction cannot be determined. 3GPP TS 33.108, annex L.2.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_unknown: TPDU_direction = TPDU_direction.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 * 
 * Direction cannot be determined. Annex L.2.
 * @constant
 * @type {number}
 */
export
const unknown: TPDU_direction = TPDU_direction.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_conftarget
 * @description
 * 
 * The conference itself is the target. The module comment says this denotes
 * that there is no directionality. 3GPP TS 33.108, annex L.2.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_conftarget: TPDU_direction = TPDU_direction.conftarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conftarget
 * @description
 * 
 * Conference is the target; no directionality. Annex L.2.
 * @constant
 * @type {number}
 */
export
const conftarget: TPDU_direction = TPDU_direction.conftarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_from_mixer
 * @description
 * 
 * CC coming from the conference mixer: the stream the conference server sends
 * towards the conference party. 3GPP TS 33.108, annex L.2.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_from_mixer: TPDU_direction = TPDU_direction.from_mixer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary from_mixer
 * @description
 * 
 * From the conference mixer towards a party. Annex L.2.
 * @constant
 * @type {number}
 */
export
const from_mixer: TPDU_direction = TPDU_direction.from_mixer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_to_mixer
 * @description
 * 
 * CC sent towards the conference mixer from the conference party. 3GPP TS
 * 33.108, annex L.2.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_to_mixer: TPDU_direction = TPDU_direction.to_mixer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary to_mixer
 * @description
 * 
 * Towards the conference mixer from a party. Annex L.2.
 * @constant
 * @type {number}
 */
export
const to_mixer: TPDU_direction = TPDU_direction.to_mixer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_combined
 * @description
 * 
 * Combined CC, to and from the conference mixer, or to and from the target.
 * 3GPP TS 33.108, annex L.2.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_combined: TPDU_direction = TPDU_direction.combined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combined
 * @description
 * 
 * Combined to and from the mixer, or to and from the target. Annex L.2.
 * @constant
 * @type {number}
 */
export
const combined: TPDU_direction = TPDU_direction.combined; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TPDU_direction: $.ASN1Decoder<TPDU_direction> = $._decodeEnumerated;
export const _encode_TPDU_direction: $.ASN1Encoder<TPDU_direction> = $._encodeEnumerated;


/* eslint-enable */
