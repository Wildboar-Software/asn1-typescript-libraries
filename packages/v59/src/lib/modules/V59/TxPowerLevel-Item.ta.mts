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
import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";

/**
 * @summary TxPowerLevel_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TxPowerLevel-Item ::= SEQUENCE {initialTxPower  V59String,
 *               txPowerDrop     V59String OPTIONAL,
 *               txPower         V59String OPTIONAL,
 *               ...}
 * ```
 * 
 * @class
 */
export
class TxPowerLevel_Item {
    constructor (
        /**
         * @summary `initialTxPower`.
         * @public
         * @readonly
         */
        readonly initialTxPower: V59String,
        /**
         * @summary `txPowerDrop`.
         * @public
         * @readonly
         */
        readonly txPowerDrop: OPTIONAL<V59String>,
        /**
         * @summary `txPower`.
         * @public
         * @readonly
         */
        readonly txPower: OPTIONAL<V59String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TxPowerLevel_Item
     * @description
     * 
     * This takes an `object` and converts it to a `TxPowerLevel_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TxPowerLevel_Item`.
     * @returns {TxPowerLevel_Item}
     */
    public static _from_object (_o: { [_K in keyof (TxPowerLevel_Item)]: (TxPowerLevel_Item)[_K] }): TxPowerLevel_Item {
        return new TxPowerLevel_Item(_o.initialTxPower, _o.txPowerDrop, _o.txPower, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of TxPowerLevel_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TxPowerLevel_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("initialTxPower", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("txPowerDrop", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("txPower", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TxPowerLevel_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TxPowerLevel_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TxPowerLevel_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TxPowerLevel_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TxPowerLevel_Item: $.ASN1Decoder<TxPowerLevel_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TxPowerLevel_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TxPowerLevel_Item (el: _Element): TxPowerLevel_Item {
    if (!_cached_decoder_for_TxPowerLevel_Item) { _cached_decoder_for_TxPowerLevel_Item = function (el: _Element): TxPowerLevel_Item {
    let initialTxPower!: V59String;
    let txPowerDrop: OPTIONAL<V59String>;
    let txPower: OPTIONAL<V59String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "initialTxPower": (_el: _Element): void => { initialTxPower = _decode_V59String(_el); },
        "txPowerDrop": (_el: _Element): void => { txPowerDrop = _decode_V59String(_el); },
        "txPower": (_el: _Element): void => { txPower = _decode_V59String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TxPowerLevel_Item,
        _extension_additions_list_spec_for_TxPowerLevel_Item,
        _root_component_type_list_2_spec_for_TxPowerLevel_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TxPowerLevel_Item(
        initialTxPower,
        txPowerDrop,
        txPower,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TxPowerLevel_Item(el);
}

let _cached_encoder_for_TxPowerLevel_Item: $.ASN1Encoder<TxPowerLevel_Item> | null = null;

/**
 * @summary Encodes a(n) TxPowerLevel_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TxPowerLevel_Item, encoded as an ASN.1 Element.
 */
export
function _encode_TxPowerLevel_Item (value: TxPowerLevel_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TxPowerLevel_Item) { _cached_encoder_for_TxPowerLevel_Item = function (value: TxPowerLevel_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_V59String(value.initialTxPower, $.BER),
            /* IF_ABSENT  */ ((value.txPowerDrop === undefined) ? undefined : _encode_V59String(value.txPowerDrop, $.BER)),
            /* IF_ABSENT  */ ((value.txPower === undefined) ? undefined : _encode_V59String(value.txPower, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TxPowerLevel_Item(value, elGetter);
}

/* eslint-enable */
