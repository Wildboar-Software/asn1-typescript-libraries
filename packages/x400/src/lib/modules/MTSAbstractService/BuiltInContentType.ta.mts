/* eslint-disable */
import {
    type INTEGER,
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
 * @summary BuiltInContentType
 * @description
 *
 * INTEGER content-type identifiers including unidentified(0), external(1),
 * interpersonal-messaging-1984(2), EDI(35), etc. (ITU-T X.411 (1999), Annex A). `0` means
 * unidentified, not 'absent'.
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
export const BuiltInContentType_unidentified = 0 satisfies BuiltInContentType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_unidentified
 * @constant
 * @type {number}
 */
export const unidentified = BuiltInContentType_unidentified satisfies BuiltInContentType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_external
 * @constant
 * @type {number}
 */
export const BuiltInContentType_external = 1 satisfies BuiltInContentType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_external
 * @constant
 * @type {number}
 */
export const external = BuiltInContentType_external satisfies BuiltInContentType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_interpersonal_messaging_1984
 * @constant
 * @type {number}
 */
export const BuiltInContentType_interpersonal_messaging_1984 = 2 satisfies BuiltInContentType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_interpersonal_messaging_1984
 * @constant
 * @type {number}
 */
export const interpersonal_messaging_1984 = BuiltInContentType_interpersonal_messaging_1984 satisfies BuiltInContentType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_interpersonal_messaging_1988
 * @constant
 * @type {number}
 */
export const BuiltInContentType_interpersonal_messaging_1988 = 22 satisfies BuiltInContentType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_interpersonal_messaging_1988
 * @constant
 * @type {number}
 */
export const interpersonal_messaging_1988 = BuiltInContentType_interpersonal_messaging_1988 satisfies BuiltInContentType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_edi_messaging
 * @constant
 * @type {number}
 */
export const BuiltInContentType_edi_messaging = 35 satisfies BuiltInContentType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_edi_messaging
 * @constant
 * @type {number}
 */
export const edi_messaging = BuiltInContentType_edi_messaging satisfies BuiltInContentType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_voice_messaging
 * @constant
 * @type {number}
 */
export const BuiltInContentType_voice_messaging = 40 satisfies BuiltInContentType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BuiltInContentType_voice_messaging
 * @constant
 * @type {number}
 */
export const voice_messaging = BuiltInContentType_voice_messaging satisfies BuiltInContentType; /* SHORT_NAMED_INTEGER_VALUE */

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
