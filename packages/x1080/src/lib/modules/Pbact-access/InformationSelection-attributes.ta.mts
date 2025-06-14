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
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';

/* START_OF_SYMBOL_DEFINITION InformationSelection_attributes */
/**
 * @summary InformationSelection_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationSelection-attributes ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type InformationSelection_attributes =
    | { allAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { select: OBJECT_IDENTIFIER[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION InformationSelection_attributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationSelection_attributes */
let _cached_decoder_for_InformationSelection_attributes: $.ASN1Decoder<InformationSelection_attributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationSelection_attributes */

/* START_OF_SYMBOL_DEFINITION _decode_InformationSelection_attributes */
/**
 * @summary Decodes an ASN.1 element into a(n) InformationSelection_attributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InformationSelection_attributes} The decoded data structure.
 */
export function _decode_InformationSelection_attributes(el: _Element) {
    if (!_cached_decoder_for_InformationSelection_attributes) {
        _cached_decoder_for_InformationSelection_attributes = $._decode_extensible_choice<InformationSelection_attributes>(
            {
                'CONTEXT 0': [
                    'allAttributes',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'select',
                    $._decode_implicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSequenceOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_InformationSelection_attributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InformationSelection_attributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationSelection_attributes */
let _cached_encoder_for_InformationSelection_attributes: $.ASN1Encoder<InformationSelection_attributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationSelection_attributes */

/* START_OF_SYMBOL_DEFINITION _encode_InformationSelection_attributes */
/**
 * @summary Encodes a(n) InformationSelection_attributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationSelection_attributes, encoded as an ASN.1 Element.
 */
export function _encode_InformationSelection_attributes(
    value: InformationSelection_attributes,
    elGetter: $.ASN1Encoder<InformationSelection_attributes>
) {
    if (!_cached_encoder_for_InformationSelection_attributes) {
        _cached_encoder_for_InformationSelection_attributes = $._encode_choice<InformationSelection_attributes>(
            {
                allAttributes: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                select: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<OBJECT_IDENTIFIER>(
                            () => $._encodeObjectIdentifier,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_InformationSelection_attributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InformationSelection_attributes */

/* eslint-enable */
