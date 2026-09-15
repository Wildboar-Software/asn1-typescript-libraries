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
import { ExtensionType, _decode_ExtensionType, _encode_ExtensionType } from "../TSM/ExtensionType.ta.mjs";


/**
 * @summary ExtensionValue
 * @description
 *
 * One hello extension: type plus open-type data from `{Extensions}`.
 * ITU-T Rec. X.1084 (05/2008) §10.3.2, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionValue ::= SEQUENCE {
 * extension-type    EXTENSION.&id({Extensions}),
 * extension-data    EXTENSION.&Type({Extensions}{@extension-type})
 * }
 * ```
 * 
 * @class
 */
export
class ExtensionValue {
    constructor (
        /**
         * @summary `extension_type`.
         * @description
         *
         * `EXTENSION.&id` from `{Extensions}`. X.1084 §10.3.2.
         *
         * @public
         * @readonly
         */
        readonly extension_type: ExtensionType,
        /**
         * @summary `extension_data`.
         * @description
         *
         * `EXTENSION.&Type` for that id. X.1084 §10.3.2.
         *
         * @public
         * @readonly
         */
        readonly extension_data: _Element
    ) {}

    /**
     * @summary Restructures an object into a ExtensionValue
     * @description
     * 
     * This takes an `object` and converts it to a `ExtensionValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtensionValue`.
     * @returns {ExtensionValue}
     */
    public static _from_object (_o: { [_K in keyof (ExtensionValue)]: (ExtensionValue)[_K] }): ExtensionValue {
        return new ExtensionValue(_o.extension_type, _o.extension_data);
    }


}

/**
 * @summary The Leading Root Component Types of ExtensionValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtensionValue: $.ComponentSpec[] = [
    new $.ComponentSpec("extension-type", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extension-data", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ExtensionValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtensionValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtensionValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtensionValue: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExtensionValue: $.ASN1Decoder<ExtensionValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtensionValue (el: _Element): ExtensionValue {
    if (!_cached_decoder_for_ExtensionValue) { _cached_decoder_for_ExtensionValue = function (el: _Element): ExtensionValue {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ExtensionValue contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "extension-type";
    sequence[1].name = "extension-data";
    let extension_type!: ExtensionType;
    let extension_data!: _Element;
    extension_type = _decode_ExtensionType(sequence[0]);
    extension_data = $._decodeAny(sequence[1]);
    return new ExtensionValue(
        extension_type,
        extension_data,

    );
}; }
    return _cached_decoder_for_ExtensionValue(el);
}

let _cached_encoder_for_ExtensionValue: $.ASN1Encoder<ExtensionValue> | null = null;

/**
 * @summary Encodes a(n) ExtensionValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionValue, encoded as an ASN.1 Element.
 */
export
function _encode_ExtensionValue (value: ExtensionValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtensionValue) { _cached_encoder_for_ExtensionValue = function (value: ExtensionValue): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ExtensionType(value.extension_type, $.BER),
            /* REQUIRED   */ $._encodeAny(value.extension_data, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExtensionValue(value, elGetter);
}


/* eslint-enable */
