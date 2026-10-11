/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ZoneCode, _decode_ZoneCode, _encode_ZoneCode } from "../MAP-MS-DataTypes/ZoneCode.ta.mjs";


/**
 * @summary ZoneCodeList
 * @description
 *
 * Regional subscription area: list of 1..10 Zone Codes. With the complete list,
 * the VLR, SGSN, or MME can decide for all its areas whether roaming is
 * allowed.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.3.11, 7.6.2.28 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ZoneCodeList  ::=  SEQUENCE SIZE (1..maxNumOfZoneCodes)
 *     OF ZoneCode
 * ```
 */
export
type ZoneCodeList = ZoneCode[]; // SequenceOfType

let _cached_decoder_for_ZoneCodeList: $.ASN1Decoder<ZoneCodeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ZoneCodeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ZoneCodeList (el: _Element): ZoneCodeList {
    if (!_cached_decoder_for_ZoneCodeList) { _cached_decoder_for_ZoneCodeList = $._decodeSequenceOf<ZoneCode>(() => _decode_ZoneCode); }
    return _cached_decoder_for_ZoneCodeList(el);
}

let _cached_encoder_for_ZoneCodeList: $.ASN1Encoder<ZoneCodeList> | null = null;

/**
 * @summary Encodes a(n) ZoneCodeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ZoneCodeList, encoded as an ASN.1 Element.
 */
export
function _encode_ZoneCodeList (value: ZoneCodeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ZoneCodeList) { _cached_encoder_for_ZoneCodeList = $._encodeSequenceOf<ZoneCode>(() => _encode_ZoneCode, $.BER); }
    return _cached_encoder_for_ZoneCodeList(value, elGetter);
}


/* eslint-enable */
