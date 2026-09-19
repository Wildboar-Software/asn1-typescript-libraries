/* eslint-disable */
import {
    NULL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProfileDownloadData_contactSmds, _decode_ProfileDownloadData_contactSmds, _encode_ProfileDownloadData_contactSmds } from "../SGP32Definitions/ProfileDownloadData-contactSmds.ta.mjs";
// export { ProfileDownloadData_contactSmds, _decode_ProfileDownloadData_contactSmds, _encode_ProfileDownloadData_contactSmds } from "../SGP32Definitions/ProfileDownloadData-contactSmds.ta.mjs";


/**
 * @summary ProfileDownloadData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileDownloadData  ::=  CHOICE {
 *     activationCode [0] UTF8String (SIZE(0..255)),
 *     contactDefaultSmdp [1] NULL,
 *     contactSmds [2] SEQUENCE {
 *         smdsAddress UTF8String OPTIONAL
 *     }
 * }
 * ```
 */
export
type ProfileDownloadData =
    { activationCode: UTF8String } /* CHOICE_ALT_ROOT */
    | { contactDefaultSmdp: NULL } /* CHOICE_ALT_ROOT */
    | { contactSmds: ProfileDownloadData_contactSmds } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProfileDownloadData: $.ASN1Decoder<ProfileDownloadData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileDownloadData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileDownloadData (el: _Element): ProfileDownloadData {
    if (!_cached_decoder_for_ProfileDownloadData) { _cached_decoder_for_ProfileDownloadData = $._decode_inextensible_choice<ProfileDownloadData>({
    "CONTEXT 0": [ "activationCode", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 1": [ "contactDefaultSmdp", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "contactSmds", $._decode_implicit<ProfileDownloadData_contactSmds>(() => _decode_ProfileDownloadData_contactSmds) ]
}); }
    return _cached_decoder_for_ProfileDownloadData(el);
}

let _cached_encoder_for_ProfileDownloadData: $.ASN1Encoder<ProfileDownloadData> | null = null;

/**
 * @summary Encodes a(n) ProfileDownloadData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileDownloadData, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileDownloadData (value: ProfileDownloadData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileDownloadData) { _cached_encoder_for_ProfileDownloadData = $._encode_choice<ProfileDownloadData>({
    "activationCode": $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER),
    "contactDefaultSmdp": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "contactSmds": $._encode_implicit(_TagClass.context, 2, () => _encode_ProfileDownloadData_contactSmds, $.BER),
}, $.BER); }
    return _cached_encoder_for_ProfileDownloadData(value, elGetter);
}


/* eslint-enable */
