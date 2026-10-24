/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ERABError, _decode_ERABError, _encode_ERABError } from "../TS33128Payloads/ERABError.ta.mjs";
// export { ERABError, _decode_ERABError, _encode_ERABError } from "../TS33128Payloads/ERABError.ta.mjs";


/**
 * @summary ERABReleaseList
 * @description
 * 
 * Contains a list of any E-RABs that are to be released. Shall be present if
 * there are any E-RABs to be released listed in the handover command. See TS
 * 36.413 [38] clause 9.1.5.2.
 *
 * 3GPP TS 33.128, clause 6.3.2.2.9.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ERABReleaseList  ::=  SEQUENCE SIZE (1..MAX) OF ERABError
 * ```
 */
export
type ERABReleaseList = ERABError[]; // SequenceOfType

let _cached_decoder_for_ERABReleaseList: $.ASN1Decoder<ERABReleaseList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ERABReleaseList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ERABReleaseList (el: _Element): ERABReleaseList {
    if (!_cached_decoder_for_ERABReleaseList) { _cached_decoder_for_ERABReleaseList = $._decodeSequenceOf<ERABError>(() => _decode_ERABError); }
    const _value = _cached_decoder_for_ERABReleaseList(el);
    if (_value.length < 1) {
        throw new ASN1SizeError("ERABReleaseList violates SIZE constraint");
    }
    return _value;
}

let _cached_encoder_for_ERABReleaseList: $.ASN1Encoder<ERABReleaseList> | null = null;

/**
 * @summary Encodes a(n) ERABReleaseList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ERABReleaseList, encoded as an ASN.1 Element.
 */
export
function _encode_ERABReleaseList (value: ERABReleaseList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ERABReleaseList) { _cached_encoder_for_ERABReleaseList = $._encodeSequenceOf<ERABError>(() => _encode_ERABError, $.BER); }
    return _cached_encoder_for_ERABReleaseList(value, elGetter);
}


/* eslint-enable */
