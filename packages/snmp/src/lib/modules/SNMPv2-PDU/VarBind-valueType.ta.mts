/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ObjectSyntax, _decode_ObjectSyntax, _encode_ObjectSyntax } from "../SNMPv2-PDU/ObjectSyntax.ta.mjs";
/**
 * @summary VarBind_valueType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VarBind-valueType ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type VarBind_valueType =
    { value: ObjectSyntax } /* CHOICE_ALT_ROOT */
    | { unSpecified: NULL } /* CHOICE_ALT_ROOT */
    | { noSuchObject: NULL } /* CHOICE_ALT_ROOT */
    | { noSuchInstance: NULL } /* CHOICE_ALT_ROOT */
    | { endOfMibView: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_VarBind_valueType: $.ASN1Decoder<VarBind_valueType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VarBind_valueType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VarBind_valueType} The decoded data structure.
 */
export
function _decode_VarBind_valueType (el: _Element) {
    if (!_cached_decoder_for_VarBind_valueType) { _cached_decoder_for_VarBind_valueType = $._decode_inextensible_choice<VarBind_valueType>({
    "UNIVERSAL 2": [ "value", _decode_ObjectSyntax ],
    "UNIVERSAL 4": [ "value", _decode_ObjectSyntax ],
    "UNIVERSAL 6": [ "value", _decode_ObjectSyntax ],
    "APPLICATION 0": [ "value", _decode_ObjectSyntax ],
    "APPLICATION 1": [ "value", _decode_ObjectSyntax ],
    "APPLICATION 3": [ "value", _decode_ObjectSyntax ],
    "APPLICATION 4": [ "value", _decode_ObjectSyntax ],
    "APPLICATION 6": [ "value", _decode_ObjectSyntax ],
    "APPLICATION 2": [ "value", _decode_ObjectSyntax ],
    "UNIVERSAL 5": [ "unSpecified", $._decodeNull ],
    "CONTEXT 0": [ "noSuchObject", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "noSuchInstance", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "endOfMibView", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_VarBind_valueType(el);
}

let _cached_encoder_for_VarBind_valueType: $.ASN1Encoder<VarBind_valueType> | null = null;

/**
 * @summary Encodes a(n) VarBind_valueType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VarBind_valueType, encoded as an ASN.1 Element.
 */
export
function _encode_VarBind_valueType (value: VarBind_valueType, elGetter: $.ASN1Encoder<VarBind_valueType>) {
    if (!_cached_encoder_for_VarBind_valueType) { _cached_encoder_for_VarBind_valueType = $._encode_choice<VarBind_valueType>({
    "value": _encode_ObjectSyntax,
    "unSpecified": $._encodeNull,
    "noSuchObject": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "noSuchInstance": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "endOfMibView": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_VarBind_valueType(value, elGetter);
}


/* eslint-enable */
