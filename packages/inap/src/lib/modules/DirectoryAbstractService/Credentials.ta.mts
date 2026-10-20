/* eslint-disable */
import {
    EXTERNAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SimpleCredentials, _decode_SimpleCredentials, _encode_SimpleCredentials } from "../DirectoryAbstractService/SimpleCredentials.ta.mjs";
// export { SimpleCredentials, _decode_SimpleCredentials, _encode_SimpleCredentials } from "../DirectoryAbstractService/SimpleCredentials.ta.mjs";
import { StrongCredentials, _decode_StrongCredentials, _encode_StrongCredentials } from "../DirectoryAbstractService/StrongCredentials.ta.mjs";
// export { StrongCredentials, _decode_StrongCredentials, _encode_StrongCredentials } from "../DirectoryAbstractService/StrongCredentials.ta.mjs";
import { SpkmCredentials, _decode_SpkmCredentials, _encode_SpkmCredentials } from "../DirectoryAbstractService/SpkmCredentials.ta.mjs";
// export { SpkmCredentials, _decode_SpkmCredentials, _encode_SpkmCredentials } from "../DirectoryAbstractService/SpkmCredentials.ta.mjs";


/**
 * @summary Credentials
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Credentials  ::=  CHOICE {
 *   simple             [0]  SimpleCredentials,
 *   strong             [1]  StrongCredentials,
 *   externalProcedure  [2]  EXTERNAL,
 *   spkm               [3]  SpkmCredentials
 * }
 * ```
 */
export
type Credentials =
    { simple: SimpleCredentials } /* CHOICE_ALT_ROOT */
    | { strong: StrongCredentials } /* CHOICE_ALT_ROOT */
    | { externalProcedure: EXTERNAL } /* CHOICE_ALT_ROOT */
    | { spkm: SpkmCredentials } /* CHOICE_ALT_ROOT */;

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
    "CONTEXT 0": [ "simple", $._decode_explicit<SimpleCredentials>(() => _decode_SimpleCredentials) ],
    "CONTEXT 1": [ "strong", $._decode_explicit<StrongCredentials>(() => _decode_StrongCredentials) ],
    "CONTEXT 2": [ "externalProcedure", $._decode_explicit<EXTERNAL>(() => $._decodeExternal) ],
    "CONTEXT 3": [ "spkm", $._decode_explicit<SpkmCredentials>(() => _decode_SpkmCredentials) ]
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
    "simple": $._encode_explicit(_TagClass.context, 0, () => _encode_SimpleCredentials, $.BER),
    "strong": $._encode_explicit(_TagClass.context, 1, () => _encode_StrongCredentials, $.BER),
    "externalProcedure": $._encode_explicit(_TagClass.context, 2, () => $._encodeExternal, $.BER),
    "spkm": $._encode_explicit(_TagClass.context, 3, () => _encode_SpkmCredentials, $.BER),
}, $.BER); }
    return _cached_encoder_for_Credentials(value, elGetter);
}


/* eslint-enable */
