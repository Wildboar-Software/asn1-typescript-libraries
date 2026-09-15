/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../IN-CS2-datatypes/InformationToSend.ta.mjs";
// export { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../IN-CS2-datatypes/InformationToSend.ta.mjs";
import { Cause, _decode_Cause, _encode_Cause } from "../IN-CS2-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-CS2-datatypes/Cause.ta.mjs";
import { GapTreatment_both, _decode_GapTreatment_both, _encode_GapTreatment_both } from "../IN-CS2-datatypes/GapTreatment-both.ta.mjs";
// export { GapTreatment_both, _decode_GapTreatment_both, _encode_GapTreatment_both } from "../IN-CS2-datatypes/GapTreatment-both.ta.mjs";


/**
 * @summary GapTreatment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GapTreatment{PARAMETERS-BOUND:bound}  ::=  CHOICE {
 *   informationToSend  [0]  InformationToSend{bound},
 *   releaseCause       [1]  Cause{bound},
 *   both
 *     [2]  SEQUENCE {informationToSend  [0]  InformationToSend{bound},
 *                    releaseCause       [1]  Cause{bound}}
 * }
 * ```
 */
export
type GapTreatment =
    { informationToSend: InformationToSend } /* CHOICE_ALT_ROOT */
    | { releaseCause: Cause } /* CHOICE_ALT_ROOT */
    | { both: GapTreatment_both } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GapTreatment: $.ASN1Decoder<GapTreatment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GapTreatment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GapTreatment (el: _Element): GapTreatment {
    if (!_cached_decoder_for_GapTreatment) { _cached_decoder_for_GapTreatment = $._decode_inextensible_choice<GapTreatment>({
    "CONTEXT 0": [ "informationToSend", $._decode_explicit<InformationToSend>(() => _decode_InformationToSend) ],
    "CONTEXT 1": [ "releaseCause", $._decode_implicit<Cause>(() => _decode_Cause) ],
    "CONTEXT 2": [ "both", $._decode_implicit<GapTreatment_both>(() => _decode_GapTreatment_both) ]
}); }
    return _cached_decoder_for_GapTreatment(el);
}

let _cached_encoder_for_GapTreatment: $.ASN1Encoder<GapTreatment> | null = null;

/**
 * @summary Encodes a(n) GapTreatment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GapTreatment, encoded as an ASN.1 Element.
 */
export
function _encode_GapTreatment (value: GapTreatment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GapTreatment) { _cached_encoder_for_GapTreatment = $._encode_choice<GapTreatment>({
    "informationToSend": $._encode_explicit(_TagClass.context, 0, () => _encode_InformationToSend, $.BER),
    "releaseCause": $._encode_implicit(_TagClass.context, 1, () => _encode_Cause, $.BER),
    "both": $._encode_implicit(_TagClass.context, 2, () => _encode_GapTreatment_both, $.BER),
}, $.BER); }
    return _cached_encoder_for_GapTreatment(value, elGetter);
}


/* eslint-enable */
