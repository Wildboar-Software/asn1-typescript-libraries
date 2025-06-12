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
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from '../MTSAbstractService/UniversalPDSParameter.ta.mjs';
export {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from '../MTSAbstractService/UniversalPDSParameter.ta.mjs';

/* START_OF_SYMBOL_DEFINITION UniversalPhysicalDeliveryPersonalName */
/**
 * @summary UniversalPhysicalDeliveryPersonalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPhysicalDeliveryPersonalName  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPhysicalDeliveryPersonalName = UniversalPDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalPhysicalDeliveryPersonalName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPhysicalDeliveryPersonalName */
let _cached_decoder_for_UniversalPhysicalDeliveryPersonalName: $.ASN1Decoder<UniversalPhysicalDeliveryPersonalName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPhysicalDeliveryPersonalName */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalPhysicalDeliveryPersonalName */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPhysicalDeliveryPersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPhysicalDeliveryPersonalName} The decoded data structure.
 */
export function _decode_UniversalPhysicalDeliveryPersonalName(el: _Element) {
    if (!_cached_decoder_for_UniversalPhysicalDeliveryPersonalName) {
        _cached_decoder_for_UniversalPhysicalDeliveryPersonalName = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPhysicalDeliveryPersonalName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalPhysicalDeliveryPersonalName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPhysicalDeliveryPersonalName */
let _cached_encoder_for_UniversalPhysicalDeliveryPersonalName: $.ASN1Encoder<UniversalPhysicalDeliveryPersonalName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPhysicalDeliveryPersonalName */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalPhysicalDeliveryPersonalName */
/**
 * @summary Encodes a(n) UniversalPhysicalDeliveryPersonalName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPhysicalDeliveryPersonalName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPhysicalDeliveryPersonalName(
    value: UniversalPhysicalDeliveryPersonalName,
    elGetter: $.ASN1Encoder<UniversalPhysicalDeliveryPersonalName>
) {
    if (!_cached_encoder_for_UniversalPhysicalDeliveryPersonalName) {
        _cached_encoder_for_UniversalPhysicalDeliveryPersonalName = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPhysicalDeliveryPersonalName(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalPhysicalDeliveryPersonalName */

/* eslint-enable */
