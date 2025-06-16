/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


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
export const DedicatedOrShared_dedicated: DedicatedOrShared = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary dedicated
 * @constant
 * @type {number}
 */
export const dedicated: DedicatedOrShared = DedicatedOrShared_dedicated; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DedicatedOrShared_shared
 * @constant
 * @type {number}
 */
export const DedicatedOrShared_shared: DedicatedOrShared = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary shared
 * @constant
 * @type {number}
 */
export const shared: DedicatedOrShared = DedicatedOrShared_shared; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_DedicatedOrShared = $._decodeEnumerated;




export const _encode_DedicatedOrShared = $._encodeEnumerated;


/* eslint-enable */
