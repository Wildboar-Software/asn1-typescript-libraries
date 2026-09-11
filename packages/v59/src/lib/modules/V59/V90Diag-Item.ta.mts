/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import { Capabilities, _decode_Capabilities, _encode_Capabilities } from "../V59/Capabilities.ta.mjs";

import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";

import { TxPowerLevel, _decode_TxPowerLevel, _encode_TxPowerLevel } from "../V59/TxPowerLevel.ta.mjs";

import { SymbolRate, _decode_SymbolRate, _encode_SymbolRate } from "../V59/SymbolRate.ta.mjs";

import { CarrierFreq, _decode_CarrierFreq, _encode_CarrierFreq } from "../V59/CarrierFreq.ta.mjs";

import { RobBitPatt, _decode_RobBitPatt, _encode_RobBitPatt } from "../V59/RobBitPatt.ta.mjs";

/**
 * @summary V90Diag_Item
 * @description
 *
 * V.90 training sequences, rates, line estimates, and PCM codec law. ITU-T Rec.
 * V.59 (11/2000) §6.8.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V90Diag-Item ::= SEQUENCE {modeV90           Capabilities,
 *               iNFO0Tx           V59String,
 *               iNFO0Rx           V59String,
 *               iNFO1A            V59String,
 *               iNFO1d            V59String,
 *               mP                V59String,
 *               cP                V59String,
 *               cPt               V59String,
 *               jAsequence        V59String,
 *               jDsequence        V59String,
 *               v90TxLevel        TxPowerLevel,
 *               txSymbolRate      SymbolRate OPTIONAL,
 *               rxSymbolRate      SymbolRate OPTIONAL,
 *               txCarrierFreq     CarrierFreq OPTIONAL,
 *               rxCarrierFreq     CarrierFreq OPTIONAL,
 *               txDataHistory     V59String,
 *               rxDataHistory     V59String,
 *               rxLevelEstimate   V59String OPTIONAL,
 *               noiseEstimate     V59String OPTIONAL,
 *               rxSignalQuality   V59String OPTIONAL,
 *               nearEchoEstimate  V59String OPTIONAL,
 *               farEchoEstimate   V59String OPTIONAL,
 *               roundTripDelay    V59String OPTIONAL,
 *               rBSpattern        RobBitPatt OPTIONAL,
 *               digitalPadLoss    V59String OPTIONAL,
 *               codecLaw          BOOLEAN OPTIONAL,
 *               ...}
 * ```
 * 
 * @class
 */
