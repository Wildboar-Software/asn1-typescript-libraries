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
 * @summary DefineEventEnrollment_Error
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefineEventEnrollment-Error  ::=  ObjectName
 * ```
 */
export
type DefineEventEnrollment_Error = ObjectName; // DefinedType

let _cached_decoder_for_DefineEventEnrollment_Error: $.ASN1Decoder<DefineEventEnrollment_Error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefineEventEnrollment_Error
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefineEventEnrollment_Error (el: _Element): DefineEventEnrollment_Error {
    if (!_cached_decoder_for_DefineEventEnrollment_Error) { _cached_decoder_for_DefineEventEnrollment_Error = _decode_ObjectName; }
    return _cached_decoder_for_DefineEventEnrollment_Error(el);
}

let _cached_encoder_for_DefineEventEnrollment_Error: $.ASN1Encoder<DefineEventEnrollment_Error> | null = null;

/**
 * @summary Encodes a(n) DefineEventEnrollment_Error into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefineEventEnrollment_Error, encoded as an ASN.1 Element.
 */
export
function _encode_DefineEventEnrollment_Error (value: DefineEventEnrollment_Error, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefineEventEnrollment_Error) { _cached_encoder_for_DefineEventEnrollment_Error = _encode_ObjectName; }
    return _cached_encoder_for_DefineEventEnrollment_Error(value, elGetter);
}


/* eslint-enable */
