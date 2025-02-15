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
    AUTHENTICATEDDATA,
    _get_decoder_for_AUTHENTICATEDDATA,
    _get_encoder_for_AUTHENTICATEDDATA,
} from '../AuthenticationContextForBiometrics/AUTHENTICATEDDATA.ta';
export {
    AUTHENTICATEDDATA,
    _get_decoder_for_AUTHENTICATEDDATA,
    _get_encoder_for_AUTHENTICATEDDATA,
} from '../AuthenticationContextForBiometrics/AUTHENTICATEDDATA.ta';
import {
    EncapsulatedContentInfoACBio,
    _decode_EncapsulatedContentInfoACBio,
    _encode_EncapsulatedContentInfoACBio,
} from '../AuthenticationContextForBiometrics/EncapsulatedContentInfoACBio.ta';
export {
    EncapsulatedContentInfoACBio,
    _decode_EncapsulatedContentInfoACBio,
    _encode_EncapsulatedContentInfoACBio,
} from '../AuthenticationContextForBiometrics/EncapsulatedContentInfoACBio.ta';

/* START_OF_SYMBOL_DEFINITION AuthenticatedDataACBio */
/**
 * @summary AuthenticatedDataACBio
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticatedDataACBio  ::=  AUTHENTICATEDDATA { EncapsulatedContentInfoACBio }
 * ```
 */
export type AuthenticatedDataACBio = AUTHENTICATEDDATA<EncapsulatedContentInfoACBio>; // DefinedType
/* END_OF_SYMBOL_DEFINITION AuthenticatedDataACBio */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticatedDataACBio */
let _cached_decoder_for_AuthenticatedDataACBio: $.ASN1Decoder<AuthenticatedDataACBio> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticatedDataACBio */

/* START_OF_SYMBOL_DEFINITION _decode_AuthenticatedDataACBio */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticatedDataACBio
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticatedDataACBio} The decoded data structure.
 */
export function _decode_AuthenticatedDataACBio(el: _Element) {
    if (!_cached_decoder_for_AuthenticatedDataACBio) {
        _cached_decoder_for_AuthenticatedDataACBio = _get_decoder_for_AUTHENTICATEDDATA<EncapsulatedContentInfoACBio>(
            _decode_EncapsulatedContentInfoACBio
        );
    }
    return _cached_decoder_for_AuthenticatedDataACBio(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthenticatedDataACBio */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticatedDataACBio */
let _cached_encoder_for_AuthenticatedDataACBio: $.ASN1Encoder<AuthenticatedDataACBio> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticatedDataACBio */

/* START_OF_SYMBOL_DEFINITION _encode_AuthenticatedDataACBio */
/**
 * @summary Encodes a(n) AuthenticatedDataACBio into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticatedDataACBio, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticatedDataACBio(
    value: AuthenticatedDataACBio,
    elGetter: $.ASN1Encoder<AuthenticatedDataACBio>
) {
    if (!_cached_encoder_for_AuthenticatedDataACBio) {
        _cached_encoder_for_AuthenticatedDataACBio = _get_encoder_for_AUTHENTICATEDDATA<EncapsulatedContentInfoACBio>(
            _encode_EncapsulatedContentInfoACBio
        );
    }
    return _cached_encoder_for_AuthenticatedDataACBio(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthenticatedDataACBio */

/* eslint-enable */
