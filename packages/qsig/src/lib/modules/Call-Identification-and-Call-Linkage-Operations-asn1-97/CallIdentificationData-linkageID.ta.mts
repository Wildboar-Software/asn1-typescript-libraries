/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SubDomainID, _decode_SubDomainID, _encode_SubDomainID } from "../Call-Identification-and-Call-Linkage-Operations-asn1-97/SubDomainID.ta.mjs";
import { type GloballyUniqueID, _decode_GloballyUniqueID, _encode_GloballyUniqueID } from "../Call-Identification-and-Call-Linkage-Operations-asn1-97/GloballyUniqueID.ta.mjs";

/**
 * @summary CallIdentificationData_linkageID
 * @description
 *
 * Linkage identifier inside CallIdentificationData (ECMA-314 §6.3.1; Annex
 * D). subDomainID is unique only together with switchingSubDomainName.
 * globallyUniqueID is unique by itself and is coded as an H.225
 * GloballyUniqueID (Annex D.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-314/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallIdentificationData-linkageID ::= CHOICE {
 *     subDomainID [1] IMPLICIT SubDomainID,
 *     globallyUniqueID [2] IMPLICIT GloballyUniqueID
 * }
 * ```
 */
export
type CallIdentificationData_linkageID =
    { subDomainID: SubDomainID } /* CHOICE_ALT_ROOT */
    | { globallyUniqueID: GloballyUniqueID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CallIdentificationData_linkageID: $.ASN1Decoder<CallIdentificationData_linkageID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallIdentificationData_linkageID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallIdentificationData_linkageID (el: _Element): CallIdentificationData_linkageID {
    if (!_cached_decoder_for_CallIdentificationData_linkageID) { _cached_decoder_for_CallIdentificationData_linkageID = $._decode_inextensible_choice<CallIdentificationData_linkageID>({
    "CONTEXT 1": [ "subDomainID", $._decode_implicit<SubDomainID>(() => _decode_SubDomainID) ],
    "CONTEXT 2": [ "globallyUniqueID", $._decode_implicit<GloballyUniqueID>(() => _decode_GloballyUniqueID) ]
}); }
    return _cached_decoder_for_CallIdentificationData_linkageID(el);
}

let _cached_encoder_for_CallIdentificationData_linkageID: $.ASN1Encoder<CallIdentificationData_linkageID> | null = null;

/**
 * @summary Encodes a(n) CallIdentificationData_linkageID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallIdentificationData_linkageID, encoded as an ASN.1 Element.
 */
export
function _encode_CallIdentificationData_linkageID (value: CallIdentificationData_linkageID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallIdentificationData_linkageID) { _cached_encoder_for_CallIdentificationData_linkageID = $._encode_choice<CallIdentificationData_linkageID>({
    "subDomainID": $._encode_implicit(_TagClass.context, 1, () => _encode_SubDomainID, $.BER),
    "globallyUniqueID": $._encode_implicit(_TagClass.context, 2, () => _encode_GloballyUniqueID, $.BER),
}, $.BER); }
    return _cached_encoder_for_CallIdentificationData_linkageID(value, elGetter);
}

/* eslint-enable */
