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
import { RobBitPatt, RobBitPatt_robBit0 /* IMPORTED_LONG_NAMED_BIT */, robBit0 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit1 /* IMPORTED_LONG_NAMED_BIT */, robBit1 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit2 /* IMPORTED_LONG_NAMED_BIT */, robBit2 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit3 /* IMPORTED_LONG_NAMED_BIT */, robBit3 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit4 /* IMPORTED_LONG_NAMED_BIT */, robBit4 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit5 /* IMPORTED_LONG_NAMED_BIT */, robBit5 /* IMPORTED_SHORT_NAMED_BIT */, _decode_RobBitPatt, _encode_RobBitPatt } from "../V59/RobBitPatt.ta.mjs";
// export { RobBitPatt, RobBitPatt_robBit0 /* IMPORTED_LONG_NAMED_BIT */, robBit0 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit1 /* IMPORTED_LONG_NAMED_BIT */, robBit1 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit2 /* IMPORTED_LONG_NAMED_BIT */, robBit2 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit3 /* IMPORTED_LONG_NAMED_BIT */, robBit3 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit4 /* IMPORTED_LONG_NAMED_BIT */, robBit4 /* IMPORTED_SHORT_NAMED_BIT */, RobBitPatt_robBit5 /* IMPORTED_LONG_NAMED_BIT */, robBit5 /* IMPORTED_SHORT_NAMED_BIT */, _decode_RobBitPatt, _encode_RobBitPatt } from "../V59/RobBitPatt.ta.mjs";


