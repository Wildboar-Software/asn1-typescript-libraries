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
 * @summary MORTs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MORTs  ::=  SET OF ObjectInstance
 * ```
 */
export type MORTs = ObjectInstance[]; // SetOfType

let _cached_decoder_for_MORTs: $.ASN1Decoder<MORTs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MORTs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MORTs} The decoded data structure.
 */
export function _decode_MORTs(el: _Element): MORTs {
    if (!_cached_decoder_for_MORTs) {
        _cached_decoder_for_MORTs = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_MORTs(el);
}

let _cached_encoder_for_MORTs: $.ASN1Encoder<MORTs> | null = null;

/**
 * @summary Encodes a(n) MORTs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MORTs, encoded as an ASN.1 Element.
 */
export function _encode_MORTs(value: MORTs, elGetter: $.ASN1Encoder<MORTs>): _Element {
    if (!_cached_encoder_for_MORTs) {
        _cached_encoder_for_MORTs = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_MORTs(value, elGetter);
}


/* eslint-enable */
