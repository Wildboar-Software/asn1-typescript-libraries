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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary Output_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Output-Request ::= SEQUENCE {
 *    operatorStationName        [0] IMPLICIT Identifier,
 *    listOfOutputData           [1] IMPLICIT SEQUENCE OF MMSString   }
 * ```
 * 
 * @class
 */
export
class Output_Request {
    constructor (
        /**
         * @summary `operatorStationName`.
         * @public
         * @readonly
         */
        readonly operatorStationName: Identifier,
        /**
         * @summary `listOfOutputData`.
         * @public
         * @readonly
         */
        readonly listOfOutputData: MMSString[]
    ) {}

    /**
     * @summary Restructures an object into a Output_Request
     * @description
     * 
     * This takes an `object` and converts it to a `Output_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Output_Request`.
     * @returns {Output_Request}
     */
    public static _from_object (_o: { [_K in keyof (Output_Request)]: (Output_Request)[_K] }): Output_Request {
        return new Output_Request(_o.operatorStationName, _o.listOfOutputData);
    }


}

/**
 * @summary The Leading Root Component Types of Output_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Output_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("operatorStationName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfOutputData", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Output_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Output_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Output_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Output_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Output_Request: $.ASN1Decoder<Output_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Output_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Output_Request (el: _Element): Output_Request {
    if (!_cached_decoder_for_Output_Request) { _cached_decoder_for_Output_Request = function (el: _Element): Output_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Output-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "operatorStationName";
    sequence[1].name = "listOfOutputData";
    let operatorStationName!: Identifier;
    let listOfOutputData!: MMSString[];
    operatorStationName = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[0]);
    listOfOutputData = $._decode_implicit<MMSString[]>(() => $._decodeSequenceOf<MMSString>(() => _decode_MMSString))(sequence[1]);
    return new Output_Request(
        operatorStationName,
        listOfOutputData,

    );
}; }
    return _cached_decoder_for_Output_Request(el);
}

let _cached_encoder_for_Output_Request: $.ASN1Encoder<Output_Request> | null = null;

/**
 * @summary Encodes a(n) Output_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Output_Request, encoded as an ASN.1 Element.
 */
export
function _encode_Output_Request (value: Output_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Output_Request) { _cached_encoder_for_Output_Request = function (value: Output_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.operatorStationName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<MMSString>(() => _encode_MMSString, $.BER), $.BER)(value.listOfOutputData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Output_Request(value, elGetter);
}


/* eslint-enable */
