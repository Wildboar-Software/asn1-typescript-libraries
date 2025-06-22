/* eslint-disable */
import {
    ASN1Element as _Element,
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
 * @summary RequestSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestSource  ::=  ENUMERATED {local(0), remote(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_RequestSource {
    local = 0,
    remote = 1,
}


/**
 * @summary RequestSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestSource  ::=  ENUMERATED {local(0), remote(1)}
 * ```
 *
 * @enum {number}
 */
export type RequestSource = _enum_for_RequestSource;


/**
 * @summary RequestSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestSource  ::=  ENUMERATED {local(0), remote(1)}
 * ```
 *
 * @enum {number}
 */
export const RequestSource = _enum_for_RequestSource;


/**
 * @summary RequestSource_local
 * @constant
 * @type {number}
 */
export const RequestSource_local: RequestSource =
    RequestSource.local; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary local
 * @constant
 * @type {number}
 */
export const local: RequestSource =
    RequestSource.local; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary RequestSource_remote
 * @constant
 * @type {number}
 */
export const RequestSource_remote: RequestSource =
    RequestSource.remote; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary remote
 * @constant
 * @type {number}
 */
export const remote: RequestSource =
    RequestSource.remote; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_RequestSource = $._decodeEnumerated;




export const _encode_RequestSource = $._encodeEnumerated;


/* eslint-enable */
