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

/* START_OF_SYMBOL_DEFINITION _enum_for_Induced */
/**
 * @summary Induced
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Induced  ::=  ENUMERATED {
 *   start(0), suspend(1), resume(2), delete(3), disabled(4), enabled(5)
 * }
 * ```@enum {number}
 */
export enum _enum_for_Induced {
    start = 0,
    suspend = 1,
    resume = 2,
    delete_ = 3,
    disabled = 4,
    enabled = 5,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Induced */

/* START_OF_SYMBOL_DEFINITION Induced */
/**
 * @summary Induced
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Induced  ::=  ENUMERATED {
 *   start(0), suspend(1), resume(2), delete(3), disabled(4), enabled(5)
 * }
 * ```@enum {number}
 */
export type Induced = _enum_for_Induced;
/* END_OF_SYMBOL_DEFINITION Induced */

/* START_OF_SYMBOL_DEFINITION Induced */
/**
 * @summary Induced
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Induced  ::=  ENUMERATED {
 *   start(0), suspend(1), resume(2), delete(3), disabled(4), enabled(5)
 * }
 * ```@enum {number}
 */
export const Induced = _enum_for_Induced;
/* END_OF_SYMBOL_DEFINITION Induced */

/* START_OF_SYMBOL_DEFINITION Induced_start */
/**
 * @summary Induced_start
 * @constant
 * @type {number}
 */
export const Induced_start: Induced =
    Induced.start; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Induced_start */

/* START_OF_SYMBOL_DEFINITION start */
/**
 * @summary start
 * @constant
 * @type {number}
 */
export const start: Induced = Induced.start; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION start */

/* START_OF_SYMBOL_DEFINITION Induced_suspend */
/**
 * @summary Induced_suspend
 * @constant
 * @type {number}
 */
export const Induced_suspend: Induced =
    Induced.suspend; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Induced_suspend */

/* START_OF_SYMBOL_DEFINITION suspend */
/**
 * @summary suspend
 * @constant
 * @type {number}
 */
export const suspend: Induced =
    Induced.suspend; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION suspend */

/* START_OF_SYMBOL_DEFINITION Induced_resume */
/**
 * @summary Induced_resume
 * @constant
 * @type {number}
 */
export const Induced_resume: Induced =
    Induced.resume; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Induced_resume */

/* START_OF_SYMBOL_DEFINITION resume */
/**
 * @summary resume
 * @constant
 * @type {number}
 */
export const resume: Induced =
    Induced.resume; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION resume */

/* START_OF_SYMBOL_DEFINITION Induced_delete_ */
/**
 * @summary Induced_delete_
 * @constant
 * @type {number}
 */
export const Induced_delete_: Induced =
    Induced.delete_; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Induced_delete_ */

/* START_OF_SYMBOL_DEFINITION delete_ */
/**
 * @summary delete_
 * @constant
 * @type {number}
 */
export const delete_: Induced =
    Induced.delete_; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION delete_ */

/* START_OF_SYMBOL_DEFINITION Induced_disabled */
/**
 * @summary Induced_disabled
 * @constant
 * @type {number}
 */
export const Induced_disabled: Induced =
    Induced.disabled; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Induced_disabled */

/* START_OF_SYMBOL_DEFINITION disabled */
/**
 * @summary disabled
 * @constant
 * @type {number}
 */
export const disabled: Induced =
    Induced.disabled; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION disabled */

/* START_OF_SYMBOL_DEFINITION Induced_enabled */
/**
 * @summary Induced_enabled
 * @constant
 * @type {number}
 */
export const Induced_enabled: Induced =
    Induced.enabled; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Induced_enabled */

/* START_OF_SYMBOL_DEFINITION enabled */
/**
 * @summary enabled
 * @constant
 * @type {number}
 */
export const enabled: Induced =
    Induced.enabled; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION enabled */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Induced */
let _cached_decoder_for_Induced: $.ASN1Decoder<Induced> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Induced */

/* START_OF_SYMBOL_DEFINITION _decode_Induced */
/**
 * @summary Decodes an ASN.1 element into a(n) Induced
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Induced} The decoded data structure.
 */
export function _decode_Induced(el: _Element) {
    if (!_cached_decoder_for_Induced) {
        _cached_decoder_for_Induced = $._decodeEnumerated;
    }
    return _cached_decoder_for_Induced(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Induced */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Induced */
let _cached_encoder_for_Induced: $.ASN1Encoder<Induced> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Induced */

/* START_OF_SYMBOL_DEFINITION _encode_Induced */
/**
 * @summary Encodes a(n) Induced into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Induced, encoded as an ASN.1 Element.
 */
export function _encode_Induced(
    value: Induced,
    elGetter: $.ASN1Encoder<Induced>
) {
    if (!_cached_encoder_for_Induced) {
        _cached_encoder_for_Induced = $._encodeEnumerated;
    }
    return _cached_encoder_for_Induced(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Induced */

/* eslint-enable */
