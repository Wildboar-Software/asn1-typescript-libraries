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
import { GlobalCellId, _decode_GlobalCellId, _encode_GlobalCellId } from "../MAP-CommonDataTypes/GlobalCellId.ta.mjs";
// export { GlobalCellId, _decode_GlobalCellId, _encode_GlobalCellId } from "../MAP-CommonDataTypes/GlobalCellId.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { RNCId, _decode_RNCId, _encode_RNCId } from "../MAP-MS-DataTypes/RNCId.ta.mjs";
// export { RNCId, _decode_RNCId, _encode_RNCId } from "../MAP-MS-DataTypes/RNCId.ta.mjs";
import { AccessNetworkSignalInfo, _decode_AccessNetworkSignalInfo, _encode_AccessNetworkSignalInfo } from "../MAP-CommonDataTypes/AccessNetworkSignalInfo.ta.mjs";
// export { AccessNetworkSignalInfo, _decode_AccessNetworkSignalInfo, _encode_AccessNetworkSignalInfo } from "../MAP-CommonDataTypes/AccessNetworkSignalInfo.ta.mjs";
import { RAB_Id, _decode_RAB_Id, _encode_RAB_Id } from "../MAP-MS-DataTypes/RAB-Id.ta.mjs";
// export { RAB_Id, _decode_RAB_Id, _encode_RAB_Id } from "../MAP-MS-DataTypes/RAB-Id.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { GERAN_Classmark, _decode_GERAN_Classmark, _encode_GERAN_Classmark } from "../MAP-MS-DataTypes/GERAN-Classmark.ta.mjs";
// export { GERAN_Classmark, _decode_GERAN_Classmark, _encode_GERAN_Classmark } from "../MAP-MS-DataTypes/GERAN-Classmark.ta.mjs";


