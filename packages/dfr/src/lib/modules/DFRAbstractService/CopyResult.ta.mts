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
import { CommonUpdateResult, _decode_CommonUpdateResult, _encode_CommonUpdateResult } from "../DFRAbstractService/CommonUpdateResult.ta.mjs";


/**
 * @summary CopyResult
 * @description
 *
 * UPI of the copy, optional read-back, warnings for descendants not copied,
 * optional `referent-altered` (not when a group was copied). ISO/IEC
 * 10166-1:1991 §8.2.3.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CopyResult  ::=  CommonUpdateResult (WITH COMPONENTS { ..., reference-qos ABSENT })
 * ```
 */
export
type CopyResult = CommonUpdateResult; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CopyResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CopyResult (el: _Element): CopyResult {
    const value = _decode_CommonUpdateResult(el);
    if (value.reference_qos !== undefined) {
        throw new _ConstructionError("CopyResult.reference-qos shall be absent");
    }
    return value;
}

let _cached_encoder_for_CopyResult: $.ASN1Encoder<CopyResult> | null = null;

/**
 * @summary Encodes a(n) CopyResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CopyResult, encoded as an ASN.1 Element.
 */
export
function _encode_CopyResult (value: CopyResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CopyResult) { _cached_encoder_for_CopyResult = _encode_CommonUpdateResult; }
    return _cached_encoder_for_CopyResult(value, elGetter);
}


/* eslint-enable */
