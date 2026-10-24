/* eslint-disable */
import {
    type NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CltuLastOk_cltuOk, _decode_CltuLastOk_cltuOk, _encode_CltuLastOk_cltuOk } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuLastOk-cltuOk.ta.mjs";


/**
 * @summary CltuLastOk
 * @description
 * 
 * cltu-last-OK. noCltuOk is the section 3 value null: no CLTU has been radiated
 * completely during this service instance, and radiation-stop-time is absent.
 * cltuOk identifies the CLTU most recently radiated completely and carries
 * radiation-stop-time. CCSDS 912.1-B-5, sections 3.7.2.6 and 3.9.2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuLastOk                        ::=    CHOICE
 * { noCltuOk                             [0]   NULL
 * ,  cltuOk                              [1]   SEQUENCE
 *    {  cltuIdentification               CltuIdentification
 *    ,  radiationStopTime                Time
 *    }
 * }
 * ```
 */
export
type CltuLastOk =
    { noCltuOk: NULL } /* CHOICE_ALT_ROOT */
    | { cltuOk: CltuLastOk_cltuOk } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CltuLastOk: $.ASN1Decoder<CltuLastOk> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuLastOk
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuLastOk (el: _Element): CltuLastOk {
    if (!_cached_decoder_for_CltuLastOk) { _cached_decoder_for_CltuLastOk = $._decode_inextensible_choice<CltuLastOk>({
    "CONTEXT 0": [ "noCltuOk", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "cltuOk", $._decode_implicit<CltuLastOk_cltuOk>(() => _decode_CltuLastOk_cltuOk) ]
}); }
    return _cached_decoder_for_CltuLastOk(el);
}

let _cached_encoder_for_CltuLastOk: $.ASN1Encoder<CltuLastOk> | null = null;

/**
 * @summary Encodes a(n) CltuLastOk into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuLastOk, encoded as an ASN.1 Element.
 */
export
function _encode_CltuLastOk (value: CltuLastOk, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuLastOk) { _cached_encoder_for_CltuLastOk = $._encode_choice<CltuLastOk>({
    "noCltuOk": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "cltuOk": $._encode_implicit(_TagClass.context, 1, () => _encode_CltuLastOk_cltuOk, $.BER),
}, $.BER); }
    return _cached_encoder_for_CltuLastOk(value, elGetter);
}


/* eslint-enable */
