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
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from '../MTSAbstractService/PDSParameter.ta';
export {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from '../MTSAbstractService/PDSParameter.ta';

/* START_OF_SYMBOL_DEFINITION ExtensionORAddressComponents */
/**
 * @summary ExtensionORAddressComponents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionORAddressComponents  ::=  PDSParameter
 * ```
 */
export type ExtensionORAddressComponents = PDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION ExtensionORAddressComponents */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionORAddressComponents */
let _cached_decoder_for_ExtensionORAddressComponents: $.ASN1Decoder<ExtensionORAddressComponents> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionORAddressComponents */

/* START_OF_SYMBOL_DEFINITION _decode_ExtensionORAddressComponents */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionORAddressComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionORAddressComponents} The decoded data structure.
 */
export function _decode_ExtensionORAddressComponents(el: _Element) {
    if (!_cached_decoder_for_ExtensionORAddressComponents) {
        _cached_decoder_for_ExtensionORAddressComponents = _decode_PDSParameter;
    }
    return _cached_decoder_for_ExtensionORAddressComponents(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtensionORAddressComponents */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionORAddressComponents */
let _cached_encoder_for_ExtensionORAddressComponents: $.ASN1Encoder<ExtensionORAddressComponents> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionORAddressComponents */

/* START_OF_SYMBOL_DEFINITION _encode_ExtensionORAddressComponents */
/**
 * @summary Encodes a(n) ExtensionORAddressComponents into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionORAddressComponents, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionORAddressComponents(
    value: ExtensionORAddressComponents,
    elGetter: $.ASN1Encoder<ExtensionORAddressComponents>
) {
    if (!_cached_encoder_for_ExtensionORAddressComponents) {
        _cached_encoder_for_ExtensionORAddressComponents = _encode_PDSParameter;
    }
    return _cached_encoder_for_ExtensionORAddressComponents(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtensionORAddressComponents */

/* eslint-enable */
