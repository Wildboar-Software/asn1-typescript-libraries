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
    CapabilityIdentitiesList_Item,
    _decode_CapabilityIdentitiesList_Item,
    _encode_CapabilityIdentitiesList_Item,
} from '../AccessControl-ASN1Module/CapabilityIdentitiesList-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION CapabilityIdentitiesList */
/**
 * @summary CapabilityIdentitiesList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CapabilityIdentitiesList  ::=
 *   SET OF
 *     CHOICE {knownForm
 *               [0]  SEQUENCE {initiatorName  InitiatorName,
 *                              sdaList        SdaList OPTIONAL},
 *             unknownForm
 *               [1]  SEQUENCE {identifier
 *                                AC-CAP-IDENTITY.&id
 *                                  ({CapabilityIdentitiesSet}),
 *                              value
 *                                AC-CAP-IDENTITY.&Value
 *                                  ({CapabilityIdentitiesSet}{@.identifier})
 *             }}
 * ```
 */
export type CapabilityIdentitiesList = CapabilityIdentitiesList_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION CapabilityIdentitiesList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CapabilityIdentitiesList */
let _cached_decoder_for_CapabilityIdentitiesList: $.ASN1Decoder<CapabilityIdentitiesList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CapabilityIdentitiesList */

/* START_OF_SYMBOL_DEFINITION _decode_CapabilityIdentitiesList */
/**
 * @summary Decodes an ASN.1 element into a(n) CapabilityIdentitiesList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CapabilityIdentitiesList} The decoded data structure.
 */
export function _decode_CapabilityIdentitiesList(el: _Element) {
    if (!_cached_decoder_for_CapabilityIdentitiesList) {
        _cached_decoder_for_CapabilityIdentitiesList = $._decodeSetOf<CapabilityIdentitiesList_Item>(
            () => _decode_CapabilityIdentitiesList_Item
        );
    }
    return _cached_decoder_for_CapabilityIdentitiesList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CapabilityIdentitiesList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CapabilityIdentitiesList */
let _cached_encoder_for_CapabilityIdentitiesList: $.ASN1Encoder<CapabilityIdentitiesList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CapabilityIdentitiesList */

/* START_OF_SYMBOL_DEFINITION _encode_CapabilityIdentitiesList */
/**
 * @summary Encodes a(n) CapabilityIdentitiesList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CapabilityIdentitiesList, encoded as an ASN.1 Element.
 */
export function _encode_CapabilityIdentitiesList(
    value: CapabilityIdentitiesList,
    elGetter: $.ASN1Encoder<CapabilityIdentitiesList>
) {
    if (!_cached_encoder_for_CapabilityIdentitiesList) {
        _cached_encoder_for_CapabilityIdentitiesList = $._encodeSetOf<CapabilityIdentitiesList_Item>(
            () => _encode_CapabilityIdentitiesList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_CapabilityIdentitiesList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CapabilityIdentitiesList */

/* eslint-enable */
