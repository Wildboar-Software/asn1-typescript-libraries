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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TriggerItemAssignment, _decode_TriggerItemAssignment, _encode_TriggerItemAssignment } from "../AIN-Parameters/TriggerItemAssignment.ta.mjs";
// export { TriggerItemAssignment, _decode_TriggerItemAssignment, _encode_TriggerItemAssignment } from "../AIN-Parameters/TriggerItemAssignment.ta.mjs";
import { SSPUserResource, _decode_SSPUserResource, _encode_SSPUserResource } from "../AIN-Parameters/SSPUserResource.ta.mjs";
// export { SSPUserResource, _decode_SSPUserResource, _encode_SSPUserResource } from "../AIN-Parameters/SSPUserResource.ta.mjs";
import { SrhrGroup, _decode_SrhrGroup, _encode_SrhrGroup } from "../AIN-Parameters/SrhrGroup.ta.mjs";
// export { SrhrGroup, _decode_SrhrGroup, _encode_SrhrGroup } from "../AIN-Parameters/SrhrGroup.ta.mjs";
import { NetworkTestDesignator, _decode_NetworkTestDesignator, _encode_NetworkTestDesignator } from "../AIN-Parameters/NetworkTestDesignator.ta.mjs";
// export { NetworkTestDesignator, _decode_NetworkTestDesignator, _encode_NetworkTestDesignator } from "../AIN-Parameters/NetworkTestDesignator.ta.mjs";
import { OperationsMonitoringAssignment, _decode_OperationsMonitoringAssignment, _encode_OperationsMonitoringAssignment } from "../AIN-Parameters/OperationsMonitoringAssignment.ta.mjs";
// export { OperationsMonitoringAssignment, _decode_OperationsMonitoringAssignment, _encode_OperationsMonitoringAssignment } from "../AIN-Parameters/OperationsMonitoringAssignment.ta.mjs";


/**
 * @summary AdministrableObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdministrableObject  ::=  CHOICE{
 *         triggerItemAssignment TriggerItemAssignment,
 *         sSPUserResource SSPUserResource,
 *         srhrGroup SrhrGroup,
 *         networkTestDesignator NetworkTestDesignator,
 *         operationsMonitoringAssignment OperationsMonitoringAssignment
 *     }
 * ```
 */
export
type AdministrableObject =
    { triggerItemAssignment: TriggerItemAssignment } /* CHOICE_ALT_ROOT */
    | { sSPUserResource: SSPUserResource } /* CHOICE_ALT_ROOT */
    | { srhrGroup: SrhrGroup } /* CHOICE_ALT_ROOT */
    | { networkTestDesignator: NetworkTestDesignator } /* CHOICE_ALT_ROOT */
    | { operationsMonitoringAssignment: OperationsMonitoringAssignment } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AdministrableObject: $.ASN1Decoder<AdministrableObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdministrableObject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdministrableObject (el: _Element): AdministrableObject {
    if (!_cached_decoder_for_AdministrableObject) { _cached_decoder_for_AdministrableObject = $._decode_inextensible_choice<AdministrableObject>({
    "CONTEXT 102": [ "triggerItemAssignment", _decode_TriggerItemAssignment ],
    "CONTEXT 103": [ "sSPUserResource", _decode_SSPUserResource ],
    "CONTEXT 104": [ "srhrGroup", _decode_SrhrGroup ],
    "CONTEXT 97": [ "networkTestDesignator", _decode_NetworkTestDesignator ],
    "CONTEXT 118": [ "operationsMonitoringAssignment", _decode_OperationsMonitoringAssignment ]
}); }
    return _cached_decoder_for_AdministrableObject(el);
}

let _cached_encoder_for_AdministrableObject: $.ASN1Encoder<AdministrableObject> | null = null;

/**
 * @summary Encodes a(n) AdministrableObject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdministrableObject, encoded as an ASN.1 Element.
 */
export
function _encode_AdministrableObject (value: AdministrableObject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdministrableObject) { _cached_encoder_for_AdministrableObject = $._encode_choice<AdministrableObject>({
    "triggerItemAssignment": _encode_TriggerItemAssignment,
    "sSPUserResource": _encode_SSPUserResource,
    "srhrGroup": _encode_SrhrGroup,
    "networkTestDesignator": _encode_NetworkTestDesignator,
    "operationsMonitoringAssignment": _encode_OperationsMonitoringAssignment,
}, $.BER); }
    return _cached_encoder_for_AdministrableObject(value, elGetter);
}


/* eslint-enable */
