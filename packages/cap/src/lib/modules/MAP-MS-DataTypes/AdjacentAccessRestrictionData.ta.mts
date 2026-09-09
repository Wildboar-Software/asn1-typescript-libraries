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
import { PLMN_Id, _decode_PLMN_Id, _encode_PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";
// export { PLMN_Id, _decode_PLMN_Id, _encode_PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";
import { AccessRestrictionData, AccessRestrictionData_utranNotAllowed /* IMPORTED_LONG_NAMED_BIT */, utranNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_geranNotAllowed /* IMPORTED_LONG_NAMED_BIT */, geranNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_ganNotAllowed /* IMPORTED_LONG_NAMED_BIT */, ganNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_i_hspa_evolutionNotAllowed /* IMPORTED_LONG_NAMED_BIT */, i_hspa_evolutionNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_wb_e_utranNotAllowed /* IMPORTED_LONG_NAMED_BIT */, wb_e_utranNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_ho_toNon3GPP_AccessNotAllowed /* IMPORTED_LONG_NAMED_BIT */, ho_toNon3GPP_AccessNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_nb_iotNotAllowed /* IMPORTED_LONG_NAMED_BIT */, nb_iotNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_enhancedCoverageNotAllowed /* IMPORTED_LONG_NAMED_BIT */, enhancedCoverageNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, _decode_AccessRestrictionData, _encode_AccessRestrictionData } from "../MAP-MS-DataTypes/AccessRestrictionData.ta.mjs";
// export { AccessRestrictionData, AccessRestrictionData_utranNotAllowed /* IMPORTED_LONG_NAMED_BIT */, utranNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_geranNotAllowed /* IMPORTED_LONG_NAMED_BIT */, geranNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_ganNotAllowed /* IMPORTED_LONG_NAMED_BIT */, ganNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_i_hspa_evolutionNotAllowed /* IMPORTED_LONG_NAMED_BIT */, i_hspa_evolutionNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_wb_e_utranNotAllowed /* IMPORTED_LONG_NAMED_BIT */, wb_e_utranNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_ho_toNon3GPP_AccessNotAllowed /* IMPORTED_LONG_NAMED_BIT */, ho_toNon3GPP_AccessNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_nb_iotNotAllowed /* IMPORTED_LONG_NAMED_BIT */, nb_iotNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_enhancedCoverageNotAllowed /* IMPORTED_LONG_NAMED_BIT */, enhancedCoverageNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, _decode_AccessRestrictionData, _encode_AccessRestrictionData } from "../MAP-MS-DataTypes/AccessRestrictionData.ta.mjs";
import { Ext_AccessRestrictionData, Ext_AccessRestrictionData_nrAsSecondaryRATNotAllowed /* IMPORTED_LONG_NAMED_BIT */, nrAsSecondaryRATNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, Ext_AccessRestrictionData_unlicensedSpectrumAsSecondaryRATNotAllowed /* IMPORTED_LONG_NAMED_BIT */, unlicensedSpectrumAsSecondaryRATNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, _decode_Ext_AccessRestrictionData, _encode_Ext_AccessRestrictionData } from "../MAP-MS-DataTypes/Ext-AccessRestrictionData.ta.mjs";
// export { Ext_AccessRestrictionData, Ext_AccessRestrictionData_nrAsSecondaryRATNotAllowed /* IMPORTED_LONG_NAMED_BIT */, nrAsSecondaryRATNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, Ext_AccessRestrictionData_unlicensedSpectrumAsSecondaryRATNotAllowed /* IMPORTED_LONG_NAMED_BIT */, unlicensedSpectrumAsSecondaryRATNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, _decode_Ext_AccessRestrictionData, _encode_Ext_AccessRestrictionData } from "../MAP-MS-DataTypes/Ext-AccessRestrictionData.ta.mjs";


/**
 * @summary AdjacentAccessRestrictionData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdjacentAccessRestrictionData ::= SEQUENCE {
 *     plmnId    [0]    PLMN-Id,
 *     accessRestrictionData    [1]    AccessRestrictionData,
 *     ... ,
 *     ext-AccessRestrictionData    [2]    Ext-AccessRestrictionData    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AdjacentAccessRestrictionData {
    constructor (
        /**
         * @summary `plmnId`.
         * @public
         * @readonly
         */
        readonly plmnId: PLMN_Id,
        /**
         * @summary `accessRestrictionData`.
         * @public
         * @readonly
         */
        readonly accessRestrictionData: AccessRestrictionData,
        /**
         * @summary `ext_AccessRestrictionData`.
         * @public
         * @readonly
         */
        readonly ext_AccessRestrictionData: OPTIONAL<Ext_AccessRestrictionData>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AdjacentAccessRestrictionData
     * @description
     * 
     * This takes an `object` and converts it to a `AdjacentAccessRestrictionData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AdjacentAccessRestrictionData`.
     * @returns {AdjacentAccessRestrictionData}
     */
    public static _from_object (_o: { [_K in keyof (AdjacentAccessRestrictionData)]: (AdjacentAccessRestrictionData)[_K] }): AdjacentAccessRestrictionData {
        return new AdjacentAccessRestrictionData(_o.plmnId, _o.accessRestrictionData, _o.ext_AccessRestrictionData, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AdjacentAccessRestrictionData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AdjacentAccessRestrictionData: $.ComponentSpec[] = [
    new $.ComponentSpec("plmnId", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("accessRestrictionData", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AdjacentAccessRestrictionData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AdjacentAccessRestrictionData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AdjacentAccessRestrictionData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AdjacentAccessRestrictionData: $.ComponentSpec[] = [
    new $.ComponentSpec("ext-AccessRestrictionData", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

let _cached_decoder_for_AdjacentAccessRestrictionData: $.ASN1Decoder<AdjacentAccessRestrictionData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdjacentAccessRestrictionData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdjacentAccessRestrictionData (el: _Element): AdjacentAccessRestrictionData {
    if (!_cached_decoder_for_AdjacentAccessRestrictionData) { _cached_decoder_for_AdjacentAccessRestrictionData = function (el: _Element): AdjacentAccessRestrictionData {
    let plmnId!: PLMN_Id;
    let accessRestrictionData!: AccessRestrictionData;
    let ext_AccessRestrictionData: OPTIONAL<Ext_AccessRestrictionData>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "plmnId": (_el: _Element): void => { plmnId = $._decode_implicit<PLMN_Id>(() => _decode_PLMN_Id)(_el); },
        "accessRestrictionData": (_el: _Element): void => { accessRestrictionData = $._decode_implicit<AccessRestrictionData>(() => _decode_AccessRestrictionData)(_el); },
        "ext-AccessRestrictionData": (_el: _Element): void => { ext_AccessRestrictionData = $._decode_implicit<Ext_AccessRestrictionData>(() => _decode_Ext_AccessRestrictionData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AdjacentAccessRestrictionData,
        _extension_additions_list_spec_for_AdjacentAccessRestrictionData,
        _root_component_type_list_2_spec_for_AdjacentAccessRestrictionData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AdjacentAccessRestrictionData(
        plmnId,
        accessRestrictionData,
        ext_AccessRestrictionData,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AdjacentAccessRestrictionData(el);
}

let _cached_encoder_for_AdjacentAccessRestrictionData: $.ASN1Encoder<AdjacentAccessRestrictionData> | null = null;

/**
 * @summary Encodes a(n) AdjacentAccessRestrictionData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdjacentAccessRestrictionData, encoded as an ASN.1 Element.
 */
export
function _encode_AdjacentAccessRestrictionData (value: AdjacentAccessRestrictionData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdjacentAccessRestrictionData) { _cached_encoder_for_AdjacentAccessRestrictionData = function (value: AdjacentAccessRestrictionData, elGetter: $.ASN1Encoder<AdjacentAccessRestrictionData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PLMN_Id, $.BER)(value.plmnId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccessRestrictionData, $.BER)(value.accessRestrictionData, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.ext_AccessRestrictionData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Ext_AccessRestrictionData, $.BER)(value.ext_AccessRestrictionData, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AdjacentAccessRestrictionData(value, elGetter);
}


/* eslint-enable */
