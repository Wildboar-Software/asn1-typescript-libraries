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
    AlarmSeverityAssignment,
    _decode_AlarmSeverityAssignment,
    _encode_AlarmSeverityAssignment,
} from '../ASN1DefinedTypesModule/AlarmSeverityAssignment.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AlarmSeverityAssignmentList */
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
/* END_OF_SYMBOL_DEFINITION AlarmSeverityAssignmentList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmSeverityAssignmentList */
let _cached_decoder_for_AlarmSeverityAssignmentList: $.ASN1Decoder<AlarmSeverityAssignmentList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmSeverityAssignmentList */

/* START_OF_SYMBOL_DEFINITION _decode_AlarmSeverityAssignmentList */
/**
 * @summary Decodes an ASN.1 element into a(n) AlarmSeverityAssignmentList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlarmSeverityAssignmentList} The decoded data structure.
 */
export function _decode_AlarmSeverityAssignmentList(el: _Element) {
    if (!_cached_decoder_for_AlarmSeverityAssignmentList) {
        _cached_decoder_for_AlarmSeverityAssignmentList = $._decodeSetOf<AlarmSeverityAssignment>(
            () => _decode_AlarmSeverityAssignment
        );
    }
    return _cached_decoder_for_AlarmSeverityAssignmentList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlarmSeverityAssignmentList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmSeverityAssignmentList */
let _cached_encoder_for_AlarmSeverityAssignmentList: $.ASN1Encoder<AlarmSeverityAssignmentList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmSeverityAssignmentList */

/* START_OF_SYMBOL_DEFINITION _encode_AlarmSeverityAssignmentList */
/**
 * @summary Encodes a(n) AlarmSeverityAssignmentList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmSeverityAssignmentList, encoded as an ASN.1 Element.
 */
export function _encode_AlarmSeverityAssignmentList(
    value: AlarmSeverityAssignmentList,
    elGetter: $.ASN1Encoder<AlarmSeverityAssignmentList>
) {
    if (!_cached_encoder_for_AlarmSeverityAssignmentList) {
        _cached_encoder_for_AlarmSeverityAssignmentList = $._encodeSetOf<AlarmSeverityAssignment>(
            () => _encode_AlarmSeverityAssignment,
            $.BER
        );
    }
    return _cached_encoder_for_AlarmSeverityAssignmentList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlarmSeverityAssignmentList */

/* eslint-enable */
