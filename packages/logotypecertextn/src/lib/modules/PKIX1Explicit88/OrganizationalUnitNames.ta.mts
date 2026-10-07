/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_organizational_units } from "../PKIX1Explicit88/ub-organizational-units.va.mjs";
import { OrganizationalUnitName, _decode_OrganizationalUnitName, _encode_OrganizationalUnitName } from "../PKIX1Explicit88/OrganizationalUnitName.ta.mjs";
// export { OrganizationalUnitName, _decode_OrganizationalUnitName, _encode_OrganizationalUnitName } from "../PKIX1Explicit88/OrganizationalUnitName.ta.mjs";


/**
 * @summary OrganizationalUnitNames
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OrganizationalUnitNames  ::=  SEQUENCE SIZE (1..ub-organizational-units)
 *                              OF OrganizationalUnitName
 * ```
 */
export
type OrganizationalUnitNames = OrganizationalUnitName[]; // SequenceOfType

let _cached_decoder_for_OrganizationalUnitNames: $.ASN1Decoder<OrganizationalUnitNames> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OrganizationalUnitNames
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OrganizationalUnitNames (el: _Element): OrganizationalUnitNames {
    if (!_cached_decoder_for_OrganizationalUnitNames) { _cached_decoder_for_OrganizationalUnitNames = $._decodeSequenceOf<OrganizationalUnitName>(() => _decode_OrganizationalUnitName); }
    const decoded = _cached_decoder_for_OrganizationalUnitNames(el);
    if (decoded.length < 1 || decoded.length > Number(ub_organizational_units)) {
        throw new ASN1SizeError("OrganizationalUnitNames violates SIZE constraint");
    }
    return decoded;
}

let _cached_encoder_for_OrganizationalUnitNames: $.ASN1Encoder<OrganizationalUnitNames> | null = null;

/**
 * @summary Encodes a(n) OrganizationalUnitNames into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrganizationalUnitNames, encoded as an ASN.1 Element.
 */
export
function _encode_OrganizationalUnitNames (value: OrganizationalUnitNames, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OrganizationalUnitNames) { _cached_encoder_for_OrganizationalUnitNames = $._encodeSequenceOf<OrganizationalUnitName>(() => _encode_OrganizationalUnitName, $.BER); }
    return _cached_encoder_for_OrganizationalUnitNames(value, elGetter);
}


/* eslint-enable */
