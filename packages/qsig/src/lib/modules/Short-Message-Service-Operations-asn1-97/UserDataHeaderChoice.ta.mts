/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SmscControlParameterHeader, _decode_SmscControlParameterHeader, _encode_SmscControlParameterHeader } from "../Short-Message-Service-Operations-asn1-97/SmscControlParameterHeader.ta.mjs";
import { Concatenated8BitSMHeader, _decode_Concatenated8BitSMHeader, _encode_Concatenated8BitSMHeader } from "../Short-Message-Service-Operations-asn1-97/Concatenated8BitSMHeader.ta.mjs";
import { Concatenated16BitSMHeader, _decode_Concatenated16BitSMHeader, _encode_Concatenated16BitSMHeader } from "../Short-Message-Service-Operations-asn1-97/Concatenated16BitSMHeader.ta.mjs";
import { ApplicationPort8BitHeader, _decode_ApplicationPort8BitHeader, _encode_ApplicationPort8BitHeader } from "../Short-Message-Service-Operations-asn1-97/ApplicationPort8BitHeader.ta.mjs";
import { ApplicationPort16BitHeader, _decode_ApplicationPort16BitHeader, _encode_ApplicationPort16BitHeader } from "../Short-Message-Service-Operations-asn1-97/ApplicationPort16BitHeader.ta.mjs";
import { type DataHeaderSourceIndicator, _decode_DataHeaderSourceIndicator, _encode_DataHeaderSourceIndicator } from "../Short-Message-Service-Operations-asn1-97/DataHeaderSourceIndicator.ta.mjs";
import { type WirelessControlHeader, _decode_WirelessControlHeader, _encode_WirelessControlHeader } from "../Short-Message-Service-Operations-asn1-97/WirelessControlHeader.ta.mjs";
import { GenericUserValue, _decode_GenericUserValue, _encode_GenericUserValue } from "../Short-Message-Service-Operations-asn1-97/GenericUserValue.ta.mjs";

/**
 * @summary UserDataHeaderChoice
 * @description
 *
 * One user-data header (ECMA-325 §E.1.3.1). `smscControlParameterHeader`
 * controls Status Reports. The concatenated headers segment a long message
 * (8-bit or 16-bit reference). The application-port headers route the Short
 * Message to a terminal application. `dataHeaderSourceIndicator` separates
 * headers by who inserted them. `wirelessControlHeader` carries a WCMP PDU.
 * `genericUserValue` (context tag 99) is reserved for GSM 03.40 extensions.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserDataHeaderChoice  ::=  CHOICE {
 *     smscControlParameterHeader [0] IMPLICIT SmscControlParameterHeader,
 *     concatenated8BitSMHeader [1] IMPLICIT Concatenated8BitSMHeader,
 *     concatenated16BitSMHeader [2] IMPLICIT Concatenated16BitSMHeader,
 *     applicationPort8BitHeader [3] IMPLICIT ApplicationPort8BitHeader,
 *     applicationPort16BitHeader [4] IMPLICIT ApplicationPort16BitHeader,
 *     dataHeaderSourceIndicator [5] IMPLICIT DataHeaderSourceIndicator,
 *     wirelessControlHeader [6] IMPLICIT WirelessControlHeader,
 *     genericUserValue [99] IMPLICIT GenericUserValue
 * }
 * ```
 */
