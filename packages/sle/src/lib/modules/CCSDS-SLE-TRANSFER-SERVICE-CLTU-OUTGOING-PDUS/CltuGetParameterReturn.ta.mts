/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
// export { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
// export { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { CltuGetParameterReturn_result, _decode_CltuGetParameterReturn_result, _encode_CltuGetParameterReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-OUTGOING-PDUS/CltuGetParameterReturn-result.ta.mjs";
// export { CltuGetParameterReturn_result, _decode_CltuGetParameterReturn_result, _encode_CltuGetParameterReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-OUTGOING-PDUS/CltuGetParameterReturn-result.ta.mjs";


/**
 * @summary CltuGetParameterReturn
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameterReturn ::= SEQUENCE
 * {  performerCredentials          Credentials
 * ,  invokeId                      InvokeId
 * ,  result                        CHOICE
 *    {  positiveResult                   [0]   CltuGetParameter
 *    ,  negativeResult                   [1]   DiagnosticCltuGetParameter
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class CltuGetParameterReturn {
    /**
     * @summary `performerCredentials`.
     * @public
     * @readonly
     */
    readonly performerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `result`.
     * @public
     * @readonly
     */
    readonly result: CltuGetParameterReturn_result;

    constructor (
        performerCredentials: Credentials,
        invokeId: InvokeId,
        result: CltuGetParameterReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.invokeId = invokeId;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a CltuGetParameterReturn
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameterReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameterReturn`.
     * @returns {CltuGetParameterReturn}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameterReturn)]: (CltuGetParameterReturn)[_K] }): CltuGetParameterReturn {
        return new CltuGetParameterReturn(_o.performerCredentials, _o.invokeId, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameterReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameterReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameterReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameterReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameterReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameterReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameterReturn: $.ASN1Decoder<CltuGetParameterReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameterReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameterReturn (el: _Element): CltuGetParameterReturn {
    if (!_cached_decoder_for_CltuGetParameterReturn) { _cached_decoder_for_CltuGetParameterReturn = function (el: _Element): CltuGetParameterReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("CltuGetParameterReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "result";
    let performerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let result!: CltuGetParameterReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    result = _decode_CltuGetParameterReturn_result(sequence[2]);
    return new CltuGetParameterReturn(
        performerCredentials,
        invokeId,
        result,

    );
}; }
    return _cached_decoder_for_CltuGetParameterReturn(el);
}

let _cached_encoder_for_CltuGetParameterReturn: $.ASN1Encoder<CltuGetParameterReturn> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameterReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameterReturn, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameterReturn (value: CltuGetParameterReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameterReturn) { _cached_encoder_for_CltuGetParameterReturn = function (value: CltuGetParameterReturn, elGetter: $.ASN1Encoder<CltuGetParameterReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_CltuGetParameterReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameterReturn(value, elGetter);
}


/* eslint-enable */
