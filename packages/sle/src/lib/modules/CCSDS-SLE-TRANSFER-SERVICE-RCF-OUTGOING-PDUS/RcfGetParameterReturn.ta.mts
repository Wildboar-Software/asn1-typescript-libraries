/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { type InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { type RcfGetParameterReturn_result, _decode_RcfGetParameterReturn_result, _encode_RcfGetParameterReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-OUTGOING-PDUS/RcfGetParameterReturn-result.ta.mjs";


/**
 * @summary RcfGetParameterReturn
 * @description
 *
 * The provider's report of RCF-GET-PARAMETER. A positive result returns the
 * requested parameter and its value. A negative result returns a diagnostic
 * and no parameter value. The provider state stays unchanged.
 *
 * CCSDS 911.2-B-4, sections 3.10.2.7 and 3.10.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfGetParameterReturn ::= SEQUENCE
 * {   performerCredentials               Credentials
 * ,   invokeId                           InvokeId
 * ,   result                             CHOICE
 *     {   positiveResult                     [0] RcfGetParameter
 *     ,   negativeResult                     [1] DiagnosticRcfGet
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class RcfGetParameterReturn {
    /**
     * @summary `performerCredentials`.
     * @description
     *
     * Credentials that let the user authenticate this return when the agreed
     * level requires it. When authentication of the return is not required, the
     * value should be 'unused'.
     *
     * CCSDS 911.2-B-4, sections 3.10.2.3 and 3.1.5.
     * @public
     * @readonly
     */
    readonly performerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     *
     * The invoke-ID from the RCF-GET-PARAMETER invocation, returned unchanged.
     *
     * CCSDS 911.2-B-4, sections 3.10.2.4 and 3.1.6.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `result`.
     * @description
     *
     * Positive when the requested parameter value is included. Negative when it
     * is omitted. On a positive result the parameter name is present again in
     * the returned value.
     *
     * CCSDS 911.2-B-4, sections 3.10.2.5, 3.10.2.6, and 3.10.2.7.
     * @public
     * @readonly
     */
    readonly result: RcfGetParameterReturn_result;

    constructor (
        performerCredentials: Credentials,
        invokeId: InvokeId,
        result: RcfGetParameterReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.invokeId = invokeId;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a RcfGetParameterReturn
     * @description
     * 
     * This takes an `object` and converts it to a `RcfGetParameterReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RcfGetParameterReturn`.
     * @returns {RcfGetParameterReturn}
     */
    public static _from_object (_o: { [_K in keyof (RcfGetParameterReturn)]: (RcfGetParameterReturn)[_K] }): RcfGetParameterReturn {
        return new RcfGetParameterReturn(_o.performerCredentials, _o.invokeId, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of RcfGetParameterReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RcfGetParameterReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RcfGetParameterReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RcfGetParameterReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RcfGetParameterReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RcfGetParameterReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RcfGetParameterReturn: $.ASN1Decoder<RcfGetParameterReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfGetParameterReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfGetParameterReturn (el: _Element): RcfGetParameterReturn {
    if (!_cached_decoder_for_RcfGetParameterReturn) { _cached_decoder_for_RcfGetParameterReturn = function (el: _Element): RcfGetParameterReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("RcfGetParameterReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "result";
    let performerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let result!: RcfGetParameterReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    result = _decode_RcfGetParameterReturn_result(sequence[2]);
    return new RcfGetParameterReturn(
        performerCredentials,
        invokeId,
        result,

    );
}; }
    return _cached_decoder_for_RcfGetParameterReturn(el);
}

let _cached_encoder_for_RcfGetParameterReturn: $.ASN1Encoder<RcfGetParameterReturn> | null = null;

/**
 * @summary Encodes a(n) RcfGetParameterReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfGetParameterReturn, encoded as an ASN.1 Element.
 */
export
function _encode_RcfGetParameterReturn (value: RcfGetParameterReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfGetParameterReturn) { _cached_encoder_for_RcfGetParameterReturn = function (value: RcfGetParameterReturn, _elGetter: $.ASN1Encoder<RcfGetParameterReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_RcfGetParameterReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RcfGetParameterReturn(value, elGetter);
}


/* eslint-enable */
