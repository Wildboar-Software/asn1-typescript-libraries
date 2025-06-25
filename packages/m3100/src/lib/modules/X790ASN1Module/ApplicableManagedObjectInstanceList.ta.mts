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
 * @summary ApplicableManagedObjectInstanceList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicableManagedObjectInstanceList  ::=  SET OF ObjectInstance
 * ```
 */
export type ApplicableManagedObjectInstanceList = ObjectInstance[]; // SetOfType


let _cached_decoder_for_ApplicableManagedObjectInstanceList: $.ASN1Decoder<ApplicableManagedObjectInstanceList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ApplicableManagedObjectInstanceList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplicableManagedObjectInstanceList} The decoded data structure.
 */
export function _decode_ApplicableManagedObjectInstanceList(el: _Element): ApplicableManagedObjectInstanceList {
    if (!_cached_decoder_for_ApplicableManagedObjectInstanceList) {
        _cached_decoder_for_ApplicableManagedObjectInstanceList = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_ApplicableManagedObjectInstanceList(el);
}


let _cached_encoder_for_ApplicableManagedObjectInstanceList: $.ASN1Encoder<ApplicableManagedObjectInstanceList> | null = null;


/**
 * @summary Encodes a(n) ApplicableManagedObjectInstanceList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicableManagedObjectInstanceList, encoded as an ASN.1 Element.
 */
export function _encode_ApplicableManagedObjectInstanceList(
    value: ApplicableManagedObjectInstanceList,
    elGetter: $.ASN1Encoder<ApplicableManagedObjectInstanceList>
): _Element {
    if (!_cached_encoder_for_ApplicableManagedObjectInstanceList) {
        _cached_encoder_for_ApplicableManagedObjectInstanceList = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_ApplicableManagedObjectInstanceList(
        value,
        elGetter
    );
}


/* eslint-enable */
