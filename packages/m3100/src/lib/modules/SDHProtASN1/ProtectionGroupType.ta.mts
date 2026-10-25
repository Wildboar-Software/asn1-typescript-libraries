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
 * @summary ProtectionGroupType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionGroupType  ::=  ENUMERATED {
 *   plus(0), -- 1+1 (1 plus 1) or hot-standby
 *   colon(1) -- M:N (M for N) --}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ProtectionGroupType {
    plus = 0,
    colon = 1,
}


/**
 * @summary ProtectionGroupType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionGroupType  ::=  ENUMERATED {
 *   plus(0), -- 1+1 (1 plus 1) or hot-standby
 *   colon(1) -- M:N (M for N) --}
 * ```
 *
 * @enum {number}
 */
export type ProtectionGroupType = _enum_for_ProtectionGroupType;


/**
 * @summary ProtectionGroupType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionGroupType  ::=  ENUMERATED {
 *   plus(0), -- 1+1 (1 plus 1) or hot-standby
 *   colon(1) -- M:N (M for N) --}
 * ```
 *
 * @enum {number}
 */
export const ProtectionGroupType = _enum_for_ProtectionGroupType;


/**
 * @summary ProtectionGroupType_plus
 * @constant
 * @type {number}
 */
export const ProtectionGroupType_plus =
    ProtectionGroupType.plus satisfies ProtectionGroupType; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary plus
 * @constant
 * @type {number}
 */
export const plus =
    ProtectionGroupType.plus satisfies ProtectionGroupType; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProtectionGroupType_colon
 * @constant
 * @type {number}
 */
export const ProtectionGroupType_colon =
    ProtectionGroupType.colon satisfies ProtectionGroupType; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary colon
 * @constant
 * @type {number}
 */
export const colon =
    ProtectionGroupType.colon satisfies ProtectionGroupType; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_ProtectionGroupType(el: _Element): ProtectionGroupType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ProtectionGroupType.plus: return ProtectionGroupType.plus;
        case ProtectionGroupType.colon: return ProtectionGroupType.colon;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for ProtectionGroupType.',
                el,
            );
    }
}




export const _encode_ProtectionGroupType: $.ASN1Encoder<ProtectionGroupType> = $._encodeEnumerated as $.ASN1Encoder<ProtectionGroupType>;


/* eslint-enable */
