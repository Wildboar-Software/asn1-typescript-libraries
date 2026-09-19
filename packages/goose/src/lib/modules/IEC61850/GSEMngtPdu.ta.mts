/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestResponse, _decode_RequestResponse, _encode_RequestResponse } from "../IEC61850/RequestResponse.ta.mjs";
// export { RequestResponse, _decode_RequestResponse, _encode_RequestResponse } from "../IEC61850/RequestResponse.ta.mjs";


/**
 * @summary GSEMngtPdu
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GSEMngtPdu ::= SEQUENCE {
 *     stateID        [0] IMPLICIT INTEGER,
 * --    security    [3] ANY OPTIONAL,
 *                     -- reserved for future definition
 *     requestResp    RequestResponse
 * --    CHOICE {
 * --        requests    [1] IMPLICIT GSEMngtRequests,
 * --        responses    [2] IMPLICIT GSEMngtResponses
 * --    }
 * }
 * ```
 * 
 * @class
 */
export
class GSEMngtPdu {
    constructor (
        /**
         * @summary `stateID`.
         * @public
         * @readonly
         */
        readonly stateID: INTEGER,
        /**
         * @summary `requestResp`.
         * @public
         * @readonly
         */
        readonly requestResp: RequestResponse
    ) {}

    /**
     * @summary Restructures an object into a GSEMngtPdu
     * @description
     * 
     * This takes an `object` and converts it to a `GSEMngtPdu`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GSEMngtPdu`.
     * @returns {GSEMngtPdu}
     */
    public static _from_object (_o: { [_K in keyof (GSEMngtPdu)]: (GSEMngtPdu)[_K] }): GSEMngtPdu {
        return new GSEMngtPdu(_o.stateID, _o.requestResp);
    }


}

/**
 * @summary The Leading Root Component Types of GSEMngtPdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GSEMngtPdu: $.ComponentSpec[] = [
    new $.ComponentSpec("stateID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("requestResp", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of GSEMngtPdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GSEMngtPdu: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GSEMngtPdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GSEMngtPdu: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GSEMngtPdu: $.ASN1Decoder<GSEMngtPdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GSEMngtPdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GSEMngtPdu (el: _Element): GSEMngtPdu {
    if (!_cached_decoder_for_GSEMngtPdu) { _cached_decoder_for_GSEMngtPdu = function (el: _Element): GSEMngtPdu {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GSEMngtPdu contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "stateID";
    sequence[1].name = "requestResp";
    let stateID!: INTEGER;
    let requestResp!: RequestResponse;
    stateID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    requestResp = _decode_RequestResponse(sequence[1]);
    return new GSEMngtPdu(
        stateID,
        requestResp,

    );
}; }
    return _cached_decoder_for_GSEMngtPdu(el);
}

let _cached_encoder_for_GSEMngtPdu: $.ASN1Encoder<GSEMngtPdu> | null = null;

/**
 * @summary Encodes a(n) GSEMngtPdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GSEMngtPdu, encoded as an ASN.1 Element.
 */
export
function _encode_GSEMngtPdu (value: GSEMngtPdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GSEMngtPdu) { _cached_encoder_for_GSEMngtPdu = function (value: GSEMngtPdu, elGetter: $.ASN1Encoder<GSEMngtPdu>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.stateID, $.BER),
            /* REQUIRED   */ _encode_RequestResponse(value.requestResp, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GSEMngtPdu(value, elGetter);
}


/* eslint-enable */