export
class V90Diag_Item {
    constructor (
        /**
         * @summary `modeV90`.
         * @description
         *
         * V.90 operating-mode capability. Table 5/V.59: `notSupported`(0),
         * `default`(1) preferred, `enabled`(2), `disabled`(3) supported but
         * off. Tag-ID `0900`. ITU-T Rec. V.59 (11/2000) §6.8.3.
         * @public
         * @readonly
         */
        readonly modeV90: Capabilities,
        /**
         * @summary `iNFO0Tx`.
         * @description
         *
         * INFO0 sequence transmitted. Hex `dataSequence` (§6.2.2): first bit in
         * time is the LSB of each hex word; omit start/stop/fill bits and CRCs;
         * `;` delimits N-bit words. Common Tag-ID `41`. ITU-T Rec. V.59
         * (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly iNFO0Tx: V59String,
        /**
         * @summary `iNFO0Rx`.
         * @description
         *
         * INFO0 sequence received. Hex `dataSequence` (§6.2.2): first bit in
         * time is the LSB of each hex word; omit start/stop/fill bits and CRCs;
         * `;` delimits N-bit words. Common Tag-ID `42`. ITU-T Rec. V.59
         * (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly iNFO0Rx: V59String,
        /**
         * @summary `iNFO1A`.
         * @description
         *
         * INFO1a sequence transmitted or received in V.90. Hex `dataSequence`
         * (§6.2.2): first bit in time is the LSB of each hex word; omit
         * start/stop/fill bits and CRCs; `;` delimits N-bit words. Tag-ID
         * `0902`. ITU-T Rec. V.59 (11/2000) §6.8.3.
         * @public
         * @readonly
         */
        readonly iNFO1A: V59String,
        /**
         * @summary `iNFO1d`.
         * @description
         *
         * INFO1d sequence transmitted or received in V.90, depending on calling
         * or answering. Hex `dataSequence` (§6.2.2): first bit in time is the
         * LSB of each hex word; omit start/stop/fill bits and CRCs; `;`
         * delimits N-bit words. Tag-ID `0901`. ITU-T Rec. V.59 (11/2000)
         * §6.8.3.
         * @public
         * @readonly
         */
        readonly iNFO1d: V59String,
        /**
         * @summary `mP`.
         * @description
         *
         * MP sequence. Precoder coefficients of type-1 MP are omitted (see
         * `precodeCoeffTx`/`precodeCoeffRx` on V.34). Hex `dataSequence`
         * (§6.2.2): first bit in time is the LSB of each hex word; omit
         * start/stop/fill bits and CRCs; `;` delimits N-bit words. Tag-ID
         * `0903`. ITU-T Rec. V.59 (11/2000) §6.8.3.
         * @public
         * @readonly
         */
        readonly mP: V59String,
        /**
         * @summary `cP`.
         * @description
         *
         * Last CP sequence. Hex `dataSequence` (§6.2.2): first bit in time is
         * the LSB of each hex word; omit start/stop/fill bits and CRCs; `;`
         * delimits N-bit words. Tag-ID `54`. ITU-T Rec. V.59 (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly cP: V59String,
        /**
         * @summary `cPt`.
         * @description
         *
         * Last CPt sequence. Hex `dataSequence` (§6.2.2): first bit in time is
         * the LSB of each hex word; omit start/stop/fill bits and CRCs; `;`
         * delimits N-bit words. Tag-ID `0904`. ITU-T Rec. V.59 (11/2000)
         * §6.8.3.
         * @public
         * @readonly
         */
        readonly cPt: V59String,
        /**
         * @summary `jAsequence`.
         * @description
         *
         * JA sequence. Hex `dataSequence` (§6.2.2): first bit in time is the
         * LSB of each hex word; omit start/stop/fill bits and CRCs; `;`
         * delimits N-bit words. Tag-ID `0905`. ITU-T Rec. V.59 (11/2000)
         * §6.8.3.
         * @public
         * @readonly
         */
        readonly jAsequence: V59String,
        /**
         * @summary `jDsequence`.
         * @description
         *
         * JD sequence. Hex `dataSequence` (§6.2.2): first bit in time is the
         * LSB of each hex word; omit start/stop/fill bits and CRCs; `;`
         * delimits N-bit words. Tag-ID `0906`. ITU-T Rec. V.59 (11/2000)
         * §6.8.3.
         * @public
         * @readonly
         */
        readonly jDsequence: V59String,
        /**
         * @summary `v90TxLevel`.
         * @description
         *
         * V.90 transmit power (`TxPowerLevel`). ITU-T Rec. V.59 (11/2000)
         * §6.8.3.
         * @public
         * @readonly
         */
        readonly v90TxLevel: TxPowerLevel,
        /**
         * @summary `txSymbolRate`.
         * @description
         *
         * Transmitter symbol rate (Table 1/V.59). `sR8000` = PCM. Tag-ID `48`.
         * ITU-T Rec. V.59 (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly txSymbolRate: OPTIONAL<SymbolRate>,
        /**
         * @summary `rxSymbolRate`.
         * @description
         *
         * Receiver symbol rate (Table 1/V.59). `sR8000` = PCM. Tag-ID `49`.
         * ITU-T Rec. V.59 (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly rxSymbolRate: OPTIONAL<SymbolRate>,
        /**
         * @summary `txCarrierFreq`.
         * @description
         *
         * Transmitter carrier frequency matching the symbol rate (Table
         * 2/V.59). Tag-ID `4A`. ITU-T Rec. V.59 (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly txCarrierFreq: OPTIONAL<CarrierFreq>,
        /**
         * @summary `rxCarrierFreq`.
         * @description
         *
         * Receiver carrier frequency matching the receive symbol rate (Table
         * 2/V.59). Tag-ID `4B`. ITU-T Rec. V.59 (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly rxCarrierFreq: OPTIONAL<CarrierFreq>,
        /**
         * @summary `txDataHistory`.
         * @description
         *
         * Transmitter primary data rates used. Example:
         * `45333;44000;33333;33600`. IA5 `simpleText` (§6.2.1). History lists
         * oldest event first, most recent last (§6.2.6). Tag-ID `4C`. ITU-T
         * Rec. V.59 (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly txDataHistory: V59String,
        /**
         * @summary `rxDataHistory`.
         * @description
         *
         * Receiver primary data rates used (same format as `txDataHistory`).
         * History lists oldest event first, most recent last (§6.2.6). Tag-ID
         * `4D`. ITU-T Rec. V.59 (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly rxDataHistory: V59String,
        /**
         * @summary `rxLevelEstimate`.
         * @description
         *
         * Receive power at the modem input, with units (e.g. `-25dBm0`). May
         * differ from a measurement at the line interface. IA5 `simpleText`
         * (§6.2.1). Tag-ID `4E`. ITU-T Rec. V.59 (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly rxLevelEstimate: OPTIONAL<V59String>,
        /**
         * @summary `noiseEstimate`.
         * @description
         *
         * Noise level with units (e.g. `-55dBm`, `35dBrn`). IA5 `simpleText`
         * (§6.2.1). Tag-ID `4F`. ITU-T Rec. V.59 (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly noiseEstimate: OPTIONAL<V59String>,
        /**
         * @summary `rxSignalQuality`.
         * @description
         *
         * Receiver signal quality at start and, if available, near end of call.
         * Fractional form 1.0 best / 0.0 worst (e.g. `0.445;0.312`), or a
         * proprietary integer as text. IA5 `simpleText` (§6.2.1). Tag-ID `50`.
         * ITU-T Rec. V.59 (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly rxSignalQuality: OPTIONAL<V59String>,
        /**
         * @summary `nearEchoEstimate`.
         * @description
         *
         * Near-end echo at start and, if available, end of call. Units in the
         * string; omitted units mean a custom scale. IA5 `simpleText` (§6.2.1).
         * Tag-ID `51`. ITU-T Rec. V.59 (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly nearEchoEstimate: OPTIONAL<V59String>,
        /**
         * @summary `farEchoEstimate`.
         * @description
         *
         * Far-end echo at start and, if available, end of call. Units in the
         * string; omitted units mean a custom scale. IA5 `simpleText` (§6.2.1).
         * Tag-ID `52`. ITU-T Rec. V.59 (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly farEchoEstimate: OPTIONAL<V59String>,
        /**
         * @summary `roundTripDelay`.
         * @description
         *
         * Round-trip delay with units (`25ms`, `0.025s`, or `166T` where T is
         * symbol periods). IA5 `simpleText` (§6.2.1). Tag-ID `53`. ITU-T Rec.
         * V.59 (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly roundTripDelay: OPTIONAL<V59String>,
        /**
         * @summary `rBSpattern`.
         * @description
         *
         * Robbed-bit signalling pattern: packed 6 bits, `1` = robbed. Cyclic;
         * not aligned to network framing. Bit 0 is LSB when displayed (ITU-T
         * Rec. V.59 Cor.1 (07/2001) §6.2.3). Table 3/V.59. ITU-T Rec. V.59
         * (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly rBSpattern: OPTIONAL<RobBitPatt>,
        /**
         * @summary `digitalPadLoss`.
         * @description
         *
         * Estimated downstream digital attenuation, in dB or as a decimal
         * fraction (e.g. `3dB`, `0.5011`). IA5 `simpleText` (§6.2.1). Tag-ID
         * `56`. ITU-T Rec. V.59 (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly digitalPadLoss: OPTIONAL<V59String>,
        /**
         * @summary `codecLaw`.
         * @description
         *
         * From CP: `TRUE` = A-law, `FALSE` = µ-law. For a digital PCM modem
         * this is the local (downstream) codec; for an analogue PCM modem it is
         * the remote codec. Tag-ID `0907`. ITU-T Rec. V.59 (11/2000) §6.8.3.
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
    new $.ComponentSpec("modeV90", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iNFO0Tx", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iNFO0Rx", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iNFO1A", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iNFO1d", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mP", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("cP", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("cPt", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("jAsequence", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("jDsequence", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("v90TxLevel", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("txSymbolRate", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("rxSymbolRate", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("txCarrierFreq", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("rxCarrierFreq", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("txDataHistory", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("rxDataHistory", false, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("rxLevelEstimate", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("noiseEstimate", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("rxSignalQuality", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("nearEchoEstimate", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("farEchoEstimate", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("roundTripDelay", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("rBSpattern", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("digitalPadLoss", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("codecLaw", true, $.hasTag(_TagClass.context, 25))
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
    const _unrecognizedExtensionsList: _Element[] = [];
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
    if (!_cached_encoder_for_V90Diag_Item) { _cached_encoder_for_V90Diag_Item = function (value: V90Diag_Item): _Element {
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
