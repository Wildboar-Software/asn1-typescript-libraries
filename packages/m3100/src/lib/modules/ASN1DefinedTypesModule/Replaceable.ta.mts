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

/* START_OF_SYMBOL_DEFINITION _enum_for_Replaceable */
/**
 * @summary Replaceable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Replaceable  ::=  ENUMERATED {yes(0), no(1), notapplicable(2)}
 * ```@enum {number}
 */
export enum _enum_for_Replaceable {
    yes = 0,
    no = 1,
    notapplicable = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Replaceable */

/* START_OF_SYMBOL_DEFINITION Replaceable */
/**
 * @summary Replaceable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Replaceable  ::=  ENUMERATED {yes(0), no(1), notapplicable(2)}
 * ```@enum {number}
 */
export type Replaceable = _enum_for_Replaceable;
/* END_OF_SYMBOL_DEFINITION Replaceable */

/* START_OF_SYMBOL_DEFINITION Replaceable */
/**
 * @summary Replaceable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Replaceable  ::=  ENUMERATED {yes(0), no(1), notapplicable(2)}
 * ```@enum {number}
 */
export const Replaceable = _enum_for_Replaceable;
/* END_OF_SYMBOL_DEFINITION Replaceable */

/* START_OF_SYMBOL_DEFINITION Replaceable_yes */
/**
 * @summary Replaceable_yes
 * @constant
 * @type {number}
 */
export const Replaceable_yes: Replaceable =
    Replaceable.yes; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Replaceable_yes */

/* START_OF_SYMBOL_DEFINITION yes */
/**
 * @summary yes
 * @constant
 * @type {number}
 */
export const yes: Replaceable =
    Replaceable.yes; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION yes */

/* START_OF_SYMBOL_DEFINITION Replaceable_no */
/**
 * @summary Replaceable_no
 * @constant
 * @type {number}
 */
export const Replaceable_no: Replaceable =
    Replaceable.no; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Replaceable_no */

/* START_OF_SYMBOL_DEFINITION no */
/**
 * @summary no
 * @constant
 * @type {number}
 */
export const no: Replaceable =
    Replaceable.no; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION no */

/* START_OF_SYMBOL_DEFINITION Replaceable_notapplicable */
/**
 * @summary Replaceable_notapplicable
 * @constant
 * @type {number}
 */
export const Replaceable_notapplicable: Replaceable =
    Replaceable.notapplicable; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Replaceable_notapplicable */

/* START_OF_SYMBOL_DEFINITION notapplicable */
/**
 * @summary notapplicable
 * @constant
 * @type {number}
 */
export const notapplicable: Replaceable =
    Replaceable.notapplicable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION notapplicable */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Replaceable */
let _cached_decoder_for_Replaceable: $.ASN1Decoder<Replaceable> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Replaceable */

/* START_OF_SYMBOL_DEFINITION _decode_Replaceable */
/**
 * @summary Decodes an ASN.1 element into a(n) Replaceable
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Replaceable} The decoded data structure.
 */
export function _decode_Replaceable(el: _Element) {
    if (!_cached_decoder_for_Replaceable) {
        _cached_decoder_for_Replaceable = $._decodeEnumerated;
    }
    return _cached_decoder_for_Replaceable(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Replaceable */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Replaceable */
let _cached_encoder_for_Replaceable: $.ASN1Encoder<Replaceable> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Replaceable */

/* START_OF_SYMBOL_DEFINITION _encode_Replaceable */
/**
 * @summary Encodes a(n) Replaceable into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Replaceable, encoded as an ASN.1 Element.
 */
export function _encode_Replaceable(
    value: Replaceable,
    elGetter: $.ASN1Encoder<Replaceable>
) {
    if (!_cached_encoder_for_Replaceable) {
        _cached_encoder_for_Replaceable = $._encodeEnumerated;
    }
    return _cached_encoder_for_Replaceable(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Replaceable */

/* eslint-enable */
