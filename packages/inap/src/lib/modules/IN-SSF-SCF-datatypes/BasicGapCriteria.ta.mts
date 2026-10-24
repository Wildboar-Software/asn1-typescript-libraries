/* eslint-disable */
import {
    NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Digits, _decode_Digits, _encode_Digits } from "../IN-SSF-SCF-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-SSF-SCF-datatypes/Digits.ta.mjs";
import { GapOnService, _decode_GapOnService, _encode_GapOnService } from "../IN-SSF-SCF-datatypes/GapOnService.ta.mjs";
// export { GapOnService, _decode_GapOnService, _encode_GapOnService } from "../IN-SSF-SCF-datatypes/GapOnService.ta.mjs";
import { BasicGapCriteria_calledAddressAndService, _decode_BasicGapCriteria_calledAddressAndService, _encode_BasicGapCriteria_calledAddressAndService } from "../IN-SSF-SCF-datatypes/BasicGapCriteria-calledAddressAndService.ta.mjs";
// export { BasicGapCriteria_calledAddressAndService, _decode_BasicGapCriteria_calledAddressAndService, _encode_BasicGapCriteria_calledAddressAndService } from "../IN-SSF-SCF-datatypes/BasicGapCriteria-calledAddressAndService.ta.mjs";
import { BasicGapCriteria_callingAddressAndService, _decode_BasicGapCriteria_callingAddressAndService, _encode_BasicGapCriteria_callingAddressAndService } from "../IN-SSF-SCF-datatypes/BasicGapCriteria-callingAddressAndService.ta.mjs";
// export { BasicGapCriteria_callingAddressAndService, _decode_BasicGapCriteria_callingAddressAndService, _encode_BasicGapCriteria_callingAddressAndService } from "../IN-SSF-SCF-datatypes/BasicGapCriteria-callingAddressAndService.ta.mjs";


/**
 * @summary BasicGapCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicGapCriteria  ::=  CHOICE {
 *   calledAddressValue        [0]  Digits,
 *   gapOnService              [2]  GapOnService,
 *   gapAllInTraffic           [3]  NULL,
 *   calledAddressAndService
 *     [29]  SEQUENCE {calledAddressValue  [0]  Digits,
 *                     serviceKey          [1]  ServiceKey,
 *                     ...},
 *   callingAddressAndService
 *     [30]  SEQUENCE {callingAddressValue  [0]  Digits,
 *                     serviceKey           [1]  ServiceKey,
 *                     locationNumber       [2]  LocationNumber OPTIONAL,
 *                     ...}
 * }
 * ```
 */
export
type BasicGapCriteria =
    { calledAddressValue: Digits } /* CHOICE_ALT_ROOT */
    | { gapOnService: GapOnService } /* CHOICE_ALT_ROOT */
    | { gapAllInTraffic: NULL } /* CHOICE_ALT_ROOT */
    | { calledAddressAndService: BasicGapCriteria_calledAddressAndService } /* CHOICE_ALT_ROOT */
    | { callingAddressAndService: BasicGapCriteria_callingAddressAndService } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BasicGapCriteria: $.ASN1Decoder<BasicGapCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BasicGapCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BasicGapCriteria (el: _Element): BasicGapCriteria {
    if (!_cached_decoder_for_BasicGapCriteria) { _cached_decoder_for_BasicGapCriteria = $._decode_inextensible_choice<BasicGapCriteria>({
    "CONTEXT 0": [ "calledAddressValue", $._decode_implicit<Digits>(() => _decode_Digits) ],
    "CONTEXT 2": [ "gapOnService", $._decode_implicit<GapOnService>(() => _decode_GapOnService) ],
    "CONTEXT 3": [ "gapAllInTraffic", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 29": [ "calledAddressAndService", $._decode_implicit<BasicGapCriteria_calledAddressAndService>(() => _decode_BasicGapCriteria_calledAddressAndService) ],
    "CONTEXT 30": [ "callingAddressAndService", $._decode_implicit<BasicGapCriteria_callingAddressAndService>(() => _decode_BasicGapCriteria_callingAddressAndService) ]
}); }
    return _cached_decoder_for_BasicGapCriteria(el);
}

let _cached_encoder_for_BasicGapCriteria: $.ASN1Encoder<BasicGapCriteria> | null = null;

/**
 * @summary Encodes a(n) BasicGapCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicGapCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_BasicGapCriteria (value: BasicGapCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BasicGapCriteria) { _cached_encoder_for_BasicGapCriteria = $._encode_choice<BasicGapCriteria>({
    "calledAddressValue": $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER),
    "gapOnService": $._encode_implicit(_TagClass.context, 2, () => _encode_GapOnService, $.BER),
    "gapAllInTraffic": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "calledAddressAndService": $._encode_implicit(_TagClass.context, 29, () => _encode_BasicGapCriteria_calledAddressAndService, $.BER),
    "callingAddressAndService": $._encode_implicit(_TagClass.context, 30, () => _encode_BasicGapCriteria_callingAddressAndService, $.BER),
}, $.BER); }
    return _cached_encoder_for_BasicGapCriteria(value, elGetter);
}


/* eslint-enable */
