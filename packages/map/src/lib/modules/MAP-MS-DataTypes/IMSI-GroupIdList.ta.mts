/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_IMSI_GroupId, _encode_IMSI_GroupId, IMSI_GroupId } from "../MAP-MS-DataTypes/IMSI-GroupId.ta.mjs";


/**
 * @summary IMSI_GroupIdList
 * @description
 *
 * List of IMSI-Group identifiers the subscriber belongs to (SIZE 1..50). Sent
 * in MAP_INSERT_SUBSCRIBER_DATA. (3GPP TS 29.002 V19.1.0 clauses 7.6.3.102,
 * 8.8.1.3, and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSI-GroupIdList  ::=  SEQUENCE SIZE (1..50) OF
 *     IMSI-GroupId
 * ```
 */
export
type IMSI_GroupIdList = IMSI_GroupId[]; // SequenceOfType

let _cached_decoder_for_IMSI_GroupIdList: $.ASN1Decoder<IMSI_GroupIdList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSI_GroupIdList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSI_GroupIdList (el: _Element): IMSI_GroupIdList {
    if (!_cached_decoder_for_IMSI_GroupIdList) { _cached_decoder_for_IMSI_GroupIdList = $._decodeSequenceOf<IMSI_GroupId>(() => _decode_IMSI_GroupId); }
    const value = _cached_decoder_for_IMSI_GroupIdList(el);
    if (value.length < 1 || value.length > 50) {
        throw new ASN1SizeError("IMSI_GroupIdList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_IMSI_GroupIdList: $.ASN1Encoder<IMSI_GroupIdList> | null = null;

/**
 * @summary Encodes a(n) IMSI_GroupIdList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSI_GroupIdList, encoded as an ASN.1 Element.
 */
export
function _encode_IMSI_GroupIdList (value: IMSI_GroupIdList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSI_GroupIdList) { _cached_encoder_for_IMSI_GroupIdList = $._encodeSequenceOf<IMSI_GroupId>(() => _encode_IMSI_GroupId, $.BER); }
    return _cached_encoder_for_IMSI_GroupIdList(value, elGetter);
}


/* eslint-enable */
