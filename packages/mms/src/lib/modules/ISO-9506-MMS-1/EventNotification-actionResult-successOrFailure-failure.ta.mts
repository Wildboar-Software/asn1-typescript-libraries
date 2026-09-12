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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
import { ServiceError, _decode_ServiceError, _encode_ServiceError } from "../ISO-9506-MMS-1/ServiceError.ta.mjs";
// export { ServiceError, _decode_ServiceError, _encode_ServiceError } from "../ISO-9506-MMS-1/ServiceError.ta.mjs";


/**
 * @summary EventNotification_actionResult_successOrFailure_failure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventNotification-actionResult-successOrFailure-failure ::= SEQUENCE {
 *     modifierPosition [0] IMPLICIT Unsigned32 OPTIONAL,
 *     serviceError [1] IMPLICIT ServiceError
 * }
 * ```
 * 
 * @class
 */
export
class EventNotification_actionResult_successOrFailure_failure {
    constructor (
        /**
         * @summary `modifierPosition`.
         * @public
         * @readonly
         */
        readonly modifierPosition: OPTIONAL<Unsigned32>,
        /**
         * @summary `serviceError`.
         * @public
         * @readonly
         */
        readonly serviceError: ServiceError
    ) {}

    /**
     * @summary Restructures an object into a EventNotification_actionResult_successOrFailure_failure
     * @description
     * 
     * This takes an `object` and converts it to a `EventNotification_actionResult_successOrFailure_failure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventNotification_actionResult_successOrFailure_failure`.
     * @returns {EventNotification_actionResult_successOrFailure_failure}
     */
    public static _from_object (_o: { [_K in keyof (EventNotification_actionResult_successOrFailure_failure)]: (EventNotification_actionResult_successOrFailure_failure)[_K] }): EventNotification_actionResult_successOrFailure_failure {
        return new EventNotification_actionResult_successOrFailure_failure(_o.modifierPosition, _o.serviceError);
    }


}

/**
 * @summary The Leading Root Component Types of EventNotification_actionResult_successOrFailure_failure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventNotification_actionResult_successOrFailure_failure: $.ComponentSpec[] = [
    new $.ComponentSpec("modifierPosition", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceError", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EventNotification_actionResult_successOrFailure_failure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventNotification_actionResult_successOrFailure_failure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventNotification_actionResult_successOrFailure_failure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventNotification_actionResult_successOrFailure_failure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventNotification_actionResult_successOrFailure_failure: $.ASN1Decoder<EventNotification_actionResult_successOrFailure_failure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventNotification_actionResult_successOrFailure_failure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventNotification_actionResult_successOrFailure_failure (el: _Element): EventNotification_actionResult_successOrFailure_failure {
    if (!_cached_decoder_for_EventNotification_actionResult_successOrFailure_failure) { _cached_decoder_for_EventNotification_actionResult_successOrFailure_failure = function (el: _Element): EventNotification_actionResult_successOrFailure_failure {
    let modifierPosition: OPTIONAL<Unsigned32>;
    let serviceError!: ServiceError;
    const callbacks: $.DecodingMap = {
        "modifierPosition": (_el: _Element): void => { modifierPosition = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); },
        "serviceError": (_el: _Element): void => { serviceError = $._decode_implicit<ServiceError>(() => _decode_ServiceError)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventNotification_actionResult_successOrFailure_failure,
        _extension_additions_list_spec_for_EventNotification_actionResult_successOrFailure_failure,
        _root_component_type_list_2_spec_for_EventNotification_actionResult_successOrFailure_failure,
        undefined,
    );
    return new EventNotification_actionResult_successOrFailure_failure(
        modifierPosition,
        serviceError
    );
}; }
    return _cached_decoder_for_EventNotification_actionResult_successOrFailure_failure(el);
}

let _cached_encoder_for_EventNotification_actionResult_successOrFailure_failure: $.ASN1Encoder<EventNotification_actionResult_successOrFailure_failure> | null = null;

/**
 * @summary Encodes a(n) EventNotification_actionResult_successOrFailure_failure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventNotification_actionResult_successOrFailure_failure, encoded as an ASN.1 Element.
 */
export
function _encode_EventNotification_actionResult_successOrFailure_failure (value: EventNotification_actionResult_successOrFailure_failure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventNotification_actionResult_successOrFailure_failure) { _cached_encoder_for_EventNotification_actionResult_successOrFailure_failure = function (value: EventNotification_actionResult_successOrFailure_failure, elGetter: $.ASN1Encoder<EventNotification_actionResult_successOrFailure_failure>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.modifierPosition === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Unsigned32, $.BER)(value.modifierPosition, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceError, $.BER)(value.serviceError, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventNotification_actionResult_successOrFailure_failure(value, elGetter);
}


/* eslint-enable */
