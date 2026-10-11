/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { Conf_CC_PDU, _decode_Conf_CC_PDU, _encode_Conf_CC_PDU } from "../CONF-HI3-IMS/Conf-CC-PDU.ta.mjs";
// export { Voip_CC_PDU, _decode_Voip_CC_PDU, _encode_Voip_CC_PDU } from "../VoIP-HI3-IMS/Voip-CC-PDU.ta.mjs";
// export { Gcse_CC_PDU, _decode_Gcse_CC_PDU, _encode_Gcse_CC_PDU } from "../GCSE-HI3/Gcse-CC-PDU.ta.mjs";
// export { CSvoice_CC_PDU, _decode_CSvoice_CC_PDU, _encode_CSvoice_CC_PDU } from "../CSvoice-HI3-IP/CSvoice-CC-PDU.ta.mjs";
// export { CCPayload, _decode_CCPayload, _encode_CCPayload } from "../TS33128Payloads/CCPayload.ta.mjs";


/**
 * @summary CCContents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCContents  ::=  CHOICE
 *     -- Any of these choices may be commented out if they are not being used, see clause A.3
 * {
 *     -- tag [0] deprecated in version15, ETSI TS 102 232-1 V3.3.1 (2013-02)
 *     emailCC                     [1] EmailPDU.EmailCC,
 *     iPCC                        [2] IPAccessPDU.IPCC,
 *     -- tag [3] not used
 *     uMTSCC                      [4] OCTET STRING,
 *     ...,
 *     -- tag [5] deprecated in version15, ETSI TS 102 232-1 V3.3.1 (2013-02)
 *     l2CC                        [6] L2AccessPDU.L2CC,
 *     tTRAFFIC-1                  [7] TS101909201.TTRAFFIC,
 *     cTTRAFFIC-1                 [8] TS101909201.CTTRAFFIC,
 *     tTRAFFIC-2                  [9] TS101909202.TTRAFFIC,
 *     cTTRAFFIC-2                 [10] TS101909202.CTTRAFFIC,
 *     pstnIsdnCC                  [11] PstnIsdnPDU.PstnIsdnCC,
 *     iPMMCC                      [12] IPMultimediaPDU.IPMMCC,
 *     -- tag [13] deprecated in version32, ETSI TS 102 232-1 V3.24.1 (2021-07)
 *     messagingCC                 [14] EmailPDU.MessagingCC,
 *     ePSCC                       [15] OCTET STRING,
 *     uMTSCC-CC-PDU               [16] Umts-HI3-PS.CC-PDU,
 *     ePSCC-CC-PDU                [17] Eps-HI3-PS.CC-PDU,
 *     messagingMMCC               [18] EmailPDU.MessagingMMCC,
 *     confCC-CC-PDU               [19] CONF-HI3-IMS.Conf-CC-PDU,
 *     voipCC-CC-PDU               [20] VoIP-HI3-IMS.Voip-CC-PDU,
 *     gcseCC-CC-PDU               [21] GCSE-HI3.Gcse-CC-PDU,
 *     cSvoice-CC-PDU              [22] CSvoice-HI3-IP.CSvoice-CC-PDU,
 *     threeGPP33128DefinedCC      [23] OCTET STRING (CONTAINING TS33128Payloads.CCPayload)
 * }
 * ```
 */
