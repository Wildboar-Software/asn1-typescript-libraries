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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { RegistrationType, _enum_for_RegistrationType, RegistrationType_escapeRegister /* IMPORTED_LONG_ENUMERATION_ITEM */, escapeRegister /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegistrationType_ioRegister /* IMPORTED_LONG_ENUMERATION_ITEM */, ioRegister /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegistrationType_routeRegister /* IMPORTED_LONG_ENUMERATION_ITEM */, routeRegister /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegistrationType_sysStatRegister /* IMPORTED_LONG_ENUMERATION_ITEM */, sysStatRegister /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RegistrationType, _encode_RegistrationType } from "../CSTA-status-reporting/RegistrationType.ta.mjs";
// export { RegistrationType, _enum_for_RegistrationType, RegistrationType_escapeRegister /* IMPORTED_LONG_ENUMERATION_ITEM */, escapeRegister /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegistrationType_ioRegister /* IMPORTED_LONG_ENUMERATION_ITEM */, ioRegister /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegistrationType_routeRegister /* IMPORTED_LONG_ENUMERATION_ITEM */, routeRegister /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegistrationType_sysStatRegister /* IMPORTED_LONG_ENUMERATION_ITEM */, sysStatRegister /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RegistrationType, _encode_RegistrationType } from "../CSTA-status-reporting/RegistrationType.ta.mjs";


/**
 * @summary RegistrationTypeList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationTypeList  ::=  SEQUENCE OF RegistrationType
 * ```
 */
export
type RegistrationTypeList = RegistrationType[]; // SequenceOfType

let _cached_decoder_for_RegistrationTypeList: $.ASN1Decoder<RegistrationTypeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationTypeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegistrationTypeList (el: _Element): RegistrationTypeList {
    if (!_cached_decoder_for_RegistrationTypeList) { _cached_decoder_for_RegistrationTypeList = $._decodeSequenceOf<RegistrationType>(() => _decode_RegistrationType); }
    return _cached_decoder_for_RegistrationTypeList(el);
}

let _cached_encoder_for_RegistrationTypeList: $.ASN1Encoder<RegistrationTypeList> | null = null;

/**
 * @summary Encodes a(n) RegistrationTypeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationTypeList, encoded as an ASN.1 Element.
 */
export
function _encode_RegistrationTypeList (value: RegistrationTypeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegistrationTypeList) { _cached_encoder_for_RegistrationTypeList = $._encodeSequenceOf<RegistrationType>(() => _encode_RegistrationType, $.BER); }
    return _cached_encoder_for_RegistrationTypeList(value, elGetter);
}


/* eslint-enable */
