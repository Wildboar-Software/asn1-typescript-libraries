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
import { RobBitPatt, RobBitPatt_robBit0 /* IMPORTED_LONG_NAMED_BIT */, robBit0 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit1 /* IMPORTED_LONG_NAMED_BIT */, robBit1 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit2 /* IMPORTED_LONG_NAMED_BIT */, robBit2 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit3 /* IMPORTED_LONG_NAMED_BIT */, robBit3 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit4 /* IMPORTED_LONG_NAMED_BIT */, robBit4 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit5 /* IMPORTED_LONG_NAMED_BIT */, robBit5 /* IMPORTED_SHORT_NAMED_BIT */, _decode_RobBitPatt, _encode_RobBitPatt } from "../V59/RobBitPatt.ta.mjs";
// export { RobBitPatt, RobBitPatt_robBit0 /* IMPORTED_LONG_NAMED_BIT */, robBit0 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit1 /* IMPORTED_LONG_NAMED_BIT */, robBit1 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit2 /* IMPORTED_LONG_NAMED_BIT */, robBit2 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit3 /* IMPORTED_LONG_NAMED_BIT */, robBit3 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit4 /* IMPORTED_LONG_NAMED_BIT */, robBit4 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit5 /* IMPORTED_LONG_NAMED_BIT */, robBit5 /* IMPORTED_SHORT_NAMED_BIT */, _decode_RobBitPatt, _encode_RobBitPatt } from "../V59/RobBitPatt.ta.mjs";


