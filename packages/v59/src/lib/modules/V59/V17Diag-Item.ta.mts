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
 * @summary V17Diag_Item
 * @description
 *
 * V.17 capability, transmit power, and receive level. ITU-T Rec. V.59 (11/2000)
 * §6.8.12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V17Diag-Item ::= SEQUENCE {modeV17          Capabilities,
 *               v17TxLevel       TxPowerLevel,
 *               rxLevelEstimate  V59String OPTIONAL,
 *               ...}
 * ```
 * 
 * @class
 */
export
class V17Diag_Item {
    constructor (
        /**
         * @summary `modeV17`.
         * @description
         *
         * V.17 operating-mode capability. Table 5/V.59: `notSupported`(0),
         * `default`(1) preferred, `enabled`(2), `disabled`(3) supported but
         * off. Tag-ID `1600`. ITU-T Rec. V.59 (11/2000) §6.8.12.
         * @public
         * @readonly
         */
        readonly modeV17: Capabilities,
        /**
         * @summary `v17TxLevel`.
         * @description
         *
         * V.17 transmit power (`TxPowerLevel`). ITU-T Rec. V.59 (11/2000)
         * §6.8.12.
         * @public
         * @readonly
         */
        readonly v17TxLevel: TxPowerLevel,
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
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a V17Diag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `V17Diag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V17Diag_Item`.
     * @returns {V17Diag_Item}
     */
    public static _from_object (_o: { [_K in keyof (V17Diag_Item)]: (V17Diag_Item)[_K] }): V17Diag_Item {
        return new V17Diag_Item(_o.modeV17, _o.v17TxLevel, _o.rxLevelEstimate, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of V17Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V17Diag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("modeV17", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("v17TxLevel", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rxLevelEstimate", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of V17Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V17Diag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V17Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V17Diag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V17Diag_Item: $.ASN1Decoder<V17Diag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V17Diag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V17Diag_Item (el: _Element): V17Diag_Item {
    if (!_cached_decoder_for_V17Diag_Item) { _cached_decoder_for_V17Diag_Item = function (el: _Element): V17Diag_Item {
    let modeV17!: Capabilities;
    let v17TxLevel!: TxPowerLevel;
    let rxLevelEstimate: OPTIONAL<V59String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "modeV17": (_el: _Element): void => { modeV17 = _decode_Capabilities(_el); },
        "v17TxLevel": (_el: _Element): void => { v17TxLevel = _decode_TxPowerLevel(_el); },
        "rxLevelEstimate": (_el: _Element): void => { rxLevelEstimate = _decode_V59String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_V17Diag_Item,
        _extension_additions_list_spec_for_V17Diag_Item,
        _root_component_type_list_2_spec_for_V17Diag_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new V17Diag_Item(
        modeV17,
        v17TxLevel,
        rxLevelEstimate,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_V17Diag_Item(el);
}

let _cached_encoder_for_V17Diag_Item: $.ASN1Encoder<V17Diag_Item> | null = null;

/**
 * @summary Encodes a(n) V17Diag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V17Diag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_V17Diag_Item (value: V17Diag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V17Diag_Item) { _cached_encoder_for_V17Diag_Item = function (value: V17Diag_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Capabilities(value.modeV17, $.BER),
            /* REQUIRED   */ _encode_TxPowerLevel(value.v17TxLevel, $.BER),
            /* IF_ABSENT  */ ((value.rxLevelEstimate === undefined) ? undefined : _encode_V59String(value.rxLevelEstimate, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V17Diag_Item(value, elGetter);
}

/* eslint-enable */
