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
import { GroupId, _decode_GroupId, _encode_GroupId } from "../MAP-MS-DataTypes/GroupId.ta.mjs";
// export { GroupId, _decode_GroupId, _encode_GroupId } from "../MAP-MS-DataTypes/GroupId.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { AdditionalSubscriptions, AdditionalSubscriptions_privilegedUplinkRequest /* IMPORTED_LONG_NAMED_BIT */, privilegedUplinkRequest /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSubscriptions_emergencyUplinkRequest /* IMPORTED_LONG_NAMED_BIT */, emergencyUplinkRequest /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSubscriptions_emergencyReset /* IMPORTED_LONG_NAMED_BIT */, emergencyReset /* IMPORTED_SHORT_NAMED_BIT */, _decode_AdditionalSubscriptions, _encode_AdditionalSubscriptions } from "../MAP-MS-DataTypes/AdditionalSubscriptions.ta.mjs";
// export { AdditionalSubscriptions, AdditionalSubscriptions_privilegedUplinkRequest /* IMPORTED_LONG_NAMED_BIT */, privilegedUplinkRequest /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSubscriptions_emergencyUplinkRequest /* IMPORTED_LONG_NAMED_BIT */, emergencyUplinkRequest /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSubscriptions_emergencyReset /* IMPORTED_LONG_NAMED_BIT */, emergencyReset /* IMPORTED_SHORT_NAMED_BIT */, _decode_AdditionalSubscriptions, _encode_AdditionalSubscriptions } from "../MAP-MS-DataTypes/AdditionalSubscriptions.ta.mjs";
import { AdditionalInfo, _decode_AdditionalInfo, _encode_AdditionalInfo } from "../MAP-MS-DataTypes/AdditionalInfo.ta.mjs";
// export { AdditionalInfo, _decode_AdditionalInfo, _encode_AdditionalInfo } from "../MAP-MS-DataTypes/AdditionalInfo.ta.mjs";
import { Long_GroupId, _decode_Long_GroupId, _encode_Long_GroupId } from "../MAP-MS-DataTypes/Long-GroupId.ta.mjs";
// export { Long_GroupId, _decode_Long_GroupId, _encode_Long_GroupId } from "../MAP-MS-DataTypes/Long-GroupId.ta.mjs";


/**
 * @summary VoiceGroupCallData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoiceGroupCallData ::= SEQUENCE {
 *     groupId    GroupId, 
 *     -- groupId shall be filled with six TBCD fillers (1111)if the longGroupId is present  
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     additionalSubscriptions    AdditionalSubscriptions    OPTIONAL,
 *     additionalInfo    [0] AdditionalInfo    OPTIONAL,
 *     longGroupId    [1] Long-GroupId    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class VoiceGroupCallData {
    constructor (
        /**
         * @summary `groupId`.
         * @public
         * @readonly
         */
        readonly groupId: GroupId,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `additionalSubscriptions`.
         * @public
         * @readonly
         */
        readonly additionalSubscriptions: OPTIONAL<AdditionalSubscriptions>,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<AdditionalInfo>,
        /**
         * @summary `longGroupId`.
         * @public
         * @readonly
         */
        readonly longGroupId: OPTIONAL<Long_GroupId>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a VoiceGroupCallData
     * @description
     * 
     * This takes an `object` and converts it to a `VoiceGroupCallData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VoiceGroupCallData`.
     * @returns {VoiceGroupCallData}
     */
    public static _from_object (_o: { [_K in keyof (VoiceGroupCallData)]: (VoiceGroupCallData)[_K] }): VoiceGroupCallData {
        return new VoiceGroupCallData(_o.groupId, _o.extensionContainer, _o.additionalSubscriptions, _o.additionalInfo, _o.longGroupId, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of VoiceGroupCallData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VoiceGroupCallData: $.ComponentSpec[] = [
    new $.ComponentSpec("groupId", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of VoiceGroupCallData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VoiceGroupCallData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VoiceGroupCallData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VoiceGroupCallData: $.ComponentSpec[] = [
    new $.ComponentSpec("additionalSubscriptions", true, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("additionalInfo", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("longGroupId", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

let _cached_decoder_for_VoiceGroupCallData: $.ASN1Decoder<VoiceGroupCallData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoiceGroupCallData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoiceGroupCallData (el: _Element): VoiceGroupCallData {
    if (!_cached_decoder_for_VoiceGroupCallData) { _cached_decoder_for_VoiceGroupCallData = function (el: _Element): VoiceGroupCallData {
    let groupId!: GroupId;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let additionalSubscriptions: OPTIONAL<AdditionalSubscriptions>;
    let additionalInfo: OPTIONAL<AdditionalInfo>;
    let longGroupId: OPTIONAL<Long_GroupId>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "groupId": (_el: _Element): void => { groupId = _decode_GroupId(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "additionalSubscriptions": (_el: _Element): void => { additionalSubscriptions = _decode_AdditionalSubscriptions(_el); },
        "additionalInfo": (_el: _Element): void => { additionalInfo = $._decode_implicit<AdditionalInfo>(() => _decode_AdditionalInfo)(_el); },
        "longGroupId": (_el: _Element): void => { longGroupId = $._decode_implicit<Long_GroupId>(() => _decode_Long_GroupId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_VoiceGroupCallData,
        _extension_additions_list_spec_for_VoiceGroupCallData,
        _root_component_type_list_2_spec_for_VoiceGroupCallData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new VoiceGroupCallData(
        groupId,
        extensionContainer,
        additionalSubscriptions,
        additionalInfo,
        longGroupId,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_VoiceGroupCallData(el);
}

let _cached_encoder_for_VoiceGroupCallData: $.ASN1Encoder<VoiceGroupCallData> | null = null;

/**
 * @summary Encodes a(n) VoiceGroupCallData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoiceGroupCallData, encoded as an ASN.1 Element.
 */
export
function _encode_VoiceGroupCallData (value: VoiceGroupCallData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoiceGroupCallData) { _cached_encoder_for_VoiceGroupCallData = function (value: VoiceGroupCallData, elGetter: $.ASN1Encoder<VoiceGroupCallData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GroupId(value.groupId, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.additionalSubscriptions === undefined) ? undefined : _encode_AdditionalSubscriptions(value.additionalSubscriptions, $.BER)),
            /* IF_ABSENT  */ ((value.additionalInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AdditionalInfo, $.BER)(value.additionalInfo, $.BER)),
            /* IF_ABSENT  */ ((value.longGroupId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Long_GroupId, $.BER)(value.longGroupId, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VoiceGroupCallData(value, elGetter);
}


/* eslint-enable */
