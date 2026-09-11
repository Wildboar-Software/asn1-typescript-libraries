/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";



/**
 * @summary GlobalCallLinkageID
 * @description
 *
 * Identifier of an end-to-end CSTA call. Choose either a
 * switching-function-specific ID (unique only with the
 * sub-domain name) or an H.225 globally unique ID (ITU-T Rec.
 * H.225). If both the globally unique ID and the sub-domain
 * name are present, the node-name field of the H.225 ID
 * should match the sub-domain name. ECMA-269 §12.2.5.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GlobalCallLinkageID  ::=  CHOICE
 * {    subDomainCallLinkageID                 [0] IMPLICIT OCTET STRING (SIZE(1..8)),
 *     globallyUniqueCallLinkageID             [1] IMPLICIT OCTET STRING (SIZE(1..16)) }
 * ```
 */
export
type GlobalCallLinkageID =
    { subDomainCallLinkageID: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { globallyUniqueCallLinkageID: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GlobalCallLinkageID: $.ASN1Decoder<GlobalCallLinkageID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GlobalCallLinkageID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GlobalCallLinkageID (el: _Element): GlobalCallLinkageID {
    if (!_cached_decoder_for_GlobalCallLinkageID) { _cached_decoder_for_GlobalCallLinkageID = $._decode_inextensible_choice<GlobalCallLinkageID>({
    "CONTEXT 0": [ "subDomainCallLinkageID", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "globallyUniqueCallLinkageID", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_GlobalCallLinkageID(el);
}

let _cached_encoder_for_GlobalCallLinkageID: $.ASN1Encoder<GlobalCallLinkageID> | null = null;

/**
 * @summary Encodes a(n) GlobalCallLinkageID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GlobalCallLinkageID, encoded as an ASN.1 Element.
 */
export
function _encode_GlobalCallLinkageID (value: GlobalCallLinkageID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GlobalCallLinkageID) { _cached_encoder_for_GlobalCallLinkageID = $._encode_choice<GlobalCallLinkageID>({
    "subDomainCallLinkageID": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "globallyUniqueCallLinkageID": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_GlobalCallLinkageID(value, elGetter);
}


/* eslint-enable */
