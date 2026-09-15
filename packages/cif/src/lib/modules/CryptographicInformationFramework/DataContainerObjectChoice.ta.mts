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
import { DataContainerObject, _get_decoder_for_DataContainerObject, _get_encoder_for_DataContainerObject } from "../CryptographicInformationFramework/DataContainerObject.ta.mjs";
// export { DataContainerObject, _get_decoder_for_DataContainerObject, _get_encoder_for_DataContainerObject } from "../CryptographicInformationFramework/DataContainerObject.ta.mjs";
import { OpaqueDOAttributes, _decode_OpaqueDOAttributes, _encode_OpaqueDOAttributes } from "../CryptographicInformationFramework/OpaqueDOAttributes.ta.mjs";
// export { OpaqueDOAttributes, _decode_OpaqueDOAttributes, _encode_OpaqueDOAttributes } from "../CryptographicInformationFramework/OpaqueDOAttributes.ta.mjs";
import { ISO7816DOAttributes, _decode_ISO7816DOAttributes, _encode_ISO7816DOAttributes } from "../CryptographicInformationFramework/ISO7816DOAttributes.ta.mjs";
// export { ISO7816DOAttributes, _decode_ISO7816DOAttributes, _encode_ISO7816DOAttributes } from "../CryptographicInformationFramework/ISO7816DOAttributes.ta.mjs";
import { OidDOAttributes, _decode_OidDOAttributes, _encode_OidDOAttributes } from "../CryptographicInformationFramework/OidDOAttributes.ta.mjs";
// export { OidDOAttributes, _decode_OidDOAttributes, _encode_OidDOAttributes } from "../CryptographicInformationFramework/OidDOAttributes.ta.mjs";


/**
 * @summary DataContainerObjectChoice
 * @description
 * 
 * Data-container CIOs: opaque blobs, ISO/IEC 7816-4 data objects, or
 * OID-identified objects. ISO/IEC 7816-15:2016 §8.8.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataContainerObjectChoice  ::=  CHOICE {
 *     opaqueDO    DataContainerObject {OpaqueDOAttributes},
 *     iso7816DO   [0] DataContainerObject {ISO7816DOAttributes},
 *     oidDO       [1] DataContainerObject {OidDOAttributes},
 *     ... -- For future extensions
 * }
 * ```
 */
export
type DataContainerObjectChoice =
    { opaqueDO: DataContainerObject<OpaqueDOAttributes> } /* CHOICE_ALT_ROOT */
    | { iso7816DO: DataContainerObject<ISO7816DOAttributes> } /* CHOICE_ALT_ROOT */
    | { oidDO: DataContainerObject<OidDOAttributes> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_DataContainerObjectChoice: $.ASN1Decoder<DataContainerObjectChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataContainerObjectChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataContainerObjectChoice (el: _Element): DataContainerObjectChoice {
    if (!_cached_decoder_for_DataContainerObjectChoice) { _cached_decoder_for_DataContainerObjectChoice = $._decode_extensible_choice<DataContainerObjectChoice>({
    "UNIVERSAL 16": [ "opaqueDO", _get_decoder_for_DataContainerObject<OpaqueDOAttributes>(_decode_OpaqueDOAttributes) ],
    "CONTEXT 0": [ "iso7816DO", $._decode_implicit<DataContainerObject<ISO7816DOAttributes>>(() => _get_decoder_for_DataContainerObject<ISO7816DOAttributes>(_decode_ISO7816DOAttributes)) ],
    "CONTEXT 1": [ "oidDO", $._decode_implicit<DataContainerObject<OidDOAttributes>>(() => _get_decoder_for_DataContainerObject<OidDOAttributes>(_decode_OidDOAttributes)) ]
}); }
    return _cached_decoder_for_DataContainerObjectChoice(el);
}

let _cached_encoder_for_DataContainerObjectChoice: $.ASN1Encoder<DataContainerObjectChoice> | null = null;

/**
 * @summary Encodes a(n) DataContainerObjectChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataContainerObjectChoice, encoded as an ASN.1 Element.
 */
export
function _encode_DataContainerObjectChoice (value: DataContainerObjectChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataContainerObjectChoice) { _cached_encoder_for_DataContainerObjectChoice = $._encode_choice<DataContainerObjectChoice>({
    "opaqueDO": _get_encoder_for_DataContainerObject<OpaqueDOAttributes>(_encode_OpaqueDOAttributes),
    "iso7816DO": $._encode_implicit(_TagClass.context, 0, () => _get_encoder_for_DataContainerObject<ISO7816DOAttributes>(_encode_ISO7816DOAttributes), $.BER),
    "oidDO": $._encode_implicit(_TagClass.context, 1, () => _get_encoder_for_DataContainerObject<OidDOAttributes>(_encode_OidDOAttributes), $.BER),
}, $.BER); }
    return _cached_encoder_for_DataContainerObjectChoice(value, elGetter);
}


/* eslint-enable */
