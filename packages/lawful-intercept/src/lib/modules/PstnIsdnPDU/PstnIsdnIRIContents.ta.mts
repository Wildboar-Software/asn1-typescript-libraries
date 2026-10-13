/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SupplementaryInfo, _decode_SupplementaryInfo, _encode_SupplementaryInfo } from "../PstnIsdnPDU/SupplementaryInfo.ta.mjs";
// export { SupplementaryInfo, _decode_SupplementaryInfo, _encode_SupplementaryInfo } from "../PstnIsdnPDU/SupplementaryInfo.ta.mjs";


/**
 * @summary PstnIsdnIRIContents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PstnIsdnIRIContents  ::=  CHOICE
 * {
 *     supplementaryInfo       [0] SupplementaryInfo,
 *     ...
 * }
 * ```
 */
export
type PstnIsdnIRIContents =
    { supplementaryInfo: SupplementaryInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_PstnIsdnIRIContents: $.ASN1Decoder<PstnIsdnIRIContents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PstnIsdnIRIContents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PstnIsdnIRIContents (el: _Element): PstnIsdnIRIContents {
    if (!_cached_decoder_for_PstnIsdnIRIContents) { _cached_decoder_for_PstnIsdnIRIContents = $._decode_extensible_choice<PstnIsdnIRIContents>({
    "CONTEXT 0": [ "supplementaryInfo", $._decode_implicit<SupplementaryInfo>(() => _decode_SupplementaryInfo) ]
}); }
    return _cached_decoder_for_PstnIsdnIRIContents(el);
}

let _cached_encoder_for_PstnIsdnIRIContents: $.ASN1Encoder<PstnIsdnIRIContents> | null = null;

/**
 * @summary Encodes a(n) PstnIsdnIRIContents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PstnIsdnIRIContents, encoded as an ASN.1 Element.
 */
export
function _encode_PstnIsdnIRIContents (value: PstnIsdnIRIContents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PstnIsdnIRIContents) { _cached_encoder_for_PstnIsdnIRIContents = $._encode_choice<PstnIsdnIRIContents>({
    "supplementaryInfo": $._encode_implicit(_TagClass.context, 0, () => _encode_SupplementaryInfo, $.BER),
}, $.BER); }
    return _cached_encoder_for_PstnIsdnIRIContents(value, elGetter);
}


/* eslint-enable */
