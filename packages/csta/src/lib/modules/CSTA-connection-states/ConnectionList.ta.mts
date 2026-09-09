/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    NULL,
    SEQUENCE,
    ASN1Element as _Element
} from "@wildboar/asn1";
import { ConnectionList_Item, _decode_ConnectionList_Item, _encode_ConnectionList_Item } from "../CSTA-connection-states/ConnectionList-Item.ta.mjs";



/**
 * @summary ConnectionList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionList  ::=  SEQUENCE OF SEQUENCE
 * {    newConnection         [0] ConnectionID         OPTIONAL,
 *     oldConnection         [1] ConnectionID         OPTIONAL,
 *     endpoint         [2] CHOICE
 *         {    deviceID         DeviceID,
 *             notKnown         NULL,
 *             restricted        [1] NULL }         OPTIONAL,
 *     associatedNID         [3] CHOICE
 *         {    deviceID         DeviceID,
 *             notKnown         NULL }             OPTIONAL,
 *     resultingConnectionInfo     ConnectionInformation         OPTIONAL }
 * ```
 */
export
type ConnectionList = ConnectionList_Item[]; // SequenceOfType

let _cached_decoder_for_ConnectionList: $.ASN1Decoder<ConnectionList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionList (el: _Element): ConnectionList {
    if (!_cached_decoder_for_ConnectionList) { _cached_decoder_for_ConnectionList = $._decodeSequenceOf<ConnectionList_Item>(() => _decode_ConnectionList_Item); }
    return _cached_decoder_for_ConnectionList(el);
}

let _cached_encoder_for_ConnectionList: $.ASN1Encoder<ConnectionList> | null = null;

/**
 * @summary Encodes a(n) ConnectionList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionList, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionList (value: ConnectionList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionList) { _cached_encoder_for_ConnectionList = $._encodeSequenceOf<ConnectionList_Item>(() => _encode_ConnectionList_Item, $.BER); }
    return _cached_encoder_for_ConnectionList(value, elGetter);
}


/* eslint-enable */