export
type CCContents =
    { emailCC: EmailPDU.EmailCC } /* CHOICE_ALT_ROOT */
    | { iPCC: IPAccessPDU.IPCC } /* CHOICE_ALT_ROOT */
    | { uMTSCC: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { l2CC: L2AccessPDU.L2CC } /* CHOICE_ALT_EXT */
    | { tTRAFFIC_1: TS101909201.TTRAFFIC } /* CHOICE_ALT_EXT */
    | { cTTRAFFIC_1: TS101909201.CTTRAFFIC } /* CHOICE_ALT_EXT */
    | { tTRAFFIC_2: TS101909202.TTRAFFIC } /* CHOICE_ALT_EXT */
    | { cTTRAFFIC_2: TS101909202.CTTRAFFIC } /* CHOICE_ALT_EXT */
    | { pstnIsdnCC: PstnIsdnPDU.PstnIsdnCC } /* CHOICE_ALT_EXT */
    | { iPMMCC: IPMultimediaPDU.IPMMCC } /* CHOICE_ALT_EXT */
    | { messagingCC: EmailPDU.MessagingCC } /* CHOICE_ALT_EXT */
    | { ePSCC: OCTET_STRING } /* CHOICE_ALT_EXT */
    | { uMTSCC_CC_PDU: Umts_HI3_PS.CC_PDU } /* CHOICE_ALT_EXT */
    | { ePSCC_CC_PDU: Eps_HI3_PS.CC_PDU } /* CHOICE_ALT_EXT */
    | { messagingMMCC: EmailPDU.MessagingMMCC } /* CHOICE_ALT_EXT */
    | { confCC_CC_PDU: CONF_HI3_IMS.Conf_CC_PDU } /* CHOICE_ALT_EXT */
    | { voipCC_CC_PDU: VoIP_HI3_IMS.Voip_CC_PDU } /* CHOICE_ALT_EXT */
    | { gcseCC_CC_PDU: GCSE_HI3.Gcse_CC_PDU } /* CHOICE_ALT_EXT */
    | { cSvoice_CC_PDU: CSvoice_HI3_IP.CSvoice_CC_PDU } /* CHOICE_ALT_EXT */
    | { threeGPP33128DefinedCC: OCTET_STRING } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CCContents: $.ASN1Decoder<CCContents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCContents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCContents (el: _Element): CCContents {
    if (!_cached_decoder_for_CCContents) { _cached_decoder_for_CCContents = $._decode_extensible_choice<CCContents>({
    "CONTEXT 1": [ "emailCC", $._decode_implicit<EmailPDU.EmailCC>(() => EmailPDU._decode_EmailCC) ],
    "CONTEXT 2": [ "iPCC", $._decode_implicit<IPAccessPDU.IPCC>(() => IPAccessPDU._decode_IPCC) ],
    "CONTEXT 4": [ "uMTSCC", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 6": [ "l2CC", $._decode_implicit<L2AccessPDU.L2CC>(() => L2AccessPDU._decode_L2CC) ],
    "CONTEXT 7": [ "tTRAFFIC_1", $._decode_implicit<TS101909201.TTRAFFIC>(() => TS101909201._decode_TTRAFFIC) ],
    "CONTEXT 8": [ "cTTRAFFIC_1", $._decode_implicit<TS101909201.CTTRAFFIC>(() => TS101909201._decode_CTTRAFFIC) ],
    "CONTEXT 9": [ "tTRAFFIC_2", $._decode_implicit<TS101909202.TTRAFFIC>(() => TS101909202._decode_TTRAFFIC) ],
    "CONTEXT 10": [ "cTTRAFFIC_2", $._decode_implicit<TS101909202.CTTRAFFIC>(() => TS101909202._decode_CTTRAFFIC) ],
    "CONTEXT 11": [ "pstnIsdnCC", $._decode_implicit<PstnIsdnPDU.PstnIsdnCC>(() => PstnIsdnPDU._decode_PstnIsdnCC) ],
    "CONTEXT 12": [ "iPMMCC", $._decode_implicit<IPMultimediaPDU.IPMMCC>(() => IPMultimediaPDU._decode_IPMMCC) ],
    "CONTEXT 14": [ "messagingCC", $._decode_implicit<EmailPDU.MessagingCC>(() => EmailPDU._decode_MessagingCC) ],
    "CONTEXT 15": [ "ePSCC", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 16": [ "uMTSCC_CC_PDU", $._decode_implicit<Umts_HI3_PS.CC_PDU>(() => Umts_HI3_PS._decode_CC_PDU) ],
    "CONTEXT 17": [ "ePSCC_CC_PDU", $._decode_implicit<Eps_HI3_PS.CC_PDU>(() => Eps_HI3_PS._decode_CC_PDU) ],
    "CONTEXT 18": [ "messagingMMCC", $._decode_implicit<EmailPDU.MessagingMMCC>(() => EmailPDU._decode_MessagingMMCC) ],
    "CONTEXT 19": [ "confCC_CC_PDU", $._decode_implicit<CONF_HI3_IMS.Conf_CC_PDU>(() => CONF_HI3_IMS._decode_Conf_CC_PDU) ],
    "CONTEXT 20": [ "voipCC_CC_PDU", $._decode_implicit<VoIP_HI3_IMS.Voip_CC_PDU>(() => VoIP_HI3_IMS._decode_Voip_CC_PDU) ],
    "CONTEXT 21": [ "gcseCC_CC_PDU", $._decode_implicit<GCSE_HI3.Gcse_CC_PDU>(() => GCSE_HI3._decode_Gcse_CC_PDU) ],
    "CONTEXT 22": [ "cSvoice_CC_PDU", $._decode_implicit<CSvoice_HI3_IP.CSvoice_CC_PDU>(() => CSvoice_HI3_IP._decode_CSvoice_CC_PDU) ],
    "CONTEXT 23": [ "threeGPP33128DefinedCC", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_CCContents(el);
}

let _cached_encoder_for_CCContents: $.ASN1Encoder<CCContents> | null = null;

/**
 * @summary Encodes a(n) CCContents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCContents, encoded as an ASN.1 Element.
 */
export
function _encode_CCContents (value: CCContents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCContents) { _cached_encoder_for_CCContents = $._encode_choice<CCContents>({
    "emailCC": $._encode_implicit(_TagClass.context, 1, () => EmailPDU._encode_EmailCC, $.BER),
    "iPCC": $._encode_implicit(_TagClass.context, 2, () => IPAccessPDU._encode_IPCC, $.BER),
    "uMTSCC": $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER),
    "l2CC": $._encode_implicit(_TagClass.context, 6, () => L2AccessPDU._encode_L2CC, $.BER),
    "tTRAFFIC_1": $._encode_implicit(_TagClass.context, 7, () => TS101909201._encode_TTRAFFIC, $.BER),
    "cTTRAFFIC_1": $._encode_implicit(_TagClass.context, 8, () => TS101909201._encode_CTTRAFFIC, $.BER),
    "tTRAFFIC_2": $._encode_implicit(_TagClass.context, 9, () => TS101909202._encode_TTRAFFIC, $.BER),
    "cTTRAFFIC_2": $._encode_implicit(_TagClass.context, 10, () => TS101909202._encode_CTTRAFFIC, $.BER),
    "pstnIsdnCC": $._encode_implicit(_TagClass.context, 11, () => PstnIsdnPDU._encode_PstnIsdnCC, $.BER),
    "iPMMCC": $._encode_implicit(_TagClass.context, 12, () => IPMultimediaPDU._encode_IPMMCC, $.BER),
    "messagingCC": $._encode_implicit(_TagClass.context, 14, () => EmailPDU._encode_MessagingCC, $.BER),
    "ePSCC": $._encode_implicit(_TagClass.context, 15, () => $._encodeOctetString, $.BER),
    "uMTSCC_CC_PDU": $._encode_implicit(_TagClass.context, 16, () => Umts_HI3_PS._encode_CC_PDU, $.BER),
    "ePSCC_CC_PDU": $._encode_implicit(_TagClass.context, 17, () => Eps_HI3_PS._encode_CC_PDU, $.BER),
    "messagingMMCC": $._encode_implicit(_TagClass.context, 18, () => EmailPDU._encode_MessagingMMCC, $.BER),
    "confCC_CC_PDU": $._encode_implicit(_TagClass.context, 19, () => CONF_HI3_IMS._encode_Conf_CC_PDU, $.BER),
    "voipCC_CC_PDU": $._encode_implicit(_TagClass.context, 20, () => VoIP_HI3_IMS._encode_Voip_CC_PDU, $.BER),
    "gcseCC_CC_PDU": $._encode_implicit(_TagClass.context, 21, () => GCSE_HI3._encode_Gcse_CC_PDU, $.BER),
    "cSvoice_CC_PDU": $._encode_implicit(_TagClass.context, 22, () => CSvoice_HI3_IP._encode_CSvoice_CC_PDU, $.BER),
    "threeGPP33128DefinedCC": $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_CCContents(value, elGetter);
}


/* eslint-enable */
