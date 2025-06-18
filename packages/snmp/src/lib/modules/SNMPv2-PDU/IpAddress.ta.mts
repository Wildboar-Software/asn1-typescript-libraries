/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary IpAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IpAddress  ::=  [APPLICATION 0] IMPLICIT OCTET STRING (SIZE (4))
 * ```
 */
export
type IpAddress = OCTET_STRING; // OctetStringType

let _cached_decoder_for_IpAddress: $.ASN1Decoder<IpAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IpAddress} The decoded data structure.
 */
export
function _decode_IpAddress (el: _Element) {
    if (!_cached_decoder_for_IpAddress) { _cached_decoder_for_IpAddress = $._decode_implicit<IpAddress>(() => $._decodeOctetString); }
    return _cached_decoder_for_IpAddress(el);
}

let _cached_encoder_for_IpAddress: $.ASN1Encoder<IpAddress> | null = null;

/**
 * @summary Encodes a(n) IpAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpAddress, encoded as an ASN.1 Element.
 */
export
function _encode_IpAddress (value: IpAddress, elGetter: $.ASN1Encoder<IpAddress>) {
    if (!_cached_encoder_for_IpAddress) { _cached_encoder_for_IpAddress = $._encode_implicit(_TagClass.application, 0, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_IpAddress(value, elGetter);
}


/* eslint-enable */
