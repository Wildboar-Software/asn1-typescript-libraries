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
    CertificateList,
    _decode_CertificateList,
    _encode_CertificateList,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/CertificateList.ta.js';
export {
    CertificateList,
    _decode_CertificateList,
    _encode_CertificateList,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/CertificateList.ta.js';
import {
    OtherRevocationInfoFormat,
    _decode_OtherRevocationInfoFormat,
    _encode_OtherRevocationInfoFormat,
} from '../AuthenticationContextForBiometrics/OtherRevocationInfoFormat.ta.js';
export {
    OtherRevocationInfoFormat,
    _decode_OtherRevocationInfoFormat,
    _encode_OtherRevocationInfoFormat,
} from '../AuthenticationContextForBiometrics/OtherRevocationInfoFormat.ta.js';

/* START_OF_SYMBOL_DEFINITION RevocationInfoChoice */
/**
 * @summary RevocationInfoChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevocationInfoChoice  ::=  CHOICE {
 *     crl CertificateList,
 *     other [1] IMPLICIT OtherRevocationInfoFormat }
 * ```
 */
export type RevocationInfoChoice =
    | { crl: CertificateList } /* CHOICE_ALT_ROOT */
    | { other: OtherRevocationInfoFormat } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION RevocationInfoChoice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RevocationInfoChoice */
let _cached_decoder_for_RevocationInfoChoice: $.ASN1Decoder<RevocationInfoChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RevocationInfoChoice */

/* START_OF_SYMBOL_DEFINITION _decode_RevocationInfoChoice */
/**
 * @summary Decodes an ASN.1 element into a(n) RevocationInfoChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevocationInfoChoice} The decoded data structure.
 */
export function _decode_RevocationInfoChoice(el: _Element) {
    if (!_cached_decoder_for_RevocationInfoChoice) {
        _cached_decoder_for_RevocationInfoChoice = $._decode_inextensible_choice<RevocationInfoChoice>(
            {
                'UNIVERSAL 16': ['crl', _decode_CertificateList],
                'CONTEXT 1': [
                    'other',
                    $._decode_implicit<OtherRevocationInfoFormat>(
                        () => _decode_OtherRevocationInfoFormat
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_RevocationInfoChoice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RevocationInfoChoice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RevocationInfoChoice */
let _cached_encoder_for_RevocationInfoChoice: $.ASN1Encoder<RevocationInfoChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RevocationInfoChoice */

/* START_OF_SYMBOL_DEFINITION _encode_RevocationInfoChoice */
/**
 * @summary Encodes a(n) RevocationInfoChoice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevocationInfoChoice, encoded as an ASN.1 Element.
 */
export function _encode_RevocationInfoChoice(
    value: RevocationInfoChoice,
    elGetter: $.ASN1Encoder<RevocationInfoChoice>
) {
    if (!_cached_encoder_for_RevocationInfoChoice) {
        _cached_encoder_for_RevocationInfoChoice = $._encode_choice<RevocationInfoChoice>(
            {
                crl: _encode_CertificateList,
                other: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_OtherRevocationInfoFormat,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RevocationInfoChoice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RevocationInfoChoice */

/* eslint-enable */
