/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Service7, _decode_Service7, _encode_Service7, _enum_for_Service7 } from "../AIN-Parameters/Service7.ta.mjs";
// export { Service7, _enum_for_Service7, Service7_callingNumberDeliveryBlocking /* IMPORTED_LONG_ENUMERATION_ITEM */, callingNumberDeliveryBlocking /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service7_callingNameDeliveryBlocking /* IMPORTED_LONG_ENUMERATION_ITEM */, callingNameDeliveryBlocking /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service7, _encode_Service7 } from "../AIN-Parameters/Service7.ta.mjs";
import { Action7, _decode_Action7, _encode_Action7 } from "../AIN-Parameters/Action7.ta.mjs";
// export { Action7, _decode_Action7, _encode_Action7 } from "../AIN-Parameters/Action7.ta.mjs";


/**
 * @summary UpdateGroup7
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateGroup7 ::= SEQUENCE{
 *         service7 [1] IMPLICIT Service7,
 *         action7 Action7
 *     }
 * ```
 * 
 * @class
 */
export
class UpdateGroup7 {
    constructor (
        /**
         * @summary `service7`.
         * @public
         * @readonly
         */
        readonly service7: Service7,
        /**
         * @summary `action7`.
         * @public
         * @readonly
         */
        readonly action7: Action7
    ) {}

    /**
     * @summary Restructures an object into a UpdateGroup7
     * @description
     * 
     * This takes an `object` and converts it to a `UpdateGroup7`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateGroup7`.
     * @returns {UpdateGroup7}
     */
    public static _from_object (_o: { [_K in keyof (UpdateGroup7)]: (UpdateGroup7)[_K] }): UpdateGroup7 {
        return new UpdateGroup7(_o.service7, _o.action7);
    }

        /**
         * @summary The enum used as the type of the component `service7`
         * @public
         * @static
         */

    public static _enum_for_service7 = _enum_for_Service7;
}

/**
 * @summary The Leading Root Component Types of UpdateGroup7
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UpdateGroup7: $.ComponentSpec[] = [
    new $.ComponentSpec("service7", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("action7", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of UpdateGroup7
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UpdateGroup7: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UpdateGroup7
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UpdateGroup7: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UpdateGroup7: $.ASN1Decoder<UpdateGroup7> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateGroup7
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateGroup7 (el: _Element): UpdateGroup7 {
    if (!_cached_decoder_for_UpdateGroup7) { _cached_decoder_for_UpdateGroup7 = function (el: _Element): UpdateGroup7 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("UpdateGroup7 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "service7";
    sequence[1].name = "action7";
    let service7!: Service7;
    let action7!: Action7;
    service7 = $._decode_implicit<Service7>(() => _decode_Service7)(sequence[0]);
    action7 = _decode_Action7(sequence[1]);
    return new UpdateGroup7(
        service7,
        action7,

    );
}; }
    return _cached_decoder_for_UpdateGroup7(el);
}

let _cached_encoder_for_UpdateGroup7: $.ASN1Encoder<UpdateGroup7> | null = null;

/**
 * @summary Encodes a(n) UpdateGroup7 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateGroup7, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateGroup7 (value: UpdateGroup7, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateGroup7) { _cached_encoder_for_UpdateGroup7 = function (value: UpdateGroup7, elGetter: $.ASN1Encoder<UpdateGroup7>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Service7, $.BER)(value.service7, $.BER),
            /* REQUIRED   */ _encode_Action7(value.action7, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UpdateGroup7(value, elGetter);
}


/* eslint-enable */
