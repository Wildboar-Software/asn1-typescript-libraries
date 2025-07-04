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
    ObjectClass,
    _decode_ObjectClass,
    _encode_ObjectClass,
} from '@wildboar/cmip';

/**
 * @summary ApplicableManagedObjectClassList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicableManagedObjectClassList  ::=  SET OF ObjectClass
 * ```
 */
export type ApplicableManagedObjectClassList = ObjectClass[]; // SetOfType


let _cached_decoder_for_ApplicableManagedObjectClassList: $.ASN1Decoder<ApplicableManagedObjectClassList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ApplicableManagedObjectClassList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplicableManagedObjectClassList} The decoded data structure.
 */
export function _decode_ApplicableManagedObjectClassList(el: _Element): ApplicableManagedObjectClassList {
    if (!_cached_decoder_for_ApplicableManagedObjectClassList) {
        _cached_decoder_for_ApplicableManagedObjectClassList = $._decodeSetOf<ObjectClass>(
            () => _decode_ObjectClass
        );
    }
    return _cached_decoder_for_ApplicableManagedObjectClassList(el);
}


let _cached_encoder_for_ApplicableManagedObjectClassList: $.ASN1Encoder<ApplicableManagedObjectClassList> | null = null;


/**
 * @summary Encodes a(n) ApplicableManagedObjectClassList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicableManagedObjectClassList, encoded as an ASN.1 Element.
 */
export function _encode_ApplicableManagedObjectClassList(
    value: ApplicableManagedObjectClassList,
    elGetter: $.ASN1Encoder<ApplicableManagedObjectClassList>
): _Element {
    if (!_cached_encoder_for_ApplicableManagedObjectClassList) {
        _cached_encoder_for_ApplicableManagedObjectClassList = $._encodeSetOf<ObjectClass>(
            () => _encode_ObjectClass,
            $.BER
        );
    }
    return _cached_encoder_for_ApplicableManagedObjectClassList(
        value,
        elGetter
    );
}


/* eslint-enable */
