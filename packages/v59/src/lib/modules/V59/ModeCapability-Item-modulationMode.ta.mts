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
 * @summary ModeCapability_Item_modulationMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModeCapability-Item-modulationMode ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ModeCapability_Item_modulationMode {
    constructor (
        /**
         * @summary `modeV90`.
         * @public
         * @readonly
         */
        readonly modeV90: Capabilities,
        /**
         * @summary `modeV91`.
         * @public
         * @readonly
         */
        readonly modeV91: Capabilities,
        /**
         * @summary `modeV92`.
         * @public
         * @readonly
         */
        readonly modeV92: Capabilities,
        /**
         * @summary `modeV34`.
         * @public
         * @readonly
         */
        readonly modeV34: Capabilities,
        /**
         * @summary `modeV32B`.
         * @public
         * @readonly
         */
        readonly modeV32B: Capabilities,
        /**
         * @summary `modeV22B`.
         * @public
         * @readonly
         */
        readonly modeV22B: Capabilities,
        /**
         * @summary `modeV23`.
         * @public
         * @readonly
         */
        readonly modeV23: Capabilities,
        /**
         * @summary `modeV21`.
         * @public
         * @readonly
         */
        readonly modeV21: Capabilities,
        /**
         * @summary `modeV34H`.
         * @public
         * @readonly
         */
        readonly modeV34H: Capabilities,
        /**
         * @summary `modeV17`.
         * @public
         * @readonly
         */
        readonly modeV17: Capabilities,
        /**
         * @summary `modeV29`.
         * @public
         * @readonly
         */
        readonly modeV29: Capabilities,
        /**
         * @summary `modeV27T`.
         * @public
         * @readonly
         */
        readonly modeV27T: Capabilities,
        /**
         * @summary `modeV18`.
         * @public
         * @readonly
         */
        readonly modeV18: Capabilities,
        /**
         * @summary `otherModMode`.
         * @public
         * @readonly
         */
        readonly otherModMode: OPTIONAL<V59String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModeCapability_Item_modulationMode
     * @description
     * 
     * This takes an `object` and converts it to a `ModeCapability_Item_modulationMode`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModeCapability_Item_modulationMode`.
     * @returns {ModeCapability_Item_modulationMode}
     */
    public static _from_object (_o: { [_K in keyof (ModeCapability_Item_modulationMode)]: (ModeCapability_Item_modulationMode)[_K] }): ModeCapability_Item_modulationMode {
        return new ModeCapability_Item_modulationMode(_o.modeV90, _o.modeV91, _o.modeV92, _o.modeV34, _o.modeV32B, _o.modeV22B, _o.modeV23, _o.modeV21, _o.modeV34H, _o.modeV17, _o.modeV29, _o.modeV27T, _o.modeV18, _o.otherModMode, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ModeCapability_Item_modulationMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModeCapability_Item_modulationMode: $.ComponentSpec[] = [
    new $.ComponentSpec("modeV90", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("modeV91", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("modeV92", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("modeV34", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("modeV32B", false, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("modeV22B", false, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("modeV23", false, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("modeV21", false, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("modeV34H", false, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("modeV17", false, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("modeV29", false, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("modeV27T", false, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("modeV18", false, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("otherModMode", true, $.hasTag(_TagClass.context, 13), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ModeCapability_Item_modulationMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModeCapability_Item_modulationMode: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModeCapability_Item_modulationMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModeCapability_Item_modulationMode: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ModeCapability_Item_modulationMode: $.ASN1Decoder<ModeCapability_Item_modulationMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModeCapability_Item_modulationMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModeCapability_Item_modulationMode (el: _Element): ModeCapability_Item_modulationMode {
    if (!_cached_decoder_for_ModeCapability_Item_modulationMode) { _cached_decoder_for_ModeCapability_Item_modulationMode = function (el: _Element): ModeCapability_Item_modulationMode {
    let modeV90!: Capabilities;
    let modeV91!: Capabilities;
    let modeV92!: Capabilities;
    let modeV34!: Capabilities;
    let modeV32B!: Capabilities;
    let modeV22B!: Capabilities;
    let modeV23!: Capabilities;
    let modeV21!: Capabilities;
    let modeV34H!: Capabilities;
    let modeV17!: Capabilities;
    let modeV29!: Capabilities;
    let modeV27T!: Capabilities;
    let modeV18!: Capabilities;
    let otherModMode: OPTIONAL<V59String>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "modeV90": (_el: _Element): void => { modeV90 = _decode_Capabilities(_el); },
        "modeV91": (_el: _Element): void => { modeV91 = _decode_Capabilities(_el); },
        "modeV92": (_el: _Element): void => { modeV92 = _decode_Capabilities(_el); },
        "modeV34": (_el: _Element): void => { modeV34 = _decode_Capabilities(_el); },
        "modeV32B": (_el: _Element): void => { modeV32B = _decode_Capabilities(_el); },
        "modeV22B": (_el: _Element): void => { modeV22B = _decode_Capabilities(_el); },
        "modeV23": (_el: _Element): void => { modeV23 = _decode_Capabilities(_el); },
        "modeV21": (_el: _Element): void => { modeV21 = _decode_Capabilities(_el); },
        "modeV34H": (_el: _Element): void => { modeV34H = _decode_Capabilities(_el); },
        "modeV17": (_el: _Element): void => { modeV17 = _decode_Capabilities(_el); },
        "modeV29": (_el: _Element): void => { modeV29 = _decode_Capabilities(_el); },
        "modeV27T": (_el: _Element): void => { modeV27T = _decode_Capabilities(_el); },
        "modeV18": (_el: _Element): void => { modeV18 = _decode_Capabilities(_el); },
        "otherModMode": (_el: _Element): void => { otherModMode = _decode_V59String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ModeCapability_Item_modulationMode,
        _extension_additions_list_spec_for_ModeCapability_Item_modulationMode,
        _root_component_type_list_2_spec_for_ModeCapability_Item_modulationMode,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ModeCapability_Item_modulationMode(
        modeV90,
        modeV91,
        modeV92,
        modeV34,
        modeV32B,
        modeV22B,
        modeV23,
        modeV21,
        modeV34H,
        modeV17,
        modeV29,
        modeV27T,
        modeV18,
        otherModMode,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ModeCapability_Item_modulationMode(el);
}

let _cached_encoder_for_ModeCapability_Item_modulationMode: $.ASN1Encoder<ModeCapability_Item_modulationMode> | null = null;

/**
 * @summary Encodes a(n) ModeCapability_Item_modulationMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModeCapability_Item_modulationMode, encoded as an ASN.1 Element.
 */
export
function _encode_ModeCapability_Item_modulationMode (value: ModeCapability_Item_modulationMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModeCapability_Item_modulationMode) { _cached_encoder_for_ModeCapability_Item_modulationMode = function (value: ModeCapability_Item_modulationMode, elGetter: $.ASN1Encoder<ModeCapability_Item_modulationMode>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Capabilities(value.modeV90, $.BER),
            /* REQUIRED   */ _encode_Capabilities(value.modeV91, $.BER),
            /* REQUIRED   */ _encode_Capabilities(value.modeV92, $.BER),
            /* REQUIRED   */ _encode_Capabilities(value.modeV34, $.BER),
            /* REQUIRED   */ _encode_Capabilities(value.modeV32B, $.BER),
            /* REQUIRED   */ _encode_Capabilities(value.modeV22B, $.BER),
            /* REQUIRED   */ _encode_Capabilities(value.modeV23, $.BER),
            /* REQUIRED   */ _encode_Capabilities(value.modeV21, $.BER),
            /* REQUIRED   */ _encode_Capabilities(value.modeV34H, $.BER),
            /* REQUIRED   */ _encode_Capabilities(value.modeV17, $.BER),
            /* REQUIRED   */ _encode_Capabilities(value.modeV29, $.BER),
            /* REQUIRED   */ _encode_Capabilities(value.modeV27T, $.BER),
            /* REQUIRED   */ _encode_Capabilities(value.modeV18, $.BER),
            /* IF_ABSENT  */ ((value.otherModMode === undefined) ? undefined : _encode_V59String(value.otherModMode, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModeCapability_Item_modulationMode(value, elGetter);
}


/* eslint-enable */
