/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { RafGetParameterReturn_result, _decode_RafGetParameterReturn_result, _encode_RafGetParameterReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-OUTGOING-PDUS/RafGetParameterReturn-result.ta.mjs";


/**
 * @summary RafGetParameterReturn
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafGetParameterReturn ::= SEQUENCE
 * {   performerCredentials               Credentials
 * ,   invokeId                           InvokeId
 * ,   result                             CHOICE
 *     {   positiveResult                     [0] RafGetParameter
 *     ,   negativeResult                     [1] DiagnosticRafGet
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class RafGetParameterReturn {
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
    readonly result: RafGetParameterReturn_result;

    constructor (
        performerCredentials: Credentials,
        invokeId: InvokeId,
        result: RafGetParameterReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.invokeId = invokeId;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a RafGetParameterReturn
     * @description
     * 
     * This takes an `object` and converts it to a `RafGetParameterReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RafGetParameterReturn`.
     * @returns {RafGetParameterReturn}
     */
    public static _from_object (_o: { [_K in keyof (RafGetParameterReturn)]: (RafGetParameterReturn)[_K] }): RafGetParameterReturn {
        return new RafGetParameterReturn(_o.performerCredentials, _o.invokeId, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of RafGetParameterReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RafGetParameterReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RafGetParameterReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RafGetParameterReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RafGetParameterReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RafGetParameterReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RafGetParameterReturn: $.ASN1Decoder<RafGetParameterReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafGetParameterReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafGetParameterReturn (el: _Element): RafGetParameterReturn {
    if (!_cached_decoder_for_RafGetParameterReturn) { _cached_decoder_for_RafGetParameterReturn = function (el: _Element): RafGetParameterReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("RafGetParameterReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "result";
    let performerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let result!: RafGetParameterReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    result = _decode_RafGetParameterReturn_result(sequence[2]);
    return new RafGetParameterReturn(
        performerCredentials,
        invokeId,
        result,

    );
}; }
    return _cached_decoder_for_RafGetParameterReturn(el);
}

let _cached_encoder_for_RafGetParameterReturn: $.ASN1Encoder<RafGetParameterReturn> | null = null;

/**
 * @summary Encodes a(n) RafGetParameterReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafGetParameterReturn, encoded as an ASN.1 Element.
 */
export
function _encode_RafGetParameterReturn (value: RafGetParameterReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafGetParameterReturn) { _cached_encoder_for_RafGetParameterReturn = function (value: RafGetParameterReturn, _elGetter: $.ASN1Encoder<RafGetParameterReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_RafGetParameterReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RafGetParameterReturn(value, elGetter);
}


/* eslint-enable */