/**
 * @summary PrepareSubsequentHO_Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrepareSubsequentHO-Arg ::= [3] SEQUENCE {
 *     targetCellId    [0] GlobalCellId    OPTIONAL,
 *     targetMSC-Number    [1] ISDN-AddressString,
 *     targetRNCId    [2] RNCId    OPTIONAL,
 *     an-APDU    [3]    AccessNetworkSignalInfo    OPTIONAL,
 *     selectedRab-Id    [4]    RAB-Id    OPTIONAL,
 *     extensionContainer    [5]    ExtensionContainer    OPTIONAL,
 *     ...,
 *     geran-classmark    [6] GERAN-Classmark    OPTIONAL,
 *     rab-ConfigurationIndicator    [7] NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class PrepareSubsequentHO_Arg {
    constructor (
        /**
         * @summary `targetCellId`.
         * @public
         * @readonly
         */
        readonly targetCellId: OPTIONAL<GlobalCellId>,
        /**
         * @summary `targetMSC_Number`.
         * @public
         * @readonly
         */
        readonly targetMSC_Number: ISDN_AddressString,
        /**
         * @summary `targetRNCId`.
         * @public
         * @readonly
         */
        readonly targetRNCId: OPTIONAL<RNCId>,
        /**
         * @summary `an_APDU`.
         * @public
         * @readonly
         */
        readonly an_APDU: OPTIONAL<AccessNetworkSignalInfo>,
        /**
         * @summary `selectedRab_Id`.
         * @public
         * @readonly
         */
        readonly selectedRab_Id: OPTIONAL<RAB_Id>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `geran_classmark`.
         * @public
         * @readonly
         */
        readonly geran_classmark: OPTIONAL<GERAN_Classmark>,
        /**
         * @summary `rab_ConfigurationIndicator`.
         * @public
         * @readonly
         */
        readonly rab_ConfigurationIndicator: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PrepareSubsequentHO_Arg
     * @description
     * 
     * This takes an `object` and converts it to a `PrepareSubsequentHO_Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrepareSubsequentHO_Arg`.
     * @returns {PrepareSubsequentHO_Arg}
     */
    public static _from_object (_o: { [_K in keyof (PrepareSubsequentHO_Arg)]: (PrepareSubsequentHO_Arg)[_K] }): PrepareSubsequentHO_Arg {
        return new PrepareSubsequentHO_Arg(_o.targetCellId, _o.targetMSC_Number, _o.targetRNCId, _o.an_APDU, _o.selectedRab_Id, _o.extensionContainer, _o.geran_classmark, _o.rab_ConfigurationIndicator, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PrepareSubsequentHO_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrepareSubsequentHO_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("targetCellId", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("targetMSC-Number", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("targetRNCId", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("an-APDU", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("selectedRab-Id", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 5), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of PrepareSubsequentHO_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrepareSubsequentHO_Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrepareSubsequentHO_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrepareSubsequentHO_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("geran-classmark", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("rab-ConfigurationIndicator", true, $.hasTag(_TagClass.context, 7), undefined, undefined)
];

let _cached_decoder_for_PrepareSubsequentHO_Arg: $.ASN1Decoder<PrepareSubsequentHO_Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrepareSubsequentHO_Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrepareSubsequentHO_Arg (el: _Element): PrepareSubsequentHO_Arg {
    if (!_cached_decoder_for_PrepareSubsequentHO_Arg) { _cached_decoder_for_PrepareSubsequentHO_Arg = $._decode_implicit<PrepareSubsequentHO_Arg>(() => function (el: _Element): PrepareSubsequentHO_Arg {
    let targetCellId: OPTIONAL<GlobalCellId>;
    let targetMSC_Number!: ISDN_AddressString;
    let targetRNCId: OPTIONAL<RNCId>;
    let an_APDU: OPTIONAL<AccessNetworkSignalInfo>;
    let selectedRab_Id: OPTIONAL<RAB_Id>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let geran_classmark: OPTIONAL<GERAN_Classmark>;
    let rab_ConfigurationIndicator: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "targetCellId": (_el: _Element): void => { targetCellId = $._decode_implicit<GlobalCellId>(() => _decode_GlobalCellId)(_el); },
        "targetMSC-Number": (_el: _Element): void => { targetMSC_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "targetRNCId": (_el: _Element): void => { targetRNCId = $._decode_implicit<RNCId>(() => _decode_RNCId)(_el); },
        "an-APDU": (_el: _Element): void => { an_APDU = $._decode_implicit<AccessNetworkSignalInfo>(() => _decode_AccessNetworkSignalInfo)(_el); },
        "selectedRab-Id": (_el: _Element): void => { selectedRab_Id = $._decode_implicit<RAB_Id>(() => _decode_RAB_Id)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "geran-classmark": (_el: _Element): void => { geran_classmark = $._decode_implicit<GERAN_Classmark>(() => _decode_GERAN_Classmark)(_el); },
        "rab-ConfigurationIndicator": (_el: _Element): void => { rab_ConfigurationIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrepareSubsequentHO_Arg,
        _extension_additions_list_spec_for_PrepareSubsequentHO_Arg,
        _root_component_type_list_2_spec_for_PrepareSubsequentHO_Arg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PrepareSubsequentHO_Arg(
        targetCellId,
        targetMSC_Number,
        targetRNCId,
        an_APDU,
        selectedRab_Id,
        extensionContainer,
        geran_classmark,
        rab_ConfigurationIndicator,
        _unrecognizedExtensionsList
    );
}); }
    return _cached_decoder_for_PrepareSubsequentHO_Arg(el);
}

let _cached_encoder_for_PrepareSubsequentHO_Arg: $.ASN1Encoder<PrepareSubsequentHO_Arg> | null = null;

/**
 * @summary Encodes a(n) PrepareSubsequentHO_Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrepareSubsequentHO_Arg, encoded as an ASN.1 Element.
 */
export
function _encode_PrepareSubsequentHO_Arg (value: PrepareSubsequentHO_Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrepareSubsequentHO_Arg) { _cached_encoder_for_PrepareSubsequentHO_Arg = $._encode_implicit(_TagClass.context, 3, () => function (value: PrepareSubsequentHO_Arg, elGetter: $.ASN1Encoder<PrepareSubsequentHO_Arg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.targetCellId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GlobalCellId, $.BER)(value.targetCellId, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER)(value.targetMSC_Number, $.BER),
            /* IF_ABSENT  */ ((value.targetRNCId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_RNCId, $.BER)(value.targetRNCId, $.BER)),
            /* IF_ABSENT  */ ((value.an_APDU === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AccessNetworkSignalInfo, $.BER)(value.an_APDU, $.BER)),
            /* IF_ABSENT  */ ((value.selectedRab_Id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_RAB_Id, $.BER)(value.selectedRab_Id, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.geran_classmark === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_GERAN_Classmark, $.BER)(value.geran_classmark, $.BER)),
            /* IF_ABSENT  */ ((value.rab_ConfigurationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.rab_ConfigurationIndicator, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_PrepareSubsequentHO_Arg(value, elGetter);
}


/* eslint-enable */
