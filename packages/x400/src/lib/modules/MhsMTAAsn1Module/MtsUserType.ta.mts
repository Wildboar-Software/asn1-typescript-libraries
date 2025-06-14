/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION MtsUserType */
/**
 * @summary MtsUserType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MtsUserType  ::=  INTEGER {ms(1), ua(2), au(3)}
 * ```
 */
export type MtsUserType = INTEGER;
/* END_OF_SYMBOL_DEFINITION MtsUserType */

/* START_OF_SYMBOL_DEFINITION MtsUserType_ms */
/**
 * @summary MtsUserType_ms
 * @constant
 * @type {number}
 */
export const MtsUserType_ms: MtsUserType = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MtsUserType_ms */

/* START_OF_SYMBOL_DEFINITION ms */
/**
 * @summary MtsUserType_ms
 * @constant
 * @type {number}
 */
export const ms: MtsUserType = MtsUserType_ms; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ms */

/* START_OF_SYMBOL_DEFINITION MtsUserType_ua */
/**
 * @summary MtsUserType_ua
 * @constant
 * @type {number}
 */
export const MtsUserType_ua: MtsUserType = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MtsUserType_ua */

/* START_OF_SYMBOL_DEFINITION ua */
/**
 * @summary MtsUserType_ua
 * @constant
 * @type {number}
 */
export const ua: MtsUserType = MtsUserType_ua; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ua */

/* START_OF_SYMBOL_DEFINITION MtsUserType_au */
/**
 * @summary MtsUserType_au
 * @constant
 * @type {number}
 */
export const MtsUserType_au: MtsUserType = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MtsUserType_au */

/* START_OF_SYMBOL_DEFINITION au */
/**
 * @summary MtsUserType_au
 * @constant
 * @type {number}
 */
export const au: MtsUserType = MtsUserType_au; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION au */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MtsUserType */
let _cached_decoder_for_MtsUserType: $.ASN1Decoder<MtsUserType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MtsUserType */

/* START_OF_SYMBOL_DEFINITION _decode_MtsUserType */
/**
 * @summary Decodes an ASN.1 element into a(n) MtsUserType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MtsUserType} The decoded data structure.
 */
export function _decode_MtsUserType(el: _Element) {
    if (!_cached_decoder_for_MtsUserType) {
        _cached_decoder_for_MtsUserType = $._decodeInteger;
    }
    return _cached_decoder_for_MtsUserType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MtsUserType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MtsUserType */
let _cached_encoder_for_MtsUserType: $.ASN1Encoder<MtsUserType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MtsUserType */

/* START_OF_SYMBOL_DEFINITION _encode_MtsUserType */
/**
 * @summary Encodes a(n) MtsUserType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MtsUserType, encoded as an ASN.1 Element.
 */
export function _encode_MtsUserType(
    value: MtsUserType,
    elGetter: $.ASN1Encoder<MtsUserType>
) {
    if (!_cached_encoder_for_MtsUserType) {
        _cached_encoder_for_MtsUserType = $._encodeInteger;
    }
    return _cached_encoder_for_MtsUserType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MtsUserType */

/* eslint-enable */
