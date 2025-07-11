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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';

/**
 * @summary TroubleReportFormatObjectPtr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleReportFormatObjectPtr  ::=  ObjectInstance
 * ```
 */
export type TroubleReportFormatObjectPtr = ObjectInstance; // DefinedType


let _cached_decoder_for_TroubleReportFormatObjectPtr: $.ASN1Decoder<TroubleReportFormatObjectPtr> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TroubleReportFormatObjectPtr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleReportFormatObjectPtr} The decoded data structure.
 */
export function _decode_TroubleReportFormatObjectPtr(el: _Element): TroubleReportFormatObjectPtr {
    if (!_cached_decoder_for_TroubleReportFormatObjectPtr) {
        _cached_decoder_for_TroubleReportFormatObjectPtr = _decode_ObjectInstance;
    }
    return _cached_decoder_for_TroubleReportFormatObjectPtr(el);
}


let _cached_encoder_for_TroubleReportFormatObjectPtr: $.ASN1Encoder<TroubleReportFormatObjectPtr> | null = null;


/**
 * @summary Encodes a(n) TroubleReportFormatObjectPtr into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleReportFormatObjectPtr, encoded as an ASN.1 Element.
 */
export function _encode_TroubleReportFormatObjectPtr(
    value: TroubleReportFormatObjectPtr,
    elGetter: $.ASN1Encoder<TroubleReportFormatObjectPtr>
): _Element {
    if (!_cached_encoder_for_TroubleReportFormatObjectPtr) {
        _cached_encoder_for_TroubleReportFormatObjectPtr = _encode_ObjectInstance;
    }
    return _cached_encoder_for_TroubleReportFormatObjectPtr(value, elGetter);
}


/* eslint-enable */
