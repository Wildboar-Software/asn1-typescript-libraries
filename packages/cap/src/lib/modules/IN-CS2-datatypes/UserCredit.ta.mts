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
import { Credit, _decode_Credit, _encode_Credit } from "../IN-CS2-datatypes/Credit.ta.mjs";
// export { Credit, _decode_Credit, _encode_Credit } from "../IN-CS2-datatypes/Credit.ta.mjs";


/**
 * @summary UserCredit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserCredit{PARAMETERS-BOUND:bound}  ::= 
 *   Credit{bound}
 * ```
 */
export
type UserCredit = Credit; // DefinedType

let _cached_decoder_for_UserCredit: $.ASN1Decoder<UserCredit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserCredit
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserCredit (el: _Element): UserCredit {
    if (!_cached_decoder_for_UserCredit) { _cached_decoder_for_UserCredit = _decode_Credit; }
    return _cached_decoder_for_UserCredit(el);
}

let _cached_encoder_for_UserCredit: $.ASN1Encoder<UserCredit> | null = null;

/**
 * @summary Encodes a(n) UserCredit into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserCredit, encoded as an ASN.1 Element.
 */
export
function _encode_UserCredit (value: UserCredit, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserCredit) { _cached_encoder_for_UserCredit = _encode_Credit; }
    return _cached_encoder_for_UserCredit(value, elGetter);
}


/* eslint-enable */
