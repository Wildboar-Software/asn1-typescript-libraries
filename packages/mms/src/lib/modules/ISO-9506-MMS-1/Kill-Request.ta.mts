/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary Kill_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Kill-Request ::= SEQUENCE {
 *    programInvocationName         [0] IMPLICIT Identifier    }
 * ```
 * 
 * @class
 */
export
class Kill_Request {
    constructor (
        /**
         * @summary `programInvocationName`.
         * @public
         * @readonly
         */
        readonly programInvocationName: Identifier
    ) {}

    /**
     * @summary Restructures an object into a Kill_Request
     * @description
     * 
     * This takes an `object` and converts it to a `Kill_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Kill_Request`.
     * @returns {Kill_Request}
     */
    public static _from_object (_o: { [_K in keyof (Kill_Request)]: (Kill_Request)[_K] }): Kill_Request {
        return new Kill_Request(_o.programInvocationName);
    }


}

/**
 * @summary The Leading Root Component Types of Kill_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Kill_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("programInvocationName", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of Kill_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Kill_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Kill_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Kill_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Kill_Request: $.ASN1Decoder<Kill_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Kill_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Kill_Request (el: _Element): Kill_Request {
    if (!_cached_decoder_for_Kill_Request) { _cached_decoder_for_Kill_Request = function (el: _Element): Kill_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("Kill-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "programInvocationName";
    let programInvocationName!: Identifier;
    programInvocationName = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[0]);
    return new Kill_Request(
        programInvocationName,

    );
}; }
    return _cached_decoder_for_Kill_Request(el);
}

let _cached_encoder_for_Kill_Request: $.ASN1Encoder<Kill_Request> | null = null;

/**
 * @summary Encodes a(n) Kill_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Kill_Request, encoded as an ASN.1 Element.
 */
export
function _encode_Kill_Request (value: Kill_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Kill_Request) { _cached_encoder_for_Kill_Request = function (value: Kill_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.programInvocationName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Kill_Request(value, elGetter);
}


/* eslint-enable */
