/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { FspGetParameterReturn_result, _decode_FspGetParameterReturn_result, _encode_FspGetParameterReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-OUTGOING-PDUS/FspGetParameterReturn-result.ta.mjs";


/**
 * @summary FspGetParameterReturn
 * @description
 *
 * Return from FSP-GET-PARAMETER. A positive result carries the parameter and
 * its current value. A negative result carries only the diagnostic. The
 * provider stays in state 2 (ready) or state 3 (active), whichever it was
 * already in.
 *
 * CCSDS 912.3-B-3, sections 3.10.2 and 3.10.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameterReturn ::= SEQUENCE
 * {  performerCredentials    Credentials
 * ,  invokeId                InvokeId
 * ,  result                  CHOICE
 *    {  positiveResult    [0]   FspGetParameter
 *    ,  negativeResult    [1]   DiagnosticFspGet
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class FspGetParameterReturn {
    /**
     * @summary `performerCredentials`.
     * @description
     * Information with which the invoker authenticates this return. When the
     * agreed level is `all`, every FSP invocation and return except
     * FSP-PEER-ABORT is authenticated; `bind` authenticates only FSP-BIND;
     * `none` leaves every invocation and return unauthenticated. When this
     * return is unauthenticated, the value should be `unused`.
     *
     * CCSDS 912.3-B-3, sections 3.10.2.3 and 3.1.5.
     * @public
     * @readonly
     */
    readonly performerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     * The invoke-ID from the FSP-GET-PARAMETER invocation, unchanged.
     *
     * CCSDS 912.3-B-3, section 3.10.2.4.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `result`.
     * @description
     * `positiveResult` carries the requested parameter and its value.
     * `negativeResult` is a `DiagnosticFspGet`, and the parameter name and
     * value are omitted.
     *
     * CCSDS 912.3-B-3, sections 3.10.2.5, 3.10.2.6, and 3.10.2.7.
     * @public
     * @readonly
     */
    readonly result: FspGetParameterReturn_result;

    constructor (
        performerCredentials: Credentials,
        invokeId: InvokeId,
        result: FspGetParameterReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.invokeId = invokeId;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a FspGetParameterReturn
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameterReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameterReturn`.
     * @returns {FspGetParameterReturn}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameterReturn)]: (FspGetParameterReturn)[_K] }): FspGetParameterReturn {
        return new FspGetParameterReturn(_o.performerCredentials, _o.invokeId, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameterReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameterReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspGetParameterReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameterReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameterReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameterReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameterReturn: $.ASN1Decoder<FspGetParameterReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameterReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameterReturn (el: _Element): FspGetParameterReturn {
    if (!_cached_decoder_for_FspGetParameterReturn) { _cached_decoder_for_FspGetParameterReturn = function (el: _Element): FspGetParameterReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("FspGetParameterReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "result";
    let performerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let result!: FspGetParameterReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    result = _decode_FspGetParameterReturn_result(sequence[2]);
    return new FspGetParameterReturn(
        performerCredentials,
        invokeId,
        result,

    );
}; }
    return _cached_decoder_for_FspGetParameterReturn(el);
}

let _cached_encoder_for_FspGetParameterReturn: $.ASN1Encoder<FspGetParameterReturn> | null = null;

/**
 * @summary Encodes a(n) FspGetParameterReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameterReturn, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameterReturn (value: FspGetParameterReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameterReturn) { _cached_encoder_for_FspGetParameterReturn = function (value: FspGetParameterReturn, _elGetter: $.ASN1Encoder<FspGetParameterReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_FspGetParameterReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameterReturn(value, elGetter);
}


/* eslint-enable */
