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
 * @summary AlarmRecordPtrList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmRecordPtrList  ::=  SET OF ObjectInstance
 * ```
 */
export type AlarmRecordPtrList = ObjectInstance[]; // SetOfType


let _cached_decoder_for_AlarmRecordPtrList: $.ASN1Decoder<AlarmRecordPtrList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AlarmRecordPtrList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlarmRecordPtrList} The decoded data structure.
 */
export function _decode_AlarmRecordPtrList(el: _Element): AlarmRecordPtrList {
    if (!_cached_decoder_for_AlarmRecordPtrList) {
        _cached_decoder_for_AlarmRecordPtrList = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_AlarmRecordPtrList(el);
}


let _cached_encoder_for_AlarmRecordPtrList: $.ASN1Encoder<AlarmRecordPtrList> | null = null;


/**
 * @summary Encodes a(n) AlarmRecordPtrList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmRecordPtrList, encoded as an ASN.1 Element.
 */
export function _encode_AlarmRecordPtrList(
    value: AlarmRecordPtrList,
    elGetter: $.ASN1Encoder<AlarmRecordPtrList>
): _Element {
    if (!_cached_encoder_for_AlarmRecordPtrList) {
        _cached_encoder_for_AlarmRecordPtrList = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_AlarmRecordPtrList(value, elGetter);
}


/* eslint-enable */
