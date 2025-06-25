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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary BuiltInContentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BuiltInContentType  ::=  [APPLICATION 6]  INTEGER {
 *   unidentified(0),
 *   external(1), -- identified by the object-identifier of the EXTERNAL content
 *   interpersonal-messaging-1984(2), interpersonal-messaging-1988(22),
 *   edi-messaging(35), voice-messaging(40)}(0..ub-built-in-content-type)
 * ```
 */
export type BuiltInContentType = INTEGER;

/**
 * @summary BuiltInContentType_unidentified
 * @constant
 * @type {number}
 */
export const BuiltInContentType_unidentified: BuiltInContentType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_unidentified
 * @constant
 * @type {number}
 */
export const unidentified: BuiltInContentType = BuiltInContentType_unidentified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_external
 * @constant
 * @type {number}
 */
export const BuiltInContentType_external: BuiltInContentType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_external
 * @constant
 * @type {number}
 */
export const external: BuiltInContentType = BuiltInContentType_external; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_interpersonal_messaging_1984
 * @constant
 * @type {number}
 */
export const BuiltInContentType_interpersonal_messaging_1984: BuiltInContentType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_interpersonal_messaging_1984
 * @constant
 * @type {number}
 */
export const interpersonal_messaging_1984: BuiltInContentType = BuiltInContentType_interpersonal_messaging_1984; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_interpersonal_messaging_1988
 * @constant
 * @type {number}
 */
export const BuiltInContentType_interpersonal_messaging_1988: BuiltInContentType = 22; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_interpersonal_messaging_1988
 * @constant
 * @type {number}
 */
export const interpersonal_messaging_1988: BuiltInContentType = BuiltInContentType_interpersonal_messaging_1988; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_edi_messaging
 * @constant
 * @type {number}
 */
export const BuiltInContentType_edi_messaging: BuiltInContentType = 35; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_edi_messaging
 * @constant
 * @type {number}
 */
export const edi_messaging: BuiltInContentType = BuiltInContentType_edi_messaging; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_voice_messaging
 * @constant
 * @type {number}
 */
export const BuiltInContentType_voice_messaging: BuiltInContentType = 40; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_voice_messaging
 * @constant
 * @type {number}
 */
export const voice_messaging: BuiltInContentType = BuiltInContentType_voice_messaging; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_BuiltInContentType: $.ASN1Decoder<BuiltInContentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BuiltInContentType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BuiltInContentType} The decoded data structure.
 */
export function _decode_BuiltInContentType(el: _Element): BuiltInContentType {
    if (!_cached_decoder_for_BuiltInContentType) {
        _cached_decoder_for_BuiltInContentType = $._decode_implicit<BuiltInContentType>(
            () => $._decodeInteger
        );
    }
    return _cached_decoder_for_BuiltInContentType(el);
}

let _cached_encoder_for_BuiltInContentType: $.ASN1Encoder<BuiltInContentType> | null = null;

/**
 * @summary Encodes a(n) BuiltInContentType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BuiltInContentType, encoded as an ASN.1 Element.
 */
export function _encode_BuiltInContentType(
    value: BuiltInContentType,
    elGetter: $.ASN1Encoder<BuiltInContentType>
): _Element {
    if (!_cached_encoder_for_BuiltInContentType) {
        _cached_encoder_for_BuiltInContentType = $._encode_implicit(
            _TagClass.application,
            6,
            () => $._encodeInteger,
            $.BER
        );
    }
    return _cached_encoder_for_BuiltInContentType(value, elGetter);
}


/* eslint-enable */
