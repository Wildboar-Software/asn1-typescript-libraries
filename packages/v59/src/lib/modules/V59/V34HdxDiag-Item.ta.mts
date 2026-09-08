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
import { TxPowerLevel, _decode_TxPowerLevel, _encode_TxPowerLevel } from "../V59/TxPowerLevel.ta.mjs";
// export { TxPowerLevel, _decode_TxPowerLevel, _encode_TxPowerLevel } from "../V59/TxPowerLevel.ta.mjs";
import { V34HdxDiag_Item_cCrate, _enum_for_V34HdxDiag_Item_cCrate, V34HdxDiag_Item_cCrate_t12R12 /* IMPORTED_LONG_ENUMERATION_ITEM */, t12R12 /* IMPORTED_SHORT_ENUMERATION_ITEM */, V34HdxDiag_Item_cCrate_t24R24 /* IMPORTED_LONG_ENUMERATION_ITEM */, t24R24 /* IMPORTED_SHORT_ENUMERATION_ITEM */, V34HdxDiag_Item_cCrate_t12R24 /* IMPORTED_LONG_ENUMERATION_ITEM */, t12R24 /* IMPORTED_SHORT_ENUMERATION_ITEM */, V34HdxDiag_Item_cCrate_t24R12 /* IMPORTED_LONG_ENUMERATION_ITEM */, t24R12 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_V34HdxDiag_Item_cCrate, _encode_V34HdxDiag_Item_cCrate } from "../V59/V34HdxDiag-Item-cCrate.ta.mjs";
// export { V34HdxDiag_Item_cCrate, _enum_for_V34HdxDiag_Item_cCrate, V34HdxDiag_Item_cCrate_t12R12 /* IMPORTED_LONG_ENUMERATION_ITEM */, t12R12 /* IMPORTED_SHORT_ENUMERATION_ITEM */, V34HdxDiag_Item_cCrate_t24R24 /* IMPORTED_LONG_ENUMERATION_ITEM */, t24R24 /* IMPORTED_SHORT_ENUMERATION_ITEM */, V34HdxDiag_Item_cCrate_t12R24 /* IMPORTED_LONG_ENUMERATION_ITEM */, t12R24 /* IMPORTED_SHORT_ENUMERATION_ITEM */, V34HdxDiag_Item_cCrate_t24R12 /* IMPORTED_LONG_ENUMERATION_ITEM */, t24R12 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_V34HdxDiag_Item_cCrate, _encode_V34HdxDiag_Item_cCrate } from "../V59/V34HdxDiag-Item-cCrate.ta.mjs";


