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
import { SignedData, _decode_SignedData, _encode_SignedData } from "../X9-84-CMS/SignedData.ta.mjs";

import { SignedDataACBio, _decode_SignedDataACBio, _encode_SignedDataACBio } from "../AuthenticationContextForBiometrics/SignedDataACBio.ta.mjs";



/**
 * @summary SignedDatabyClient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignedDatabyClient  ::=  CHOICE {
 * digital-signature        [0] SignedData,
 *                 --import from X9.84-CMS
 * aCBioOnClient        [1] SignedDataACBio
 *                 --import from ISO/IEC 24761
 * }
 * ```
 */
export
type SignedDatabyClient =
    { digital_signature: SignedData } /* CHOICE_ALT_ROOT */
    | { aCBioOnClient: SignedDataACBio } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SignedDatabyClient: $.ASN1Decoder<SignedDatabyClient> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignedDatabyClient
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignedDatabyClient (el: _Element): SignedDatabyClient {
    if (!_cached_decoder_for_SignedDatabyClient) { _cached_decoder_for_SignedDatabyClient = $._decode_inextensible_choice<SignedDatabyClient>({
    "CONTEXT 0": [ "digital_signature", $._decode_implicit<SignedData>(() => _decode_SignedData) ],
    "CONTEXT 1": [ "aCBioOnClient", $._decode_implicit<SignedDataACBio>(() => _decode_SignedDataACBio) ]
}); }
    return _cached_decoder_for_SignedDatabyClient(el);
}

let _cached_encoder_for_SignedDatabyClient: $.ASN1Encoder<SignedDatabyClient> | null = null;

/**
 * @summary Encodes a(n) SignedDatabyClient into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedDatabyClient, encoded as an ASN.1 Element.
 */
export
function _encode_SignedDatabyClient (value: SignedDatabyClient, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignedDatabyClient) { _cached_encoder_for_SignedDatabyClient = $._encode_choice<SignedDatabyClient>({
    "digital_signature": $._encode_implicit(_TagClass.context, 0, () => _encode_SignedData, $.BER),
    "aCBioOnClient": $._encode_implicit(_TagClass.context, 1, () => _encode_SignedDataACBio, $.BER),
}, $.BER); }
    return _cached_encoder_for_SignedDatabyClient(value, elGetter);
}


/* eslint-enable */
