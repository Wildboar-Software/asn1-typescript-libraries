import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary IPSSPCapabilities
 * @description
 *
 * gsmSRF resources available in the (G)MSC. Two parts: a standard part
 * (optional CAP capabilities the gsmSCF shall recognise, but not necessarily
 * support) and a bilateral part (operator/vendor specific, not specified here).
 *
 * The last octet of the standard part has bit 7 = 0; bit 7 = 1 means the
 * standard part continues. In CAP, octet 1 bit 7 = 1 is reserved (standard part
 * is one octet). (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * Octet 1 (standard part for CAP), bit 0 = IPRoutingAddress, bit 1 = VoiceBack,
 * bit 2 = VoiceInformation via speech recognition, bit 3 = VoiceInformation via
 * voice recognition, bit 4 = text-to-speech announcements; bits 5–6 reserved;
 * bit 7 = 0 end of standard part.
 *
 * Octets 2 to 4: bilateral part.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPSSPCapabilities {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 *  bound.&minIPSSPCapabilitiesLength .. bound.&maxIPSSPCapabilitiesLength))
 * ```
 *
 */
export type IPSSPCapabilities = OCTET_STRING;
export const _decode_IPSSPCapabilities = $._decodeOctetString;
export const _encode_IPSSPCapabilities = $._encodeOctetString;
