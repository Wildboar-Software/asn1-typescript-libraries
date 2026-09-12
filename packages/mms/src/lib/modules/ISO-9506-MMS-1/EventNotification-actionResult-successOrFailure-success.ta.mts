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
import { ConfirmedServiceResponse, _decode_ConfirmedServiceResponse, _encode_ConfirmedServiceResponse } from "../ISO-9506-MMS-1/ConfirmedServiceResponse.ta.mjs";
// export { ConfirmedServiceResponse, _decode_ConfirmedServiceResponse, _encode_ConfirmedServiceResponse } from "../ISO-9506-MMS-1/ConfirmedServiceResponse.ta.mjs";
import { Response_Detail, _decode_Response_Detail, _encode_Response_Detail } from "../ISO-9506-MMS-1/Response-Detail.ta.mjs";
// export { Response_Detail, _decode_Response_Detail, _encode_Response_Detail } from "../ISO-9506-MMS-1/Response-Detail.ta.mjs";


/**
 * @summary EventNotification_actionResult_successOrFailure_success
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventNotification-actionResult-successOrFailure-success ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class EventNotification_actionResult_successOrFailure_success {
    constructor (
        /**
         * @summary `confirmedServiceResponse`.
         * @public
         * @readonly
         */
        readonly confirmedServiceResponse: ConfirmedServiceResponse,
        /**
         * @summary `cs_Response_Detail`.
         * @public
         * @readonly
         */
        readonly cs_Response_Detail: OPTIONAL<Response_Detail>
    ) {}

    /**
     * @summary Restructures an object into a EventNotification_actionResult_successOrFailure_success
     * @description
     * 
     * This takes an `object` and converts it to a `EventNotification_actionResult_successOrFailure_success`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventNotification_actionResult_successOrFailure_success`.
     * @returns {EventNotification_actionResult_successOrFailure_success}
     */
    public static _from_object (_o: { [_K in keyof (EventNotification_actionResult_successOrFailure_success)]: (EventNotification_actionResult_successOrFailure_success)[_K] }): EventNotification_actionResult_successOrFailure_success {
        return new EventNotification_actionResult_successOrFailure_success(_o.confirmedServiceResponse, _o.cs_Response_Detail);
    }


}

/**
 * @summary The Leading Root Component Types of EventNotification_actionResult_successOrFailure_success
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventNotification_actionResult_successOrFailure_success: $.ComponentSpec[] = [
    new $.ComponentSpec("confirmedServiceResponse", false, $.hasAnyTag),
    new $.ComponentSpec("cs-Response-Detail", true, $.hasTag(_TagClass.context, 79))
];

/**
 * @summary The Trailing Root Component Types of EventNotification_actionResult_successOrFailure_success
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventNotification_actionResult_successOrFailure_success: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventNotification_actionResult_successOrFailure_success
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventNotification_actionResult_successOrFailure_success: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventNotification_actionResult_successOrFailure_success: $.ASN1Decoder<EventNotification_actionResult_successOrFailure_success> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventNotification_actionResult_successOrFailure_success
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventNotification_actionResult_successOrFailure_success (el: _Element): EventNotification_actionResult_successOrFailure_success {
    if (!_cached_decoder_for_EventNotification_actionResult_successOrFailure_success) { _cached_decoder_for_EventNotification_actionResult_successOrFailure_success = function (el: _Element): EventNotification_actionResult_successOrFailure_success {
    let confirmedServiceResponse!: ConfirmedServiceResponse;
    let cs_Response_Detail: OPTIONAL<Response_Detail>;
    const callbacks: $.DecodingMap = {
        "confirmedServiceResponse": (_el: _Element): void => { confirmedServiceResponse = _decode_ConfirmedServiceResponse(_el); },
        "cs-Response-Detail": (_el: _Element): void => { cs_Response_Detail = $._decode_explicit<Response_Detail>(() => _decode_Response_Detail)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventNotification_actionResult_successOrFailure_success,
        _extension_additions_list_spec_for_EventNotification_actionResult_successOrFailure_success,
        _root_component_type_list_2_spec_for_EventNotification_actionResult_successOrFailure_success,
        undefined,
    );
    return new EventNotification_actionResult_successOrFailure_success(
        confirmedServiceResponse,
        cs_Response_Detail
    );
}; }
    return _cached_decoder_for_EventNotification_actionResult_successOrFailure_success(el);
}

let _cached_encoder_for_EventNotification_actionResult_successOrFailure_success: $.ASN1Encoder<EventNotification_actionResult_successOrFailure_success> | null = null;

/**
 * @summary Encodes a(n) EventNotification_actionResult_successOrFailure_success into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventNotification_actionResult_successOrFailure_success, encoded as an ASN.1 Element.
 */
export
function _encode_EventNotification_actionResult_successOrFailure_success (value: EventNotification_actionResult_successOrFailure_success, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventNotification_actionResult_successOrFailure_success) { _cached_encoder_for_EventNotification_actionResult_successOrFailure_success = function (value: EventNotification_actionResult_successOrFailure_success, elGetter: $.ASN1Encoder<EventNotification_actionResult_successOrFailure_success>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConfirmedServiceResponse(value.confirmedServiceResponse, $.BER),
            /* IF_ABSENT  */ ((value.cs_Response_Detail === undefined) ? undefined : $._encode_explicit(_TagClass.context, 79, () => _encode_Response_Detail, $.BER)(value.cs_Response_Detail, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventNotification_actionResult_successOrFailure_success(value, elGetter);
}


/* eslint-enable */
