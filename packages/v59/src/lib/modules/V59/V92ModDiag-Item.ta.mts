/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError, ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Capabilities, _decode_Capabilities, _encode_Capabilities } from "../V59/Capabilities.ta.mjs";

import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";

import { TxPowerLevel, _decode_TxPowerLevel, _encode_TxPowerLevel } from "../V59/TxPowerLevel.ta.mjs";

import { SymbolRate, _decode_SymbolRate, _encode_SymbolRate } from "../V59/SymbolRate.ta.mjs";

import { RobBitPatt, _decode_RobBitPatt, _encode_RobBitPatt } from "../V59/RobBitPatt.ta.mjs";

import { V92ModDiag_Item_lastMOHaction, _enum_for_V92ModDiag_Item_lastMOHaction, _decode_V92ModDiag_Item_lastMOHaction, _encode_V92ModDiag_Item_lastMOHaction } from "../V59/V92ModDiag-Item-lastMOHaction.ta.mjs";

/**
 * @summary V92ModDiag_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V92ModDiag-Item ::= SEQUENCE {modeV92           Capabilities,
 *               iNFO0d            V59String,
 *               iNFO0a            V59String,
 *               iNFO1d            V59String,
 *               iNFO1a-US         V59String,
 *               iNFO1a-SP2        V59String,
 *               jA                V59String,
 *               jD                V59String,
 *               jDP               V59String,
 *               cP                V59String,
 *               v92TxLevel        TxPowerLevel,
 *               v92SymbolRate     SymbolRate OPTIONAL,
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
 *               localCodecLaw     BOOLEAN OPTIONAL,
 *               remoteCodecLaw    BOOLEAN OPTIONAL,
 *               sP1Enable         BOOLEAN,
 *               lastCallSP1       BOOLEAN,
 *               qC1a              IA5String(SIZE (1..10)),
 *               qC1d              IA5String(SIZE (1..10)),
 *               qC2a              IA5String(SIZE (1..2)),
 *               qC2d              IA5String(SIZE (1..2)),
 *               qCA1a             IA5String(SIZE (1..10)),
 *               qCA1d             IA5String(SIZE (1..10)),
 *               qCA2a             IA5String(SIZE (1..2)),
 *               qCA2d             IA5String(SIZE (1..2)),
 *               cWDEnable         BOOLEAN,
 *               mOHEnable         BOOLEAN,
 *               lastMOHaction
 *                 ENUMERATED {mohaccepted(0), mohdeclined(1), mohdenied(2),
 *                             mohclrdn(3), ...
 *                             },
 *               mohTimeout        V59String,
 *               lastMOHduration   V59String,
 *               mHreq             IA5String(SIZE (1..5)),
 *               mHack             IA5String(SIZE (1..5)),
 *               mHnak             IA5String(SIZE (1..5)),
 *               mHcld             IA5String(SIZE (1..5)),
 *               mHcda             IA5String(SIZE (1..5)),
 *               mHfrr             IA5String(SIZE (1..5)),
 *               ...}
 * ```
 * 
 * @class
 */
