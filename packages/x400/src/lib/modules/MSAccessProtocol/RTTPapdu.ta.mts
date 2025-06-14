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

/* START_OF_SYMBOL_DEFINITION RTTPapdu */
/**
 * @summary RTTPapdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RTTPapdu  ::=  -- priority-- INTEGER
 * ```
 */
export type RTTPapdu = INTEGER;
/* END_OF_SYMBOL_DEFINITION RTTPapdu */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RTTPapdu */
let _cached_decoder_for_RTTPapdu: $.ASN1Decoder<RTTPapdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RTTPapdu */

/* START_OF_SYMBOL_DEFINITION _decode_RTTPapdu */
/**
 * @summary Decodes an ASN.1 element into a(n) RTTPapdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RTTPapdu} The decoded data structure.
 */
export function _decode_RTTPapdu(el: _Element) {
    if (!_cached_decoder_for_RTTPapdu) {
        _cached_decoder_for_RTTPapdu = $._decodeInteger;
    }
    return _cached_decoder_for_RTTPapdu(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RTTPapdu */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RTTPapdu */
let _cached_encoder_for_RTTPapdu: $.ASN1Encoder<RTTPapdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RTTPapdu */

/* START_OF_SYMBOL_DEFINITION _encode_RTTPapdu */
/**
 * @summary Encodes a(n) RTTPapdu into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RTTPapdu, encoded as an ASN.1 Element.
 */
export function _encode_RTTPapdu(
    value: RTTPapdu,
    elGetter: $.ASN1Encoder<RTTPapdu>
) {
    if (!_cached_encoder_for_RTTPapdu) {
        _cached_encoder_for_RTTPapdu = $._encodeInteger;
    }
    return _cached_encoder_for_RTTPapdu(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RTTPapdu */

/* eslint-enable */
