/* eslint-disable */
import {
    type ENUMERATED,
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


export enum _enum_for_DedicatedOrShared {
    dedicated = 1,
    shared = 2,
}


/**
 * @summary DedicatedOrShared
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DedicatedOrShared  ::=  ENUMERATED {dedicated(1), shared(2), ...
 *                                   }
 * ```
 *
 * @enum {number}
 */
export type DedicatedOrShared = _enum_for_DedicatedOrShared | ENUMERATED;


/**
 * @summary DedicatedOrShared_dedicated
 * @constant
 * @type {number}
 */
export const DedicatedOrShared_dedicated = _enum_for_DedicatedOrShared.dedicated satisfies DedicatedOrShared; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary dedicated
 * @constant
 * @type {number}
 */
export const dedicated = DedicatedOrShared_dedicated satisfies DedicatedOrShared; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DedicatedOrShared_shared
 * @constant
 * @type {number}
 */
export const DedicatedOrShared_shared = _enum_for_DedicatedOrShared.shared satisfies DedicatedOrShared; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary shared
 * @constant
 * @type {number}
 */
export const shared = DedicatedOrShared_shared satisfies DedicatedOrShared; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_DedicatedOrShared = $._decodeEnumerated;




export const _encode_DedicatedOrShared = $._encodeEnumerated;


/* eslint-enable */
