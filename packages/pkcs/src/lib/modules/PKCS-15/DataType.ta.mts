/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DataObject,
    _get_decoder_for_DataObject,
    _get_encoder_for_DataObject,
} from "../PKCS-15/DataObject.ta.mjs";
import {
    ExternalIDO,
    _decode_ExternalIDO,
    _encode_ExternalIDO,
} from "../PKCS-15/ExternalIDO.ta.mjs";
import { OidDO, _decode_OidDO, _encode_OidDO } from "../PKCS-15/OidDO.ta.mjs";
import { Opaque, _decode_Opaque, _encode_Opaque } from "../PKCS-15/Opaque.ta.mjs";

/**
 * @summary DataType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataType  ::=  CHOICE {
 *     opaqueDO DataObject {Opaque},
 *     externalIDO [0] DataObject {ExternalIDO},
 *     oidDO  [1] DataObject {OidDO},
 *     ... -- For future extensions
 * }
 * ```
 */
export type DataType =
    | { opaqueDO: DataObject<Opaque> } /* CHOICE_ALT_ROOT */
    | { externalIDO: DataObject<ExternalIDO> } /* CHOICE_ALT_ROOT */
    | { oidDO: DataObject<OidDO> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_DataType: $.ASN1Decoder<DataType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DataType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataType} The decoded data structure.
 */
export function _decode_DataType(el: _Element): DataType {
    if (!_cached_decoder_for_DataType) {
        _cached_decoder_for_DataType = $._decode_extensible_choice<DataType>({
            "UNIVERSAL 16": [
                "opaqueDO",
                _get_decoder_for_DataObject<Opaque>(_decode_Opaque),
            ],
            "CONTEXT 0": [
                "externalIDO",
                $._decode_implicit<DataObject<ExternalIDO>>(() =>
                    _get_decoder_for_DataObject<ExternalIDO>(
                        _decode_ExternalIDO
                    )
                ),
            ],
            "CONTEXT 1": [
                "oidDO",
                $._decode_implicit<DataObject<OidDO>>(() =>
                    _get_decoder_for_DataObject<OidDO>(_decode_OidDO)
                ),
            ],
        });
    }
    return _cached_decoder_for_DataType(el);
}


let _cached_encoder_for_DataType: $.ASN1Encoder<DataType> | null = null;


/**
 * @summary Encodes a(n) DataType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataType, encoded as an ASN.1 Element.
 */
export function _encode_DataType(
    value: DataType,
    elGetter: $.ASN1Encoder<DataType>
): _Element {
    if (!_cached_encoder_for_DataType) {
        _cached_encoder_for_DataType = $._encode_choice<DataType>(
            {
                opaqueDO: _get_encoder_for_DataObject<Opaque>(_encode_Opaque),
                externalIDO: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        _get_encoder_for_DataObject<ExternalIDO>(
                            _encode_ExternalIDO
                        ),
                    $.BER
                ),
                oidDO: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _get_encoder_for_DataObject<OidDO>(_encode_OidDO),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DataType(value, elGetter);
}


/* eslint-enable */
