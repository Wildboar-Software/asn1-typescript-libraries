/* eslint-disable */
import {
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
import { Digits, _decode_Digits, _encode_Digits } from "../Core-INAP-CS1-DataTypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../Core-INAP-CS1-DataTypes/Digits.ta.mjs";


/**
 * @summary ReceivedInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceivedInformationArg       ::=  CHOICE {
 *      digitsResponse     [0]  Digits
 *      }
 * ```
 */
export
type ReceivedInformationArg =
    { digitsResponse: Digits } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReceivedInformationArg: $.ASN1Decoder<ReceivedInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReceivedInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReceivedInformationArg (el: _Element): ReceivedInformationArg {
    if (!_cached_decoder_for_ReceivedInformationArg) { _cached_decoder_for_ReceivedInformationArg = $._decode_inextensible_choice<ReceivedInformationArg>({
    "CONTEXT 0": [ "digitsResponse", $._decode_implicit<Digits>(() => _decode_Digits) ]
}); }
    return _cached_decoder_for_ReceivedInformationArg(el);
}

let _cached_encoder_for_ReceivedInformationArg: $.ASN1Encoder<ReceivedInformationArg> | null = null;

/**
 * @summary Encodes a(n) ReceivedInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceivedInformationArg, encoded as an ASN.1 Element.
 */
export
function _encode_ReceivedInformationArg (value: ReceivedInformationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReceivedInformationArg) { _cached_encoder_for_ReceivedInformationArg = $._encode_choice<ReceivedInformationArg>({
    "digitsResponse": $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER),
}, $.BER); }
    return _cached_encoder_for_ReceivedInformationArg(value, elGetter);
}


/* eslint-enable */
