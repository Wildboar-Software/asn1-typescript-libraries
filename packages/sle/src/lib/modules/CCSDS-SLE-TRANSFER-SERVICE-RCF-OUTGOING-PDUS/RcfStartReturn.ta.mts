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
import { RcfStartReturn_result, _decode_RcfStartReturn_result, _encode_RcfStartReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-OUTGOING-PDUS/RcfStartReturn-result.ta.mjs";
// export { RcfStartReturn_result, _decode_RcfStartReturn_result, _encode_RcfStartReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-OUTGOING-PDUS/RcfStartReturn-result.ta.mjs";


/**
 * @summary RcfStartReturn
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfStartReturn ::= SEQUENCE
 * {   performerCredentials               Credentials
 * ,   invokeId                           InvokeId
 * ,   result                             CHOICE
 *     {   positiveResult                     [0] NULL
 *     ,   negativeResult                     [1] DiagnosticRcfStart
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class RcfStartReturn {
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
    readonly result: RcfStartReturn_result;

    constructor (
        performerCredentials: Credentials,
        invokeId: InvokeId,
        result: RcfStartReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.invokeId = invokeId;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a RcfStartReturn
     * @description
     * 
     * This takes an `object` and converts it to a `RcfStartReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RcfStartReturn`.
     * @returns {RcfStartReturn}
     */
    public static _from_object (_o: { [_K in keyof (RcfStartReturn)]: (RcfStartReturn)[_K] }): RcfStartReturn {
        return new RcfStartReturn(_o.performerCredentials, _o.invokeId, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of RcfStartReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RcfStartReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RcfStartReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RcfStartReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RcfStartReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RcfStartReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RcfStartReturn: $.ASN1Decoder<RcfStartReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfStartReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfStartReturn (el: _Element): RcfStartReturn {
    if (!_cached_decoder_for_RcfStartReturn) { _cached_decoder_for_RcfStartReturn = function (el: _Element): RcfStartReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("RcfStartReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "result";
    let performerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let result!: RcfStartReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    result = _decode_RcfStartReturn_result(sequence[2]);
    return new RcfStartReturn(
        performerCredentials,
        invokeId,
        result,

    );
}; }
    return _cached_decoder_for_RcfStartReturn(el);
}

let _cached_encoder_for_RcfStartReturn: $.ASN1Encoder<RcfStartReturn> | null = null;

/**
 * @summary Encodes a(n) RcfStartReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfStartReturn, encoded as an ASN.1 Element.
 */
export
function _encode_RcfStartReturn (value: RcfStartReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfStartReturn) { _cached_encoder_for_RcfStartReturn = function (value: RcfStartReturn, elGetter: $.ASN1Encoder<RcfStartReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_RcfStartReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RcfStartReturn(value, elGetter);
}


/* eslint-enable */
