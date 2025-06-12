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
    EDIMIdentifier,
    _decode_EDIMIdentifier,
    _encode_EDIMIdentifier,
} from '../EDIMSInformationObjects/EDIMIdentifier.ta.mjs';
export {
    EDIMIdentifier,
    _decode_EDIMIdentifier,
    _encode_EDIMIdentifier,
} from '../EDIMSInformationObjects/EDIMIdentifier.ta.mjs';
import { EXTERNAL_MESSAGE_REFERENCE } from '../EDIMSInformationObjects/EXTERNAL-MESSAGE-REFERENCE.oca.mjs';
export { EXTERNAL_MESSAGE_REFERENCE } from '../EDIMSInformationObjects/EXTERNAL-MESSAGE-REFERENCE.oca.mjs';

/* START_OF_SYMBOL_DEFINITION RelatedMessageReference */
/**
 * @summary RelatedMessageReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelatedMessageReference  ::=  CHOICE {
 *   edi-message-reference       [0]  EDIMIdentifier,
 *   external-message-reference  [1]  EXTERNAL-MESSAGE-REFERENCE.&id
 * }
 * ```
 */
export type RelatedMessageReference =
    | { edi_message_reference: EDIMIdentifier } /* CHOICE_ALT_ROOT */
    | { external_message_reference: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION RelatedMessageReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RelatedMessageReference */
let _cached_decoder_for_RelatedMessageReference: $.ASN1Decoder<RelatedMessageReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RelatedMessageReference */

/* START_OF_SYMBOL_DEFINITION _decode_RelatedMessageReference */
/**
 * @summary Decodes an ASN.1 element into a(n) RelatedMessageReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelatedMessageReference} The decoded data structure.
 */
export function _decode_RelatedMessageReference(el: _Element) {
    if (!_cached_decoder_for_RelatedMessageReference) {
        _cached_decoder_for_RelatedMessageReference = $._decode_inextensible_choice<RelatedMessageReference>(
            {
                'CONTEXT 0': [
                    'edi_message_reference',
                    $._decode_implicit<EDIMIdentifier>(
                        () => _decode_EDIMIdentifier
                    ),
                ],
                'CONTEXT 1': [
                    'external_message_reference',
                    $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_RelatedMessageReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RelatedMessageReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RelatedMessageReference */
let _cached_encoder_for_RelatedMessageReference: $.ASN1Encoder<RelatedMessageReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RelatedMessageReference */

/* START_OF_SYMBOL_DEFINITION _encode_RelatedMessageReference */
/**
 * @summary Encodes a(n) RelatedMessageReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedMessageReference, encoded as an ASN.1 Element.
 */
export function _encode_RelatedMessageReference(
    value: RelatedMessageReference,
    elGetter: $.ASN1Encoder<RelatedMessageReference>
) {
    if (!_cached_encoder_for_RelatedMessageReference) {
        _cached_encoder_for_RelatedMessageReference = $._encode_choice<RelatedMessageReference>(
            {
                edi_message_reference: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_EDIMIdentifier,
                    $.BER
                ),
                external_message_reference: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RelatedMessageReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RelatedMessageReference */

/* eslint-enable */
