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
 * @summary Directionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Directionality  ::=  ENUMERATED {unidirectional(0), bidirectional(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_Directionality {
    unidirectional = 0,
    bidirectional = 1,
}


/**
 * @summary Directionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Directionality  ::=  ENUMERATED {unidirectional(0), bidirectional(1)}
 * ```
 *
 * @enum {number}
 */
export type Directionality = _enum_for_Directionality;


/**
 * @summary Directionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Directionality  ::=  ENUMERATED {unidirectional(0), bidirectional(1)}
 * ```
 *
 * @enum {number}
 */
export const Directionality = _enum_for_Directionality;


/**
 * @summary Directionality_unidirectional
 * @constant
 * @type {number}
 */
export const Directionality_unidirectional: Directionality =
    Directionality.unidirectional; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unidirectional
 * @constant
 * @type {number}
 */
export const unidirectional: Directionality =
    Directionality.unidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Directionality_bidirectional
 * @constant
 * @type {number}
 */
export const Directionality_bidirectional: Directionality =
    Directionality.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional: Directionality =
    Directionality.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_Directionality(el: _Element): Directionality {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case Directionality.unidirectional: return Directionality.unidirectional;
        case Directionality.bidirectional: return Directionality.bidirectional;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for Directionality.',
                el,
            );
    }
}




export const _encode_Directionality: $.ASN1Encoder<Directionality> = $._encodeEnumerated as $.ASN1Encoder<Directionality>;


/* eslint-enable */
