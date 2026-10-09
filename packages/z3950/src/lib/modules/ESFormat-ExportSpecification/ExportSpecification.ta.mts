/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExportSpecification_esRequest, _decode_ExportSpecification_esRequest, _encode_ExportSpecification_esRequest } from "../ESFormat-ExportSpecification/ExportSpecification-esRequest.ta.mjs";
import { ExportSpecification_taskPackage, _decode_ExportSpecification_taskPackage, _encode_ExportSpecification_taskPackage } from "../ESFormat-ExportSpecification/ExportSpecification-taskPackage.ta.mjs";


/**
 * @summary ExportSpecification
 * @description
 * 
 * Establishes an export specification the server can later invoke, more
 * than once and with several invocations at the same time, via Export
 * Invocation. The specification names a delivery destination and the
 * composition of the records to deliver (one or more result-set records).
 * Delivery may be fax, electronic mail, file transfer, or a
 * server-supported printer; the destination may be a printer or another
 * device.
 * 
 * Nothing the client sends is discarded, and the server adds no
 * service-specific parameters: `notToKeep` and `serverPart` are empty.
 * `toKeep` and `clientPart` are the specification. On modify, supplied
 * values replace the corresponding package values; an omitted optional
 * parameter is left unchanged. Package name, permissions, and task status
 * are on the ES operation.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.6, EXT.2, §3.2.9.1.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExportSpecification  ::=  CHOICE {
 *     esRequest       [1] IMPLICIT SEQUENCE {
 *         toKeep          [1] ClientPartToKeep,
 *         notToKeep       [2] IMPLICIT NULL
 *     },
 *     taskPackage     [2] IMPLICIT SEQUENCE {
 *         clientPart      [1] ClientPartToKeep,
 *         serverPart      [2] IMPLICIT NULL
 *     }
 * }
 * ```
 */
export
type ExportSpecification =
    { esRequest: ExportSpecification_esRequest } /* CHOICE_ALT_ROOT */
    | { taskPackage: ExportSpecification_taskPackage } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ExportSpecification: $.ASN1Decoder<ExportSpecification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExportSpecification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExportSpecification (el: _Element): ExportSpecification {
    if (!_cached_decoder_for_ExportSpecification) { _cached_decoder_for_ExportSpecification = $._decode_inextensible_choice<ExportSpecification>({
    "CONTEXT 1": [ "esRequest", $._decode_implicit<ExportSpecification_esRequest>(() => _decode_ExportSpecification_esRequest) ],
    "CONTEXT 2": [ "taskPackage", $._decode_implicit<ExportSpecification_taskPackage>(() => _decode_ExportSpecification_taskPackage) ]
}); }
    return _cached_decoder_for_ExportSpecification(el);
}

let _cached_encoder_for_ExportSpecification: $.ASN1Encoder<ExportSpecification> | null = null;

/**
 * @summary Encodes a(n) ExportSpecification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExportSpecification, encoded as an ASN.1 Element.
 */
export
function _encode_ExportSpecification (value: ExportSpecification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExportSpecification) { _cached_encoder_for_ExportSpecification = $._encode_choice<ExportSpecification>({
    "esRequest": $._encode_implicit(_TagClass.context, 1, () => _encode_ExportSpecification_esRequest, $.BER),
    "taskPackage": $._encode_implicit(_TagClass.context, 2, () => _encode_ExportSpecification_taskPackage, $.BER),
}, $.BER); }
    return _cached_encoder_for_ExportSpecification(value, elGetter);
}


/* eslint-enable */
