/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { XMLNamespace, _decode_XMLNamespace, _encode_XMLNamespace } from "../TS33128Payloads/XMLNamespace.ta.mjs";
// export { XMLNamespace, _decode_XMLNamespace, _encode_XMLNamespace } from "../TS33128Payloads/XMLNamespace.ta.mjs";
import { XMLValue, _decode_XMLValue, _encode_XMLValue } from "../TS33128Payloads/XMLValue.ta.mjs";
// export { XMLValue, _decode_XMLValue, _encode_XMLValue } from "../TS33128Payloads/XMLValue.ta.mjs";


/**
 * @summary XMLType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * XMLType ::= SEQUENCE
 * {
 *     xMLNamespace [1] XMLNamespace,
 *     xMLValue     [2] XMLValue
 * }
 * ```
 * 
 * @class
 */
export
class XMLType {
    constructor (
        /**
         * @summary `xMLNamespace`.
         * @public
         * @readonly
         */
        readonly xMLNamespace: XMLNamespace,
        /**
         * @summary `xMLValue`.
         * @public
         * @readonly
         */
        readonly xMLValue: XMLValue
    ) {}

    /**
     * @summary Restructures an object into a XMLType
     * @description
     * 
     * This takes an `object` and converts it to a `XMLType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `XMLType`.
     * @returns {XMLType}
     */
    public static _from_object (_o: { [_K in keyof (XMLType)]: (XMLType)[_K] }): XMLType {
        return new XMLType(_o.xMLNamespace, _o.xMLValue);
    }


}

/**
 * @summary The Leading Root Component Types of XMLType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_XMLType: $.ComponentSpec[] = [
    new $.ComponentSpec("xMLNamespace", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("xMLValue", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of XMLType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_XMLType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of XMLType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_XMLType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_XMLType: $.ASN1Decoder<XMLType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) XMLType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_XMLType (el: _Element): XMLType {
    if (!_cached_decoder_for_XMLType) { _cached_decoder_for_XMLType = function (el: _Element): XMLType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("XMLType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "xMLNamespace";
    sequence[1].name = "xMLValue";
    let xMLNamespace!: XMLNamespace;
    let xMLValue!: XMLValue;
    xMLNamespace = $._decode_implicit<XMLNamespace>(() => _decode_XMLNamespace)(sequence[0]);
    xMLValue = $._decode_implicit<XMLValue>(() => _decode_XMLValue)(sequence[1]);
    return new XMLType(
        xMLNamespace,
        xMLValue,

    );
}; }
    return _cached_decoder_for_XMLType(el);
}

let _cached_encoder_for_XMLType: $.ASN1Encoder<XMLType> | null = null;

/**
 * @summary Encodes a(n) XMLType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XMLType, encoded as an ASN.1 Element.
 */
export
function _encode_XMLType (value: XMLType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_XMLType) { _cached_encoder_for_XMLType = function (value: XMLType, elGetter: $.ASN1Encoder<XMLType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_XMLNamespace, $.BER)(value.xMLNamespace, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_XMLValue, $.BER)(value.xMLValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_XMLType(value, elGetter);
}


/* eslint-enable */
