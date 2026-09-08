/* eslint-disable */
import {
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from "../CMIP-1/ObjectInstance.ta.mjs";

import {
    TerminalRDNRange,
    _decode_TerminalRDNRange,
    _encode_TerminalRDNRange,
} from "../Q821-ASN1Module/TerminalRDNRange.ta.mjs";



/**
 * @summary RangeOfObjects
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RangeOfObjects ::= SEQUENCE {
 *   superiorObjectName  ObjectInstance,
 *   terminalRDNRange    TerminalRDNRange
 * }
 * ```
 * 
 * @class
 */
export
class RangeOfObjects {
    constructor (
        /**
         * @summary `superiorObjectName`.
         * @public
         * @readonly
         */
        readonly superiorObjectName: ObjectInstance,
        /**
         * @summary `terminalRDNRange`.
         * @public
         * @readonly
         */
        readonly terminalRDNRange: TerminalRDNRange
    ) {}

    /**
     * @summary Restructures an object into a RangeOfObjects
     * @description
     * 
     * This takes an `object` and converts it to a `RangeOfObjects`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RangeOfObjects`.
     * @returns {RangeOfObjects}
     */
    public static _from_object (_o: { [_K in keyof (RangeOfObjects)]: (RangeOfObjects)[_K] }): RangeOfObjects {
        return new RangeOfObjects(_o.superiorObjectName, _o.terminalRDNRange);
    }


}

/**
 * @summary The Leading Root Component Types of RangeOfObjects
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RangeOfObjects: $.ComponentSpec[] = [
    new $.ComponentSpec("superiorObjectName", false, $.hasAnyTag),
    new $.ComponentSpec("terminalRDNRange", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of RangeOfObjects
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RangeOfObjects: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RangeOfObjects
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RangeOfObjects: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RangeOfObjects: $.ASN1Decoder<RangeOfObjects> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RangeOfObjects
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RangeOfObjects (el: _Element): RangeOfObjects {
    if (!_cached_decoder_for_RangeOfObjects) { _cached_decoder_for_RangeOfObjects = function (el: _Element): RangeOfObjects {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RangeOfObjects contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "superiorObjectName";
    sequence[1].name = "terminalRDNRange";
    let superiorObjectName!: ObjectInstance;
    let terminalRDNRange!: TerminalRDNRange;
    superiorObjectName = _decode_ObjectInstance(sequence[0]);
    terminalRDNRange = _decode_TerminalRDNRange(sequence[1]);
    return new RangeOfObjects(
        superiorObjectName,
        terminalRDNRange,

    );
}; }
    return _cached_decoder_for_RangeOfObjects(el);
}

let _cached_encoder_for_RangeOfObjects: $.ASN1Encoder<RangeOfObjects> | null = null;

/**
 * @summary Encodes a(n) RangeOfObjects into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RangeOfObjects, encoded as an ASN.1 Element.
 */
export
function _encode_RangeOfObjects (value: RangeOfObjects, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RangeOfObjects) { _cached_encoder_for_RangeOfObjects = function (value: RangeOfObjects, elGetter: $.ASN1Encoder<RangeOfObjects>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ObjectInstance(value.superiorObjectName, $.BER),
            /* REQUIRED   */ _encode_TerminalRDNRange(value.terminalRDNRange, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RangeOfObjects(value, elGetter);
}


/* eslint-enable */
