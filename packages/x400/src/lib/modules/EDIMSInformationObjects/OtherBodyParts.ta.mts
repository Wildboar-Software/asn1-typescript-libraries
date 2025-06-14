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
    EDIM_ExtendedBodyPart,
    _decode_EDIM_ExtendedBodyPart,
    _encode_EDIM_ExtendedBodyPart,
} from '../EDIMSInformationObjects/EDIM-ExtendedBodyPart.ta.mjs';
/* START_OF_SYMBOL_DEFINITION OtherBodyParts */
/**
 * @summary OtherBodyParts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherBodyParts  ::=  SEQUENCE OF EDIM-ExtendedBodyPart
 * ```
 */
export type OtherBodyParts = EDIM_ExtendedBodyPart[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION OtherBodyParts */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherBodyParts */
let _cached_decoder_for_OtherBodyParts: $.ASN1Decoder<OtherBodyParts> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherBodyParts */

/* START_OF_SYMBOL_DEFINITION _decode_OtherBodyParts */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherBodyParts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherBodyParts} The decoded data structure.
 */
export function _decode_OtherBodyParts(el: _Element) {
    if (!_cached_decoder_for_OtherBodyParts) {
        _cached_decoder_for_OtherBodyParts = $._decodeSequenceOf<EDIM_ExtendedBodyPart>(
            () => _decode_EDIM_ExtendedBodyPart
        );
    }
    return _cached_decoder_for_OtherBodyParts(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherBodyParts */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherBodyParts */
let _cached_encoder_for_OtherBodyParts: $.ASN1Encoder<OtherBodyParts> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherBodyParts */

/* START_OF_SYMBOL_DEFINITION _encode_OtherBodyParts */
/**
 * @summary Encodes a(n) OtherBodyParts into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherBodyParts, encoded as an ASN.1 Element.
 */
export function _encode_OtherBodyParts(
    value: OtherBodyParts,
    elGetter: $.ASN1Encoder<OtherBodyParts>
) {
    if (!_cached_encoder_for_OtherBodyParts) {
        _cached_encoder_for_OtherBodyParts = $._encodeSequenceOf<EDIM_ExtendedBodyPart>(
            () => _encode_EDIM_ExtendedBodyPart,
            $.BER
        );
    }
    return _cached_encoder_for_OtherBodyParts(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherBodyParts */

/* eslint-enable */
