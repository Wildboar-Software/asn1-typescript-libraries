/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type NumberOfDigits, _decode_NumberOfDigits, _encode_NumberOfDigits } from "../IN-CS3-SSF-SCF-datatypes/NumberOfDigits.ta.mjs";
// export { NumberOfDigits, _decode_NumberOfDigits, _encode_NumberOfDigits } from "../IN-CS3-SSF-SCF-datatypes/NumberOfDigits.ta.mjs";
import { type ApplicationTimer, _decode_ApplicationTimer, _encode_ApplicationTimer } from "../IN-CS3-SSF-SCF-datatypes/ApplicationTimer.ta.mjs";
// export { ApplicationTimer, _decode_ApplicationTimer, _encode_ApplicationTimer } from "../IN-CS3-SSF-SCF-datatypes/ApplicationTimer.ta.mjs";
import { type MidCallControlInfo, _decode_MidCallControlInfo, _encode_MidCallControlInfo } from "../IN-CS3-SSF-SCF-datatypes/MidCallControlInfo.ta.mjs";
// export { MidCallControlInfo, _decode_MidCallControlInfo, _encode_MidCallControlInfo } from "../IN-CS3-SSF-SCF-datatypes/MidCallControlInfo.ta.mjs";
import { DpSpecificCriteria_numberOfDigitsTwo, _decode_DpSpecificCriteria_numberOfDigitsTwo, _encode_DpSpecificCriteria_numberOfDigitsTwo } from "../IN-CS3-SSF-SCF-datatypes/DpSpecificCriteria-numberOfDigitsTwo.ta.mjs";
// export { DpSpecificCriteria_numberOfDigitsTwo, _decode_DpSpecificCriteria_numberOfDigitsTwo, _encode_DpSpecificCriteria_numberOfDigitsTwo } from "../IN-CS3-SSF-SCF-datatypes/DpSpecificCriteria-numberOfDigitsTwo.ta.mjs";


/**
 * @summary DpSpecificCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DpSpecificCriteria  ::=  CHOICE {
 *   numberOfDigits      [0]  NumberOfDigits,
 *   applicationTimer    [1]  ApplicationTimer,
 *   midCallControlInfo  [2]  MidCallControlInfo,
 *   numberOfDigitsTwo
 *     [3]  SEQUENCE {requestedNumberOfDigits  [0]  NumberOfDigits,
 *                    minNumberOfDigits        [1]  NumberOfDigits OPTIONAL
 *   }
 * }
 * ```
 */
export
type DpSpecificCriteria =
    { numberOfDigits: NumberOfDigits } /* CHOICE_ALT_ROOT */
    | { applicationTimer: ApplicationTimer } /* CHOICE_ALT_ROOT */
    | { midCallControlInfo: MidCallControlInfo } /* CHOICE_ALT_ROOT */
    | { numberOfDigitsTwo: DpSpecificCriteria_numberOfDigitsTwo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DpSpecificCriteria: $.ASN1Decoder<DpSpecificCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DpSpecificCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DpSpecificCriteria (el: _Element): DpSpecificCriteria {
    if (!_cached_decoder_for_DpSpecificCriteria) { _cached_decoder_for_DpSpecificCriteria = $._decode_inextensible_choice<DpSpecificCriteria>({
    "CONTEXT 0": [ "numberOfDigits", $._decode_implicit<NumberOfDigits>(() => _decode_NumberOfDigits) ],
    "CONTEXT 1": [ "applicationTimer", $._decode_implicit<ApplicationTimer>(() => _decode_ApplicationTimer) ],
    "CONTEXT 2": [ "midCallControlInfo", $._decode_implicit<MidCallControlInfo>(() => _decode_MidCallControlInfo) ],
    "CONTEXT 3": [ "numberOfDigitsTwo", $._decode_implicit<DpSpecificCriteria_numberOfDigitsTwo>(() => _decode_DpSpecificCriteria_numberOfDigitsTwo) ]
}); }
    return _cached_decoder_for_DpSpecificCriteria(el);
}

let _cached_encoder_for_DpSpecificCriteria: $.ASN1Encoder<DpSpecificCriteria> | null = null;

/**
 * @summary Encodes a(n) DpSpecificCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DpSpecificCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_DpSpecificCriteria (value: DpSpecificCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DpSpecificCriteria) { _cached_encoder_for_DpSpecificCriteria = $._encode_choice<DpSpecificCriteria>({
    "numberOfDigits": $._encode_implicit(_TagClass.context, 0, () => _encode_NumberOfDigits, $.BER),
    "applicationTimer": $._encode_implicit(_TagClass.context, 1, () => _encode_ApplicationTimer, $.BER),
    "midCallControlInfo": $._encode_implicit(_TagClass.context, 2, () => _encode_MidCallControlInfo, $.BER),
    "numberOfDigitsTwo": $._encode_implicit(_TagClass.context, 3, () => _encode_DpSpecificCriteria_numberOfDigitsTwo, $.BER),
}, $.BER); }
    return _cached_encoder_for_DpSpecificCriteria(value, elGetter);
}


/* eslint-enable */
