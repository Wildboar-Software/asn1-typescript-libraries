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
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta';
export {
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta';
import {
    Criticality,
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    for_submission /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_transfer /* IMPORTED_LONG_NAMED_BIT */,
    for_transfer /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    for_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta';
export {
    Criticality,
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    for_submission /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_transfer /* IMPORTED_LONG_NAMED_BIT */,
    for_transfer /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    for_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta';
import {
    PhysicalForwardingAddressRequest,
    _enum_for_PhysicalForwardingAddressRequest,
    PhysicalForwardingAddressRequest_physical_forwarding_address_not_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    physical_forwarding_address_not_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PhysicalForwardingAddressRequest_physical_forwarding_address_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    physical_forwarding_address_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_PhysicalForwardingAddressRequest,
    _encode_PhysicalForwardingAddressRequest,
} from '../MTSAbstractService/PhysicalForwardingAddressRequest.ta';
export {
    PhysicalForwardingAddressRequest,
    _enum_for_PhysicalForwardingAddressRequest,
    PhysicalForwardingAddressRequest_physical_forwarding_address_not_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    physical_forwarding_address_not_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PhysicalForwardingAddressRequest_physical_forwarding_address_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    physical_forwarding_address_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_PhysicalForwardingAddressRequest,
    _encode_PhysicalForwardingAddressRequest,
} from '../MTSAbstractService/PhysicalForwardingAddressRequest.ta';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca';
export { EXTENSION } from '../MTSAbstractService/EXTENSION.oca';

/* START_OF_SYMBOL_DEFINITION physical_forwarding_address_request */
/**
 * @summary physical_forwarding_address_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-forwarding-address-request EXTENSION ::= {
 *   PhysicalForwardingAddressRequest
 *   IF ABSENT                physical-forwarding-address-not-requested,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:8
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<PhysicalForwardingAddressRequest>}
 * @implements {EXTENSION<PhysicalForwardingAddressRequest>}
 */
export const physical_forwarding_address_request: EXTENSION<PhysicalForwardingAddressRequest> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_PhysicalForwardingAddressRequest,
    },
    encoderFor: {
        '&Type': _encode_PhysicalForwardingAddressRequest,
    },
    '&absent': physical_forwarding_address_not_requested /* OBJECT_FIELD_SETTING */,
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(Math.max(0, 1, 2));
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 8,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION physical_forwarding_address_request */

/* eslint-enable */
