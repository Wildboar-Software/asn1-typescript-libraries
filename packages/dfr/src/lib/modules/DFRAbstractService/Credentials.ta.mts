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
import { Creds, _decode_Creds, _encode_Creds } from "../DFRAbstractService/Creds.ta.mjs";
import { PrivilegeAttributeCertificate, _decode_PrivilegeAttributeCertificate, _encode_PrivilegeAttributeCertificate } from "../DFRAbstractService/PrivilegeAttributeCertificate.ta.mjs";


/**
 * @summary Credentials
 * @description
 *
 * Bind credentials: `simple` password for initial authentication, or
 * `certified` PAC when authentication already happened outside DFR. ISO/IEC
 * 10166-1:1991 §7.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Credentials  ::=  CHOICE {
 *     -- used for initial authentication
 *     simple       [0] Creds,
 *     -- used when initial authentication has already taken place external to the DFR-Server
 *     certified    [1] PrivilegeAttributeCertificate
 * }
 * ```
 */
export
type Credentials =
    { simple: Creds } /* CHOICE_ALT_ROOT */
    | { certified: PrivilegeAttributeCertificate } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Credentials: $.ASN1Decoder<Credentials> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Credentials
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Credentials (el: _Element): Credentials {
    if (!_cached_decoder_for_Credentials) { _cached_decoder_for_Credentials = $._decode_inextensible_choice<Credentials>({
    "CONTEXT 0": [ "simple", $._decode_implicit<Creds>(() => _decode_Creds) ],
    "CONTEXT 1": [ "certified", $._decode_implicit<PrivilegeAttributeCertificate>(() => _decode_PrivilegeAttributeCertificate) ]
}); }
    return _cached_decoder_for_Credentials(el);
}

let _cached_encoder_for_Credentials: $.ASN1Encoder<Credentials> | null = null;

/**
 * @summary Encodes a(n) Credentials into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Credentials, encoded as an ASN.1 Element.
 */
export
function _encode_Credentials (value: Credentials, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Credentials) { _cached_encoder_for_Credentials = $._encode_choice<Credentials>({
    "simple": $._encode_implicit(_TagClass.context, 0, () => _encode_Creds, $.BER),
    "certified": $._encode_implicit(_TagClass.context, 1, () => _encode_PrivilegeAttributeCertificate, $.BER),
}, $.BER); }
    return _cached_encoder_for_Credentials(value, elGetter);
}


/* eslint-enable */
