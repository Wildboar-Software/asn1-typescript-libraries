/* eslint-disable */
import {
    type OCTET_STRING,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type E_mail_Address_List, _decode_E_mail_Address_List, _encode_E_mail_Address_List } from "../EmailPDU/E-mail-Address-List.ta.mjs";
// export { E_mail_Address_List, _decode_E_mail_Address_List, _encode_E_mail_Address_List } from "../EmailPDU/E-mail-Address-List.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../LI-PS-PDU/IPAddress.ta.mjs";
import { IP_Address_And_Port, _decode_IP_Address_And_Port, _encode_IP_Address_And_Port } from "../EmailPDU/IP-Address-And-Port.ta.mjs";
import * as LI_PS_PDU from "../LI-PS-PDU/index.mjs";
// export { IP_Address_And_Port, _decode_IP_Address_And_Port, _encode_IP_Address_And_Port } from "../EmailPDU/IP-Address-And-Port.ta.mjs";


/**
 * @summary Messaging_Party_Identity
 * @description
 *
 * One identity of a party on a unified-messaging event. Table 7 is the
 * reference for which parameters exist and where their formats are defined.
 *
 * Supply both the client address and the client port when they are available:
 * an address alone is not enough when the party uses NAPT. Server address and
 * port matter when the UM service is a set of interconnected servers that
 * exchange messages through NAPT. `party_qualifier` distinguishes the
 * originating side from the destination.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Party-Identity  ::=  CHOICE
 * {
 *     msisdn                  [0] OCTET STRING (SIZE (1..9)),
 *         -- MSISDN of the target, encoded in the same format as the AddressString
 *         -- parameters defined in MAP format 3GPP TS 29.002 [36], clause 17.7.8.
 *     e164-format             [1] OCTET STRING (SIZE (1..25)),
 *         -- E.164 address of the node in international format. Coded in the same format as
 *         -- the calling party number parameter of the ISUP (parameter part: EN 300 356 [23])
 *     email-address           [2] E-mail-Address-List,
 *         -- Note that as of version 3.13.1, this field may contain RFC 6530-compliant addresses.
 *     ...,
 *     ip-address              [3] LI-PS-PDU.IPAddress,
 *         -- IPAddress is defined by IETF RFC 791 [31] and RFC 8200 [34]
 *     alphanumeric            [4] UTF8String,
 *     ip-address-and-port [5] IP-Address-And-Port,
 *     imsi                    [6] OCTET STRING (SIZE (3..8)),
 *         -- International Mobile Subscriber Identity of the target, encoded in the same format as the
 *         -- TBCD-STRING parameter defined in MAP format 3GPP TS 29.002 [36], clause 17.7.8.
 *         -- It is described in 3GPP TS 23.003 [37] clause 2.2.
 *     imei                    [7] OCTET STRING (SIZE (8)),
 *         -- International Mobile Equipment Identity of the target, encoded in the same format as the
 *         -- TBCD-STRING parameter defined in MAP format 3GPP TS 29.002 [36], clause 17.7.8.
 *         -- It is defined in 3GPP TS 23.003 [37] clause 6.
 *     fax-url                 [8] OCTET STRING,
 *         -- see format defined in RFC 2806 [29].
 *     tel-url                 [9] OCTET STRING,
 *         -- see format used in 3GPP TS 33.108 [5], 3GPP TS 24.229 [30] and defined in RFC 2806 [29].
 *     modem-url               [10] OCTET STRING,
 *         -- see format defined in RFC 2806 [29].
 *     sip-uri                 [11] OCTET STRING,
 *         -- see format used in in 3GPP TS 33.108 [5] and defined in RFC 3261 [32].
 *     sips-uri                [12] OCTET STRING,
 *         -- see format defined in RFC 3261 [32].
 *     nai                     [13] OCTET STRING
 *         -- Network Access Identity of the party, encoded in the same format as used EPS
 *         -- domain in 3GPP TS 33.108 [5] and defined in RFC 7542 [33].
 * }
 * ```
 */
