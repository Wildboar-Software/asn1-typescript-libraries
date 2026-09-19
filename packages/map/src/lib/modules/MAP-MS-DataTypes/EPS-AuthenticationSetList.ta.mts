/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_EPC_AV, _encode_EPC_AV, EPC_AV } from "../MAP-MS-DataTypes/EPC-AV.ta.mjs";


/**
 * @summary EPS_AuthenticationSetList
 * @description
 *
 * List of EPS authentication vectors (EPC-AV) returned toward an MME/IWF (3GPP
 * TS 29.002 V19.1.0 clauses 8.5.2.1 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPS-AuthenticationSetList  ::=  SEQUENCE SIZE (1..5) OF
 *     EPC-AV
 * ```
 */
export
type EPS_AuthenticationSetList = EPC_AV[]; // SequenceOfType

let _cached_decoder_for_EPS_AuthenticationSetList: $.ASN1Decoder<EPS_AuthenticationSetList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPS_AuthenticationSetList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPS_AuthenticationSetList (el: _Element): EPS_AuthenticationSetList {
    if (!_cached_decoder_for_EPS_AuthenticationSetList) { _cached_decoder_for_EPS_AuthenticationSetList = $._decodeSequenceOf<EPC_AV>(() => _decode_EPC_AV); }
    const value = _cached_decoder_for_EPS_AuthenticationSetList(el);
    if (value.length < 1 || value.length > 5) {
        throw new ASN1SizeError("EPS_AuthenticationSetList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_EPS_AuthenticationSetList: $.ASN1Encoder<EPS_AuthenticationSetList> | null = null;

/**
 * @summary Encodes a(n) EPS_AuthenticationSetList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPS_AuthenticationSetList, encoded as an ASN.1 Element.
 */
export
function _encode_EPS_AuthenticationSetList (value: EPS_AuthenticationSetList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPS_AuthenticationSetList) { _cached_encoder_for_EPS_AuthenticationSetList = $._encodeSequenceOf<EPC_AV>(() => _encode_EPC_AV, $.BER); }
    return _cached_encoder_for_EPS_AuthenticationSetList(value, elGetter);
}


/* eslint-enable */
