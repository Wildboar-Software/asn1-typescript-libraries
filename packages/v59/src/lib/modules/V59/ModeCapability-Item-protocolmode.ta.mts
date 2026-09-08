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
import { Capabilities, _decode_Capabilities, _encode_Capabilities } from "../V59/Capabilities.ta.mjs";
// export { Capabilities, _decode_Capabilities, _encode_Capabilities } from "../V59/Capabilities.ta.mjs";
import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";
// export { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";


/**
 * @summary ModeCapability_Item_protocolmode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModeCapability-Item-protocolmode ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ModeCapability_Item_protocolmode {
    constructor (
        /**
         * @summary `modeV42`.
         * @public
         * @readonly
         */
        readonly modeV42: Capabilities,
        /**
         * @summary `modeV42B`.
         * @public
         * @readonly
         */
        readonly modeV42B: Capabilities,
        /**
         * @summary `modeV44`.
         * @public
         * @readonly
         */
        readonly modeV44: Capabilities,
        /**
         * @summary `otherProtMode`.
         * @public
         * @readonly
         */
        readonly otherProtMode: OPTIONAL<V59String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModeCapability_Item_protocolmode
     * @description
     * 
     * This takes an `object` and converts it to a `ModeCapability_Item_protocolmode`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModeCapability_Item_protocolmode`.
     * @returns {ModeCapability_Item_protocolmode}
     */
    public static _from_object (_o: { [_K in keyof (ModeCapability_Item_protocolmode)]: (ModeCapability_Item_protocolmode)[_K] }): ModeCapability_Item_protocolmode {
        return new ModeCapability_Item_protocolmode(_o.modeV42, _o.modeV42B, _o.modeV44, _o.otherProtMode, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ModeCapability_Item_protocolmode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModeCapability_Item_protocolmode: $.ComponentSpec[] = [
    new $.ComponentSpec("modeV42", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("modeV42B", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("modeV44", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("otherProtMode", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ModeCapability_Item_protocolmode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModeCapability_Item_protocolmode: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModeCapability_Item_protocolmode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModeCapability_Item_protocolmode: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ModeCapability_Item_protocolmode: $.ASN1Decoder<ModeCapability_Item_protocolmode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModeCapability_Item_protocolmode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModeCapability_Item_protocolmode (el: _Element): ModeCapability_Item_protocolmode {
    if (!_cached_decoder_for_ModeCapability_Item_protocolmode) { _cached_decoder_for_ModeCapability_Item_protocolmode = function (el: _Element): ModeCapability_Item_protocolmode {
    let modeV42!: Capabilities;
    let modeV42B!: Capabilities;
    let modeV44!: Capabilities;
    let otherProtMode: OPTIONAL<V59String>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "modeV42": (_el: _Element): void => { modeV42 = _decode_Capabilities(_el); },
        "modeV42B": (_el: _Element): void => { modeV42B = _decode_Capabilities(_el); },
        "modeV44": (_el: _Element): void => { modeV44 = _decode_Capabilities(_el); },
        "otherProtMode": (_el: _Element): void => { otherProtMode = _decode_V59String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ModeCapability_Item_protocolmode,
        _extension_additions_list_spec_for_ModeCapability_Item_protocolmode,
        _root_component_type_list_2_spec_for_ModeCapability_Item_protocolmode,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ModeCapability_Item_protocolmode(
        modeV42,
        modeV42B,
        modeV44,
        otherProtMode,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ModeCapability_Item_protocolmode(el);
}

let _cached_encoder_for_ModeCapability_Item_protocolmode: $.ASN1Encoder<ModeCapability_Item_protocolmode> | null = null;

/**
 * @summary Encodes a(n) ModeCapability_Item_protocolmode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModeCapability_Item_protocolmode, encoded as an ASN.1 Element.
 */
export
function _encode_ModeCapability_Item_protocolmode (value: ModeCapability_Item_protocolmode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModeCapability_Item_protocolmode) { _cached_encoder_for_ModeCapability_Item_protocolmode = function (value: ModeCapability_Item_protocolmode, elGetter: $.ASN1Encoder<ModeCapability_Item_protocolmode>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Capabilities(value.modeV42, $.BER),
            /* REQUIRED   */ _encode_Capabilities(value.modeV42B, $.BER),
            /* REQUIRED   */ _encode_Capabilities(value.modeV44, $.BER),
            /* IF_ABSENT  */ ((value.otherProtMode === undefined) ? undefined : _encode_V59String(value.otherProtMode, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModeCapability_Item_protocolmode(value, elGetter);
}


/* eslint-enable */
