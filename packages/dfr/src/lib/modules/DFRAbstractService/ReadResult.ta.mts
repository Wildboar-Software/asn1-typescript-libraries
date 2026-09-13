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
 * @summary ReadResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReadResult  ::=  CommonUpdateResult (WITH COMPONENTS { ..., entry-information PRESENT, warnings ABSENT })
 * ```
 */
export
type ReadResult = CommonUpdateResult; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ReadResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReadResult (el: _Element): ReadResult {
    const value = _decode_CommonUpdateResult(el);
    if (value.entry_information === undefined) {
        throw new _ConstructionError("ReadResult.entry-information shall be present");
    }
    if (value.warnings !== undefined) {
        throw new _ConstructionError("ReadResult.warnings shall be absent");
    }
    return value;
}

let _cached_encoder_for_ReadResult: $.ASN1Encoder<ReadResult> | null = null;

/**
 * @summary Encodes a(n) ReadResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReadResult, encoded as an ASN.1 Element.
 */
export
function _encode_ReadResult (value: ReadResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReadResult) { _cached_encoder_for_ReadResult = _encode_CommonUpdateResult; }
    return _cached_encoder_for_ReadResult(value, elGetter);
}


/* eslint-enable */
