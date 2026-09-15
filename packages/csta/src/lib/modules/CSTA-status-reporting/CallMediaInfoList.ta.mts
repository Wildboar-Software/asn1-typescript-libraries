/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    ASN1Element as _Element
} from "@wildboar/asn1";
import { CallMediaInfoList_Item, _decode_CallMediaInfoList_Item, _encode_CallMediaInfoList_Item } from "../CSTA-status-reporting/CallMediaInfoList-Item.ta.mjs";



/**
 * @summary CallMediaInfoList
 * @description
 *
 * Media services bound to a connection in a Snapshot Call. ECMA-269 §16.1.3.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallMediaInfoList  ::=  SEQUENCE OF SEQUENCE
 * {     mediaServiceType         [0] IMPLICIT MediaServiceType,
 *     mediaServiceVersion         [1] IMPLICIT INTEGER             OPTIONAL,
 *     mediaServiceInstance         [2] IMPLICIT MediaServiceInstanceID    OPTIONAL,
 *     mediaStreamID             [3] IMPLICIT MediaStreamID         OPTIONAL,
 *     connectionInformation         [4] IMPLICIT ConnectionInformation     OPTIONAL }
 * ```
 */
export
type CallMediaInfoList = CallMediaInfoList_Item[]; // SequenceOfType

let _cached_decoder_for_CallMediaInfoList: $.ASN1Decoder<CallMediaInfoList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallMediaInfoList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallMediaInfoList (el: _Element): CallMediaInfoList {
    if (!_cached_decoder_for_CallMediaInfoList) { _cached_decoder_for_CallMediaInfoList = $._decodeSequenceOf<CallMediaInfoList_Item>(() => _decode_CallMediaInfoList_Item); }
    return _cached_decoder_for_CallMediaInfoList(el);
}

let _cached_encoder_for_CallMediaInfoList: $.ASN1Encoder<CallMediaInfoList> | null = null;

/**
 * @summary Encodes a(n) CallMediaInfoList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallMediaInfoList, encoded as an ASN.1 Element.
 */
export
function _encode_CallMediaInfoList (value: CallMediaInfoList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallMediaInfoList) { _cached_encoder_for_CallMediaInfoList = $._encodeSequenceOf<CallMediaInfoList_Item>(() => _encode_CallMediaInfoList_Item, $.BER); }
    return _cached_encoder_for_CallMediaInfoList(value, elGetter);
}


/* eslint-enable */
