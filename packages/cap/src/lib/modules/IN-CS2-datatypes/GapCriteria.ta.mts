/* eslint-disable */
import {
    NULL,
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
import { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";
import { GapOnService, _decode_GapOnService, _encode_GapOnService } from "../IN-CS2-datatypes/GapOnService.ta.mjs";
// export { GapOnService, _decode_GapOnService, _encode_GapOnService } from "../IN-CS2-datatypes/GapOnService.ta.mjs";
import { GapCriteria_calledAddressAndService, _decode_GapCriteria_calledAddressAndService, _encode_GapCriteria_calledAddressAndService } from "../IN-CS2-datatypes/GapCriteria-calledAddressAndService.ta.mjs";
// export { GapCriteria_calledAddressAndService, _decode_GapCriteria_calledAddressAndService, _encode_GapCriteria_calledAddressAndService } from "../IN-CS2-datatypes/GapCriteria-calledAddressAndService.ta.mjs";
import { GapCriteria_callingAddressAndService, _decode_GapCriteria_callingAddressAndService, _encode_GapCriteria_callingAddressAndService } from "../IN-CS2-datatypes/GapCriteria-callingAddressAndService.ta.mjs";
// export { GapCriteria_callingAddressAndService, _decode_GapCriteria_callingAddressAndService, _encode_GapCriteria_callingAddressAndService } from "../IN-CS2-datatypes/GapCriteria-callingAddressAndService.ta.mjs";


/**
 * @summary GapCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GapCriteria{PARAMETERS-BOUND:bound}  ::=  CHOICE {
 *   calledAddressValue        [0]  Digits{bound},
 *   gapOnService              [2]  GapOnService,
 *   gapAllInTraffic           [3]  NULL,
 *   calledAddressAndService
 *     [29]  SEQUENCE {calledAddressValue  [0]  Digits{bound},
 *                     serviceKey          [1]  ServiceKey},
 *   callingAddressAndService
 *     [30]  SEQUENCE {callingAddressValue  [0]  Digits{bound},
 *                     serviceKey           [1]  ServiceKey,
 *                     locationNumber       [2]  LocationNumber{bound} OPTIONAL
 *   }
 * }
 * ```
 */
export
type GapCriteria =
    { calledAddressValue: Digits } /* CHOICE_ALT_ROOT */
    | { gapOnService: GapOnService } /* CHOICE_ALT_ROOT */
    | { gapAllInTraffic: NULL } /* CHOICE_ALT_ROOT */
    | { calledAddressAndService: GapCriteria_calledAddressAndService } /* CHOICE_ALT_ROOT */
    | { callingAddressAndService: GapCriteria_callingAddressAndService } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GapCriteria: $.ASN1Decoder<GapCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GapCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GapCriteria (el: _Element): GapCriteria {
    if (!_cached_decoder_for_GapCriteria) { _cached_decoder_for_GapCriteria = $._decode_inextensible_choice<GapCriteria>({
    "CONTEXT 0": [ "calledAddressValue", $._decode_implicit<Digits>(() => _decode_Digits) ],
    "CONTEXT 2": [ "gapOnService", $._decode_implicit<GapOnService>(() => _decode_GapOnService) ],
    "CONTEXT 3": [ "gapAllInTraffic", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 29": [ "calledAddressAndService", $._decode_implicit<GapCriteria_calledAddressAndService>(() => _decode_GapCriteria_calledAddressAndService) ],
    "CONTEXT 30": [ "callingAddressAndService", $._decode_implicit<GapCriteria_callingAddressAndService>(() => _decode_GapCriteria_callingAddressAndService) ]
}); }
    return _cached_decoder_for_GapCriteria(el);
}

let _cached_encoder_for_GapCriteria: $.ASN1Encoder<GapCriteria> | null = null;

/**
 * @summary Encodes a(n) GapCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GapCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_GapCriteria (value: GapCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GapCriteria) { _cached_encoder_for_GapCriteria = $._encode_choice<GapCriteria>({
    "calledAddressValue": $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER),
    "gapOnService": $._encode_implicit(_TagClass.context, 2, () => _encode_GapOnService, $.BER),
    "gapAllInTraffic": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "calledAddressAndService": $._encode_implicit(_TagClass.context, 29, () => _encode_GapCriteria_calledAddressAndService, $.BER),
    "callingAddressAndService": $._encode_implicit(_TagClass.context, 30, () => _encode_GapCriteria_callingAddressAndService, $.BER),
}, $.BER); }
    return _cached_encoder_for_GapCriteria(value, elGetter);
}


/* eslint-enable */
