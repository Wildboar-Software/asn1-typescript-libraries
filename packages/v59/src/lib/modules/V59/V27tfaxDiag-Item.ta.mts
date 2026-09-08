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
import { TxPowerLevel, _decode_TxPowerLevel, _encode_TxPowerLevel } from "../V59/TxPowerLevel.ta.mjs";
// export { TxPowerLevel, _decode_TxPowerLevel, _encode_TxPowerLevel } from "../V59/TxPowerLevel.ta.mjs";
import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";
// export { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";


/**
 * @summary V27tfaxDiag_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V27tfaxDiag-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class V27tfaxDiag_Item {
    constructor (
        /**
         * @summary `modeV27T`.
         * @public
         * @readonly
         */
        readonly modeV27T: Capabilities,
        /**
         * @summary `v27TxLevel`.
         * @public
         * @readonly
         */
        readonly v27TxLevel: TxPowerLevel,
        /**
         * @summary `rxLevelEstimate`.
         * @public
         * @readonly
         */
        readonly rxLevelEstimate: OPTIONAL<V59String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a V27tfaxDiag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `V27tfaxDiag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V27tfaxDiag_Item`.
     * @returns {V27tfaxDiag_Item}
     */
    public static _from_object (_o: { [_K in keyof (V27tfaxDiag_Item)]: (V27tfaxDiag_Item)[_K] }): V27tfaxDiag_Item {
        return new V27tfaxDiag_Item(_o.modeV27T, _o.v27TxLevel, _o.rxLevelEstimate, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of V27tfaxDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V27tfaxDiag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("modeV27T", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("v27TxLevel", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("rxLevelEstimate", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of V27tfaxDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V27tfaxDiag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V27tfaxDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V27tfaxDiag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V27tfaxDiag_Item: $.ASN1Decoder<V27tfaxDiag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V27tfaxDiag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V27tfaxDiag_Item (el: _Element): V27tfaxDiag_Item {
    if (!_cached_decoder_for_V27tfaxDiag_Item) { _cached_decoder_for_V27tfaxDiag_Item = function (el: _Element): V27tfaxDiag_Item {
    let modeV27T!: Capabilities;
    let v27TxLevel!: TxPowerLevel;
    let rxLevelEstimate: OPTIONAL<V59String>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "modeV27T": (_el: _Element): void => { modeV27T = _decode_Capabilities(_el); },
        "v27TxLevel": (_el: _Element): void => { v27TxLevel = _decode_TxPowerLevel(_el); },
        "rxLevelEstimate": (_el: _Element): void => { rxLevelEstimate = _decode_V59String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_V27tfaxDiag_Item,
        _extension_additions_list_spec_for_V27tfaxDiag_Item,
        _root_component_type_list_2_spec_for_V27tfaxDiag_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new V27tfaxDiag_Item(
        modeV27T,
        v27TxLevel,
        rxLevelEstimate,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_V27tfaxDiag_Item(el);
}

let _cached_encoder_for_V27tfaxDiag_Item: $.ASN1Encoder<V27tfaxDiag_Item> | null = null;

/**
 * @summary Encodes a(n) V27tfaxDiag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V27tfaxDiag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_V27tfaxDiag_Item (value: V27tfaxDiag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V27tfaxDiag_Item) { _cached_encoder_for_V27tfaxDiag_Item = function (value: V27tfaxDiag_Item, elGetter: $.ASN1Encoder<V27tfaxDiag_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Capabilities(value.modeV27T, $.BER),
            /* REQUIRED   */ _encode_TxPowerLevel(value.v27TxLevel, $.BER),
            /* IF_ABSENT  */ ((value.rxLevelEstimate === undefined) ? undefined : _encode_V59String(value.rxLevelEstimate, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V27tfaxDiag_Item(value, elGetter);
}


/* eslint-enable */
