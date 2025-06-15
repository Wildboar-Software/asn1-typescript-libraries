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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/**
 * @summary ScriptId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScriptId  ::=  ObjectInstance
 * ```
 */
export type ScriptId = ObjectInstance; // DefinedType

let _cached_decoder_for_ScriptId: $.ASN1Decoder<ScriptId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScriptId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScriptId} The decoded data structure.
 */
export function _decode_ScriptId(el: _Element) {
    if (!_cached_decoder_for_ScriptId) {
        _cached_decoder_for_ScriptId = _decode_ObjectInstance;
    }
    return _cached_decoder_for_ScriptId(el);
}

let _cached_encoder_for_ScriptId: $.ASN1Encoder<ScriptId> | null = null;

/**
 * @summary Encodes a(n) ScriptId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScriptId, encoded as an ASN.1 Element.
 */
export function _encode_ScriptId(
    value: ScriptId,
    elGetter: $.ASN1Encoder<ScriptId>
) {
    if (!_cached_encoder_for_ScriptId) {
        _cached_encoder_for_ScriptId = _encode_ObjectInstance;
    }
    return _cached_encoder_for_ScriptId(value, elGetter);
}


/* eslint-enable */
