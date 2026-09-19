/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GSEMngtPdu, _decode_GSEMngtPdu, _encode_GSEMngtPdu } from "../IEC61850/GSEMngtPdu.ta.mjs";
// export { GSEMngtPdu, _decode_GSEMngtPdu, _encode_GSEMngtPdu } from "../IEC61850/GSEMngtPdu.ta.mjs";
import { IECGoosePdu, _decode_IECGoosePdu, _encode_IECGoosePdu } from "../IEC61850/IECGoosePdu.ta.mjs";
// export { IECGoosePdu, _decode_IECGoosePdu, _encode_IECGoosePdu } from "../IEC61850/IECGoosePdu.ta.mjs";


/**
 * @summary GOOSEpdu
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GOOSEpdu  ::=  CHOICE {
 *     gseMngtPdu    [APPLICATION 0] IMPLICIT GSEMngtPdu,
 *     goosePdu    [APPLICATION 1] IMPLICIT IECGoosePdu,
 *     ...
 * }
 * ```
 */
export
type GOOSEpdu =
    { gseMngtPdu: GSEMngtPdu } /* CHOICE_ALT_ROOT */
    | { goosePdu: IECGoosePdu } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_GOOSEpdu: $.ASN1Decoder<GOOSEpdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GOOSEpdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GOOSEpdu (el: _Element): GOOSEpdu {
    if (!_cached_decoder_for_GOOSEpdu) { _cached_decoder_for_GOOSEpdu = $._decode_extensible_choice<GOOSEpdu>({
    "APPLICATION 0": [ "gseMngtPdu", $._decode_implicit<GSEMngtPdu>(() => _decode_GSEMngtPdu) ],
    "APPLICATION 1": [ "goosePdu", $._decode_implicit<IECGoosePdu>(() => _decode_IECGoosePdu) ]
}); }
    return _cached_decoder_for_GOOSEpdu(el);
}

let _cached_encoder_for_GOOSEpdu: $.ASN1Encoder<GOOSEpdu> | null = null;

/**
 * @summary Encodes a(n) GOOSEpdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GOOSEpdu, encoded as an ASN.1 Element.
 */
export
function _encode_GOOSEpdu (value: GOOSEpdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GOOSEpdu) { _cached_encoder_for_GOOSEpdu = $._encode_choice<GOOSEpdu>({
    "gseMngtPdu": $._encode_implicit(_TagClass.application, 0, () => _encode_GSEMngtPdu, $.BER),
    "goosePdu": $._encode_implicit(_TagClass.application, 1, () => _encode_IECGoosePdu, $.BER),
}, $.BER); }
    return _cached_encoder_for_GOOSEpdu(value, elGetter);
}


/* eslint-enable */
