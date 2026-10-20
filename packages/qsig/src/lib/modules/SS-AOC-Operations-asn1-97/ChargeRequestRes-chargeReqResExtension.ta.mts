/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
// export { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";


/**
 * @summary ChargeRequestRes_chargeReqResExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeRequestRes-chargeReqResExtension ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ChargeRequestRes_chargeReqResExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { multipleExtension: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ChargeRequestRes_chargeReqResExtension: $.ASN1Decoder<ChargeRequestRes_chargeReqResExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargeRequestRes_chargeReqResExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargeRequestRes_chargeReqResExtension (el: _Element): ChargeRequestRes_chargeReqResExtension {
    if (!_cached_decoder_for_ChargeRequestRes_chargeReqResExtension) { _cached_decoder_for_ChargeRequestRes_chargeReqResExtension = $._decode_inextensible_choice<ChargeRequestRes_chargeReqResExtension>({
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multipleExtension", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_ChargeRequestRes_chargeReqResExtension(el);
}

let _cached_encoder_for_ChargeRequestRes_chargeReqResExtension: $.ASN1Encoder<ChargeRequestRes_chargeReqResExtension> | null = null;

/**
 * @summary Encodes a(n) ChargeRequestRes_chargeReqResExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargeRequestRes_chargeReqResExtension, encoded as an ASN.1 Element.
 */
export
function _encode_ChargeRequestRes_chargeReqResExtension (value: ChargeRequestRes_chargeReqResExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargeRequestRes_chargeReqResExtension) { _cached_encoder_for_ChargeRequestRes_chargeReqResExtension = $._encode_choice<ChargeRequestRes_chargeReqResExtension>({
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multipleExtension": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_ChargeRequestRes_chargeReqResExtension(value, elGetter);
}


/* eslint-enable */
