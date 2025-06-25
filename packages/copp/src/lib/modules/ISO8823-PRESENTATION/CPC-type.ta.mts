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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    User_data,
    _decode_User_data,
    _encode_User_data,
} from '../ISO8823-PRESENTATION/User-data.ta.mjs';

/**
 * @summary CPC_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CPC-type  ::=
 *   User-data
 * ```
 */
export type CPC_type = User_data; // DefinedType


let _cached_decoder_for_CPC_type: $.ASN1Decoder<CPC_type> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CPC_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CPC_type} The decoded data structure.
 */
export function _decode_CPC_type(el: _Element): CPC_type {
    if (!_cached_decoder_for_CPC_type) {
        _cached_decoder_for_CPC_type = _decode_User_data;
    }
    return _cached_decoder_for_CPC_type(el);
}


let _cached_encoder_for_CPC_type: $.ASN1Encoder<CPC_type> | null = null;


/**
 * @summary Encodes a(n) CPC_type into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPC_type, encoded as an ASN.1 Element.
 */
export function _encode_CPC_type(
    value: CPC_type,
    elGetter: $.ASN1Encoder<CPC_type>
): _Element {
    if (!_cached_encoder_for_CPC_type) {
        _cached_encoder_for_CPC_type = _encode_User_data;
    }
    return _cached_encoder_for_CPC_type(value, elGetter);
}


/* eslint-enable */
