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

import { ModemIdentity_Item_multimediaMode, _decode_ModemIdentity_Item_multimediaMode, _encode_ModemIdentity_Item_multimediaMode } from "../V59/ModemIdentity-Item-multimediaMode.ta.mjs";

/**
 * @summary ModemIdentity_Item
 * @description
 *
 * Manufacturer, product, firmware, V.59 diagnostic version, and optional
 * multimedia capability bits. Example: `ModemMaker Inc; PCI Card;2.66;1.0;83`.
 * ITU-T Rec. V.59 (11/2000) §6.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModemIdentity-Item ::= SEQUENCE {manufacturer       V59String,
 *               model              V59String,
 *               firmwareVersion    V59String,
 *               diagnosticVersion  V59String,
 *               multimediaMode
 *                 BIT STRING {dataMode(0), faxT30(1), faxT30C(2), fAXT30F(3),
 *                             voiceV253(4), sVDV70(5), sVDV61(6), vidTelH324(7),
 *                             v80other(8), v18Text(9)} OPTIONAL,
 *               ...}
 * ```
 * 
 * @class
 */
export
class ModemIdentity_Item {
    constructor (
        /**
         * @summary `manufacturer`.
         * @description
         *
         * Modem manufacturer. IA5 `simpleText` (§6.2.1). Tag-ID `0001`. ITU-T
         * Rec. V.59 (11/2000) §6.5.
         * @public
         * @readonly
         */
        readonly manufacturer: V59String,
        /**
         * @summary `model`.
         * @description
         *
         * Model or product name. IA5 `simpleText` (§6.2.1). Tag-ID `0002`.
         * ITU-T Rec. V.59 (11/2000) §6.5.
         * @public
         * @readonly
         */
        readonly model: V59String,
        /**
         * @summary `firmwareVersion`.
         * @description
         *
         * Firmware revision. IA5 `simpleText` (§6.2.1). Tag-ID `0003`. ITU-T
         * Rec. V.59 (11/2000) §6.5.
         * @public
         * @readonly
         */
        readonly firmwareVersion: V59String,
        /**
         * @summary `diagnosticVersion`.
         * @description
         *
         * Version of V.59 managed objects supported. Clause 1 assigns this
         * Recommendation version 1 (approved November 2000). IA5 `simpleText`
         * (§6.2.1). Tag-ID `0004`. ITU-T Rec. V.59 (11/2000) §1, §6.5.
         * @public
         * @readonly
         */
        readonly diagnosticVersion: V59String,
        /**
         * @summary `multimediaMode`.
         * @description
         *
         * Multimedia capability bits: `1` capable, `0` not (Table 4/V.59).
         * Tag-ID `0005`. ITU-T Rec. V.59 (11/2000) §6.5.
         * @public
         * @readonly
         */
        readonly multimediaMode: OPTIONAL<ModemIdentity_Item_multimediaMode>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModemIdentity_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ModemIdentity_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModemIdentity_Item`.
     * @returns {ModemIdentity_Item}
     */
    public static _from_object (_o: { [_K in keyof (ModemIdentity_Item)]: (ModemIdentity_Item)[_K] }): ModemIdentity_Item {
        return new ModemIdentity_Item(_o.manufacturer, _o.model, _o.firmwareVersion, _o.diagnosticVersion, _o.multimediaMode, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of ModemIdentity_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModemIdentity_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("manufacturer", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("model", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("firmwareVersion", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("diagnosticVersion", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("multimediaMode", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ModemIdentity_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModemIdentity_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModemIdentity_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModemIdentity_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ModemIdentity_Item: $.ASN1Decoder<ModemIdentity_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModemIdentity_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModemIdentity_Item (el: _Element): ModemIdentity_Item {
    if (!_cached_decoder_for_ModemIdentity_Item) { _cached_decoder_for_ModemIdentity_Item = function (el: _Element): ModemIdentity_Item {
    let manufacturer!: V59String;
    let model!: V59String;
    let firmwareVersion!: V59String;
    let diagnosticVersion!: V59String;
    let multimediaMode: OPTIONAL<ModemIdentity_Item_multimediaMode>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "manufacturer": (_el: _Element): void => { manufacturer = _decode_V59String(_el); },
        "model": (_el: _Element): void => { model = _decode_V59String(_el); },
        "firmwareVersion": (_el: _Element): void => { firmwareVersion = _decode_V59String(_el); },
        "diagnosticVersion": (_el: _Element): void => { diagnosticVersion = _decode_V59String(_el); },
        "multimediaMode": (_el: _Element): void => { multimediaMode = _decode_ModemIdentity_Item_multimediaMode(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ModemIdentity_Item,
        _extension_additions_list_spec_for_ModemIdentity_Item,
        _root_component_type_list_2_spec_for_ModemIdentity_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ModemIdentity_Item(
        manufacturer,
        model,
        firmwareVersion,
        diagnosticVersion,
        multimediaMode,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ModemIdentity_Item(el);
}

let _cached_encoder_for_ModemIdentity_Item: $.ASN1Encoder<ModemIdentity_Item> | null = null;

/**
 * @summary Encodes a(n) ModemIdentity_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModemIdentity_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ModemIdentity_Item (value: ModemIdentity_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModemIdentity_Item) { _cached_encoder_for_ModemIdentity_Item = function (value: ModemIdentity_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_V59String(value.manufacturer, $.BER),
            /* REQUIRED   */ _encode_V59String(value.model, $.BER),
            /* REQUIRED   */ _encode_V59String(value.firmwareVersion, $.BER),
            /* REQUIRED   */ _encode_V59String(value.diagnosticVersion, $.BER),
            /* IF_ABSENT  */ ((value.multimediaMode === undefined) ? undefined : _encode_ModemIdentity_Item_multimediaMode(value.multimediaMode, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModemIdentity_Item(value, elGetter);
}

/* eslint-enable */
