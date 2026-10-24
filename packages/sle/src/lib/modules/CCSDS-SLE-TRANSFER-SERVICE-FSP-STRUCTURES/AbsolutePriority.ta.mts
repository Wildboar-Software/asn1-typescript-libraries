/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { VcOrMapId, _decode_VcOrMapId, _encode_VcOrMapId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/VcOrMapId.ta.mjs";
import { Priority, _decode_Priority, _encode_Priority } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/Priority.ta.mjs";


/**
 * @summary AbsolutePriority
 * @description
 * 
 * One entry of an absolute-priority list: a VC or MAP identifier and its
 * priority. The list has 1 to 64 entries. All priorities are different.
 * 
 * CCSDS 912.3-B-3, annex A2.5 and section B2.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbsolutePriority ::= SEQUENCE
 * {  vcOrMapId               VcOrMapId
 * ,  priority                Priority
 * }
 * ```
 * 
 * @class
 */
export
class AbsolutePriority {
    /**
     * @summary `vcOrMapId`.
     * @description
     * Virtual Channel or MAP to which `priority` applies. At MAP level the
     * identifier is a MAP. At VC level it is a VC.
     * 
     * CCSDS 912.3-B-3, annex A2.5 and sections B3 and B4.
     * @public
     * @readonly
     */
    readonly vcOrMapId: VcOrMapId;
    /**
     * @summary `priority`.
     * @description
     * Priority of this VC or MAP. 1 is highest and 64 is lowest.
     * 
     * CCSDS 912.3-B-3, annex A2.5.
     * @public
     * @readonly
     */
    readonly priority: Priority;

    constructor (
        vcOrMapId: VcOrMapId,
        priority: Priority
    ) {
        this.vcOrMapId = vcOrMapId;
        this.priority = priority;
    }

    /**
     * @summary Restructures an object into a AbsolutePriority
     * @description
     * 
     * This takes an `object` and converts it to a `AbsolutePriority`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AbsolutePriority`.
     * @returns {AbsolutePriority}
     */
    public static _from_object (_o: { [_K in keyof (AbsolutePriority)]: (AbsolutePriority)[_K] }): AbsolutePriority {
        return new AbsolutePriority(_o.vcOrMapId, _o.priority);
    }


}

/**
 * @summary The Leading Root Component Types of AbsolutePriority
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AbsolutePriority: $.ComponentSpec[] = [
    new $.ComponentSpec("vcOrMapId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("priority", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of AbsolutePriority
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AbsolutePriority: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AbsolutePriority
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AbsolutePriority: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AbsolutePriority: $.ASN1Decoder<AbsolutePriority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AbsolutePriority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AbsolutePriority (el: _Element): AbsolutePriority {
    if (!_cached_decoder_for_AbsolutePriority) { _cached_decoder_for_AbsolutePriority = function (el: _Element): AbsolutePriority {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AbsolutePriority contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "vcOrMapId";
    sequence[1].name = "priority";
    let vcOrMapId!: VcOrMapId;
    let priority!: Priority;
    vcOrMapId = _decode_VcOrMapId(sequence[0]);
    priority = _decode_Priority(sequence[1]);
    return new AbsolutePriority(
        vcOrMapId,
        priority,

    );
}; }
    return _cached_decoder_for_AbsolutePriority(el);
}

let _cached_encoder_for_AbsolutePriority: $.ASN1Encoder<AbsolutePriority> | null = null;

/**
 * @summary Encodes a(n) AbsolutePriority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbsolutePriority, encoded as an ASN.1 Element.
 */
export
function _encode_AbsolutePriority (value: AbsolutePriority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AbsolutePriority) { _cached_encoder_for_AbsolutePriority = function (value: AbsolutePriority, _elGetter: $.ASN1Encoder<AbsolutePriority>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_VcOrMapId(value.vcOrMapId, $.BER),
        /* REQUIRED   */ _encode_Priority(value.priority, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_AbsolutePriority(value, elGetter);
}


/* eslint-enable */
