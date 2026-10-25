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
 * @summary ProtectionDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionDirection  ::=  ENUMERATED {transmit(0), receive(1), bidirectional(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ProtectionDirection {
    transmit = 0,
    receive = 1,
    bidirectional = 2,
}


/**
 * @summary ProtectionDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionDirection  ::=  ENUMERATED {transmit(0), receive(1), bidirectional(2)}
 * ```
 *
 * @enum {number}
 */
export type ProtectionDirection = _enum_for_ProtectionDirection;


/**
 * @summary ProtectionDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionDirection  ::=  ENUMERATED {transmit(0), receive(1), bidirectional(2)}
 * ```
 *
 * @enum {number}
 */
export const ProtectionDirection = _enum_for_ProtectionDirection;


/**
 * @summary ProtectionDirection_transmit
 * @constant
 * @type {number}
 */
export const ProtectionDirection_transmit =
    ProtectionDirection.transmit; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary transmit
 * @constant
 * @type {number}
 */
export const transmit =
    ProtectionDirection.transmit; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProtectionDirection_receive
 * @constant
 * @type {number}
 */
export const ProtectionDirection_receive =
    ProtectionDirection.receive; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary receive
 * @constant
 * @type {number}
 */
export const receive =
    ProtectionDirection.receive; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProtectionDirection_bidirectional
 * @constant
 * @type {number}
 */
export const ProtectionDirection_bidirectional =
    ProtectionDirection.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional =
    ProtectionDirection.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_ProtectionDirection(el: _Element): ProtectionDirection {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ProtectionDirection.transmit: return ProtectionDirection.transmit;
        case ProtectionDirection.receive: return ProtectionDirection.receive;
        case ProtectionDirection.bidirectional: return ProtectionDirection.bidirectional;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for ProtectionDirection.',
                el,
            );
    }
}




export const _encode_ProtectionDirection: $.ASN1Encoder<ProtectionDirection> = $._encodeEnumerated as $.ASN1Encoder<ProtectionDirection>;


/* eslint-enable */
