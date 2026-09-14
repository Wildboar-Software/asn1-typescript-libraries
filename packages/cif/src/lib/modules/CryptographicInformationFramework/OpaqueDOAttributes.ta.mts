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
import { ObjectValue, _get_decoder_for_ObjectValue, _get_encoder_for_ObjectValue } from "../CryptographicInformationFramework/ObjectValue.ta.mjs";
// export { ObjectValue, _get_decoder_for_ObjectValue, _get_encoder_for_ObjectValue } from "../CryptographicInformationFramework/ObjectValue.ta.mjs";
// export { CIO_OPAQUE } from "../CryptographicInformationFramework/CIO-OPAQUE.oca.mjs";


/**
 * @summary OpaqueDOAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OpaqueDOAttributes  ::=  ObjectValue {CIO-OPAQUE.&Type}
 * ```
 */
export
type OpaqueDOAttributes = ObjectValue<_Element>; // DefinedType

let _cached_decoder_for_OpaqueDOAttributes: $.ASN1Decoder<OpaqueDOAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OpaqueDOAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OpaqueDOAttributes (el: _Element): OpaqueDOAttributes {
    if (!_cached_decoder_for_OpaqueDOAttributes) { _cached_decoder_for_OpaqueDOAttributes = _get_decoder_for_ObjectValue<_Element>($._decodeAny); }
    return _cached_decoder_for_OpaqueDOAttributes(el);
}

let _cached_encoder_for_OpaqueDOAttributes: $.ASN1Encoder<OpaqueDOAttributes> | null = null;

/**
 * @summary Encodes a(n) OpaqueDOAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OpaqueDOAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_OpaqueDOAttributes (value: OpaqueDOAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OpaqueDOAttributes) { _cached_encoder_for_OpaqueDOAttributes = _get_encoder_for_ObjectValue<_Element>($._encodeAny); }
    return _cached_encoder_for_OpaqueDOAttributes(value, elGetter);
}


/* eslint-enable */
