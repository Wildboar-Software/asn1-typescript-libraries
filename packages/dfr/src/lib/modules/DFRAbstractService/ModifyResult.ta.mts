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
// export { CommonUpdateResult, _decode_CommonUpdateResult, _encode_CommonUpdateResult } from "../DFRAbstractService/CommonUpdateResult.ta.mjs";


/**
 * @summary ModifyResult
 * @description
 *
 * UPI, optional read-back, optional `referent-altered`. ISO/IEC 10166-1:1991
 * §8.2.6.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModifyResult  ::=  CommonUpdateResult (WITH COMPONENTS { ..., warnings ABSENT, reference-qos ABSENT })
 * ```
 */
export
type ModifyResult = CommonUpdateResult; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModifyResult (el: _Element): ModifyResult {
    const value = _decode_CommonUpdateResult(el);
    if (value.warnings !== undefined) {
        throw new _ConstructionError("ModifyResult.warnings shall be absent");
    }
    if (value.reference_qos !== undefined) {
        throw new _ConstructionError("ModifyResult.reference-qos shall be absent");
    }
    return value;
}

let _cached_encoder_for_ModifyResult: $.ASN1Encoder<ModifyResult> | null = null;

/**
 * @summary Encodes a(n) ModifyResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyResult, encoded as an ASN.1 Element.
 */
export
function _encode_ModifyResult (value: ModifyResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModifyResult) { _cached_encoder_for_ModifyResult = _encode_CommonUpdateResult; }
    return _cached_encoder_for_ModifyResult(value, elGetter);
}


/* eslint-enable */
