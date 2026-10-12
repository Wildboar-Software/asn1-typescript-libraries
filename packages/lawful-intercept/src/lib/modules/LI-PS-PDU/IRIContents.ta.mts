/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { EmailIRI, _decode_EmailIRI, _encode_EmailIRI } from "../EmailPDU/EmailIRI.ta.mjs";
// export { IPIRI, _decode_IPIRI, _encode_IPIRI } from "../IPAccessPDU/IPIRI.ta.mjs";
// export { IPIRIOnly, _decode_IPIRIOnly, _encode_IPIRIOnly } from "../IPAccessPDU/IPIRIOnly.ta.mjs";
import { UMTSIRI, _decode_UMTSIRI, _encode_UMTSIRI } from "../LI-PS-PDU/UMTSIRI.ta.mjs";
// export { UMTSIRI, _decode_UMTSIRI, _encode_UMTSIRI } from "../LI-PS-PDU/UMTSIRI.ta.mjs";
import { ETSI671IRI, _decode_ETSI671IRI, _encode_ETSI671IRI } from "../LI-PS-PDU/ETSI671IRI.ta.mjs";
// export { ETSI671IRI, _decode_ETSI671IRI, _encode_ETSI671IRI } from "../LI-PS-PDU/ETSI671IRI.ta.mjs";
// export { L2IRI, _decode_L2IRI, _encode_L2IRI } from "../L2AccessPDU/L2IRI.ta.mjs";
// export { TARGETACTIVITYMONITOR_1, _decode_TARGETACTIVITYMONITOR_1, _encode_TARGETACTIVITYMONITOR_1 } from "../TS101909201/TARGETACTIVITYMONITOR-1.ta.mjs";
// export { TARGETACTIVITYMONITOR, _decode_TARGETACTIVITYMONITOR, _encode_TARGETACTIVITYMONITOR } from "../TS101909202/TARGETACTIVITYMONITOR.ta.mjs";
// export { PstnIsdnIRI, _decode_PstnIsdnIRI, _encode_PstnIsdnIRI } from "../PstnIsdnPDU/PstnIsdnIRI.ta.mjs";
// export { IPMMIRI, _decode_IPMMIRI, _encode_IPMMIRI } from "../IPMultimediaPDU/IPMMIRI.ta.mjs";
// export { MessagingIRI, _decode_MessagingIRI, _encode_MessagingIRI } from "../EmailPDU/MessagingIRI.ta.mjs";
import { EPSIRI, _decode_EPSIRI, _encode_EPSIRI } from "../LI-PS-PDU/EPSIRI.ta.mjs";
// export { EPSIRI, _decode_EPSIRI, _encode_EPSIRI } from "../LI-PS-PDU/EPSIRI.ta.mjs";
import { ConfIRI, _decode_ConfIRI, _encode_ConfIRI } from "../LI-PS-PDU/ConfIRI.ta.mjs";
// export { ConfIRI, _decode_ConfIRI, _encode_ConfIRI } from "../LI-PS-PDU/ConfIRI.ta.mjs";
import { ProSeIRI, _decode_ProSeIRI, _encode_ProSeIRI } from "../LI-PS-PDU/ProSeIRI.ta.mjs";
// export { ProSeIRI, _decode_ProSeIRI, _encode_ProSeIRI } from "../LI-PS-PDU/ProSeIRI.ta.mjs";
import { GcseIRI, _decode_GcseIRI, _encode_GcseIRI } from "../LI-PS-PDU/GcseIRI.ta.mjs";
import * as EmailPDU from "../EmailPDU/index.mjs";
import * as IPAccessPDU from "../IPAccessPDU/index.mjs";
import * as IPMultimediaPDU from "../IPMultimediaPDU/index.mjs";
import * as L2AccessPDU from "../L2AccessPDU/index.mjs";
import * as PstnIsdnPDU from "../PstnIsdnPDU/index.mjs";
import * as TS101909201 from "../TS101909201/index.mjs";
import * as TS101909202 from "../TS101909202/index.mjs";
// export { GcseIRI, _decode_GcseIRI, _encode_GcseIRI } from "../LI-PS-PDU/GcseIRI.ta.mjs";
// export { IRIPayload, _decode_IRIPayload, _encode_IRIPayload } from "../TS33128Payloads/IRIPayload.ta.mjs";


