/* eslint-disable */
import {
    ASN1ConstructionError,
    ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Facility-Information-Element-Components/InvokeId.ta.mjs";


/**
 * @summary GFPInvokeIDSet
 * @description
 * 
 * Invoke identifier permitted in the generic functional protocol: the `present`
 * alternative, in the range -32768..32767. This is the same range as the 1998
 * `InvokeIdentifierType`.
 *
 * ITU-T Rec. Q.932 (05/1998) Table 8-7; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table 8-7 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GFPInvokeIDSet  ::=  InvokeId(WITH COMPONENTS {
 *                               present  (-32768..32767)
 *                             })
 * ```
 */
export
type GFPInvokeIDSet = InvokeId; // DefinedType

let _cached_decoder_for_GFPInvokeIDSet: $.ASN1Decoder<GFPInvokeIDSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GFPInvokeIDSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GFPInvokeIDSet (el: _Element): GFPInvokeIDSet {
    if (!_cached_decoder_for_GFPInvokeIDSet) { _cached_decoder_for_GFPInvokeIDSet = _decode_InvokeId; }
    const value = _cached_decoder_for_GFPInvokeIDSet(el);
    if (!("present" in value)) {
        throw new ASN1ConstructionError("GFPInvokeIDSet requires the present alternative");
    }
    const n = typeof value.present === "bigint" ? value.present : BigInt(value.present);
    if (n < -32768n || n > 32767n) {
        throw new ASN1OverflowError("GFPInvokeIDSet present violates INTEGER (-32768..32767)");
    }
    return value;
}

let _cached_encoder_for_GFPInvokeIDSet: $.ASN1Encoder<GFPInvokeIDSet> | null = null;

/**
 * @summary Encodes a(n) GFPInvokeIDSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GFPInvokeIDSet, encoded as an ASN.1 Element.
 */
export
function _encode_GFPInvokeIDSet (value: GFPInvokeIDSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GFPInvokeIDSet) { _cached_encoder_for_GFPInvokeIDSet = _encode_InvokeId; }
    return _cached_encoder_for_GFPInvokeIDSet(value, elGetter);
}


/* eslint-enable */
