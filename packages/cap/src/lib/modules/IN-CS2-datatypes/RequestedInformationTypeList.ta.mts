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
import { RequestedInformationType, _enum_for_RequestedInformationType, _decode_RequestedInformationType, _encode_RequestedInformationType } from "../IN-CS2-datatypes/RequestedInformationType.ta.mjs";
// export { RequestedInformationType, _enum_for_RequestedInformationType, RequestedInformationType_callAttemptElapsedTime /* IMPORTED_LONG_ENUMERATION_ITEM */, callAttemptElapsedTime /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedInformationType_callStopTime /* IMPORTED_LONG_ENUMERATION_ITEM */, callStopTime /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedInformationType_callConnectedElapsedTime /* IMPORTED_LONG_ENUMERATION_ITEM */, callConnectedElapsedTime /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedInformationType_calledAddress /* IMPORTED_LONG_ENUMERATION_ITEM */, calledAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedInformationType_releaseCause /* IMPORTED_LONG_ENUMERATION_ITEM */, releaseCause /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RequestedInformationType, _encode_RequestedInformationType } from "../IN-CS2-datatypes/RequestedInformationType.ta.mjs";


/**
 * @summary RequestedInformationTypeList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedInformationTypeList  ::= 
 *   SEQUENCE SIZE (1..numOfInfoItems) OF RequestedInformationType
 * ```
 */
export
type RequestedInformationTypeList = RequestedInformationType[]; // SequenceOfType

let _cached_decoder_for_RequestedInformationTypeList: $.ASN1Decoder<RequestedInformationTypeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedInformationTypeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedInformationTypeList (el: _Element): RequestedInformationTypeList {
    if (!_cached_decoder_for_RequestedInformationTypeList) { _cached_decoder_for_RequestedInformationTypeList = $._decodeSequenceOf<RequestedInformationType>(() => _decode_RequestedInformationType); }
    return _cached_decoder_for_RequestedInformationTypeList(el);
}

let _cached_encoder_for_RequestedInformationTypeList: $.ASN1Encoder<RequestedInformationTypeList> | null = null;

/**
 * @summary Encodes a(n) RequestedInformationTypeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedInformationTypeList, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedInformationTypeList (value: RequestedInformationTypeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedInformationTypeList) { _cached_encoder_for_RequestedInformationTypeList = $._encodeSequenceOf<RequestedInformationType>(() => _encode_RequestedInformationType, $.BER); }
    return _cached_encoder_for_RequestedInformationTypeList(value, elGetter);
}


/* eslint-enable */
