/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { ExportSpecification, _decode_ExportSpecification, _encode_ExportSpecification } from "../ESFormat-ExportSpecification/ExportSpecification.ta.mjs";


/**
 * @summary ClientPartToKeep_exportSpec
 * @description
 * 
 * Either the name of an export specification established by an Export
 * Specification task, or the specification itself.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.6, EXT.1.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartToKeep-exportSpec ::= CHOICE {
 *     packageName [1] IMPLICIT InternationalString,
 *     packageSpec [2] ExportSpecification
 * }
 * ```
 */
export
type ClientPartToKeep_exportSpec =
    { packageName: InternationalString } /* CHOICE_ALT_ROOT */
    | { packageSpec: ExportSpecification } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ClientPartToKeep_exportSpec: $.ASN1Decoder<ClientPartToKeep_exportSpec> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartToKeep_exportSpec
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartToKeep_exportSpec (el: _Element): ClientPartToKeep_exportSpec {
    if (!_cached_decoder_for_ClientPartToKeep_exportSpec) { _cached_decoder_for_ClientPartToKeep_exportSpec = $._decode_inextensible_choice<ClientPartToKeep_exportSpec>({
    "CONTEXT 1": [ "packageName", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 2": [ "packageSpec", $._decode_explicit<ExportSpecification>(() => _decode_ExportSpecification) ]
}); }
    return _cached_decoder_for_ClientPartToKeep_exportSpec(el);
}

let _cached_encoder_for_ClientPartToKeep_exportSpec: $.ASN1Encoder<ClientPartToKeep_exportSpec> | null = null;

/**
 * @summary Encodes a(n) ClientPartToKeep_exportSpec into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartToKeep_exportSpec, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartToKeep_exportSpec (value: ClientPartToKeep_exportSpec, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartToKeep_exportSpec) { _cached_encoder_for_ClientPartToKeep_exportSpec = $._encode_choice<ClientPartToKeep_exportSpec>({
    "packageName": $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER),
    "packageSpec": $._encode_explicit(_TagClass.context, 2, () => _encode_ExportSpecification, $.BER),
}, $.BER); }
    return _cached_encoder_for_ClientPartToKeep_exportSpec(value, elGetter);
}


/* eslint-enable */
