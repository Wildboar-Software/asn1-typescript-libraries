/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ShortMessageTextType, _decode_ShortMessageTextType, _encode_ShortMessageTextType } from "../Short-Message-Service-Operations-asn1-97/ShortMessageTextType.ta.mjs";
import { ShortMessageTextData, _decode_ShortMessageTextData, _encode_ShortMessageTextData } from "../Short-Message-Service-Operations-asn1-97/ShortMessageTextData.ta.mjs";

/**
 * @summary ShortMessageText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ShortMessageText ::= SEQUENCE {
 *     shortMessageTextType ShortMessageTextType,
 *     shortMessageTextData ShortMessageTextData
 * }
 * ```
 * 
 * @class
 */
export
class ShortMessageText {
    /**
     * @summary `shortMessageTextType`.
     * @public
     * @readonly
     */
    readonly shortMessageTextType: ShortMessageTextType;
    /**
     * @summary `shortMessageTextData`.
     * @public
     * @readonly
     */
    readonly shortMessageTextData: ShortMessageTextData;

    constructor (
        shortMessageTextType: ShortMessageTextType,
        shortMessageTextData: ShortMessageTextData
    ) {
        this.shortMessageTextType = shortMessageTextType;
        this.shortMessageTextData = shortMessageTextData;
    }

    /**
     * @summary Restructures an object into a ShortMessageText
     * @description
     * 
     * This takes an `object` and converts it to a `ShortMessageText`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ShortMessageText`.
     * @returns {ShortMessageText}
     */
    public static _from_object (_o: { [_K in keyof (ShortMessageText)]: (ShortMessageText)[_K] }): ShortMessageText {
        return new ShortMessageText(_o.shortMessageTextType, _o.shortMessageTextData);
    }

}

/**
 * @summary The Leading Root Component Types of ShortMessageText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ShortMessageText: $.ComponentSpec[] = [
    new $.ComponentSpec("shortMessageTextType", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("shortMessageTextData", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of ShortMessageText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ShortMessageText: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ShortMessageText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ShortMessageText: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ShortMessageText: $.ASN1Decoder<ShortMessageText> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ShortMessageText
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ShortMessageText (el: _Element): ShortMessageText {
    if (!_cached_decoder_for_ShortMessageText) { _cached_decoder_for_ShortMessageText = function (el: _Element): ShortMessageText {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ShortMessageText contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "shortMessageTextType";
    sequence[1].name = "shortMessageTextData";
    const shortMessageTextType: ShortMessageTextType = _decode_ShortMessageTextType(sequence[0]);
    const shortMessageTextData: ShortMessageTextData = _decode_ShortMessageTextData(sequence[1]);
    return new ShortMessageText(
        shortMessageTextType,
        shortMessageTextData,

    );
}; }
    return _cached_decoder_for_ShortMessageText(el);
}

let _cached_encoder_for_ShortMessageText: $.ASN1Encoder<ShortMessageText> | null = null;

/**
 * @summary Encodes a(n) ShortMessageText into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShortMessageText, encoded as an ASN.1 Element.
 */
export
function _encode_ShortMessageText (value: ShortMessageText, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ShortMessageText) { _cached_encoder_for_ShortMessageText = function (value: ShortMessageText, _elGetter: $.ASN1Encoder<ShortMessageText>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ShortMessageTextType(value.shortMessageTextType, $.BER),
        /* REQUIRED   */ _encode_ShortMessageTextData(value.shortMessageTextData, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ShortMessageText(value, elGetter);
}

/* eslint-enable */
