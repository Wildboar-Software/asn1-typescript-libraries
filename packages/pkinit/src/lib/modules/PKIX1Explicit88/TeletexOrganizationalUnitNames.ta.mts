/* eslint-disable */
import {
    ASN1SizeError,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TeletexOrganizationalUnitName, _decode_TeletexOrganizationalUnitName, _encode_TeletexOrganizationalUnitName } from "../PKIX1Explicit88/TeletexOrganizationalUnitName.ta.mjs";
import { ub_organizational_units } from "../PKIX1Explicit88/ub-organizational-units.va.mjs";
// export { TeletexOrganizationalUnitName, _decode_TeletexOrganizationalUnitName, _encode_TeletexOrganizationalUnitName } from "../PKIX1Explicit88/TeletexOrganizationalUnitName.ta.mjs";


/**
 * @summary TeletexOrganizationalUnitNames
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TeletexOrganizationalUnitNames  ::=  SEQUENCE SIZE
 *       (1..ub-organizational-units) OF TeletexOrganizationalUnitName
 * ```
 */
export
type TeletexOrganizationalUnitNames = TeletexOrganizationalUnitName[]; // SequenceOfType

let _cached_decoder_for_TeletexOrganizationalUnitNames: $.ASN1Decoder<TeletexOrganizationalUnitNames> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TeletexOrganizationalUnitNames
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TeletexOrganizationalUnitNames (el: _Element): TeletexOrganizationalUnitNames {
    if (!_cached_decoder_for_TeletexOrganizationalUnitNames) { _cached_decoder_for_TeletexOrganizationalUnitNames = $._decodeSequenceOf<TeletexOrganizationalUnitName>(() => _decode_TeletexOrganizationalUnitName); }
    const value = _cached_decoder_for_TeletexOrganizationalUnitNames(el);
    if (value.length < 1 || value.length > Number(ub_organizational_units)) {
        throw new ASN1SizeError("TeletexOrganizationalUnitNames violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_TeletexOrganizationalUnitNames: $.ASN1Encoder<TeletexOrganizationalUnitNames> | null = null;

/**
 * @summary Encodes a(n) TeletexOrganizationalUnitNames into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexOrganizationalUnitNames, encoded as an ASN.1 Element.
 */
export
function _encode_TeletexOrganizationalUnitNames (value: TeletexOrganizationalUnitNames, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TeletexOrganizationalUnitNames) { _cached_encoder_for_TeletexOrganizationalUnitNames = $._encodeSequenceOf<TeletexOrganizationalUnitName>(() => _encode_TeletexOrganizationalUnitName, $.BER); }
    return _cached_encoder_for_TeletexOrganizationalUnitNames(value, elGetter);
}


/* eslint-enable */
