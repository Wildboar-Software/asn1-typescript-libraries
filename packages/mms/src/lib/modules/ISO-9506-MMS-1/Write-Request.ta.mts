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
import { VariableAccessSpecification, _decode_VariableAccessSpecification, _encode_VariableAccessSpecification } from "../ISO-9506-MMS-1/VariableAccessSpecification.ta.mjs";
// export { VariableAccessSpecification, _decode_VariableAccessSpecification, _encode_VariableAccessSpecification } from "../ISO-9506-MMS-1/VariableAccessSpecification.ta.mjs";
import { Data, _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";
// export { Data, _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";


/**
 * @summary Write_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Write-Request ::= SEQUENCE {
 *    variableAccessSpecification   VariableAccessSpecification,
 *    listOfData                    [0] IMPLICIT SEQUENCE OF Data }
 * ```
 * 
 * @class
 */
export
class Write_Request {
    constructor (
        /**
         * @summary `variableAccessSpecification`.
         * @public
         * @readonly
         */
        readonly variableAccessSpecification: VariableAccessSpecification,
        /**
         * @summary `listOfData`.
         * @public
         * @readonly
         */
        readonly listOfData: Data[]
    ) {}

    /**
     * @summary Restructures an object into a Write_Request
     * @description
     * 
     * This takes an `object` and converts it to a `Write_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Write_Request`.
     * @returns {Write_Request}
     */
    public static _from_object (_o: { [_K in keyof (Write_Request)]: (Write_Request)[_K] }): Write_Request {
        return new Write_Request(_o.variableAccessSpecification, _o.listOfData);
    }


}

/**
 * @summary The Leading Root Component Types of Write_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Write_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("variableAccessSpecification", false, $.hasAnyTag),
    new $.ComponentSpec("listOfData", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of Write_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Write_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Write_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Write_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Write_Request: $.ASN1Decoder<Write_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Write_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Write_Request (el: _Element): Write_Request {
    if (!_cached_decoder_for_Write_Request) { _cached_decoder_for_Write_Request = function (el: _Element): Write_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Write-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "variableAccessSpecification";
    sequence[1].name = "listOfData";
    let variableAccessSpecification!: VariableAccessSpecification;
    let listOfData!: Data[];
    variableAccessSpecification = _decode_VariableAccessSpecification(sequence[0]);
    listOfData = $._decode_implicit<Data[]>(() => $._decodeSequenceOf<Data>(() => _decode_Data))(sequence[1]);
    return new Write_Request(
        variableAccessSpecification,
        listOfData,

    );
}; }
    return _cached_decoder_for_Write_Request(el);
}

let _cached_encoder_for_Write_Request: $.ASN1Encoder<Write_Request> | null = null;

/**
 * @summary Encodes a(n) Write_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Write_Request, encoded as an ASN.1 Element.
 */
export
function _encode_Write_Request (value: Write_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Write_Request) { _cached_encoder_for_Write_Request = function (value: Write_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_VariableAccessSpecification(value.variableAccessSpecification, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<Data>(() => _encode_Data, $.BER), $.BER)(value.listOfData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Write_Request(value, elGetter);
}


/* eslint-enable */
