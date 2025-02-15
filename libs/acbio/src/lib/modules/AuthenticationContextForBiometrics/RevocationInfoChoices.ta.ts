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
    RevocationInfoChoice,
    _decode_RevocationInfoChoice,
    _encode_RevocationInfoChoice,
} from '../AuthenticationContextForBiometrics/RevocationInfoChoice.ta';
export {
    RevocationInfoChoice,
    _decode_RevocationInfoChoice,
    _encode_RevocationInfoChoice,
} from '../AuthenticationContextForBiometrics/RevocationInfoChoice.ta';

/* START_OF_SYMBOL_DEFINITION RevocationInfoChoices */
/**
 * @summary RevocationInfoChoices
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevocationInfoChoices  ::=  SET OF RevocationInfoChoice
 * ```
 */
export type RevocationInfoChoices = RevocationInfoChoice[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION RevocationInfoChoices */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RevocationInfoChoices */
let _cached_decoder_for_RevocationInfoChoices: $.ASN1Decoder<RevocationInfoChoices> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RevocationInfoChoices */

/* START_OF_SYMBOL_DEFINITION _decode_RevocationInfoChoices */
/**
 * @summary Decodes an ASN.1 element into a(n) RevocationInfoChoices
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevocationInfoChoices} The decoded data structure.
 */
export function _decode_RevocationInfoChoices(el: _Element) {
    if (!_cached_decoder_for_RevocationInfoChoices) {
        _cached_decoder_for_RevocationInfoChoices = $._decodeSetOf<RevocationInfoChoice>(
            () => _decode_RevocationInfoChoice
        );
    }
    return _cached_decoder_for_RevocationInfoChoices(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RevocationInfoChoices */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RevocationInfoChoices */
let _cached_encoder_for_RevocationInfoChoices: $.ASN1Encoder<RevocationInfoChoices> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RevocationInfoChoices */

/* START_OF_SYMBOL_DEFINITION _encode_RevocationInfoChoices */
/**
 * @summary Encodes a(n) RevocationInfoChoices into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevocationInfoChoices, encoded as an ASN.1 Element.
 */
export function _encode_RevocationInfoChoices(
    value: RevocationInfoChoices,
    elGetter: $.ASN1Encoder<RevocationInfoChoices>
) {
    if (!_cached_encoder_for_RevocationInfoChoices) {
        _cached_encoder_for_RevocationInfoChoices = $._encodeSetOf<RevocationInfoChoice>(
            () => _encode_RevocationInfoChoice,
            $.BER
        );
    }
    return _cached_encoder_for_RevocationInfoChoices(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RevocationInfoChoices */

/* eslint-enable */
