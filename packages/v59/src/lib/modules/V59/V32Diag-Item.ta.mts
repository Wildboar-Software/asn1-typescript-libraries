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

import { TxPowerLevel, _decode_TxPowerLevel, _encode_TxPowerLevel } from "../V59/TxPowerLevel.ta.mjs";

import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";

/**
 * @summary V32Diag_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V32Diag-Item ::= SEQUENCE {modeV32B          Capabilities,
 *               v32TxLevel        TxPowerLevel,
 *               v32txRateSeq      V59String,
 *               v32rxRateSeq      V59String,
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
class V32Diag_Item {
    constructor (
        /**
         * @summary `modeV32B`.
         * @public
         * @readonly
         */
        readonly modeV32B: Capabilities,
        /**
         * @summary `v32TxLevel`.
         * @public
         * @readonly
         */
        readonly v32TxLevel: TxPowerLevel,
        /**
         * @summary `v32txRateSeq`.
         * @public
         * @readonly
         */
        readonly v32txRateSeq: V59String,
        /**
         * @summary `v32rxRateSeq`.
         * @public
         * @readonly
         */
        readonly v32rxRateSeq: V59String,
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
     * @summary Restructures an object into a V32Diag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `V32Diag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V32Diag_Item`.
     * @returns {V32Diag_Item}
     */
    public static _from_object (_o: { [_K in keyof (V32Diag_Item)]: (V32Diag_Item)[_K] }): V32Diag_Item {
        return new V32Diag_Item(_o.modeV32B, _o.v32TxLevel, _o.v32txRateSeq, _o.v32rxRateSeq, _o.txDataHistory, _o.rxDataHistory, _o.rxLevelEstimate, _o.noiseEstimate, _o.rxSignalQuality, _o.nearEchoEstimate, _o.farEchoEstimate, _o.roundTripDelay, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of V32Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V32Diag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("modeV32B", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("v32TxLevel", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("v32txRateSeq", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("v32rxRateSeq", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("txDataHistory", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("rxDataHistory", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rxLevelEstimate", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("noiseEstimate", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("rxSignalQuality", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("nearEchoEstimate", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("farEchoEstimate", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("roundTripDelay", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of V32Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V32Diag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V32Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V32Diag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V32Diag_Item: $.ASN1Decoder<V32Diag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V32Diag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V32Diag_Item (el: _Element): V32Diag_Item {
    if (!_cached_decoder_for_V32Diag_Item) { _cached_decoder_for_V32Diag_Item = function (el: _Element): V32Diag_Item {
    let modeV32B!: Capabilities;
    let v32TxLevel!: TxPowerLevel;
    let v32txRateSeq!: V59String;
    let v32rxRateSeq!: V59String;
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
        "modeV32B": (_el: _Element): void => { modeV32B = _decode_Capabilities(_el); },
        "v32TxLevel": (_el: _Element): void => { v32TxLevel = _decode_TxPowerLevel(_el); },
        "v32txRateSeq": (_el: _Element): void => { v32txRateSeq = _decode_V59String(_el); },
        "v32rxRateSeq": (_el: _Element): void => { v32rxRateSeq = _decode_V59String(_el); },
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
        _root_component_type_list_1_spec_for_V32Diag_Item,
        _extension_additions_list_spec_for_V32Diag_Item,
        _root_component_type_list_2_spec_for_V32Diag_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new V32Diag_Item(
        modeV32B,
        v32TxLevel,
        v32txRateSeq,
        v32rxRateSeq,
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
    return _cached_decoder_for_V32Diag_Item(el);
}

let _cached_encoder_for_V32Diag_Item: $.ASN1Encoder<V32Diag_Item> | null = null;

/**
 * @summary Encodes a(n) V32Diag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V32Diag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_V32Diag_Item (value: V32Diag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V32Diag_Item) { _cached_encoder_for_V32Diag_Item = function (value: V32Diag_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Capabilities(value.modeV32B, $.BER),
            /* REQUIRED   */ _encode_TxPowerLevel(value.v32TxLevel, $.BER),
            /* REQUIRED   */ _encode_V59String(value.v32txRateSeq, $.BER),
            /* REQUIRED   */ _encode_V59String(value.v32rxRateSeq, $.BER),
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
    return _cached_encoder_for_V32Diag_Item(value, elGetter);
}

/* eslint-enable */
