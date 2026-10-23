/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BasicChargingParameters, _decode_BasicChargingParameters, _encode_BasicChargingParameters } from "../IN-CS3-SCF-SCF-datatypes/BasicChargingParameters.ta.mjs";
// export { BasicChargingParameters, _decode_BasicChargingParameters, _encode_BasicChargingParameters } from "../IN-CS3-SCF-SCF-datatypes/BasicChargingParameters.ta.mjs";
import { Tariffs, _decode_Tariffs, _encode_Tariffs } from "../IN-CS3-SCF-SCF-datatypes/Tariffs.ta.mjs";
// export { Tariffs, _decode_Tariffs, _encode_Tariffs } from "../IN-CS3-SCF-SCF-datatypes/Tariffs.ta.mjs";
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";


/**
 * @summary ChargingParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingParameters  ::=  CHOICE {
 *   basic    [1]  BasicChargingParameters,
 *   tariffs  [20]  Tariffs,
 *   mutual   [21]  Code--indicated an indexed charging rule--
 *   -- agreed between operator
 * }
 * ```
 */
export
type ChargingParameters =
    { basic: BasicChargingParameters } /* CHOICE_ALT_ROOT */
    | { tariffs: Tariffs } /* CHOICE_ALT_ROOT */
    | { mutual: Code } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ChargingParameters: $.ASN1Decoder<ChargingParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingParameters (el: _Element): ChargingParameters {
    if (!_cached_decoder_for_ChargingParameters) { _cached_decoder_for_ChargingParameters = $._decode_inextensible_choice<ChargingParameters>({
    "CONTEXT 1": [ "basic", $._decode_implicit<BasicChargingParameters>(() => _decode_BasicChargingParameters) ],
    "CONTEXT 20": [ "tariffs", $._decode_implicit<Tariffs>(() => _decode_Tariffs) ],
    "CONTEXT 21": [ "mutual", $._decode_explicit<Code>(() => _decode_Code) ]
}); }
    return _cached_decoder_for_ChargingParameters(el);
}

let _cached_encoder_for_ChargingParameters: $.ASN1Encoder<ChargingParameters> | null = null;

/**
 * @summary Encodes a(n) ChargingParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingParameters, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingParameters (value: ChargingParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingParameters) { _cached_encoder_for_ChargingParameters = $._encode_choice<ChargingParameters>({
    "basic": $._encode_implicit(_TagClass.context, 1, () => _encode_BasicChargingParameters, $.BER),
    "tariffs": $._encode_implicit(_TagClass.context, 20, () => _encode_Tariffs, $.BER),
    "mutual": $._encode_explicit(_TagClass.context, 21, () => _encode_Code, $.BER),
}, $.BER); }
    return _cached_encoder_for_ChargingParameters(value, elGetter);
}


/* eslint-enable */
