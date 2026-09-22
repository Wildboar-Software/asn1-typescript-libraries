/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EimConfigurationData, _decode_EimConfigurationData, _encode_EimConfigurationData } from "../SGP32Definitions/EimConfigurationData.ta.mjs";
// export { EimConfigurationData, _decode_EimConfigurationData, _encode_EimConfigurationData } from "../SGP32Definitions/EimConfigurationData.ta.mjs";
import { Eco_deleteEim, _decode_Eco_deleteEim, _encode_Eco_deleteEim } from "../SGP32Definitions/Eco-deleteEim.ta.mjs";
// export { Eco_deleteEim, _decode_Eco_deleteEim, _encode_Eco_deleteEim } from "../SGP32Definitions/Eco-deleteEim.ta.mjs";
import { Eco_listEim, _decode_Eco_listEim, _encode_Eco_listEim } from "../SGP32Definitions/Eco-listEim.ta.mjs";
// export { Eco_listEim, _decode_Eco_listEim, _encode_Eco_listEim } from "../SGP32Definitions/Eco-listEim.ta.mjs";


/**
 * @summary Eco
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Eco  ::=  CHOICE {
 *     addEim [8] EimConfigurationData, -- for eIM configuration data see 2.11.1
 *     deleteEim [9] SEQUENCE {eimId [0] UTF8String},
 *     updateEim [10] EimConfigurationData,
 *     listEim [11] SEQUENCE {}
 * }
 * ```
 */
export
type Eco =
    { addEim: EimConfigurationData } /* CHOICE_ALT_ROOT */
    | { deleteEim: Eco_deleteEim } /* CHOICE_ALT_ROOT */
    | { updateEim: EimConfigurationData } /* CHOICE_ALT_ROOT */
    | { listEim: Eco_listEim } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Eco: $.ASN1Decoder<Eco> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Eco
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Eco (el: _Element): Eco {
    if (!_cached_decoder_for_Eco) { _cached_decoder_for_Eco = $._decode_inextensible_choice<Eco>({
    "CONTEXT 8": [ "addEim", $._decode_implicit<EimConfigurationData>(() => _decode_EimConfigurationData) ],
    "CONTEXT 9": [ "deleteEim", $._decode_implicit<Eco_deleteEim>(() => _decode_Eco_deleteEim) ],
    "CONTEXT 10": [ "updateEim", $._decode_implicit<EimConfigurationData>(() => _decode_EimConfigurationData) ],
    "CONTEXT 11": [ "listEim", $._decode_implicit<Eco_listEim>(() => _decode_Eco_listEim) ]
}); }
    return _cached_decoder_for_Eco(el);
}

let _cached_encoder_for_Eco: $.ASN1Encoder<Eco> | null = null;

/**
 * @summary Encodes a(n) Eco into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Eco, encoded as an ASN.1 Element.
 */
export
function _encode_Eco (value: Eco, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Eco) { _cached_encoder_for_Eco = $._encode_choice<Eco>({
    "addEim": $._encode_implicit(_TagClass.context, 8, () => _encode_EimConfigurationData, $.BER),
    "deleteEim": $._encode_implicit(_TagClass.context, 9, () => _encode_Eco_deleteEim, $.BER),
    "updateEim": $._encode_implicit(_TagClass.context, 10, () => _encode_EimConfigurationData, $.BER),
    "listEim": $._encode_implicit(_TagClass.context, 11, () => _encode_Eco_listEim, $.BER),
}, $.BER); }
    return _cached_encoder_for_Eco(value, elGetter);
}


/* eslint-enable */
