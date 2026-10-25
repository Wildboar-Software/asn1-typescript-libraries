/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Digits, _decode_Digits, _encode_Digits } from "../IN-CS3-SSF-SCF-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-CS3-SSF-SCF-datatypes/Digits.ta.mjs";
import { type GapOnResource, _decode_GapOnResource, _encode_GapOnResource } from "../IN-CS3-SCF-SRF-datatypes/GapOnResource.ta.mjs";
// export { GapOnResource, _decode_GapOnResource, _encode_GapOnResource } from "../IN-CS3-SCF-SRF-datatypes/GapOnResource.ta.mjs";
import { SRFGapCriteria_iPAddressAndresource, _decode_SRFGapCriteria_iPAddressAndresource, _encode_SRFGapCriteria_iPAddressAndresource } from "../IN-CS3-SCF-SRF-datatypes/SRFGapCriteria-iPAddressAndresource.ta.mjs";
// export { SRFGapCriteria_iPAddressAndresource, _decode_SRFGapCriteria_iPAddressAndresource, _encode_SRFGapCriteria_iPAddressAndresource } from "../IN-CS3-SCF-SRF-datatypes/SRFGapCriteria-iPAddressAndresource.ta.mjs";


/**
 * @summary SRFGapCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SRFGapCriteria  ::=  CHOICE {
 *   iPAddressValue        [1]  Digits,
 *   gapOnResource         [2]  GapOnResource,
 *   iPAddressAndresource
 *     [3]  SEQUENCE {iPAddressValue  [1]  Digits,
 *                    gapOnResource   [2]  GapOnResource,
 *                    ...}
 * }
 * ```
 */
export
type SRFGapCriteria =
    { iPAddressValue: Digits } /* CHOICE_ALT_ROOT */
    | { gapOnResource: GapOnResource } /* CHOICE_ALT_ROOT */
    | { iPAddressAndresource: SRFGapCriteria_iPAddressAndresource } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SRFGapCriteria: $.ASN1Decoder<SRFGapCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SRFGapCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SRFGapCriteria (el: _Element): SRFGapCriteria {
    if (!_cached_decoder_for_SRFGapCriteria) { _cached_decoder_for_SRFGapCriteria = $._decode_inextensible_choice<SRFGapCriteria>({
    "CONTEXT 1": [ "iPAddressValue", $._decode_implicit<Digits>(() => _decode_Digits) ],
    "CONTEXT 2": [ "gapOnResource", $._decode_explicit<GapOnResource>(() => _decode_GapOnResource) ],
    "CONTEXT 3": [ "iPAddressAndresource", $._decode_implicit<SRFGapCriteria_iPAddressAndresource>(() => _decode_SRFGapCriteria_iPAddressAndresource) ]
}); }
    return _cached_decoder_for_SRFGapCriteria(el);
}

let _cached_encoder_for_SRFGapCriteria: $.ASN1Encoder<SRFGapCriteria> | null = null;

/**
 * @summary Encodes a(n) SRFGapCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SRFGapCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_SRFGapCriteria (value: SRFGapCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SRFGapCriteria) { _cached_encoder_for_SRFGapCriteria = $._encode_choice<SRFGapCriteria>({
    "iPAddressValue": $._encode_implicit(_TagClass.context, 1, () => _encode_Digits, $.BER),
    "gapOnResource": $._encode_explicit(_TagClass.context, 2, () => _encode_GapOnResource, $.BER),
    "iPAddressAndresource": $._encode_implicit(_TagClass.context, 3, () => _encode_SRFGapCriteria_iPAddressAndresource, $.BER),
}, $.BER); }
    return _cached_encoder_for_SRFGapCriteria(value, elGetter);
}


/* eslint-enable */
