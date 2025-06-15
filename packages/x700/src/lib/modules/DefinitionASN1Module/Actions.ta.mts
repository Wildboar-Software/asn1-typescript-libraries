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
    Actions_Item,
    _decode_Actions_Item,
    _encode_Actions_Item,
} from '../DefinitionASN1Module/Actions-Item.ta.mjs';

/**
 * @summary Actions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Actions  ::=
 *   SET OF
 *     SEQUENCE {action     [0]  TemplateLabel,
 *               parameter  [1]  TemplateList OPTIONAL}
 * ```
 */
export type Actions = Actions_Item[]; // SetOfType


let _cached_decoder_for_Actions: $.ASN1Decoder<Actions> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Actions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Actions} The decoded data structure.
 */
export function _decode_Actions(el: _Element) {
    if (!_cached_decoder_for_Actions) {
        _cached_decoder_for_Actions = $._decodeSetOf<Actions_Item>(
            () => _decode_Actions_Item
        );
    }
    return _cached_decoder_for_Actions(el);
}


let _cached_encoder_for_Actions: $.ASN1Encoder<Actions> | null = null;


/**
 * @summary Encodes a(n) Actions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Actions, encoded as an ASN.1 Element.
 */
export function _encode_Actions(
    value: Actions,
    elGetter: $.ASN1Encoder<Actions>
) {
    if (!_cached_encoder_for_Actions) {
        _cached_encoder_for_Actions = $._encodeSetOf<Actions_Item>(
            () => _encode_Actions_Item,
            $.BER
        );
    }
    return _cached_encoder_for_Actions(value, elGetter);
}


/* eslint-enable */
