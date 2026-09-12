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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary ChangeAccessControl_Error
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeAccessControl-Error  ::=  Unsigned32
 * ```
 */
export
type ChangeAccessControl_Error = Unsigned32; // DefinedType

let _cached_decoder_for_ChangeAccessControl_Error: $.ASN1Decoder<ChangeAccessControl_Error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeAccessControl_Error
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeAccessControl_Error (el: _Element): ChangeAccessControl_Error {
    if (!_cached_decoder_for_ChangeAccessControl_Error) { _cached_decoder_for_ChangeAccessControl_Error = _decode_Unsigned32; }
    return _cached_decoder_for_ChangeAccessControl_Error(el);
}

let _cached_encoder_for_ChangeAccessControl_Error: $.ASN1Encoder<ChangeAccessControl_Error> | null = null;

/**
 * @summary Encodes a(n) ChangeAccessControl_Error into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeAccessControl_Error, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeAccessControl_Error (value: ChangeAccessControl_Error, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeAccessControl_Error) { _cached_encoder_for_ChangeAccessControl_Error = _encode_Unsigned32; }
    return _cached_encoder_for_ChangeAccessControl_Error(value, elGetter);
}


/* eslint-enable */
