/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary RoutingAction
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§12).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoutingAction  ::=  ENUMERATED {relayed(0), rerouted(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_RoutingAction {
    relayed = 0,
    rerouted = 1,
}

/**
 * @summary RoutingAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoutingAction  ::=  ENUMERATED {relayed(0), rerouted(1)}
 * ```
 *
 * @enum {number}
 */
export type RoutingAction = _enum_for_RoutingAction;

/**
 * @summary RoutingAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoutingAction  ::=  ENUMERATED {relayed(0), rerouted(1)}
 * ```
 *
 * @enum {number}
 */
export const RoutingAction = _enum_for_RoutingAction;

/**
 * @summary RoutingAction_relayed
 * @constant
 * @type {number}
 */
export const RoutingAction_relayed =
    RoutingAction.relayed satisfies RoutingAction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary relayed
 * @constant
 * @type {number}
 */
export const relayed =
    RoutingAction.relayed satisfies RoutingAction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RoutingAction_rerouted
 * @constant
 * @type {number}
 */
export const RoutingAction_rerouted =
    RoutingAction.rerouted satisfies RoutingAction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rerouted
 * @constant
 * @type {number}
 */
export const rerouted =
    RoutingAction.rerouted satisfies RoutingAction; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_RoutingAction(el: _Element): RoutingAction {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case RoutingAction.relayed: return RoutingAction.relayed;
        case RoutingAction.rerouted: return RoutingAction.rerouted;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for RoutingAction.',
                el,
            );
    }
}


export const _encode_RoutingAction: $.ASN1Encoder<RoutingAction> = $._encodeEnumerated as $.ASN1Encoder<RoutingAction>;


/* eslint-enable */
