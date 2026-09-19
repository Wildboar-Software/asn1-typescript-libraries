/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Service5, _decode_Service5, _encode_Service5, _enum_for_Service5 } from "../AIN-Parameters/Service5.ta.mjs";
// export { Service5, _enum_for_Service5, Service5_selectiveCallAcceptance /* IMPORTED_LONG_ENUMERATION_ITEM */, selectiveCallAcceptance /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service5_selectiveCallForwarding /* IMPORTED_LONG_ENUMERATION_ITEM */, selectiveCallForwarding /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service5, _encode_Service5 } from "../AIN-Parameters/Service5.ta.mjs";
import { Action5, _decode_Action5, _encode_Action5 } from "../AIN-Parameters/Action5.ta.mjs";
// export { Action5, _decode_Action5, _encode_Action5 } from "../AIN-Parameters/Action5.ta.mjs";


/**
 * @summary UpdateGroup5
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateGroup5 ::= SEQUENCE{
 *         service5 [1] IMPLICIT Service5,
 *         action5 Action5
 *     }
 * ```
 * 
 * @class
 */
export
class UpdateGroup5 {
    constructor (
        /**
         * @summary `service5`.
         * @public
         * @readonly
         */
        readonly service5: Service5,
        /**
         * @summary `action5`.
         * @public
         * @readonly
         */
        readonly action5: Action5
    ) {}

    /**
     * @summary Restructures an object into a UpdateGroup5
     * @description
     * 
     * This takes an `object` and converts it to a `UpdateGroup5`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateGroup5`.
     * @returns {UpdateGroup5}
     */
    public static _from_object (_o: { [_K in keyof (UpdateGroup5)]: (UpdateGroup5)[_K] }): UpdateGroup5 {
        return new UpdateGroup5(_o.service5, _o.action5);
    }

        /**
         * @summary The enum used as the type of the component `service5`
         * @public
         * @static
         */

    public static _enum_for_service5 = _enum_for_Service5;
}

/**
 * @summary The Leading Root Component Types of UpdateGroup5
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UpdateGroup5: $.ComponentSpec[] = [
    new $.ComponentSpec("service5", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("action5", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of UpdateGroup5
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UpdateGroup5: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UpdateGroup5
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UpdateGroup5: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UpdateGroup5: $.ASN1Decoder<UpdateGroup5> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateGroup5
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateGroup5 (el: _Element): UpdateGroup5 {
    if (!_cached_decoder_for_UpdateGroup5) { _cached_decoder_for_UpdateGroup5 = function (el: _Element): UpdateGroup5 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("UpdateGroup5 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "service5";
    sequence[1].name = "action5";
    let service5!: Service5;
    let action5!: Action5;
    service5 = $._decode_implicit<Service5>(() => _decode_Service5)(sequence[0]);
    action5 = _decode_Action5(sequence[1]);
    return new UpdateGroup5(
        service5,
        action5,

    );
}; }
    return _cached_decoder_for_UpdateGroup5(el);
}

let _cached_encoder_for_UpdateGroup5: $.ASN1Encoder<UpdateGroup5> | null = null;

/**
 * @summary Encodes a(n) UpdateGroup5 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateGroup5, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateGroup5 (value: UpdateGroup5, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateGroup5) { _cached_encoder_for_UpdateGroup5 = function (value: UpdateGroup5, elGetter: $.ASN1Encoder<UpdateGroup5>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Service5, $.BER)(value.service5, $.BER),
            /* REQUIRED   */ _encode_Action5(value.action5, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UpdateGroup5(value, elGetter);
}


/* eslint-enable */
