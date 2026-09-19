/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Service6, _decode_Service6, _encode_Service6, _enum_for_Service6 } from "../AIN-Parameters/Service6.ta.mjs";
// export { Service6, _enum_for_Service6, Service6_ringControl /* IMPORTED_LONG_ENUMERATION_ITEM */, ringControl /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service6, _encode_Service6 } from "../AIN-Parameters/Service6.ta.mjs";
import { Action6, _decode_Action6, _encode_Action6 } from "../AIN-Parameters/Action6.ta.mjs";
// export { Action6, _decode_Action6, _encode_Action6 } from "../AIN-Parameters/Action6.ta.mjs";


/**
 * @summary UpdateGroup6
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateGroup6 ::= SEQUENCE{
 *         service6 [1] IMPLICIT Service6,
 *         action6 Action6
 *     }
 * ```
 * 
 * @class
 */
export
class UpdateGroup6 {
    constructor (
        /**
         * @summary `service6`.
         * @public
         * @readonly
         */
        readonly service6: Service6,
        /**
         * @summary `action6`.
         * @public
         * @readonly
         */
        readonly action6: Action6
    ) {}

    /**
     * @summary Restructures an object into a UpdateGroup6
     * @description
     * 
     * This takes an `object` and converts it to a `UpdateGroup6`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateGroup6`.
     * @returns {UpdateGroup6}
     */
    public static _from_object (_o: { [_K in keyof (UpdateGroup6)]: (UpdateGroup6)[_K] }): UpdateGroup6 {
        return new UpdateGroup6(_o.service6, _o.action6);
    }

        /**
         * @summary The enum used as the type of the component `service6`
         * @public
         * @static
         */

    public static _enum_for_service6 = _enum_for_Service6;
}

/**
 * @summary The Leading Root Component Types of UpdateGroup6
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UpdateGroup6: $.ComponentSpec[] = [
    new $.ComponentSpec("service6", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("action6", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of UpdateGroup6
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UpdateGroup6: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UpdateGroup6
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UpdateGroup6: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UpdateGroup6: $.ASN1Decoder<UpdateGroup6> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateGroup6
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateGroup6 (el: _Element): UpdateGroup6 {
    if (!_cached_decoder_for_UpdateGroup6) { _cached_decoder_for_UpdateGroup6 = function (el: _Element): UpdateGroup6 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("UpdateGroup6 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "service6";
    sequence[1].name = "action6";
    let service6!: Service6;
    let action6!: Action6;
    service6 = $._decode_implicit<Service6>(() => _decode_Service6)(sequence[0]);
    action6 = _decode_Action6(sequence[1]);
    return new UpdateGroup6(
        service6,
        action6,

    );
}; }
    return _cached_decoder_for_UpdateGroup6(el);
}

let _cached_encoder_for_UpdateGroup6: $.ASN1Encoder<UpdateGroup6> | null = null;

/**
 * @summary Encodes a(n) UpdateGroup6 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateGroup6, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateGroup6 (value: UpdateGroup6, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateGroup6) { _cached_encoder_for_UpdateGroup6 = function (value: UpdateGroup6, elGetter: $.ASN1Encoder<UpdateGroup6>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Service6, $.BER)(value.service6, $.BER),
            /* REQUIRED   */ _encode_Action6(value.action6, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UpdateGroup6(value, elGetter);
}


/* eslint-enable */
