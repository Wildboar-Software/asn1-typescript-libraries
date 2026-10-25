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
export const RequestSource: typeof _enum_for_RequestSource = _enum_for_RequestSource;


/**
 * @summary RequestSource_local
 * @constant
 * @type {number}
 */
export const RequestSource_local: _enum_for_RequestSource.local =
    RequestSource.local; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary local
 * @constant
 * @type {number}
 */
export const local: _enum_for_RequestSource.local =
    RequestSource.local; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary RequestSource_remote
 * @constant
 * @type {number}
 */
export const RequestSource_remote: _enum_for_RequestSource.remote =
    RequestSource.remote; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary remote
 * @constant
 * @type {number}
 */
export const remote: _enum_for_RequestSource.remote =
    RequestSource.remote; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_RequestSource(el: _Element): RequestSource {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case RequestSource.local: return RequestSource.local;
        case RequestSource.remote: return RequestSource.remote;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for RequestSource.',
                el,
            );
    }
}




export const _encode_RequestSource: $.ASN1Encoder<RequestSource> = $._encodeEnumerated as $.ASN1Encoder<RequestSource>;


/* eslint-enable */
