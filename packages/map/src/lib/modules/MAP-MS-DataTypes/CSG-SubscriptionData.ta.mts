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
import { CSG_Id, _decode_CSG_Id, _encode_CSG_Id } from "../MAP-MS-DataTypes/CSG-Id.ta.mjs";
// export { CSG_Id, _decode_CSG_Id, _encode_CSG_Id } from "../MAP-MS-DataTypes/CSG-Id.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../MAP-CommonDataTypes/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../MAP-CommonDataTypes/Time.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { LIPA_AllowedAPNList, _decode_LIPA_AllowedAPNList, _encode_LIPA_AllowedAPNList } from "../MAP-MS-DataTypes/LIPA-AllowedAPNList.ta.mjs";
// export { LIPA_AllowedAPNList, _decode_LIPA_AllowedAPNList, _encode_LIPA_AllowedAPNList } from "../MAP-MS-DataTypes/LIPA-AllowedAPNList.ta.mjs";
import { PLMN_Id, _decode_PLMN_Id, _encode_PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";
// export { PLMN_Id, _decode_PLMN_Id, _encode_PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";


/**
 * @summary CSG_SubscriptionData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSG-SubscriptionData ::= SEQUENCE {
 *     csg-Id    CSG-Id,
 *     expirationDate    Time    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     lipa-AllowedAPNList    [0] LIPA-AllowedAPNList    OPTIONAL,
 *     plmn-Id    [1] PLMN-Id    OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CSG_SubscriptionData {
    constructor (
        /**
         * @summary `csg_Id`.
         * @public
         * @readonly
         */
        readonly csg_Id: CSG_Id,
        /**
         * @summary `expirationDate`.
         * @public
         * @readonly
         */
        readonly expirationDate: OPTIONAL<Time>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `lipa_AllowedAPNList`.
         * @public
         * @readonly
         */
        readonly lipa_AllowedAPNList: OPTIONAL<LIPA_AllowedAPNList>,
        /**
         * @summary `plmn_Id`.
         * @public
         * @readonly
         */
        readonly plmn_Id: OPTIONAL<PLMN_Id>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CSG_SubscriptionData
     * @description
     * 
     * This takes an `object` and converts it to a `CSG_SubscriptionData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CSG_SubscriptionData`.
     * @returns {CSG_SubscriptionData}
     */
    public static _from_object (_o: { [_K in keyof (CSG_SubscriptionData)]: (CSG_SubscriptionData)[_K] }): CSG_SubscriptionData {
        return new CSG_SubscriptionData(_o.csg_Id, _o.expirationDate, _o.extensionContainer, _o.lipa_AllowedAPNList, _o.plmn_Id, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CSG_SubscriptionData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CSG_SubscriptionData: $.ComponentSpec[] = [
    new $.ComponentSpec("csg-Id", false, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("expirationDate", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CSG_SubscriptionData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CSG_SubscriptionData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CSG_SubscriptionData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CSG_SubscriptionData: $.ComponentSpec[] = [
    new $.ComponentSpec("lipa-AllowedAPNList", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("plmn-Id", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

let _cached_decoder_for_CSG_SubscriptionData: $.ASN1Decoder<CSG_SubscriptionData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSG_SubscriptionData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSG_SubscriptionData (el: _Element): CSG_SubscriptionData {
    if (!_cached_decoder_for_CSG_SubscriptionData) { _cached_decoder_for_CSG_SubscriptionData = function (el: _Element): CSG_SubscriptionData {
    let csg_Id!: CSG_Id;
    let expirationDate: OPTIONAL<Time>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let lipa_AllowedAPNList: OPTIONAL<LIPA_AllowedAPNList>;
    let plmn_Id: OPTIONAL<PLMN_Id>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "csg-Id": (_el: _Element): void => { csg_Id = _decode_CSG_Id(_el); },
        "expirationDate": (_el: _Element): void => { expirationDate = _decode_Time(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "lipa-AllowedAPNList": (_el: _Element): void => { lipa_AllowedAPNList = $._decode_implicit<LIPA_AllowedAPNList>(() => _decode_LIPA_AllowedAPNList)(_el); },
        "plmn-Id": (_el: _Element): void => { plmn_Id = $._decode_implicit<PLMN_Id>(() => _decode_PLMN_Id)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CSG_SubscriptionData,
        _extension_additions_list_spec_for_CSG_SubscriptionData,
        _root_component_type_list_2_spec_for_CSG_SubscriptionData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CSG_SubscriptionData(
        csg_Id,
        expirationDate,
        extensionContainer,
        lipa_AllowedAPNList,
        plmn_Id,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CSG_SubscriptionData(el);
}

let _cached_encoder_for_CSG_SubscriptionData: $.ASN1Encoder<CSG_SubscriptionData> | null = null;

/**
 * @summary Encodes a(n) CSG_SubscriptionData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSG_SubscriptionData, encoded as an ASN.1 Element.
 */
export
function _encode_CSG_SubscriptionData (value: CSG_SubscriptionData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSG_SubscriptionData) { _cached_encoder_for_CSG_SubscriptionData = function (value: CSG_SubscriptionData, elGetter: $.ASN1Encoder<CSG_SubscriptionData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CSG_Id(value.csg_Id, $.BER),
            /* IF_ABSENT  */ ((value.expirationDate === undefined) ? undefined : _encode_Time(value.expirationDate, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.lipa_AllowedAPNList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_LIPA_AllowedAPNList, $.BER)(value.lipa_AllowedAPNList, $.BER)),
            /* IF_ABSENT  */ ((value.plmn_Id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PLMN_Id, $.BER)(value.plmn_Id, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CSG_SubscriptionData(value, elGetter);
}


/* eslint-enable */
