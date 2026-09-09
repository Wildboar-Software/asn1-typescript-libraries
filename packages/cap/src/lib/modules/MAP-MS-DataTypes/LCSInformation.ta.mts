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
import { GMLC_List, _decode_GMLC_List, _encode_GMLC_List } from "../MAP-MS-DataTypes/GMLC-List.ta.mjs";
// export { GMLC_List, _decode_GMLC_List, _encode_GMLC_List } from "../MAP-MS-DataTypes/GMLC-List.ta.mjs";
import { LCS_PrivacyExceptionList, _decode_LCS_PrivacyExceptionList, _encode_LCS_PrivacyExceptionList } from "../MAP-MS-DataTypes/LCS-PrivacyExceptionList.ta.mjs";
// export { LCS_PrivacyExceptionList, _decode_LCS_PrivacyExceptionList, _encode_LCS_PrivacyExceptionList } from "../MAP-MS-DataTypes/LCS-PrivacyExceptionList.ta.mjs";
import { MOLR_List, _decode_MOLR_List, _encode_MOLR_List } from "../MAP-MS-DataTypes/MOLR-List.ta.mjs";
// export { MOLR_List, _decode_MOLR_List, _encode_MOLR_List } from "../MAP-MS-DataTypes/MOLR-List.ta.mjs";


/**
 * @summary LCSInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSInformation ::= SEQUENCE {
 *     gmlc-List    [0]    GMLC-List    OPTIONAL,
 *     lcs-PrivacyExceptionList    [1]    LCS-PrivacyExceptionList    OPTIONAL,
 *     molr-List    [2]    MOLR-List    OPTIONAL,
 *     ...,
 *     add-lcs-PrivacyExceptionList    [3]    LCS-PrivacyExceptionList    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LCSInformation {
    constructor (
        /**
         * @summary `gmlc_List`.
         * @public
         * @readonly
         */
        readonly gmlc_List: OPTIONAL<GMLC_List>,
        /**
         * @summary `lcs_PrivacyExceptionList`.
         * @public
         * @readonly
         */
        readonly lcs_PrivacyExceptionList: OPTIONAL<LCS_PrivacyExceptionList>,
        /**
         * @summary `molr_List`.
         * @public
         * @readonly
         */
        readonly molr_List: OPTIONAL<MOLR_List>,
        /**
         * @summary `add_lcs_PrivacyExceptionList`.
         * @public
         * @readonly
         */
        readonly add_lcs_PrivacyExceptionList: OPTIONAL<LCS_PrivacyExceptionList>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LCSInformation
     * @description
     * 
     * This takes an `object` and converts it to a `LCSInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LCSInformation`.
     * @returns {LCSInformation}
     */
    public static _from_object (_o: { [_K in keyof (LCSInformation)]: (LCSInformation)[_K] }): LCSInformation {
        return new LCSInformation(_o.gmlc_List, _o.lcs_PrivacyExceptionList, _o.molr_List, _o.add_lcs_PrivacyExceptionList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LCSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LCSInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("gmlc-List", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("lcs-PrivacyExceptionList", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("molr-List", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of LCSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LCSInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LCSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LCSInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("add-lcs-PrivacyExceptionList", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

let _cached_decoder_for_LCSInformation: $.ASN1Decoder<LCSInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCSInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCSInformation (el: _Element): LCSInformation {
    if (!_cached_decoder_for_LCSInformation) { _cached_decoder_for_LCSInformation = function (el: _Element): LCSInformation {
    let gmlc_List: OPTIONAL<GMLC_List>;
    let lcs_PrivacyExceptionList: OPTIONAL<LCS_PrivacyExceptionList>;
    let molr_List: OPTIONAL<MOLR_List>;
    let add_lcs_PrivacyExceptionList: OPTIONAL<LCS_PrivacyExceptionList>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "gmlc-List": (_el: _Element): void => { gmlc_List = $._decode_implicit<GMLC_List>(() => _decode_GMLC_List)(_el); },
        "lcs-PrivacyExceptionList": (_el: _Element): void => { lcs_PrivacyExceptionList = $._decode_implicit<LCS_PrivacyExceptionList>(() => _decode_LCS_PrivacyExceptionList)(_el); },
        "molr-List": (_el: _Element): void => { molr_List = $._decode_implicit<MOLR_List>(() => _decode_MOLR_List)(_el); },
        "add-lcs-PrivacyExceptionList": (_el: _Element): void => { add_lcs_PrivacyExceptionList = $._decode_implicit<LCS_PrivacyExceptionList>(() => _decode_LCS_PrivacyExceptionList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LCSInformation,
        _extension_additions_list_spec_for_LCSInformation,
        _root_component_type_list_2_spec_for_LCSInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LCSInformation(
        gmlc_List,
        lcs_PrivacyExceptionList,
        molr_List,
        add_lcs_PrivacyExceptionList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LCSInformation(el);
}

let _cached_encoder_for_LCSInformation: $.ASN1Encoder<LCSInformation> | null = null;

/**
 * @summary Encodes a(n) LCSInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSInformation, encoded as an ASN.1 Element.
 */
export
function _encode_LCSInformation (value: LCSInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCSInformation) { _cached_encoder_for_LCSInformation = function (value: LCSInformation, elGetter: $.ASN1Encoder<LCSInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.gmlc_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GMLC_List, $.BER)(value.gmlc_List, $.BER)),
            /* IF_ABSENT  */ ((value.lcs_PrivacyExceptionList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_LCS_PrivacyExceptionList, $.BER)(value.lcs_PrivacyExceptionList, $.BER)),
            /* IF_ABSENT  */ ((value.molr_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MOLR_List, $.BER)(value.molr_List, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.add_lcs_PrivacyExceptionList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_LCS_PrivacyExceptionList, $.BER)(value.add_lcs_PrivacyExceptionList, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LCSInformation(value, elGetter);
}


/* eslint-enable */
