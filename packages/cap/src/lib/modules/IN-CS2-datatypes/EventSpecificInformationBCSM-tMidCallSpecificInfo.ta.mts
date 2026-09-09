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
 * @summary EventSpecificInformationBCSM_tMidCallSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-tMidCallSpecificInfo ::= SEQUENCE {
 *     connectTime   [0]  Integer4 OPTIONAL,
 *     tMidCallInfo  [1]  MidCallInfo{bound} OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_tMidCallSpecificInfo {
    constructor (
        /**
         * @summary `connectTime`.
         * @public
         * @readonly
         */
        readonly connectTime: OPTIONAL<Integer4>,
        /**
         * @summary `tMidCallInfo`.
         * @public
         * @readonly
         */
        readonly tMidCallInfo: OPTIONAL<MidCallInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_tMidCallSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_tMidCallSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_tMidCallSpecificInfo`.
     * @returns {EventSpecificInformationBCSM_tMidCallSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_tMidCallSpecificInfo)]: (EventSpecificInformationBCSM_tMidCallSpecificInfo)[_K] }): EventSpecificInformationBCSM_tMidCallSpecificInfo {
        return new EventSpecificInformationBCSM_tMidCallSpecificInfo(_o.connectTime, _o.tMidCallInfo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_tMidCallSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("connectTime", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("tMidCallInfo", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_tMidCallSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_tMidCallSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_tMidCallSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_tMidCallSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_tMidCallSpecificInfo (el: _Element): EventSpecificInformationBCSM_tMidCallSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo) { _cached_decoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_tMidCallSpecificInfo {
    let connectTime: OPTIONAL<Integer4>;
    let tMidCallInfo: OPTIONAL<MidCallInfo>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "connectTime": (_el: _Element): void => { connectTime = $._decode_implicit<Integer4>(() => _decode_Integer4)(_el); },
        "tMidCallInfo": (_el: _Element): void => { tMidCallInfo = $._decode_implicit<MidCallInfo>(() => _decode_MidCallInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_tMidCallSpecificInfo(
        connectTime,
        tMidCallInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_tMidCallSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_tMidCallSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_tMidCallSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_tMidCallSpecificInfo (value: EventSpecificInformationBCSM_tMidCallSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo) { _cached_encoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo = function (value: EventSpecificInformationBCSM_tMidCallSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_tMidCallSpecificInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.connectTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Integer4, $.BER)(value.connectTime, $.BER)),
            /* IF_ABSENT  */ ((value.tMidCallInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MidCallInfo, $.BER)(value.tMidCallInfo, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo(value, elGetter);
}


/* eslint-enable */
