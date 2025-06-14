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
import {
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/EventTypeId.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AdministrationPortOperations */
/**
 * @summary AdministrationPortOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdministrationPortOperations  ::=  EventTypeId(change-credentials | register)
 * ```
 */
export type AdministrationPortOperations = EventTypeId; // DefinedType
/* END_OF_SYMBOL_DEFINITION AdministrationPortOperations */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministrationPortOperations */
let _cached_decoder_for_AdministrationPortOperations: $.ASN1Decoder<AdministrationPortOperations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministrationPortOperations */

/* START_OF_SYMBOL_DEFINITION _decode_AdministrationPortOperations */
/**
 * @summary Decodes an ASN.1 element into a(n) AdministrationPortOperations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdministrationPortOperations} The decoded data structure.
 */
export function _decode_AdministrationPortOperations(el: _Element) {
    if (!_cached_decoder_for_AdministrationPortOperations) {
        _cached_decoder_for_AdministrationPortOperations = _decode_EventTypeId;
    }
    return _cached_decoder_for_AdministrationPortOperations(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AdministrationPortOperations */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministrationPortOperations */
let _cached_encoder_for_AdministrationPortOperations: $.ASN1Encoder<AdministrationPortOperations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministrationPortOperations */

/* START_OF_SYMBOL_DEFINITION _encode_AdministrationPortOperations */
/**
 * @summary Encodes a(n) AdministrationPortOperations into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdministrationPortOperations, encoded as an ASN.1 Element.
 */
export function _encode_AdministrationPortOperations(
    value: AdministrationPortOperations,
    elGetter: $.ASN1Encoder<AdministrationPortOperations>
) {
    if (!_cached_encoder_for_AdministrationPortOperations) {
        _cached_encoder_for_AdministrationPortOperations = _encode_EventTypeId;
    }
    return _cached_encoder_for_AdministrationPortOperations(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AdministrationPortOperations */

/* eslint-enable */
