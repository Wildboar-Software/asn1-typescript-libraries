/* eslint-disable */
import {
    OCTET_STRING,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IGCS_Address_ipAddress, _decode_IGCS_Address_ipAddress, _encode_IGCS_Address_ipAddress } from "../SCPP-MESSAGES/IGCS-Address-ipAddress.ta.mjs";
import { IGCS_Address_ip6Address, _decode_IGCS_Address_ip6Address, _encode_IGCS_Address_ip6Address } from "../SCPP-MESSAGES/IGCS-Address-ip6Address.ta.mjs";


/**
 * @summary IGCS_Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IGCS-Address  ::=  CHOICE {
 *   ipAddress
 *     SEQUENCE {ip    OCTET STRING(SIZE (4)),
 *               port  INTEGER(0..65535)},
 *   ip6Address
 *     SEQUENCE {ip    OCTET STRING(SIZE (16)),
 *               port  INTEGER(0..65535)},
 *   emailAddress        IA5String(SIZE (1..512)),
 *   nonStandardAddress  OCTET STRING,
 *   ...
 * }
 * ```
 */
export
type IGCS_Address =
    { ipAddress: IGCS_Address_ipAddress } /* CHOICE_ALT_ROOT */
    | { ip6Address: IGCS_Address_ip6Address } /* CHOICE_ALT_ROOT */
    | { emailAddress: IA5String } /* CHOICE_ALT_ROOT */
    | { nonStandardAddress: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IGCS_Address: $.ASN1Decoder<IGCS_Address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IGCS_Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IGCS_Address (el: _Element): IGCS_Address {
    if (!_cached_decoder_for_IGCS_Address) { _cached_decoder_for_IGCS_Address = $._decode_extensible_choice<IGCS_Address>({
    "CONTEXT 0": [ "ipAddress", _decode_IGCS_Address_ipAddress ],
    "CONTEXT 1": [ "ip6Address", _decode_IGCS_Address_ip6Address ],
    "CONTEXT 2": [ "emailAddress", (el: _Element): IA5String => {
        const value = $._decodeIA5String(el);
        if (value.length < 1 || value.length > 512) {
            throw new ASN1SizeError("IGCS_Address.emailAddress violates SIZE constraint");
        }
        return value;
    } ],
    "CONTEXT 3": [ "nonStandardAddress", $._decodeOctetString ]
}); }
    return _cached_decoder_for_IGCS_Address(el);
}

let _cached_encoder_for_IGCS_Address: $.ASN1Encoder<IGCS_Address> | null = null;

/**
 * @summary Encodes a(n) IGCS_Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IGCS_Address, encoded as an ASN.1 Element.
 */
export
function _encode_IGCS_Address (value: IGCS_Address, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IGCS_Address) { _cached_encoder_for_IGCS_Address = $._encode_choice<IGCS_Address>({
    "ipAddress": $._encode_implicit(_TagClass.context, 0, () => _encode_IGCS_Address_ipAddress, $.BER),
    "ip6Address": $._encode_implicit(_TagClass.context, 1, () => _encode_IGCS_Address_ip6Address, $.BER),
    "emailAddress": $._encode_implicit(_TagClass.context, 2, () => $._encodeIA5String, $.BER),
    "nonStandardAddress": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_IGCS_Address(value, elGetter);
}


/* eslint-enable */
