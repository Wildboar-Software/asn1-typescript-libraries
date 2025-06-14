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
    EscalationList_Item,
    _decode_EscalationList_Item,
    _encode_EscalationList_Item,
} from '../X790ASN1Module/EscalationList-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION EscalationList */
/**
 * @summary EscalationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EscalationList  ::=
 *   SET OF
 *     SEQUENCE {state          RequestState,
 *               escTime        EscalationTime,
 *               -- supplied by agent
 *               requestPerson  [0]  PersonReach,
 *               level          [1]  OrgLevel OPTIONAL,
 *               escPerson      [2]  PersonReach OPTIONAL,
 *               ...}
 * ```
 */
export type EscalationList = EscalationList_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION EscalationList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EscalationList */
let _cached_decoder_for_EscalationList: $.ASN1Decoder<EscalationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EscalationList */

/* START_OF_SYMBOL_DEFINITION _decode_EscalationList */
/**
 * @summary Decodes an ASN.1 element into a(n) EscalationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EscalationList} The decoded data structure.
 */
export function _decode_EscalationList(el: _Element) {
    if (!_cached_decoder_for_EscalationList) {
        _cached_decoder_for_EscalationList = $._decodeSetOf<EscalationList_Item>(
            () => _decode_EscalationList_Item
        );
    }
    return _cached_decoder_for_EscalationList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EscalationList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EscalationList */
let _cached_encoder_for_EscalationList: $.ASN1Encoder<EscalationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EscalationList */

/* START_OF_SYMBOL_DEFINITION _encode_EscalationList */
/**
 * @summary Encodes a(n) EscalationList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscalationList, encoded as an ASN.1 Element.
 */
export function _encode_EscalationList(
    value: EscalationList,
    elGetter: $.ASN1Encoder<EscalationList>
) {
    if (!_cached_encoder_for_EscalationList) {
        _cached_encoder_for_EscalationList = $._encodeSetOf<EscalationList_Item>(
            () => _encode_EscalationList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_EscalationList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EscalationList */

/* eslint-enable */
