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
import { SymbolRate, _decode_SymbolRate, _encode_SymbolRate } from "../V59/SymbolRate.ta.mjs";
// export { SymbolRate, _decode_SymbolRate, _encode_SymbolRate } from "../V59/SymbolRate.ta.mjs";
import { CarrierFreq, _decode_CarrierFreq, _encode_CarrierFreq } from "../V59/CarrierFreq.ta.mjs";
// export { CarrierFreq, _decode_CarrierFreq, _encode_CarrierFreq } from "../V59/CarrierFreq.ta.mjs";


/**
 * @summary V34Diag_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V34Diag-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class V34Diag_Item {
    constructor (
        /**
         * @summary `modeV34`.
         * @public
         * @readonly
         */
        readonly modeV34: Capabilities,
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
         * @summary `iNFO1c`.
         * @public
         * @readonly
         */
        readonly iNFO1c: V59String,
        /**
         * @summary `iNFO1a`.
         * @public
         * @readonly
         */
        readonly iNFO1a: V59String,
        /**
         * @summary `mPTx`.
         * @public
         * @readonly
         */
        readonly mPTx: V59String,
        /**
         * @summary `mPRx`.
         * @public
         * @readonly
         */
        readonly mPRx: V59String,
        /**
         * @summary `precodeCoeffTx`.
         * @public
         * @readonly
         */
        readonly precodeCoeffTx: OPTIONAL<V59String>,
        /**
         * @summary `precodeCoeffRx`.
         * @public
         * @readonly
         */
        readonly precodeCoeffRx: OPTIONAL<V59String>,
        /**
         * @summary `v34TxLevel`.
         * @public
         * @readonly
         */
        readonly v34TxLevel: TxPowerLevel,
        /**
         * @summary `txSymbolRate`.
         * @public
         * @readonly
         */
        readonly txSymbolRate: OPTIONAL<SymbolRate>,
        /**
         * @summary `rxSymbolRate`.
         * @public
         * @readonly
         */
        readonly rxSymbolRate: OPTIONAL<SymbolRate>,
        /**
         * @summary `txCarrierFreq`.
         * @public
         * @readonly
         */
        readonly txCarrierFreq: OPTIONAL<CarrierFreq>,
        /**
         * @summary `rxCarrierFreq`.
         * @public
         * @readonly
         */
        readonly rxCarrierFreq: OPTIONAL<CarrierFreq>,
        /**
         * @summary `txDataHistory`.
         * @public
         * @readonly
         */
        readonly txDataHistory: V59String,
        /**
         * @summary `rxDataHistory`.
         * @public
         * @readonly
         */
        readonly rxDataHistory: V59String,
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
         * @summary `nearEchoEstimate`.
         * @public
         * @readonly
         */
        readonly nearEchoEstimate: OPTIONAL<V59String>,
        /**
         * @summary `farEchoEstimate`.
         * @public
         * @readonly
         */
        readonly farEchoEstimate: OPTIONAL<V59String>,
        /**
         * @summary `roundTripDelay`.
         * @public
         * @readonly
         */
        readonly roundTripDelay: OPTIONAL<V59String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a V34Diag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `V34Diag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V34Diag_Item`.
     * @returns {V34Diag_Item}
     */
    public static _from_object (_o: { [_K in keyof (V34Diag_Item)]: (V34Diag_Item)[_K] }): V34Diag_Item {
        return new V34Diag_Item(_o.modeV34, _o.iNFO0Tx, _o.iNFO0Rx, _o.iNFO1c, _o.iNFO1a, _o.mPTx, _o.mPRx, _o.precodeCoeffTx, _o.precodeCoeffRx, _o.v34TxLevel, _o.txSymbolRate, _o.rxSymbolRate, _o.txCarrierFreq, _o.rxCarrierFreq, _o.txDataHistory, _o.rxDataHistory, _o.rxLevelEstimate, _o.noiseEstimate, _o.rxSignalQuality, _o.nearEchoEstimate, _o.farEchoEstimate, _o.roundTripDelay, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of V34Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V34Diag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("modeV34", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("iNFO0Tx", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("iNFO0Rx", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("iNFO1c", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("iNFO1a", false, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("mPTx", false, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("mPRx", false, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("precodeCoeffTx", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("precodeCoeffRx", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("v34TxLevel", false, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("txSymbolRate", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("rxSymbolRate", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("txCarrierFreq", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("rxCarrierFreq", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("txDataHistory", false, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("rxDataHistory", false, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("rxLevelEstimate", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("noiseEstimate", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("rxSignalQuality", true, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("nearEchoEstimate", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("farEchoEstimate", true, $.hasTag(_TagClass.context, 20), undefined, undefined),
    new $.ComponentSpec("roundTripDelay", true, $.hasTag(_TagClass.context, 21), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of V34Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V34Diag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V34Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V34Diag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V34Diag_Item: $.ASN1Decoder<V34Diag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V34Diag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V34Diag_Item (el: _Element): V34Diag_Item {
    if (!_cached_decoder_for_V34Diag_Item) { _cached_decoder_for_V34Diag_Item = function (el: _Element): V34Diag_Item {
    let modeV34!: Capabilities;
    let iNFO0Tx!: V59String;
    let iNFO0Rx!: V59String;
    let iNFO1c!: V59String;
    let iNFO1a!: V59String;
    let mPTx!: V59String;
    let mPRx!: V59String;
    let precodeCoeffTx: OPTIONAL<V59String>;
    let precodeCoeffRx: OPTIONAL<V59String>;
    let v34TxLevel!: TxPowerLevel;
    let txSymbolRate: OPTIONAL<SymbolRate>;
    let rxSymbolRate: OPTIONAL<SymbolRate>;
    let txCarrierFreq: OPTIONAL<CarrierFreq>;
    let rxCarrierFreq: OPTIONAL<CarrierFreq>;
    let txDataHistory!: V59String;
    let rxDataHistory!: V59String;
    let rxLevelEstimate: OPTIONAL<V59String>;
    let noiseEstimate: OPTIONAL<V59String>;
    let rxSignalQuality: OPTIONAL<V59String>;
    let nearEchoEstimate: OPTIONAL<V59String>;
    let farEchoEstimate: OPTIONAL<V59String>;
    let roundTripDelay: OPTIONAL<V59String>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "modeV34": (_el: _Element): void => { modeV34 = _decode_Capabilities(_el); },
        "iNFO0Tx": (_el: _Element): void => { iNFO0Tx = _decode_V59String(_el); },
        "iNFO0Rx": (_el: _Element): void => { iNFO0Rx = _decode_V59String(_el); },
        "iNFO1c": (_el: _Element): void => { iNFO1c = _decode_V59String(_el); },
        "iNFO1a": (_el: _Element): void => { iNFO1a = _decode_V59String(_el); },
        "mPTx": (_el: _Element): void => { mPTx = _decode_V59String(_el); },
        "mPRx": (_el: _Element): void => { mPRx = _decode_V59String(_el); },
        "precodeCoeffTx": (_el: _Element): void => { precodeCoeffTx = _decode_V59String(_el); },
        "precodeCoeffRx": (_el: _Element): void => { precodeCoeffRx = _decode_V59String(_el); },
        "v34TxLevel": (_el: _Element): void => { v34TxLevel = _decode_TxPowerLevel(_el); },
        "txSymbolRate": (_el: _Element): void => { txSymbolRate = _decode_SymbolRate(_el); },
        "rxSymbolRate": (_el: _Element): void => { rxSymbolRate = _decode_SymbolRate(_el); },
        "txCarrierFreq": (_el: _Element): void => { txCarrierFreq = _decode_CarrierFreq(_el); },
        "rxCarrierFreq": (_el: _Element): void => { rxCarrierFreq = _decode_CarrierFreq(_el); },
        "txDataHistory": (_el: _Element): void => { txDataHistory = _decode_V59String(_el); },
        "rxDataHistory": (_el: _Element): void => { rxDataHistory = _decode_V59String(_el); },
        "rxLevelEstimate": (_el: _Element): void => { rxLevelEstimate = _decode_V59String(_el); },
        "noiseEstimate": (_el: _Element): void => { noiseEstimate = _decode_V59String(_el); },
        "rxSignalQuality": (_el: _Element): void => { rxSignalQuality = _decode_V59String(_el); },
        "nearEchoEstimate": (_el: _Element): void => { nearEchoEstimate = _decode_V59String(_el); },
        "farEchoEstimate": (_el: _Element): void => { farEchoEstimate = _decode_V59String(_el); },
        "roundTripDelay": (_el: _Element): void => { roundTripDelay = _decode_V59String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_V34Diag_Item,
        _extension_additions_list_spec_for_V34Diag_Item,
        _root_component_type_list_2_spec_for_V34Diag_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new V34Diag_Item(
        modeV34,
        iNFO0Tx,
        iNFO0Rx,
        iNFO1c,
        iNFO1a,
        mPTx,
        mPRx,
        precodeCoeffTx,
        precodeCoeffRx,
        v34TxLevel,
        txSymbolRate,
        rxSymbolRate,
        txCarrierFreq,
        rxCarrierFreq,
        txDataHistory,
        rxDataHistory,
        rxLevelEstimate,
        noiseEstimate,
        rxSignalQuality,
        nearEchoEstimate,
        farEchoEstimate,
        roundTripDelay,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_V34Diag_Item(el);
}

let _cached_encoder_for_V34Diag_Item: $.ASN1Encoder<V34Diag_Item> | null = null;

/**
 * @summary Encodes a(n) V34Diag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V34Diag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_V34Diag_Item (value: V34Diag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V34Diag_Item) { _cached_encoder_for_V34Diag_Item = function (value: V34Diag_Item, elGetter: $.ASN1Encoder<V34Diag_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Capabilities(value.modeV34, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFO0Tx, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFO0Rx, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFO1c, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFO1a, $.BER),
            /* REQUIRED   */ _encode_V59String(value.mPTx, $.BER),
            /* REQUIRED   */ _encode_V59String(value.mPRx, $.BER),
            /* IF_ABSENT  */ ((value.precodeCoeffTx === undefined) ? undefined : _encode_V59String(value.precodeCoeffTx, $.BER)),
            /* IF_ABSENT  */ ((value.precodeCoeffRx === undefined) ? undefined : _encode_V59String(value.precodeCoeffRx, $.BER)),
            /* REQUIRED   */ _encode_TxPowerLevel(value.v34TxLevel, $.BER),
            /* IF_ABSENT  */ ((value.txSymbolRate === undefined) ? undefined : _encode_SymbolRate(value.txSymbolRate, $.BER)),
            /* IF_ABSENT  */ ((value.rxSymbolRate === undefined) ? undefined : _encode_SymbolRate(value.rxSymbolRate, $.BER)),
            /* IF_ABSENT  */ ((value.txCarrierFreq === undefined) ? undefined : _encode_CarrierFreq(value.txCarrierFreq, $.BER)),
            /* IF_ABSENT  */ ((value.rxCarrierFreq === undefined) ? undefined : _encode_CarrierFreq(value.rxCarrierFreq, $.BER)),
            /* REQUIRED   */ _encode_V59String(value.txDataHistory, $.BER),
            /* REQUIRED   */ _encode_V59String(value.rxDataHistory, $.BER),
            /* IF_ABSENT  */ ((value.rxLevelEstimate === undefined) ? undefined : _encode_V59String(value.rxLevelEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.noiseEstimate === undefined) ? undefined : _encode_V59String(value.noiseEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.rxSignalQuality === undefined) ? undefined : _encode_V59String(value.rxSignalQuality, $.BER)),
            /* IF_ABSENT  */ ((value.nearEchoEstimate === undefined) ? undefined : _encode_V59String(value.nearEchoEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.farEchoEstimate === undefined) ? undefined : _encode_V59String(value.farEchoEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.roundTripDelay === undefined) ? undefined : _encode_V59String(value.roundTripDelay, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V34Diag_Item(value, elGetter);
}


/* eslint-enable */