/**
 * @summary V91Diag_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V91Diag-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class V91Diag_Item {
    constructor (
        /**
         * @summary `modeV91`.
         * @public
         * @readonly
         */
        readonly modeV91: Capabilities,
        /**
         * @summary `iNFO0TX`.
         * @public
         * @readonly
         */
        readonly iNFO0TX: V59String,
        /**
         * @summary `iNFO0RX`.
         * @public
         * @readonly
         */
        readonly iNFO0RX: V59String,
        /**
         * @summary `cP`.
         * @public
         * @readonly
         */
        readonly cP: V59String,
        /**
         * @summary `controlChannel`.
         * @public
         * @readonly
         */
        readonly controlChannel: BOOLEAN,
        /**
         * @summary `v91TxPowerLevel`.
         * @public
         * @readonly
         */
        readonly v91TxPowerLevel: TxPowerLevel,
        /**
         * @summary `transparentMode`.
         * @public
         * @readonly
         */
        readonly transparentMode: BOOLEAN,
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
         * @summary `frameSlipsDetected`.
         * @public
         * @readonly
         */
        readonly frameSlipsDetected: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a V91Diag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `V91Diag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V91Diag_Item`.
     * @returns {V91Diag_Item}
     */
    public static _from_object (_o: { [_K in keyof (V91Diag_Item)]: (V91Diag_Item)[_K] }): V91Diag_Item {
        return new V91Diag_Item(_o.modeV91, _o.iNFO0TX, _o.iNFO0RX, _o.cP, _o.controlChannel, _o.v91TxPowerLevel, _o.transparentMode, _o.txDataHistory, _o.rxDataHistory, _o.noiseEstimate, _o.rxSignalQuality, _o.rBSpattern, _o.digitalPadLoss, _o.localCodecLaw, _o.remoteCodecLaw, _o.frameSlipsDetected, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of V91Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V91Diag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("modeV91", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("iNFO0TX", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("iNFO0RX", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("cP", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("controlChannel", false, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("v91TxPowerLevel", false, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("transparentMode", false, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("txDataHistory", false, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("rxDataHistory", false, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("noiseEstimate", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("rxSignalQuality", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("rBSpattern", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("digitalPadLoss", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("localCodecLaw", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("remoteCodecLaw", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("frameSlipsDetected", true, $.hasTag(_TagClass.context, 15), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of V91Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V91Diag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V91Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V91Diag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V91Diag_Item: $.ASN1Decoder<V91Diag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V91Diag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V91Diag_Item (el: _Element): V91Diag_Item {
    if (!_cached_decoder_for_V91Diag_Item) { _cached_decoder_for_V91Diag_Item = function (el: _Element): V91Diag_Item {
    let modeV91!: Capabilities;
    let iNFO0TX!: V59String;
    let iNFO0RX!: V59String;
    let cP!: V59String;
    let controlChannel!: BOOLEAN;
    let v91TxPowerLevel!: TxPowerLevel;
    let transparentMode!: BOOLEAN;
    let txDataHistory!: V59String;
    let rxDataHistory!: V59String;
    let noiseEstimate: OPTIONAL<V59String>;
    let rxSignalQuality: OPTIONAL<V59String>;
    let rBSpattern: OPTIONAL<RobBitPatt>;
    let digitalPadLoss: OPTIONAL<V59String>;
    let localCodecLaw: OPTIONAL<BOOLEAN>;
    let remoteCodecLaw: OPTIONAL<BOOLEAN>;
    let frameSlipsDetected: OPTIONAL<INTEGER>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "modeV91": (_el: _Element): void => { modeV91 = _decode_Capabilities(_el); },
        "iNFO0TX": (_el: _Element): void => { iNFO0TX = _decode_V59String(_el); },
        "iNFO0RX": (_el: _Element): void => { iNFO0RX = _decode_V59String(_el); },
        "cP": (_el: _Element): void => { cP = _decode_V59String(_el); },
        "controlChannel": (_el: _Element): void => { controlChannel = $._decodeBoolean(_el); },
        "v91TxPowerLevel": (_el: _Element): void => { v91TxPowerLevel = _decode_TxPowerLevel(_el); },
        "transparentMode": (_el: _Element): void => { transparentMode = $._decodeBoolean(_el); },
        "txDataHistory": (_el: _Element): void => { txDataHistory = _decode_V59String(_el); },
        "rxDataHistory": (_el: _Element): void => { rxDataHistory = _decode_V59String(_el); },
        "noiseEstimate": (_el: _Element): void => { noiseEstimate = _decode_V59String(_el); },
        "rxSignalQuality": (_el: _Element): void => { rxSignalQuality = _decode_V59String(_el); },
        "rBSpattern": (_el: _Element): void => { rBSpattern = _decode_RobBitPatt(_el); },
        "digitalPadLoss": (_el: _Element): void => { digitalPadLoss = _decode_V59String(_el); },
        "localCodecLaw": (_el: _Element): void => { localCodecLaw = $._decodeBoolean(_el); },
        "remoteCodecLaw": (_el: _Element): void => { remoteCodecLaw = $._decodeBoolean(_el); },
        "frameSlipsDetected": (_el: _Element): void => { frameSlipsDetected = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_V91Diag_Item,
        _extension_additions_list_spec_for_V91Diag_Item,
        _root_component_type_list_2_spec_for_V91Diag_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new V91Diag_Item(
        modeV91,
        iNFO0TX,
        iNFO0RX,
        cP,
        controlChannel,
        v91TxPowerLevel,
        transparentMode,
        txDataHistory,
        rxDataHistory,
        noiseEstimate,
        rxSignalQuality,
        rBSpattern,
        digitalPadLoss,
        localCodecLaw,
        remoteCodecLaw,
        frameSlipsDetected,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_V91Diag_Item(el);
}

let _cached_encoder_for_V91Diag_Item: $.ASN1Encoder<V91Diag_Item> | null = null;

/**
 * @summary Encodes a(n) V91Diag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V91Diag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_V91Diag_Item (value: V91Diag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V91Diag_Item) { _cached_encoder_for_V91Diag_Item = function (value: V91Diag_Item, elGetter: $.ASN1Encoder<V91Diag_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Capabilities(value.modeV91, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFO0TX, $.BER),
            /* REQUIRED   */ _encode_V59String(value.iNFO0RX, $.BER),
            /* REQUIRED   */ _encode_V59String(value.cP, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.controlChannel, $.BER),
            /* REQUIRED   */ _encode_TxPowerLevel(value.v91TxPowerLevel, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.transparentMode, $.BER),
            /* REQUIRED   */ _encode_V59String(value.txDataHistory, $.BER),
            /* REQUIRED   */ _encode_V59String(value.rxDataHistory, $.BER),
            /* IF_ABSENT  */ ((value.noiseEstimate === undefined) ? undefined : _encode_V59String(value.noiseEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.rxSignalQuality === undefined) ? undefined : _encode_V59String(value.rxSignalQuality, $.BER)),
            /* IF_ABSENT  */ ((value.rBSpattern === undefined) ? undefined : _encode_RobBitPatt(value.rBSpattern, $.BER)),
            /* IF_ABSENT  */ ((value.digitalPadLoss === undefined) ? undefined : _encode_V59String(value.digitalPadLoss, $.BER)),
            /* IF_ABSENT  */ ((value.localCodecLaw === undefined) ? undefined : $._encodeBoolean(value.localCodecLaw, $.BER)),
            /* IF_ABSENT  */ ((value.remoteCodecLaw === undefined) ? undefined : $._encodeBoolean(value.remoteCodecLaw, $.BER)),
            /* IF_ABSENT  */ ((value.frameSlipsDetected === undefined) ? undefined : $._encodeInteger(value.frameSlipsDetected, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V91Diag_Item(value, elGetter);
}


/* eslint-enable */
