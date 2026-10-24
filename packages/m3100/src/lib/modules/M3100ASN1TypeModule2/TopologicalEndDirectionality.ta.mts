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
 * @summary TopologicalEndDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TopologicalEndDirectionality  ::=  ENUMERATED {
 *   undefined(0), sink(1), source(2), bidirectional(3)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_TopologicalEndDirectionality {
    undefined = 0,
    sink = 1,
    source = 2,
    bidirectional = 3,
}


/**
 * @summary TopologicalEndDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TopologicalEndDirectionality  ::=  ENUMERATED {
 *   undefined(0), sink(1), source(2), bidirectional(3)}
 * ```
 *
 * @enum {number}
 */
export type TopologicalEndDirectionality = _enum_for_TopologicalEndDirectionality;


/**
 * @summary TopologicalEndDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TopologicalEndDirectionality  ::=  ENUMERATED {
 *   undefined(0), sink(1), source(2), bidirectional(3)}
 * ```
 *
 * @enum {number}
 */
export const TopologicalEndDirectionality = _enum_for_TopologicalEndDirectionality;


/**
 * @summary TopologicalEndDirectionality_undefined
 * @constant
 * @type {number}
 */
export const TopologicalEndDirectionality_undefined: TopologicalEndDirectionality =
    TopologicalEndDirectionality.undefined; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export const undefined: TopologicalEndDirectionality =
    TopologicalEndDirectionality.undefined; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary TopologicalEndDirectionality_sink
 * @constant
 * @type {number}
 */
export const TopologicalEndDirectionality_sink: TopologicalEndDirectionality =
    TopologicalEndDirectionality.sink; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sink
 * @constant
 * @type {number}
 */
export const sink: TopologicalEndDirectionality =
    TopologicalEndDirectionality.sink; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary TopologicalEndDirectionality_source
 * @constant
 * @type {number}
 */
export const TopologicalEndDirectionality_source: TopologicalEndDirectionality =
    TopologicalEndDirectionality.source; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary source
 * @constant
 * @type {number}
 */
export const source: TopologicalEndDirectionality =
    TopologicalEndDirectionality.source; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary TopologicalEndDirectionality_bidirectional
 * @constant
 * @type {number}
 */
export const TopologicalEndDirectionality_bidirectional: TopologicalEndDirectionality =
    TopologicalEndDirectionality.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional: TopologicalEndDirectionality =
    TopologicalEndDirectionality.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_TopologicalEndDirectionality(el: _Element): TopologicalEndDirectionality {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case TopologicalEndDirectionality.undefined: return TopologicalEndDirectionality.undefined;
        case TopologicalEndDirectionality.sink: return TopologicalEndDirectionality.sink;
        case TopologicalEndDirectionality.source: return TopologicalEndDirectionality.source;
        case TopologicalEndDirectionality.bidirectional: return TopologicalEndDirectionality.bidirectional;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for TopologicalEndDirectionality.',
                el,
            );
    }
}




export const _encode_TopologicalEndDirectionality: $.ASN1Encoder<TopologicalEndDirectionality> = $._encodeEnumerated as $.ASN1Encoder<TopologicalEndDirectionality>;


/* eslint-enable */
