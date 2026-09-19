/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Service8, _decode_Service8, _encode_Service8, _enum_for_Service8 } from "../AIN-Parameters/Service8.ta.mjs";
// export { Service8, _enum_for_Service8, Service8_customerOriginatedTrace /* IMPORTED_LONG_ENUMERATION_ITEM */, customerOriginatedTrace /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service8_cancelCallWaiting /* IMPORTED_LONG_ENUMERATION_ITEM */, cancelCallWaiting /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service8, _encode_Service8 } from "../AIN-Parameters/Service8.ta.mjs";
import { Action8, _decode_Action8, _encode_Action8 } from "../AIN-Parameters/Action8.ta.mjs";
// export { Action8, _decode_Action8, _encode_Action8 } from "../AIN-Parameters/Action8.ta.mjs";


/**
 * @summary UpdateGroup8
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateGroup8 ::= SEQUENCE{
 *         service8 [1] IMPLICIT Service8,
 *         action8 Action8
 *     }
 * ```
 * 
 * @class
 */
export
class UpdateGroup8 {
    constructor (
        /**
         * @summary `service8`.
         * @public
         * @readonly
         */
        readonly service8: Service8,
        /**
         * @summary `action8`.
         * @public
         * @readonly
         */
        readonly action8: Action8
    ) {}

    /**
     * @summary Restructures an object into a UpdateGroup8
     * @description
     * 
     * This takes an `object` and converts it to a `UpdateGroup8`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateGroup8`.
     * @returns {UpdateGroup8}
     */
    public static _from_object (_o: { [_K in keyof (UpdateGroup8)]: (UpdateGroup8)[_K] }): UpdateGroup8 {
        return new UpdateGroup8(_o.service8, _o.action8);
    }

        /**
         * @summary The enum used as the type of the component `service8`
         * @public
         * @static
         */

    public static _enum_for_service8 = _enum_for_Service8;
}

/**
 * @summary The Leading Root Component Types of UpdateGroup8
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UpdateGroup8: $.ComponentSpec[] = [
    new $.ComponentSpec("service8", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("action8", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of UpdateGroup8
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UpdateGroup8: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UpdateGroup8
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UpdateGroup8: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UpdateGroup8: $.ASN1Decoder<UpdateGroup8> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateGroup8
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateGroup8 (el: _Element): UpdateGroup8 {
    if (!_cached_decoder_for_UpdateGroup8) { _cached_decoder_for_UpdateGroup8 = function (el: _Element): UpdateGroup8 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("UpdateGroup8 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "service8";
    sequence[1].name = "action8";
    let service8!: Service8;
    let action8!: Action8;
    service8 = $._decode_implicit<Service8>(() => _decode_Service8)(sequence[0]);
    action8 = _decode_Action8(sequence[1]);
    return new UpdateGroup8(
        service8,
        action8,

    );
}; }
    return _cached_decoder_for_UpdateGroup8(el);
}

let _cached_encoder_for_UpdateGroup8: $.ASN1Encoder<UpdateGroup8> | null = null;

/**
 * @summary Encodes a(n) UpdateGroup8 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateGroup8, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateGroup8 (value: UpdateGroup8, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateGroup8) { _cached_encoder_for_UpdateGroup8 = function (value: UpdateGroup8, elGetter: $.ASN1Encoder<UpdateGroup8>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Service8, $.BER)(value.service8, $.BER),
            /* REQUIRED   */ _encode_Action8(value.action8, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UpdateGroup8(value, elGetter);
}


/* eslint-enable */