/**
 * @summary V34HdxDiag_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V34HdxDiag-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class V34HdxDiag_Item {
    constructor (
        /**
         * @summary `modeV34H`.
         * @public
         * @readonly
         */
        readonly modeV34H: Capabilities,
        /**
         * @summary `iNFO0Tx`.
         * @public
         * @readonly
         */
        readonly iNFO0Tx: V59String,
        /**
         * @summary `iNFO0Rx`.
         * @public
         * @readonly
         */
        readonly iNFO0Rx: V59String,
        /**
         * @summary `iNFOh`.
         * @public
         * @readonly
         */
        readonly iNFOh: V59String,
        /**
         * @summary `mPh`.
         * @public
         * @readonly
         */
        readonly mPh: V59String,
        /**
         * @summary `precodeCoeffTx`.
         * @public
         * @readonly
         */
        readonly precodeCoeffTx: OPTIONAL<V59String>,
        /**
         * @summary `v34TxLevel`.
         * @public
         * @readonly
         */
        readonly v34TxLevel: TxPowerLevel,
        /**
         * @summary `symbolRate`.
         * @public
         * @readonly
         */
        readonly symbolRate: OPTIONAL<V59String>,
        /**
         * @summary `carrierFreq`.
         * @public
         * @readonly
         */
        readonly carrierFreq: OPTIONAL<V59String>,
        /**
         * @summary `dataHistory`.
         * @public
         * @readonly
         */
        readonly dataHistory: OPTIONAL<V59String>,
        /**
         * @summary `rxLevelEstimate`.
         * @public
         * @readonly
         */
        readonly rxLevelEstimate: OPTIONAL<V59String>,
        /**
         * @summary `noiseEstimate`.
         * @public
         * @readonly
         */
        readonly noiseEstimate: OPTIONAL<V59String>,
        /**
         * @summary `rxSignalQuality`.
         * @public
         * @readonly
         */
        readonly rxSignalQuality: OPTIONAL<V59String>,
        /**
         * @summary `cCrate`.
         * @public
         * @readonly
         */
        readonly cCrate: V34HdxDiag_Item_cCrate,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a V34HdxDiag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `V34HdxDiag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V34HdxDiag_Item`.
     * @returns {V34HdxDiag_Item}
     */
    public static _from_object (_o: { [_K in keyof (V34HdxDiag_Item)]: (V34HdxDiag_Item)[_K] }): V34HdxDiag_Item {
        return new V34HdxDiag_Item(_o.modeV34H, _o.iNFO0Tx, _o.iNFO0Rx, _o.iNFOh, _o.mPh, _o.precodeCoeffTx, _o.v34TxLevel, _o.symbolRate, _o.carrierFreq, _o.dataHistory, _o.rxLevelEstimate, _o.noiseEstimate, _o.rxSignalQuality, _o.cCrate, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `cCrate`
         * @public
         * @static
         */

    public static _enum_for_cCrate = _enum_for_V34HdxDiag_Item_cCrate;
}

/**
 * @summary The Leading Root Component Types of V34HdxDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V34HdxDiag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("modeV34H", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("iNFO0Tx", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("iNFO0Rx", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("iNFOh", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("mPh", false, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("precodeCoeffTx", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("v34TxLevel", false, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("symbolRate", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("carrierFreq", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("dataHistory", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("rxLevelEstimate", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("noiseEstimate", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("rxSignalQuality", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("cCrate", false, $.hasTag(_TagClass.context, 13), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of V34HdxDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V34HdxDiag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V34HdxDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V34HdxDiag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V34HdxDiag_Item: $.ASN1Decoder<V34HdxDiag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V34HdxDiag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V34HdxDiag_Item (el: _Element): V34HdxDiag_Item {
    if (!_cached_decoder_for_V34HdxDiag_Item) { _cached_decoder_for_V34HdxDiag_Item = function (el: _Element): V34HdxDiag_Item {
    let modeV34H!: Capabilities;
    let iNFO0Tx!: V59String;
    let iNFO0Rx!: V59String;
    let iNFOh!: V59String;
    let mPh!: V59String;
    let precodeCoeffTx: OPTIONAL<V59String>;
    let v34TxLevel!: TxPowerLevel;
    let symbolRate: OPTIONAL<V59String>;
    let carrierFreq: OPTIONAL<V59String>;
    let dataHistory: OPTIONAL<V59String>;
    let rxLevelEstimate: OPTIONAL<V59String>;
    let noiseEstimate: OPTIONAL<V59String>;
    let rxSignalQuality: OPTIONAL<V59String>;
    let cCrate!: V34HdxDiag_Item_cCrate;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "modeV34H": (_el: _Element): void => { modeV34H = _decode_Capabilities(_el); },
        "iNFO0Tx": (_el: _Element): void => { iNFO0Tx = _decode_V59String(_el); },
        "iNFO0Rx": (_el: _Element): void => { iNFO0Rx = _decode_V59String(_el); },
        "iNFOh": (_el: _Element): void => { iNFOh = _decode_V59String(_el); },
        "mPh": (_el: _Element): void => { mPh = _decode_V59String(_el); },
        "precodeCoeffTx": (_el: _Element): void => { precodeCoeffTx = _decode_V59String(_el); },
        "v34TxLevel": (_el: _Element): void => { v34TxLevel = _decode_TxPowerLevel(_el); },
        "symbolRate": (_el: _Element): void => { symbolRate = _decode_V59String(_el); },
        "carrierFreq": (_el: _Element): void => { carrierFreq = _decode_V59String(_el); },
        "dataHistory": (_el: _Element): void => { dataHistory = _decode_V59String(_el); },
        "rxLevelEstimate": (_el: _Element): void => { rxLevelEstimate = _decode_V59String(_el); },
        "noiseEstimate": (_el: _Element): void => { noiseEstimate = _decode_V59String(_el); },
        "rxSignalQuality": (_el: _Element): void => { rxSignalQuality = _decode_V59String(_el); },
        "cCrate": (_el: _Element): void => { cCrate = _decode_V34HdxDiag_Item_cCrate(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_V34HdxDiag_Item,
        _extension_additions_list_spec_for_V34HdxDiag_Item,
        _root_component_type_list_2_spec_for_V34HdxDiag_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new V34HdxDiag_Item(
        modeV34H,
        iNFO0Tx,
        iNFO0Rx,
        iNFOh,
        mPh,
        precodeCoeffTx,
        v34TxLevel,
        symbolRate,
        carrierFreq,
        dataHistory,
        rxLevelEstimate,
        noiseEstimate,
        rxSignalQuality,
        cCrate,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_V34HdxDiag_Item(el);
}

let _cached_encoder_for_V34HdxDiag_Item: $.ASN1Encoder<V34HdxDiag_Item> | null = null;

/**
 * @summary Encodes a(n) V34HdxDiag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V34HdxDiag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_V34HdxDiag_Item (value: V34HdxDiag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V34HdxDiag_Item) { _cached_encoder_for_V34HdxDiag_Item = function (value: V34HdxDiag_Item, elGetter: $.ASN1Encoder<V34HdxDiag_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Capabilities(value.modeV34H, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFO0Tx, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFO0Rx, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFOh, $.BER),
            /* REQUIRED   */ _encode_V59String(value.mPh, $.BER),
            /* IF_ABSENT  */ ((value.precodeCoeffTx === undefined) ? undefined : _encode_V59String(value.precodeCoeffTx, $.BER)),
            /* REQUIRED   */ _encode_TxPowerLevel(value.v34TxLevel, $.BER),
            /* IF_ABSENT  */ ((value.symbolRate === undefined) ? undefined : _encode_V59String(value.symbolRate, $.BER)),
            /* IF_ABSENT  */ ((value.carrierFreq === undefined) ? undefined : _encode_V59String(value.carrierFreq, $.BER)),
            /* IF_ABSENT  */ ((value.dataHistory === undefined) ? undefined : _encode_V59String(value.dataHistory, $.BER)),
            /* IF_ABSENT  */ ((value.rxLevelEstimate === undefined) ? undefined : _encode_V59String(value.rxLevelEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.noiseEstimate === undefined) ? undefined : _encode_V59String(value.noiseEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.rxSignalQuality === undefined) ? undefined : _encode_V59String(value.rxSignalQuality, $.BER)),
            /* REQUIRED   */ _encode_V34HdxDiag_Item_cCrate(value.cCrate, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V34HdxDiag_Item(value, elGetter);
}


/* eslint-enable */
