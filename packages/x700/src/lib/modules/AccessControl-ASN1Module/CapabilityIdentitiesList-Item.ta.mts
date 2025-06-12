/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
    CapabilityIdentitiesList_Item_knownForm,
    _decode_CapabilityIdentitiesList_Item_knownForm,
    _encode_CapabilityIdentitiesList_Item_knownForm,
} from '../AccessControl-ASN1Module/CapabilityIdentitiesList-Item-knownForm.ta.mjs';
export {
    CapabilityIdentitiesList_Item_knownForm,
    _decode_CapabilityIdentitiesList_Item_knownForm,
    _encode_CapabilityIdentitiesList_Item_knownForm,
} from '../AccessControl-ASN1Module/CapabilityIdentitiesList-Item-knownForm.ta.mjs';
import {
    CapabilityIdentitiesList_Item_unknownForm,
    _decode_CapabilityIdentitiesList_Item_unknownForm,
    _encode_CapabilityIdentitiesList_Item_unknownForm,
} from '../AccessControl-ASN1Module/CapabilityIdentitiesList-Item-unknownForm.ta.mjs';
export {
    CapabilityIdentitiesList_Item_unknownForm,
    _decode_CapabilityIdentitiesList_Item_unknownForm,
    _encode_CapabilityIdentitiesList_Item_unknownForm,
} from '../AccessControl-ASN1Module/CapabilityIdentitiesList-Item-unknownForm.ta.mjs';

/* START_OF_SYMBOL_DEFINITION CapabilityIdentitiesList_Item */
/**
 * @summary CapabilityIdentitiesList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CapabilityIdentitiesList-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CapabilityIdentitiesList_Item =
    | {
          knownForm: CapabilityIdentitiesList_Item_knownForm;
      } /* CHOICE_ALT_ROOT */
    | {
          unknownForm: CapabilityIdentitiesList_Item_unknownForm;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION CapabilityIdentitiesList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CapabilityIdentitiesList_Item */
let _cached_decoder_for_CapabilityIdentitiesList_Item: $.ASN1Decoder<CapabilityIdentitiesList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CapabilityIdentitiesList_Item */

/* START_OF_SYMBOL_DEFINITION _decode_CapabilityIdentitiesList_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) CapabilityIdentitiesList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CapabilityIdentitiesList_Item} The decoded data structure.
 */
export function _decode_CapabilityIdentitiesList_Item(el: _Element) {
    if (!_cached_decoder_for_CapabilityIdentitiesList_Item) {
        _cached_decoder_for_CapabilityIdentitiesList_Item = $._decode_inextensible_choice<CapabilityIdentitiesList_Item>(
            {
                'CONTEXT 0': [
                    'knownForm',
                    $._decode_implicit<CapabilityIdentitiesList_Item_knownForm>(
                        () => _decode_CapabilityIdentitiesList_Item_knownForm
                    ),
                ],
                'CONTEXT 1': [
                    'unknownForm',
                    $._decode_implicit<CapabilityIdentitiesList_Item_unknownForm>(
                        () => _decode_CapabilityIdentitiesList_Item_unknownForm
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CapabilityIdentitiesList_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CapabilityIdentitiesList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CapabilityIdentitiesList_Item */
let _cached_encoder_for_CapabilityIdentitiesList_Item: $.ASN1Encoder<CapabilityIdentitiesList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CapabilityIdentitiesList_Item */

/* START_OF_SYMBOL_DEFINITION _encode_CapabilityIdentitiesList_Item */
/**
 * @summary Encodes a(n) CapabilityIdentitiesList_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CapabilityIdentitiesList_Item, encoded as an ASN.1 Element.
 */
export function _encode_CapabilityIdentitiesList_Item(
    value: CapabilityIdentitiesList_Item,
    elGetter: $.ASN1Encoder<CapabilityIdentitiesList_Item>
) {
    if (!_cached_encoder_for_CapabilityIdentitiesList_Item) {
        _cached_encoder_for_CapabilityIdentitiesList_Item = $._encode_choice<CapabilityIdentitiesList_Item>(
            {
                knownForm: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CapabilityIdentitiesList_Item_knownForm,
                    $.BER
                ),
                unknownForm: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CapabilityIdentitiesList_Item_unknownForm,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CapabilityIdentitiesList_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CapabilityIdentitiesList_Item */

/* eslint-enable */
