/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeSetId, _decode_AttributeSetId, _encode_AttributeSetId } from "./AttributeSetId.ta.mjs";
import { AttributeElement_attributeValue, _decode_AttributeElement_attributeValue, _encode_AttributeElement_attributeValue } from "./AttributeElement-attributeValue.ta.mjs";


/**
 * @summary AttributeElement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeElement ::= SEQUENCE {
 *     attributeSet     [1]   IMPLICIT AttributeSetId OPTIONAL,
 *     attributeType    [120] IMPLICIT INTEGER,
 *     attributeValue   AttributeElement-attributeValue
 * }
 * ```
 */
export
class AttributeElement {
    constructor (
        readonly attributeSet: OPTIONAL<AttributeSetId>,
        readonly attributeType: INTEGER,
        readonly attributeValue: AttributeElement_attributeValue
    ) {}

    public static _from_object (_o: { [_K in keyof (AttributeElement)]: (AttributeElement)[_K] }): AttributeElement {
        return new AttributeElement(_o.attributeSet, _o.attributeType, _o.attributeValue);
    }
}

export
const _root_component_type_list_1_spec_for_AttributeElement: $.ComponentSpec[] = [
    new $.ComponentSpec("attributeSet", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("attributeType", false, $.hasTag(_TagClass.context, 120)),
    new $.ComponentSpec("attributeValue", false, $.or($.hasTag(_TagClass.context, 121), $.hasTag(_TagClass.context, 224))),
];

export
const _root_component_type_list_2_spec_for_AttributeElement: $.ComponentSpec[] = [

];

export
const _extension_additions_list_spec_for_AttributeElement: $.ComponentSpec[] = [

];

let _cached_decoder_for_AttributeElement: $.ASN1Decoder<AttributeElement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeElement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeElement (el: _Element): AttributeElement {
    if (!_cached_decoder_for_AttributeElement) { _cached_decoder_for_AttributeElement = function (el: _Element): AttributeElement {
    let attributeSet: OPTIONAL<AttributeSetId>;
    let attributeType!: INTEGER;
    let attributeValue!: AttributeElement_attributeValue;
    const callbacks: $.DecodingMap = {
        "attributeSet": (_el: _Element): void => { attributeSet = $._decode_implicit<AttributeSetId>(() => _decode_AttributeSetId)(_el); },
        "attributeType": (_el: _Element): void => { attributeType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "attributeValue": (_el: _Element): void => { attributeValue = _decode_AttributeElement_attributeValue(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeElement,
        _extension_additions_list_spec_for_AttributeElement,
        _root_component_type_list_2_spec_for_AttributeElement,
        undefined,
    );
    return new AttributeElement(
        attributeSet,
        attributeType,
        attributeValue,
    );
}; }
    return _cached_decoder_for_AttributeElement(el);
}

let _cached_encoder_for_AttributeElement: $.ASN1Encoder<AttributeElement> | null = null;

/**
 * @summary Encodes a(n) AttributeElement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeElement, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeElement (value: AttributeElement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeElement) { _cached_encoder_for_AttributeElement = function (value: AttributeElement, elGetter: $.ASN1Encoder<AttributeElement>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.attributeSet === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AttributeSetId, $.BER)(value.attributeSet, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 120, () => $._encodeInteger, $.BER)(value.attributeType, $.BER),
            /* REQUIRED   */ _encode_AttributeElement_attributeValue(value.attributeValue, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttributeElement(value, elGetter);
}

/* eslint-enable */
