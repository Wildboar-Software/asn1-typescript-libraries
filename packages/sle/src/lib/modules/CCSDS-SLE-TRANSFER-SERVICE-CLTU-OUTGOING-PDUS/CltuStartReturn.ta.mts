/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { type InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { type CltuStartReturn_result, _decode_CltuStartReturn_result, _encode_CltuStartReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-OUTGOING-PDUS/CltuStartReturn-result.ta.mjs";


/**
 * @summary CltuStartReturn
 * @description
 * 
 * Provider report of CLTU-START. A positive result authorizes
 * CLTU-TRANSFER-DATA and supplies the production window. A negative result with
 * diagnostic unable to comply may be retried later in the provision period; if
 * management decides the fault is lasting, the provider may PEER-ABORT. CCSDS
 * 912.1-B-5, section 3.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuStartReturn ::= SEQUENCE
 * {  performerCredentials          Credentials
 * ,  invokeId                      InvokeId
 * ,  result                        CHOICE
 * {  positiveResult                      [0]   SEQUENCE
 *       {  startRadiationTime         Time
 *       ,  stopRadiationTime          ConditionalTime
 *       }
 *    ,  negativeResult                   [1]   DiagnosticCltuStart
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class CltuStartReturn {
    /**
     * @summary `performerCredentials`.
     * @description
     *
     * Credentials that let the invoker authenticate this return when the agreed
     * authentication level requires it. Set this to unused when authentication
     * is not required. CCSDS 912.1-B-5, section 3.1.5.
     * @public
     * @readonly
     */
    readonly performerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     *
     * The invoke-ID from the CLTU-START invocation, returned unchanged. CCSDS
     * 912.1-B-5, sections 3.4.2.4 and 3.1.6.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `result`.
     * @description
     *
     * positiveResult carries start-production-time and stop-production-time.
     * negativeResult carries DiagnosticCltuStart and omits those times. CCSDS
     * 912.1-B-5, sections 3.4.2.6 through 3.4.2.9.
     * @public
     * @readonly
     */
    readonly result: CltuStartReturn_result;

    constructor (
        performerCredentials: Credentials,
        invokeId: InvokeId,
        result: CltuStartReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.invokeId = invokeId;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a CltuStartReturn
     * @description
     * 
     * This takes an `object` and converts it to a `CltuStartReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuStartReturn`.
     * @returns {CltuStartReturn}
     */
    public static _from_object (_o: { [_K in keyof (CltuStartReturn)]: (CltuStartReturn)[_K] }): CltuStartReturn {
        return new CltuStartReturn(_o.performerCredentials, _o.invokeId, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of CltuStartReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuStartReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of CltuStartReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuStartReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuStartReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuStartReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuStartReturn: $.ASN1Decoder<CltuStartReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuStartReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuStartReturn (el: _Element): CltuStartReturn {
    if (!_cached_decoder_for_CltuStartReturn) { _cached_decoder_for_CltuStartReturn = function (el: _Element): CltuStartReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("CltuStartReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "result";
    let performerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let result!: CltuStartReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    result = _decode_CltuStartReturn_result(sequence[2]);
    return new CltuStartReturn(
        performerCredentials,
        invokeId,
        result,

    );
}; }
    return _cached_decoder_for_CltuStartReturn(el);
}

let _cached_encoder_for_CltuStartReturn: $.ASN1Encoder<CltuStartReturn> | null = null;

/**
 * @summary Encodes a(n) CltuStartReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuStartReturn, encoded as an ASN.1 Element.
 */
export
function _encode_CltuStartReturn (value: CltuStartReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuStartReturn) { _cached_encoder_for_CltuStartReturn = function (value: CltuStartReturn, _elGetter: $.ASN1Encoder<CltuStartReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_CltuStartReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuStartReturn(value, elGetter);
}


/* eslint-enable */
