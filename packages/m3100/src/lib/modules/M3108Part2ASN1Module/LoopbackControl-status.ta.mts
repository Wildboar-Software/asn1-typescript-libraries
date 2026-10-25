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
 * @summary LoopbackControl_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackControl-status ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_LoopbackControl_status {
    noLoopback = 0,
    endALoopedBack = 1,
    endBLoopedBack = 2,
}


/**
 * @summary LoopbackControl_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackControl-status ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type LoopbackControl_status = _enum_for_LoopbackControl_status;


/**
 * @summary LoopbackControl_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackControl-status ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const LoopbackControl_status: typeof _enum_for_LoopbackControl_status = _enum_for_LoopbackControl_status;


/**
 * @summary LoopbackControl_status_noLoopback
 * @constant
 * @type {number}
 */
export const LoopbackControl_status_noLoopback: _enum_for_LoopbackControl_status.noLoopback =
    LoopbackControl_status.noLoopback; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noLoopback
 * @constant
 * @type {number}
 */
export const noLoopback: _enum_for_LoopbackControl_status.noLoopback =
    LoopbackControl_status.noLoopback; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LoopbackControl_status_endALoopedBack
 * @constant
 * @type {number}
 */
export const LoopbackControl_status_endALoopedBack: _enum_for_LoopbackControl_status.endALoopedBack =
    LoopbackControl_status.endALoopedBack; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary endALoopedBack
 * @constant
 * @type {number}
 */
export const endALoopedBack: _enum_for_LoopbackControl_status.endALoopedBack =
    LoopbackControl_status.endALoopedBack; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LoopbackControl_status_endBLoopedBack
 * @constant
 * @type {number}
 */
export const LoopbackControl_status_endBLoopedBack: _enum_for_LoopbackControl_status.endBLoopedBack =
    LoopbackControl_status.endBLoopedBack; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary endBLoopedBack
 * @constant
 * @type {number}
 */
export const endBLoopedBack: _enum_for_LoopbackControl_status.endBLoopedBack =
    LoopbackControl_status.endBLoopedBack; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_LoopbackControl_status(el: _Element): LoopbackControl_status {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case LoopbackControl_status.noLoopback: return LoopbackControl_status.noLoopback;
        case LoopbackControl_status.endALoopedBack: return LoopbackControl_status.endALoopedBack;
        case LoopbackControl_status.endBLoopedBack: return LoopbackControl_status.endBLoopedBack;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for LoopbackControl_status.',
                el,
            );
    }
}




export const _encode_LoopbackControl_status: $.ASN1Encoder<LoopbackControl_status> = $._encodeEnumerated as $.ASN1Encoder<LoopbackControl_status>;


/* eslint-enable */
