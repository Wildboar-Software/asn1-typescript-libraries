/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ACSE_apdu, _decode_ACSE_apdu, _encode_ACSE_apdu } from "../ACSE-1/ACSE-apdu.ta.mjs";

/**
 * @summary AcseAPDU
 * @description
 *
 * An ACSE APDU as defined by `ACSE-apdu` in ITU-T X.227 §9 (ECMA-165 §11.3.3.5
 * Table 35). The services are associate request and response, release request
 * and response, and abort (§6.5). Carried when the network protocol profile is
 * `acse` (19), or inside a DSE remote-operations portion (§8.4). A PINX that
 * supports ACSE recognises received APDUs and rejects an unrecognised
 * association context name (§8.3). Further behaviour is supplementary-service
 * specific.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AcseAPDU  ::=  ACSE-apdu
 * ```
 */
export
type AcseAPDU = ACSE_apdu; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AcseAPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AcseAPDU: $.ASN1Decoder<AcseAPDU> = _decode_ACSE_apdu;

/**
 * @summary Encodes a(n) AcseAPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcseAPDU, encoded as an ASN.1 Element.
 */
export const _encode_AcseAPDU: $.ASN1Encoder<AcseAPDU> = _encode_ACSE_apdu;

/* eslint-enable */
