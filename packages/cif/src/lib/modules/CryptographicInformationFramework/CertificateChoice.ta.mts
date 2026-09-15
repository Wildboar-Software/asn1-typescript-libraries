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
import { CertificateObject, _get_decoder_for_CertificateObject, _get_encoder_for_CertificateObject } from "../CryptographicInformationFramework/CertificateObject.ta.mjs";
// export { CertificateObject, _get_decoder_for_CertificateObject, _get_encoder_for_CertificateObject } from "../CryptographicInformationFramework/CertificateObject.ta.mjs";
import { X509CertificateAttributes, _decode_X509CertificateAttributes, _encode_X509CertificateAttributes } from "../CryptographicInformationFramework/X509CertificateAttributes.ta.mjs";
// export { X509CertificateAttributes, _decode_X509CertificateAttributes, _encode_X509CertificateAttributes } from "../CryptographicInformationFramework/X509CertificateAttributes.ta.mjs";
import { X509AttributeCertificateAttributes, _decode_X509AttributeCertificateAttributes, _encode_X509AttributeCertificateAttributes } from "../CryptographicInformationFramework/X509AttributeCertificateAttributes.ta.mjs";
// export { X509AttributeCertificateAttributes, _decode_X509AttributeCertificateAttributes, _encode_X509AttributeCertificateAttributes } from "../CryptographicInformationFramework/X509AttributeCertificateAttributes.ta.mjs";
import { SPKICertificateAttributes, _decode_SPKICertificateAttributes, _encode_SPKICertificateAttributes } from "../CryptographicInformationFramework/SPKICertificateAttributes.ta.mjs";
// export { SPKICertificateAttributes, _decode_SPKICertificateAttributes, _encode_SPKICertificateAttributes } from "../CryptographicInformationFramework/SPKICertificateAttributes.ta.mjs";
import { PGPCertificateAttributes, _decode_PGPCertificateAttributes, _encode_PGPCertificateAttributes } from "../CryptographicInformationFramework/PGPCertificateAttributes.ta.mjs";
// export { PGPCertificateAttributes, _decode_PGPCertificateAttributes, _encode_PGPCertificateAttributes } from "../CryptographicInformationFramework/PGPCertificateAttributes.ta.mjs";
import { WTLSCertificateAttributes, _decode_WTLSCertificateAttributes, _encode_WTLSCertificateAttributes } from "../CryptographicInformationFramework/WTLSCertificateAttributes.ta.mjs";
// export { WTLSCertificateAttributes, _decode_WTLSCertificateAttributes, _encode_WTLSCertificateAttributes } from "../CryptographicInformationFramework/WTLSCertificateAttributes.ta.mjs";
import { X9_68CertificateAttributes, _decode_X9_68CertificateAttributes, _encode_X9_68CertificateAttributes } from "../CryptographicInformationFramework/X9-68CertificateAttributes.ta.mjs";
// export { X9_68CertificateAttributes, _decode_X9_68CertificateAttributes, _encode_X9_68CertificateAttributes } from "../CryptographicInformationFramework/X9-68CertificateAttributes.ta.mjs";
import { CVCertificateAttributes, _decode_CVCertificateAttributes, _encode_CVCertificateAttributes } from "../CryptographicInformationFramework/CVCertificateAttributes.ta.mjs";
// export { CVCertificateAttributes, _decode_CVCertificateAttributes, _encode_CVCertificateAttributes } from "../CryptographicInformationFramework/CVCertificateAttributes.ta.mjs";
import { GenericCertificateAttributes, _decode_GenericCertificateAttributes, _encode_GenericCertificateAttributes } from "../CryptographicInformationFramework/GenericCertificateAttributes.ta.mjs";
// export { GenericCertificateAttributes, _decode_GenericCertificateAttributes, _encode_GenericCertificateAttributes } from "../CryptographicInformationFramework/GenericCertificateAttributes.ta.mjs";


/**
 * @summary CertificateChoice
 * @description
 * 
 * Certificate CIO alternatives: X.509, attribute, SPKI, PGP, WTLS, X9.68,
 * card-verifiable, or generic. ISO/IEC 7816-15:2016 §8.7.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateChoice  ::=  CHOICE {
 *     x509Certificate             CertificateObject {X509CertificateAttributes},
 *     x509AttributeCertificate    [0] CertificateObject {X509AttributeCertificateAttributes},
 *     spkiCertificate             [1] CertificateObject {SPKICertificateAttributes},
 *     pgpCertificate              [2] CertificateObject {PGPCertificateAttributes},
 *     wtlsCertificate             [3] CertificateObject {WTLSCertificateAttributes},
 *     x9-68Certificate            [4] CertificateObject {X9-68CertificateAttributes},
 *     cvCertificate               [5] CertificateObject {CVCertificateAttributes},
 *     genericCertificateObject    [6] CertificateObject {GenericCertificateAttributes},
 *     ... -- For future extensions
 * }
 * ```
 */
