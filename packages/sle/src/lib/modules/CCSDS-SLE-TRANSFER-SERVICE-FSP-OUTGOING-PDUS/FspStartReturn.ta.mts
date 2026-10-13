/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { FspStartReturn_result, _decode_FspStartReturn_result, _encode_FspStartReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-OUTGOING-PDUS/FspStartReturn-result.ta.mjs";


/**
 * @summary FspStartReturn
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspStartReturn ::= SEQUENCE
 * {  performerCredentials    Credentials
 * ,  invokeId                InvokeId
 * ,  result                  CHOICE
 *    {  positiveResult    [0]   SEQUENCE
 *       {  startProductionTime     Time
 *       ,  stopProductionTime      ConditionalTime
 *       }
 *    ,  negativeResult    [1]   DiagnosticFspStart
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class FspStartReturn {
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
    readonly result: FspStartReturn_result;

    constructor (
        performerCredentials: Credentials,
        invokeId: InvokeId,
        result: FspStartReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.invokeId = invokeId;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a FspStartReturn
     * @description
     * 
     * This takes an `object` and converts it to a `FspStartReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspStartReturn`.
     * @returns {FspStartReturn}
     */
    public static _from_object (_o: { [_K in keyof (FspStartReturn)]: (FspStartReturn)[_K] }): FspStartReturn {
        return new FspStartReturn(_o.performerCredentials, _o.invokeId, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of FspStartReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspStartReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspStartReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspStartReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspStartReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspStartReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspStartReturn: $.ASN1Decoder<FspStartReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspStartReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspStartReturn (el: _Element): FspStartReturn {
    if (!_cached_decoder_for_FspStartReturn) { _cached_decoder_for_FspStartReturn = function (el: _Element): FspStartReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("FspStartReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "result";
    let performerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let result!: FspStartReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    result = _decode_FspStartReturn_result(sequence[2]);
    return new FspStartReturn(
        performerCredentials,
        invokeId,
        result,

    );
}; }
    return _cached_decoder_for_FspStartReturn(el);
}

let _cached_encoder_for_FspStartReturn: $.ASN1Encoder<FspStartReturn> | null = null;

/**
 * @summary Encodes a(n) FspStartReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspStartReturn, encoded as an ASN.1 Element.
 */
export
function _encode_FspStartReturn (value: FspStartReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspStartReturn) { _cached_encoder_for_FspStartReturn = function (value: FspStartReturn, elGetter: $.ASN1Encoder<FspStartReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_FspStartReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspStartReturn(value, elGetter);
}


/* eslint-enable */
