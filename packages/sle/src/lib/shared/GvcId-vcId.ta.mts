/* eslint-disable */
import {
    type NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type VcId, _decode_VcId, _encode_VcId } from "./VcId.ta.mjs";


/**
 * @summary GvcId_vcId
 * @description
 *
 * Whether a global VCID names a Master Channel or one Virtual Channel.
 * `masterChannel` is empty. On the return services it is the VCID value 'any':
 * deliver the Master Channel identified by the transfer-frame version and
 * spacecraft identifier. `virtualChannel` carries the VC identifier. CLTU and
 * FSP use the same choice to name the return channel that carries the CLCW.
 *
 * CCSDS 911.2-B-4 and 911.5-B-4, section 3.4.2.7.4. CCSDS 912.1-B-5 and
 * 912.3-B-3, table 3-11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GvcId-vcId ::= CHOICE
 *    { masterChannel            [0]   NULL
 *    , virtualChannel           [1]   VcId
 *    }
 * ```
 */
export
type GvcId_vcId =
    { masterChannel: NULL } /* CHOICE_ALT_ROOT */
    | { virtualChannel: VcId } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GvcId_vcId: $.ASN1Decoder<GvcId_vcId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GvcId_vcId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GvcId_vcId (el: _Element): GvcId_vcId {
    if (!_cached_decoder_for_GvcId_vcId) { _cached_decoder_for_GvcId_vcId = $._decode_inextensible_choice<GvcId_vcId>({
    "CONTEXT 0": [ "masterChannel", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "virtualChannel", $._decode_implicit<VcId>(() => _decode_VcId) ]
}); }
    return _cached_decoder_for_GvcId_vcId(el);
}

let _cached_encoder_for_GvcId_vcId: $.ASN1Encoder<GvcId_vcId> | null = null;

/**
 * @summary Encodes a(n) GvcId_vcId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GvcId_vcId, encoded as an ASN.1 Element.
 */
export
function _encode_GvcId_vcId (value: GvcId_vcId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GvcId_vcId) { _cached_encoder_for_GvcId_vcId = $._encode_choice<GvcId_vcId>({
    "masterChannel": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "virtualChannel": $._encode_implicit(_TagClass.context, 1, () => _encode_VcId, $.BER),
}, $.BER); }
    return _cached_encoder_for_GvcId_vcId(value, elGetter);
}


/* eslint-enable */