export
type UserDataHeaderChoice =
    { smscControlParameterHeader: SmscControlParameterHeader } /* CHOICE_ALT_ROOT */
    | { concatenated8BitSMHeader: Concatenated8BitSMHeader } /* CHOICE_ALT_ROOT */
    | { concatenated16BitSMHeader: Concatenated16BitSMHeader } /* CHOICE_ALT_ROOT */
    | { applicationPort8BitHeader: ApplicationPort8BitHeader } /* CHOICE_ALT_ROOT */
    | { applicationPort16BitHeader: ApplicationPort16BitHeader } /* CHOICE_ALT_ROOT */
    | { dataHeaderSourceIndicator: DataHeaderSourceIndicator } /* CHOICE_ALT_ROOT */
    | { wirelessControlHeader: WirelessControlHeader } /* CHOICE_ALT_ROOT */
    | { genericUserValue: GenericUserValue } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UserDataHeaderChoice: $.ASN1Decoder<UserDataHeaderChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserDataHeaderChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserDataHeaderChoice (el: _Element): UserDataHeaderChoice {
    if (!_cached_decoder_for_UserDataHeaderChoice) { _cached_decoder_for_UserDataHeaderChoice = $._decode_inextensible_choice<UserDataHeaderChoice>({
    "CONTEXT 0": [ "smscControlParameterHeader", $._decode_implicit<SmscControlParameterHeader>(() => _decode_SmscControlParameterHeader) ],
    "CONTEXT 1": [ "concatenated8BitSMHeader", $._decode_implicit<Concatenated8BitSMHeader>(() => _decode_Concatenated8BitSMHeader) ],
    "CONTEXT 2": [ "concatenated16BitSMHeader", $._decode_implicit<Concatenated16BitSMHeader>(() => _decode_Concatenated16BitSMHeader) ],
    "CONTEXT 3": [ "applicationPort8BitHeader", $._decode_implicit<ApplicationPort8BitHeader>(() => _decode_ApplicationPort8BitHeader) ],
    "CONTEXT 4": [ "applicationPort16BitHeader", $._decode_implicit<ApplicationPort16BitHeader>(() => _decode_ApplicationPort16BitHeader) ],
    "CONTEXT 5": [ "dataHeaderSourceIndicator", $._decode_implicit<DataHeaderSourceIndicator>(() => _decode_DataHeaderSourceIndicator) ],
    "CONTEXT 6": [ "wirelessControlHeader", $._decode_implicit<WirelessControlHeader>(() => _decode_WirelessControlHeader) ],
    "CONTEXT 99": [ "genericUserValue", $._decode_implicit<GenericUserValue>(() => _decode_GenericUserValue) ]
}); }
    return _cached_decoder_for_UserDataHeaderChoice(el);
}

let _cached_encoder_for_UserDataHeaderChoice: $.ASN1Encoder<UserDataHeaderChoice> | null = null;

/**
 * @summary Encodes a(n) UserDataHeaderChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserDataHeaderChoice, encoded as an ASN.1 Element.
 */
export
function _encode_UserDataHeaderChoice (value: UserDataHeaderChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserDataHeaderChoice) { _cached_encoder_for_UserDataHeaderChoice = $._encode_choice<UserDataHeaderChoice>({
    "smscControlParameterHeader": $._encode_implicit(_TagClass.context, 0, () => _encode_SmscControlParameterHeader, $.BER),
    "concatenated8BitSMHeader": $._encode_implicit(_TagClass.context, 1, () => _encode_Concatenated8BitSMHeader, $.BER),
    "concatenated16BitSMHeader": $._encode_implicit(_TagClass.context, 2, () => _encode_Concatenated16BitSMHeader, $.BER),
    "applicationPort8BitHeader": $._encode_implicit(_TagClass.context, 3, () => _encode_ApplicationPort8BitHeader, $.BER),
    "applicationPort16BitHeader": $._encode_implicit(_TagClass.context, 4, () => _encode_ApplicationPort16BitHeader, $.BER),
    "dataHeaderSourceIndicator": $._encode_implicit(_TagClass.context, 5, () => _encode_DataHeaderSourceIndicator, $.BER),
    "wirelessControlHeader": $._encode_implicit(_TagClass.context, 6, () => _encode_WirelessControlHeader, $.BER),
    "genericUserValue": $._encode_implicit(_TagClass.context, 99, () => _encode_GenericUserValue, $.BER),
}, $.BER); }
    return _cached_encoder_for_UserDataHeaderChoice(value, elGetter);
}

/* eslint-enable */
