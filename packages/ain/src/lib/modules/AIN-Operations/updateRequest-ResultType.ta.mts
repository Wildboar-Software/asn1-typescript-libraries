/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FailureCause, _decode_FailureCause, _encode_FailureCause } from "../AIN-Parameters/FailureCause.ta.mjs";
// export { FailureCause, _decode_FailureCause, _encode_FailureCause } from "../AIN-Parameters/FailureCause.ta.mjs";


/**
 * @summary updateRequest_ResultType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * updateRequest-ResultType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class updateRequest_ResultType {
    constructor (
        /**
         * @summary `failureCause`.
         * @public
         * @readonly
         */
        readonly failureCause: OPTIONAL<FailureCause>
    ) {}

    /**
     * @summary Restructures an object into a updateRequest_ResultType
     * @description
     * 
     * This takes an `object` and converts it to a `updateRequest_ResultType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `updateRequest_ResultType`.
     * @returns {updateRequest_ResultType}
     */
    public static _from_object (_o: { [_K in keyof (updateRequest_ResultType)]: (updateRequest_ResultType)[_K] }): updateRequest_ResultType {
        return new updateRequest_ResultType(_o.failureCause);
    }


}

/**
 * @summary The Leading Root Component Types of updateRequest_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_updateRequest_ResultType: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", true, $.hasTag(_TagClass.context, 32))
];

/**
 * @summary The Trailing Root Component Types of updateRequest_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_updateRequest_ResultType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of updateRequest_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_updateRequest_ResultType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_updateRequest_ResultType: $.ASN1Decoder<updateRequest_ResultType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) updateRequest_ResultType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_updateRequest_ResultType (el: _Element): updateRequest_ResultType {
    if (!_cached_decoder_for_updateRequest_ResultType) { _cached_decoder_for_updateRequest_ResultType = function (el: _Element): updateRequest_ResultType {
    let failureCause: OPTIONAL<FailureCause>;
    const callbacks: $.DecodingMap = {
        "failureCause": (_el: _Element): void => { failureCause = _decode_FailureCause(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_updateRequest_ResultType,
        _extension_additions_list_spec_for_updateRequest_ResultType,
        _root_component_type_list_2_spec_for_updateRequest_ResultType,
        undefined,
    );
    return new updateRequest_ResultType(
        failureCause
    );
}; }
    return _cached_decoder_for_updateRequest_ResultType(el);
}

let _cached_encoder_for_updateRequest_ResultType: $.ASN1Encoder<updateRequest_ResultType> | null = null;

/**
 * @summary Encodes a(n) updateRequest_ResultType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The updateRequest_ResultType, encoded as an ASN.1 Element.
 */
export
function _encode_updateRequest_ResultType (value: updateRequest_ResultType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_updateRequest_ResultType) { _cached_encoder_for_updateRequest_ResultType = function (value: updateRequest_ResultType, elGetter: $.ASN1Encoder<updateRequest_ResultType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.failureCause === undefined) ? undefined : _encode_FailureCause(value.failureCause, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_updateRequest_ResultType(value, elGetter);
}


/* eslint-enable */
