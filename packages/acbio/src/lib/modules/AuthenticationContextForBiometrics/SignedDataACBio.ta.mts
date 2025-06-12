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
    SIGNEDDATA,
    _get_decoder_for_SIGNEDDATA,
    _get_encoder_for_SIGNEDDATA,
} from '../AuthenticationContextForBiometrics/SIGNEDDATA.ta.mjs';
export {
    SIGNEDDATA,
    _get_decoder_for_SIGNEDDATA,
    _get_encoder_for_SIGNEDDATA,
} from '../AuthenticationContextForBiometrics/SIGNEDDATA.ta.mjs';
import {
    EncapsulatedContentInfoACBio,
    _decode_EncapsulatedContentInfoACBio,
    _encode_EncapsulatedContentInfoACBio,
} from '../AuthenticationContextForBiometrics/EncapsulatedContentInfoACBio.ta.mjs';
export {
    EncapsulatedContentInfoACBio,
    _decode_EncapsulatedContentInfoACBio,
    _encode_EncapsulatedContentInfoACBio,
} from '../AuthenticationContextForBiometrics/EncapsulatedContentInfoACBio.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SignedDataACBio */
/**
 * @summary SignedDataACBio
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedDataACBio  ::=  SIGNEDDATA { EncapsulatedContentInfoACBio }
 * ```
 */
export type SignedDataACBio = SIGNEDDATA<EncapsulatedContentInfoACBio>; // DefinedType
/* END_OF_SYMBOL_DEFINITION SignedDataACBio */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedDataACBio */
let _cached_decoder_for_SignedDataACBio: $.ASN1Decoder<SignedDataACBio> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedDataACBio */

/* START_OF_SYMBOL_DEFINITION _decode_SignedDataACBio */
/**
 * @summary Decodes an ASN.1 element into a(n) SignedDataACBio
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedDataACBio} The decoded data structure.
 */
export function _decode_SignedDataACBio(el: _Element) {
    if (!_cached_decoder_for_SignedDataACBio) {
        _cached_decoder_for_SignedDataACBio = _get_decoder_for_SIGNEDDATA<EncapsulatedContentInfoACBio>(
            _decode_EncapsulatedContentInfoACBio
        );
    }
    return _cached_decoder_for_SignedDataACBio(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignedDataACBio */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedDataACBio */
let _cached_encoder_for_SignedDataACBio: $.ASN1Encoder<SignedDataACBio> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedDataACBio */

/* START_OF_SYMBOL_DEFINITION _encode_SignedDataACBio */
/**
 * @summary Encodes a(n) SignedDataACBio into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedDataACBio, encoded as an ASN.1 Element.
 */
export function _encode_SignedDataACBio(
    value: SignedDataACBio,
    elGetter: $.ASN1Encoder<SignedDataACBio>
) {
    if (!_cached_encoder_for_SignedDataACBio) {
        _cached_encoder_for_SignedDataACBio = _get_encoder_for_SIGNEDDATA<EncapsulatedContentInfoACBio>(
            _encode_EncapsulatedContentInfoACBio
        );
    }
    return _cached_encoder_for_SignedDataACBio(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignedDataACBio */

/* eslint-enable */
