/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { RocfGetParameterReturn_result, _decode_RocfGetParameterReturn_result, _encode_RocfGetParameterReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-OUTGOING-PDUS/RocfGetParameterReturn-result.ta.mjs";


/**
 * @summary RocfGetParameterReturn
 * @description
 * 
 * Provider return for ROCF-GET-PARAMETER. A positive result supplies the
 * requested parameter. A negative result supplies a diagnostic and no
 * parameter value. The provider state stays unchanged.
 *
 * CCSDS 911.5-B-4, sections 3.10.2 and 3.10.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameterReturn ::= SEQUENCE
 * {  performerCredentials    Credentials
 * ,  invokeId                InvokeId
 * ,  result                  CHOICE
 *    {  positiveResult    [0]   RocfGetParameter
 *    ,  negativeResult    [1]   DiagnosticRocfGet
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class RocfGetParameterReturn {
    /**
     * @summary `performerCredentials`.
     * @description
     * 
     * Credentials the invoker uses to authenticate this return. When
     * authentication of the return is not required, the value is unused. The
     * octet layout is the bilaterally agreed algorithm, which this
     * specification leaves unspecified. CCSDS 911.5-B-4, sections 3.1.5 and
     * 3.10.2.3.
     * @public
     * @readonly
     */
    readonly performerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     * 
     * Integer chosen by the invoker. The performer returns it unchanged so the
     * return can be matched to this invocation. A value that duplicates an
     * invoke-ID still awaiting confirmation in this service instance is
     * rejected. CCSDS 911.5-B-4, sections 3.1.6 and 3.10.2.4.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `result`.
     * @description
     * 
     * positiveResult is the parameter named in the invocation and its current
     * value. negativeResult is DiagnosticRocfGet. On a negative result the
     * parameter name and value are omitted.
     *
     * CCSDS 911.5-B-4, sections 3.10.2.5 through 3.10.2.8.
     * @public
     * @readonly
     */
    readonly result: RocfGetParameterReturn_result;

    constructor (
        performerCredentials: Credentials,
        invokeId: InvokeId,
        result: RocfGetParameterReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.invokeId = invokeId;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a RocfGetParameterReturn
     * @description
     * 
     * This takes an `object` and converts it to a `RocfGetParameterReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfGetParameterReturn`.
     * @returns {RocfGetParameterReturn}
     */
    public static _from_object (_o: { [_K in keyof (RocfGetParameterReturn)]: (RocfGetParameterReturn)[_K] }): RocfGetParameterReturn {
        return new RocfGetParameterReturn(_o.performerCredentials, _o.invokeId, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of RocfGetParameterReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfGetParameterReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RocfGetParameterReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfGetParameterReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfGetParameterReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfGetParameterReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfGetParameterReturn: $.ASN1Decoder<RocfGetParameterReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameterReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameterReturn (el: _Element): RocfGetParameterReturn {
    if (!_cached_decoder_for_RocfGetParameterReturn) { _cached_decoder_for_RocfGetParameterReturn = function (el: _Element): RocfGetParameterReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("RocfGetParameterReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "result";
    let performerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let result!: RocfGetParameterReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    result = _decode_RocfGetParameterReturn_result(sequence[2]);
    return new RocfGetParameterReturn(
        performerCredentials,
        invokeId,
        result,

    );
}; }
    return _cached_decoder_for_RocfGetParameterReturn(el);
}

let _cached_encoder_for_RocfGetParameterReturn: $.ASN1Encoder<RocfGetParameterReturn> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameterReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameterReturn, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameterReturn (value: RocfGetParameterReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameterReturn) { _cached_encoder_for_RocfGetParameterReturn = function (value: RocfGetParameterReturn, _elGetter: $.ASN1Encoder<RocfGetParameterReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_RocfGetParameterReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfGetParameterReturn(value, elGetter);
}


/* eslint-enable */
