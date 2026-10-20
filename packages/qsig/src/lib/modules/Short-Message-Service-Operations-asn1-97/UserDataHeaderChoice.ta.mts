/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SmscControlParameterHeader, _decode_SmscControlParameterHeader, _encode_SmscControlParameterHeader } from "../Short-Message-Service-Operations-asn1-97/SmscControlParameterHeader.ta.mjs";
// export { SmscControlParameterHeader, SmscControlParameterHeader_sRforTransactionCompleted /* IMPORTED_LONG_NAMED_BIT */, sRforTransactionCompleted /* IMPORTED_SHORT_NAMED_BIT */, SmscControlParameterHeader_sRforPermanentError /* IMPORTED_LONG_NAMED_BIT */, sRforPermanentError /* IMPORTED_SHORT_NAMED_BIT */, SmscControlParameterHeader_sRforTempErrorSCnotTrying /* IMPORTED_LONG_NAMED_BIT */, sRforTempErrorSCnotTrying /* IMPORTED_SHORT_NAMED_BIT */, SmscControlParameterHeader_sRforTempErrorSCstillTrying /* IMPORTED_LONG_NAMED_BIT */, sRforTempErrorSCstillTrying /* IMPORTED_SHORT_NAMED_BIT */, SmscControlParameterHeader_cancelSRRforConcatenatedSM /* IMPORTED_LONG_NAMED_BIT */, cancelSRRforConcatenatedSM /* IMPORTED_SHORT_NAMED_BIT */, SmscControlParameterHeader_includeOrigUDHintoSR /* IMPORTED_LONG_NAMED_BIT */, includeOrigUDHintoSR /* IMPORTED_SHORT_NAMED_BIT */, _decode_SmscControlParameterHeader, _encode_SmscControlParameterHeader } from "../Short-Message-Service-Operations-asn1-97/SmscControlParameterHeader.ta.mjs";
import { Concatenated8BitSMHeader, _decode_Concatenated8BitSMHeader, _encode_Concatenated8BitSMHeader } from "../Short-Message-Service-Operations-asn1-97/Concatenated8BitSMHeader.ta.mjs";
// export { Concatenated8BitSMHeader, _decode_Concatenated8BitSMHeader, _encode_Concatenated8BitSMHeader } from "../Short-Message-Service-Operations-asn1-97/Concatenated8BitSMHeader.ta.mjs";
import { Concatenated16BitSMHeader, _decode_Concatenated16BitSMHeader, _encode_Concatenated16BitSMHeader } from "../Short-Message-Service-Operations-asn1-97/Concatenated16BitSMHeader.ta.mjs";
// export { Concatenated16BitSMHeader, _decode_Concatenated16BitSMHeader, _encode_Concatenated16BitSMHeader } from "../Short-Message-Service-Operations-asn1-97/Concatenated16BitSMHeader.ta.mjs";
import { ApplicationPort8BitHeader, _decode_ApplicationPort8BitHeader, _encode_ApplicationPort8BitHeader } from "../Short-Message-Service-Operations-asn1-97/ApplicationPort8BitHeader.ta.mjs";
// export { ApplicationPort8BitHeader, _decode_ApplicationPort8BitHeader, _encode_ApplicationPort8BitHeader } from "../Short-Message-Service-Operations-asn1-97/ApplicationPort8BitHeader.ta.mjs";
import { ApplicationPort16BitHeader, _decode_ApplicationPort16BitHeader, _encode_ApplicationPort16BitHeader } from "../Short-Message-Service-Operations-asn1-97/ApplicationPort16BitHeader.ta.mjs";
// export { ApplicationPort16BitHeader, _decode_ApplicationPort16BitHeader, _encode_ApplicationPort16BitHeader } from "../Short-Message-Service-Operations-asn1-97/ApplicationPort16BitHeader.ta.mjs";
import { DataHeaderSourceIndicator, _decode_DataHeaderSourceIndicator, _encode_DataHeaderSourceIndicator } from "../Short-Message-Service-Operations-asn1-97/DataHeaderSourceIndicator.ta.mjs";
// export { DataHeaderSourceIndicator, DataHeaderSourceIndicator_originalSender /* IMPORTED_LONG_NAMED_INTEGER */, originalSender /* IMPORTED_SHORT_NAMED_INTEGER */, DataHeaderSourceIndicator_originalReceiver /* IMPORTED_LONG_NAMED_INTEGER */, originalReceiver /* IMPORTED_SHORT_NAMED_INTEGER */, DataHeaderSourceIndicator_sMSC /* IMPORTED_LONG_NAMED_INTEGER */, sMSC /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DataHeaderSourceIndicator, _encode_DataHeaderSourceIndicator } from "../Short-Message-Service-Operations-asn1-97/DataHeaderSourceIndicator.ta.mjs";
import { WirelessControlHeader, _decode_WirelessControlHeader, _encode_WirelessControlHeader } from "../Short-Message-Service-Operations-asn1-97/WirelessControlHeader.ta.mjs";
// export { WirelessControlHeader, _decode_WirelessControlHeader, _encode_WirelessControlHeader } from "../Short-Message-Service-Operations-asn1-97/WirelessControlHeader.ta.mjs";
import { GenericUserValue, _decode_GenericUserValue, _encode_GenericUserValue } from "../Short-Message-Service-Operations-asn1-97/GenericUserValue.ta.mjs";
// export { GenericUserValue, _decode_GenericUserValue, _encode_GenericUserValue } from "../Short-Message-Service-Operations-asn1-97/GenericUserValue.ta.mjs";


/**
 * @summary UserDataHeaderChoice
 * @description
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