export
class V92ModDiag_Item {
    constructor (
        /**
         * @summary `modeV92`.
         * @public
         * @readonly
         */
        readonly modeV92: Capabilities,
        /**
         * @summary `iNFO0d`.
         * @public
         * @readonly
         */
        readonly iNFO0d: V59String,
        /**
         * @summary `iNFO0a`.
         * @public
         * @readonly
         */
        readonly iNFO0a: V59String,
        /**
         * @summary `iNFO1d`.
         * @public
         * @readonly
         */
        readonly iNFO1d: V59String,
        /**
         * @summary `iNFO1a_US`.
         * @public
         * @readonly
         */
        readonly iNFO1a_US: V59String,
        /**
         * @summary `iNFO1a_SP2`.
         * @public
         * @readonly
         */
        readonly iNFO1a_SP2: V59String,
        /**
         * @summary `jA`.
         * @public
         * @readonly
         */
        readonly jA: V59String,
        /**
         * @summary `jD`.
         * @public
         * @readonly
         */
        readonly jD: V59String,
        /**
         * @summary `jDP`.
         * @public
         * @readonly
         */
        readonly jDP: V59String,
        /**
         * @summary `cP`.
         * @public
         * @readonly
         */
        readonly cP: V59String,
        /**
         * @summary `v92TxLevel`.
         * @public
         * @readonly
         */
        readonly v92TxLevel: TxPowerLevel,
        /**
         * @summary `v92SymbolRate`.
         * @public
         * @readonly
         */
        readonly v92SymbolRate: OPTIONAL<SymbolRate>,
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
         * @summary `localCodecLaw`.
         * @public
         * @readonly
         */
        readonly localCodecLaw: OPTIONAL<BOOLEAN>,
        /**
         * @summary `remoteCodecLaw`.
         * @public
         * @readonly
         */
        readonly remoteCodecLaw: OPTIONAL<BOOLEAN>,
        /**
         * @summary `sP1Enable`.
         * @public
         * @readonly
         */
        readonly sP1Enable: BOOLEAN,
        /**
         * @summary `lastCallSP1`.
         * @public
         * @readonly
         */
        readonly lastCallSP1: BOOLEAN,
        /**
         * @summary `qC1a`.
         * @public
         * @readonly
         */
        readonly qC1a: IA5String,
        /**
         * @summary `qC1d`.
         * @public
         * @readonly
         */
        readonly qC1d: IA5String,
        /**
         * @summary `qC2a`.
         * @public
         * @readonly
         */
        readonly qC2a: IA5String,
        /**
         * @summary `qC2d`.
         * @public
         * @readonly
         */
        readonly qC2d: IA5String,
        /**
         * @summary `qCA1a`.
         * @public
         * @readonly
         */
        readonly qCA1a: IA5String,
        /**
         * @summary `qCA1d`.
         * @public
         * @readonly
         */
        readonly qCA1d: IA5String,
        /**
         * @summary `qCA2a`.
         * @public
         * @readonly
         */
        readonly qCA2a: IA5String,
        /**
         * @summary `qCA2d`.
         * @public
         * @readonly
         */
        readonly qCA2d: IA5String,
        /**
         * @summary `cWDEnable`.
         * @public
         * @readonly
         */
        readonly cWDEnable: BOOLEAN,
        /**
         * @summary `mOHEnable`.
         * @public
         * @readonly
         */
        readonly mOHEnable: BOOLEAN,
        /**
         * @summary `lastMOHaction`.
         * @public
         * @readonly
         */
        readonly lastMOHaction: V92ModDiag_Item_lastMOHaction,
        /**
         * @summary `mohTimeout`.
         * @public
         * @readonly
         */
        readonly mohTimeout: V59String,
        /**
         * @summary `lastMOHduration`.
         * @public
         * @readonly
         */
        readonly lastMOHduration: V59String,
        /**
         * @summary `mHreq`.
         * @public
         * @readonly
         */
        readonly mHreq: IA5String,
        /**
         * @summary `mHack`.
         * @public
         * @readonly
         */
        readonly mHack: IA5String,
        /**
         * @summary `mHnak`.
         * @public
         * @readonly
         */
        readonly mHnak: IA5String,
        /**
         * @summary `mHcld`.
         * @public
         * @readonly
         */
        readonly mHcld: IA5String,
        /**
         * @summary `mHcda`.
         * @public
         * @readonly
         */
        readonly mHcda: IA5String,
        /**
         * @summary `mHfrr`.
         * @public
         * @readonly
         */
        readonly mHfrr: IA5String,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        if (this.qC1a.length < 1 || this.qC1a.length > 10) {
                throw new ASN1SizeError("V92ModDiag_Item.qC1a violates SIZE constraint");
            }

        if (this.qC1d.length < 1 || this.qC1d.length > 10) {
                throw new ASN1SizeError("V92ModDiag_Item.qC1d violates SIZE constraint");
            }

        if (this.qC2a.length < 1 || this.qC2a.length > 2) {
                throw new ASN1SizeError("V92ModDiag_Item.qC2a violates SIZE constraint");
            }

        if (this.qC2d.length < 1 || this.qC2d.length > 2) {
                throw new ASN1SizeError("V92ModDiag_Item.qC2d violates SIZE constraint");
            }

        if (this.qCA1a.length < 1 || this.qCA1a.length > 10) {
                throw new ASN1SizeError("V92ModDiag_Item.qCA1a violates SIZE constraint");
            }

        if (this.qCA1d.length < 1 || this.qCA1d.length > 10) {
                throw new ASN1SizeError("V92ModDiag_Item.qCA1d violates SIZE constraint");
            }

        if (this.qCA2a.length < 1 || this.qCA2a.length > 2) {
                throw new ASN1SizeError("V92ModDiag_Item.qCA2a violates SIZE constraint");
            }

        if (this.qCA2d.length < 1 || this.qCA2d.length > 2) {
                throw new ASN1SizeError("V92ModDiag_Item.qCA2d violates SIZE constraint");
            }

        if (this.mHreq.length < 1 || this.mHreq.length > 5) {
                throw new ASN1SizeError("V92ModDiag_Item.mHreq violates SIZE constraint");
            }

        if (this.mHack.length < 1 || this.mHack.length > 5) {
                throw new ASN1SizeError("V92ModDiag_Item.mHack violates SIZE constraint");
            }

        if (this.mHnak.length < 1 || this.mHnak.length > 5) {
                throw new ASN1SizeError("V92ModDiag_Item.mHnak violates SIZE constraint");
            }

        if (this.mHcld.length < 1 || this.mHcld.length > 5) {
                throw new ASN1SizeError("V92ModDiag_Item.mHcld violates SIZE constraint");
            }

        if (this.mHcda.length < 1 || this.mHcda.length > 5) {
                throw new ASN1SizeError("V92ModDiag_Item.mHcda violates SIZE constraint");
            }

        if (this.mHfrr.length < 1 || this.mHfrr.length > 5) {
                throw new ASN1SizeError("V92ModDiag_Item.mHfrr violates SIZE constraint");
            }}

