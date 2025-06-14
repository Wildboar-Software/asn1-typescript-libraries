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

/* START_OF_SYMBOL_DEFINITION _enum_for_SystemType */
/**
 * @summary SystemType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemType  ::=  ENUMERATED {eS(1), iS(2)}
 * ```@enum {number}
 */
export enum _enum_for_SystemType {
    eS = 1,
    iS = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SystemType */

/* START_OF_SYMBOL_DEFINITION SystemType */
/**
 * @summary SystemType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemType  ::=  ENUMERATED {eS(1), iS(2)}
 * ```@enum {number}
 */
export type SystemType = _enum_for_SystemType;
/* END_OF_SYMBOL_DEFINITION SystemType */

/* START_OF_SYMBOL_DEFINITION SystemType */
/**
 * @summary SystemType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemType  ::=  ENUMERATED {eS(1), iS(2)}
 * ```@enum {number}
 */
export const SystemType = _enum_for_SystemType;
/* END_OF_SYMBOL_DEFINITION SystemType */

/* START_OF_SYMBOL_DEFINITION SystemType_eS */
/**
 * @summary SystemType_eS
 * @constant
 * @type {number}
 */
export const SystemType_eS: SystemType =
    SystemType.eS; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SystemType_eS */

/* START_OF_SYMBOL_DEFINITION eS */
/**
 * @summary eS
 * @constant
 * @type {number}
 */
export const eS: SystemType = SystemType.eS; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION eS */

/* START_OF_SYMBOL_DEFINITION SystemType_iS */
/**
 * @summary SystemType_iS
 * @constant
 * @type {number}
 */
export const SystemType_iS: SystemType =
    SystemType.iS; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SystemType_iS */

/* START_OF_SYMBOL_DEFINITION iS */
/**
 * @summary iS
 * @constant
 * @type {number}
 */
export const iS: SystemType = SystemType.iS; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION iS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemType */
let _cached_decoder_for_SystemType: $.ASN1Decoder<SystemType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemType */

/* START_OF_SYMBOL_DEFINITION _decode_SystemType */
/**
 * @summary Decodes an ASN.1 element into a(n) SystemType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SystemType} The decoded data structure.
 */
export function _decode_SystemType(el: _Element) {
    if (!_cached_decoder_for_SystemType) {
        _cached_decoder_for_SystemType = $._decodeEnumerated;
    }
    return _cached_decoder_for_SystemType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SystemType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemType */
let _cached_encoder_for_SystemType: $.ASN1Encoder<SystemType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemType */

/* START_OF_SYMBOL_DEFINITION _encode_SystemType */
/**
 * @summary Encodes a(n) SystemType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemType, encoded as an ASN.1 Element.
 */
export function _encode_SystemType(
    value: SystemType,
    elGetter: $.ASN1Encoder<SystemType>
) {
    if (!_cached_encoder_for_SystemType) {
        _cached_encoder_for_SystemType = $._encodeEnumerated;
    }
    return _cached_encoder_for_SystemType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SystemType */

/* eslint-enable */
