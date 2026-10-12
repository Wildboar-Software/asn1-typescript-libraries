/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InformationObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InformationObject  ::=  CHOICE {mm  [0]  IPM,
 *                               mn  [1]  IPN}
 * ```
 */
export
type InformationObject =
    { mm: IPM } /* CHOICE_ALT_ROOT */
    | { mn: IPN } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_InformationObject: $.ASN1Decoder<InformationObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InformationObject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InformationObject (el: _Element): InformationObject {
    if (!_cached_decoder_for_InformationObject) { _cached_decoder_for_InformationObject = $._decode_inextensible_choice<InformationObject>({
    "CONTEXT 0": [ "mm", $._decode_implicit<IPM>(() => _decode_IPM) ],
    "CONTEXT 1": [ "mn", $._decode_implicit<IPN>(() => _decode_IPN) ]
}); }
    return _cached_decoder_for_InformationObject(el);
}

let _cached_encoder_for_InformationObject: $.ASN1Encoder<InformationObject> | null = null;

/**
 * @summary Encodes a(n) InformationObject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationObject, encoded as an ASN.1 Element.
 */
export
function _encode_InformationObject (value: InformationObject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InformationObject) { _cached_encoder_for_InformationObject = $._encode_choice<InformationObject>({
    "mm": $._encode_implicit(_TagClass.context, 0, () => _encode_IPM, $.BER),
    "mn": $._encode_implicit(_TagClass.context, 1, () => _encode_IPN, $.BER),
}, $.BER); }
    return _cached_encoder_for_InformationObject(value, elGetter);
}


/* eslint-enable */