    /**
     * @summary Restructures an object into a V92ModDiag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `V92ModDiag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V92ModDiag_Item`.
     * @returns {V92ModDiag_Item}
     */
    public static _from_object (_o: { [_K in keyof (V92ModDiag_Item)]: (V92ModDiag_Item)[_K] }): V92ModDiag_Item {
        return new V92ModDiag_Item(_o.modeV92, _o.iNFO0d, _o.iNFO0a, _o.iNFO1d, _o.iNFO1a_US, _o.iNFO1a_SP2, _o.jA, _o.jD, _o.jDP, _o.cP, _o.v92TxLevel, _o.v92SymbolRate, _o.txDataHistory, _o.rxDataHistory, _o.rxLevelEstimate, _o.noiseEstimate, _o.rxSignalQuality, _o.nearEchoEstimate, _o.farEchoEstimate, _o.roundTripDelay, _o.rBSpattern, _o.digitalPadLoss, _o.localCodecLaw, _o.remoteCodecLaw, _o.sP1Enable, _o.lastCallSP1, _o.qC1a, _o.qC1d, _o.qC2a, _o.qC2d, _o.qCA1a, _o.qCA1d, _o.qCA2a, _o.qCA2d, _o.cWDEnable, _o.mOHEnable, _o.lastMOHaction, _o.mohTimeout, _o.lastMOHduration, _o.mHreq, _o.mHack, _o.mHnak, _o.mHcld, _o.mHcda, _o.mHfrr, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `lastMOHaction`
         * @public
         * @static
         */

    public static _enum_for_lastMOHaction = _enum_for_V92ModDiag_Item_lastMOHaction;
}

/**
 * @summary The Leading Root Component Types of V92ModDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V92ModDiag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("modeV92", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iNFO0d", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iNFO0a", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iNFO1d", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iNFO1a-US", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("iNFO1a-SP2", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("jA", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("jD", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("jDP", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("cP", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("v92TxLevel", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("v92SymbolRate", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("txDataHistory", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("rxDataHistory", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("rxLevelEstimate", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("noiseEstimate", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("rxSignalQuality", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("nearEchoEstimate", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("farEchoEstimate", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("roundTripDelay", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("rBSpattern", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("digitalPadLoss", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("localCodecLaw", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("remoteCodecLaw", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("sP1Enable", false, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("lastCallSP1", false, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("qC1a", false, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("qC1d", false, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("qC2a", false, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("qC2d", false, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("qCA1a", false, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("qCA1d", false, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("qCA2a", false, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("qCA2d", false, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("cWDEnable", false, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("mOHEnable", false, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("lastMOHaction", false, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("mohTimeout", false, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("lastMOHduration", false, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("mHreq", false, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("mHack", false, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("mHnak", false, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("mHcld", false, $.hasTag(_TagClass.context, 42)),
    new $.ComponentSpec("mHcda", false, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("mHfrr", false, $.hasTag(_TagClass.context, 44))
];

/**
 * @summary The Trailing Root Component Types of V92ModDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V92ModDiag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V92ModDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V92ModDiag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V92ModDiag_Item: $.ASN1Decoder<V92ModDiag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V92ModDiag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V92ModDiag_Item (el: _Element): V92ModDiag_Item {
    if (!_cached_decoder_for_V92ModDiag_Item) { _cached_decoder_for_V92ModDiag_Item = function (el: _Element): V92ModDiag_Item {
    let modeV92!: Capabilities;
    let iNFO0d!: V59String;
    let iNFO0a!: V59String;
    let iNFO1d!: V59String;
    let iNFO1a_US!: V59String;
    let iNFO1a_SP2!: V59String;
    let jA!: V59String;
    let jD!: V59String;
    let jDP!: V59String;
    let cP!: V59String;
    let v92TxLevel!: TxPowerLevel;
    let v92SymbolRate: OPTIONAL<SymbolRate>;
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
    let localCodecLaw: OPTIONAL<BOOLEAN>;
    let remoteCodecLaw: OPTIONAL<BOOLEAN>;
    let sP1Enable!: BOOLEAN;
    let lastCallSP1!: BOOLEAN;
    let qC1a!: IA5String;
    let qC1d!: IA5String;
    let qC2a!: IA5String;
    let qC2d!: IA5String;
    let qCA1a!: IA5String;
    let qCA1d!: IA5String;
    let qCA2a!: IA5String;
    let qCA2d!: IA5String;
    let cWDEnable!: BOOLEAN;
    let mOHEnable!: BOOLEAN;
    let lastMOHaction!: V92ModDiag_Item_lastMOHaction;
    let mohTimeout!: V59String;
    let lastMOHduration!: V59String;
    let mHreq!: IA5String;
    let mHack!: IA5String;
    let mHnak!: IA5String;
    let mHcld!: IA5String;
    let mHcda!: IA5String;
    let mHfrr!: IA5String;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "modeV92": (_el: _Element): void => { modeV92 = _decode_Capabilities(_el); },
        "iNFO0d": (_el: _Element): void => { iNFO0d = _decode_V59String(_el); },
        "iNFO0a": (_el: _Element): void => { iNFO0a = _decode_V59String(_el); },
        "iNFO1d": (_el: _Element): void => { iNFO1d = _decode_V59String(_el); },
        "iNFO1a-US": (_el: _Element): void => { iNFO1a_US = _decode_V59String(_el); },
        "iNFO1a-SP2": (_el: _Element): void => { iNFO1a_SP2 = _decode_V59String(_el); },
        "jA": (_el: _Element): void => { jA = _decode_V59String(_el); },
        "jD": (_el: _Element): void => { jD = _decode_V59String(_el); },
        "jDP": (_el: _Element): void => { jDP = _decode_V59String(_el); },
        "cP": (_el: _Element): void => { cP = _decode_V59String(_el); },
        "v92TxLevel": (_el: _Element): void => { v92TxLevel = _decode_TxPowerLevel(_el); },
        "v92SymbolRate": (_el: _Element): void => { v92SymbolRate = _decode_SymbolRate(_el); },
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
        "localCodecLaw": (_el: _Element): void => { localCodecLaw = $._decodeBoolean(_el); },
        "remoteCodecLaw": (_el: _Element): void => { remoteCodecLaw = $._decodeBoolean(_el); },
        "sP1Enable": (_el: _Element): void => { sP1Enable = $._decodeBoolean(_el); },
        "lastCallSP1": (_el: _Element): void => { lastCallSP1 = $._decodeBoolean(_el); },
        "qC1a": (_el: _Element): void => { qC1a = $._decodeIA5String(_el); },
        "qC1d": (_el: _Element): void => { qC1d = $._decodeIA5String(_el); },
        "qC2a": (_el: _Element): void => { qC2a = $._decodeIA5String(_el); },
        "qC2d": (_el: _Element): void => { qC2d = $._decodeIA5String(_el); },
        "qCA1a": (_el: _Element): void => { qCA1a = $._decodeIA5String(_el); },
        "qCA1d": (_el: _Element): void => { qCA1d = $._decodeIA5String(_el); },
        "qCA2a": (_el: _Element): void => { qCA2a = $._decodeIA5String(_el); },
        "qCA2d": (_el: _Element): void => { qCA2d = $._decodeIA5String(_el); },
        "cWDEnable": (_el: _Element): void => { cWDEnable = $._decodeBoolean(_el); },
        "mOHEnable": (_el: _Element): void => { mOHEnable = $._decodeBoolean(_el); },
        "lastMOHaction": (_el: _Element): void => { lastMOHaction = _decode_V92ModDiag_Item_lastMOHaction(_el); },
        "mohTimeout": (_el: _Element): void => { mohTimeout = _decode_V59String(_el); },
        "lastMOHduration": (_el: _Element): void => { lastMOHduration = _decode_V59String(_el); },
        "mHreq": (_el: _Element): void => { mHreq = $._decodeIA5String(_el); },
        "mHack": (_el: _Element): void => { mHack = $._decodeIA5String(_el); },
        "mHnak": (_el: _Element): void => { mHnak = $._decodeIA5String(_el); },
        "mHcld": (_el: _Element): void => { mHcld = $._decodeIA5String(_el); },
        "mHcda": (_el: _Element): void => { mHcda = $._decodeIA5String(_el); },
        "mHfrr": (_el: _Element): void => { mHfrr = $._decodeIA5String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_V92ModDiag_Item,
        _extension_additions_list_spec_for_V92ModDiag_Item,
        _root_component_type_list_2_spec_for_V92ModDiag_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new V92ModDiag_Item(
        modeV92,
        iNFO0d,
        iNFO0a,
        iNFO1d,
        iNFO1a_US,
        iNFO1a_SP2,
        jA,
        jD,
        jDP,
        cP,
        v92TxLevel,
        v92SymbolRate,
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
        localCodecLaw,
        remoteCodecLaw,
        sP1Enable,
        lastCallSP1,
        qC1a,
        qC1d,
        qC2a,
        qC2d,
        qCA1a,
        qCA1d,
        qCA2a,
        qCA2d,
        cWDEnable,
        mOHEnable,
        lastMOHaction,
        mohTimeout,
        lastMOHduration,
        mHreq,
        mHack,
        mHnak,
        mHcld,
        mHcda,
        mHfrr,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_V92ModDiag_Item(el);
}

let _cached_encoder_for_V92ModDiag_Item: $.ASN1Encoder<V92ModDiag_Item> | null = null;

/**
 * @summary Encodes a(n) V92ModDiag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V92ModDiag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_V92ModDiag_Item (value: V92ModDiag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V92ModDiag_Item) { _cached_encoder_for_V92ModDiag_Item = function (value: V92ModDiag_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Capabilities(value.modeV92, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFO0d, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFO0a, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFO1d, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFO1a_US, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFO1a_SP2, $.BER),
            /* REQUIRED   */ _encode_V59String(value.jA, $.BER),
            /* REQUIRED   */ _encode_V59String(value.jD, $.BER),
            /* REQUIRED   */ _encode_V59String(value.jDP, $.BER),
            /* REQUIRED   */ _encode_V59String(value.cP, $.BER),
            /* REQUIRED   */ _encode_TxPowerLevel(value.v92TxLevel, $.BER),
            /* IF_ABSENT  */ ((value.v92SymbolRate === undefined) ? undefined : _encode_SymbolRate(value.v92SymbolRate, $.BER)),
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
            /* IF_ABSENT  */ ((value.localCodecLaw === undefined) ? undefined : $._encodeBoolean(value.localCodecLaw, $.BER)),
            /* IF_ABSENT  */ ((value.remoteCodecLaw === undefined) ? undefined : $._encodeBoolean(value.remoteCodecLaw, $.BER)),
            /* REQUIRED   */ $._encodeBoolean(value.sP1Enable, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.lastCallSP1, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.qC1a, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.qC1d, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.qC2a, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.qC2d, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.qCA1a, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.qCA1d, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.qCA2a, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.qCA2d, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.cWDEnable, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.mOHEnable, $.BER),
            /* REQUIRED   */ _encode_V92ModDiag_Item_lastMOHaction(value.lastMOHaction, $.BER),
            /* REQUIRED   */ _encode_V59String(value.mohTimeout, $.BER),
            /* REQUIRED   */ _encode_V59String(value.lastMOHduration, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.mHreq, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.mHack, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.mHnak, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.mHcld, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.mHcda, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.mHfrr, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V92ModDiag_Item(value, elGetter);
}

/* eslint-enable */