/**
 * @summary IRIContents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRIContents  ::=  CHOICE
 *     -- Any of these choices may be commented out if they are not being used (see clause A.3)
 * {
 *     -- tag [0] deprecated in version15, ETSI TS 102 232-1 V3.3.1 (2013-02)
 *     emailIRI                    [1] EmailPDU.EmailIRI,
 *     iPIRI                       [2] IPAccessPDU.IPIRI,
 *     iPIRIOnly                   [3] IPAccessPDU.IPIRIOnly,
 *     uMTSIRI                     [4] UMTSIRI,
 *     eTSI671IRI                  [5] ETSI671IRI,
 *     ...,
 *     l2IRI                       [6] L2AccessPDU.L2IRI,
 *     l2IRIOnly                   [7] L2AccessPDU.L2IRIOnly,
 *     tARGETACTIVITYMONITOR-1     [8] TS101909201.TARGETACTIVITYMONITOR-1,
 *     tARGETACTIVITYMONITOR-2     [9] TS101909202.TARGETACTIVITYMONITOR,
 *     pstnIsdnIRI                 [10] PstnIsdnPDU.PstnIsdnIRI,
 *     iPMMIRI                     [11] IPMultimediaPDU.IPMMIRI,
 *     -- tag [12] deprecated in version32, ETSI TS 102 232-1 V3.24.1 (2021-07)
 *     -- tag [13] deprecated in version32, ETSI TS 102 232-1 V3.24.1 (2021-07)
 *     messagingIRI                [14] EmailPDU.MessagingIRI,
 *     ePSIRI                      [15] EPSIRI,
 *     confIRI                     [16] ConfIRI,
 *     proseIRI                    [17] ProSeIRI,
 *     gcseIRI                     [18] GcseIRI,
 *     threeGPP33128DefinedIRI     [19] OCTET STRING (CONTAINING TS33128Payloads.IRIPayload)
 * }
 * ```
 */
