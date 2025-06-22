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
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { ProceduralStatus_Item, _decode_ProceduralStatus_Item, _encode_ProceduralStatus_Item } from "../Attribute-ASN1Module/ProceduralStatus-Item.ta.mjs";
/**
 * @summary ProceduralStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProceduralStatus  ::= 
 *   SET OF
 *     INTEGER {initializationRequired(0), notInitialized(1), initializing(2),
 *              reporting(3), terminating(4)}
 * ```
 */
export
type ProceduralStatus = ProceduralStatus_Item[]; // SetOfType

let _cached_decoder_for_ProceduralStatus: $.ASN1Decoder<ProceduralStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProceduralStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProceduralStatus} The decoded data structure.
 */
export
function _decode_ProceduralStatus (el: _Element) {
    if (!_cached_decoder_for_ProceduralStatus) { _cached_decoder_for_ProceduralStatus = $._decodeSetOf<ProceduralStatus_Item>(() => _decode_ProceduralStatus_Item); }
    return _cached_decoder_for_ProceduralStatus(el);
}

let _cached_encoder_for_ProceduralStatus: $.ASN1Encoder<ProceduralStatus> | null = null;

/**
 * @summary Encodes a(n) ProceduralStatus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProceduralStatus, encoded as an ASN.1 Element.
 */
export
function _encode_ProceduralStatus (value: ProceduralStatus, elGetter: $.ASN1Encoder<ProceduralStatus>) {
    if (!_cached_encoder_for_ProceduralStatus) { _cached_encoder_for_ProceduralStatus = $._encodeSetOf<ProceduralStatus_Item>(() => _encode_ProceduralStatus_Item, $.BER); }
    return _cached_encoder_for_ProceduralStatus(value, elGetter);
}


/* eslint-enable */
