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
import { Cause, _decode_Cause, _encode_Cause } from "../Core-INAP-CS1-DataTypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../Core-INAP-CS1-DataTypes/Cause.ta.mjs";


/**
 * @summary ReleaseCallArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReleaseCallArg      ::=  Cause
 * ```
 */
export
type ReleaseCallArg = Cause; // DefinedType

let _cached_decoder_for_ReleaseCallArg: $.ASN1Decoder<ReleaseCallArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseCallArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReleaseCallArg (el: _Element): ReleaseCallArg {
    if (!_cached_decoder_for_ReleaseCallArg) { _cached_decoder_for_ReleaseCallArg = _decode_Cause; }
    return _cached_decoder_for_ReleaseCallArg(el);
}

let _cached_encoder_for_ReleaseCallArg: $.ASN1Encoder<ReleaseCallArg> | null = null;

/**
 * @summary Encodes a(n) ReleaseCallArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseCallArg, encoded as an ASN.1 Element.
 */
export
function _encode_ReleaseCallArg (value: ReleaseCallArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReleaseCallArg) { _cached_encoder_for_ReleaseCallArg = _encode_Cause; }
    return _cached_encoder_for_ReleaseCallArg(value, elGetter);
}


/* eslint-enable */
