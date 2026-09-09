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
import { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-CS2-datatypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-CS2-datatypes/ServiceKey.ta.mjs";
import { FilteringCriteria_addressAndService, _decode_FilteringCriteria_addressAndService, _encode_FilteringCriteria_addressAndService } from "../IN-CS2-datatypes/FilteringCriteria-addressAndService.ta.mjs";
// export { FilteringCriteria_addressAndService, _decode_FilteringCriteria_addressAndService, _encode_FilteringCriteria_addressAndService } from "../IN-CS2-datatypes/FilteringCriteria-addressAndService.ta.mjs";


/**
 * @summary FilteringCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FilteringCriteria{PARAMETERS-BOUND:bound}  ::=  CHOICE {
 *   dialledNumber      [0]  Digits{bound},
 *   callingLineID      [1]  Digits{bound},
 *   serviceKey         [2]  ServiceKey,
 *   addressAndService
 *     [30]  SEQUENCE {calledAddressValue   [0]  Digits{bound},
 *                     serviceKey           [1]  ServiceKey,
 *                     callingAddressValue  [2]  Digits{bound} OPTIONAL,
 *                     locationNumber       [3]  LocationNumber{bound} OPTIONAL
 *   }
 * }
 * ```
 */
export
type FilteringCriteria =
    { dialledNumber: Digits } /* CHOICE_ALT_ROOT */
    | { callingLineID: Digits } /* CHOICE_ALT_ROOT */
    | { serviceKey: ServiceKey } /* CHOICE_ALT_ROOT */
    | { addressAndService: FilteringCriteria_addressAndService } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FilteringCriteria: $.ASN1Decoder<FilteringCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FilteringCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FilteringCriteria (el: _Element): FilteringCriteria {
    if (!_cached_decoder_for_FilteringCriteria) { _cached_decoder_for_FilteringCriteria = $._decode_inextensible_choice<FilteringCriteria>({
    "CONTEXT 0": [ "dialledNumber", $._decode_implicit<Digits>(() => _decode_Digits) ],
    "CONTEXT 1": [ "callingLineID", $._decode_implicit<Digits>(() => _decode_Digits) ],
    "CONTEXT 2": [ "serviceKey", $._decode_implicit<ServiceKey>(() => _decode_ServiceKey) ],
    "CONTEXT 30": [ "addressAndService", $._decode_implicit<FilteringCriteria_addressAndService>(() => _decode_FilteringCriteria_addressAndService) ]
}); }
    return _cached_decoder_for_FilteringCriteria(el);
}

let _cached_encoder_for_FilteringCriteria: $.ASN1Encoder<FilteringCriteria> | null = null;

/**
 * @summary Encodes a(n) FilteringCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilteringCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_FilteringCriteria (value: FilteringCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FilteringCriteria) { _cached_encoder_for_FilteringCriteria = $._encode_choice<FilteringCriteria>({
    "dialledNumber": $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER),
    "callingLineID": $._encode_implicit(_TagClass.context, 1, () => _encode_Digits, $.BER),
    "serviceKey": $._encode_implicit(_TagClass.context, 2, () => _encode_ServiceKey, $.BER),
    "addressAndService": $._encode_implicit(_TagClass.context, 30, () => _encode_FilteringCriteria_addressAndService, $.BER),
}, $.BER); }
    return _cached_encoder_for_FilteringCriteria(value, elGetter);
}


/* eslint-enable */
