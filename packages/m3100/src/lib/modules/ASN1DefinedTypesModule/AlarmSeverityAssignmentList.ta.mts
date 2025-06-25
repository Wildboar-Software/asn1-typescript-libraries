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
    AlarmSeverityAssignment,
    _decode_AlarmSeverityAssignment,
    _encode_AlarmSeverityAssignment,
} from '../ASN1DefinedTypesModule/AlarmSeverityAssignment.ta.mjs';

/**
 * @summary AlarmSeverityAssignmentList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmSeverityAssignmentList  ::=  SET OF AlarmSeverityAssignment
 * ```
 */
export type AlarmSeverityAssignmentList = AlarmSeverityAssignment[]; // SetOfType


let _cached_decoder_for_AlarmSeverityAssignmentList: $.ASN1Decoder<AlarmSeverityAssignmentList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AlarmSeverityAssignmentList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlarmSeverityAssignmentList} The decoded data structure.
 */
export function _decode_AlarmSeverityAssignmentList(el: _Element): AlarmSeverityAssignmentList {
    if (!_cached_decoder_for_AlarmSeverityAssignmentList) {
        _cached_decoder_for_AlarmSeverityAssignmentList = $._decodeSetOf<AlarmSeverityAssignment>(
            () => _decode_AlarmSeverityAssignment
        );
    }
    return _cached_decoder_for_AlarmSeverityAssignmentList(el);
}


let _cached_encoder_for_AlarmSeverityAssignmentList: $.ASN1Encoder<AlarmSeverityAssignmentList> | null = null;


/**
 * @summary Encodes a(n) AlarmSeverityAssignmentList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmSeverityAssignmentList, encoded as an ASN.1 Element.
 */
export function _encode_AlarmSeverityAssignmentList(
    value: AlarmSeverityAssignmentList,
    elGetter: $.ASN1Encoder<AlarmSeverityAssignmentList>
): _Element {
    if (!_cached_encoder_for_AlarmSeverityAssignmentList) {
        _cached_encoder_for_AlarmSeverityAssignmentList = $._encodeSetOf<AlarmSeverityAssignment>(
            () => _encode_AlarmSeverityAssignment,
            $.BER
        );
    }
    return _cached_encoder_for_AlarmSeverityAssignmentList(value, elGetter);
}


/* eslint-enable */
