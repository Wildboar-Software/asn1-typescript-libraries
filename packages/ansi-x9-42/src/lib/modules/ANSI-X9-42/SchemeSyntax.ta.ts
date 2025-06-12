/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    SchemeIdentifier,
    _decode_SchemeIdentifier,
    _encode_SchemeIdentifier,
} from "../ANSI-X9-42/SchemeIdentifier.ta.js";
import {
    SchemeNumber,
    _decode_SchemeNumber,
    _encode_SchemeNumber,
} from "../ANSI-X9-42/SchemeNumber.ta.js";
import {
    SchemeOID,
    _decode_SchemeOID,
    _encode_SchemeOID,
} from "../ANSI-X9-42/SchemeOID.ta.js";
export {
    KeyDerivationMethod,
    _decode_KeyDerivationMethod,
    _encode_KeyDerivationMethod,
} from "../ANSI-X9-42/KeyDerivationMethod.ta.js";
export {
    SchemeIdentifier,
    _decode_SchemeIdentifier,
    _encode_SchemeIdentifier,
} from "../ANSI-X9-42/SchemeIdentifier.ta.js";
export {
    dhEphem_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dhHybrid1_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dhHybrid2_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dhHybridOneFlow_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dhOneFlow_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dhStatic_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    mqv1_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    mqv2_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SchemeNumber,
    SchemeNumber_dhEphem_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SchemeNumber_dhHybrid1_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SchemeNumber_dhHybrid2_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SchemeNumber_dhHybridOneFlow_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SchemeNumber_dhOneFlow_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SchemeNumber_dhStatic_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SchemeNumber_mqv1_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SchemeNumber_mqv2_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_SchemeNumber,
    _encode_SchemeNumber,
    _enum_for_SchemeNumber,
} from "../ANSI-X9-42/SchemeNumber.ta.js";
export {
    SchemeOID,
    _decode_SchemeOID,
    _encode_SchemeOID,
} from "../ANSI-X9-42/SchemeOID.ta.js";

/* START_OF_SYMBOL_DEFINITION SchemeSyntax */
/**
 * @summary SchemeSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchemeSyntax { KeyDerivationMethod: kdm }  ::=  CHOICE {
 * schemeId     SchemeIdentifier,
 * oid            SchemeOID,
 * number    SchemeNumber
 * } (CONSTRAINED BY { KeyDerivationMethod: kdm } )
 * ```
 */
export type SchemeSyntax =
    | { schemeId: SchemeIdentifier } /* CHOICE_ALT_ROOT */
    | { oid: SchemeOID } /* CHOICE_ALT_ROOT */
    | { number_: SchemeNumber } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SchemeSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SchemeSyntax */
let _cached_decoder_for_SchemeSyntax: $.ASN1Decoder<SchemeSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SchemeSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_SchemeSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) SchemeSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchemeSyntax} The decoded data structure.
 */
export function _decode_SchemeSyntax(el: _Element) {
    if (!_cached_decoder_for_SchemeSyntax) {
        _cached_decoder_for_SchemeSyntax = $._decode_inextensible_choice<SchemeSyntax>(
            {
                "UNIVERSAL 16": ["schemeId", _decode_SchemeIdentifier],
                "UNIVERSAL 6": ["oid", _decode_SchemeOID],
                "UNIVERSAL 10": ["number_", _decode_SchemeNumber],
            }
        );
    }
    return _cached_decoder_for_SchemeSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SchemeSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SchemeSyntax */
let _cached_encoder_for_SchemeSyntax: $.ASN1Encoder<SchemeSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SchemeSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_SchemeSyntax */
/**
 * @summary Encodes a(n) SchemeSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchemeSyntax, encoded as an ASN.1 Element.
 */
export function _encode_SchemeSyntax(
    value: SchemeSyntax,
    elGetter: $.ASN1Encoder<SchemeSyntax>
) {
    if (!_cached_encoder_for_SchemeSyntax) {
        _cached_encoder_for_SchemeSyntax = $._encode_choice<SchemeSyntax>(
            {
                schemeId: _encode_SchemeIdentifier,
                oid: _encode_SchemeOID,
                number_: _encode_SchemeNumber,
            },
            $.BER
        );
    }
    return _cached_encoder_for_SchemeSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SchemeSyntax */

/* eslint-enable */