export
type IRIContents =
    { emailIRI: EmailPDU.EmailIRI } /* CHOICE_ALT_ROOT */
    | { iPIRI: IPAccessPDU.IPIRI } /* CHOICE_ALT_ROOT */
    | { iPIRIOnly: IPAccessPDU.IPIRIOnly } /* CHOICE_ALT_ROOT */
    | { uMTSIRI: UMTSIRI } /* CHOICE_ALT_ROOT */
    | { eTSI671IRI: ETSI671IRI } /* CHOICE_ALT_ROOT */
    | { l2IRI: L2AccessPDU.L2IRI } /* CHOICE_ALT_EXT */
    | { l2IRIOnly: L2AccessPDU.L2IRIOnly } /* CHOICE_ALT_EXT */
    | { tARGETACTIVITYMONITOR_1: TS101909201.TARGETACTIVITYMONITOR_1 } /* CHOICE_ALT_EXT */
    | { tARGETACTIVITYMONITOR_2: TS101909202.TARGETACTIVITYMONITOR } /* CHOICE_ALT_EXT */
    | { pstnIsdnIRI: PstnIsdnPDU.PstnIsdnIRI } /* CHOICE_ALT_EXT */
    | { iPMMIRI: IPMultimediaPDU.IPMMIRI } /* CHOICE_ALT_EXT */
    | { messagingIRI: EmailPDU.MessagingIRI } /* CHOICE_ALT_EXT */
    | { ePSIRI: EPSIRI } /* CHOICE_ALT_EXT */
    | { confIRI: ConfIRI } /* CHOICE_ALT_EXT */
    | { proseIRI: ProSeIRI } /* CHOICE_ALT_EXT */
    | { gcseIRI: GcseIRI } /* CHOICE_ALT_EXT */
    | { threeGPP33128DefinedIRI: OCTET_STRING } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IRIContents: $.ASN1Decoder<IRIContents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRIContents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRIContents (el: _Element): IRIContents {
    if (!_cached_decoder_for_IRIContents) { _cached_decoder_for_IRIContents = $._decode_extensible_choice<IRIContents>({
    "CONTEXT 1": [ "emailIRI", $._decode_implicit<EmailPDU.EmailIRI>(() => EmailPDU._decode_EmailIRI) ],
    "CONTEXT 2": [ "iPIRI", $._decode_implicit<IPAccessPDU.IPIRI>(() => IPAccessPDU._decode_IPIRI) ],
    "CONTEXT 3": [ "iPIRIOnly", $._decode_implicit<IPAccessPDU.IPIRIOnly>(() => IPAccessPDU._decode_IPIRIOnly) ],
    "CONTEXT 4": [ "uMTSIRI", $._decode_explicit<UMTSIRI>(() => _decode_UMTSIRI) ],
    "CONTEXT 5": [ "eTSI671IRI", $._decode_explicit<ETSI671IRI>(() => _decode_ETSI671IRI) ],
    "CONTEXT 6": [ "l2IRI", $._decode_implicit<L2AccessPDU.L2IRI>(() => L2AccessPDU._decode_L2IRI) ],
    "CONTEXT 7": [ "l2IRIOnly", $._decode_implicit<L2AccessPDU.L2IRIOnly>(() => L2AccessPDU._decode_L2IRIOnly) ],
    "CONTEXT 8": [ "tARGETACTIVITYMONITOR_1", $._decode_implicit<TS101909201.TARGETACTIVITYMONITOR_1>(() => TS101909201._decode_TARGETACTIVITYMONITOR_1) ],
    "CONTEXT 9": [ "tARGETACTIVITYMONITOR_2", $._decode_implicit<TS101909202.TARGETACTIVITYMONITOR>(() => TS101909202._decode_TARGETACTIVITYMONITOR) ],
    "CONTEXT 10": [ "pstnIsdnIRI", $._decode_implicit<PstnIsdnPDU.PstnIsdnIRI>(() => PstnIsdnPDU._decode_PstnIsdnIRI) ],
    "CONTEXT 11": [ "iPMMIRI", $._decode_implicit<IPMultimediaPDU.IPMMIRI>(() => IPMultimediaPDU._decode_IPMMIRI) ],
    "CONTEXT 14": [ "messagingIRI", $._decode_implicit<EmailPDU.MessagingIRI>(() => EmailPDU._decode_MessagingIRI) ],
    "CONTEXT 15": [ "ePSIRI", $._decode_explicit<EPSIRI>(() => _decode_EPSIRI) ],
    "CONTEXT 16": [ "confIRI", $._decode_explicit<ConfIRI>(() => _decode_ConfIRI) ],
    "CONTEXT 17": [ "proseIRI", $._decode_explicit<ProSeIRI>(() => _decode_ProSeIRI) ],
    "CONTEXT 18": [ "gcseIRI", $._decode_explicit<GcseIRI>(() => _decode_GcseIRI) ],
    "CONTEXT 19": [ "threeGPP33128DefinedIRI", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_IRIContents(el);
}

let _cached_encoder_for_IRIContents: $.ASN1Encoder<IRIContents> | null = null;

/**
 * @summary Encodes a(n) IRIContents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRIContents, encoded as an ASN.1 Element.
 */
export
function _encode_IRIContents (value: IRIContents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRIContents) { _cached_encoder_for_IRIContents = $._encode_choice<IRIContents>({
    "emailIRI": $._encode_implicit(_TagClass.context, 1, () => EmailPDU._encode_EmailIRI, $.BER),
    "iPIRI": $._encode_implicit(_TagClass.context, 2, () => IPAccessPDU._encode_IPIRI, $.BER),
    "iPIRIOnly": $._encode_implicit(_TagClass.context, 3, () => IPAccessPDU._encode_IPIRIOnly, $.BER),
    "uMTSIRI": $._encode_explicit(_TagClass.context, 4, () => _encode_UMTSIRI, $.BER),
    "eTSI671IRI": $._encode_explicit(_TagClass.context, 5, () => _encode_ETSI671IRI, $.BER),
    "l2IRI": $._encode_implicit(_TagClass.context, 6, () => L2AccessPDU._encode_L2IRI, $.BER),
    "l2IRIOnly": $._encode_implicit(_TagClass.context, 7, () => L2AccessPDU._encode_L2IRIOnly, $.BER),
    "tARGETACTIVITYMONITOR_1": $._encode_implicit(_TagClass.context, 8, () => TS101909201._encode_TARGETACTIVITYMONITOR_1, $.BER),
    "tARGETACTIVITYMONITOR_2": $._encode_implicit(_TagClass.context, 9, () => TS101909202._encode_TARGETACTIVITYMONITOR, $.BER),
    "pstnIsdnIRI": $._encode_implicit(_TagClass.context, 10, () => PstnIsdnPDU._encode_PstnIsdnIRI, $.BER),
    "iPMMIRI": $._encode_implicit(_TagClass.context, 11, () => IPMultimediaPDU._encode_IPMMIRI, $.BER),
    "messagingIRI": $._encode_implicit(_TagClass.context, 14, () => EmailPDU._encode_MessagingIRI, $.BER),
    "ePSIRI": $._encode_explicit(_TagClass.context, 15, () => _encode_EPSIRI, $.BER),
    "confIRI": $._encode_explicit(_TagClass.context, 16, () => _encode_ConfIRI, $.BER),
    "proseIRI": $._encode_explicit(_TagClass.context, 17, () => _encode_ProSeIRI, $.BER),
    "gcseIRI": $._encode_explicit(_TagClass.context, 18, () => _encode_GcseIRI, $.BER),
    "threeGPP33128DefinedIRI": $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_IRIContents(value, elGetter);
}


/* eslint-enable */
