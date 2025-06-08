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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    PerceivedTroubleSeverity_number,
    PerceivedTroubleSeverity_number_outOfService /* IMPORTED_LONG_NAMED_INTEGER */,
    outOfService /* IMPORTED_SHORT_NAMED_INTEGER */,
    PerceivedTroubleSeverity_number_backInService /* IMPORTED_LONG_NAMED_INTEGER */,
    backInService /* IMPORTED_SHORT_NAMED_INTEGER */,
    PerceivedTroubleSeverity_number_serviceImpairment /* IMPORTED_LONG_NAMED_INTEGER */,
    serviceImpairment /* IMPORTED_SHORT_NAMED_INTEGER */,
    PerceivedTroubleSeverity_number_nonServiceAffectingTrouble /* IMPORTED_LONG_NAMED_INTEGER */,
    nonServiceAffectingTrouble /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_PerceivedTroubleSeverity_number,
    _encode_PerceivedTroubleSeverity_number,
} from '../X790ASN1Module/PerceivedTroubleSeverity-number.ta';
export {
    PerceivedTroubleSeverity_number,
    PerceivedTroubleSeverity_number_outOfService /* IMPORTED_LONG_NAMED_INTEGER */,
    outOfService /* IMPORTED_SHORT_NAMED_INTEGER */,
    PerceivedTroubleSeverity_number_backInService /* IMPORTED_LONG_NAMED_INTEGER */,
    backInService /* IMPORTED_SHORT_NAMED_INTEGER */,
    PerceivedTroubleSeverity_number_serviceImpairment /* IMPORTED_LONG_NAMED_INTEGER */,
    serviceImpairment /* IMPORTED_SHORT_NAMED_INTEGER */,
    PerceivedTroubleSeverity_number_nonServiceAffectingTrouble /* IMPORTED_LONG_NAMED_INTEGER */,
    nonServiceAffectingTrouble /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_PerceivedTroubleSeverity_number,
    _encode_PerceivedTroubleSeverity_number,
} from '../X790ASN1Module/PerceivedTroubleSeverity-number.ta';

/* START_OF_SYMBOL_DEFINITION PerceivedTroubleSeverity */
/**
 * @summary PerceivedTroubleSeverity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerceivedTroubleSeverity  ::=  CHOICE {
 *   number
 *     INTEGER {-- Administrations may provide additional
 *              -- values and/or restrict the values supported
 *              outOfService(0), backInService(1), serviceImpairment(2),
 *              nonServiceAffectingTrouble(3)},
 *   identifier  OBJECT IDENTIFIER,
 *   ...
 * }
 * ```
 */
export type PerceivedTroubleSeverity =
    | { number_: PerceivedTroubleSeverity_number } /* CHOICE_ALT_ROOT */
    | { identifier: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION PerceivedTroubleSeverity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PerceivedTroubleSeverity */
let _cached_decoder_for_PerceivedTroubleSeverity: $.ASN1Decoder<PerceivedTroubleSeverity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PerceivedTroubleSeverity */

/* START_OF_SYMBOL_DEFINITION _decode_PerceivedTroubleSeverity */
/**
 * @summary Decodes an ASN.1 element into a(n) PerceivedTroubleSeverity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerceivedTroubleSeverity} The decoded data structure.
 */
export function _decode_PerceivedTroubleSeverity(el: _Element) {
    if (!_cached_decoder_for_PerceivedTroubleSeverity) {
        _cached_decoder_for_PerceivedTroubleSeverity = $._decode_extensible_choice<PerceivedTroubleSeverity>(
            {
                'UNIVERSAL 2': [
                    'number_',
                    _decode_PerceivedTroubleSeverity_number,
                ],
                'UNIVERSAL 6': ['identifier', $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_PerceivedTroubleSeverity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PerceivedTroubleSeverity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PerceivedTroubleSeverity */
let _cached_encoder_for_PerceivedTroubleSeverity: $.ASN1Encoder<PerceivedTroubleSeverity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PerceivedTroubleSeverity */

/* START_OF_SYMBOL_DEFINITION _encode_PerceivedTroubleSeverity */
/**
 * @summary Encodes a(n) PerceivedTroubleSeverity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerceivedTroubleSeverity, encoded as an ASN.1 Element.
 */
export function _encode_PerceivedTroubleSeverity(
    value: PerceivedTroubleSeverity,
    elGetter: $.ASN1Encoder<PerceivedTroubleSeverity>
) {
    if (!_cached_encoder_for_PerceivedTroubleSeverity) {
        _cached_encoder_for_PerceivedTroubleSeverity = $._encode_choice<PerceivedTroubleSeverity>(
            {
                number_: _encode_PerceivedTroubleSeverity_number,
                identifier: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_PerceivedTroubleSeverity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PerceivedTroubleSeverity */

/* eslint-enable */
