/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Name, _decode_Name, _encode_Name } from "@wildboar/pki-stub";
import { IssuerAndSerialNumber, _decode_IssuerAndSerialNumber, _encode_IssuerAndSerialNumber } from "@wildboar/cms";


/**
 * @summary TrustedCA
 * @description
 *
 * One CA hint in {@link PA_PK_AS_REQ_Win2k.trusted_certifiers}.
 * RFC 4556 does not define this choice. `caName` is a PKIX
 * `Name`. `issuerAndSerial` is a CMS `IssuerAndSerialNumber`.
 * The module does not say which alternative to send.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrustedCA  ::=  CHOICE {
 *     caName                  [0] Name,
 *     issuerAndSerial         [2] IssuerAndSerialNumber,
 *     ...
 * }
 * ```
 */
export
type TrustedCA =
    { caName: Name } /* CHOICE_ALT_ROOT */
    | { issuerAndSerial: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_TrustedCA: $.ASN1Decoder<TrustedCA> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TrustedCA
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TrustedCA (el: _Element): TrustedCA {
    if (!_cached_decoder_for_TrustedCA) { _cached_decoder_for_TrustedCA = $._decode_extensible_choice<TrustedCA>({
    "CONTEXT 0": [ "caName", $._decode_explicit<Name>(() => _decode_Name) ],
    "CONTEXT 2": [ "issuerAndSerial", $._decode_implicit<IssuerAndSerialNumber>(() => _decode_IssuerAndSerialNumber) ]
}); }
    return _cached_decoder_for_TrustedCA(el);
}

let _cached_encoder_for_TrustedCA: $.ASN1Encoder<TrustedCA> | null = null;

/**
 * @summary Encodes a(n) TrustedCA into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrustedCA, encoded as an ASN.1 Element.
 */
export
function _encode_TrustedCA (value: TrustedCA, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TrustedCA) { _cached_encoder_for_TrustedCA = $._encode_choice<TrustedCA>({
    "caName": $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER),
    "issuerAndSerial": $._encode_implicit(_TagClass.context, 2, () => _encode_IssuerAndSerialNumber, $.BER),
}, $.BER); }
    return _cached_encoder_for_TrustedCA(value, elGetter);
}


/* eslint-enable */
