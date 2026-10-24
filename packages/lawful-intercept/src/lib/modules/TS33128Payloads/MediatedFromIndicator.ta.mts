/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    RELATIVE_OID
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MediatedFromIndicator
 * @description
 * 
 * Shall be present if the IRI is generated from an xIRIPayload received over
 * LI_X2 and the release and version of the xIRIPayload.relativeOID is different
 * from the release and version of the IRIPayload.relativeOID. The
 * IRIPayload.mediatedFromIndicator.xIRIRelativeOID choice shall be used and set
 * to the value of the xIRIPayload.relativeOID of the xIRI message used to
 * generate the IRI message.
 *
 * 3GPP TS 33.128, clause 5.5.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediatedFromIndicator  ::=  CHOICE
 * {
 *     xIRIRelativeOID [1] RELATIVE-OID
 * }
 * ```
 */
export
type MediatedFromIndicator =
    { xIRIRelativeOID: RELATIVE_OID } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_MediatedFromIndicator: $.ASN1Decoder<MediatedFromIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediatedFromIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediatedFromIndicator (el: _Element): MediatedFromIndicator {
    if (!_cached_decoder_for_MediatedFromIndicator) { _cached_decoder_for_MediatedFromIndicator = $._decode_extensible_choice<MediatedFromIndicator>({
    "CONTEXT 1": [ "xIRIRelativeOID", $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID) ]
}); }
    return _cached_decoder_for_MediatedFromIndicator(el);
}

let _cached_encoder_for_MediatedFromIndicator: $.ASN1Encoder<MediatedFromIndicator> | null = null;

/**
 * @summary Encodes a(n) MediatedFromIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediatedFromIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_MediatedFromIndicator (value: MediatedFromIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediatedFromIndicator) { _cached_encoder_for_MediatedFromIndicator = $._encode_choice<MediatedFromIndicator>({
    "xIRIRelativeOID": $._encode_implicit(_TagClass.context, 1, () => $._encodeRelativeOID, $.BER),
}, $.BER); }
    return _cached_encoder_for_MediatedFromIndicator(value, elGetter);
}


/* eslint-enable */
