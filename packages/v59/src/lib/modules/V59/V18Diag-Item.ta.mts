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
import { V18Diag_Item_v18used, _enum_for_V18Diag_Item_v18used, V18Diag_Item_v18used_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_v18_V21Hi /* IMPORTED_LONG_ENUMERATION_ITEM */, v18_V21Hi /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_v18_V21Lo /* IMPORTED_LONG_ENUMERATION_ITEM */, v18_V21Lo /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_v18_V61C /* IMPORTED_LONG_ENUMERATION_ITEM */, v18_V61C /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_v18_V61A /* IMPORTED_LONG_ENUMERATION_ITEM */, v18_V61A /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_v21Hi /* IMPORTED_LONG_ENUMERATION_ITEM */, v21Hi /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_v21Lo /* IMPORTED_LONG_ENUMERATION_ITEM */, v21Lo /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_dTMF /* IMPORTED_LONG_ENUMERATION_ITEM */, dTMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_eDT /* IMPORTED_LONG_ENUMERATION_ITEM */, eDT /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_baudot45 /* IMPORTED_LONG_ENUMERATION_ITEM */, baudot45 /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_baudot47 /* IMPORTED_LONG_ENUMERATION_ITEM */, baudot47 /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_baudot50 /* IMPORTED_LONG_ENUMERATION_ITEM */, baudot50 /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_v23Hi /* IMPORTED_LONG_ENUMERATION_ITEM */, v23Hi /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_v23Lo /* IMPORTED_LONG_ENUMERATION_ITEM */, v23Lo /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_bellHi /* IMPORTED_LONG_ENUMERATION_ITEM */, bellHi /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_bellLo /* IMPORTED_LONG_ENUMERATION_ITEM */, bellLo /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_V18Diag_Item_v18used, _encode_V18Diag_Item_v18used } from "../V59/V18Diag-Item-v18used.ta.mjs";
// export { V18Diag_Item_v18used, _enum_for_V18Diag_Item_v18used, V18Diag_Item_v18used_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_v18_V21Hi /* IMPORTED_LONG_ENUMERATION_ITEM */, v18_V21Hi /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_v18_V21Lo /* IMPORTED_LONG_ENUMERATION_ITEM */, v18_V21Lo /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_v18_V61C /* IMPORTED_LONG_ENUMERATION_ITEM */, v18_V61C /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_v18_V61A /* IMPORTED_LONG_ENUMERATION_ITEM */, v18_V61A /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_v21Hi /* IMPORTED_LONG_ENUMERATION_ITEM */, v21Hi /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_v21Lo /* IMPORTED_LONG_ENUMERATION_ITEM */, v21Lo /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_dTMF /* IMPORTED_LONG_ENUMERATION_ITEM */, dTMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_eDT /* IMPORTED_LONG_ENUMERATION_ITEM */, eDT /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_baudot45 /* IMPORTED_LONG_ENUMERATION_ITEM */, baudot45 /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_baudot47 /* IMPORTED_LONG_ENUMERATION_ITEM */, baudot47 /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_baudot50 /* IMPORTED_LONG_ENUMERATION_ITEM */, baudot50 /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_v23Hi /* IMPORTED_LONG_ENUMERATION_ITEM */, v23Hi /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_v23Lo /* IMPORTED_LONG_ENUMERATION_ITEM */, v23Lo /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_bellHi /* IMPORTED_LONG_ENUMERATION_ITEM */, bellHi /* IMPORTED_SHORT_ENUMERATION_ITEM */, V18Diag_Item_v18used_bellLo /* IMPORTED_LONG_ENUMERATION_ITEM */, bellLo /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_V18Diag_Item_v18used, _encode_V18Diag_Item_v18used } from "../V59/V18Diag-Item-v18used.ta.mjs";
import { TxPowerLevel, _decode_TxPowerLevel, _encode_TxPowerLevel } from "../V59/TxPowerLevel.ta.mjs";
// export { TxPowerLevel, _decode_TxPowerLevel, _encode_TxPowerLevel } from "../V59/TxPowerLevel.ta.mjs";
import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";
// export { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";


/**
 * @summary V18Diag_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V18Diag-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class V18Diag_Item {
    constructor (
        /**
         * @summary `modeV18`.
         * @public
         * @readonly
         */
        readonly modeV18: Capabilities,
        /**
         * @summary `v18used`.
         * @public
         * @readonly
         */
        readonly v18used: V18Diag_Item_v18used,
        /**
         * @summary `v18TxLevel`.
         * @public
         * @readonly
         */
        readonly v18TxLevel: TxPowerLevel,
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
     * @summary Restructures an object into a V18Diag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `V18Diag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V18Diag_Item`.
     * @returns {V18Diag_Item}
     */
    public static _from_object (_o: { [_K in keyof (V18Diag_Item)]: (V18Diag_Item)[_K] }): V18Diag_Item {
        return new V18Diag_Item(_o.modeV18, _o.v18used, _o.v18TxLevel, _o.rxLevelEstimate, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `v18used`
         * @public
         * @static
         */

    public static _enum_for_v18used = _enum_for_V18Diag_Item_v18used;
}

/**
 * @summary The Leading Root Component Types of V18Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V18Diag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("modeV18", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("v18used", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("v18TxLevel", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("rxLevelEstimate", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of V18Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V18Diag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V18Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V18Diag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V18Diag_Item: $.ASN1Decoder<V18Diag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V18Diag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V18Diag_Item (el: _Element): V18Diag_Item {
    if (!_cached_decoder_for_V18Diag_Item) { _cached_decoder_for_V18Diag_Item = function (el: _Element): V18Diag_Item {
    let modeV18!: Capabilities;
    let v18used!: V18Diag_Item_v18used;
    let v18TxLevel!: TxPowerLevel;
    let rxLevelEstimate: OPTIONAL<V59String>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "modeV18": (_el: _Element): void => { modeV18 = _decode_Capabilities(_el); },
        "v18used": (_el: _Element): void => { v18used = _decode_V18Diag_Item_v18used(_el); },
        "v18TxLevel": (_el: _Element): void => { v18TxLevel = _decode_TxPowerLevel(_el); },
        "rxLevelEstimate": (_el: _Element): void => { rxLevelEstimate = _decode_V59String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_V18Diag_Item,
        _extension_additions_list_spec_for_V18Diag_Item,
        _root_component_type_list_2_spec_for_V18Diag_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new V18Diag_Item(
        modeV18,
        v18used,
        v18TxLevel,
        rxLevelEstimate,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_V18Diag_Item(el);
}

let _cached_encoder_for_V18Diag_Item: $.ASN1Encoder<V18Diag_Item> | null = null;

/**
 * @summary Encodes a(n) V18Diag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V18Diag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_V18Diag_Item (value: V18Diag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V18Diag_Item) { _cached_encoder_for_V18Diag_Item = function (value: V18Diag_Item, elGetter: $.ASN1Encoder<V18Diag_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Capabilities(value.modeV18, $.BER),
            /* REQUIRED   */ _encode_V18Diag_Item_v18used(value.v18used, $.BER),
            /* REQUIRED   */ _encode_TxPowerLevel(value.v18TxLevel, $.BER),
            /* IF_ABSENT  */ ((value.rxLevelEstimate === undefined) ? undefined : _encode_V59String(value.rxLevelEstimate, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V18Diag_Item(value, elGetter);
}


/* eslint-enable */
