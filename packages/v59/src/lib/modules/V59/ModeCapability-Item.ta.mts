/* eslint-disable */
import {
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
import { ModeCapability_Item_modulationMode, _decode_ModeCapability_Item_modulationMode, _encode_ModeCapability_Item_modulationMode } from "../V59/ModeCapability-Item-modulationMode.ta.mjs";

import { ModeCapability_Item_protocolmode, _decode_ModeCapability_Item_protocolmode, _encode_ModeCapability_Item_protocolmode } from "../V59/ModeCapability-Item-protocolmode.ta.mjs";

/**
 * @summary ModeCapability_Item
 * @description
 *
 * Supported modulation modes and error-control/compression protocols. ITU-T
 * Rec. V.59 (11/2000) §6.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModeCapability-Item ::= SEQUENCE {modulationMode
 *                 SEQUENCE {modeV90       Capabilities,
 *                           modeV91       Capabilities,
 *                           modeV92       Capabilities,
 *                           modeV34       Capabilities,
 *                           modeV32B      Capabilities,
 *                           modeV22B      Capabilities,
 *                           modeV23       Capabilities,
 *                           modeV21       Capabilities,
 *                           modeV34H      Capabilities,
 *                           modeV17       Capabilities,
 *                           modeV29       Capabilities,
 *                           modeV27T      Capabilities,
 *                           modeV18       Capabilities,
 *                           otherModMode  V59String OPTIONAL,
 *                           ...},
 *               protocolmode
 *                 SEQUENCE {modeV42        Capabilities,
 *                           modeV42B       Capabilities,
 *                           modeV44        Capabilities,
 *                           otherProtMode  V59String OPTIONAL,
 *                           ...},
 *               ...}
 * ```
 * 
 * @class
 */
export
class ModeCapability_Item {
    constructor (
        /**
         * @summary `modulationMode`.
         * @description
         *
         * Per-modulation capability codes (Tag-IDs `0900`…`2300` plus
         * `otherModMode` `0101`). ITU-T Rec. V.59 (11/2000) §6.6.
         * @public
         * @readonly
         */
        readonly modulationMode: ModeCapability_Item_modulationMode,
        /**
         * @summary `protocolmode`.
         * @description
         *
         * Per-protocol capability: V.42 (`2F00`), V.42 bis (`3000`), V.44
         * (`300A`), optional `otherProtMode` (`0102`). ITU-T Rec. V.59
         * (11/2000) §6.6.
         * @public
         * @readonly
         */
        readonly protocolmode: ModeCapability_Item_protocolmode,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModeCapability_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ModeCapability_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModeCapability_Item`.
     * @returns {ModeCapability_Item}
     */
    public static _from_object (_o: { [_K in keyof (ModeCapability_Item)]: (ModeCapability_Item)[_K] }): ModeCapability_Item {
        return new ModeCapability_Item(_o.modulationMode, _o.protocolmode, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of ModeCapability_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModeCapability_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("modulationMode", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("protocolmode", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ModeCapability_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModeCapability_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModeCapability_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModeCapability_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ModeCapability_Item: $.ASN1Decoder<ModeCapability_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModeCapability_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModeCapability_Item (el: _Element): ModeCapability_Item {
    if (!_cached_decoder_for_ModeCapability_Item) { _cached_decoder_for_ModeCapability_Item = function (el: _Element): ModeCapability_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ModeCapability-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "modulationMode";
    sequence[1].name = "protocolmode";
    let modulationMode!: ModeCapability_Item_modulationMode;
    let protocolmode!: ModeCapability_Item_protocolmode;
    modulationMode = _decode_ModeCapability_Item_modulationMode(sequence[0]);
    protocolmode = _decode_ModeCapability_Item_protocolmode(sequence[1]);
    return new ModeCapability_Item(
        modulationMode,
        protocolmode,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_ModeCapability_Item(el);
}

let _cached_encoder_for_ModeCapability_Item: $.ASN1Encoder<ModeCapability_Item> | null = null;

/**
 * @summary Encodes a(n) ModeCapability_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModeCapability_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ModeCapability_Item (value: ModeCapability_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModeCapability_Item) { _cached_encoder_for_ModeCapability_Item = function (value: ModeCapability_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ModeCapability_Item_modulationMode(value.modulationMode, $.BER),
            /* REQUIRED   */ _encode_ModeCapability_Item_protocolmode(value.protocolmode, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModeCapability_Item(value, elGetter);
}

/* eslint-enable */
