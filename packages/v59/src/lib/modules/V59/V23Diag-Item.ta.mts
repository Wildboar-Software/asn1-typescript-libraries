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

import { TxPowerLevel, _decode_TxPowerLevel, _encode_TxPowerLevel } from "../V59/TxPowerLevel.ta.mjs";

import { V23Drate, _decode_V23Drate, _encode_V23Drate } from "../V59/V23Drate.ta.mjs";

import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";

/**
 * @summary V23Diag_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V23Diag-Item ::= SEQUENCE {modeV23           Capabilities,
 *               v23TxLevel        TxPowerLevel,
 *               duplex            BOOLEAN,
 *               transmitDataRate  V23Drate,
 *               receiveDataRate   V23Drate,
 *               rxLevelEstimate   V59String OPTIONAL,
 *               ...}
 * ```
 * 
 * @class
 */
export
class V23Diag_Item {
    constructor (
        /**
         * @summary `modeV23`.
         * @public
         * @readonly
         */
        readonly modeV23: Capabilities,
        /**
         * @summary `v23TxLevel`.
         * @public
         * @readonly
         */
        readonly v23TxLevel: TxPowerLevel,
        /**
         * @summary `duplex`.
         * @public
         * @readonly
         */
        readonly duplex: BOOLEAN,
        /**
         * @summary `transmitDataRate`.
         * @public
         * @readonly
         */
        readonly transmitDataRate: V23Drate,
        /**
         * @summary `receiveDataRate`.
         * @public
         * @readonly
         */
        readonly receiveDataRate: V23Drate,
        /**
         * @summary `rxLevelEstimate`.
         * @public
         * @readonly
         */
        readonly rxLevelEstimate: OPTIONAL<V59String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a V23Diag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `V23Diag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V23Diag_Item`.
     * @returns {V23Diag_Item}
     */
    public static _from_object (_o: { [_K in keyof (V23Diag_Item)]: (V23Diag_Item)[_K] }): V23Diag_Item {
        return new V23Diag_Item(_o.modeV23, _o.v23TxLevel, _o.duplex, _o.transmitDataRate, _o.receiveDataRate, _o.rxLevelEstimate, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of V23Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V23Diag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("modeV23", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("v23TxLevel", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("duplex", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("transmitDataRate", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("receiveDataRate", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("rxLevelEstimate", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of V23Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V23Diag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V23Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V23Diag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V23Diag_Item: $.ASN1Decoder<V23Diag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V23Diag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V23Diag_Item (el: _Element): V23Diag_Item {
    if (!_cached_decoder_for_V23Diag_Item) { _cached_decoder_for_V23Diag_Item = function (el: _Element): V23Diag_Item {
    let modeV23!: Capabilities;
    let v23TxLevel!: TxPowerLevel;
    let duplex!: BOOLEAN;
    let transmitDataRate!: V23Drate;
    let receiveDataRate!: V23Drate;
    let rxLevelEstimate: OPTIONAL<V59String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "modeV23": (_el: _Element): void => { modeV23 = _decode_Capabilities(_el); },
        "v23TxLevel": (_el: _Element): void => { v23TxLevel = _decode_TxPowerLevel(_el); },
        "duplex": (_el: _Element): void => { duplex = $._decodeBoolean(_el); },
        "transmitDataRate": (_el: _Element): void => { transmitDataRate = _decode_V23Drate(_el); },
        "receiveDataRate": (_el: _Element): void => { receiveDataRate = _decode_V23Drate(_el); },
        "rxLevelEstimate": (_el: _Element): void => { rxLevelEstimate = _decode_V59String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_V23Diag_Item,
        _extension_additions_list_spec_for_V23Diag_Item,
        _root_component_type_list_2_spec_for_V23Diag_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new V23Diag_Item(
        modeV23,
        v23TxLevel,
        duplex,
        transmitDataRate,
        receiveDataRate,
        rxLevelEstimate,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_V23Diag_Item(el);
}

let _cached_encoder_for_V23Diag_Item: $.ASN1Encoder<V23Diag_Item> | null = null;

/**
 * @summary Encodes a(n) V23Diag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V23Diag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_V23Diag_Item (value: V23Diag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V23Diag_Item) { _cached_encoder_for_V23Diag_Item = function (value: V23Diag_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Capabilities(value.modeV23, $.BER),
            /* REQUIRED   */ _encode_TxPowerLevel(value.v23TxLevel, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.duplex, $.BER),
            /* REQUIRED   */ _encode_V23Drate(value.transmitDataRate, $.BER),
            /* REQUIRED   */ _encode_V23Drate(value.receiveDataRate, $.BER),
            /* IF_ABSENT  */ ((value.rxLevelEstimate === undefined) ? undefined : _encode_V59String(value.rxLevelEstimate, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V23Diag_Item(value, elGetter);
}

/* eslint-enable */