export
type CertificateChoice =
    { x509Certificate: CertificateObject<X509CertificateAttributes> } /* CHOICE_ALT_ROOT */
    | { x509AttributeCertificate: CertificateObject<X509AttributeCertificateAttributes> } /* CHOICE_ALT_ROOT */
    | { spkiCertificate: CertificateObject<SPKICertificateAttributes> } /* CHOICE_ALT_ROOT */
    | { pgpCertificate: CertificateObject<PGPCertificateAttributes> } /* CHOICE_ALT_ROOT */
    | { wtlsCertificate: CertificateObject<WTLSCertificateAttributes> } /* CHOICE_ALT_ROOT */
    | { x9_68Certificate: CertificateObject<X9_68CertificateAttributes> } /* CHOICE_ALT_ROOT */
    | { cvCertificate: CertificateObject<CVCertificateAttributes> } /* CHOICE_ALT_ROOT */
    | { genericCertificateObject: CertificateObject<GenericCertificateAttributes> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CertificateChoice: $.ASN1Decoder<CertificateChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificateChoice (el: _Element): CertificateChoice {
    if (!_cached_decoder_for_CertificateChoice) { _cached_decoder_for_CertificateChoice = $._decode_extensible_choice<CertificateChoice>({
    "UNIVERSAL 16": [ "x509Certificate", _get_decoder_for_CertificateObject<X509CertificateAttributes>(_decode_X509CertificateAttributes) ],
    "CONTEXT 0": [ "x509AttributeCertificate", $._decode_implicit<CertificateObject<X509AttributeCertificateAttributes>>(() => _get_decoder_for_CertificateObject<X509AttributeCertificateAttributes>(_decode_X509AttributeCertificateAttributes)) ],
    "CONTEXT 1": [ "spkiCertificate", $._decode_implicit<CertificateObject<SPKICertificateAttributes>>(() => _get_decoder_for_CertificateObject<SPKICertificateAttributes>(_decode_SPKICertificateAttributes)) ],
    "CONTEXT 2": [ "pgpCertificate", $._decode_implicit<CertificateObject<PGPCertificateAttributes>>(() => _get_decoder_for_CertificateObject<PGPCertificateAttributes>(_decode_PGPCertificateAttributes)) ],
    "CONTEXT 3": [ "wtlsCertificate", $._decode_implicit<CertificateObject<WTLSCertificateAttributes>>(() => _get_decoder_for_CertificateObject<WTLSCertificateAttributes>(_decode_WTLSCertificateAttributes)) ],
    "CONTEXT 4": [ "x9_68Certificate", $._decode_implicit<CertificateObject<X9_68CertificateAttributes>>(() => _get_decoder_for_CertificateObject<X9_68CertificateAttributes>(_decode_X9_68CertificateAttributes)) ],
    "CONTEXT 5": [ "cvCertificate", $._decode_implicit<CertificateObject<CVCertificateAttributes>>(() => _get_decoder_for_CertificateObject<CVCertificateAttributes>(_decode_CVCertificateAttributes)) ],
    "CONTEXT 6": [ "genericCertificateObject", $._decode_implicit<CertificateObject<GenericCertificateAttributes>>(() => _get_decoder_for_CertificateObject<GenericCertificateAttributes>(_decode_GenericCertificateAttributes)) ]
}); }
    return _cached_decoder_for_CertificateChoice(el);
}

let _cached_encoder_for_CertificateChoice: $.ASN1Encoder<CertificateChoice> | null = null;

/**
 * @summary Encodes a(n) CertificateChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateChoice, encoded as an ASN.1 Element.
 */
export
function _encode_CertificateChoice (value: CertificateChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificateChoice) { _cached_encoder_for_CertificateChoice = $._encode_choice<CertificateChoice>({
    "x509Certificate": _get_encoder_for_CertificateObject<X509CertificateAttributes>(_encode_X509CertificateAttributes),
    "x509AttributeCertificate": $._encode_implicit(_TagClass.context, 0, () => _get_encoder_for_CertificateObject<X509AttributeCertificateAttributes>(_encode_X509AttributeCertificateAttributes), $.BER),
    "spkiCertificate": $._encode_implicit(_TagClass.context, 1, () => _get_encoder_for_CertificateObject<SPKICertificateAttributes>(_encode_SPKICertificateAttributes), $.BER),
    "pgpCertificate": $._encode_implicit(_TagClass.context, 2, () => _get_encoder_for_CertificateObject<PGPCertificateAttributes>(_encode_PGPCertificateAttributes), $.BER),
    "wtlsCertificate": $._encode_implicit(_TagClass.context, 3, () => _get_encoder_for_CertificateObject<WTLSCertificateAttributes>(_encode_WTLSCertificateAttributes), $.BER),
    "x9_68Certificate": $._encode_implicit(_TagClass.context, 4, () => _get_encoder_for_CertificateObject<X9_68CertificateAttributes>(_encode_X9_68CertificateAttributes), $.BER),
    "cvCertificate": $._encode_implicit(_TagClass.context, 5, () => _get_encoder_for_CertificateObject<CVCertificateAttributes>(_encode_CVCertificateAttributes), $.BER),
    "genericCertificateObject": $._encode_implicit(_TagClass.context, 6, () => _get_encoder_for_CertificateObject<GenericCertificateAttributes>(_encode_GenericCertificateAttributes), $.BER),
}, $.BER); }
    return _cached_encoder_for_CertificateChoice(value, elGetter);
}


/* eslint-enable */
