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
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/**
 * @summary ArcAffectedObjectList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcAffectedObjectList  ::=  SET OF ObjectInstance
 * ```
 */
export type ArcAffectedObjectList = ObjectInstance[]; // SetOfType


let _cached_decoder_for_ArcAffectedObjectList: $.ASN1Decoder<ArcAffectedObjectList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ArcAffectedObjectList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArcAffectedObjectList} The decoded data structure.
 */
export function _decode_ArcAffectedObjectList(el: _Element): ArcAffectedObjectList {
    if (!_cached_decoder_for_ArcAffectedObjectList) {
        _cached_decoder_for_ArcAffectedObjectList = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_ArcAffectedObjectList(el);
}


let _cached_encoder_for_ArcAffectedObjectList: $.ASN1Encoder<ArcAffectedObjectList> | null = null;


/**
 * @summary Encodes a(n) ArcAffectedObjectList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArcAffectedObjectList, encoded as an ASN.1 Element.
 */
export function _encode_ArcAffectedObjectList(
    value: ArcAffectedObjectList,
    elGetter: $.ASN1Encoder<ArcAffectedObjectList>
): _Element {
    if (!_cached_encoder_for_ArcAffectedObjectList) {
        _cached_encoder_for_ArcAffectedObjectList = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_ArcAffectedObjectList(value, elGetter);
}


/* eslint-enable */
