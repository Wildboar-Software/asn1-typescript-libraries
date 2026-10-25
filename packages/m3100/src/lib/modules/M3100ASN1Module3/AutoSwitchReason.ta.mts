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
 * @summary AutoSwitchReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSwitchReason  ::=  ENUMERATED {
 *   waitToRestore(0), resourceDegrade(1), resourceFailed(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_AutoSwitchReason {
    waitToRestore = 0,
    resourceDegrade = 1,
    resourceFailed = 2,
}


/**
 * @summary AutoSwitchReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSwitchReason  ::=  ENUMERATED {
 *   waitToRestore(0), resourceDegrade(1), resourceFailed(2)}
 * ```
 *
 * @enum {number}
 */
export type AutoSwitchReason = _enum_for_AutoSwitchReason;


/**
 * @summary AutoSwitchReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSwitchReason  ::=  ENUMERATED {
 *   waitToRestore(0), resourceDegrade(1), resourceFailed(2)}
 * ```
 *
 * @enum {number}
 */
export const AutoSwitchReason = _enum_for_AutoSwitchReason;


/**
 * @summary AutoSwitchReason_waitToRestore
 * @constant
 * @type {number}
 */
export const AutoSwitchReason_waitToRestore =
    AutoSwitchReason.waitToRestore; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary waitToRestore
 * @constant
 * @type {number}
 */
export const waitToRestore =
    AutoSwitchReason.waitToRestore; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AutoSwitchReason_resourceDegrade
 * @constant
 * @type {number}
 */
export const AutoSwitchReason_resourceDegrade =
    AutoSwitchReason.resourceDegrade; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary resourceDegrade
 * @constant
 * @type {number}
 */
export const resourceDegrade =
    AutoSwitchReason.resourceDegrade; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AutoSwitchReason_resourceFailed
 * @constant
 * @type {number}
 */
export const AutoSwitchReason_resourceFailed =
    AutoSwitchReason.resourceFailed; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary resourceFailed
 * @constant
 * @type {number}
 */
export const resourceFailed =
    AutoSwitchReason.resourceFailed; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_AutoSwitchReason(el: _Element): AutoSwitchReason {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case AutoSwitchReason.waitToRestore: return AutoSwitchReason.waitToRestore;
        case AutoSwitchReason.resourceDegrade: return AutoSwitchReason.resourceDegrade;
        case AutoSwitchReason.resourceFailed: return AutoSwitchReason.resourceFailed;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for AutoSwitchReason.',
                el,
            );
    }
}




export const _encode_AutoSwitchReason: $.ASN1Encoder<AutoSwitchReason> = $._encodeEnumerated as $.ASN1Encoder<AutoSwitchReason>;


/* eslint-enable */
