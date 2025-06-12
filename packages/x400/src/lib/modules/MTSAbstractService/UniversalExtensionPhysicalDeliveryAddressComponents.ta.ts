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
} from '../MTSAbstractService/UniversalPDSParameter.ta.js';
export {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from '../MTSAbstractService/UniversalPDSParameter.ta.js';

/* START_OF_SYMBOL_DEFINITION UniversalExtensionPhysicalDeliveryAddressComponents */
/**
 * @summary UniversalExtensionPhysicalDeliveryAddressComponents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalExtensionPhysicalDeliveryAddressComponents  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalExtensionPhysicalDeliveryAddressComponents = UniversalPDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalExtensionPhysicalDeliveryAddressComponents */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalExtensionPhysicalDeliveryAddressComponents */
let _cached_decoder_for_UniversalExtensionPhysicalDeliveryAddressComponents: $.ASN1Decoder<UniversalExtensionPhysicalDeliveryAddressComponents> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalExtensionPhysicalDeliveryAddressComponents */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalExtensionPhysicalDeliveryAddressComponents */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalExtensionPhysicalDeliveryAddressComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalExtensionPhysicalDeliveryAddressComponents} The decoded data structure.
 */
export function _decode_UniversalExtensionPhysicalDeliveryAddressComponents(
    el: _Element
) {
    if (
        !_cached_decoder_for_UniversalExtensionPhysicalDeliveryAddressComponents
    ) {
        _cached_decoder_for_UniversalExtensionPhysicalDeliveryAddressComponents = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalExtensionPhysicalDeliveryAddressComponents(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalExtensionPhysicalDeliveryAddressComponents */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalExtensionPhysicalDeliveryAddressComponents */
let _cached_encoder_for_UniversalExtensionPhysicalDeliveryAddressComponents: $.ASN1Encoder<UniversalExtensionPhysicalDeliveryAddressComponents> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalExtensionPhysicalDeliveryAddressComponents */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalExtensionPhysicalDeliveryAddressComponents */
/**
 * @summary Encodes a(n) UniversalExtensionPhysicalDeliveryAddressComponents into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalExtensionPhysicalDeliveryAddressComponents, encoded as an ASN.1 Element.
 */
export function _encode_UniversalExtensionPhysicalDeliveryAddressComponents(
    value: UniversalExtensionPhysicalDeliveryAddressComponents,
    elGetter: $.ASN1Encoder<UniversalExtensionPhysicalDeliveryAddressComponents>
) {
    if (
        !_cached_encoder_for_UniversalExtensionPhysicalDeliveryAddressComponents
    ) {
        _cached_encoder_for_UniversalExtensionPhysicalDeliveryAddressComponents = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalExtensionPhysicalDeliveryAddressComponents(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalExtensionPhysicalDeliveryAddressComponents */

/* eslint-enable */
