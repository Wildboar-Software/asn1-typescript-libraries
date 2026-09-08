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
import { ChangeCipherSpec, _enum_for_ChangeCipherSpec, _decode_ChangeCipherSpec, _encode_ChangeCipherSpec } from "../TSM/ChangeCipherSpec.ta.mjs";

import { Alert, _decode_Alert, _encode_Alert } from "../TSM/Alert.ta.mjs";

import { Handshake, _decode_Handshake, _encode_Handshake } from "../TSM/Handshake.ta.mjs";

import { ApplicationData, _decode_ApplicationData, _encode_ApplicationData } from "../TSM/ApplicationData.ta.mjs";



/**
 * @summary TSMPlainText_fragment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSMPlainText-fragment ::= CHOICE {
 *     change-cipher-spec-opaque    ChangeCipherSpec,
 *     alert-opaque                 Alert,
 *     biometric-handshake-opaque   Handshake,
 *     application-data-opaque      ApplicationData
 * }
 * ```
 */
export
type TSMPlainText_fragment =
    { change_cipher_spec_opaque: ChangeCipherSpec } /* CHOICE_ALT_ROOT */
    | { alert_opaque: Alert } /* CHOICE_ALT_ROOT */
    | { biometric_handshake_opaque: Handshake } /* CHOICE_ALT_ROOT */
    | { application_data_opaque: ApplicationData } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TSMPlainText_fragment: $.ASN1Decoder<TSMPlainText_fragment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSMPlainText_fragment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSMPlainText_fragment (el: _Element): TSMPlainText_fragment {
    if (!_cached_decoder_for_TSMPlainText_fragment) { _cached_decoder_for_TSMPlainText_fragment = $._decode_inextensible_choice<TSMPlainText_fragment>({
    "CONTEXT 0": [ "change_cipher_spec_opaque", _decode_ChangeCipherSpec ],
    "CONTEXT 1": [ "alert_opaque", _decode_Alert ],
    "CONTEXT 2": [ "biometric_handshake_opaque", _decode_Handshake ],
    "CONTEXT 3": [ "application_data_opaque", _decode_ApplicationData ]
}); }
    return _cached_decoder_for_TSMPlainText_fragment(el);
}

let _cached_encoder_for_TSMPlainText_fragment: $.ASN1Encoder<TSMPlainText_fragment> | null = null;

/**
 * @summary Encodes a(n) TSMPlainText_fragment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSMPlainText_fragment, encoded as an ASN.1 Element.
 */
export
function _encode_TSMPlainText_fragment (value: TSMPlainText_fragment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSMPlainText_fragment) { _cached_encoder_for_TSMPlainText_fragment = $._encode_choice<TSMPlainText_fragment>({
    "change_cipher_spec_opaque": _encode_ChangeCipherSpec,
    "alert_opaque": _encode_Alert,
    "biometric_handshake_opaque": _encode_Handshake,
    "application_data_opaque": _encode_ApplicationData,
}, $.BER); }
    return _cached_encoder_for_TSMPlainText_fragment(value, elGetter);
}


/* eslint-enable */
