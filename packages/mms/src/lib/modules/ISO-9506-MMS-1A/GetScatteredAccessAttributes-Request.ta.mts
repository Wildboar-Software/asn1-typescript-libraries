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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";


/**
 * @summary GetScatteredAccessAttributes_Request
 * @description
 *
 * Confirmed request: Scattered Access Name of
 * the object whose attributes are requested. If
 * this name refers to a Named Variable instead,
 * Error Class ACCESS / OBJECT-NON-EXISTENT.
 * CBB `vsca`. Informative Annex E.
 *
 * [ISO 9506-1:2003 Annex E, E.4.1.1.1]
 * [ISO 9506-2:2003 Annex E, E.3.1]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetScatteredAccessAttributes-Request  ::=  ObjectName
 * ```
 */
export
type GetScatteredAccessAttributes_Request = ObjectName; // DefinedType

let _cached_decoder_for_GetScatteredAccessAttributes_Request: $.ASN1Decoder<GetScatteredAccessAttributes_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetScatteredAccessAttributes_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetScatteredAccessAttributes_Request (el: _Element): GetScatteredAccessAttributes_Request {
    if (!_cached_decoder_for_GetScatteredAccessAttributes_Request) { _cached_decoder_for_GetScatteredAccessAttributes_Request = _decode_ObjectName; }
    return _cached_decoder_for_GetScatteredAccessAttributes_Request(el);
}

let _cached_encoder_for_GetScatteredAccessAttributes_Request: $.ASN1Encoder<GetScatteredAccessAttributes_Request> | null = null;

/**
 * @summary Encodes a(n) GetScatteredAccessAttributes_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetScatteredAccessAttributes_Request, encoded as an ASN.1 Element.
 */
export
function _encode_GetScatteredAccessAttributes_Request (value: GetScatteredAccessAttributes_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetScatteredAccessAttributes_Request) { _cached_encoder_for_GetScatteredAccessAttributes_Request = _encode_ObjectName; }
    return _cached_encoder_for_GetScatteredAccessAttributes_Request(value, elGetter);
}


/* eslint-enable */
