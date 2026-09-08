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
import { ServiceCrossRefID, _decode_ServiceCrossRefID, _encode_ServiceCrossRefID } from "../CSTA-capability-exchange/ServiceCrossRefID.ta.mjs";
// export { ServiceCrossRefID, _decode_ServiceCrossRefID, _encode_ServiceCrossRefID } from "../CSTA-capability-exchange/ServiceCrossRefID.ta.mjs";
import { RegistrationList, _decode_RegistrationList, _encode_RegistrationList } from "../CSTA-status-reporting/RegistrationList.ta.mjs";
// export { RegistrationList, _decode_RegistrationList, _encode_RegistrationList } from "../CSTA-status-reporting/RegistrationList.ta.mjs";


/**
 * @summary GetRegistrationsRes_crossRefIDorRegistrationData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetRegistrationsRes-crossRefIDorRegistrationData ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type GetRegistrationsRes_crossRefIDorRegistrationData =
    { serviceCrossRefID: ServiceCrossRefID } /* CHOICE_ALT_ROOT */
    | { registrationList: RegistrationList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetRegistrationsRes_crossRefIDorRegistrationData: $.ASN1Decoder<GetRegistrationsRes_crossRefIDorRegistrationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetRegistrationsRes_crossRefIDorRegistrationData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetRegistrationsRes_crossRefIDorRegistrationData (el: _Element): GetRegistrationsRes_crossRefIDorRegistrationData {
    if (!_cached_decoder_for_GetRegistrationsRes_crossRefIDorRegistrationData) { _cached_decoder_for_GetRegistrationsRes_crossRefIDorRegistrationData = $._decode_inextensible_choice<GetRegistrationsRes_crossRefIDorRegistrationData>({
    "UNIVERSAL 4": [ "serviceCrossRefID", _decode_ServiceCrossRefID ],
    "UNIVERSAL 16": [ "registrationList", _decode_RegistrationList ]
}); }
    return _cached_decoder_for_GetRegistrationsRes_crossRefIDorRegistrationData(el);
}

let _cached_encoder_for_GetRegistrationsRes_crossRefIDorRegistrationData: $.ASN1Encoder<GetRegistrationsRes_crossRefIDorRegistrationData> | null = null;

/**
 * @summary Encodes a(n) GetRegistrationsRes_crossRefIDorRegistrationData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetRegistrationsRes_crossRefIDorRegistrationData, encoded as an ASN.1 Element.
 */
export
function _encode_GetRegistrationsRes_crossRefIDorRegistrationData (value: GetRegistrationsRes_crossRefIDorRegistrationData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetRegistrationsRes_crossRefIDorRegistrationData) { _cached_encoder_for_GetRegistrationsRes_crossRefIDorRegistrationData = $._encode_choice<GetRegistrationsRes_crossRefIDorRegistrationData>({
    "serviceCrossRefID": _encode_ServiceCrossRefID,
    "registrationList": _encode_RegistrationList,
}, $.BER); }
    return _cached_encoder_for_GetRegistrationsRes_crossRefIDorRegistrationData(value, elGetter);
}


/* eslint-enable */
