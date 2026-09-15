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

import { V34HdxDiag_Item_cCrate, _enum_for_V34HdxDiag_Item_cCrate, _decode_V34HdxDiag_Item_cCrate, _encode_V34HdxDiag_Item_cCrate } from "../V59/V34HdxDiag-Item-cCrate.ta.mjs";

/**
 * @summary V34HdxDiag_Item
 * @description
 *
 * V.34 HDX INFO/MP, precoder, rates, and control-channel data rate. ITU-T Rec.
 * V.59 (11/2000) §6.8.11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V34HdxDiag-Item ::= SEQUENCE {modeV34H         Capabilities,
 *               iNFO0Tx          V59String,
 *               iNFO0Rx          V59String,
 *               iNFOh            V59String,
 *               mPh              V59String,
 *               precodeCoeffTx   V59String OPTIONAL,
 *               v34TxLevel       TxPowerLevel,
 *               symbolRate       V59String OPTIONAL,
 *               carrierFreq      V59String OPTIONAL,
 *               dataHistory      V59String OPTIONAL,
 *               rxLevelEstimate  V59String OPTIONAL,
 *               noiseEstimate    V59String OPTIONAL,
 *               rxSignalQuality  V59String OPTIONAL,
 *               cCrate
 *                 ENUMERATED {t12R12(0), t24R24(1), t12R24(2), t24R12(3)},
 *               ...}
 * ```
 * 
 * @class
 */
export
class V34HdxDiag_Item {
    constructor (
        /**
         * @summary `modeV34H`.
         * @description
         *
         * V.34 half-duplex operating-mode capability. Table 5/V.59:
         * `notSupported`(0), `default`(1) preferred, `enabled`(2),
         * `disabled`(3) supported but off. Tag-ID `1500`. ITU-T Rec. V.59
         * (11/2000) §6.8.11.
         * @public
         * @readonly
         */
        readonly modeV34H: Capabilities,
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
         * @summary `iNFOh`.
         * @description
         *
         * INFO sequence transmitted by the source or received by the recipient.
         * Hex `dataSequence` (§6.2.2): first bit in time is the LSB of each hex
         * word; omit start/stop/fill bits and CRCs; `;` delimits N-bit words.
         * Tag-ID `1501`. ITU-T Rec. V.59 (11/2000) §6.8.11.
         * @public
         * @readonly
         */
        readonly iNFOh: V59String,
        /**
         * @summary `mPh`.
         * @description
         *
         * MP sequence transmitted by the source or received by the recipient.
         * Type-1 precoder coefficients are not included. Hex `dataSequence`
         * (§6.2.2): first bit in time is the LSB of each hex word; omit
         * start/stop/fill bits and CRCs; `;` delimits N-bit words. Tag-ID
         * `1502`. ITU-T Rec. V.59 (11/2000) §6.8.11.
         * @public
         * @readonly
         */
        readonly mPh: V59String,
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
         * @summary `v34TxLevel`.
         * @description
         *
         * V.34 HDX transmit power (`TxPowerLevel`). ITU-T Rec. V.59 (11/2000)
         * §6.8.11.
         * @public
         * @readonly
         */
        readonly v34TxLevel: TxPowerLevel,
        /**
         * @summary `symbolRate`.
         * @description
         *
         * Symbol rate used (Tag-ID `1548`). Encoded as `V59String` in Annex A.
         * ITU-T Rec. V.59 (11/2000) §6.8.11.
         * @public
         * @readonly
         */
        readonly symbolRate: OPTIONAL<V59String>,
        /**
         * @summary `carrierFreq`.
         * @description
         *
         * Carrier frequency used (Tag-ID `154A`). Encoded as `V59String` in
         * Annex A. ITU-T Rec. V.59 (11/2000) §6.8.11.
         * @public
         * @readonly
         */
        readonly carrierFreq: OPTIONAL<V59String>,
        /**
         * @summary `dataHistory`.
         * @description
         *
         * Data-rate history (Tag-ID `154C`). IA5 `simpleText` (§6.2.1). History
         * lists oldest event first, most recent last (§6.2.6). ITU-T Rec. V.59
         * (11/2000) §6.8.11.
         * @public
         * @readonly
         */
        readonly dataHistory: OPTIONAL<V59String>,
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
         * @summary `cCrate`.
         * @description
         *
         * Control-channel data rate (Table 14/V.59). Tag-ID `1503`. ITU-T Rec.
         * V.59 (11/2000) §6.8.11.
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
    new $.ComponentSpec("modeV34H", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iNFO0Tx", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iNFO0Rx", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iNFOh", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mPh", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("precodeCoeffTx", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("v34TxLevel", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("symbolRate", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("carrierFreq", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("dataHistory", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("rxLevelEstimate", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("noiseEstimate", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("rxSignalQuality", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("cCrate", false, $.hasTag(_TagClass.context, 13))
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
    const _unrecognizedExtensionsList: _Element[] = [];
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
    if (!_cached_encoder_for_V34HdxDiag_Item) { _cached_encoder_for_V34HdxDiag_Item = function (value: V34HdxDiag_Item): _Element {
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
