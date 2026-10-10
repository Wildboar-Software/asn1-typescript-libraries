/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_MM_Code, _encode_MM_Code, MM_Code } from "../MAP-MS-DataTypes/MM-Code.ta.mjs";


import { maxNumOfMobilityTriggers } from "./maxNumOfMobilityTriggers.va.mjs";

/**
 * @summary MobilityTriggers
 * @description
 *
 * MM events (MM-Code values) that trigger reporting under M-CSI or MG-CSI (SIZE
 * 1..10). (3GPP TS 29.002 V19.1.0 clauses 8.1.8 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MobilityTriggers   ::=  SEQUENCE SIZE (1..maxNumOfMobilityTriggers) OF
 *     MM-Code
 * ```
 */
export
type MobilityTriggers = MM_Code[]; // SequenceOfType

let _cached_decoder_for_MobilityTriggers: $.ASN1Decoder<MobilityTriggers> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MobilityTriggers
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MobilityTriggers (el: _Element): MobilityTriggers {
    if (!_cached_decoder_for_MobilityTriggers) { _cached_decoder_for_MobilityTriggers = $._decodeSequenceOf<MM_Code>(() => _decode_MM_Code); }
    const value = _cached_decoder_for_MobilityTriggers(el);
    if (value.length < 1 || value.length > maxNumOfMobilityTriggers) {
        throw new ASN1SizeError("MobilityTriggers violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_MobilityTriggers: $.ASN1Encoder<MobilityTriggers> | null = null;

/**
 * @summary Encodes a(n) MobilityTriggers into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MobilityTriggers, encoded as an ASN.1 Element.
 */
export
function _encode_MobilityTriggers (value: MobilityTriggers, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MobilityTriggers) { _cached_encoder_for_MobilityTriggers = $._encodeSequenceOf<MM_Code>(() => _encode_MM_Code, $.BER); }
    return _cached_encoder_for_MobilityTriggers(value, elGetter);
}


/* eslint-enable */
