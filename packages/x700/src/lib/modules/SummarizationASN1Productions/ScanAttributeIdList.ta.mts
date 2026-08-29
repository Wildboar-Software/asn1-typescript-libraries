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
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip';
/**
 * @summary ScanAttributeIdList
 * @description
 *
 * Identifiers of attributes of any ASN.1 type whose
 * values are reported paired with their identifiers
 * (`{summarizationAttribute 21}`). May be empty; if
 * empty, the corresponding report parameter is omitted.
 * At least one of this list and
 * `numericAttributeIdArray` shall be specified on a
 * simple scanner. ITU-T Rec. X.738 (11/93)
 * [§8.1.1.2](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * §8.1.2.3, A.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScanAttributeIdList  ::=  SET OF AttributeId
 * ```
 */
export type ScanAttributeIdList = AttributeId[]; // SetOfType

let _cached_decoder_for_ScanAttributeIdList: $.ASN1Decoder<ScanAttributeIdList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScanAttributeIdList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScanAttributeIdList} The decoded data structure.
 */
export function _decode_ScanAttributeIdList(el: _Element): ScanAttributeIdList {
    if (!_cached_decoder_for_ScanAttributeIdList) {
        _cached_decoder_for_ScanAttributeIdList = $._decodeSetOf<AttributeId>(
            () => _decode_AttributeId
        );
    }
    return _cached_decoder_for_ScanAttributeIdList(el);
}

let _cached_encoder_for_ScanAttributeIdList: $.ASN1Encoder<ScanAttributeIdList> | null = null;

/**
 * @summary Encodes a(n) ScanAttributeIdList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScanAttributeIdList, encoded as an ASN.1 Element.
 */
export function _encode_ScanAttributeIdList(
    value: ScanAttributeIdList,
    elGetter: $.ASN1Encoder<ScanAttributeIdList>
): _Element {
    if (!_cached_encoder_for_ScanAttributeIdList) {
        _cached_encoder_for_ScanAttributeIdList = $._encodeSetOf<AttributeId>(
            () => _encode_AttributeId,
            $.BER
        );
    }
    return _cached_encoder_for_ScanAttributeIdList(value, elGetter);
}


/* eslint-enable */
