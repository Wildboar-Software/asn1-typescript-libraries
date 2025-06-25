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
 * @summary InstanceIdList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InstanceIdList  ::=  SET OF ObjectInstance
 * ```
 */
export type InstanceIdList = ObjectInstance[]; // SetOfType

let _cached_decoder_for_InstanceIdList: $.ASN1Decoder<InstanceIdList> | null =
    null;

/**
 * @summary Decodes an ASN.1 element into a(n) InstanceIdList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InstanceIdList} The decoded data structure.
 */
export function _decode_InstanceIdList(el: _Element): InstanceIdList {
    if (!_cached_decoder_for_InstanceIdList) {
        _cached_decoder_for_InstanceIdList = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_InstanceIdList(el);
}

let _cached_encoder_for_InstanceIdList: $.ASN1Encoder<InstanceIdList> | null =
    null;

/**
 * @summary Encodes a(n) InstanceIdList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InstanceIdList, encoded as an ASN.1 Element.
 */
export function _encode_InstanceIdList(
    value: InstanceIdList,
    elGetter: $.ASN1Encoder<InstanceIdList>
): _Element {
    if (!_cached_encoder_for_InstanceIdList) {
        _cached_encoder_for_InstanceIdList = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_InstanceIdList(value, elGetter);
}


/* eslint-enable */
