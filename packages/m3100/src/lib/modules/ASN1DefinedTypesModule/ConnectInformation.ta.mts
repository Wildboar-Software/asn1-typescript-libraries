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
    ConnectInformation_Item,
    _decode_ConnectInformation_Item,
    _encode_ConnectInformation_Item,
} from '../ASN1DefinedTypesModule/ConnectInformation-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ConnectInformation */
/**
 * @summary ConnectInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectInformation  ::=
 *   SEQUENCE OF
 *     SEQUENCE {itemType
 *                 CHOICE {unidirectional  [0]  ConnectionType,
 *                         bidirectional   [1]  ConnectionTypeBi,
 *                         addleg          [2]  AddLeg},
 *               administrativeState   AdministrativeState OPTIONAL,
 *               namedCrossConnection  [3]  NamedCrossConnection OPTIONAL,
 *               ...,
 *               userLabel             [4]  UserLabel OPTIONAL,
 *               redline               [5]  Boolean OPTIONAL,
 *               ...,
 *               additionalInfo        [6]  AdditionalInformation OPTIONAL
 *     }
 * ```
 */
export type ConnectInformation = ConnectInformation_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ConnectInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectInformation */
let _cached_decoder_for_ConnectInformation: $.ASN1Decoder<ConnectInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectInformation */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectInformation} The decoded data structure.
 */
export function _decode_ConnectInformation(el: _Element) {
    if (!_cached_decoder_for_ConnectInformation) {
        _cached_decoder_for_ConnectInformation = $._decodeSequenceOf<ConnectInformation_Item>(
            () => _decode_ConnectInformation_Item
        );
    }
    return _cached_decoder_for_ConnectInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectInformation */
let _cached_encoder_for_ConnectInformation: $.ASN1Encoder<ConnectInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectInformation */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectInformation */
/**
 * @summary Encodes a(n) ConnectInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectInformation, encoded as an ASN.1 Element.
 */
export function _encode_ConnectInformation(
    value: ConnectInformation,
    elGetter: $.ASN1Encoder<ConnectInformation>
) {
    if (!_cached_encoder_for_ConnectInformation) {
        _cached_encoder_for_ConnectInformation = $._encodeSequenceOf<ConnectInformation_Item>(
            () => _encode_ConnectInformation_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ConnectInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectInformation */

/* eslint-enable */
