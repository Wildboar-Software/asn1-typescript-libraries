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
import { ProblematicThereforeAnyType, _decode_ProblematicThereforeAnyType, _encode_ProblematicThereforeAnyType } from "../ISO-9506-MMS-1/ProblematicThereforeAnyType.ta.mjs";
// export { ProblematicThereforeAnyType, _decode_ProblematicThereforeAnyType, _encode_ProblematicThereforeAnyType } from "../ISO-9506-MMS-1/ProblematicThereforeAnyType.ta.mjs";


/**
 * @summary AdditionalService_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalService-Response  ::=  ProblematicThereforeAnyType
 * ```
 */
export
type AdditionalService_Response = ProblematicThereforeAnyType; // DefinedType

let _cached_decoder_for_AdditionalService_Response: $.ASN1Decoder<AdditionalService_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalService_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalService_Response (el: _Element): AdditionalService_Response {
    if (!_cached_decoder_for_AdditionalService_Response) { _cached_decoder_for_AdditionalService_Response = _decode_ProblematicThereforeAnyType; }
    return _cached_decoder_for_AdditionalService_Response(el);
}

let _cached_encoder_for_AdditionalService_Response: $.ASN1Encoder<AdditionalService_Response> | null = null;

/**
 * @summary Encodes a(n) AdditionalService_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalService_Response, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalService_Response (value: AdditionalService_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalService_Response) { _cached_encoder_for_AdditionalService_Response = _encode_ProblematicThereforeAnyType; }
    return _cached_encoder_for_AdditionalService_Response(value, elGetter);
}


/* eslint-enable */
