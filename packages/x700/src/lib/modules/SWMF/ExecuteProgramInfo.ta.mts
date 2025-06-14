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
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ExecuteProgramInfo */
/**
 * @summary ExecuteProgramInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExecuteProgramInfo  ::=  SET OF ManagementExtension
 * ```
 */
export type ExecuteProgramInfo = ManagementExtension[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ExecuteProgramInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExecuteProgramInfo */
let _cached_decoder_for_ExecuteProgramInfo: $.ASN1Decoder<ExecuteProgramInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExecuteProgramInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ExecuteProgramInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ExecuteProgramInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExecuteProgramInfo} The decoded data structure.
 */
export function _decode_ExecuteProgramInfo(el: _Element) {
    if (!_cached_decoder_for_ExecuteProgramInfo) {
        _cached_decoder_for_ExecuteProgramInfo = $._decodeSetOf<ManagementExtension>(
            () => _decode_ManagementExtension
        );
    }
    return _cached_decoder_for_ExecuteProgramInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExecuteProgramInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExecuteProgramInfo */
let _cached_encoder_for_ExecuteProgramInfo: $.ASN1Encoder<ExecuteProgramInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExecuteProgramInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ExecuteProgramInfo */
/**
 * @summary Encodes a(n) ExecuteProgramInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecuteProgramInfo, encoded as an ASN.1 Element.
 */
export function _encode_ExecuteProgramInfo(
    value: ExecuteProgramInfo,
    elGetter: $.ASN1Encoder<ExecuteProgramInfo>
) {
    if (!_cached_encoder_for_ExecuteProgramInfo) {
        _cached_encoder_for_ExecuteProgramInfo = $._encodeSetOf<ManagementExtension>(
            () => _encode_ManagementExtension,
            $.BER
        );
    }
    return _cached_encoder_for_ExecuteProgramInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExecuteProgramInfo */

/* eslint-enable */
