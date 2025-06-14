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

/* START_OF_SYMBOL_DEFINITION _enum_for_IPMEntryType */
/**
 * @summary IPMEntryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMEntryType  ::=  ENUMERATED {ipm(0), rn(1), nrn(2), on(3)}
 * ```@enum {number}
 */
export enum _enum_for_IPMEntryType {
    ipm = 0,
    rn = 1,
    nrn = 2,
    on = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_IPMEntryType */

/* START_OF_SYMBOL_DEFINITION IPMEntryType */
/**
 * @summary IPMEntryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMEntryType  ::=  ENUMERATED {ipm(0), rn(1), nrn(2), on(3)}
 * ```@enum {number}
 */
export type IPMEntryType = _enum_for_IPMEntryType;
/* END_OF_SYMBOL_DEFINITION IPMEntryType */

/* START_OF_SYMBOL_DEFINITION IPMEntryType */
/**
 * @summary IPMEntryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMEntryType  ::=  ENUMERATED {ipm(0), rn(1), nrn(2), on(3)}
 * ```@enum {number}
 */
export const IPMEntryType = _enum_for_IPMEntryType;
/* END_OF_SYMBOL_DEFINITION IPMEntryType */

/* START_OF_SYMBOL_DEFINITION IPMEntryType_ipm */
/**
 * @summary IPMEntryType_ipm
 * @constant
 * @type {number}
 */
export const IPMEntryType_ipm: IPMEntryType =
    IPMEntryType.ipm; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IPMEntryType_ipm */

/* START_OF_SYMBOL_DEFINITION ipm */
/**
 * @summary ipm
 * @constant
 * @type {number}
 */
export const ipm: IPMEntryType =
    IPMEntryType.ipm; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ipm */

/* START_OF_SYMBOL_DEFINITION IPMEntryType_rn */
/**
 * @summary IPMEntryType_rn
 * @constant
 * @type {number}
 */
export const IPMEntryType_rn: IPMEntryType =
    IPMEntryType.rn; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IPMEntryType_rn */

/* START_OF_SYMBOL_DEFINITION rn */
/**
 * @summary rn
 * @constant
 * @type {number}
 */
export const rn: IPMEntryType =
    IPMEntryType.rn; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION rn */

/* START_OF_SYMBOL_DEFINITION IPMEntryType_nrn */
/**
 * @summary IPMEntryType_nrn
 * @constant
 * @type {number}
 */
export const IPMEntryType_nrn: IPMEntryType =
    IPMEntryType.nrn; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IPMEntryType_nrn */

/* START_OF_SYMBOL_DEFINITION nrn */
/**
 * @summary nrn
 * @constant
 * @type {number}
 */
export const nrn: IPMEntryType =
    IPMEntryType.nrn; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nrn */

/* START_OF_SYMBOL_DEFINITION IPMEntryType_on */
/**
 * @summary IPMEntryType_on
 * @constant
 * @type {number}
 */
export const IPMEntryType_on: IPMEntryType =
    IPMEntryType.on; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IPMEntryType_on */

/* START_OF_SYMBOL_DEFINITION on */
/**
 * @summary on
 * @constant
 * @type {number}
 */
export const on: IPMEntryType =
    IPMEntryType.on; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION on */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IPMEntryType */
let _cached_decoder_for_IPMEntryType: $.ASN1Decoder<IPMEntryType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IPMEntryType */

/* START_OF_SYMBOL_DEFINITION _decode_IPMEntryType */
/**
 * @summary Decodes an ASN.1 element into a(n) IPMEntryType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPMEntryType} The decoded data structure.
 */
export function _decode_IPMEntryType(el: _Element) {
    if (!_cached_decoder_for_IPMEntryType) {
        _cached_decoder_for_IPMEntryType = $._decodeEnumerated;
    }
    return _cached_decoder_for_IPMEntryType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IPMEntryType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IPMEntryType */
let _cached_encoder_for_IPMEntryType: $.ASN1Encoder<IPMEntryType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IPMEntryType */

/* START_OF_SYMBOL_DEFINITION _encode_IPMEntryType */
/**
 * @summary Encodes a(n) IPMEntryType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMEntryType, encoded as an ASN.1 Element.
 */
export function _encode_IPMEntryType(
    value: IPMEntryType,
    elGetter: $.ASN1Encoder<IPMEntryType>
) {
    if (!_cached_encoder_for_IPMEntryType) {
        _cached_encoder_for_IPMEntryType = $._encodeEnumerated;
    }
    return _cached_encoder_for_IPMEntryType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IPMEntryType */

/* eslint-enable */
