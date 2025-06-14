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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_ConfiguredConnectivity */
/**
 * @summary ConfiguredConnectivity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConfiguredConnectivity  ::=  ENUMERATED {
 *   sourceConnect(0), sinkConnect(1), bidirectionalConnect(2), noConnect(3)
 * }
 * ```@enum {number}
 */
export enum _enum_for_ConfiguredConnectivity {
    sourceConnect = 0,
    sinkConnect = 1,
    bidirectionalConnect = 2,
    noConnect = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ConfiguredConnectivity */

/* START_OF_SYMBOL_DEFINITION ConfiguredConnectivity */
/**
 * @summary ConfiguredConnectivity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConfiguredConnectivity  ::=  ENUMERATED {
 *   sourceConnect(0), sinkConnect(1), bidirectionalConnect(2), noConnect(3)
 * }
 * ```@enum {number}
 */
export type ConfiguredConnectivity = _enum_for_ConfiguredConnectivity;
/* END_OF_SYMBOL_DEFINITION ConfiguredConnectivity */

/* START_OF_SYMBOL_DEFINITION ConfiguredConnectivity */
/**
 * @summary ConfiguredConnectivity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConfiguredConnectivity  ::=  ENUMERATED {
 *   sourceConnect(0), sinkConnect(1), bidirectionalConnect(2), noConnect(3)
 * }
 * ```@enum {number}
 */
export const ConfiguredConnectivity = _enum_for_ConfiguredConnectivity;
/* END_OF_SYMBOL_DEFINITION ConfiguredConnectivity */

/* START_OF_SYMBOL_DEFINITION ConfiguredConnectivity_sourceConnect */
/**
 * @summary ConfiguredConnectivity_sourceConnect
 * @constant
 * @type {number}
 */
export const ConfiguredConnectivity_sourceConnect: ConfiguredConnectivity =
    ConfiguredConnectivity.sourceConnect; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ConfiguredConnectivity_sourceConnect */

/* START_OF_SYMBOL_DEFINITION sourceConnect */
/**
 * @summary sourceConnect
 * @constant
 * @type {number}
 */
export const sourceConnect: ConfiguredConnectivity =
    ConfiguredConnectivity.sourceConnect; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sourceConnect */

/* START_OF_SYMBOL_DEFINITION ConfiguredConnectivity_sinkConnect */
/**
 * @summary ConfiguredConnectivity_sinkConnect
 * @constant
 * @type {number}
 */
export const ConfiguredConnectivity_sinkConnect: ConfiguredConnectivity =
    ConfiguredConnectivity.sinkConnect; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ConfiguredConnectivity_sinkConnect */

/* START_OF_SYMBOL_DEFINITION sinkConnect */
/**
 * @summary sinkConnect
 * @constant
 * @type {number}
 */
export const sinkConnect: ConfiguredConnectivity =
    ConfiguredConnectivity.sinkConnect; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sinkConnect */

/* START_OF_SYMBOL_DEFINITION ConfiguredConnectivity_bidirectionalConnect */
/**
 * @summary ConfiguredConnectivity_bidirectionalConnect
 * @constant
 * @type {number}
 */
export const ConfiguredConnectivity_bidirectionalConnect: ConfiguredConnectivity =
    ConfiguredConnectivity.bidirectionalConnect; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ConfiguredConnectivity_bidirectionalConnect */

/* START_OF_SYMBOL_DEFINITION bidirectionalConnect */
/**
 * @summary bidirectionalConnect
 * @constant
 * @type {number}
 */
export const bidirectionalConnect: ConfiguredConnectivity =
    ConfiguredConnectivity.bidirectionalConnect; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bidirectionalConnect */

/* START_OF_SYMBOL_DEFINITION ConfiguredConnectivity_noConnect */
/**
 * @summary ConfiguredConnectivity_noConnect
 * @constant
 * @type {number}
 */
export const ConfiguredConnectivity_noConnect: ConfiguredConnectivity =
    ConfiguredConnectivity.noConnect; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ConfiguredConnectivity_noConnect */

/* START_OF_SYMBOL_DEFINITION noConnect */
/**
 * @summary noConnect
 * @constant
 * @type {number}
 */
export const noConnect: ConfiguredConnectivity =
    ConfiguredConnectivity.noConnect; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noConnect */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConfiguredConnectivity */
let _cached_decoder_for_ConfiguredConnectivity: $.ASN1Decoder<ConfiguredConnectivity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConfiguredConnectivity */

/* START_OF_SYMBOL_DEFINITION _decode_ConfiguredConnectivity */
/**
 * @summary Decodes an ASN.1 element into a(n) ConfiguredConnectivity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConfiguredConnectivity} The decoded data structure.
 */
export function _decode_ConfiguredConnectivity(el: _Element) {
    if (!_cached_decoder_for_ConfiguredConnectivity) {
        _cached_decoder_for_ConfiguredConnectivity = $._decodeEnumerated;
    }
    return _cached_decoder_for_ConfiguredConnectivity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConfiguredConnectivity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConfiguredConnectivity */
let _cached_encoder_for_ConfiguredConnectivity: $.ASN1Encoder<ConfiguredConnectivity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConfiguredConnectivity */

/* START_OF_SYMBOL_DEFINITION _encode_ConfiguredConnectivity */
/**
 * @summary Encodes a(n) ConfiguredConnectivity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfiguredConnectivity, encoded as an ASN.1 Element.
 */
export function _encode_ConfiguredConnectivity(
    value: ConfiguredConnectivity,
    elGetter: $.ASN1Encoder<ConfiguredConnectivity>
) {
    if (!_cached_encoder_for_ConfiguredConnectivity) {
        _cached_encoder_for_ConfiguredConnectivity = $._encodeEnumerated;
    }
    return _cached_encoder_for_ConfiguredConnectivity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConfiguredConnectivity */

/* eslint-enable */
