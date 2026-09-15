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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../Core-INAP-CS1-DataTypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../Core-INAP-CS1-DataTypes/CalledPartyNumber.ta.mjs";


/**
 * @summary IPRoutingAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPRoutingAddress      ::=  CalledPartyNumber
 * ```
 */
export
type IPRoutingAddress = CalledPartyNumber; // DefinedType

let _cached_decoder_for_IPRoutingAddress: $.ASN1Decoder<IPRoutingAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPRoutingAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPRoutingAddress (el: _Element): IPRoutingAddress {
    if (!_cached_decoder_for_IPRoutingAddress) { _cached_decoder_for_IPRoutingAddress = _decode_CalledPartyNumber; }
    return _cached_decoder_for_IPRoutingAddress(el);
}

let _cached_encoder_for_IPRoutingAddress: $.ASN1Encoder<IPRoutingAddress> | null = null;

/**
 * @summary Encodes a(n) IPRoutingAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPRoutingAddress, encoded as an ASN.1 Element.
 */
export
function _encode_IPRoutingAddress (value: IPRoutingAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPRoutingAddress) { _cached_encoder_for_IPRoutingAddress = _encode_CalledPartyNumber; }
    return _cached_encoder_for_IPRoutingAddress(value, elGetter);
}


/* eslint-enable */
