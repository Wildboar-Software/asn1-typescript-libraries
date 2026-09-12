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
 * @summary Stop_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Stop-Request ::= SEQUENCE {
 *    programInvocationName         [0] IMPLICIT Identifier    }
 * ```
 * 
 * @class
 */
export
class Stop_Request {
    constructor (
        /**
         * @summary `programInvocationName`.
         * @public
         * @readonly
         */
        readonly programInvocationName: Identifier
    ) {}

    /**
     * @summary Restructures an object into a Stop_Request
     * @description
     * 
     * This takes an `object` and converts it to a `Stop_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Stop_Request`.
     * @returns {Stop_Request}
     */
    public static _from_object (_o: { [_K in keyof (Stop_Request)]: (Stop_Request)[_K] }): Stop_Request {
        return new Stop_Request(_o.programInvocationName);
    }


}

/**
 * @summary The Leading Root Component Types of Stop_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Stop_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("programInvocationName", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of Stop_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Stop_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Stop_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Stop_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Stop_Request: $.ASN1Decoder<Stop_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Stop_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Stop_Request (el: _Element): Stop_Request {
    if (!_cached_decoder_for_Stop_Request) { _cached_decoder_for_Stop_Request = function (el: _Element): Stop_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("Stop-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "programInvocationName";
    let programInvocationName!: Identifier;
    programInvocationName = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[0]);
    return new Stop_Request(
        programInvocationName,

    );
}; }
    return _cached_decoder_for_Stop_Request(el);
}

let _cached_encoder_for_Stop_Request: $.ASN1Encoder<Stop_Request> | null = null;

/**
 * @summary Encodes a(n) Stop_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Stop_Request, encoded as an ASN.1 Element.
 */
export
function _encode_Stop_Request (value: Stop_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Stop_Request) { _cached_encoder_for_Stop_Request = function (value: Stop_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.programInvocationName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Stop_Request(value, elGetter);
}


/* eslint-enable */
