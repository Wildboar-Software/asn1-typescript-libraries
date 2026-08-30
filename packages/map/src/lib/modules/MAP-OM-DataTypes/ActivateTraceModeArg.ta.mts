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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { TraceReference, _decode_TraceReference, _encode_TraceReference } from "../MAP-OM-DataTypes/TraceReference.ta.mjs";
// export { TraceReference, _decode_TraceReference, _encode_TraceReference } from "../MAP-OM-DataTypes/TraceReference.ta.mjs";
import { TraceType, _decode_TraceType, _encode_TraceType } from "../MAP-OM-DataTypes/TraceType.ta.mjs";
// export { TraceType, _decode_TraceType, _encode_TraceType } from "../MAP-OM-DataTypes/TraceType.ta.mjs";
import { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";
// export { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { TraceReference2, _decode_TraceReference2, _encode_TraceReference2 } from "../MAP-OM-DataTypes/TraceReference2.ta.mjs";
// export { TraceReference2, _decode_TraceReference2, _encode_TraceReference2 } from "../MAP-OM-DataTypes/TraceReference2.ta.mjs";
import { TraceDepthList, _decode_TraceDepthList, _encode_TraceDepthList } from "../MAP-OM-DataTypes/TraceDepthList.ta.mjs";
// export { TraceDepthList, _decode_TraceDepthList, _encode_TraceDepthList } from "../MAP-OM-DataTypes/TraceDepthList.ta.mjs";
import { TraceNE_TypeList, TraceNE_TypeList_msc_s /* IMPORTED_LONG_NAMED_BIT */, msc_s /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_mgw /* IMPORTED_LONG_NAMED_BIT */, mgw /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_sgsn /* IMPORTED_LONG_NAMED_BIT */, sgsn /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_ggsn /* IMPORTED_LONG_NAMED_BIT */, ggsn /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_rnc /* IMPORTED_LONG_NAMED_BIT */, rnc /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_bm_sc /* IMPORTED_LONG_NAMED_BIT */, bm_sc /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_mme /* IMPORTED_LONG_NAMED_BIT */, mme /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_sgw /* IMPORTED_LONG_NAMED_BIT */, sgw /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_pgw /* IMPORTED_LONG_NAMED_BIT */, pgw /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_eNB /* IMPORTED_LONG_NAMED_BIT */, eNB /* IMPORTED_SHORT_NAMED_BIT */, _decode_TraceNE_TypeList, _encode_TraceNE_TypeList } from "../MAP-OM-DataTypes/TraceNE-TypeList.ta.mjs";
// export { TraceNE_TypeList, TraceNE_TypeList_msc_s /* IMPORTED_LONG_NAMED_BIT */, msc_s /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_mgw /* IMPORTED_LONG_NAMED_BIT */, mgw /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_sgsn /* IMPORTED_LONG_NAMED_BIT */, sgsn /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_ggsn /* IMPORTED_LONG_NAMED_BIT */, ggsn /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_rnc /* IMPORTED_LONG_NAMED_BIT */, rnc /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_bm_sc /* IMPORTED_LONG_NAMED_BIT */, bm_sc /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_mme /* IMPORTED_LONG_NAMED_BIT */, mme /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_sgw /* IMPORTED_LONG_NAMED_BIT */, sgw /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_pgw /* IMPORTED_LONG_NAMED_BIT */, pgw /* IMPORTED_SHORT_NAMED_BIT */, TraceNE_TypeList_eNB /* IMPORTED_LONG_NAMED_BIT */, eNB /* IMPORTED_SHORT_NAMED_BIT */, _decode_TraceNE_TypeList, _encode_TraceNE_TypeList } from "../MAP-OM-DataTypes/TraceNE-TypeList.ta.mjs";
import { TraceInterfaceList, _decode_TraceInterfaceList, _encode_TraceInterfaceList } from "../MAP-OM-DataTypes/TraceInterfaceList.ta.mjs";
// export { TraceInterfaceList, _decode_TraceInterfaceList, _encode_TraceInterfaceList } from "../MAP-OM-DataTypes/TraceInterfaceList.ta.mjs";
import { TraceEventList, _decode_TraceEventList, _encode_TraceEventList } from "../MAP-OM-DataTypes/TraceEventList.ta.mjs";
// export { TraceEventList, _decode_TraceEventList, _encode_TraceEventList } from "../MAP-OM-DataTypes/TraceEventList.ta.mjs";
import { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
// export { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
import { MDT_Configuration, _decode_MDT_Configuration, _encode_MDT_Configuration } from "../MAP-OM-DataTypes/MDT-Configuration.ta.mjs";
// export { MDT_Configuration, _decode_MDT_Configuration, _encode_MDT_Configuration } from "../MAP-OM-DataTypes/MDT-Configuration.ta.mjs";


/**
 * @summary ActivateTraceModeArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivateTraceModeArg ::= SEQUENCE {
 *     imsi    [0] IMSI    OPTIONAL,
 *     traceReference    [1] TraceReference,
 *     traceType    [2] TraceType,
 *     omc-Id    [3] AddressString    OPTIONAL,
 *     extensionContainer    [4] ExtensionContainer    OPTIONAL,
 *     ...,
 *     traceReference2    [5] TraceReference2    OPTIONAL,
 *     traceDepthList    [6] TraceDepthList    OPTIONAL,
 *     traceNE-TypeList    [7] TraceNE-TypeList    OPTIONAL,
 *     traceInterfaceList    [8] TraceInterfaceList    OPTIONAL,
 *     traceEventList    [9] TraceEventList    OPTIONAL,
 *     traceCollectionEntity    [10] GSN-Address    OPTIONAL,
 *     mdt-Configuration    [11] MDT-Configuration    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class ActivateTraceModeArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `traceReference`.
         * @public
         * @readonly
         */
        readonly traceReference: TraceReference,
        /**
         * @summary `traceType`.
         * @public
         * @readonly
         */
        readonly traceType: TraceType,
        /**
         * @summary `omc_Id`.
         * @public
         * @readonly
         */
        readonly omc_Id: OPTIONAL<AddressString>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `traceReference2`.
         * @public
         * @readonly
         */
        readonly traceReference2: OPTIONAL<TraceReference2>,
        /**
         * @summary `traceDepthList`.
         * @public
         * @readonly
         */
        readonly traceDepthList: OPTIONAL<TraceDepthList>,
        /**
         * @summary `traceNE_TypeList`.
         * @public
         * @readonly
         */
        readonly traceNE_TypeList: OPTIONAL<TraceNE_TypeList>,
        /**
         * @summary `traceInterfaceList`.
         * @public
         * @readonly
         */
        readonly traceInterfaceList: OPTIONAL<TraceInterfaceList>,
        /**
         * @summary `traceEventList`.
         * @public
         * @readonly
         */
        readonly traceEventList: OPTIONAL<TraceEventList>,
        /**
         * @summary `traceCollectionEntity`.
         * @public
         * @readonly
         */
        readonly traceCollectionEntity: OPTIONAL<GSN_Address>,
        /**
         * @summary `mdt_Configuration`.
         * @public
         * @readonly
         */
        readonly mdt_Configuration: OPTIONAL<MDT_Configuration>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ActivateTraceModeArg
     * @description
     * 
     * This takes an `object` and converts it to a `ActivateTraceModeArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ActivateTraceModeArg`.
     * @returns {ActivateTraceModeArg}
     */
    public static _from_object (_o: { [_K in keyof (ActivateTraceModeArg)]: (ActivateTraceModeArg)[_K] }): ActivateTraceModeArg {
        return new ActivateTraceModeArg(_o.imsi, _o.traceReference, _o.traceType, _o.omc_Id, _o.extensionContainer, _o.traceReference2, _o.traceDepthList, _o.traceNE_TypeList, _o.traceInterfaceList, _o.traceEventList, _o.traceCollectionEntity, _o.mdt_Configuration, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ActivateTraceModeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ActivateTraceModeArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("traceReference", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("traceType", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("omc-Id", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ActivateTraceModeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ActivateTraceModeArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ActivateTraceModeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ActivateTraceModeArg: $.ComponentSpec[] = [
    new $.ComponentSpec("traceReference2", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("traceDepthList", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("traceNE-TypeList", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("traceInterfaceList", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("traceEventList", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("traceCollectionEntity", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("mdt-Configuration", true, $.hasTag(_TagClass.context, 11), undefined, undefined)
];

let _cached_decoder_for_ActivateTraceModeArg: $.ASN1Decoder<ActivateTraceModeArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActivateTraceModeArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActivateTraceModeArg (el: _Element): ActivateTraceModeArg {
    if (!_cached_decoder_for_ActivateTraceModeArg) { _cached_decoder_for_ActivateTraceModeArg = function (el: _Element): ActivateTraceModeArg {
    let imsi: OPTIONAL<IMSI>;
    let traceReference!: TraceReference;
    let traceType!: TraceType;
    let omc_Id: OPTIONAL<AddressString>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let traceReference2: OPTIONAL<TraceReference2>;
    let traceDepthList: OPTIONAL<TraceDepthList>;
    let traceNE_TypeList: OPTIONAL<TraceNE_TypeList>;
    let traceInterfaceList: OPTIONAL<TraceInterfaceList>;
    let traceEventList: OPTIONAL<TraceEventList>;
    let traceCollectionEntity: OPTIONAL<GSN_Address>;
    let mdt_Configuration: OPTIONAL<MDT_Configuration>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "traceReference": (_el: _Element): void => { traceReference = $._decode_implicit<TraceReference>(() => _decode_TraceReference)(_el); },
        "traceType": (_el: _Element): void => { traceType = $._decode_implicit<TraceType>(() => _decode_TraceType)(_el); },
        "omc-Id": (_el: _Element): void => { omc_Id = $._decode_implicit<AddressString>(() => _decode_AddressString)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "traceReference2": (_el: _Element): void => { traceReference2 = $._decode_implicit<TraceReference2>(() => _decode_TraceReference2)(_el); },
        "traceDepthList": (_el: _Element): void => { traceDepthList = $._decode_implicit<TraceDepthList>(() => _decode_TraceDepthList)(_el); },
        "traceNE-TypeList": (_el: _Element): void => { traceNE_TypeList = $._decode_implicit<TraceNE_TypeList>(() => _decode_TraceNE_TypeList)(_el); },
        "traceInterfaceList": (_el: _Element): void => { traceInterfaceList = $._decode_implicit<TraceInterfaceList>(() => _decode_TraceInterfaceList)(_el); },
        "traceEventList": (_el: _Element): void => { traceEventList = $._decode_implicit<TraceEventList>(() => _decode_TraceEventList)(_el); },
        "traceCollectionEntity": (_el: _Element): void => { traceCollectionEntity = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "mdt-Configuration": (_el: _Element): void => { mdt_Configuration = $._decode_implicit<MDT_Configuration>(() => _decode_MDT_Configuration)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ActivateTraceModeArg,
        _extension_additions_list_spec_for_ActivateTraceModeArg,
        _root_component_type_list_2_spec_for_ActivateTraceModeArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ActivateTraceModeArg(
        imsi,
        traceReference,
        traceType,
        omc_Id,
        extensionContainer,
        traceReference2,
        traceDepthList,
        traceNE_TypeList,
        traceInterfaceList,
        traceEventList,
        traceCollectionEntity,
        mdt_Configuration,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ActivateTraceModeArg(el);
}

let _cached_encoder_for_ActivateTraceModeArg: $.ASN1Encoder<ActivateTraceModeArg> | null = null;

/**
 * @summary Encodes a(n) ActivateTraceModeArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivateTraceModeArg, encoded as an ASN.1 Element.
 */
export
function _encode_ActivateTraceModeArg (value: ActivateTraceModeArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActivateTraceModeArg) { _cached_encoder_for_ActivateTraceModeArg = function (value: ActivateTraceModeArg, elGetter: $.ASN1Encoder<ActivateTraceModeArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER)(value.imsi, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TraceReference, $.BER)(value.traceReference, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_TraceType, $.BER)(value.traceType, $.BER),
            /* IF_ABSENT  */ ((value.omc_Id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AddressString, $.BER)(value.omc_Id, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.traceReference2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_TraceReference2, $.BER)(value.traceReference2, $.BER)),
            /* IF_ABSENT  */ ((value.traceDepthList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_TraceDepthList, $.BER)(value.traceDepthList, $.BER)),
            /* IF_ABSENT  */ ((value.traceNE_TypeList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_TraceNE_TypeList, $.BER)(value.traceNE_TypeList, $.BER)),
            /* IF_ABSENT  */ ((value.traceInterfaceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_TraceInterfaceList, $.BER)(value.traceInterfaceList, $.BER)),
            /* IF_ABSENT  */ ((value.traceEventList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_TraceEventList, $.BER)(value.traceEventList, $.BER)),
            /* IF_ABSENT  */ ((value.traceCollectionEntity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_GSN_Address, $.BER)(value.traceCollectionEntity, $.BER)),
            /* IF_ABSENT  */ ((value.mdt_Configuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_MDT_Configuration, $.BER)(value.mdt_Configuration, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ActivateTraceModeArg(value, elGetter);
}


/* eslint-enable */
