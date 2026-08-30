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
import { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";
// export { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";


/**
 * @summary CallHoldData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallHoldData ::= SEQUENCE {
 *     ss-Status    [1] Ext-SS-Status,
 *     notificationToCSE    [2] NULL    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class CallHoldData {
    constructor (
        /**
         * @summary `ss_Status`.
         * @public
         * @readonly
         */
        readonly ss_Status: Ext_SS_Status,
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
     * @summary Restructures an object into a CallHoldData
     * @description
     * 
     * This takes an `object` and converts it to a `CallHoldData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallHoldData`.
     * @returns {CallHoldData}
     */
    public static _from_object (_o: { [_K in keyof (CallHoldData)]: (CallHoldData)[_K] }): CallHoldData {
        return new CallHoldData(_o.ss_Status, _o.notificationToCSE, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CallHoldData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallHoldData: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Status", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("notificationToCSE", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CallHoldData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallHoldData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallHoldData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallHoldData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallHoldData: $.ASN1Decoder<CallHoldData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallHoldData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallHoldData (el: _Element): CallHoldData {
    if (!_cached_decoder_for_CallHoldData) { _cached_decoder_for_CallHoldData = function (el: _Element): CallHoldData {
    let ss_Status!: Ext_SS_Status;
    let notificationToCSE: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Status": (_el: _Element): void => { ss_Status = $._decode_implicit<Ext_SS_Status>(() => _decode_Ext_SS_Status)(_el); },
        "notificationToCSE": (_el: _Element): void => { notificationToCSE = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallHoldData,
        _extension_additions_list_spec_for_CallHoldData,
        _root_component_type_list_2_spec_for_CallHoldData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallHoldData(
        ss_Status,
        notificationToCSE,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CallHoldData(el);
}

let _cached_encoder_for_CallHoldData: $.ASN1Encoder<CallHoldData> | null = null;

/**
 * @summary Encodes a(n) CallHoldData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallHoldData, encoded as an ASN.1 Element.
 */
export
function _encode_CallHoldData (value: CallHoldData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallHoldData) { _cached_encoder_for_CallHoldData = function (value: CallHoldData, elGetter: $.ASN1Encoder<CallHoldData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Ext_SS_Status, $.BER)(value.ss_Status, $.BER),
            /* IF_ABSENT  */ ((value.notificationToCSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.notificationToCSE, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallHoldData(value, elGetter);
}


/* eslint-enable */
