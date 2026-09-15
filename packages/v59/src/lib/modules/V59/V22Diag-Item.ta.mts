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

/**
 * @summary V22Diag_Item
 * @description
 *
 * V.22/V.22 bis data-rate history, two-bit rate sequence, and line estimates.
 * ITU-T Rec. V.59 (11/2000) §6.8.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V22Diag-Item ::= SEQUENCE {modeV22B         Capabilities,
 *               dataRateHistory  V59String,
 *               v22TxLevel       TxPowerLevel,
 *               v22RateSeq       V59String,
 *               rxLevelEstimate  V59String OPTIONAL,
 *               noiseEstimate    V59String OPTIONAL,
 *               rxSignalQuality  V59String OPTIONAL,
 *               ...}
 * ```
 * 
 * @class
 */
export
class V22Diag_Item {
    constructor (
        /**
         * @summary `modeV22B`.
         * @description
         *
         * V.22 or V.22 bis operating-mode capability. Table 5/V.59:
         * `notSupported`(0), `default`(1) preferred, `enabled`(2),
         * `disabled`(3) supported but off. Tag-ID `0E00`. ITU-T Rec. V.59
         * (11/2000) §6.8.8.
         * @public
         * @readonly
         */
        readonly modeV22B: Capabilities,
        /**
         * @summary `dataRateHistory`.
         * @description
         *
         * Data-rate history (uses common Tag-ID `4C`). IA5 `simpleText`
         * (§6.2.1). History lists oldest event first, most recent last
         * (§6.2.6). ITU-T Rec. V.59 (11/2000) §6.4, §6.8.8.
         * @public
         * @readonly
         */
        readonly dataRateHistory: V59String,
        /**
         * @summary `v22TxLevel`.
         * @description
         *
         * V.22 transmit power (`TxPowerLevel`). ITU-T Rec. V.59 (11/2000)
         * §6.8.8.
         * @public
         * @readonly
         */
        readonly v22TxLevel: TxPowerLevel,
        /**
         * @summary `v22RateSeq`.
         * @description
         *
         * Result of the two-bit V.22 bis rate sequence. Hex `dataSequence`
         * (§6.2.2): first bit in time is the LSB of each hex word; omit
         * start/stop/fill bits and CRCs; `;` delimits N-bit words. Tag-ID
         * `0E01`. ITU-T Rec. V.59 (11/2000) §6.8.8.
         * @public
         * @readonly
         */
        readonly v22RateSeq: V59String,
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
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a V22Diag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `V22Diag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V22Diag_Item`.
     * @returns {V22Diag_Item}
     */
    public static _from_object (_o: { [_K in keyof (V22Diag_Item)]: (V22Diag_Item)[_K] }): V22Diag_Item {
        return new V22Diag_Item(_o.modeV22B, _o.dataRateHistory, _o.v22TxLevel, _o.v22RateSeq, _o.rxLevelEstimate, _o.noiseEstimate, _o.rxSignalQuality, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of V22Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V22Diag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("modeV22B", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dataRateHistory", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("v22TxLevel", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("v22RateSeq", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("rxLevelEstimate", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("noiseEstimate", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rxSignalQuality", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of V22Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V22Diag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V22Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V22Diag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V22Diag_Item: $.ASN1Decoder<V22Diag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V22Diag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V22Diag_Item (el: _Element): V22Diag_Item {
    if (!_cached_decoder_for_V22Diag_Item) { _cached_decoder_for_V22Diag_Item = function (el: _Element): V22Diag_Item {
    let modeV22B!: Capabilities;
    let dataRateHistory!: V59String;
    let v22TxLevel!: TxPowerLevel;
    let v22RateSeq!: V59String;
    let rxLevelEstimate: OPTIONAL<V59String>;
    let noiseEstimate: OPTIONAL<V59String>;
    let rxSignalQuality: OPTIONAL<V59String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "modeV22B": (_el: _Element): void => { modeV22B = _decode_Capabilities(_el); },
        "dataRateHistory": (_el: _Element): void => { dataRateHistory = _decode_V59String(_el); },
        "v22TxLevel": (_el: _Element): void => { v22TxLevel = _decode_TxPowerLevel(_el); },
        "v22RateSeq": (_el: _Element): void => { v22RateSeq = _decode_V59String(_el); },
        "rxLevelEstimate": (_el: _Element): void => { rxLevelEstimate = _decode_V59String(_el); },
        "noiseEstimate": (_el: _Element): void => { noiseEstimate = _decode_V59String(_el); },
        "rxSignalQuality": (_el: _Element): void => { rxSignalQuality = _decode_V59String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_V22Diag_Item,
        _extension_additions_list_spec_for_V22Diag_Item,
        _root_component_type_list_2_spec_for_V22Diag_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new V22Diag_Item(
        modeV22B,
        dataRateHistory,
        v22TxLevel,
        v22RateSeq,
        rxLevelEstimate,
        noiseEstimate,
        rxSignalQuality,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_V22Diag_Item(el);
}

let _cached_encoder_for_V22Diag_Item: $.ASN1Encoder<V22Diag_Item> | null = null;

/**
 * @summary Encodes a(n) V22Diag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V22Diag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_V22Diag_Item (value: V22Diag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V22Diag_Item) { _cached_encoder_for_V22Diag_Item = function (value: V22Diag_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Capabilities(value.modeV22B, $.BER),
            /* REQUIRED   */ _encode_V59String(value.dataRateHistory, $.BER),
            /* REQUIRED   */ _encode_TxPowerLevel(value.v22TxLevel, $.BER),
            /* REQUIRED   */ _encode_V59String(value.v22RateSeq, $.BER),
            /* IF_ABSENT  */ ((value.rxLevelEstimate === undefined) ? undefined : _encode_V59String(value.rxLevelEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.noiseEstimate === undefined) ? undefined : _encode_V59String(value.noiseEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.rxSignalQuality === undefined) ? undefined : _encode_V59String(value.rxSignalQuality, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V22Diag_Item(value, elGetter);
}

/* eslint-enable */
