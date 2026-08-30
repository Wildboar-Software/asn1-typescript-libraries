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
import { OverrideCategory, _enum_for_OverrideCategory, OverrideCategory_overrideEnabled /* IMPORTED_LONG_ENUMERATION_ITEM */, overrideEnabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, OverrideCategory_overrideDisabled /* IMPORTED_LONG_ENUMERATION_ITEM */, overrideDisabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_OverrideCategory, _encode_OverrideCategory } from "../MAP-SS-DataTypes/OverrideCategory.ta.mjs";
// export { OverrideCategory, _enum_for_OverrideCategory, OverrideCategory_overrideEnabled /* IMPORTED_LONG_ENUMERATION_ITEM */, overrideEnabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, OverrideCategory_overrideDisabled /* IMPORTED_LONG_ENUMERATION_ITEM */, overrideDisabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_OverrideCategory, _encode_OverrideCategory } from "../MAP-SS-DataTypes/OverrideCategory.ta.mjs";


/**
 * @summary ClipData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClipData ::= SEQUENCE {
 *     ss-Status    [1] Ext-SS-Status,
 *     overrideCategory    [2] OverrideCategory,
 *     notificationToCSE    [3] NULL    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class ClipData {
    constructor (
        /**
         * @summary `ss_Status`.
         * @public
         * @readonly
         */
        readonly ss_Status: Ext_SS_Status,
        /**
         * @summary `overrideCategory`.
         * @public
         * @readonly
         */
        readonly overrideCategory: OverrideCategory,
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
     * @summary Restructures an object into a ClipData
     * @description
     * 
     * This takes an `object` and converts it to a `ClipData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClipData`.
     * @returns {ClipData}
     */
    public static _from_object (_o: { [_K in keyof (ClipData)]: (ClipData)[_K] }): ClipData {
        return new ClipData(_o.ss_Status, _o.overrideCategory, _o.notificationToCSE, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `overrideCategory`
         * @public
         * @static
         */

    public static _enum_for_overrideCategory = _enum_for_OverrideCategory;
}

/**
 * @summary The Leading Root Component Types of ClipData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ClipData: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Status", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("overrideCategory", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("notificationToCSE", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ClipData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ClipData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ClipData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ClipData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ClipData: $.ASN1Decoder<ClipData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClipData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClipData (el: _Element): ClipData {
    if (!_cached_decoder_for_ClipData) { _cached_decoder_for_ClipData = function (el: _Element): ClipData {
    let ss_Status!: Ext_SS_Status;
    let overrideCategory!: OverrideCategory;
    let notificationToCSE: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Status": (_el: _Element): void => { ss_Status = $._decode_implicit<Ext_SS_Status>(() => _decode_Ext_SS_Status)(_el); },
        "overrideCategory": (_el: _Element): void => { overrideCategory = $._decode_implicit<OverrideCategory>(() => _decode_OverrideCategory)(_el); },
        "notificationToCSE": (_el: _Element): void => { notificationToCSE = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ClipData,
        _extension_additions_list_spec_for_ClipData,
        _root_component_type_list_2_spec_for_ClipData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ClipData(
        ss_Status,
        overrideCategory,
        notificationToCSE,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ClipData(el);
}

let _cached_encoder_for_ClipData: $.ASN1Encoder<ClipData> | null = null;

/**
 * @summary Encodes a(n) ClipData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClipData, encoded as an ASN.1 Element.
 */
export
function _encode_ClipData (value: ClipData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClipData) { _cached_encoder_for_ClipData = function (value: ClipData, elGetter: $.ASN1Encoder<ClipData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Ext_SS_Status, $.BER)(value.ss_Status, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_OverrideCategory, $.BER)(value.overrideCategory, $.BER),
            /* IF_ABSENT  */ ((value.notificationToCSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.notificationToCSE, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ClipData(value, elGetter);
}


/* eslint-enable */
