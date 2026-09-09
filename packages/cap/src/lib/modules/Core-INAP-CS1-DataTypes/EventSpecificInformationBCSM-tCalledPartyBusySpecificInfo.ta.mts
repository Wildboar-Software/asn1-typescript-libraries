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
import { Cause, _decode_Cause, _encode_Cause } from "../Core-INAP-CS1-DataTypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../Core-INAP-CS1-DataTypes/Cause.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-tCalledPartyBusySpecificInfo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo {
    constructor (
        /**
         * @summary `busyCause`.
         * @public
         * @readonly
         */
        readonly busyCause: OPTIONAL<Cause>
    ) {}

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo`.
     * @returns {EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo)]: (EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo)[_K] }): EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo {
        return new EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo(_o.busyCause);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("busyCause", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo (el: _Element): EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo) { _cached_decoder_for_EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo = function (el: _Element): EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo {
    let busyCause: OPTIONAL<Cause>;
    const callbacks: $.DecodingMap = {
        "busyCause": (_el: _Element): void => { busyCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo,
        undefined,
    );
    return new EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo(
        busyCause
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo (value: EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo) { _cached_encoder_for_EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo = function (value: EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.busyCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.busyCause, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_tCalledPartyBusySpecificInfo(value, elGetter);
}


/* eslint-enable */
