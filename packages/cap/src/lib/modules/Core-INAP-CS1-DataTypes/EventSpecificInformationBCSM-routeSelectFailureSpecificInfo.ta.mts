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
import { Cause, _decode_Cause, _encode_Cause } from "../Core-INAP-CS1-DataTypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../Core-INAP-CS1-DataTypes/Cause.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM_routeSelectFailureSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-routeSelectFailureSpecificInfo ::= SEQUENCE {
 *     failureCause     [0] Cause     OPTIONAL
 *     --...--
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_routeSelectFailureSpecificInfo {
    constructor (
        /**
         * @summary `failureCause`.
         * @public
         * @readonly
         */
        readonly failureCause: OPTIONAL<Cause>
    ) {}

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_routeSelectFailureSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_routeSelectFailureSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_routeSelectFailureSpecificInfo`.
     * @returns {EventSpecificInformationBCSM_routeSelectFailureSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_routeSelectFailureSpecificInfo)]: (EventSpecificInformationBCSM_routeSelectFailureSpecificInfo)[_K] }): EventSpecificInformationBCSM_routeSelectFailureSpecificInfo {
        return new EventSpecificInformationBCSM_routeSelectFailureSpecificInfo(_o.failureCause);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_routeSelectFailureSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_routeSelectFailureSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_routeSelectFailureSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_routeSelectFailureSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_routeSelectFailureSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo (el: _Element): EventSpecificInformationBCSM_routeSelectFailureSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo) { _cached_decoder_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_routeSelectFailureSpecificInfo {
    let failureCause: OPTIONAL<Cause>;
    const callbacks: $.DecodingMap = {
        "failureCause": (_el: _Element): void => { failureCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo,
        undefined,
    );
    return new EventSpecificInformationBCSM_routeSelectFailureSpecificInfo(
        failureCause
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_routeSelectFailureSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_routeSelectFailureSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_routeSelectFailureSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo (value: EventSpecificInformationBCSM_routeSelectFailureSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo) { _cached_encoder_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo = function (value: EventSpecificInformationBCSM_routeSelectFailureSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_routeSelectFailureSpecificInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.failureCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.failureCause, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo(value, elGetter);
}


/* eslint-enable */
