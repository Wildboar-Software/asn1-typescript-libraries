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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IpAddress
 * @description
 *
 * Network address as OCTET STRING (SIZE (4)), APPLICATION 0
 * ([RFC 3416 §3](https://datatracker.ietf.org/doc/html/rfc3416#section-3)).
 * SMIv2 `IpAddress` maps to `ipAddress-value` of `ApplicationSyntax`
 * ([RFC 3416 §2.5](https://datatracker.ietf.org/doc/html/rfc3416#section-2.5)).
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
function _decode_IpAddress (el: _Element): IpAddress {
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
function _encode_IpAddress (value: IpAddress, elGetter: $.ASN1Encoder<IpAddress>): _Element {
    if (!_cached_encoder_for_IpAddress) { _cached_encoder_for_IpAddress = $._encode_implicit(_TagClass.application, 0, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_IpAddress(value, elGetter);
}


/* eslint-enable */
