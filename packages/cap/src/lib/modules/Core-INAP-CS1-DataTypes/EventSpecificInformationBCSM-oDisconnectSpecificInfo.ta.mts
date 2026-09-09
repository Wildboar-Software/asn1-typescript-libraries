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
 * @summary EventSpecificInformationBCSM_oDisconnectSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-oDisconnectSpecificInfo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_oDisconnectSpecificInfo {
    constructor (
        /**
         * @summary `releaseCause`.
         * @public
         * @readonly
         */
        readonly releaseCause: OPTIONAL<Cause>
    ) {}

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_oDisconnectSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_oDisconnectSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_oDisconnectSpecificInfo`.
     * @returns {EventSpecificInformationBCSM_oDisconnectSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oDisconnectSpecificInfo)]: (EventSpecificInformationBCSM_oDisconnectSpecificInfo)[_K] }): EventSpecificInformationBCSM_oDisconnectSpecificInfo {
        return new EventSpecificInformationBCSM_oDisconnectSpecificInfo(_o.releaseCause);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_oDisconnectSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("releaseCause", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_oDisconnectSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_oDisconnectSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_oDisconnectSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_oDisconnectSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_oDisconnectSpecificInfo (el: _Element): EventSpecificInformationBCSM_oDisconnectSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo) { _cached_decoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_oDisconnectSpecificInfo {
    let releaseCause: OPTIONAL<Cause>;
    const callbacks: $.DecodingMap = {
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo,
        undefined,
    );
    return new EventSpecificInformationBCSM_oDisconnectSpecificInfo(
        releaseCause
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_oDisconnectSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_oDisconnectSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_oDisconnectSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_oDisconnectSpecificInfo (value: EventSpecificInformationBCSM_oDisconnectSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo) { _cached_encoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo = function (value: EventSpecificInformationBCSM_oDisconnectSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_oDisconnectSpecificInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.releaseCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.releaseCause, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo(value, elGetter);
}


/* eslint-enable */
