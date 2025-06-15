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
    IsdnNumber,
    _decode_IsdnNumber,
    _encode_IsdnNumber,
} from '../TCAP-Examples/IsdnNumber.ta.mjs';
/**
 * @summary CallingPartyAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CallingPartyAddress  ::=  IsdnNumber
 * ```
 */
export type CallingPartyAddress = IsdnNumber; // DefinedType

let _cached_decoder_for_CallingPartyAddress: $.ASN1Decoder<CallingPartyAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallingPartyAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CallingPartyAddress} The decoded data structure.
 */
export function _decode_CallingPartyAddress(el: _Element) {
    if (!_cached_decoder_for_CallingPartyAddress) {
        _cached_decoder_for_CallingPartyAddress = _decode_IsdnNumber;
    }
    return _cached_decoder_for_CallingPartyAddress(el);
}

let _cached_encoder_for_CallingPartyAddress: $.ASN1Encoder<CallingPartyAddress> | null = null;

/**
 * @summary Encodes a(n) CallingPartyAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallingPartyAddress, encoded as an ASN.1 Element.
 */
export function _encode_CallingPartyAddress(
    value: CallingPartyAddress,
    elGetter: $.ASN1Encoder<CallingPartyAddress>
) {
    if (!_cached_encoder_for_CallingPartyAddress) {
        _cached_encoder_for_CallingPartyAddress = _encode_IsdnNumber;
    }
    return _cached_encoder_for_CallingPartyAddress(value, elGetter);
}


/* eslint-enable */