/**
 * @summary V90Diag_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V90Diag-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class V90Diag_Item {
    constructor (
        /**
         * @summary `modeV90`.
         * @public
         * @readonly
         */
        readonly modeV90: Capabilities,
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
         * @summary `iNFO1A`.
         * @public
         * @readonly
         */
        readonly iNFO1A: V59String,
        /**
         * @summary `iNFO1d`.
         * @public
         * @readonly
         */
        readonly iNFO1d: V59String,
        /**
         * @summary `mP`.
         * @public
         * @readonly
         */
        readonly mP: V59String,
        /**
         * @summary `cP`.
         * @public
         * @readonly
         */
        readonly cP: V59String,
        /**
         * @summary `cPt`.
         * @public
         * @readonly
         */
        readonly cPt: V59String,
        /**
         * @summary `jAsequence`.
         * @public
         * @readonly
         */
        readonly jAsequence: V59String,
        /**
         * @summary `jDsequence`.
         * @public
         * @readonly
         */
        readonly jDsequence: V59String,
        /**
         * @summary `v90TxLevel`.
         * @public
         * @readonly
         */
        readonly v90TxLevel: TxPowerLevel,
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
         * @summary `rBSpattern`.
         * @public
         * @readonly
         */
        readonly rBSpattern: OPTIONAL<RobBitPatt>,
        /**
         * @summary `digitalPadLoss`.
         * @public
         * @readonly
         */
        readonly digitalPadLoss: OPTIONAL<V59String>,
        /**
         * @summary `codecLaw`.
         * @public
         * @readonly
         */
        readonly codecLaw: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a V90Diag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `V90Diag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V90Diag_Item`.
     * @returns {V90Diag_Item}
     */
    public static _from_object (_o: { [_K in keyof (V90Diag_Item)]: (V90Diag_Item)[_K] }): V90Diag_Item {
        return new V90Diag_Item(_o.modeV90, _o.iNFO0Tx, _o.iNFO0Rx, _o.iNFO1A, _o.iNFO1d, _o.mP, _o.cP, _o.cPt, _o.jAsequence, _o.jDsequence, _o.v90TxLevel, _o.txSymbolRate, _o.rxSymbolRate, _o.txCarrierFreq, _o.rxCarrierFreq, _o.txDataHistory, _o.rxDataHistory, _o.rxLevelEstimate, _o.noiseEstimate, _o.rxSignalQuality, _o.nearEchoEstimate, _o.farEchoEstimate, _o.roundTripDelay, _o.rBSpattern, _o.digitalPadLoss, _o.codecLaw, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of V90Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V90Diag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("modeV90", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("iNFO0Tx", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("iNFO0Rx", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("iNFO1A", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("iNFO1d", false, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("mP", false, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("cP", false, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("cPt", false, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("jAsequence", false, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("jDsequence", false, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("v90TxLevel", false, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("txSymbolRate", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("rxSymbolRate", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("txCarrierFreq", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("rxCarrierFreq", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("txDataHistory", false, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("rxDataHistory", false, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("rxLevelEstimate", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("noiseEstimate", true, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("rxSignalQuality", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("nearEchoEstimate", true, $.hasTag(_TagClass.context, 20), undefined, undefined),
    new $.ComponentSpec("farEchoEstimate", true, $.hasTag(_TagClass.context, 21), undefined, undefined),
    new $.ComponentSpec("roundTripDelay", true, $.hasTag(_TagClass.context, 22), undefined, undefined),
    new $.ComponentSpec("rBSpattern", true, $.hasTag(_TagClass.context, 23), undefined, undefined),
    new $.ComponentSpec("digitalPadLoss", true, $.hasTag(_TagClass.context, 24), undefined, undefined),
    new $.ComponentSpec("codecLaw", true, $.hasTag(_TagClass.context, 25), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of V90Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V90Diag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V90Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V90Diag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V90Diag_Item: $.ASN1Decoder<V90Diag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V90Diag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V90Diag_Item (el: _Element): V90Diag_Item {
    if (!_cached_decoder_for_V90Diag_Item) { _cached_decoder_for_V90Diag_Item = function (el: _Element): V90Diag_Item {
    let modeV90!: Capabilities;
    let iNFO0Tx!: V59String;
    let iNFO0Rx!: V59String;
    let iNFO1A!: V59String;
    let iNFO1d!: V59String;
    let mP!: V59String;
    let cP!: V59String;
    let cPt!: V59String;
    let jAsequence!: V59String;
    let jDsequence!: V59String;
    let v90TxLevel!: TxPowerLevel;
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
    let rBSpattern: OPTIONAL<RobBitPatt>;
    let digitalPadLoss: OPTIONAL<V59String>;
    let codecLaw: OPTIONAL<BOOLEAN>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "modeV90": (_el: _Element): void => { modeV90 = _decode_Capabilities(_el); },
        "iNFO0Tx": (_el: _Element): void => { iNFO0Tx = _decode_V59String(_el); },
        "iNFO0Rx": (_el: _Element): void => { iNFO0Rx = _decode_V59String(_el); },
        "iNFO1A": (_el: _Element): void => { iNFO1A = _decode_V59String(_el); },
        "iNFO1d": (_el: _Element): void => { iNFO1d = _decode_V59String(_el); },
        "mP": (_el: _Element): void => { mP = _decode_V59String(_el); },
        "cP": (_el: _Element): void => { cP = _decode_V59String(_el); },
        "cPt": (_el: _Element): void => { cPt = _decode_V59String(_el); },
        "jAsequence": (_el: _Element): void => { jAsequence = _decode_V59String(_el); },
        "jDsequence": (_el: _Element): void => { jDsequence = _decode_V59String(_el); },
        "v90TxLevel": (_el: _Element): void => { v90TxLevel = _decode_TxPowerLevel(_el); },
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
        "roundTripDelay": (_el: _Element): void => { roundTripDelay = _decode_V59String(_el); },
        "rBSpattern": (_el: _Element): void => { rBSpattern = _decode_RobBitPatt(_el); },
        "digitalPadLoss": (_el: _Element): void => { digitalPadLoss = _decode_V59String(_el); },
        "codecLaw": (_el: _Element): void => { codecLaw = $._decodeBoolean(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_V90Diag_Item,
        _extension_additions_list_spec_for_V90Diag_Item,
        _root_component_type_list_2_spec_for_V90Diag_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new V90Diag_Item(
        modeV90,
        iNFO0Tx,
        iNFO0Rx,
        iNFO1A,
        iNFO1d,
        mP,
        cP,
        cPt,
        jAsequence,
        jDsequence,
        v90TxLevel,
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
        rBSpattern,
        digitalPadLoss,
        codecLaw,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_V90Diag_Item(el);
}

let _cached_encoder_for_V90Diag_Item: $.ASN1Encoder<V90Diag_Item> | null = null;

/**
 * @summary Encodes a(n) V90Diag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V90Diag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_V90Diag_Item (value: V90Diag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V90Diag_Item) { _cached_encoder_for_V90Diag_Item = function (value: V90Diag_Item, elGetter: $.ASN1Encoder<V90Diag_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Capabilities(value.modeV90, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFO0Tx, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFO0Rx, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFO1A, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFO1d, $.BER),
            /* REQUIRED   */ _encode_V59String(value.mP, $.BER),
            /* REQUIRED   */ _encode_V59String(value.cP, $.BER),
            /* REQUIRED   */ _encode_V59String(value.cPt, $.BER),
            /* REQUIRED   */ _encode_V59String(value.jAsequence, $.BER),
            /* REQUIRED   */ _encode_V59String(value.jDsequence, $.BER),
            /* REQUIRED   */ _encode_TxPowerLevel(value.v90TxLevel, $.BER),
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
            /* IF_ABSENT  */ ((value.roundTripDelay === undefined) ? undefined : _encode_V59String(value.roundTripDelay, $.BER)),
            /* IF_ABSENT  */ ((value.rBSpattern === undefined) ? undefined : _encode_RobBitPatt(value.rBSpattern, $.BER)),
            /* IF_ABSENT  */ ((value.digitalPadLoss === undefined) ? undefined : _encode_V59String(value.digitalPadLoss, $.BER)),
            /* IF_ABSENT  */ ((value.codecLaw === undefined) ? undefined : $._encodeBoolean(value.codecLaw, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V90Diag_Item(value, elGetter);
}


/* eslint-enable */
