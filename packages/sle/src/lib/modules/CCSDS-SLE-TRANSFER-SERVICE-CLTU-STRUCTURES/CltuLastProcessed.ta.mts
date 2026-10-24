/* eslint-disable */
import {
    type NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CltuLastProcessed_cltuProcessed, _decode_CltuLastProcessed_cltuProcessed, _encode_CltuLastProcessed_cltuProcessed } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuLastProcessed-cltuProcessed.ta.mjs";


/**
 * @summary CltuLastProcessed
 * @description
 * 
 * cltu-last-processed. noCltuProcessed is the section 3 value null: the
 * provider has not attempted to radiate any CLTU in this service instance, and
 * cltu-status and radiation-start-time are absent. cltuProcessed identifies the
 * CLTU most recently attempted and carries those parameters. CCSDS 912.1-B-5,
 * sections 3.7.2.5 and 3.9.2.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuLastProcessed                 ::=    CHOICE
 * {  noCltuProcessed                     [0]   NULL
 * ,  cltuProcessed                       [1]   SEQUENCE
 *    {  cltuIdentification               CltuIdentification
 *    ,  radiationStartTime               ConditionalTime
 *    ,  cltuStatus                       CltuStatus
 *    }
 * }
 * ```
 */
export
type CltuLastProcessed =
    { noCltuProcessed: NULL } /* CHOICE_ALT_ROOT */
    | { cltuProcessed: CltuLastProcessed_cltuProcessed } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CltuLastProcessed: $.ASN1Decoder<CltuLastProcessed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuLastProcessed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuLastProcessed (el: _Element): CltuLastProcessed {
    if (!_cached_decoder_for_CltuLastProcessed) { _cached_decoder_for_CltuLastProcessed = $._decode_inextensible_choice<CltuLastProcessed>({
    "CONTEXT 0": [ "noCltuProcessed", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "cltuProcessed", $._decode_implicit<CltuLastProcessed_cltuProcessed>(() => _decode_CltuLastProcessed_cltuProcessed) ]
}); }
    return _cached_decoder_for_CltuLastProcessed(el);
}

let _cached_encoder_for_CltuLastProcessed: $.ASN1Encoder<CltuLastProcessed> | null = null;

/**
 * @summary Encodes a(n) CltuLastProcessed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuLastProcessed, encoded as an ASN.1 Element.
 */
export
function _encode_CltuLastProcessed (value: CltuLastProcessed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuLastProcessed) { _cached_encoder_for_CltuLastProcessed = $._encode_choice<CltuLastProcessed>({
    "noCltuProcessed": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "cltuProcessed": $._encode_implicit(_TagClass.context, 1, () => _encode_CltuLastProcessed_cltuProcessed, $.BER),
}, $.BER); }
    return _cached_encoder_for_CltuLastProcessed(value, elGetter);
}


/* eslint-enable */
