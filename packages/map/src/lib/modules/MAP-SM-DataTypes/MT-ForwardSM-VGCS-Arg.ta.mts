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
import { ASCI_CallReference, _decode_ASCI_CallReference, _encode_ASCI_CallReference } from "../MAP-CommonDataTypes/ASCI-CallReference.ta.mjs";
import { SM_RP_OA, _decode_SM_RP_OA, _encode_SM_RP_OA } from "../MAP-SM-DataTypes/SM-RP-OA.ta.mjs";
import { SignalInfo, _decode_SignalInfo, _encode_SignalInfo } from "../MAP-CommonDataTypes/SignalInfo.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary MT_ForwardSM_VGCS_Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MT-ForwardSM-VGCS-Arg ::= SEQUENCE {
 *     asciCallReference    ASCI-CallReference,
 *     sm-RP-OA    SM-RP-OA,
 *     sm-RP-UI    SignalInfo,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class MT_ForwardSM_VGCS_Arg {
    constructor (
        /**
         * @summary `asciCallReference`.
         * @public
         * @readonly
         */
        readonly asciCallReference: ASCI_CallReference,
        /**
         * @summary `sm_RP_OA`.
         * @public
         * @readonly
         */
        readonly sm_RP_OA: SM_RP_OA,
        /**
         * @summary `sm_RP_UI`.
         * @public
         * @readonly
         */
        readonly sm_RP_UI: SignalInfo,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MT_ForwardSM_VGCS_Arg
     * @description
     * 
     * This takes an `object` and converts it to a `MT_ForwardSM_VGCS_Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MT_ForwardSM_VGCS_Arg`.
     * @returns {MT_ForwardSM_VGCS_Arg}
     */
    public static _from_object (_o: { [_K in keyof (MT_ForwardSM_VGCS_Arg)]: (MT_ForwardSM_VGCS_Arg)[_K] }): MT_ForwardSM_VGCS_Arg {
        return new MT_ForwardSM_VGCS_Arg(_o.asciCallReference, _o.sm_RP_OA, _o.sm_RP_UI, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MT_ForwardSM_VGCS_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MT_ForwardSM_VGCS_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("asciCallReference", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("sm-RP-OA", false, $.hasAnyTag),
    new $.ComponentSpec("sm-RP-UI", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of MT_ForwardSM_VGCS_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MT_ForwardSM_VGCS_Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MT_ForwardSM_VGCS_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MT_ForwardSM_VGCS_Arg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MT_ForwardSM_VGCS_Arg: $.ASN1Decoder<MT_ForwardSM_VGCS_Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MT_ForwardSM_VGCS_Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MT_ForwardSM_VGCS_Arg (el: _Element): MT_ForwardSM_VGCS_Arg {
    if (!_cached_decoder_for_MT_ForwardSM_VGCS_Arg) { _cached_decoder_for_MT_ForwardSM_VGCS_Arg = function (el: _Element): MT_ForwardSM_VGCS_Arg {
    let asciCallReference!: ASCI_CallReference;
    let sm_RP_OA!: SM_RP_OA;
    let sm_RP_UI!: SignalInfo;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "asciCallReference": (_el: _Element): void => { asciCallReference = _decode_ASCI_CallReference(_el); },
        "sm-RP-OA": (_el: _Element): void => { sm_RP_OA = _decode_SM_RP_OA(_el); },
        "sm-RP-UI": (_el: _Element): void => { sm_RP_UI = _decode_SignalInfo(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MT_ForwardSM_VGCS_Arg,
        _extension_additions_list_spec_for_MT_ForwardSM_VGCS_Arg,
        _root_component_type_list_2_spec_for_MT_ForwardSM_VGCS_Arg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MT_ForwardSM_VGCS_Arg(
        asciCallReference,
        sm_RP_OA,
        sm_RP_UI,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MT_ForwardSM_VGCS_Arg(el);
}

let _cached_encoder_for_MT_ForwardSM_VGCS_Arg: $.ASN1Encoder<MT_ForwardSM_VGCS_Arg> | null = null;

/**
 * @summary Encodes a(n) MT_ForwardSM_VGCS_Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MT_ForwardSM_VGCS_Arg, encoded as an ASN.1 Element.
 */
export
function _encode_MT_ForwardSM_VGCS_Arg (value: MT_ForwardSM_VGCS_Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MT_ForwardSM_VGCS_Arg) { _cached_encoder_for_MT_ForwardSM_VGCS_Arg = function (value: MT_ForwardSM_VGCS_Arg, elGetter: $.ASN1Encoder<MT_ForwardSM_VGCS_Arg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ASCI_CallReference(value.asciCallReference, $.BER),
            /* REQUIRED   */ _encode_SM_RP_OA(value.sm_RP_OA, $.BER),
            /* REQUIRED   */ _encode_SignalInfo(value.sm_RP_UI, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MT_ForwardSM_VGCS_Arg(value, elGetter);
}


/* eslint-enable */
