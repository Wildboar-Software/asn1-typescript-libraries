/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError, ASN1OverflowError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Compression_Item_compressionNegotiationResult, _enum_for_Compression_Item_compressionNegotiationResult, _decode_Compression_Item_compressionNegotiationResult, _encode_Compression_Item_compressionNegotiationResult } from "../V59/Compression-Item-compressionNegotiationResult.ta.mjs";

import { Capabilities, _decode_Capabilities, _encode_Capabilities } from "../V59/Capabilities.ta.mjs";

import { Compression_Item_v42bisCompressionActive, _enum_for_Compression_Item_v42bisCompressionActive, _decode_Compression_Item_v42bisCompressionActive, _encode_Compression_Item_v42bisCompressionActive } from "../V59/Compression-Item-v42bisCompressionActive.ta.mjs";

import { Compression_Item_v44CompressionActive, _enum_for_Compression_Item_v44CompressionActive, _decode_Compression_Item_v44CompressionActive, _encode_Compression_Item_v44CompressionActive } from "../V59/Compression-Item-v44CompressionActive.ta.mjs";

/**
 * @summary Compression_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item ::= SEQUENCE {compressionNegotiationResult
 *                 ENUMERATED {none(0), v42bisOnly(1), v42bisBoth(2), v44Both(3),
 *                             v44Only(4), other(5)},
 *               modeV42B                      Capabilities,
 *               v42bisCompressionActive
 *                 ENUMERATED {none(0), initOnly(1), respOnly(2), both(3)},
 *               v42bisDictionarySize          INTEGER(512..65535) OPTIONAL,
 *               v42bisStringLength            INTEGER(6..250) OPTIONAL,
 *               modeV44                       Capabilities,
 *               v44CompressionActive
 *                 ENUMERATED {none(0), txOnly(1), rxOnly(2), both(3)},
 *               v44EncoderDictionarySize      INTEGER(256..65535) OPTIONAL,
 *               v44EncoderHistorySize         INTEGER(512..1677215) OPTIONAL,
 *               v44EncoderStringLength        INTEGER(32..255) OPTIONAL,
 *               v44DecoderDictionarySize      INTEGER(256..65535) OPTIONAL,
 *               v44DecoderHistorySize         INTEGER(512..1677215) OPTIONAL,
 *               v44DecoderStringLength        INTEGER(32..255) OPTIONAL,
 *               ...}
 * ```
 * 
 * @class
 */
export
class Compression_Item {
    constructor (
        /**
         * @summary `compressionNegotiationResult`.
         * @public
         * @readonly
         */
        readonly compressionNegotiationResult: Compression_Item_compressionNegotiationResult,
        /**
         * @summary `modeV42B`.
         * @public
         * @readonly
         */
        readonly modeV42B: Capabilities,
        /**
         * @summary `v42bisCompressionActive`.
         * @public
         * @readonly
         */
        readonly v42bisCompressionActive: Compression_Item_v42bisCompressionActive,
        /**
         * @summary `v42bisDictionarySize`.
         * @public
         * @readonly
         */
        readonly v42bisDictionarySize: OPTIONAL<INTEGER>,
        /**
         * @summary `v42bisStringLength`.
         * @public
         * @readonly
         */
        readonly v42bisStringLength: OPTIONAL<INTEGER>,
        /**
         * @summary `modeV44`.
         * @public
         * @readonly
         */
        readonly modeV44: Capabilities,
        /**
         * @summary `v44CompressionActive`.
         * @public
         * @readonly
         */
        readonly v44CompressionActive: Compression_Item_v44CompressionActive,
        /**
         * @summary `v44EncoderDictionarySize`.
         * @public
         * @readonly
         */
        readonly v44EncoderDictionarySize: OPTIONAL<INTEGER>,
        /**
         * @summary `v44EncoderHistorySize`.
         * @public
         * @readonly
         */
        readonly v44EncoderHistorySize: OPTIONAL<INTEGER>,
        /**
         * @summary `v44EncoderStringLength`.
         * @public
         * @readonly
         */
        readonly v44EncoderStringLength: OPTIONAL<INTEGER>,
        /**
         * @summary `v44DecoderDictionarySize`.
         * @public
         * @readonly
         */
        readonly v44DecoderDictionarySize: OPTIONAL<INTEGER>,
        /**
         * @summary `v44DecoderHistorySize`.
         * @public
         * @readonly
         */
        readonly v44DecoderHistorySize: OPTIONAL<INTEGER>,
        /**
         * @summary `v44DecoderStringLength`.
         * @public
         * @readonly
         */
        readonly v44DecoderStringLength: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        if (this.v42bisDictionarySize !== undefined) {
                const _n = typeof this.v42bisDictionarySize === "bigint" ? Number(this.v42bisDictionarySize) : this.v42bisDictionarySize;
                if (_n < 512 || _n > 65535) {
                    throw new ASN1OverflowError("Compression_Item.v42bisDictionarySize violates INTEGER range");
                }
            }

        if (this.v42bisStringLength !== undefined) {
                const _n = typeof this.v42bisStringLength === "bigint" ? Number(this.v42bisStringLength) : this.v42bisStringLength;
                if (_n < 6 || _n > 250) {
                    throw new ASN1OverflowError("Compression_Item.v42bisStringLength violates INTEGER range");
                }
            }

        if (this.v44EncoderDictionarySize !== undefined) {
                const _n = typeof this.v44EncoderDictionarySize === "bigint" ? Number(this.v44EncoderDictionarySize) : this.v44EncoderDictionarySize;
                if (_n < 256 || _n > 65535) {
                    throw new ASN1OverflowError("Compression_Item.v44EncoderDictionarySize violates INTEGER range");
                }
            }

        if (this.v44EncoderHistorySize !== undefined) {
                const _n = typeof this.v44EncoderHistorySize === "bigint" ? Number(this.v44EncoderHistorySize) : this.v44EncoderHistorySize;
                if (_n < 512 || _n > 1677215) {
                    throw new ASN1OverflowError("Compression_Item.v44EncoderHistorySize violates INTEGER range");
                }
            }

        if (this.v44EncoderStringLength !== undefined) {
                const _n = typeof this.v44EncoderStringLength === "bigint" ? Number(this.v44EncoderStringLength) : this.v44EncoderStringLength;
                if (_n < 32 || _n > 255) {
                    throw new ASN1OverflowError("Compression_Item.v44EncoderStringLength violates INTEGER range");
                }
            }

        if (this.v44DecoderDictionarySize !== undefined) {
                const _n = typeof this.v44DecoderDictionarySize === "bigint" ? Number(this.v44DecoderDictionarySize) : this.v44DecoderDictionarySize;
                if (_n < 256 || _n > 65535) {
                    throw new ASN1OverflowError("Compression_Item.v44DecoderDictionarySize violates INTEGER range");
                }
            }

        if (this.v44DecoderHistorySize !== undefined) {
                const _n = typeof this.v44DecoderHistorySize === "bigint" ? Number(this.v44DecoderHistorySize) : this.v44DecoderHistorySize;
                if (_n < 512 || _n > 1677215) {
                    throw new ASN1OverflowError("Compression_Item.v44DecoderHistorySize violates INTEGER range");
                }
            }

        if (this.v44DecoderStringLength !== undefined) {
                const _n = typeof this.v44DecoderStringLength === "bigint" ? Number(this.v44DecoderStringLength) : this.v44DecoderStringLength;
                if (_n < 32 || _n > 255) {
                    throw new ASN1OverflowError("Compression_Item.v44DecoderStringLength violates INTEGER range");
                }
            }}

