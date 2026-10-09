/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { ExportSpecification, _decode_ExportSpecification, _encode_ExportSpecification } from "../ESFormat-ExportSpecification/ExportSpecification.ta.mjs";
// export { ExportSpecification, _decode_ExportSpecification, _encode_ExportSpecification } from "../ESFormat-ExportSpecification/ExportSpecification.ta.mjs";


/**
 * @summary ClientPartToKeep_exportParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartToKeep-exportParameters ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ClientPartToKeep_exportParameters =
    { packageName: InternationalString } /* CHOICE_ALT_ROOT */
    | { exportPackage: ExportSpecification } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ClientPartToKeep_exportParameters: $.ASN1Decoder<ClientPartToKeep_exportParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartToKeep_exportParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartToKeep_exportParameters (el: _Element): ClientPartToKeep_exportParameters {
    if (!_cached_decoder_for_ClientPartToKeep_exportParameters) { _cached_decoder_for_ClientPartToKeep_exportParameters = $._decode_inextensible_choice<ClientPartToKeep_exportParameters>({
    "CONTEXT 1": [ "packageName", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 2": [ "exportPackage", $._decode_explicit<ExportSpecification>(() => _decode_ExportSpecification) ]
}); }
    return _cached_decoder_for_ClientPartToKeep_exportParameters(el);
}

let _cached_encoder_for_ClientPartToKeep_exportParameters: $.ASN1Encoder<ClientPartToKeep_exportParameters> | null = null;

/**
 * @summary Encodes a(n) ClientPartToKeep_exportParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartToKeep_exportParameters, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartToKeep_exportParameters (value: ClientPartToKeep_exportParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartToKeep_exportParameters) { _cached_encoder_for_ClientPartToKeep_exportParameters = $._encode_choice<ClientPartToKeep_exportParameters>({
    "packageName": $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER),
    "exportPackage": $._encode_explicit(_TagClass.context, 2, () => _encode_ExportSpecification, $.BER),
}, $.BER); }
    return _cached_encoder_for_ClientPartToKeep_exportParameters(value, elGetter);
}


/* eslint-enable */
