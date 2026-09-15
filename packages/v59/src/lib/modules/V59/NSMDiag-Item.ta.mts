/* eslint-disable */
import {
    OPTIONAL,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError, ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";

/**
 * @summary NSMDiag_Item
 * @description
 *
 * Manufacturer-defined diagnostics for proprietary modes. Example:
 * `proprietaryMode{SuperTurbo+}` with `fieldData{2300;FE6B;+1;0.34}`. ITU-T
 * Rec. V.59 (11/2000) §6.8.18.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NSMDiag-Item ::= SEQUENCE {proprietaryMode  V59String OPTIONAL,
 *               fieldData        IA5String(SIZE (1..256)) OPTIONAL,
 *               ...}
 * ```
 * 
 * @class
 */
export
class NSMDiag_Item {
    constructor (
        /**
         * @summary `proprietaryMode`.
         * @description
         *
         * Name of the proprietary mode(s) whose diagnostics are in `fieldData`.
         * IA5 `simpleText` (§6.2.1). Tag-ID `2601`. ITU-T Rec. V.59 (11/2000)
         * §6.8.18.
         * @public
         * @readonly
         */
        readonly proprietaryMode: OPTIONAL<V59String>,
        /**
         * @summary `fieldData`.
         * @description
         *
         * Delimited manufacturer-defined diagnostic objects. IA5String SIZE
         * 1..256. Tag-ID `2602`. ITU-T Rec. V.59 (11/2000) §6.8.18.
         * @public
         * @readonly
         */
        readonly fieldData: OPTIONAL<IA5String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        if (this.fieldData !== undefined) { if (this.fieldData.length < 1 || this.fieldData.length > 256) {
                throw new ASN1SizeError("NSMDiag_Item.fieldData violates SIZE constraint");
            } }}

    /**
     * @summary Restructures an object into a NSMDiag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `NSMDiag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NSMDiag_Item`.
     * @returns {NSMDiag_Item}
     */
    public static _from_object (_o: { [_K in keyof (NSMDiag_Item)]: (NSMDiag_Item)[_K] }): NSMDiag_Item {
        return new NSMDiag_Item(_o.proprietaryMode, _o.fieldData, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of NSMDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NSMDiag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("proprietaryMode", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("fieldData", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NSMDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NSMDiag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NSMDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NSMDiag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NSMDiag_Item: $.ASN1Decoder<NSMDiag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NSMDiag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NSMDiag_Item (el: _Element): NSMDiag_Item {
    if (!_cached_decoder_for_NSMDiag_Item) { _cached_decoder_for_NSMDiag_Item = function (el: _Element): NSMDiag_Item {
    let proprietaryMode: OPTIONAL<V59String>;
    let fieldData: OPTIONAL<IA5String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "proprietaryMode": (_el: _Element): void => { proprietaryMode = _decode_V59String(_el); },
        "fieldData": (_el: _Element): void => { fieldData = $._decodeIA5String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NSMDiag_Item,
        _extension_additions_list_spec_for_NSMDiag_Item,
        _root_component_type_list_2_spec_for_NSMDiag_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NSMDiag_Item(
        proprietaryMode,
        fieldData,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NSMDiag_Item(el);
}

let _cached_encoder_for_NSMDiag_Item: $.ASN1Encoder<NSMDiag_Item> | null = null;

/**
 * @summary Encodes a(n) NSMDiag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NSMDiag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_NSMDiag_Item (value: NSMDiag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NSMDiag_Item) { _cached_encoder_for_NSMDiag_Item = function (value: NSMDiag_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.proprietaryMode === undefined) ? undefined : _encode_V59String(value.proprietaryMode, $.BER)),
            /* IF_ABSENT  */ ((value.fieldData === undefined) ? undefined : $._encodeIA5String(value.fieldData, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NSMDiag_Item(value, elGetter);
}

/* eslint-enable */
