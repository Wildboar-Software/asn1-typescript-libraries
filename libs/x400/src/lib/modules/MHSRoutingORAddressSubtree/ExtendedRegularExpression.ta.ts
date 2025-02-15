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
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta';
export {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta';
import { ub_extended_regular_expression } from '../MHSRoutingORAddressSubtree/ub-extended-regular-expression.va';
export { ub_extended_regular_expression } from '../MHSRoutingORAddressSubtree/ub-extended-regular-expression.va';

/* START_OF_SYMBOL_DEFINITION ExtendedRegularExpression */
/**
 * @summary ExtendedRegularExpression
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedRegularExpression  ::=
 *   UniversalOrBMPString{ub-extended-regular-expression}
 * ```
 */
export type ExtendedRegularExpression = UniversalOrBMPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION ExtendedRegularExpression */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedRegularExpression */
let _cached_decoder_for_ExtendedRegularExpression: $.ASN1Decoder<ExtendedRegularExpression> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedRegularExpression */

/* START_OF_SYMBOL_DEFINITION _decode_ExtendedRegularExpression */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedRegularExpression
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedRegularExpression} The decoded data structure.
 */
export function _decode_ExtendedRegularExpression(el: _Element) {
    if (!_cached_decoder_for_ExtendedRegularExpression) {
        _cached_decoder_for_ExtendedRegularExpression = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_ExtendedRegularExpression(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtendedRegularExpression */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedRegularExpression */
let _cached_encoder_for_ExtendedRegularExpression: $.ASN1Encoder<ExtendedRegularExpression> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedRegularExpression */

/* START_OF_SYMBOL_DEFINITION _encode_ExtendedRegularExpression */
/**
 * @summary Encodes a(n) ExtendedRegularExpression into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedRegularExpression, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedRegularExpression(
    value: ExtendedRegularExpression,
    elGetter: $.ASN1Encoder<ExtendedRegularExpression>
) {
    if (!_cached_encoder_for_ExtendedRegularExpression) {
        _cached_encoder_for_ExtendedRegularExpression = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_ExtendedRegularExpression(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtendedRegularExpression */

/* eslint-enable */
