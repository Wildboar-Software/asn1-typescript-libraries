/* eslint-disable */
import {
    OPTIONAL,
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

/**
 * @summary V34Diag_Item
 * @description
 *
 * V.34 duplex INFO/MP sequences, precoder coefficients, rates, and line
 * estimates. ITU-T Rec. V.59 (11/2000) §6.8.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V34Diag-Item ::= SEQUENCE {modeV34           Capabilities,
 *               iNFO0Tx           V59String,
 *               iNFO0Rx           V59String,
 *               iNFO1c            V59String,
 *               iNFO1a            V59String,
 *               mPTx              V59String,
 *               mPRx              V59String,
 *               precodeCoeffTx    V59String OPTIONAL,
 *               precodeCoeffRx    V59String OPTIONAL,
 *               v34TxLevel        TxPowerLevel,
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
 *               ...}
 * ```
 * 
 * @class
 */
export
class V34Diag_Item {
    constructor (
        /**
         * @summary `modeV34`.
         * @description
         *
         * V.34 duplex operating-mode capability. Table 5/V.59:
         * `notSupported`(0), `default`(1) preferred, `enabled`(2),
         * `disabled`(3) supported but off. Tag-ID `0C00`. ITU-T Rec. V.59
         * (11/2000) §6.8.6.
         * @public
         * @readonly
         */
        readonly modeV34: Capabilities,
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
         * @summary `iNFO1c`.
         * @description
         *
         * INFO1c sequence transmitted or received. Hex `dataSequence` (§6.2.2):
         * first bit in time is the LSB of each hex word; omit start/stop/fill
         * bits and CRCs; `;` delimits N-bit words. Tag-ID `0C01`. ITU-T Rec.
         * V.59 (11/2000) §6.8.6.
         * @public
         * @readonly
         */
        readonly iNFO1c: V59String,
        /**
         * @summary `iNFO1a`.
         * @description
         *
         * INFO1a sequence transmitted or received. Hex `dataSequence` (§6.2.2):
         * first bit in time is the LSB of each hex word; omit start/stop/fill
         * bits and CRCs; `;` delimits N-bit words. Tag-ID `0C02`. ITU-T Rec.
         * V.59 (11/2000) §6.8.6.
         * @public
         * @readonly
         */
        readonly iNFO1a: V59String,
        /**
         * @summary `mPTx`.
         * @description
         *
         * MP sequence transmitted. Type-1 precoder coefficients are not
         * included. Hex `dataSequence` (§6.2.2): first bit in time is the LSB
         * of each hex word; omit start/stop/fill bits and CRCs; `;` delimits
         * N-bit words. Tag-ID `0C03`. ITU-T Rec. V.59 (11/2000) §6.8.6.
         * @public
         * @readonly
         */
        readonly mPTx: V59String,
        /**
         * @summary `mPRx`.
         * @description
         *
         * MP sequence received. Type-1 precoder coefficients are not included.
         * Hex `dataSequence` (§6.2.2): first bit in time is the LSB of each hex
         * word; omit start/stop/fill bits and CRCs; `;` delimits N-bit words.
         * Tag-ID `0C04`. ITU-T Rec. V.59 (11/2000) §6.8.6.
         * @public
         * @readonly
         */
        readonly mPRx: V59String,
        /**
         * @summary `precodeCoeffTx`.
         * @description
         *
         * Transmitter precoder coefficients, taken out of a type-1 MP sequence
         * as real/imaginary hex pairs: `h(1);h(2);h(3)` with commas inside each
         * pair. 16-bit coefficients. Hex `dataSequence` (§6.2.2): first bit in
         * time is the LSB of each hex word; omit start/stop/fill bits and CRCs;
         * `;` delimits N-bit words. Tag-ID `43`. ITU-T Rec. V.59 (11/2000)
         * §6.4.
         * @public
         * @readonly
         */
        readonly precodeCoeffTx: OPTIONAL<V59String>,
        /**
         * @summary `precodeCoeffRx`.
         * @description
         *
         * Receiver precoder coefficients; same format as `precodeCoeffTx`.
         * Tag-ID `44`. ITU-T Rec. V.59 (11/2000) §6.4.
         * @public
         * @readonly
         */
        readonly precodeCoeffRx: OPTIONAL<V59String>,
        /**
         * @summary `v34TxLevel`.
         * @description
         *
         * V.34 transmit power (`TxPowerLevel`). ITU-T Rec. V.59 (11/2000)
         * §6.8.6.
         * @public
         * @readonly
         */
        readonly v34TxLevel: TxPowerLevel,
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
    new $.ComponentSpec("modeV34", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iNFO0Tx", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iNFO0Rx", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iNFO1c", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iNFO1a", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mPTx", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("mPRx", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("precodeCoeffTx", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("precodeCoeffRx", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("v34TxLevel", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("txSymbolRate", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("rxSymbolRate", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("txCarrierFreq", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("rxCarrierFreq", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("txDataHistory", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("rxDataHistory", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("rxLevelEstimate", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("noiseEstimate", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("rxSignalQuality", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("nearEchoEstimate", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("farEchoEstimate", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("roundTripDelay", true, $.hasTag(_TagClass.context, 21))
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
    const _unrecognizedExtensionsList: _Element[] = [];
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
    if (!_cached_encoder_for_V34Diag_Item) { _cached_encoder_for_V34Diag_Item = function (value: V34Diag_Item): _Element {
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