export
type Messaging_Party_Identity =
    /**
     * MSISDN of the target, 1 to 9 octets, encoded as the MAP `AddressString`
     * of 3GPP TS 29.002 clause 17.7.8. Recommendation ITU-T E.164.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6, table 7.
     */
    { msisdn: OCTET_STRING } /* CHOICE_ALT_ROOT */
    /**
     * E.164 address of the node in international format, 1 to 25 octets, coded
     * as the ISUP calling-party number parameter (parameter part of ETSI EN 300
     * 356).
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6, table 7.
     */
    | { e164_format: OCTET_STRING } /* CHOICE_ALT_ROOT */
    /**
     * One or more email addresses. IETF RFC 5322, IETF RFC 5321, IETF RFC 3696,
     * and IETF RFC 6530 define the form. From version 3.13.1, RFC 6530
     * addresses are allowed. Addresses are kept as intercepted and may be
     * unqualified (clause 7.2).
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 7.2 and 8.6.
     */
    | { email_address: E_mail_Address_List } /* CHOICE_ALT_ROOT */
    /**
     * IP address as in IETF RFC 791 (IPv4) or IETF RFC 8200 (IPv6). Prefer
     * `ip_address_and_port` when a port is available, because NAPT makes the
     * address alone insufficient.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6, table 7.
     */
    | { ip_address: LI_PS_PDU.IPAddress } /* CHOICE_ALT_EXT */
    /**
     * Alphanumeric party identifier. Use this only when the underlying network
     * protocol identifies the party identifier as alphanumeric.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6, table 7.
     */
    | { alphanumeric: UTF8String } /* CHOICE_ALT_EXT */
    /**
     * IP address plus port. The client address and port are the important
     * parts. Server address and port help when voice or multimedia messages
     * cross NAPT between boxes or operators. See `IP_Address_And_Port`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6, table 7.
     */
    | { ip_address_and_port: IP_Address_And_Port } /* CHOICE_ALT_EXT */
    /**
     * IMSI of the target, 3 to 8 octets, encoded as the MAP `TBCD-STRING` of
     * 3GPP TS 29.002 clause 17.7.8. Described in 3GPP TS 23.003 clause 2.2 and
     * Recommendation ITU-T E.212. This identity may be unavailable in the UM
     * system.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6, table 7.
     */
    | { imsi: OCTET_STRING } /* CHOICE_ALT_EXT */
    /**
     * IMEI of the target, 8 octets, encoded as the MAP `TBCD-STRING` of 3GPP TS
     * 29.002 clause 17.7.8. Defined in 3GPP TS 23.003 clause 6. This identity
     * may be unavailable in the UM system.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6, table 7.
     */
    | { imei: OCTET_STRING } /* CHOICE_ALT_EXT */
    /**
     * Fax URL in the form of IETF RFC 2806. Table 7 says these telephone-number
     * URL identities may be unavailable in the UM system.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6, table 7.
     */
    | { fax_url: OCTET_STRING } /* CHOICE_ALT_EXT */
    /**
     * Telephone URL. Format used in 3GPP TS 33.108 and 3GPP TS 24.229, and
     * defined in IETF RFC 2806. May be unavailable in the UM system.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6, table 7.
     */
    | { tel_url: OCTET_STRING } /* CHOICE_ALT_EXT */
    /**
     * Modem URL in the form of IETF RFC 2806. May be unavailable in the UM
     * system.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6, table 7.
     */
    | { modem_url: OCTET_STRING } /* CHOICE_ALT_EXT */
    /**
     * SIP URI defined in IETF RFC 3261, in the form used in 3GPP TS 33.108. May
     * be unavailable in the UM system.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6, table 7.
     */
    | { sip_uri: OCTET_STRING } /* CHOICE_ALT_EXT */
    /**
     * SIPS URI defined in IETF RFC 3261. May be unavailable in the UM system.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6, table 7.
     */
    | { sips_uri: OCTET_STRING } /* CHOICE_ALT_EXT */
    /**
     * Network access identity, in the form used for the EPS domain in 3GPP TS
     * 33.108 and defined in IETF RFC 7542. May be unavailable in the UM system.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6, table 7.
     */
    | { nai: OCTET_STRING } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Messaging_Party_Identity: $.ASN1Decoder<Messaging_Party_Identity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Messaging_Party_Identity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Messaging_Party_Identity (el: _Element): Messaging_Party_Identity {
    if (!_cached_decoder_for_Messaging_Party_Identity) { _cached_decoder_for_Messaging_Party_Identity = $._decode_extensible_choice<Messaging_Party_Identity>({
    "CONTEXT 0": [ "msisdn", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "e164_format", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "email_address", $._decode_implicit<E_mail_Address_List>(() => _decode_E_mail_Address_List) ],
    "CONTEXT 3": [ "ip_address", $._decode_implicit<LI_PS_PDU.IPAddress>(() => LI_PS_PDU._decode_IPAddress) ],
    "CONTEXT 4": [ "alphanumeric", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 5": [ "ip_address_and_port", $._decode_implicit<IP_Address_And_Port>(() => _decode_IP_Address_And_Port) ],
    "CONTEXT 6": [ "imsi", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 7": [ "imei", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 8": [ "fax_url", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 9": [ "tel_url", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 10": [ "modem_url", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 11": [ "sip_uri", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 12": [ "sips_uri", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 13": [ "nai", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    const _value = _cached_decoder_for_Messaging_Party_Identity(el);
    if ("msisdn" in _value && _value.msisdn !== undefined) {
        const _alt = _value.msisdn;
        if (_alt.length < 1 || _alt.length > 9) {
            throw new ASN1SizeError("Messaging_Party_Identity.msisdn violates SIZE constraint");
        }
    }
    if ("e164_format" in _value && _value.e164_format !== undefined) {
        const _alt = _value.e164_format;
        if (_alt.length < 1 || _alt.length > 25) {
            throw new ASN1SizeError("Messaging_Party_Identity.e164_format violates SIZE constraint");
        }
    }
    if ("imsi" in _value && _value.imsi !== undefined) {
        const _alt = _value.imsi;
        if (_alt.length < 3 || _alt.length > 8) {
            throw new ASN1SizeError("Messaging_Party_Identity.imsi violates SIZE constraint");
        }
    }
    if ("imei" in _value && _value.imei !== undefined) {
        const _alt = _value.imei;
        if (_alt.length < 8 || _alt.length > 8) {
            throw new ASN1SizeError("Messaging_Party_Identity.imei violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_Messaging_Party_Identity: $.ASN1Encoder<Messaging_Party_Identity> | null = null;

/**
 * @summary Encodes a(n) Messaging_Party_Identity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Messaging_Party_Identity, encoded as an ASN.1 Element.
 */
export
function _encode_Messaging_Party_Identity (value: Messaging_Party_Identity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Messaging_Party_Identity) { _cached_encoder_for_Messaging_Party_Identity = $._encode_choice<Messaging_Party_Identity>({
    "msisdn": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "e164_format": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "email_address": $._encode_implicit(_TagClass.context, 2, () => _encode_E_mail_Address_List, $.BER),
    "ip_address": $._encode_implicit(_TagClass.context, 3, () => LI_PS_PDU._encode_IPAddress, $.BER),
    "alphanumeric": $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER),
    "ip_address_and_port": $._encode_implicit(_TagClass.context, 5, () => _encode_IP_Address_And_Port, $.BER),
    "imsi": $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER),
    "imei": $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER),
    "fax_url": $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER),
    "tel_url": $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER),
    "modem_url": $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER),
    "sip_uri": $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER),
    "sips_uri": $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER),
    "nai": $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_Messaging_Party_Identity(value, elGetter);
}


/* eslint-enable */
