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
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";
import { MidCallInfo, _decode_MidCallInfo, _encode_MidCallInfo } from "../IN-CS2-datatypes/MidCallInfo.ta.mjs";
// export { MidCallInfo, _decode_MidCallInfo, _encode_MidCallInfo } from "../IN-CS2-datatypes/MidCallInfo.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM_oMidCallSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-oMidCallSpecificInfo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_oMidCallSpecificInfo {
    constructor (
        /**
         * @summary `connectTime`.
         * @public
         * @readonly
         */
        readonly connectTime: OPTIONAL<Integer4>,
        /**
         * @summary `oMidCallInfo`.
         * @public
         * @readonly
         */
        readonly oMidCallInfo: OPTIONAL<MidCallInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_oMidCallSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_oMidCallSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_oMidCallSpecificInfo`.
     * @returns {EventSpecificInformationBCSM_oMidCallSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oMidCallSpecificInfo)]: (EventSpecificInformationBCSM_oMidCallSpecificInfo)[_K] }): EventSpecificInformationBCSM_oMidCallSpecificInfo {
        return new EventSpecificInformationBCSM_oMidCallSpecificInfo(_o.connectTime, _o.oMidCallInfo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_oMidCallSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oMidCallSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("connectTime", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("oMidCallInfo", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_oMidCallSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oMidCallSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_oMidCallSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oMidCallSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_oMidCallSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_oMidCallSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_oMidCallSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_oMidCallSpecificInfo (el: _Element): EventSpecificInformationBCSM_oMidCallSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oMidCallSpecificInfo) { _cached_decoder_for_EventSpecificInformationBCSM_oMidCallSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_oMidCallSpecificInfo {
    let connectTime: OPTIONAL<Integer4>;
    let oMidCallInfo: OPTIONAL<MidCallInfo>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "connectTime": (_el: _Element): void => { connectTime = $._decode_implicit<Integer4>(() => _decode_Integer4)(_el); },
        "oMidCallInfo": (_el: _Element): void => { oMidCallInfo = $._decode_implicit<MidCallInfo>(() => _decode_MidCallInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oMidCallSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oMidCallSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oMidCallSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oMidCallSpecificInfo(
        connectTime,
        oMidCallInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_oMidCallSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oMidCallSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_oMidCallSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_oMidCallSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_oMidCallSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_oMidCallSpecificInfo (value: EventSpecificInformationBCSM_oMidCallSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oMidCallSpecificInfo) { _cached_encoder_for_EventSpecificInformationBCSM_oMidCallSpecificInfo = function (value: EventSpecificInformationBCSM_oMidCallSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_oMidCallSpecificInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.connectTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Integer4, $.BER)(value.connectTime, $.BER)),
            /* IF_ABSENT  */ ((value.oMidCallInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MidCallInfo, $.BER)(value.oMidCallInfo, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_oMidCallSpecificInfo(value, elGetter);
}


/* eslint-enable */