    /**
     * @summary Restructures an object into a Compression_Item
     * @description
     * 
     * This takes an `object` and converts it to a `Compression_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Compression_Item`.
     * @returns {Compression_Item}
     */
    public static _from_object (_o: { [_K in keyof (Compression_Item)]: (Compression_Item)[_K] }): Compression_Item {
        return new Compression_Item(_o.compressionNegotiationResult, _o.modeV42B, _o.v42bisCompressionActive, _o.v42bisDictionarySize, _o.v42bisStringLength, _o.modeV44, _o.v44CompressionActive, _o.v44EncoderDictionarySize, _o.v44EncoderHistorySize, _o.v44EncoderStringLength, _o.v44DecoderDictionarySize, _o.v44DecoderHistorySize, _o.v44DecoderStringLength, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `compressionNegotiationResult`
         * @public
         * @static
         */

    public static _enum_for_compressionNegotiationResult = _enum_for_Compression_Item_compressionNegotiationResult;        /**
         * @summary The enum used as the type of the component `v42bisCompressionActive`
         * @public
         * @static
         */

    public static _enum_for_v42bisCompressionActive = _enum_for_Compression_Item_v42bisCompressionActive;        /**
         * @summary The enum used as the type of the component `v44CompressionActive`
         * @public
         * @static
         */

    public static _enum_for_v44CompressionActive = _enum_for_Compression_Item_v44CompressionActive;
}

/**
 * @summary The Leading Root Component Types of Compression_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Compression_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("compressionNegotiationResult", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("modeV42B", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("v42bisCompressionActive", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("v42bisDictionarySize", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("v42bisStringLength", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("modeV44", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("v44CompressionActive", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("v44EncoderDictionarySize", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("v44EncoderHistorySize", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("v44EncoderStringLength", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("v44DecoderDictionarySize", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("v44DecoderHistorySize", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("v44DecoderStringLength", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of Compression_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Compression_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Compression_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Compression_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Compression_Item: $.ASN1Decoder<Compression_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Compression_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Compression_Item (el: _Element): Compression_Item {
    if (!_cached_decoder_for_Compression_Item) { _cached_decoder_for_Compression_Item = function (el: _Element): Compression_Item {
    let compressionNegotiationResult!: Compression_Item_compressionNegotiationResult;
    let modeV42B!: Capabilities;
    let v42bisCompressionActive!: Compression_Item_v42bisCompressionActive;
    let v42bisDictionarySize: OPTIONAL<INTEGER>;
    let v42bisStringLength: OPTIONAL<INTEGER>;
    let modeV44!: Capabilities;
    let v44CompressionActive!: Compression_Item_v44CompressionActive;
    let v44EncoderDictionarySize: OPTIONAL<INTEGER>;
    let v44EncoderHistorySize: OPTIONAL<INTEGER>;
    let v44EncoderStringLength: OPTIONAL<INTEGER>;
    let v44DecoderDictionarySize: OPTIONAL<INTEGER>;
    let v44DecoderHistorySize: OPTIONAL<INTEGER>;
    let v44DecoderStringLength: OPTIONAL<INTEGER>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "compressionNegotiationResult": (_el: _Element): void => { compressionNegotiationResult = _decode_Compression_Item_compressionNegotiationResult(_el); },
        "modeV42B": (_el: _Element): void => { modeV42B = _decode_Capabilities(_el); },
        "v42bisCompressionActive": (_el: _Element): void => { v42bisCompressionActive = _decode_Compression_Item_v42bisCompressionActive(_el); },
        "v42bisDictionarySize": (_el: _Element): void => { v42bisDictionarySize = $._decodeInteger(_el); },
        "v42bisStringLength": (_el: _Element): void => { v42bisStringLength = $._decodeInteger(_el); },
        "modeV44": (_el: _Element): void => { modeV44 = _decode_Capabilities(_el); },
        "v44CompressionActive": (_el: _Element): void => { v44CompressionActive = _decode_Compression_Item_v44CompressionActive(_el); },
        "v44EncoderDictionarySize": (_el: _Element): void => { v44EncoderDictionarySize = $._decodeInteger(_el); },
        "v44EncoderHistorySize": (_el: _Element): void => { v44EncoderHistorySize = $._decodeInteger(_el); },
        "v44EncoderStringLength": (_el: _Element): void => { v44EncoderStringLength = $._decodeInteger(_el); },
        "v44DecoderDictionarySize": (_el: _Element): void => { v44DecoderDictionarySize = $._decodeInteger(_el); },
        "v44DecoderHistorySize": (_el: _Element): void => { v44DecoderHistorySize = $._decodeInteger(_el); },
        "v44DecoderStringLength": (_el: _Element): void => { v44DecoderStringLength = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Compression_Item,
        _extension_additions_list_spec_for_Compression_Item,
        _root_component_type_list_2_spec_for_Compression_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Compression_Item(
        compressionNegotiationResult,
        modeV42B,
        v42bisCompressionActive,
        v42bisDictionarySize,
        v42bisStringLength,
        modeV44,
        v44CompressionActive,
        v44EncoderDictionarySize,
        v44EncoderHistorySize,
        v44EncoderStringLength,
        v44DecoderDictionarySize,
        v44DecoderHistorySize,
        v44DecoderStringLength,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Compression_Item(el);
}

let _cached_encoder_for_Compression_Item: $.ASN1Encoder<Compression_Item> | null = null;

/**
 * @summary Encodes a(n) Compression_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Compression_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Compression_Item (value: Compression_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Compression_Item) { _cached_encoder_for_Compression_Item = function (value: Compression_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Compression_Item_compressionNegotiationResult(value.compressionNegotiationResult, $.BER),
            /* REQUIRED   */ _encode_Capabilities(value.modeV42B, $.BER),
            /* REQUIRED   */ _encode_Compression_Item_v42bisCompressionActive(value.v42bisCompressionActive, $.BER),
            /* IF_ABSENT  */ ((value.v42bisDictionarySize === undefined) ? undefined : $._encodeInteger(value.v42bisDictionarySize, $.BER)),
            /* IF_ABSENT  */ ((value.v42bisStringLength === undefined) ? undefined : $._encodeInteger(value.v42bisStringLength, $.BER)),
            /* REQUIRED   */ _encode_Capabilities(value.modeV44, $.BER),
            /* REQUIRED   */ _encode_Compression_Item_v44CompressionActive(value.v44CompressionActive, $.BER),
            /* IF_ABSENT  */ ((value.v44EncoderDictionarySize === undefined) ? undefined : $._encodeInteger(value.v44EncoderDictionarySize, $.BER)),
            /* IF_ABSENT  */ ((value.v44EncoderHistorySize === undefined) ? undefined : $._encodeInteger(value.v44EncoderHistorySize, $.BER)),
            /* IF_ABSENT  */ ((value.v44EncoderStringLength === undefined) ? undefined : $._encodeInteger(value.v44EncoderStringLength, $.BER)),
            /* IF_ABSENT  */ ((value.v44DecoderDictionarySize === undefined) ? undefined : $._encodeInteger(value.v44DecoderDictionarySize, $.BER)),
            /* IF_ABSENT  */ ((value.v44DecoderHistorySize === undefined) ? undefined : $._encodeInteger(value.v44DecoderHistorySize, $.BER)),
            /* IF_ABSENT  */ ((value.v44DecoderStringLength === undefined) ? undefined : $._encodeInteger(value.v44DecoderStringLength, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Compression_Item(value, elGetter);
}

/* eslint-enable */
