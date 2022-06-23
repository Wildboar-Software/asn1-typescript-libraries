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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { Certificate, _decode_Certificate, _encode_Certificate } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificate.ta";
import { TBSCertificate, _decode_TBSCertificate, _encode_TBSCertificate } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/TBSCertificate.ta";
import { TrustAnchorInfo, _decode_TrustAnchorInfo, _encode_TrustAnchorInfo } from "../TrustAnchorInfoModule/TrustAnchorInfo.ta";


/* START_OF_SYMBOL_DEFINITION TrustAnchorChoice */
/**
 * @summary TrustAnchorChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TrustAnchorChoice  ::=  CHOICE {
 *     certificate  Certificate,
 *     tbsCert      [1] EXPLICIT TBSCertificate,
 *     taInfo       [2] EXPLICIT TrustAnchorInfo }
 * ```
 */
export
type TrustAnchorChoice =
    { certificate: Certificate } /* CHOICE_ALT_ROOT */
    | { tbsCert: TBSCertificate } /* CHOICE_ALT_ROOT */
    | { taInfo: TrustAnchorInfo } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TrustAnchorChoice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TrustAnchorChoice */
let _cached_decoder_for_TrustAnchorChoice: $.ASN1Decoder<TrustAnchorChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TrustAnchorChoice */

/* START_OF_SYMBOL_DEFINITION _decode_TrustAnchorChoice */
/**
 * @summary Decodes an ASN.1 element into a(n) TrustAnchorChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TrustAnchorChoice} The decoded data structure.
 */
export
function _decode_TrustAnchorChoice (el: _Element) {
    if (!_cached_decoder_for_TrustAnchorChoice) { _cached_decoder_for_TrustAnchorChoice = $._decode_inextensible_choice<TrustAnchorChoice>({
    "UNIVERSAL 16": [ "certificate", _decode_Certificate ],
    "CONTEXT 1": [ "tbsCert", $._decode_explicit<TBSCertificate>(() => _decode_TBSCertificate) ],
    "CONTEXT 2": [ "taInfo", $._decode_explicit<TrustAnchorInfo>(() => _decode_TrustAnchorInfo) ]
}); }
    return _cached_decoder_for_TrustAnchorChoice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TrustAnchorChoice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TrustAnchorChoice */
let _cached_encoder_for_TrustAnchorChoice: $.ASN1Encoder<TrustAnchorChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TrustAnchorChoice */

/* START_OF_SYMBOL_DEFINITION _encode_TrustAnchorChoice */
/**
 * @summary Encodes a(n) TrustAnchorChoice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrustAnchorChoice, encoded as an ASN.1 Element.
 */
export
function _encode_TrustAnchorChoice (value: TrustAnchorChoice, elGetter: $.ASN1Encoder<TrustAnchorChoice>) {
    if (!_cached_encoder_for_TrustAnchorChoice) { _cached_encoder_for_TrustAnchorChoice = $._encode_choice<TrustAnchorChoice>({
    "certificate": _encode_Certificate,
    "tbsCert": $._encode_explicit(_TagClass.context, 1, () => _encode_TBSCertificate, $.BER),
    "taInfo": $._encode_explicit(_TagClass.context, 2, () => _encode_TrustAnchorInfo, $.BER),
}, $.BER); }
    return _cached_encoder_for_TrustAnchorChoice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TrustAnchorChoice */

/* eslint-enable */
