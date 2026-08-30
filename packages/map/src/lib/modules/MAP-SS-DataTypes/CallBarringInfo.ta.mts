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
import { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
import { CallBarringFeatureList, _decode_CallBarringFeatureList, _encode_CallBarringFeatureList } from "../MAP-SS-DataTypes/CallBarringFeatureList.ta.mjs";


/**
 * @summary CallBarringInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBarringInfo ::= SEQUENCE {
 *     ss-Code    SS-Code    OPTIONAL,
 *     callBarringFeatureList    CallBarringFeatureList,
 *     ...}
 * ```
 * 
 * @class
 */
export
class CallBarringInfo {
    constructor (
        /**
         * @summary `ss_Code`.
         * @public
         * @readonly
         */
        readonly ss_Code: OPTIONAL<SS_Code>,
        /**
         * @summary `callBarringFeatureList`.
         * @public
         * @readonly
         */
        readonly callBarringFeatureList: CallBarringFeatureList,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CallBarringInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CallBarringInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallBarringInfo`.
     * @returns {CallBarringInfo}
     */
    public static _from_object (_o: { [_K in keyof (CallBarringInfo)]: (CallBarringInfo)[_K] }): CallBarringInfo {
        return new CallBarringInfo(_o.ss_Code, _o.callBarringFeatureList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CallBarringInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallBarringInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("callBarringFeatureList", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of CallBarringInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallBarringInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallBarringInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallBarringInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallBarringInfo: $.ASN1Decoder<CallBarringInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBarringInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBarringInfo (el: _Element): CallBarringInfo {
    if (!_cached_decoder_for_CallBarringInfo) { _cached_decoder_for_CallBarringInfo = function (el: _Element): CallBarringInfo {
    let ss_Code: OPTIONAL<SS_Code> = undefined;
    let callBarringFeatureList!: CallBarringFeatureList;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = _decode_SS_Code(_el); },
        "callBarringFeatureList": (_el: _Element): void => { callBarringFeatureList = _decode_CallBarringFeatureList(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallBarringInfo,
        _extension_additions_list_spec_for_CallBarringInfo,
        _root_component_type_list_2_spec_for_CallBarringInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallBarringInfo(
        ss_Code,
        callBarringFeatureList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CallBarringInfo(el);
}

let _cached_encoder_for_CallBarringInfo: $.ASN1Encoder<CallBarringInfo> | null = null;

/**
 * @summary Encodes a(n) CallBarringInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBarringInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CallBarringInfo (value: CallBarringInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBarringInfo) { _cached_encoder_for_CallBarringInfo = function (value: CallBarringInfo, elGetter: $.ASN1Encoder<CallBarringInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ss_Code === undefined) ? undefined : _encode_SS_Code(value.ss_Code, $.BER)),
            /* REQUIRED   */ _encode_CallBarringFeatureList(value.callBarringFeatureList, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallBarringInfo(value, elGetter);
}


/* eslint-enable */
