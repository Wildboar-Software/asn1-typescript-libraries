/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PTCIdentifiers, _decode_PTCIdentifiers, _encode_PTCIdentifiers } from "../TS33128Payloads/PTCIdentifiers.ta.mjs";
// export { PTCIdentifiers, _decode_PTCIdentifiers, _encode_PTCIdentifiers } from "../TS33128Payloads/PTCIdentifiers.ta.mjs";


/**
 * @summary PTCTargetInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCTargetInformation ::= SEQUENCE
 * {
 *     identifiers                [1] SEQUENCE SIZE(1..MAX) OF PTCIdentifiers
 * }
 * ```
 * 
 * @class
 */
export
class PTCTargetInformation {
    constructor (
        /**
         * @summary `identifiers`.
         * @public
         * @readonly
         */
        readonly identifiers: PTCIdentifiers[]
    ) {}

    /**
     * @summary Restructures an object into a PTCTargetInformation
     * @description
     * 
     * This takes an `object` and converts it to a `PTCTargetInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCTargetInformation`.
     * @returns {PTCTargetInformation}
     */
    public static _from_object (_o: { [_K in keyof (PTCTargetInformation)]: (PTCTargetInformation)[_K] }): PTCTargetInformation {
        return new PTCTargetInformation(_o.identifiers);
    }


}

/**
 * @summary The Leading Root Component Types of PTCTargetInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCTargetInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("identifiers", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of PTCTargetInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCTargetInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCTargetInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCTargetInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCTargetInformation: $.ASN1Decoder<PTCTargetInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCTargetInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCTargetInformation (el: _Element): PTCTargetInformation {
    if (!_cached_decoder_for_PTCTargetInformation) { _cached_decoder_for_PTCTargetInformation = function (el: _Element): PTCTargetInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("PTCTargetInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "identifiers";
    let identifiers!: PTCIdentifiers[];
    identifiers = $._decode_implicit<PTCIdentifiers[]>(() => $._decodeSequenceOf<PTCIdentifiers>(() => _decode_PTCIdentifiers))(sequence[0]);
    return new PTCTargetInformation(
        identifiers,

    );
}; }
    return _cached_decoder_for_PTCTargetInformation(el);
}

let _cached_encoder_for_PTCTargetInformation: $.ASN1Encoder<PTCTargetInformation> | null = null;

/**
 * @summary Encodes a(n) PTCTargetInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCTargetInformation, encoded as an ASN.1 Element.
 */
export
function _encode_PTCTargetInformation (value: PTCTargetInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCTargetInformation) { _cached_encoder_for_PTCTargetInformation = function (value: PTCTargetInformation, elGetter: $.ASN1Encoder<PTCTargetInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<PTCIdentifiers>(() => _encode_PTCIdentifiers, $.BER), $.BER)(value.identifiers, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCTargetInformation(value, elGetter);
}


/* eslint-enable */
