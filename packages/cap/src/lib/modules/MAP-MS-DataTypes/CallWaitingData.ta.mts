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
import { Ext_CwFeatureList, _decode_Ext_CwFeatureList, _encode_Ext_CwFeatureList } from "../MAP-MS-DataTypes/Ext-CwFeatureList.ta.mjs";
// export { Ext_CwFeatureList, _decode_Ext_CwFeatureList, _encode_Ext_CwFeatureList } from "../MAP-MS-DataTypes/Ext-CwFeatureList.ta.mjs";


/**
 * @summary CallWaitingData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallWaitingData ::= SEQUENCE {
 *     cwFeatureList    [1] Ext-CwFeatureList,
 *     notificationToCSE    [2] NULL    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class CallWaitingData {
    constructor (
        /**
         * @summary `cwFeatureList`.
         * @public
         * @readonly
         */
        readonly cwFeatureList: Ext_CwFeatureList,
        /**
         * @summary `notificationToCSE`.
         * @public
         * @readonly
         */
        readonly notificationToCSE: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CallWaitingData
     * @description
     * 
     * This takes an `object` and converts it to a `CallWaitingData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallWaitingData`.
     * @returns {CallWaitingData}
     */
    public static _from_object (_o: { [_K in keyof (CallWaitingData)]: (CallWaitingData)[_K] }): CallWaitingData {
        return new CallWaitingData(_o.cwFeatureList, _o.notificationToCSE, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CallWaitingData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallWaitingData: $.ComponentSpec[] = [
    new $.ComponentSpec("cwFeatureList", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("notificationToCSE", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CallWaitingData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallWaitingData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallWaitingData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallWaitingData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallWaitingData: $.ASN1Decoder<CallWaitingData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallWaitingData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallWaitingData (el: _Element): CallWaitingData {
    if (!_cached_decoder_for_CallWaitingData) { _cached_decoder_for_CallWaitingData = function (el: _Element): CallWaitingData {
    let cwFeatureList!: Ext_CwFeatureList;
    let notificationToCSE: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cwFeatureList": (_el: _Element): void => { cwFeatureList = $._decode_implicit<Ext_CwFeatureList>(() => _decode_Ext_CwFeatureList)(_el); },
        "notificationToCSE": (_el: _Element): void => { notificationToCSE = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallWaitingData,
        _extension_additions_list_spec_for_CallWaitingData,
        _root_component_type_list_2_spec_for_CallWaitingData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallWaitingData(
        cwFeatureList,
        notificationToCSE,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CallWaitingData(el);
}

let _cached_encoder_for_CallWaitingData: $.ASN1Encoder<CallWaitingData> | null = null;

/**
 * @summary Encodes a(n) CallWaitingData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallWaitingData, encoded as an ASN.1 Element.
 */
export
function _encode_CallWaitingData (value: CallWaitingData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallWaitingData) { _cached_encoder_for_CallWaitingData = function (value: CallWaitingData, elGetter: $.ASN1Encoder<CallWaitingData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Ext_CwFeatureList, $.BER)(value.cwFeatureList, $.BER),
            /* IF_ABSENT  */ ((value.notificationToCSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.notificationToCSE, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallWaitingData(value, elGetter);
}


/* eslint-enable */
