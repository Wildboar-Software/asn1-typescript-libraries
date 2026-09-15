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
 * @summary V29faxDiag_Item
 * @description
 *
 * V.29 capability, transmit power, and receive level. ITU-T Rec. V.59 (11/2000)
 * §6.8.13.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V29faxDiag-Item ::= SEQUENCE {modeV29          Capabilities,
 *               v29TxLevel       TxPowerLevel,
 *               rxLevelEstimate  V59String OPTIONAL,
 *               ...}
 * ```
 * 
 * @class
 */
export
class V29faxDiag_Item {
    constructor (
        /**
         * @summary `modeV29`.
         * @description
         *
         * V.29 operating-mode capability. Table 5/V.59: `notSupported`(0),
         * `default`(1) preferred, `enabled`(2), `disabled`(3) supported but
         * off. Tag-ID `1700`. ITU-T Rec. V.59 (11/2000) §6.8.13.
         * @public
         * @readonly
         */
        readonly modeV29: Capabilities,
        /**
         * @summary `v29TxLevel`.
         * @description
         *
         * V.29 transmit power (`TxPowerLevel`). ITU-T Rec. V.59 (11/2000)
         * §6.8.13.
         * @public
         * @readonly
         */
        readonly v29TxLevel: TxPowerLevel,
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
     * @summary Restructures an object into a V29faxDiag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `V29faxDiag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V29faxDiag_Item`.
     * @returns {V29faxDiag_Item}
     */
    public static _from_object (_o: { [_K in keyof (V29faxDiag_Item)]: (V29faxDiag_Item)[_K] }): V29faxDiag_Item {
        return new V29faxDiag_Item(_o.modeV29, _o.v29TxLevel, _o.rxLevelEstimate, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of V29faxDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V29faxDiag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("modeV29", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("v29TxLevel", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rxLevelEstimate", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of V29faxDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V29faxDiag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V29faxDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V29faxDiag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V29faxDiag_Item: $.ASN1Decoder<V29faxDiag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V29faxDiag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V29faxDiag_Item (el: _Element): V29faxDiag_Item {
    if (!_cached_decoder_for_V29faxDiag_Item) { _cached_decoder_for_V29faxDiag_Item = function (el: _Element): V29faxDiag_Item {
    let modeV29!: Capabilities;
    let v29TxLevel!: TxPowerLevel;
    let rxLevelEstimate: OPTIONAL<V59String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "modeV29": (_el: _Element): void => { modeV29 = _decode_Capabilities(_el); },
        "v29TxLevel": (_el: _Element): void => { v29TxLevel = _decode_TxPowerLevel(_el); },
        "rxLevelEstimate": (_el: _Element): void => { rxLevelEstimate = _decode_V59String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_V29faxDiag_Item,
        _extension_additions_list_spec_for_V29faxDiag_Item,
        _root_component_type_list_2_spec_for_V29faxDiag_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new V29faxDiag_Item(
        modeV29,
        v29TxLevel,
        rxLevelEstimate,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_V29faxDiag_Item(el);
}

let _cached_encoder_for_V29faxDiag_Item: $.ASN1Encoder<V29faxDiag_Item> | null = null;

/**
 * @summary Encodes a(n) V29faxDiag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V29faxDiag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_V29faxDiag_Item (value: V29faxDiag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V29faxDiag_Item) { _cached_encoder_for_V29faxDiag_Item = function (value: V29faxDiag_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Capabilities(value.modeV29, $.BER),
            /* REQUIRED   */ _encode_TxPowerLevel(value.v29TxLevel, $.BER),
            /* IF_ABSENT  */ ((value.rxLevelEstimate === undefined) ? undefined : _encode_V59String(value.rxLevelEstimate, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V29faxDiag_Item(value, elGetter);
}

/* eslint-enable */
