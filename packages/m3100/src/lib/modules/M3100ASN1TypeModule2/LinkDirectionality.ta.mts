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
 * @summary LinkDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkDirectionality  ::=  ENUMERATED {
 *   unidirectional(0), bidirectional(1), undefined(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_LinkDirectionality {
    unidirectional = 0,
    bidirectional = 1,
    undefined = 2,
}


/**
 * @summary LinkDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkDirectionality  ::=  ENUMERATED {
 *   unidirectional(0), bidirectional(1), undefined(2)}
 * ```
 *
 * @enum {number}
 */
export type LinkDirectionality = _enum_for_LinkDirectionality;


/**
 * @summary LinkDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkDirectionality  ::=  ENUMERATED {
 *   unidirectional(0), bidirectional(1), undefined(2)}
 * ```
 *
 * @enum {number}
 */
export const LinkDirectionality = _enum_for_LinkDirectionality;


/**
 * @summary LinkDirectionality_unidirectional
 * @constant
 * @type {number}
 */
export const LinkDirectionality_unidirectional: LinkDirectionality =
    LinkDirectionality.unidirectional; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unidirectional
 * @constant
 * @type {number}
 */
export const unidirectional: LinkDirectionality =
    LinkDirectionality.unidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LinkDirectionality_bidirectional
 * @constant
 * @type {number}
 */
export const LinkDirectionality_bidirectional: LinkDirectionality =
    LinkDirectionality.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional: LinkDirectionality =
    LinkDirectionality.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LinkDirectionality_undefined
 * @constant
 * @type {number}
 */
export const LinkDirectionality_undefined: LinkDirectionality =
    LinkDirectionality.undefined; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export const undefined: LinkDirectionality =
    LinkDirectionality.undefined; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_LinkDirectionality(el: _Element): LinkDirectionality {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case LinkDirectionality.unidirectional: return LinkDirectionality.unidirectional;
        case LinkDirectionality.bidirectional: return LinkDirectionality.bidirectional;
        case LinkDirectionality.undefined: return LinkDirectionality.undefined;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for LinkDirectionality.',
                el,
            );
    }
}




export const _encode_LinkDirectionality: $.ASN1Encoder<LinkDirectionality> = $._encodeEnumerated as $.ASN1Encoder<LinkDirectionality>;


/* eslint-enable */
