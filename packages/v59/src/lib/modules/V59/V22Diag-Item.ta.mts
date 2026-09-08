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


/**
 * @summary V22Diag_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V22Diag-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class V22Diag_Item {
    constructor (
        /**
         * @summary `modeV22B`.
         * @public
         * @readonly
         */
        readonly modeV22B: Capabilities,
        /**
         * @summary `dataRateHistory`.
         * @public
         * @readonly
         */
        readonly dataRateHistory: V59String,
        /**
         * @summary `v22TxLevel`.
         * @public
         * @readonly
         */
        readonly v22TxLevel: TxPowerLevel,
        /**
         * @summary `v22RateSeq`.
         * @public
         * @readonly
         */
        readonly v22RateSeq: V59String,
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
    new $.ComponentSpec("modeV22B", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("dataRateHistory", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("v22TxLevel", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("v22RateSeq", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("rxLevelEstimate", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("noiseEstimate", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("rxSignalQuality", true, $.hasTag(_TagClass.context, 6), undefined, undefined)
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
    let _unrecognizedExtensionsList: _Element[] = [];
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
    if (!_cached_encoder_for_V22Diag_Item) { _cached_encoder_for_V22Diag_Item = function (value: V22Diag_Item, elGetter: $.ASN1Encoder<V22Diag_Item>): _Element {
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
