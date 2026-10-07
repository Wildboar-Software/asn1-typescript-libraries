/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ResultSetId, _decode_ResultSetId, _encode_ResultSetId } from "./ResultSetId.ta.mjs";
import { AttributeList, _decode_AttributeList, _encode_AttributeList } from "./AttributeList.ta.mjs";


/**
 * @summary ResultSetPlusAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultSetPlusAttributes ::= [214] IMPLICIT SEQUENCE {
 *     resultSet    ResultSetId,
 *     attributes   AttributeList
 * }
 * ```
 */
export
class ResultSetPlusAttributes {
    constructor (
        readonly resultSet: ResultSetId,
        readonly attributes: AttributeList
    ) {}

    public static _from_object (_o: { [_K in keyof (ResultSetPlusAttributes)]: (ResultSetPlusAttributes)[_K] }): ResultSetPlusAttributes {
        return new ResultSetPlusAttributes(_o.resultSet, _o.attributes);
    }
}

export
const _root_component_type_list_1_spec_for_ResultSetPlusAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("resultSet", false, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("attributes", false, $.hasTag(_TagClass.context, 44)),
];

export
const _root_component_type_list_2_spec_for_ResultSetPlusAttributes: $.ComponentSpec[] = [

];

export
const _extension_additions_list_spec_for_ResultSetPlusAttributes: $.ComponentSpec[] = [

];

let _cached_decoder_for_ResultSetPlusAttributes: $.ASN1Decoder<ResultSetPlusAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResultSetPlusAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResultSetPlusAttributes (el: _Element): ResultSetPlusAttributes {
    if (!_cached_decoder_for_ResultSetPlusAttributes) { _cached_decoder_for_ResultSetPlusAttributes = $._decode_implicit<ResultSetPlusAttributes>(() => function (el: _Element): ResultSetPlusAttributes {
    let resultSet!: ResultSetId;
    let attributes!: AttributeList;
    const callbacks: $.DecodingMap = {
        "resultSet": (_el: _Element): void => { resultSet = _decode_ResultSetId(_el); },
        "attributes": (_el: _Element): void => { attributes = _decode_AttributeList(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResultSetPlusAttributes,
        _extension_additions_list_spec_for_ResultSetPlusAttributes,
        _root_component_type_list_2_spec_for_ResultSetPlusAttributes,
        undefined,
    );
    return new ResultSetPlusAttributes(
        resultSet,
        attributes,
    );
}); }
    return _cached_decoder_for_ResultSetPlusAttributes(el);
}

let _cached_encoder_for_ResultSetPlusAttributes: $.ASN1Encoder<ResultSetPlusAttributes> | null = null;

/**
 * @summary Encodes a(n) ResultSetPlusAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultSetPlusAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_ResultSetPlusAttributes (value: ResultSetPlusAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResultSetPlusAttributes) { _cached_encoder_for_ResultSetPlusAttributes = $._encode_implicit(_TagClass.context, 214, () => function (value: ResultSetPlusAttributes, elGetter: $.ASN1Encoder<ResultSetPlusAttributes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ResultSetId(value.resultSet, $.BER),
            /* REQUIRED   */ _encode_AttributeList(value.attributes, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ResultSetPlusAttributes(value, elGetter);
}

/* eslint-enable */
