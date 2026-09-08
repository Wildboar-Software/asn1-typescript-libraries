/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

import {
    SupportedStatusAttributes,
} from "../Q821-ASN1Module/SupportedStatusAttributes.osa.mjs";



/**
 * @summary StatusChange_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusChange-Item ::= SEQUENCE {
 *     statusAttributeID  Q821-ATTRIBUTE.&id({SupportedStatusAttributes}),
 *     oldStatusValue     [1] Q821-ATTRIBUTE.&Type({SupportedStatusAttributes}{@.statusAttributeID}) OPTIONAL,
 *     newStatusValue     [2] Q821-ATTRIBUTE.&Type({SupportedStatusAttributes}{@.statusAttributeID})
 * }
 * ```
 * 
 * @class
 */
export
class StatusChange_Item {
    constructor (
        /**
         * @summary `statusAttributeID`.
         * @public
         * @readonly
         */
        readonly statusAttributeID: OBJECT_IDENTIFIER,
        /**
         * @summary `oldStatusValue`.
         * @public
         * @readonly
         */
        readonly oldStatusValue: OPTIONAL<_Element>,
        /**
         * @summary `newStatusValue`.
         * @public
         * @readonly
         */
        readonly newStatusValue: _Element
    ) {}

    /**
     * @summary Restructures an object into a StatusChange_Item
     * @description
     * 
     * This takes an `object` and converts it to a `StatusChange_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StatusChange_Item`.
     * @returns {StatusChange_Item}
     */
    public static _from_object (_o: { [_K in keyof (StatusChange_Item)]: (StatusChange_Item)[_K] }): StatusChange_Item {
        return new StatusChange_Item(_o.statusAttributeID, _o.oldStatusValue, _o.newStatusValue);
    }


}

/**
 * @summary The Leading Root Component Types of StatusChange_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StatusChange_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("statusAttributeID", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("oldStatusValue", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("newStatusValue", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of StatusChange_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StatusChange_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StatusChange_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StatusChange_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StatusChange_Item: $.ASN1Decoder<StatusChange_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatusChange_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatusChange_Item (el: _Element): StatusChange_Item {
    if (!_cached_decoder_for_StatusChange_Item) { _cached_decoder_for_StatusChange_Item = function (el: _Element): StatusChange_Item {
    let statusAttributeID!: OBJECT_IDENTIFIER;
    let oldStatusValue: OPTIONAL<_Element>;
    let newStatusValue!: _Element;
    const callbacks: $.DecodingMap = {
        "statusAttributeID": (_el: _Element): void => { statusAttributeID = $._decodeObjectIdentifier(_el); },
        "oldStatusValue": (_el: _Element): void => { oldStatusValue = $._decode_explicit<_Element>(() => $._decodeAny)(_el); },
        "newStatusValue": (_el: _Element): void => { newStatusValue = $._decode_explicit<_Element>(() => $._decodeAny)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StatusChange_Item,
        _extension_additions_list_spec_for_StatusChange_Item,
        _root_component_type_list_2_spec_for_StatusChange_Item,
        undefined,
    );
    return new StatusChange_Item(
        statusAttributeID,
        oldStatusValue,
        newStatusValue
    );
}; }
    return _cached_decoder_for_StatusChange_Item(el);
}

let _cached_encoder_for_StatusChange_Item: $.ASN1Encoder<StatusChange_Item> | null = null;

/**
 * @summary Encodes a(n) StatusChange_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatusChange_Item, encoded as an ASN.1 Element.
 */
export
function _encode_StatusChange_Item (value: StatusChange_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatusChange_Item) { _cached_encoder_for_StatusChange_Item = function (value: StatusChange_Item, elGetter: $.ASN1Encoder<StatusChange_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.statusAttributeID, $.BER),
            /* IF_ABSENT  */ ((value.oldStatusValue === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => $._encodeAny, $.BER)(value.oldStatusValue, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => $._encodeAny, $.BER)(value.newStatusValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StatusChange_Item(value, elGetter);
}


/* eslint-enable */
