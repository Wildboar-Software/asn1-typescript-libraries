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
import { SignalInfo, _decode_SignalInfo, _encode_SignalInfo } from "../MAP-CommonDataTypes/SignalInfo.ta.mjs";
// export { SignalInfo, _decode_SignalInfo, _encode_SignalInfo } from "../MAP-CommonDataTypes/SignalInfo.ta.mjs";
import { DispatcherList, _decode_DispatcherList, _encode_DispatcherList } from "../MAP-SM-DataTypes/DispatcherList.ta.mjs";
// export { DispatcherList, _decode_DispatcherList, _encode_DispatcherList } from "../MAP-SM-DataTypes/DispatcherList.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { AdditionalDispatcherList, _decode_AdditionalDispatcherList, _encode_AdditionalDispatcherList } from "../MAP-SM-DataTypes/AdditionalDispatcherList.ta.mjs";
// export { AdditionalDispatcherList, _decode_AdditionalDispatcherList, _encode_AdditionalDispatcherList } from "../MAP-SM-DataTypes/AdditionalDispatcherList.ta.mjs";


/**
 * @summary MT_ForwardSM_VGCS_Res
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MT-ForwardSM-VGCS-Res ::= SEQUENCE {
 *     sm-RP-UI    [0] SignalInfo    OPTIONAL,
 *     dispatcherList    [1] DispatcherList    OPTIONAL,
 *     ongoingCall    NULL    OPTIONAL,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     ...,
 *     additionalDispatcherList    [3] AdditionalDispatcherList    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MT_ForwardSM_VGCS_Res {
    constructor (
        /**
         * @summary `sm_RP_UI`.
         * @public
         * @readonly
         */
        readonly sm_RP_UI: OPTIONAL<SignalInfo>,
        /**
         * @summary `dispatcherList`.
         * @public
         * @readonly
         */
        readonly dispatcherList: OPTIONAL<DispatcherList>,
        /**
         * @summary `ongoingCall`.
         * @public
         * @readonly
         */
        readonly ongoingCall: OPTIONAL<NULL>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `additionalDispatcherList`.
         * @public
         * @readonly
         */
        readonly additionalDispatcherList: OPTIONAL<AdditionalDispatcherList>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MT_ForwardSM_VGCS_Res
     * @description
     * 
     * This takes an `object` and converts it to a `MT_ForwardSM_VGCS_Res`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MT_ForwardSM_VGCS_Res`.
     * @returns {MT_ForwardSM_VGCS_Res}
     */
    public static _from_object (_o: { [_K in keyof (MT_ForwardSM_VGCS_Res)]: (MT_ForwardSM_VGCS_Res)[_K] }): MT_ForwardSM_VGCS_Res {
        return new MT_ForwardSM_VGCS_Res(_o.sm_RP_UI, _o.dispatcherList, _o.ongoingCall, _o.extensionContainer, _o.additionalDispatcherList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MT_ForwardSM_VGCS_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MT_ForwardSM_VGCS_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("sm-RP-UI", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("dispatcherList", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("ongoingCall", true, $.hasTag(_TagClass.universal, 5), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MT_ForwardSM_VGCS_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MT_ForwardSM_VGCS_Res: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MT_ForwardSM_VGCS_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MT_ForwardSM_VGCS_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("additionalDispatcherList", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

let _cached_decoder_for_MT_ForwardSM_VGCS_Res: $.ASN1Decoder<MT_ForwardSM_VGCS_Res> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MT_ForwardSM_VGCS_Res
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MT_ForwardSM_VGCS_Res (el: _Element): MT_ForwardSM_VGCS_Res {
    if (!_cached_decoder_for_MT_ForwardSM_VGCS_Res) { _cached_decoder_for_MT_ForwardSM_VGCS_Res = function (el: _Element): MT_ForwardSM_VGCS_Res {
    let sm_RP_UI: OPTIONAL<SignalInfo>;
    let dispatcherList: OPTIONAL<DispatcherList>;
    let ongoingCall: OPTIONAL<NULL>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let additionalDispatcherList: OPTIONAL<AdditionalDispatcherList>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sm-RP-UI": (_el: _Element): void => { sm_RP_UI = $._decode_implicit<SignalInfo>(() => _decode_SignalInfo)(_el); },
        "dispatcherList": (_el: _Element): void => { dispatcherList = $._decode_implicit<DispatcherList>(() => _decode_DispatcherList)(_el); },
        "ongoingCall": (_el: _Element): void => { ongoingCall = $._decodeNull(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "additionalDispatcherList": (_el: _Element): void => { additionalDispatcherList = $._decode_implicit<AdditionalDispatcherList>(() => _decode_AdditionalDispatcherList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MT_ForwardSM_VGCS_Res,
        _extension_additions_list_spec_for_MT_ForwardSM_VGCS_Res,
        _root_component_type_list_2_spec_for_MT_ForwardSM_VGCS_Res,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MT_ForwardSM_VGCS_Res(
        sm_RP_UI,
        dispatcherList,
        ongoingCall,
        extensionContainer,
        additionalDispatcherList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MT_ForwardSM_VGCS_Res(el);
}

let _cached_encoder_for_MT_ForwardSM_VGCS_Res: $.ASN1Encoder<MT_ForwardSM_VGCS_Res> | null = null;

/**
 * @summary Encodes a(n) MT_ForwardSM_VGCS_Res into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MT_ForwardSM_VGCS_Res, encoded as an ASN.1 Element.
 */
export
function _encode_MT_ForwardSM_VGCS_Res (value: MT_ForwardSM_VGCS_Res, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MT_ForwardSM_VGCS_Res) { _cached_encoder_for_MT_ForwardSM_VGCS_Res = function (value: MT_ForwardSM_VGCS_Res, elGetter: $.ASN1Encoder<MT_ForwardSM_VGCS_Res>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sm_RP_UI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_SignalInfo, $.BER)(value.sm_RP_UI, $.BER)),
            /* IF_ABSENT  */ ((value.dispatcherList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DispatcherList, $.BER)(value.dispatcherList, $.BER)),
            /* IF_ABSENT  */ ((value.ongoingCall === undefined) ? undefined : $._encodeNull(value.ongoingCall, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.additionalDispatcherList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AdditionalDispatcherList, $.BER)(value.additionalDispatcherList, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MT_ForwardSM_VGCS_Res(value, elGetter);
}


/* eslint-enable */
