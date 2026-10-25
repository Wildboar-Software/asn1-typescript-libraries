/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PresenceState
 * @description
 * 
 * The PresenceState indicates whether the UE is inside or outside of the area
 * of interest (e.g. presence reporting area or the LADN area), or if the
 * presence reporting area is inactive in the serving node. PresenceState is
 * derived from the PresenceState type defined in TS 29.571 [17] clause
 * 5.4.3.20.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.69.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceState  ::=  ENUMERATED
 * {
 *     inArea(1),
 *     outOfArea(2),
 *     unknown(3),
 *     inactive(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PresenceState {
    /**
     * @description
     *
     * Indicates that the UE is inside or enters the presence reporting area.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.69.
     */
    inArea = 1,
    /**
     * @description
     *
     * Indicates that the UE is outside or leaves the presence reporting area.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.69.
     */
    outOfArea = 2,
    /**
     * @description
     *
     * Indicates it is unknown whether the UE is in the presence reporting area
     * or not.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.69.
     */
    unknown = 3,
    /**
     * @description
     *
     * Indicates that the presence reporting area is inactive in the serving
     * node.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.69.
     */
    inactive = 4,
}

/**
 * @summary PresenceState
 * @description
 * 
 * The PresenceState indicates whether the UE is inside or outside of the area
 * of interest (e.g. presence reporting area or the LADN area), or if the
 * presence reporting area is inactive in the serving node. PresenceState is
 * derived from the PresenceState type defined in TS 29.571 [17] clause
 * 5.4.3.20.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.69.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceState  ::=  ENUMERATED
 * {
 *     inArea(1),
 *     outOfArea(2),
 *     unknown(3),
 *     inactive(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PresenceState = _enum_for_PresenceState;

/**
 * @summary PresenceState
 * @description
 * 
 * The PresenceState indicates whether the UE is inside or outside of the area
 * of interest (e.g. presence reporting area or the LADN area), or if the
 * presence reporting area is inactive in the serving node. PresenceState is
 * derived from the PresenceState type defined in TS 29.571 [17] clause
 * 5.4.3.20.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.69.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceState  ::=  ENUMERATED
 * {
 *     inArea(1),
 *     outOfArea(2),
 *     unknown(3),
 *     inactive(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PresenceState: typeof _enum_for_PresenceState = _enum_for_PresenceState;

/**
 * @summary PresenceState_inArea
 * @description
 *
 * Indicates that the UE is inside or enters the presence reporting area.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.69.
 *
 * @constant
 * @type {number}
 */
export
const PresenceState_inArea: _enum_for_PresenceState.inArea = PresenceState.inArea; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inArea
 * @description
 *
 * Indicates that the UE is inside or enters the presence reporting area.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.69.
 *
 * @constant
 * @type {number}
 */
export
const inArea: _enum_for_PresenceState.inArea = PresenceState.inArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceState_outOfArea
 * @description
 *
 * Indicates that the UE is outside or leaves the presence reporting area.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.69.
 *
 * @constant
 * @type {number}
 */
export
const PresenceState_outOfArea: _enum_for_PresenceState.outOfArea = PresenceState.outOfArea; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outOfArea
 * @description
 *
 * Indicates that the UE is outside or leaves the presence reporting area.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.69.
 *
 * @constant
 * @type {number}
 */
export
const outOfArea: _enum_for_PresenceState.outOfArea = PresenceState.outOfArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceState_unknown
 * @description
 *
 * Indicates it is unknown whether the UE is in the presence reporting area or
 * not.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.69.
 *
 * @constant
 * @type {number}
 */
export
const PresenceState_unknown: _enum_for_PresenceState.unknown = PresenceState.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 *
 * Indicates it is unknown whether the UE is in the presence reporting area or
 * not.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.69.
 *
 * @constant
 * @type {number}
 */
export
const unknown: _enum_for_PresenceState.unknown = PresenceState.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceState_inactive
 * @description
 *
 * Indicates that the presence reporting area is inactive in the serving node.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.69.
 *
 * @constant
 * @type {number}
 */
export
const PresenceState_inactive: _enum_for_PresenceState.inactive = PresenceState.inactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inactive
 * @description
 *
 * Indicates that the presence reporting area is inactive in the serving node.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.69.
 *
 * @constant
 * @type {number}
 */
export
const inactive: _enum_for_PresenceState.inactive = PresenceState.inactive; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PresenceState: $.ASN1Decoder<PresenceState> = $._decodeEnumerated;
export const _encode_PresenceState: $.ASN1Encoder<PresenceState> = $._encodeEnumerated;


/* eslint-enable */
