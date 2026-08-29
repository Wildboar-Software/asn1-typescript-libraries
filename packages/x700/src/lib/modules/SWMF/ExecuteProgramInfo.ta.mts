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
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module';
/**
 * @summary ExecuteProgramInfo
 * @description
 *
 * Confirmed `executeProgram` M-ACTION information, directed at an
 * executableSoftware instance (must be installed). Extensions for
 * start-up parameters; the rec does not define a fixed parameter
 * set. Denied while `usageState` is busy until it becomes active or
 * idle. `{… action(9) executeProgram(2)}`. ITU-T Rec. X.744 (10/96)
 * [§8.3.3](https://www.itu.int/rec/T-REC-X.744-199610-I),
 * §7.4.2, §8.1.3, A.5.2, §9.4 Table 8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExecuteProgramInfo  ::=  SET OF ManagementExtension
 * ```
 */
export type ExecuteProgramInfo = ManagementExtension[]; // SetOfType

let _cached_decoder_for_ExecuteProgramInfo: $.ASN1Decoder<ExecuteProgramInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExecuteProgramInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExecuteProgramInfo} The decoded data structure.
 */
export function _decode_ExecuteProgramInfo(el: _Element): ExecuteProgramInfo {
    if (!_cached_decoder_for_ExecuteProgramInfo) {
        _cached_decoder_for_ExecuteProgramInfo = $._decodeSetOf<ManagementExtension>(
            () => _decode_ManagementExtension
        );
    }
    return _cached_decoder_for_ExecuteProgramInfo(el);
}

let _cached_encoder_for_ExecuteProgramInfo: $.ASN1Encoder<ExecuteProgramInfo> | null = null;

/**
 * @summary Encodes a(n) ExecuteProgramInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecuteProgramInfo, encoded as an ASN.1 Element.
 */
export function _encode_ExecuteProgramInfo(
    value: ExecuteProgramInfo,
    elGetter: $.ASN1Encoder<ExecuteProgramInfo>
): _Element {
    if (!_cached_encoder_for_ExecuteProgramInfo) {
        _cached_encoder_for_ExecuteProgramInfo = $._encodeSetOf<ManagementExtension>(
            () => _encode_ManagementExtension,
            $.BER
        );
    }
    return _cached_encoder_for_ExecuteProgramInfo(value, elGetter);
}


/* eslint-enable */
